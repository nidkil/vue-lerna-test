const path = require('path')

module.exports = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'dist': path.resolve(__dirname, 'dist'),
      'root': path.resolve(__dirname)
    }
  }
}
