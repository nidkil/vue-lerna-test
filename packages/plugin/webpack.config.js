const path = require('path')

module.exports = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'dist': path.resolve(__dirname, 'dist'),
      'plugin': path.resolve(__dirname, 'plugin'),
      'root': path.resolve(__dirname)
    }
  }
}
