const dotenv = require('@dotenvx/dotenvx');
const fs = require('fs-extra');
const path = require('path');
const OpenAI = require('openai');

// Load environment variables
dotenv.config({override: true});

// Configuration
const DOCS_DIR = path.join(__dirname, '../docs');
const I18N_DIR = path.join(__dirname, '../i18n/zh-Hans/docusaurus-plugin-content-docs/current');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.OPENAI_BASE_URL,
});

// Token tracking initialization
const usageTracker = {
  totalTokens: 0,
  totalRequests: 0,
  tokenUsageMap: new Map()
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
3. Maintaining frontmatter structure
4. Not modifying code blocks
5. Using Chinese for UI elements (e.g. "Click 按钮")
6. Keeping links unchanged
7. Need to translate the title in the frontmatter
8. Return the content without any other unnecessary text or comments

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

  // Show immediate token usage for this document
  console.log(`✅ Translated: ${relativePath} (${translationResult.tokens} tokens)`);
  
  // Record token usage for this file
  usageTracker.tokenUsageMap.set(relativePath, translationResult.tokens);

  // Process frontmatter
  const translatedFrontmatter = frontmatter
    .replace(/^title: (.*)$/m, (_, title) => {
      const hasChinese = /[\u4e00-\u9fa5]/.test(title);
      return hasChinese ? `title: ${title}` : `title: ${title}`;
    })
    .replace(/^sidebar_label: (.*)$/m, 'sidebar_label: 翻译侧边栏标签');

  // Ensure directory exists
  fs.ensureDirSync(path.dirname(targetPath));

  // Write translated file
  fs.writeFileSync(targetPath, `${translatedFrontmatter}\n\n${translationResult.content}`);
}

async function main() {
  // Reset tracker
  usageTracker.totalTokens = 0;
  usageTracker.totalRequests = 0;
  usageTracker.tokenUsageMap.clear();

  console.log('🚀 Starting documentation translation...');
  let processedCount = 0;

  // Process all Markdown files with concurrency
  const files = fs.readdirSync(DOCS_DIR, {
    recursive: true,
    encoding: 'utf-8',
  }).filter(file => file.endsWith('.md'));

  const CONCURRENCY = 5;
  const batches = [];
  
  // Create batches of files
  for (let i = 0; i < files.length; i += CONCURRENCY) {
    batches.push(files.slice(i, i + CONCURRENCY));
  }

  // Process batches with progress
  for (const [index, batch] of batches.entries()) {
    console.log(`📦 Processing batch ${index + 1}/${batches.length}`);
    
    await Promise.all(
      batch.map(file => 
        processFile(path.join(DOCS_DIR, file))
          .then(() => {
            processedCount++;
            console.log(`📊 Progress: ${processedCount}/${files.length} files`);
          })
      )
    );
  }

  console.log('🎉 Translation completed!');
  console.log(`📂 Output directory: ${I18N_DIR}`);
  console.log('\n📊 Usage Statistics:');
  console.log(`- Total tokens used: ${usageTracker.totalTokens}`);
  console.log(`- Total API requests: ${usageTracker.totalRequests}`);
}

main();