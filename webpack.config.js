module.exports = function (webpackConfig, env) {
  webpackConfig.module.rules = [{
   enforce: 'pre',
   test: /\.(js)$/,
   loader: 'eslint-loader',
   exclude: /node_modules/,
   options: {
     formatter: require('eslint-friendly-formatter'),
   }
 }]
 return webpackConfig
}
