/// <reference types="cypress" />

export function navigate() {
    cy.visit('https://practicetestautomation.com/practice-test-login/')
}

export function login(userName, password) {
    cy.get('#username').type(userName)
    cy.get('#password').type(password)

    cy.get('#submit').click()

}

export function validateLogin(expectedText) {
    cy.get('.post-title').should('have.text', expectedText)
}