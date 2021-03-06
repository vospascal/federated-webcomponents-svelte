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

    // mode: "production",
    mode: "development",
    devtool: "source-map",

    optimization: {
        minimize: false,
        // minimize: true,
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
                test: /\.(woff|woff2)$/,
                use: {
                    loader: 'url-loader',
                },
            },
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
                "./my-theme-provider": "./src/ThemeProvider/ThemeProvider.svelte",
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
                "./my-accordion": "./src/Accordion/Accordion.svelte",
                "./my-accordion-section": "./src/Accordion/AccordionSection.svelte",
                "./my-tooltip": "./src/Tooltip/Tooltip.svelte",
                "./my-divider": "./src/Divider/Divider.svelte",
                "./my-heading-1": "./src/Headings/Heading-1.svelte",
                "./my-heading-2": "./src/Headings/Heading-2.svelte",
                "./my-heading-3": "./src/Headings/Heading-3.svelte",
                "./my-heading-4": "./src/Headings/Heading-4.svelte",
                "./my-heading-5": "./src/Headings/Heading-5.svelte",
                "./my-heading-6": "./src/Headings/Heading-6.svelte",
                "./my-switch": "./src/Switch/Switch.svelte",
                "./my-checkbox": "./src/Checkbox/Checkbox.svelte",
                "./my-radio-button": "./src/RadioButton/RadioButton.svelte",
                "./my-radio-button-group": "./src/RadioButton/RadioButtonGroup.svelte",
                "./my-tabs": "./src/Tabs/Tabs.svelte",
                "./my-tab": "./src/Tabs/Tab.svelte",
                "./my-tab-panel": "./src/Tabs/TabPanel.svelte",
                "./my-tab-list": "./src/Tabs/TabList.svelte",
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
