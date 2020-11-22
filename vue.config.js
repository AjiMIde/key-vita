module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "~@/views/home/styles/_variables.scss";'
      }
    }
  }
}
