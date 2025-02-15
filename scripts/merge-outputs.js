const fs = require('fs-extra');
const path = require('path');

async function mergeOutputs() {
  try {
    // 确保输出目录存在
    await fs.ensureDir('dist');

    // 复制 v0.7 (Docusaurus) 的输出
    await fs.copy(
      path.join(__dirname, '../packages/v0.7/build'),
      path.join(__dirname, '../dist')
    );

    // 复制 v0.6 (VuePress) 的输出到 /v0.6 子目录
    await fs.copy(
      path.join(__dirname, '../packages/v0.6/docs/.vuepress/dist'),
      path.join(__dirname, '../dist/v0.6')
    );

    console.log('Successfully merged build outputs');
  } catch (err) {
    console.error('Error merging outputs:', err);
    process.exit(1);
  }
}

mergeOutputs();