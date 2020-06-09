describe('Testing responsive elements', () => {

    context('Small / medium laptop resolution', () => {
        beforeEach(() => {
            cy.viewport(1024, 768)
                .visit('http://localhost:8080/')
        })
        it('Displays Vue Logo', () => {
            cy.get('.vue-logo').should('be.visible')
        })
    })

    context('Samsung S10 Resolution', () => {
        beforeEach(() => {
            cy.viewport('samsung-s10')
                .visit('http://localhost:8080/')
        })
        it('Hides Vue Logo', () => {
            cy.get('.vue-logo').should('not.be.visible')
        })
    })
})
