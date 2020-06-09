describe('Test modal popup', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/')
    })
    it('Success message', () => {
        cy
            .get('#employerMaxID').type('55000')
            .get('.employerSubmit').click()
            .get('#employeeMinID').type('40000')
            .get('.employeeSubmit').click()
            .get('.modal-dialog').should('be.visible')
            .get('h2.modal-title').should('have.text', 'Success!');
    })
    it('Equal message', () => {
        cy
            .get('#employerMaxID').type('40000')
            .get('.employerSubmit').click()
            .get('#employeeMinID').type('40000')
            .get('.employeeSubmit').click()
            .get('.modal-dialog').should('be.visible')
            .get('h2.modal-title').should('have.text', 'Great Minds Think Alike!');
    })
    it('Failure message', () => {
        cy
            .get('#employerMaxID').type('40000')
            .get('.employerSubmit').click()
            .get('#employeeMinID').type('41000')
            .get('.employeeSubmit').click()
            .get('.modal-dialog').should('be.visible')
            .get('h2.modal-title').should('have.text', 'Failure!');
    })
})