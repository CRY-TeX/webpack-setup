const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// const mode = process.env.NODE_ENV === 'production' ? 'production': 'development';

module.exports = {
    entry: "./src/js/index.js",

    // mode: "development",
    mode: "production",

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].js",
    },

    plugins: [new MiniCssExtractPlugin()],

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: { loader: 'babel-loader' }
            },

            // {
            //     test: /\.(s[ac]|c)ss$/i,
            //     use: ["style-loader", "css-loader", "sass-loader"]
            // },

            {
                test: /\.(s[ac]|c)ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader", "postcss-loader"]
            }
        ]
    },

    devtool: 'source-map',
};