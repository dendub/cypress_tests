describe("", () => {

    Cypress.config('baseUrl', 'https://jsonplaceholder.typicode.com')

    it('Get - get all users', () => {
        cy.request('/users').then((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.have.length(10)
        })
    })

    it('Delete', () => {
        cy.request({method:'DELETE', url: '/users/2', failOnStatusCode: false})
    })

    it("Post - add users", () => {
        const user1 = {'name': 'Denys Dubovskyy', "username": "Denys", "email":"lol@gmail.com", "adress" : { "street" : "Piatkowska", "suite" : "404", "zipcode": "60-650", "geo": { "lat": "-37.3159", "lng" : "81.1496"}}, "phone" : "123456789", "website" : "user1.com", "company" : {"name": "Samsung", "catchPhrase" : "Best phones ever", "bs" : "tech company"} }
        cy.request('POST', '/users', user1)
        .its('body')
        .should('include',{email:"lol@gmail.com"})
        })
    
    it('Get - get by id', () => {
        cy.request('/users/7').then((response) => {
            expect(response.body).to.not.be.null
        })
    }) 

})