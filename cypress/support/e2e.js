Cypress.on('uncaught:exception', (_err, _runnable) => {
  return false; // Impede que erros não capturados impeçam a continuação dos testes
});

// Sobrescrever o comando cy.log para usar cy.task
Cypress.Commands.overwrite('log', (_subject, message) => {
  return cy.task('log', message);
});

// Filtrar logs customizados via cy.on
Cypress.on('log:added', (options) => {
  if (options.instrument === 'command' && options.name === 'log') {
    options.end();
  }
});


beforeEach(() => {
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.window().then((window) => {
    window.sessionStorage.clear();
  });
  cy.wait(2000);
});
