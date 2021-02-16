describe("", () => {
    
    Cypress.config('baseUrl', 'https://jsonplaceholder.typicode.com')


    it('Post - create', () => {
        const post1 = {"title": "Story about the bear", "body": "This bear is a cool guy. He lives in forest", "userId": 1}
        const post2= {"title": "Story about the lion", "body": "This lion is a cool guy. He lives in forest", "userId": 2}
        const post3 = {"title": "Story about the fox", "body": "This fox is a cool girl. She lives in forest", "userId": 3}
        cy.request('POST', '/posts', post1)
        .its('body')
        .should('include', {title:'Story about the bear'})
        cy.request('POST', '/posts', post2)
        .its('body')
        .should('include', {title:'Story about the lion'})
        cy.request('POST', '/posts', post3)
        .its('body')
        .should('include', {title:'Story about the fox'})
    })

    it('Get - read', () => {
        cy.request('/posts').then((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.headers).to.not.be.null
            expect(response.body).to.not.be.null
            expect(response.body).to.have.length(100)
        })
    })

    it('Get - get by id', () => {
        cy.request('/posts/100').then((response) => {
            expect(response.body).to.not.be.null
        })
    })

    it('Put - update', () => {
        const post = {"title": "Tittle has been changed"}
        cy.request('PUT', '/posts/1', post)

    })

    it('Get - get by id', () => {
        cy.request('/posts/1').then((response) => {
            expect(response.body).to.not.be.null
        })
    })

})