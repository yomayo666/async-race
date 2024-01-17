const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, './src/index.ts'),
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        assetModuleFilename: '[name][ext]',
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        port: 9000,
        compress: true,
        hot: true,
        static: {
            directory: path.join(__dirname, 'dist')
        }

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
            use: [
              // Creates `style` nodes from JS strings
              "style-loader",
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
          },
          { 
              test: /\.jpg?g$|\.gif$|\.png|\.ico|\.svg$/i,
              type: 'asset/resource'
          }
        ],
      },
}