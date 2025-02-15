const fs = require('fs-extra');
const path = require('path');

const SOURCE_DIR = path.join(__dirname, '../../v0.6/docs');
const TARGET_DIR = path.join(__dirname, '../docs');
const TARGET_I18N_DIR = path.join(__dirname, '../i18n');

// Helper function to convert VuePress frontmatter to Docusaurus format
function convertFrontmatter(content, filepath) {
  let sidebar_position = 1;

  // Set sidebar_position based on common filenames
  if (filepath.endsWith('README.md')) {
    sidebar_position = 1;
  } else if (filepath.includes('introduction.md')) {
    sidebar_position = 2;
  } else if (filepath.includes('quick-start.md')) {
    sidebar_position = 3;
  }

  return content
    .replace(/---\n([\s\S]*?)---/, (match, frontmatter) => {
      const newFrontmatter = frontmatter
        .replace(/sidebar: auto/g, `sidebar_position: ${sidebar_position}`)
        .replace(/sidebarDepth: \d+/g, '')
        .replace(/prev: (.*)/g, 'pagination_prev: $1')
        .replace(/next: (.*)/g, 'pagination_next: $1');
      return `---\n${newFrontmatter}---`;
    });
}

// Helper function to convert VuePress specific syntax to Docusaurus
function convertContent(content) {
  return content
    // Convert VuePress container syntax
    .replace(/::: tip/g, ':::tip')
    .replace(/::: warning/g, ':::warning')
    .replace(/::: danger/g, ':::danger')
    .replace(/:::/g, ':::')
    // Convert VuePress specific components
    .replace(/<ClientOnly>/g, '')
    .replace(/<\/ClientOnly>/g, '')
    // Convert image paths
    .replace(/!\[([^\]]*)\]\(\.\.\/\.vuepress\/public\/([^\)]+)\)/g, '![$1](/img/$2)')
    // Remove Vue template syntax
    .replace(/\{\{.*?\}\}/g, '');
}

function copyDirectory(source, target, isEnglish = false) {
  try {
    // Ensure target directory exists before processing
    fs.ensureDirSync(target);
    const items = fs.readdirSync(source);

    for (const item of items) {
      const sourcePath = path.join(source, item);
      const targetPath = path.join(target, item);
      const stat = fs.statSync(sourcePath);

      if (stat.isDirectory()) {
        fs.ensureDirSync(targetPath);
        copyDirectory(sourcePath, targetPath, isEnglish);
      } else if (item.endsWith('.md')) {
        let content = fs.readFileSync(sourcePath, 'utf8');
        content = convertContent(convertFrontmatter(content, sourcePath));

        // Handle README.md files
        const targetFile = item === 'README.md' ? 'index.md' : item;
        fs.writeFileSync(path.join(target, targetFile), content);
      }
    }
  } catch (error) {
    console.error(`Error processing ${source}:`, error);
  }
}

function migrateFiles() {
  try {
    // Clear target directories first
    fs.emptyDirSync(TARGET_DIR);
    fs.emptyDirSync(path.join(TARGET_I18N_DIR, 'zh'));

    // Migrate English docs (default locale)
    const enSourceDir = path.join(SOURCE_DIR, 'en');
    copyDirectory(enSourceDir, TARGET_DIR);

    // Migrate English docs
    const zhSourceDir = path.join(SOURCE_DIR, 'zh');
    const zhTargetDir = path.join(TARGET_I18N_DIR, 'en/docusaurus-plugin-content-docs/current');
    copyDirectory(zhSourceDir, zhTargetDir, true);

    // Copy static assets
    fs.copySync(path.join(SOURCE_DIR, '.vuepress/public'), path.join(__dirname, '../static'), { overwrite: true });

    console.log('Migration completed successfully!');
  } catch (error) {
    console.error('Migration failed:', error);
  }
}

migrateFiles();