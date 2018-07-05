var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../lib'),
    publicPath: '/lib/',
    filename: 'loon-ui.js',
    library: 'LoonUi',
    libraryTarget: 'umd',
    umdNamedDefine: true
  }
}
