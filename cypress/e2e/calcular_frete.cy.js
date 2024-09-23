import SuperfretePage from "../pages/CalcularFretePage";
import { dataFrete } from "../Data/dataFrete";

describe('Scenarios calc frete', () => {
  const page = new SuperfretePage();
  

  it('calcular frete com sucesso', () => {
    cy.visit('/');
    page.fillForm(dataFrete.peso, dataFrete.cepOrigem, dataFrete.cepDestino, dataFrete.altura, dataFrete.largura, dataFrete.comprimento);
    page.submitForm();
    page.validateFreteResult(dataFrete.valor, dataFrete.valor1);
  });

  it('Alterar Formato e calcular frete Envelope', () => {
    cy.visit('/');
    page.alterFormat(dataFrete.envelopeFormat);
    page.fillFormEnvelope(dataFrete.peso, dataFrete.cepOrigem, dataFrete.cepDestino, dataFrete.envelopeLargura, dataFrete.envelopeComprimento);
    page.submitForm();
    page.validateFreteResult(dataFrete.valor, dataFrete.valor1);
  });

  it('Calcular frete com aviso e mão propria', () => {
    cy.visit('/');
    page.fillForm(dataFrete.peso, dataFrete.cepOrigem, dataFrete.cepDestino, dataFrete.altura, dataFrete.largura, dataFrete.comprimento);
    page.selectSeguroAvisoMaoPropria();
    page.submitForm();
    page.validateFreteResult(dataFrete.valorSeguroSedex, dataFrete.valorSeguroPac);
  });

  it('Calcular frete com seguro', () => {
    cy.visit('/');
    page.fillForm(dataFrete.peso, dataFrete.cepOrigem, dataFrete.cepDestino, dataFrete.altura, dataFrete.largura, dataFrete.comprimento);
    page.fillValuesSeguro(dataFrete.valorDoSeguro);
    page.submitForm();
    page.validateFreteResult(dataFrete.valorComSeguroSedex, dataFrete.valorComSeguroPac);
  });

  it('Deve mostrar erro para altura máxima inválida', () => {
    cy.visit('/');
    page.fillForm(dataFrete.peso, dataFrete.cepOrigem, dataFrete.cepDestino, dataFrete.maximumDimensionInvalid, dataFrete.largura, dataFrete.comprimento); // Altura inválida
    page.submitForm();
    page.validateHeightError(dataFrete.erroAltura);
  });

  it('Deve mostrar erro para largura máxima inválida', () => {
    cy.visit('/');
    page.fillForm(dataFrete.peso, dataFrete.cepOrigem, dataFrete.cepDestino, dataFrete.altura, dataFrete.maximumDimensionInvalid, dataFrete.comprimento); // Largura inválida
    page.submitForm();
    page.validateWidthError(dataFrete.erroLargura);
  });

  it('Deve mostrar erro para comprimento máxima inválido', () => {
    cy.visit('/');
    page.fillForm(dataFrete.peso, dataFrete.cepOrigem, dataFrete.cepDestino, dataFrete.altura, dataFrete.largura, dataFrete.maximumDimensionInvalid); // Comprimento inválido
    page.submitForm();
    page.validateDepthError(dataFrete.erroComprimento);
  });

  it('Deve mostrar erro para altura mínima inválida', () => {
    cy.visit('/');
    page.fillForm(dataFrete.peso, dataFrete.cepOrigem, dataFrete.cepDestino, dataFrete.minimumDimensionInvalid, dataFrete.largura, dataFrete.comprimento); // Altura inválida
    page.submitForm();
    page.validateHeightError(dataFrete.erroAlturaMinima);
  });

  it('Deve mostrar erro para largura mínima inválida', () => {
    cy.visit('/');
    page.fillForm(dataFrete.peso, dataFrete.cepOrigem, dataFrete.cepDestino, dataFrete.altura, dataFrete.minimumDimensionInvalid, dataFrete.comprimento); // Largura inválida
    page.submitForm();
    page.validateWidthError(dataFrete.erroLarguraMinima);
  });

  it('Deve mostrar erro para comprimento mínimo inválido', () => {
    cy.visit('/');
    page.fillForm(dataFrete.peso, dataFrete.cepOrigem, dataFrete.cepDestino, dataFrete.altura, dataFrete.largura, dataFrete.minimumDimensionInvalid); // Comprimento inválido
    page.submitForm();
    page.validateDepthError(dataFrete.erroComprimentoMinimo);
  });
})

