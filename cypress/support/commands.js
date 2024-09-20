
    Cypress.Commands.add('visit', (url) => {
      cy.visit(url);
    });

    Cypress.Commands.add('get', (selector) => {
      cy.get(selector);
    });

    Cypress.Commands.add('type', (selector, text) => {
      cy.get(selector).type(text);
    });

    Cypress.Commands.add('click', (selector) => {
      cy.get(selector).click();
    });

    Cypress.Commands.add('clearCookiesAndLocalStorage', () => {
      cy.clearCookies();
      cy.clearLocalStorage();
    });

    Cypress.Commands.add('setViewport', () => {
      cy.viewport(1366, 768);
    });