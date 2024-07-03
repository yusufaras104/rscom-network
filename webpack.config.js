// webpack.config.js
module.exports = {
    // ...
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    // ...
  };