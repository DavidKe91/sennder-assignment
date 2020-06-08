describe('UI to Vuex store', () => {
    beforeEach(() => cy.visit('http://localhost:8080/'))

    const getStore = () => cy.window().its('app.$store')

    it('has employerMax and employeeMin properties', () => {
        getStore()
            .its('state')
            .should('have.keys', ['employerMax'])
    })
    // it('starts null', () => {
    //     getStore().its('state').should('deep.equal', {
    //         maxEmployer: 0,
    //         minEmployee: 0
    //     })
    // })
})