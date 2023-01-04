const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const webpack = require('webpack')

module.exports = {
  entry: {
    app: './main.js'
  },
  devServer: {
    contentBase: './dist',
    liveReload: false,
    hot: false
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      ENABLE_LOCAL: false,
      ENABLE_GITHUB: true,
      GITHUB_APP_NAME: 'Adv360ProApp',
      //API_BASE_URL: 'http://localhost:8080', // local url
      //APP_BASE_URL: 'http://localhost:8080' // local url
      API_BASE_URL: 'https://adv360-pro-api.herokuapp.com', // prod. values
      APP_BASE_URL: 'https://kinesiscorporation.github.io/Adv360-Pro-GUI' // prod. values
    }),
    new HtmlWebpackPlugin({ template: 'index.html' }),
    new VueLoaderPlugin()
  ]
}
