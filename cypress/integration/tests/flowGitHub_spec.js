describe("", ()=> {

    it('Get all of my repos', () => {
        cy.request( "https://api.github.com/users/dendub/repos").then((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.have.length(14) //проверка эрэя репорзиторий на колво элементов
            expect(response.body[2]).to.not.be.null //проверка существует ли второй элемент эрэя
            expect(response.body[2].name).to.equal("cypress_tests") //проверка является ли он репозиторией "cypress_tests"

        })
    })


    it("Get all of the branches of the cypress_tests repo", () => {
        cy.request("https://api.github.com/repos/dendub/cypress_tests/branches").then((response) => {
            expect(response).to.have.property('status', 200)
            expect(response).to.have.property('status', 200)

        })

    })
})