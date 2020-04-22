module.exports = {
  devServer: {
    // proxy: {
    // "/api": {
    //   target: process.env.VUE_APP_API_URL,
    //   pathRewrite: "rewrite"
    // }
    // },
    hot: true,
    host: "0.0.0.0", // can be overwritten by process.env.HOST
    port: 8080,
    compress: true,
    quiet: true
  },
  configureWebpack: {
    entry: {
      fiction: "./apps/fiction/main.js"
    }
  }
};
