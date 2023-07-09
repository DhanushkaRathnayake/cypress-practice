/// <reference types="cypress"/>

describe('filtering', () => {
    beforeEach(() => {
        cy.visit('https://todomvc.com/examples/vanillajs/?delay-new-todo=8000')

        cy.get('.new-todo', { timeout: 6000 }).type('Clean room{enter}')
        cy.get('.new-todo', { timeout: 6000 }).type('Learn JS{enter}')
        cy.get('.new-todo', { timeout: 6000 }).type('Use cypress{enter}')

        cy.get('.todo-list li:nth-child(2) .toggle').click()
    })

    it('should filter active todos', () => {
        cy.contains('Active').click()

        cy.get('.todo-list li').should('have.length', 2)
    })

    it('should filter completed todos', () => {
        cy.contains('Completed').click()

        cy.get('.todo-list li').should('have.length', 1)
    })

    it('should filter all todos', () => {
        cy.contains('All').click()

        cy.get('.todo-list li').should('have.length', 3)
    })
})