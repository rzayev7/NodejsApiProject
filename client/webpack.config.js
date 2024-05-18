import { fileURLToPath } from "url";
//const path = require('path');
const __filename = fileURLToPath(import.meta.url); //resolved path to file
const __dirname = path.dirname(__filename); // name of the directory

const config = {
  mode: 'development',
  entry: ['@babel/polyfill',"./src/index.js"],
  output: {
    path: path.resolve(__dirname, 'bundles'),
    filename: 'bundle.js',
  },
mode:"development",
module:{
    rules:[
        {
            test:/\.js$/,
            exclude: /(node_modules)/,
            use:{
                loader: "babel-loader",
                options:{
                    presets:["@babel/preset-env"]
                }
            }
        }
    ]
},
devServer :{
    port:3200
  }
}
export default config;