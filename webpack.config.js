const HtmlCriticalPlugin = require("html-critical-webpack-plugin");
module.exports = {
    resolve: {
        extensions: [".js", ".mjs", ".jsx", ".json", ".ts", ".tsx"], // other stuff
        fallback: {
            fs: false,
            path: require.resolve("path-browserify"),
        }
    },
    plugins: [
        new HtmlWebpackPlugin({ ... }),
        new ExtractTextPlugin({ ... }),
        new HtmlCriticalPlugin({
          base: path.join(path.resolve(__dirname), 'dist/'),
          src: 'index.html',
          dest: 'index.html',
          inline: true,
          minify: true,
          extract: true,
          width: 375,
          height: 565,
          penthouse: {
            blockJSRequests: false,
          }
        })
      ] 
};