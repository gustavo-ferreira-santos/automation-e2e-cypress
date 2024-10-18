const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://thinking-tester-contact-list.herokuapp.com/',
    setupNodeEvents(on, config) {
    },
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
