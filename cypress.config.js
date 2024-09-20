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

      // Impede que os cookies sejam automaticamente preservados entre os testes
      on('before:browser:launch', (browser, launchOptions) => {
        // Limpa os cookies de session em cada nova inicialização de teste
        if (browser.family === 'chromium') {
          launchOptions.preferences.default['exit_type'] = 'None';
        }
        return launchOptions
      });
    },
    pageLoadTimeout: 10000,
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