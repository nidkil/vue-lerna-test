const path = require('path')

module.exports = {
  chainWebpack: config => {
    config
      .resolve
      .alias
      .set('@', path.resolve(__dirname, 'src'))
      .set('dist', path.resolve(__dirname, 'dist'))
      .set('plugin', path.resolve(__dirname, 'plugin'))
      .set('root', path.resolve(__dirname))
  }
}
