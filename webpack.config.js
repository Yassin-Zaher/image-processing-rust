const path = require('path')
const HTMLWebPackPlugin = require('html-webpack-plugin')

module.exports = {
      entry: './public/main.js',
      output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'index.js'
      },
      plugins: [
            new HTMLWebPackPlugin({
                  template: './public/index.html'
            })
      ]
}