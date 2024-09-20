import SuperfretePage from "../pages/SuperfretePage";
import { dataFrete } from "../Data/dataFrete";

describe('Happy Scenarios', () => {
  const page = new SuperfretePage();
  beforeEach(() => {
    page.visit();
    cy.window().then((window) => {
      window.sessionStorage.clear();
    });
  });

  it('Deve calcular frete com sucesso', () => {
    page.fillForm(dataFrete.peso, dataFrete.cepOrigem, dataFrete.cepDestino, dataFrete.altura, dataFrete.largura, dataFrete.comprimento);
    page.submitForm();
    page.validateFreteResult(dataFrete.valor);
  });

  it('Deve mostrar erro para altura inválida', () => {
    page.fillForm('300', '08090-284', '05407-002', '0.3', '11', '16'); // Altura inválida
    page.submitForm();
    page.validateHeightError();
  });

  // Adicione outros casos de teste para largura e comprimento inválidos seguindo o modelo acima
});