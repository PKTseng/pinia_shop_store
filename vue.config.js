module.exports = {
  devServer: {
    port: 8080,
    overlay: {
      warnings: true,
      errors: false,
    },
  },
  chainWebpack: (config) => {
    config.module.rule("eslint").use("eslint-loader").options({ fix: true });
  },
};
