const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        main: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        publicPath: '/',
        clean: true
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'MATTEMATICS',
        filename: 'index.html',
        template: path.resolve(__dirname, './src/template.html')
    })],
    devtool: 'inline-source-map',
    devServer: {
        port: 5001,
        open: true,
        hot: true,
        historyApiFallback: true
    },
    module: {
        rules: [
            {test: /\.css$/, use: ['style-loader', 'css-loader']},  
            {test: /\.(svg|ico|png|jpeg|jpg|gif|webp)$/, type: 'asset/resource'},
            {   test: /\.js$/, 
                exclude: /node_modules/, 
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            }
        ]
    }
}