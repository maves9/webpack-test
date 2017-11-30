const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname+'/src/',
    filename: 'main.js'
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      { test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  },
  plugins: [
    new ExtractTextPlugin('main.css')
  ]
}
