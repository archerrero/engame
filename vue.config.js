module.exports = {
  outputDir: 'dist/public_html',
  css: {
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        data: '@import "~@/styles/main.scss";',
      },
    },
  },
};
