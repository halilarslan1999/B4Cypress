///<reference types="cypress"/>

describe('Login Test with Custom Command', () => {

    it('TCO2 positive scenario', () => {
       
        cy.visit(Cypress.env("baseUrl"))
        
        cy.loginCommand(Cypress.env("username"),Cypress.env("password"))


    })
})