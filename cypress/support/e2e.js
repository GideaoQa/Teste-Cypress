Cypress.on('uncaught:exception', (_err, _runnable) => {
  return false;
});

Cypress.Commands.overwrite('log', (subject, message) => {
  return cy.task('log', message);
});

Cypress.on('log:added', (options) => {
  if (options.instrument === 'command' && options.name === 'log') {
    options.end();
  }
});

beforeEach(() => {
  cy.clearCookies();
  cy.clearLocalStorage();
  window.sessionStorage.clear();
});