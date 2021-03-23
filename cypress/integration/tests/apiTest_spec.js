describe('API test', () => {

    Cypress.config('baseUrl', 'http://dummy.restapiexample.com/api/v1')

    it('GET - read', () => {
        cy.request('/employees').then((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
            expect(response.body.data).to.have.length(24)
        })
    })

    it('Post - create', () => {
        const emp = {"name": "test", "salary": "123", "age":"23"}
        cy.request('POST', '/create', emp)
        .its('body')
        .its('data')
        .should('include', {name:'test'})
    })

    it('Put - update', () => {
        const emp = {"employee_name": "denys"}
        cy.request('PUT', '/update/2', emp)

    })

    it('Delete', () => {
        cy.request({method:'DELETE', url: '/delete/2', failOnStatusCode: false})
    })
    

})