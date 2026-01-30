const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video:true,
    baseUrl:'http://localhost:3000',
    viewportWidth:1440,
    viewportHeight: 900

  },
});
