const path = require('path');

module.exports = {
  output: {
    filename: 'js/[name]-[hash].js', // ここで[hash]を使用する
    path: path.resolve(__dirname, 'public/packs'),
    publicPath: '/',
  },
};