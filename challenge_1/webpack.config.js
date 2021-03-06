const path = require('path');
const src_dir = path.join(__dirname, '/client');
const dist_dir = path.join(__dirname, '/public');

module.exports = {
  entry: `${src_dir}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: dist_dir,
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: src_dir,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
        }
      }
    ]
  }
}
