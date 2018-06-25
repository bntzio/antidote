const path = require('path')
const { exec } = require('@freebroccolo/shelljs-promises')

const glue = (pkgName) => {
  const nodeModules = path.resolve(__dirname, './../node_modules')
  const srcFiles = path.resolve(__dirname, './../src')
  const opts = { silent: true }

  return new Promise((resolve, reject) => {
    exec(`cp -rf ${srcFiles}/${pkgName} ${nodeModules}`, opts).then(result => {
      if (result.code === 0) return resolve('\n📦✨ Successfully fixed package!')
      if (result.code === 1) return reject(`\n🔥 Error => ${result.stderr}`) /* eslint-disable-line */
    }).catch(e => e)
  })
}

module.exports = glue
