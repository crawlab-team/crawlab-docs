const fs = require('fs')
const path = require('path')
const walkSync = require('walk-sync')

// target directory
const sourceDir = './docs'

// ignore
const ignore = [
  '.vuepress',
]

// globs
const globs = [
  '**/img/*.png',
  '**/img/*.jpg',
  '**/img/*.jpeg',
  '**/img/*.svg',
]

function copyFile(sourceFilePath, targetFilePath) {
  const targetDir = path.dirname(targetFilePath)
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true })
  }
  fs.copyFileSync(sourceFilePath, targetFilePath)
}

function main() {
  // paths
  const paths = walkSync(sourceDir, {
    globs,
    ignore,
    includeBasePath: false,
    directories: false,
  })

  for (const filePath of paths) {
    const sourceFilePath = path.join(sourceDir, filePath)
    const targetFilePath = path.join('./docs/.vuepress/public/assets/img', filePath)
    copyFile(sourceFilePath, targetFilePath)
  }
}

main()
