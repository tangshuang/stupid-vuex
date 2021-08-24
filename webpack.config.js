module.exports = {
  mode: 'production',
  entry: __dirname + '/src/index.js',
  output: {
    path: __dirname,
    filename: 'index.js',
    library: 'stupid-vuex',
    libraryTarget: 'umd',
  },
  externals: [
    'vue',
  ],
}
