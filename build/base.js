const Config = require('webpack-chain')
const { testPath, sourcePath, packageName, resolve } = require('./utils')

const config = new Config()

config.entry(packageName).add(resolve('src/index.ts')).end()

config.module
  .rule('compile')
  .test(/\.([tj])s$/)
    .include
    .add(sourcePath)
    .add(testPath)
    .end()
  .use('babel')
    .loader('babel-loader')
    .options({
      presets: [['@babel/preset-env', { modules: false }]]
    })
    .end()
  .use('ts-loader')
    .loader('ts-loader')
    .end()

config.resolve.extensions.add('.ts').add('.js').end()

module.exports = config
