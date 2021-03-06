let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let autoprefixer  = require('autoprefixer');


module.exports = {
  devtool: 'eval-source-map',

  entry: `${__dirname}/application/assets/app.js`,
  output: {
    path: `${__dirname}/static/`,
    filename: 'js/[name].[hash].js'
  },

  module: {
    loaders: [
      {test: /\.json$/, loader: 'json'},
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      {
        test: /\.sass|.scss|.css$/,
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader?importLoaders=1!postcss-loader!sass-loader'
        })
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/application/template/index.html`
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin({
      filename: 'css/[name].[hash].css',
      allChunks: true
    }),
    new webpack.LoaderOptionsPlugin({
      debug: true,
      minimize: true,
      options: {
        postcss: [
          autoprefixer({
            browsers: ['last 4 version']
          })
        ]
      }
    })
  ],

  devServer: {
    contentBase: "./public",
    historyApiFallback: true,
    inline: true,
    hot: true
  },
}