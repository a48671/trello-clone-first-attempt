const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const mode = process.env.MODE ? process.env.MODE : 'development';

module.exports = {
    entry: './src/index.ts',
    mode,
    devtool: mode === 'development' ? 'inline-source-map' : 'hidden-source-map',
    devServer: {
        port: 9000,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        plugins: [new TsConfigPathsPlugin({
            baseUrl: 'src'
        })]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html')
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin()
    ]
};
