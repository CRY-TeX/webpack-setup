const path = require("path");

// const mode = process.env.NODE_ENV === 'production' ? 'production': 'development';

module.exports = {
  entry: "./src/js/index.js",

  mode: "development",
  //   mode: "production",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },

      {
        test: /\.(s[ac]|c)ss$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].build.css",
              context: "./",
              outputPath: "/",
              publicPath: "/dist",
            },
          },
          "extract-loader",
          "raw-loader",
          "resolve-url-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },

  //   devtool: "source-map",
};
