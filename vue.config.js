module.exports = {
  publicPath: process.env.NODE_ENV === "development" ? "" : "//xxx-oos.oss-cn-zhangjiakou.aliyuncs.com/h5",
  devServer: {
    disableHostCheck: true,
    port: 80,
  },
};
