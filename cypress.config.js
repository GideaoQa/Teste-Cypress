const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://web.superfrete.com',
    setupNodeEvents(on, config) {
      on('task', {
        log(message) {
          console.log(message);
          return null;
        },
        reload() {
          console.log('Resetting state...');
          return null;
        }
      });
    },
    pageLoadTimeout: 20000,
    retries: {
      runMode: 2,
      openMode: 1,
    },
    viewportWidth: 1366,
    viewportHeight: 768,
    supportFile: './cypress/support/e2e.js',
    specPattern: 'cypress/e2e/**/*.cy.js',
  },
});