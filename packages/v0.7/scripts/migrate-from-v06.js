const fs = require('fs-extra');
const path = require('path');

const SOURCE_DIR = path.join(__dirname, '../../v0.6/docs');
const TARGET_DIR = path.join(__dirname, '../docs');
const TARGET_I18N_DIR = path.join(__dirname, '../i18n');
const STATIC_IMG_DIR = path.join(__dirname, '../static/img');

// Helper function to convert VuePress frontmatter to Docusaurus format
function convertFrontmatter(content, filepath) {
  let sidebar_position = 1;

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

// Helper function to get section name from file path
function getSectionFromPath(filePath) {
  const relativePath = path.relative(SOURCE_DIR, filePath);
  const parts = relativePath.split(path.sep);
  // Skip locale (en/zh) and get the section name
  return parts.length > 1 ? parts[1] : 'common';
}

// Helper function to handle image migration
function migrateImage(imgPath, sourceMdPath) {
  const section = getSectionFromPath(sourceMdPath);
  const imgName = path.basename(imgPath);
  const targetImgPath = path.join(STATIC_IMG_DIR, section, imgName);

  // Ensure target directory exists
  fs.ensureDirSync(path.dirname(targetImgPath));

  // Copy image if it exists
  const sourceImgPath = path.resolve(path.dirname(sourceMdPath), imgPath);
  if (fs.existsSync(sourceImgPath)) {
    fs.copySync(sourceImgPath, targetImgPath);
    // Return the new path for use in markdown
    return `/img/${section}/${imgName}`;
  }
  return imgPath; // Return original path if image not found
}

// Helper function to convert content and handle image paths
function convertContent(content, sourcePath) {
  let convertedContent = content
    // Convert VuePress container syntax
    .replace(/::: tip/g, ':::tip')
    .replace(/::: warning/g, ':::warning')
    .replace(/::: danger/g, ':::danger')
    .replace(/:::/g, ':::')
    // Convert VuePress specific components
    .replace(/<ClientOnly>/g, '')
    .replace(/<\/ClientOnly>/g, '')
    // Remove Vue template syntax
    .replace(/\{\{.*?\}\}/g, '');

  // Handle image paths
  convertedContent = convertedContent.replace(
    /!\[([^\]]*)\]\(([^)]+)\)/g,
    (match, alt, imgPath) => {
      // Skip external URLs
      if (imgPath.startsWith('http')) {
        return match;
      }

      // Handle relative image paths
      if (imgPath.includes('img/')) {
        const newPath = migrateImage(imgPath, sourcePath);
        return `![${alt}](${newPath})`;
      }

      // Handle .vuepress/public images
      if (imgPath.includes('.vuepress/public/')) {
        const imgName = path.basename(imgPath);
        return `![${alt}](/img/common/${imgName})`;
      }

      return match;
    }
  );

  return convertedContent;
}

// Helper function to migrate all images from a directory
function migrateImagesFromDirectory(source) {
  const section = getSectionFromPath(source);
  const imgDir = path.join(source, 'img');

  if (fs.existsSync(imgDir)) {
    const targetDir = path.join(STATIC_IMG_DIR, section);
    fs.ensureDirSync(targetDir);

    // Copy all images from the img directory
    fs.readdirSync(imgDir).forEach(file => {
      const sourcePath = path.join(imgDir, file);
      const targetPath = path.join(targetDir, file);
      if (fs.statSync(sourcePath).isFile()) {
        fs.copySync(sourcePath, targetPath);
      }
    });
  }
}

function copyDirectory(source, target, isZh = false) {
  try {
    fs.ensureDirSync(target);
    const items = fs.readdirSync(source);

    // First, migrate any images in the current directory
    migrateImagesFromDirectory(source);

    for (const item of items) {
      const sourcePath = path.join(source, item);
      const targetPath = path.join(target, item);
      const stat = fs.statSync(sourcePath);

      if (stat.isDirectory() && item !== 'img') {
        fs.ensureDirSync(targetPath);
        copyDirectory(sourcePath, targetPath, isZh);
      } else if (item.endsWith('.md')) {
        let content = fs.readFileSync(sourcePath, 'utf8');
        content = convertContent(convertFrontmatter(content, sourcePath), sourcePath);

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
    fs.emptyDirSync(path.join(TARGET_I18N_DIR, 'zh-CN'));
    fs.emptyDirSync(STATIC_IMG_DIR);

    // Create static/img directory structure
    fs.ensureDirSync(STATIC_IMG_DIR);

    // Copy public assets to common folder
    const vuepressPublicDir = path.join(SOURCE_DIR, '.vuepress/public');
    if (fs.existsSync(vuepressPublicDir)) {
      const commonImgDir = path.join(STATIC_IMG_DIR, 'common');
      fs.ensureDirSync(commonImgDir);
      fs.copySync(vuepressPublicDir, commonImgDir, { overwrite: true });
    }

    // Migrate English docs (default locale)
    const enSourceDir = path.join(SOURCE_DIR, 'en');
    copyDirectory(enSourceDir, TARGET_DIR);

    // Migrate Chinese docs
    const zhSourceDir = path.join(SOURCE_DIR, 'zh');
    const zhTargetDir = path.join(TARGET_I18N_DIR, 'zh-CN/docusaurus-plugin-content-docs/current');
    copyDirectory(zhSourceDir, zhTargetDir, true);

    console.log('Migration completed successfully!');
  } catch (error) {
    console.error('Migration failed:', error);
  }
}

migrateFiles();