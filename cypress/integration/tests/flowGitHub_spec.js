var repos = []
var branches = []
var options = {
    url: 'https://api.github.com/users/dendub/repos',
    dendub: '58a3874462f46adb930e8dbf2465b42d49d07620'
  };

describe("", ()=> {

    it('Get all of my repos', () => {
        cy.request(options).then((response) => {
            expect(response).to.have.property('status', 200)
            for (let i =0; i < 14; i++ ) {
                expect(response.body[i]).to.not.be.null // выводит все репы
                expect(response.body[i].name).to.exist
                repos[i] = response.body[i].name // записывает название репозиториев в эррэй
            }
        })

    })

    



    it("Show branches of each repository", () => {
        for ( let i =0; i<14; i++) {
            cy.request("https://api.github.com/repos/dendub/" + repos[i] + '/branches').then((response) => {
            expect(response.body).to.exist
            console.log(response.body.length)
            for (let j = 0; j < response.body.length; j++) {
                    expect(response.body[j].commit).to.exist
            }
            // console.log(expect(response.body[i]).length())
            // for (let i = 0; i < response.body.length(); i++) {
            //     branches[i] = response.body[i].name
            //     //  console.log(branches[i])
            // }
            // branches[i] = response.body[i].name
            // console.log(branches[i])
        })
        
        }
        // cy.request("https://api.github.com/repos/dendub/cypress_tests/branches/dev").then((response) => {
        //     expect(response).to.have.property('status', 200)
            

        // })
        // cy.request("https://api.github.com/repos/dendub/cypress_tests/commits/dev").then((response) => {
        //     expect(response).to.have.property('status', 200)
        //     expect(response).to.have.property('status', 200)

        // })
    })
        
})