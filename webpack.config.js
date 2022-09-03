const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

config = {

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    resolve: {
        modules: [path.join(__dirname, 'src'), 'node_modules'],
    },

    devServer: {
        port: 3000,
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
                template: './src/index.html',
            }
        ),
    ],
};

module.exports = config;