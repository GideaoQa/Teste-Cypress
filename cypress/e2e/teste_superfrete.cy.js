import SuperfretePage from "../pages/SuperfretePage";
import { dataFrete } from "../Data/dataFrete";

describe('Scenarios calc frete', () => {
  const page = new SuperfretePage();
  beforeEach(() => {
    cy.window().then((window) => {
      window.sessionStorage.clear();
    });
    page.visit();
  });

  it('calcular frete com sucesso', () => {
    page.fillForm(dataFrete.peso, dataFrete.cepOrigem, dataFrete.cepDestino, dataFrete.altura, dataFrete.largura, dataFrete.comprimento);
    page.submitForm();
    page.validateFreteResult(dataFrete.valor);
  });

  it('Deve mostrar erro para altura máxima inválida', () => {
    page.fillForm(dataFrete.peso, dataFrete.cepOrigem, dataFrete.cepDestino, dataFrete.maximumDimensionInvalid, dataFrete.largura, dataFrete.comprimento); // Altura inválida
    page.submitForm();
    page.validateHeightError(dataFrete.erroAltura);
  });

  it('Deve mostrar erro para largura máxima inválida', () => {
    page.fillForm(dataFrete.peso, dataFrete.cepOrigem, dataFrete.cepDestino, dataFrete.altura, dataFrete.maximumDimensionInvalid, dataFrete.comprimento); // Largura inválida
    page.submitForm();
    page.validateWidthError(dataFrete.erroLargura);
  });

  it('Deve mostrar erro para comprimento máxima inválido', () => {
    page.fillForm(dataFrete.peso, dataFrete.cepOrigem, dataFrete.cepDestino, dataFrete.altura, dataFrete.largura, dataFrete.maximumDimensionInvalid); // Comprimento inválido
    page.submitForm();
    page.validateDepthError(dataFrete.erroComprimento);
  });

  it('Deve mostrar erro para altura mínima inválida', () => {
    page.fillForm(dataFrete.peso, dataFrete.cepOrigem, dataFrete.cepDestino, dataFrete.minimumDimensionInvalid, dataFrete.largura, dataFrete.comprimento); // Altura inválida
    page.submitForm();
    page.validateHeightError(dataFrete.erroAlturaMinima);
  });

  it('Deve mostrar erro para largura mínima inválida', () => {
    page.fillForm(dataFrete.peso, dataFrete.cepOrigem, dataFrete.cepDestino, dataFrete.altura, dataFrete.minimumDimensionInvalid, dataFrete.comprimento); // Largura inválida
    page.submitForm();
    page.validateWidthError(dataFrete.erroLarguraMinima);
  });

  it('Deve mostrar erro para comprimento mínimo inválido', () => {
    page.fillForm(dataFrete.peso, dataFrete.cepOrigem, dataFrete.cepDestino, dataFrete.altura, dataFrete.largura, dataFrete.minimumDimensionInvalid); // Comprimento inválido
    page.submitForm();
    page.validateDepthError(dataFrete.erroComprimentoMinimo);
  });
})

