const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const config = require('./base')
const { buildPath, packageName } = require('./utils')

config.mode('production')
  .output.path(buildPath)
    .filename('[name].min.js')
    .library(packageName)
    .libraryTarget('umd')
    .libraryExport('default')
    .end()

config.optimization.minimizer('terser').use(TerserPlugin).end()

config
  .plugin('clean')
    .use(CleanWebpackPlugin)
    .end()

module.exports = config.toConfig()
