# Testes Automatizados com Cypress

## Descrição

Este projeto contém automação de testes utilizando o framework [Cypress](https://www.cypress.io/). Os testes cobrem vários cenários de validação do cálculo de frete no site Superfrete.

## Pré-Requisitos

1. **Node.js**: Certifique-se de que o Node.js está instalado. Você pode baixar a última versão do [site oficial](https://nodejs.org/).

2. **Npm ou Yarn**: Certifique-se de ter o Node Package Manager (npm) ou o Yarn instalado. O npm vem por padrão com a instalação do Node.js.

## Configuração do Ambiente

1. **Clone o repositório**:

   ```sh
   - git clone https://github.com/GideaoQa/Teste-Cypress.git

Instale as dependências:

Navegue até o diretório do projeto e instale as dependências necessárias usando npm ou yarn:

cd /Teste-Cypress

- npm install

- yarn install



2. **Verifique o arquivo de configuração**:

Certifique-se de que o arquivo cypress.config.js está configurado corretamente com base na sua configuração local. Ele geralmente é parecido com o seguinte:

cypress.config.js 33:61
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
    },
    pageLoadTimeout: 20000,
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



3. **Estrutura do Projeto**:
cypress.config.js: Arquivo de configuração do Cypress.

cypress/support/e2e.js: Arquivo de suporte com configurações e hooks globais.

cypress/pages/CalcularFretePage.js: Definição da página de ações e validações específicas para a página Superfrete.

cypress/e2e/calcular_frete.cy.js: Arquivo de teste contendo os cenários de teste para validação do cálculo de frete.

cypress/Data/dataFrete.js: Contém os dados de entrada e os valores esperados para as validações de teste.

cypress/Data/selectors.js: Define seletores para os elementos de interface que serão usados nos testes.

4. **Executando os Testes**
### Scripts Disponíveis
No arquivo package.json, você encontrará os seguintes scripts que são úteis para a execução dos testes:

{
  "devDependencies": {
    "cypress": "^13.14.2"
  },
  "scripts": {
    "cypress:open": "cypress open",
    "cypress:run": "cypress run"
  }
}


### Modo Interativo
Para executar os testes no modo interativo, utilize o seguinte comando:

- npm run cypress:open

- yarn cypress:open

Isso abrirá o Test Runner do Cypress, onde você pode selecionar o arquivo de teste (.cy.js) para executar.

Modo Headless (Linha de Comando)
Para executar todos os testes em um ambiente headless (sem interface gráfica), utilize o seguinte comando:

- npm run cypress:run

- yarn cypress:run

3. **Executando Testes Específicos**
Para executar um teste específico utilize os grep tags no seu teste:

npx cypress run --spec cypress/e2e/teste_superfrete.cy.js
Gerenciamento de Relatórios
Os screenshots e vídeos de falhas são automaticamente capturados pelo Cypress. Eles podem ser encontrados nos seguintes diretórios:

Screenshots: cypress/screenshots/

Vídeos: cypress/videos/

Troubleshooting
Timeout de Carregamento da Página: Se você encontrar erros devido ao tempo de carregamento da página, considere aumentar o valor de pageLoadTimeout no arquivo cypress.config.js.

Certifique-se de que todas as dependências estão corretamente instaladas e que o servidor de teste está acessível.

### Contribuições
Sinta-se à vontade para abrir PRs, reportar issues ou sugerir melhorias. Colaborações são bem-vindas!

### Contato
Para dúvidas ou mais informações, entre em contato via email ou crie uma issue no repositório.


Este projeto é mantido por Gideão Amaral .

### Passos Extras

Certifique-se de que todas as dependências estão instaladas e de que seu ambiente está corretamente configurado conforme as etapas acima descritas, para garantir a correta execução dos testes Cypress.

Se você seguir estas instruções, deverá se você seguir estas instruções, deverá ser capaz de configurar e executar seus testes Cypress sem problemas.