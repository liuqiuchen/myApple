module.exports = {
    entry: './containers/AppleBasket.jsx',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]

    },
    resolve: {
        extensions: ['', '.coffee', '.js', '.jsx']
    },
    watch: true
};
