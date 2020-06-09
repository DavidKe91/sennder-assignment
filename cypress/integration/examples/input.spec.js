context('Test inputs', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/')
    })
    describe('Test non numerical inputs', () => {
        it('Employer input should accept numbers but reject letters', () => {
            cy.get('#employerMaxID').type('40000')
                .get('.errors').should('not.exist')
                .get('.employerSubmit').click();
        })
        it('Employee input should accept numbers but reject letters', () => {
            cy.get('#employerMaxID').type('55000')
                .get('.employerSubmit').click()
                .get('#employeeMinID').type('test')
                .get('.errors').should('be.visible');
        })
        it('Employee input should accept numbers but reject symbols', () => {
            cy.get('#employerMaxID').type('55000')
                .get('.employerSubmit').click()
                .get('#employeeMinID').type('-€50,000')
                .get('.errors').should('be.visible');
        })
    })
    describe('Test empty inputs', () => {
        it('Error should appear on Employer Tab when trying to submit an empty input', () => {
            cy
                .get('.employerSubmit').click()
                .get('.errors').should('be.visible');
        })
        it('Error should appear on Employee Tab when trying to submit an empty input', () => {
            cy
                .get('#employerMaxID').type('40000')
                .get('.errors').should('not.exist')
                .get('.employerSubmit').click()
                .get('.employeeSubmit').click()
                .get('.errors').should('be.visible');
        })
    })
})