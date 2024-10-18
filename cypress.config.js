const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://thinking-tester-contact-list.herokuapp.com/',
    setupNodeEvents(on, config) {
    },
    reporter: 'mochawesome', // Sets the reporter to mochawesome
    reporterOptions: {
      reportDir: 'cypress/reports/mocha',
      quiet: true,
      overwrite: false,
      html: true,
      json: false,
    },
  },
});
