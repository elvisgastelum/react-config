const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const htmlPlugin = new htmlWebpackPlugin({
  template: './public/index.html',
  filename: './index.html'
})

module.exports = {
  entry:"./src/index.js",
  output:{
      path: path.join(__dirname,'build'),
      filename:"bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_mudules/,
        use: ["babel-loader"]
      }
    ]
  },
  devServer: {
      contentBase: path.join(__dirname,'public'),
      hot: true
  },
  plugins: [htmlPlugin]
};