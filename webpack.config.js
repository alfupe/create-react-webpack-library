const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    'index.min': './src/index.js',
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    library: '',
    libraryTarget: 'commonjs',
  },
  plugins: [new CleanWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, './src'),
      },
    ],
  },
  devtool: 'source-map',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        sourceMap: false,
        test: /\.min\.js(\?.*)?$/i,
        parallel: true,
      }),
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss'],
    alias: {
      components: path.resolve(__dirname, 'src/components'),
    },
  },
  //watch: true, // flag build script
  watchOptions: {
    aggregateTimeout: 600,
    poll: 1000,
    ignored: ['/node_modules/**', '/dist'],
  },
};
