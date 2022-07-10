const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',

  entry: {
    main: './src/index.js'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  devServer: { //plugin webpack-dev-server
    port: 3000
  },

  plugins: [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './src/index.html'),
        filename: 'index.html'
    }), 
    new CleanWebpackPlugin()
  ],

  module: {
    rules:[
        {
            test: /\.(png|jpe?g|gif)$/i,
            loader: 'file-loader'
        },
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        },
        {
            test: /\.s[ac]ss$/i,
            use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
            test: /\.less$/i,
            use: [
                "style-loader",
                "css-loader",
                "less-loader",
            ],
        },
    ]
}
}