/// <reference types="cypress"/>

describe('todo actions', () => {

    beforeEach(() => {
        cy.visit('https://todomvc.com/examples/vanillajs/?delay-new-todo=8000')

        cy.get('.new-todo', { timeout: 6000 }).type('Clean room{enter}')
    })

    it('should be able to add new todo to the list', () => {
        cy.get('.view > label').should('have.text', 'Clean room')
        cy.get('.toggle').should('not.be.checked')


    })

    it('should mark a todo as completed', () => {
        cy.get('.toggle').click()
        cy.get('.view > label').should('have.css', 'text-decoration-line', 'line-through')
    })

    it('should clear completed todos', () => {
        cy.get('.toggle').click()
        cy.contains('Clear').click()
        cy.get('.todo-list').should('not.have.descendants', 'li')
    })

})