const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: 'src/app.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        }, {
            test: /\.(ttf|eot|woff|svg|woff2)$/,
            use: [{
                loader: "file-loader"
            }]
        }, {
            test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/
        }]
    },
    plugins: [HtmlWebpackPluginConfig]
};