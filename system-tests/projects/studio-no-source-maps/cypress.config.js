module.exports = {
  'experimentalStudio': true,
  e2e: {
    setupNodeEvents (on, config) {
      const webpackPreprocessor = require('@cypress/webpack-preprocessor')

      const options = {
        webpackOptions: {
          devtool: false,
        },
      }

      on('file:preprocessor', webpackPreprocessor(options))

      return config
    },
  },
}
