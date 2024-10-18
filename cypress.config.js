const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://thinking-tester-contact-list.herokuapp.com/',
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
    },
    specPattern: 'cypress/e2e/**/*.feature',
    reporter: 'mochawesome', // Define o reporter como mochawesome
    reporterOptions: {
      reportDir: 'cypress/reports/mocha', // Diretório para os relatórios
      quiet: true, // Se verdadeiro, oculta os logs do reporter
      overwrite: false, // Se verdadeiro, sobrescreve arquivos existentes
      html: true, // Se verdadeiro, gera relatório em HTML
      json: false, // Se verdadeiro, gera relatório em JSON
    },
  },
});
