const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    
    baseUrl: 'https://portal-demo.npinew.keenable.in/', 
  },
  reporter: 'cypress-mochawesome-reporter', 
  reporterOptions: {
    reportDir: 'cypress/reports', 
    overwrite: false, 
    html: false, 
    json: true, 
    screenshots: true, 
  },
});
