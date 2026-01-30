// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-real-events'

Cypress.Commands.add('start', () => {
    cy.visit('/')
})

Cypress.Commands.add('submitLogin', (email, senha) => {
    cy.get('#email').type(email)
    cy.get('#password').type(senha, { log: false })
    cy.contains('button', 'Entrar').click()
})

Cypress.Commands.add('goTo', (buttonName, pageTitle) => {
    cy.contains('button', buttonName)
        .should('be.visible')
        .click()

    cy.contains('h1', pageTitle)
        .should('be.visible')

})

Cypress.Commands.add('login', () => {
    cy.start()
    cy.submitLogin('papito@webdojo.com', 'katana123')

})

Cypress.Commands.add('fillConsultancyForm', (form) => {
  cy.get('#name').clear().type(form.name)
  cy.get('#email').clear().type(form.email)
  cy.get('#phone').clear().type(form.phone)

  cy.get('#consultancyType').select(form.consultancyType)

  // pessoa (cpf / cnpj)
  if (form.personType === 'cpf') {
    cy.contains('label', 'Pessoa Física').find('input').check()
    cy.contains('label', 'Pessoa Jurídica').find('input').should('not.be.checked')
  } else if (form.personType === 'cnpj') {
    cy.contains('label', 'Pessoa Jurídica').find('input').check()
    cy.contains('label', 'Pessoa Física').find('input').should('not.be.checked')
  }

  cy.get('#document').clear().type(form.document)

  form.discoveryChannels?.forEach((channel) => {
    cy.contains('label', channel).find('input').check()
  })

  if (form.file) {
    cy.get('input[type="file"]').selectFile(form.file, { force: true })
  }

  cy.get('#details').clear().type(form.details)

  form.techs?.forEach((tech) => {
    cy.get('#technologies').type(`${tech}{enter}`)
  })

  if (form.terms) {
    cy.contains('label', 'Li e aceito os termos de uso').find('input').check()
  }
})

Cypress.Commands.add('submitConsultancyForm', () => {
  cy.contains('button', 'Enviar formulário').click()
})
