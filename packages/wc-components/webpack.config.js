const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
// const SveltePreprocess = require("svelte-preprocess");

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
        publicPath: "http://localhost:3002/",
    },

    resolve: {
        extensions: [".jsx", ".js", ".json", '.svelte', '.mjs',],
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
                exclude: /node_modules/,
                use: {
                    loader: 'svelte-loader',
                    options: {
                        emitCss: false,
                        compilerOptions: {
                            customElement: true,
                            tag: null
                        }
                    }
                }
            },
            // {
            //     test: /\.svelte$/,
            //     use: {
            //         loader: 'svelte-loader',
            //         options: {
            //             customElement: true,
            //             preprocess: SveltePreprocess({
            //                 typescript: {
            //                     tsconfigFile: "tsconfig.json",
            //                 },
            //                 babel: {
            //                     presets: [
            //                         [
            //                             '@babel/preset-env',
            //                             {
            //                                 loose: true,
            //                                 modules: false,
            //                                 targets: {
            //                                     esmodules: true,
            //                                 },
            //                             },
            //                         ],
            //                     ],
            //                 },
            //             }),
            //         }
            //     },
            // },
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
            name: "mywc",
            filename: "remoteEntry.js",
            remotes: {},
            exposes: {
                "./my-header": "./src/Header.svelte",
                "./my-footer": "./src/Footer.svelte",
                "./my-button": "./src/Button/Button.svelte",
                "./my-modal": "./src/Modal/Modal.svelte",
                "./my-spinner": "./src/Spinner.svelte",
                "./my-select": "./src/Select.svelte",
                "./my-box": "./src/Box.svelte",
                "./my-flex": "./src/Flex.svelte",
                "./my-provider": "./src/Context/Provider.svelte",
                "./my-consumer": "./src/Context/Consumer.svelte",
                "./my-theme-provider": "./src/ThemeProvider/ThemeProvider.svelte",
            },
            shared: {},
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            // chunks: ["main"],
        }),
        //This gets all our css and put in a unique file
        new MiniCssExtractPlugin({
            filename: "[name].css",
        }),
        //take our environment variable in .env file
        //And it does a text replace in the resulting bundle for any instances of process.env.
        new Dotenv(),
    ],
};
