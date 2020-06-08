context('Load UI', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/')
    })
    it('should load the app', () => {
        cy.get('.tabs').should('be.visible')
    })
})