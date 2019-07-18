const path = require('path');

module.exports = {
  entry: {
    matt_item_summary: path.join(__dirname, '../matt-item-summary/client/src/index.jsx') ,
    mike_photo_carousel: path.join(__dirname, '../mike-photo-carousel/client/src/index.jsx') ,
    garrett_related_products: path.join(__dirname, '../garrett-related-products/client/RelatedProducts.jsx') ,
    review_component: path.join(__dirname, '../Review-component/client/index.jsx')
  },
  output: {
    path: path.join(__dirname, '/public/'),
    filename: '[name]_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        exclude: path.resolve(__dirname, 'node_modules'),
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    ]
  },
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](styled-components|react|react-dom) [\\/]/,
          name: 'vendor',
          chunks: 'all',
        }
      }
    }
  },
  resolve: {
    alias: {
      'styled-components': path.resolve(__dirname, "node_modules", "styled-components"),
    }
  }
};
