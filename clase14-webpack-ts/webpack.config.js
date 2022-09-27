const path = require('path')
//npm i webpack-node-externals
const nodeExternals = require('webpack-node-externals')

module.exports = {
    mode: "production",
    entry: "./src/app.ts",   //el primero a empaquetar, despues sigue empaquetando sus dependencias
    target: "node",
    externals: [nodeExternals()],   // no empaquetes las libreraias externas que estan en node_modules
    output: {       //indica donde quiero que se coloque el empaquetado
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?/,
                use: "ts-loader",    //npm i ts-loader
                exclude: /node_modules/
            }
        ]
    }
}