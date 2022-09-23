const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const config = require("dotenv").config();
// const nodeExternals = require("webpack-node-externals");
// import webpackNodeExternals from "webpack-node-externals";
// const webpackNodeExternals = require("webpack-node-externals");

/*We are basically telling webpack to take index.js from entry. Then check for all file extensions in resolve. 
After that apply all the rules in module.rules and produce the output and place it in main.js in the public folder.*/

module.exports = {
  /** "mode"
   * the environment - development, production, none. tells webpack
   * to use its built-in optimizations accordingly. default is production
   */
  mode: "development",
  /** "entry"
   * the entry point
   */
  // entry: "./src/index.js",
  entry: "./src/index.js",
  output: {
    /** "path"
     * the folder path of the output file
     */
    path: path.resolve(__dirname, "public/dist"),
    /** "filename"
     * the name of the output file
     */
    filename: "bundle.js",
    publicPath: "/",
  },
  devServer: {
    contentBase: "./dist", // added recently and change it to ./build for production
    historyApiFallback: true,
  },
  // sass integration

  plugins: [
    new webpack.EnvironmentPlugin(config.parsed),

    new webpack.DefinePlugin({
      process: { env: {} },
    }),
    // new webpack.DefinePlugin({
    //   "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    // }),
    new HTMLWebpackPlugin({
      template: "./public/index.html", // or  template: path.resolve('./index.html'),
    }),
  ],
  /** "target"
   * setting "node" as target app (server side), and setting it as "web" is
   * for browser (client side). Default is "web"
   */
  target: "web", //web
  devServer: {
    /** "port"
     * port of dev server
     */
    port: "3000",
    /** "static"
     * This property tells Webpack what static file it should serve
     */
    static: ["./public"],
    /** "open"
     * opens the browser after server is successfully started
     */
    open: true,
    /** "hot"
     * enabling and disabling HMR. takes "true", "false" and "only".
     * "only" is used if enable Hot Module Replacement without page
     * refresh as a fallback in case of build failures
     */
    hot: true,
    /** "liveReload"
     * disable live reload on the browser. "hot" must be set to false for this to work
     */
    liveReload: true,
  },
  resolve: {
    /** "extensions"
     * If multiple files share the same name but have different extensions, webpack will
     * resolve the one with the extension listed first in the array and skip the rest.
     * This is what enables users to leave off the extension when importing
     */
    extensions: [".js", ".jsx", ".json"],
  },
  module: {
    /** "rules"
     * This says - "Hey webpack compiler, when you come across a path that resolves to a '.js or .jsx'
     * file inside of a require()/import statement, use the babel-loader to transform it before you
     * add it to the bundle. And in this process, kindly make sure to exclude node_modules folder from
     * being searched"
     */
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(js|jsx)$/, //kind of file extension this rule should look for and apply in test
        exclude: /node_modules/, //folder to be excluded
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },

  // externalsPresets: { node: true },
  // externals: [webpackNodeExternals()],
};
