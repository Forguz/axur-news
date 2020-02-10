const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    historyApiFallback: true,
    open: 'http://localhost:8080/',
    hot: true,
    host: '0.0.0.0', // para poder acessar em qualquer dispositivo na rede local
    compress: true,
  },
});
