const { defineConfig } = require("cypress");

const {deleteUserByEmail} = require('./cypress/support/database')
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on ('task', {
        deleteUser(email){
          return deleteUserByEmail(email)
        }
      })
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3333'
  },
});
