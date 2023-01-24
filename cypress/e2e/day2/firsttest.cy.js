/// <reference types = "cypress"/>

describe('First Test Suite', ()=>{
it('test case 1', function(){
cy.visit('https://www.google.de')
cy.get('#L2AGLb > .QS5gu').click()
cy.get('.gLFyf').should('be.visible').type('cypress{enter}')
cy.get('[href="https://www.cypress.io/"] > .LC20lb')
.should('have.text', 'Cypress').click()


})


})