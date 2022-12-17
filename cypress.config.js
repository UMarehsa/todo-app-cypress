const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1000,
  viewportHeight: 800,
  e2e: {
    baseUrl:"http://localhost:3000/",
    specPattern:"cypress/e2e/**/*.{js,jsx,ts,tsx}",
    defaultCommandTimeout: 60000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
