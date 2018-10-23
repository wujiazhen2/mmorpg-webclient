module.exports={
    entry:__dirname + '/src/index.js',
    output:{
        path: __dirname + '/dist',
        filename:'[name].js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude: /(node_modules|bower_components)/,
                use:[{loader:"babel-loader"}]
            }
        ]
    }
   

}

