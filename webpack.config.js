module.exports = {
  mode: "development",
  entry: {
    app: "./src/app.js",
    app2: "./src/app2.js"
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 300,
      maxSize: 0,
      minChunks: 1
    }
  },
  devtool: "source-map"
};
