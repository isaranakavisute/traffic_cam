const path = require('path');  
const HtmlWebpackPlugin = require('html-webpack-plugin');  
  
module.exports = {  
   entry: './main.js',  
   output: {  
      path: path.join(__dirname, '/bundle'),  
      filename: 'index_bundle.js'  
   },  
   devServer: {  
      inline: true,  
      port: 8080   
   },  
   module: {  
      rules: [  
         {  
            test: /\.jsx?$/,  
            exclude: /node_modules/,  
        use: {  
              loader: "babel-loader",  
            }  
         }  
      ],

      // loaders: [
      //    {
      //      test: /\.jsx?$/,
      //      exclude: /(node_modules|bower_components)/,
      //      loader: 'babel-loader',
      //      query: {
      //        presets: ['react', 'es2015', 'stage-0'],
      //        plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
      //      }
      //    }, 
      //    {
      //      test: /\.(jpe?g|png|gif|svg)$/i,
      //      loaders: [
      //        'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
      //        'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
      //      ]
      //    } 
      //  ]




   },  
   plugins:[  
      new HtmlWebpackPlugin({  
         template: './index.html'  
      })  
   ]  
}  
