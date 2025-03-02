const dotenv = require('@dotenvx/dotenvx');
const fs = require('fs-extra');
const path = require('path');
const OpenAI = require('openai');
const cliProgress = require('cli-progress');

// Load environment variables
dotenv.config({ override: true });

// Configuration
const DOCS_DIR = path.join(__dirname, '../docs');
const I18N_DIR = path.join(__dirname, '../i18n/zh/docusaurus-plugin-content-docs/current');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.OPENAI_BASE_URL,
});

// Token tracking initialization
const usageTracker = {
  totalTokens: 0,
  totalRequests: 0,
  tokenUsageMap: new Map(),
};

async function translateText(text) {
  try {
    const response = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL_NAME,
      messages: [{
        role: 'user',
        content: `Translate this technical documentation to Chinese while:
1. Keeping technical terms in English
2. Preserving Markdown formatting
3. Translate the titles in the frontmatter
4. Not modifying code blocks
5. Using Chinese for UI elements (e.g. "Click 按钮")
6. Keeping links unchanged
7. Return the content without any other unnecessary text or comments

You should also follow the translation mappings:
- Node: 节点
- Project: 项目
- Spider: 爬虫
- Schedule: 定时任务
- Task: 任务
- Crawlab Pro: Crawlab 专业版

Original text:
${text}`,
      }],
      temperature: 0.3,
    });

    // Ensure response contains valid usage data
    if (!response.usage || !response.choices[0]?.message?.content) {
      throw new Error('Invalid API response structure');
    }

    return {
      content: response.choices[0].message.content,
      tokens: response.usage.total_tokens,
    };
  } catch (error) {
    console.error('Translation error:', error.message);
    return null;
  }
}

async function processFile(filePath) {
  const relativePath = path.relative(DOCS_DIR, filePath);
  const targetPath = path.join(I18N_DIR, relativePath);

  // Skip existing translations
  if (fs.existsSync(targetPath)) {
    console.log(`⏩ Skipping existing: ${relativePath}`);
    return;
  }

  console.log(`🟡 Starting translation: ${relativePath}`);

  const content = fs.readFileSync(filePath, 'utf-8');

  // Preserve frontmatter
  const frontmatterMatch = content.match(/^---\n[\s\S]*?\n---/);
  let frontmatter = '';
  let body = content;

  if (frontmatterMatch) {
    frontmatter = frontmatterMatch[0];
    body = content.slice(frontmatter.length);
  }

  // Translate main content
  const translationResult = await translateText(body);
  if (!translationResult) return;

  // Extract translated H1 title from content
  const h1Match = translationResult.content.match(/^#\s+(.+)/m);
  const translatedH1 = h1Match ? h1Match[1].trim() : '';

  // Process frontmatter
  let translatedFrontmatter = frontmatter;
  if (frontmatter) {
    // Update title with translated H1 if original title was English
    translatedFrontmatter = frontmatter
      .replace(/^title: (.*)$/m, (_, title) => {
        const isEnglish = !/[\u4e00-\u9fa5]/.test(title);
        return isEnglish ? `title: ${translatedH1}` : `title: ${title}`;
      });
  } else {
    // Create new frontmatter with translated H1
    translatedFrontmatter = `---
title: ${translatedH1}
---`;
  }

  // Remove H1 removal and keep it in content
  const translatedBody = translationResult.content;

  // Ensure directory exists
  fs.ensureDirSync(path.dirname(targetPath));

  // Write translated file
  fs.writeFileSync(targetPath, `${translatedFrontmatter}\n\n${translatedBody}`);

  // Show immediate token usage for this document
  console.log(`✅ Translated: ${relativePath} (${translationResult.tokens} tokens)`);

  // Record token usage for this file
  usageTracker.tokenUsageMap.set(relativePath, translationResult.tokens);

  // Update total tokens and total requests
  usageTracker.totalTokens += translationResult.tokens;
  usageTracker.totalRequests += 1;
}

async function main() {
  // Reset tracker
  usageTracker.totalTokens = 0;
  usageTracker.totalRequests = 0;
  usageTracker.tokenUsageMap.clear();

  console.log('🚀 Starting documentation translation...');

  // Process all Markdown files
  const files = fs.readdirSync(DOCS_DIR, {
    recursive: true,
    encoding: 'utf-8',
  }).filter(file => file.endsWith('.md') || file.endsWith('.mdx'));

  // Create progress bar
  const progressBar = new cliProgress.SingleBar({
    format: '🔄 Progress |{bar}| {percentage}% | {value}/{total} Files | ETA: {eta_formatted}',
    barCompleteChar: '█',
    barIncompleteChar: '░',
    hideCursor: true,
  });
  progressBar.start(files.length, 0);

  const CONCURRENCY = 16;

  // Create worker pool
  const worker = async () => {
    while (files.length) {
      const file = files.shift();
      if (file) {
        try {
          await processFile(path.join(DOCS_DIR, file));
        } catch (error) {
          console.error(`\n❌ Error processing ${file}:`, error.message);
        } finally {
          progressBar.increment();
        }
      }
    }
  };

  // Start concurrent workers
  const workers = Array.from({ length: CONCURRENCY }, () => worker());
  await Promise.all(workers);

  progressBar.stop();
  console.log('\n🎉 Translation completed!');
  console.log(`📂 Output directory: ${I18N_DIR}`);
  console.log('\n📊 Usage Statistics:');
  console.log(`- Total tokens used: ${usageTracker.totalTokens}`);
  console.log(`- Total API requests: ${usageTracker.totalRequests}`);
}

(async function() {
  await main();
})();