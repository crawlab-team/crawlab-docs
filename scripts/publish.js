const path = require('path')
const qiniu = require('qiniu')
const walkSync = require('walk-sync')

// target directory
const targetDir = './docs/.vuepress/dist'

// access key
const accessKey = process.env.QINIU_ACCESS_KEY

// secret key
const secretKey = process.env.QINIU_SECRET_KEY

// bucket
const bucket = process.env.QINIU_BUCKET

// config
const config = new qiniu.conf.Config()

// zone
config.zone = qiniu.zone[process.env.QINIU_ZONE]

// mac
const mac = new qiniu.auth.digest.Mac(accessKey, secretKey)

// options
const options = {
  scope: bucket,
  force: true,
}

// put policy
const putPolicy = new qiniu.rs.PutPolicy(options)

// upload token
const uploadToken = putPolicy.uploadToken(mac)

function uploadFile(localFile, key) {
  return new Promise((resolve, reject) => {
    const formUploader = new qiniu.form_up.FormUploader(config)
    const putExtra = new qiniu.form_up.PutExtra()
    formUploader.putFile(uploadToken, key, localFile, putExtra, function (respErr,
                                                                          respBody, respInfo) {
      if (respErr) {
        throw respErr
      }
      if (respInfo.statusCode === 200) {
        console.log(`uploaded ${localFile} => ${key}`)
        resolve()
      } else {
        console.error(respInfo.statusCode)
        console.error(respBody)
        reject(new Error(respBody))
      }
    })
  })
}

async function main() {
  // paths
  const paths = walkSync(targetDir, {
    includeBasePath: true,
    directories: false,
  })

  // iterate paths
  for (const filePath of paths) {
    const localFile = path.resolve(filePath)
    const key = filePath.replace(targetDir + '/', '')
    try {
      await uploadFile(localFile, key)
    } catch (e) {
      console.error(e)
    }
  }
}

(async() => {
  await main()
})()
