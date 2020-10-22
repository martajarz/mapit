const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["@babel/plugin-proposal-object-rest-spread"]
        }
      }
    ]
  },
  resolve: {
    alias: {
      Components: path.resolve(__dirname, "src/components")
    },
    extensions: [".jsx", ".js", ".scss", ".json"]
  }
};
