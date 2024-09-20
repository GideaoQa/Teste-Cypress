Cypress.on('uncaught:exception', (_err, _runnable) => {
  return false; // Impede que erros não capturados impeçam a continuação dos testes
});

// Sobrescrever o comando cy.log para usar cy.task
Cypress.Commands.overwrite('log', (subject, message) => {
  return cy.task('log', message);
});

// Filtrar logs customizados via cy.on
Cypress.on('log:added', (options) => {
  if (options.instrument === 'command' && options.name === 'log') {
    options.end();
  }
});

// Garante que o ambiente esteja zerado antes de cada teste e adiciona logs para diagnóstico
beforeEach(() => {
  cy.log('Limpando cookies, armazenamento local e sessão storage'); // Adiciona log para diagnóstico
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.window().then((window) => {
    window.sessionStorage.clear();
  });
});