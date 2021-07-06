const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
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
    target: "web",
    output: {
        publicPath: "http://localhost:3003/",
    },
    resolve: {
        extensions: [".vue", ".jsx", ".js", ".json"],
        alias: {
            vue: "vue/dist/vue.esm-bundler.js",
        },
    },
    experiments: {
        topLevelAwait: true,
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    presets: ["@babel/preset-react"],
                },
            },
            {
                test: /\.vue$/,
                use: "vue-loader",
            },
            {
                test: /\.png$/,
                use: {
                    loader: "url-loader",
                    options: { limit: 8192 },
                },
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {},
                    },
                    "css-loader",
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
        }),
        new ModuleFederationPlugin({
            name: "consumer-vue",
            filename: "remoteEntry.js",
            remotes: {
                'mywc': "mywc@http://localhost:3002/remoteEntry.js",
            },
            exposes: {},
            shared: {
                // ...deps,
                // vue: {
                //     singleton: true,
                //     requiredVersion: deps["vue"],
                // },
            },
        }),
        new HtmlWebpackPlugin({
            favicon: "./public/favicon.ico",
            template: "./public/index.html",
            // chunks: ["main"],
        }),
        new VueLoaderPlugin(),
    ]
};