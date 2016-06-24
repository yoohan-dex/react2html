const StaticSitePlugin = require('static-site-generator-webpack-plugin');
const data = {
  title:'hello react'
}
module.exports = {
  entry: './app.js',

  output: {
    filename:'bundle.js',
    path:__dirname,
    libraryTarget: 'umd'
  },
  module:{
    loaders:[
      {
        test:/\.(js|jsx)$/,
        loader:'babel',
        exclude:/node_module/,
        query:{
          presets:['es2016','react']
        }
      },

    ]
  },
  resolve:{
    modules:['app','node_module'],
    extensions:[
      '',
      '.js',
      '.jsx',
    ],
    packageMains:[
      'jsnext:main',
      'main',
    ]
  },

  plugins: [
    new StaticSitePlugin('bundle.js','/build',data)
  ]
}