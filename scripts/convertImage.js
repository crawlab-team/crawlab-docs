const fs = require('fs')
const path = require('path')
const {ArgumentParser} = require('argparse')
const sharp = require('sharp')
const walkSync = require('walk-sync')

// argument parser
const parser = new ArgumentParser({
  description: 'Convert image'
});
parser.add_argument('-i', '--input')
parser.add_argument('-o', '--output')
parser.add_argument('-t', '--type')
parser.add_argument('-W', '--width')
parser.add_argument('-H', '--height')
const args = parser.parse_args()

function convertFile(filePath, targetPath, targetType, resize) {
  // sharp
  const res = sharp(filePath)

  // resize
  if (resize) res.resize(resize)

  // to file
  return res.toFile(targetPath, {
    compressionLevel: 0,
  })
}

function main(args) {
  // arguments

  // skip if param is empty
  if (!args.input) return

  // input path
  const inputPath = args.input

  // skip if input path not exist
  if (!fs.existsSync(inputPath)) return

  // target type
  const targetType = args.type || 'png'

  // target path
  const targetPath = args.output

  // stat
  const stat = fs.statSync(inputPath)

  // width/height
  const width = args.width ? Number(args.width) : undefined
  const height = args.height ? Number(args.height) : undefined

  // resize
  const resize = ((width && !isNaN(width)) || (height && !isNaN(height))) ? {width, height} : undefined

  if (stat.isFile()) {
    convertFile(inputPath, targetPath, targetType, resize)
  }
}

main(args)
