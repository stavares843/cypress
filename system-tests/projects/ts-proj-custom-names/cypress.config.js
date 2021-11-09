module.exports = {
  'supportFile': 'cypress/support.ts',
  'pluginsFile': 'cypress/plugins.ts',
  e2e: {
    setupNodeEvents (on, config) {
      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.family === 'chromium' && browser.name !== 'electron') {
          // Mac/Linux
          //launchOptions.args.push('--use-file-for-fake-video-capture=cypress/fixtures/my-video.y4m')

          // Windows
          // launchOptions.args.push('--use-file-for-fake-video-capture=c:\\path\\to\\video\\my-video.y4m')
        }

        return launchOptions
      })

      return config
    },
  },
}
