var webpack = require('webpack');
const path = require('path');

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === 'development';

  if(!isDevelopment) {
    console.error("There is no prod build script. Only version bumping.");
    return;
  }

  return {
    mode: isDevelopment ? 'development' : 'production',
    entry: './src/demo.js',
    output:
    {
      path: path.resolve(__dirname, 'public'),
      filename: 'bundle.js'
    },
    devServer: {
      static: './public',
      port: 1337,
      compress: isDevelopment,
      hot: isDevelopment,
      liveReload: isDevelopment,
      open: true
    },
    plugins: (isDevelopment ? [new webpack.HotModuleReplacementPlugin()]: []),
  }
};