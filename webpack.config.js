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

      // {
      //     test: /\.(s[ac]|c)ss$/i,
      //     use: ["style-loader", "css-loader", "sass-loader"]
      // },

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
          {
            loader: "extract-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
            // options: {
            //   sourceMap: true,
            // },
          },

          "postcss-loader",
        ],
      },
    ],
  },

  //   devtool: "source-map",
};
