const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public/scripts'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/, //regular expression the $ makes sure that what is put before it is at the end of the string
            exclude: /node_modules/, //regular expression
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        }]
    },
    devtool: 'source-map' // Shows the source of where code comes from in the dev tools console from your own code instead of what Babel creates
}


