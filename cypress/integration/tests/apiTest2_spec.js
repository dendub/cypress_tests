describe('API-test2', () => {

    Cypress.config('baseUrl', 'https://jsonplaceholder.typicode.com')

    it('Get - read', () => {
        cy.request('/posts').then((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.headers).to.not.be.null
            expect(response.body).to.have.length(100)
        })
    })

    it('Get - post by id', () => {
        cy.request('/posts/2').then((response) => {
            expect(response.body).to.not.be.null
        })
    })

    it('Post - create', () => {
        const post = {"title": "test", "body": "bar", "userId":1}
        cy.request('POST', '/posts', post)
        .its('body')
        .should('include', {title:'test'})
    })

    it('Put - update', () => {
        const post = {"title": "testing2"}
        cy.request('PUT', '/posts/1', post)

    })

    it('Delete', () => {
        cy.request({method:'DELETE', url: '/posts/2', failOnStatusCode: false})
    })
})