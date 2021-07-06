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

    output: {
        publicPath: "http://localhost:3005/",
    },

    resolve: {
        extensions: [".jsx", ".js", ".json"],
    },

    module: {
        rules: [
            {
                test: /\.m?js/,
                type: "javascript/auto",
                resolve: {
                    fullySpecified: false,
                },
            },
            {
                test: /\.jsx?$/,
                loader: require.resolve("babel-loader"),
                options: {
                    presets: [require.resolve("@babel/preset-react")],
                },
            },
            {
                test: /\.md$/,
                loader: "raw-loader",
            },
        ],
    },

    plugins: [
        new ModuleFederationPlugin({
            name: "consumer-react",
            filename: "remoteEntry.js",
            remotes: {
                mywc: "mywc@http://localhost:3002/remoteEntry.js",
            },
            exposes: {},
            shared: {
                // ...deps,
                // react: {
                //     singleton: true,
                //     requiredVersion: deps["react"],
                // },
                // "react-dom": {
                //     singleton: true,
                //     requiredVersion: deps["react-dom"],
                // },
            },
        }),
        new HtmlWebpackPlugin({
            favicon: "./public/favicon.ico",
            template: "./public/index.html",
            // chunks: ["main"],
        }),
    ],
};
