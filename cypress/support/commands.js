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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (email,password) => {
    cy.get('input[type="email"]').type(email)
        cy.get('input[type="password"]').type(password)
        cy.get('.button').contains('Zaloguj').click()
})

Cypress.Commands.add('wyloguj', () => {
    cy.get('.nav-button').contains('WYLOGUJ').click()
})

Cypress.Commands.add('macs', (model) => {
    cy.get(".chapternav-items").contains(model).click()
    cy.wait(3000)
    cy.scrollTo("bottom", {duration:10000})
    cy.go('back')
})

