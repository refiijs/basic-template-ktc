const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: 'production',
  devServer: {
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/, // Menambahkan ekstensi file yang ingin di-handle oleh file-loader
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]', // Nama file output akan sama dengan nama file asli
              outputPath: 'images/', // Menyimpan gambar ke dalam folder 'images' di dalam 'dist'
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimizer: [
      // Minifikasi menggunakan TerserPlugin
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          ecma: 6,
        },
      }),
    ],
    splitChunks: {
      chunks: 'all', // Menerapkan split chunk untuk semua jenis modul
    },
  },
  plugins: [
    /* HTML Webpack Plugin */
    new HtmlWebpackPlugin({
      template: './src/template.html',
      filename: 'index.html',
    }),
  ],
};
