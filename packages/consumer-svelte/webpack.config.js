const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
module.exports = {
    entry: "./src/index",
    cache: false,

    mode: "development",
    devtool: "source-map",

    optimization: {
        minimize: false,
    },

    output: {
        publicPath: "http://localhost:3004/",
    },

    resolve: {
        extensions: [".jsx", ".js", ".json", '.svelte', '.mjs', ],
    },

    module: {
        rules: [
            //Allows use of modern javascript
            {
                test: /\.js?$/,
                exclude: /node_modules/, //don't test node_modules folder
                use: {
                    loader: 'babel-loader',
                },
            },
            //Allows use of svelte
            {
                test: /\.svelte$/,
                use: {
                    loader: 'svelte-loader',
                },
            },
            //Allows use of CSS
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            //Allows use of images
            {
                test: /\.(jpg|jpeg|png|svg)$/,
                use: 'file-loader',
            },
        ],
    },

    plugins: [
        new ModuleFederationPlugin({
            name: "consumer-svelte",
            filename: "remoteEntry.js",
            remotes: {
                wcheader: "wcheader@http://localhost:3002/remoteEntry.js",
                header: "header@http://localhost:3001/remoteEntry.js",
            },
            exposes: {},
            shared: {
                ...deps,
            },
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            // chunks: ["main"],
        }),
        //This gets all our css and put in a unique file
        new MiniCssExtractPlugin(),
        //take our environment variable in .env file
        //And it does a text replace in the resulting bundle for any instances of process.env.
        new Dotenv(),
    ],
};
