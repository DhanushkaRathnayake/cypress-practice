/// <reference types="cypress"/>

describe('login', () => {

    beforeEach(() => {
        cy.visit('https://practicetestautomation.com/practice-test-login/')

    })

    it('should be able login to welcome page', () => {
        cy.get('#username').type('student')
        cy.get('#password').type('Password123')

        cy.get('#submit').click()

        cy.get('.post-title').should('have.text', 'Logged In Successfully')

    })

})