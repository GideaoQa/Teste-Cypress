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

  fillFormEnvelope(peso, cepOrigem, cepDestino, largura, comprimento) {
    cy.get(selectors.peso).click().get('li[role="option"]').contains(peso).click();
    cy.get(selectors.cepOrigem).type(cepOrigem);
    cy.get(selectors.cepDestino).type(cepDestino);
    cy.get(selectors.envelopeLargura).type(largura);
    cy.get(selectors.envelopeComprimento).type(comprimento);
  }


  alterFormat(envelopeFormat) {
    cy.get(selectors.formato).click().get('li[role="option"]').contains(envelopeFormat).click();
  }

  submitForm() {
    cy.get(selectors.btnCalcular).click();
  }

  validateFreteResult(valorSedex, valorPac) {
    cy.get(selectors.resultadoSedex).should('contain', valorSedex);
    cy.get(selectors.resultadoPac).should('contain', valorPac);
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

  selectSeguroAvisoMaoPropria() {
    cy.get(selectors.seguro).click();
    cy.get(selectors.selectAR).click();
    cy.get(selectors.selectMaoPropria).click();
  }

  fillValuesSeguro(valorDoSeguro) {
    cy.get(selectors.seguro).click();
    cy.get(selectors.selectSeguro).click();
    cy.get(selectors.valorDoSeguro).type(valorDoSeguro);
  }

}

export default SuperfretePage;