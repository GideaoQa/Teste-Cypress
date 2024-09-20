import { selectors } from '../Data/selectors';
import BasePage from './BasePage';

class SuperfretePage extends BasePage {

  setViewport() {
    cy.viewport(1366, 768);
  }

  fillForm(peso, cepOrigem, cepDestino, altura, largura, comprimento) {
    cy.get(selectors.peso).click().get('li[role="option"]').contains(peso).click();
    cy.get(selectors.cepOrigem).type(cepOrigem);
    cy.get(selectors.cepDestino).type(cepDestino);
    cy.get(selectors.altura).type(altura);
    cy.get(selectors.largura).type(largura);
    cy.get(selectors.comprimentvo).type(comprimento);
  }

  submitForm() {
    cy.get(selectors.btnCalcular).click();
  }

  validateFreteResult(valor) {
    cy.get(selectors.resultado).should('contain', valor);
  }

  validateHeightError(erroAltura) {
    cy.get(selectors.erroAltura).should('contain', erroAltura);
  }

  validateWidthError(erroLargura) {
    cy.get(selectors.erroLargura).should('contain', erroLargura);
  }

  validateDepthError(erroComprimento) {
    cy.get(selectors.erroComprimento).should('contain', erroComprimento);
  }


}

export default SuperfretePage;