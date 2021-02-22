var repos = []

describe("", ()=> {

    it('Get all of my repos', () => {
        cy.request( "https://api.github.com/users/dendub/repos").then((response) => {
            expect(response).to.have.property('status', 200)
            for (let i =0; i < 14; i++ ) {
                expect(response.body[i]).to.not.be.null // выводит все репы
                expect(response.body[i].name).to.exist
                repos[i] = response.body[i].name // записывает название репозиториев в эррэй
            }
            // for (let i =0; i < 14; i++) {
            //     console.log(repos[i])
            // }
        })

    })

    



    it("Show branches of each repository", () => {
        for ( let i =0; i<14; i++) {
            cy.request("https://api.github.com/repos/dendub/" + repos[i] + '/branches').then((response) => {
            expect(response).to.have.property('status', 200)

        })
        }
        cy.request("https://api.github.com/repos/dendub/cypress_tests/branches/dev").then((response) => {
            expect(response).to.have.property('status', 200)
            

        })
        // cy.request("https://api.github.com/repos/dendub/cypress_tests/commits/dev").then((response) => {
        //     expect(response).to.have.property('status', 200)
        //     expect(response).to.have.property('status', 200)

        // })
    })
})