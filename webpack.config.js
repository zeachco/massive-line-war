var path = require('path');
var dirs = {
  public: 'public',
  app: 'app',
  bundleName: 'bundle.js'
};
// Plugins
var WebpackNotifierPlugin = require('webpack-notifier');
var LiveReloadPlugin = require('webpack-livereload-plugin');
var plugins = [
  new WebpackNotifierPlugin(),
  new LiveReloadPlugin()
];

// Server
var devServer = {
  contentBase: dirs.public,
  port: 3000,
  host: '0.0.0.0',
  hot: true
};

var prefixer = '!autoprefixer-loader?browsers=last 2 versions';

// Loaders
var loaders = [{
  test: /\.css$/,
  loader: 'style!css' + prefixer
}, {
  test: /\.scss$/,
  loader: 'style!css' + prefixer + '!sass'
}, {
  test: /\.js$/,
  exclude: /node_modules/,
  loader: 'babel-loader'
}, {
  test: /\.html$/,
  loader: 'ng-cache?prefix=[dir]/[dir]'
}, {
  test: /\.png$/,
  loader: 'url?name=img/[name].[ext]&mimetype=image/png'
}, {
  test: /\.gif$/,
  loader: 'url?name=img/[name].[ext]&mimetype=image/gif'
}, {
  test: /\.js$/,
  loader: 'eslint-loader',
  exclude: /node_modules/
}];

module.exports = {
  resolve: {
    root: path.resolve('./app'),
    extensions: ['', '.webpack.js', '.web.js', '.js']
  },
  devtool: 'source-map',
  context: __dirname + '/app',
  entry: path.resolve(__dirname, dirs.app),
  devServer: devServer,
  output: {
    path: path.resolve(__dirname, devServer.contentBase),
    filename: dirs.bundleName
  },
  module: {
    loaders: loaders
  },
  plugins: plugins
};
