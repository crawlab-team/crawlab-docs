const fs = require('fs')
const path = require('path')
const qs = require('qs')
const md5 = require('md5')
const walkSync = require('walk-sync')
const axios = require('axios')
const dotenv = require('dotenv')

// env config
if (fs.existsSync('.env.local')) {
  dotenv.config({ path: '.env.local' })
} else {
  dotenv.config()
}

// api endpoint
const apiEndpoint = 'https://fanyi-api.baidu.com/api/trans/vip/translate'

// api credentials
const appId = process.env.BAIDU_FANYI_APP_ID
const appSecret = process.env.BAIDU_FANYI_APP_SECRET

// language code
const lang = process.argv.length > 2 ? process.argv[2] : 'zh'

// target directory
const targetDir = './docs'

// ignore
const ignore = [
  '.vuepress',
  'img',
  'zh',
]

// globs
const globs = [
  '**/*.md',
]

function getFileContent(filePath) {
  const f = fs.readFileSync(filePath)
  return f.toString('utf-8')
}

function getRequestCookie() {
  if (fs.existsSync('.cookie.local')) {
    const f = fs.readFileSync('.cookies.local')
    return f.toString('utf-8')
  }
}

async function getTranslation(content) {
  content = encodeURIComponent(content)
  const url = `${apiEndpoint}`
  const salt = Math.round(Math.random() * 1e9).toString()
  const sign = getSign(appId, appSecret, content, salt)
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
  const data = {
    q: content,
    from: 'auto',
    to: lang,
    appid: appId,
    salt,
    sign,
  }
  const options = {
    url,
    method: 'POST',
    data: qs.stringify(data),
    headers,
    // transformRequest: [function (data) {
    //   const ret = []
    //   for (let key in data) {
    //     ret.push(`${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    //   }
    //   return ret.join('&')
    // }]
  }

  try {
    // perform request
    const res = await axios.request(options)
    if (!res.data || res.data.error_code) {
      console.error(`error_code: ${res.data.error_code}. error_msg: ${res.data.error_msg}`)
      return
    }

    // raw translated content
    const rawTranslatedContent = res.data.trans_result[0].dst

    // unescape
    const translatedContent = unescape(rawTranslatedContent)

    // success
    return translatedContent
  } catch (e) {
    console.error(e)
  }
}

function getSign(appId, appSecret, q, salt) {
  return md5(appId + q + salt + appSecret)
}

function saveContent(filePath, content) {
  const { dir: dirPath } = path.parse(filePath)
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true })
  }
  fs.writeFileSync(filePath, content)
}

async function run() {
  // paths
  const paths = walkSync(targetDir, {
    globs,
    ignore,
    includeBasePath: true,
    directories: false,
  })

  let i = 0
  for (let filePath of paths) {
    const content = getFileContent(filePath)

    // skip redirect page
    if (content.match(/(?:window\.)?location\.href\s+=/)) {
      continue
    }

    // skip under construction
    if (content.match(/:construction: Under construction/)) {
      continue
    }

    // get translated content
    const translatedContent = await getTranslation(content)

    // skip if empty content
    if (!translatedContent) return

    // save translated content
    const targetPath = path.join('.docs', filePath.replace(targetDir, ''))
    saveContent(targetPath, translatedContent)

    i++
    if (i === 10) break
  }
}

(async function () {
  await run()
})()
