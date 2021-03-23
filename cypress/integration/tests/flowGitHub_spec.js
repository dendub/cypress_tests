var repos = []
var branches = []
var followers_repos_url = []

describe("", ()=> {

    it('Get all of my repos', () => {
        cy.pause()
        cy.request({url:"https://api.github.com/users/dendub/repos", headers: {Authorization: 'token 889ded736f83d4e4719d55314b16bb79041fa720'}}).then((response) => {
            
            for (let i =0; i < 14; i++ ) {
                cy.log("Repository: ")
                cy.log(response.body[i].name)

                cy.request({url:"https://api.github.com/repos/dendub/" + response.body[i].name + '/branches', headers: {Authorization: 'token 889ded736f83d4e4719d55314b16bb79041fa720'}}).then((response) => {

                    for (let j = 0; j < response.body.length; j++) {
                        cy.log("Branch:")
                        cy.log(response.body[j].name)
                        cy.log("Commit: ")
                        cy.log(response.body[j].commit.sha)
                        cy.log("----------------------------------------------")
                    }
                })
            
            }

        })

    }) 

    it("Follower repositories display", () => {
        cy.request({url: "https://api.github.com/user", headers:{Authorization: 'token 889ded736f83d4e4719d55314b16bb79041fa720'} }).then((response) => {
            let followers = (response.body.followers_url)
            cy.log('user',response.body.login)
            
            cy.request({url: followers, headers:{Authorization: 'token 889ded736f83d4e4719d55314b16bb79041fa720'} }).then((response) => {
                
                for (let i =0; i < response.body.length; i++) {
                    cy.log("User: ")
                    cy.log(response.body[i].login)
                    
                    cy.request({url: response.body[i].repos_url, headers:{Authorization: 'token 889ded736f83d4e4719d55314b16bb79041fa720'}}).then((response) => {
                        // cy.log(response.body)
                        cy.log("Repositories: ")
                        for (let i = 0; i < response.body.length; i++) {
                            cy.log(response.body[i].name)
                        }
                        cy.log("----------------------------------------------")
                    })
                }
            
            })
        })
        
        
        
    })

    it("Display repos of the users that follow your following user", () => {
        cy.request({url: "https://api.github.com/user/following", headers:{Authorization: 'token 889ded736f83d4e4719d55314b16bb79041fa720'} }).then((response) => {
            
            for(let i = 0; i < response.body.length; i++) {
                cy.log("Username of the person that I follow")
                cy.log(response.body[i].login)
                cy.request({url: response.body[i].followers_url,  headers:{Authorization: 'token 889ded736f83d4e4719d55314b16bb79041fa720'}}).then((response) => {
                    for( let z =0; z <response.body.length; z++) {
                        cy.log("Username of the person who owns repos")
                        cy.log(response.body[z].login)
                        cy.request({url: response.body[z].repos_url, headers:{Authorization: 'token 889ded736f83d4e4719d55314b16bb79041fa720'}}).then((response) => {
                            for (let j=0; j < response.body.length; j++) {
                                cy.log("Name of the repository number " + j)
                                cy.log(response.body[j].name)
                            }
                            cy.log("----------------------------------------------")
                        }) 
                    }
                    })
                }
            })
        }) 

    it("List all emojis", () => {
        cy.request({url: "https://api.github.com/search/repositories?q={query}{&page,per_page,sort,order}", headers:{Authorization: 'token 889ded736f83d4e4719d55314b16bb79041fa720'} }).then((response) => {
           for (let i =0; i < response.body.items.length; i++) {
                cy.log("Name of the repo")
                cy.log(response.body.items[i].name)
                cy.log("Owner info")
                cy.log(response.body.items[i].owner)
                cy.log(response.body.items[i].owner.login)
                cy.log(response.body.items[i].owner.id)
                cy.log(response.body.items[i].owner.repos_url)
            //     cy.request({url: "https://api.github.com/repos/" + response.body.items[i].owner.login +"/" +response.body.items[i].name +"/branches", headers:{Authorization: 'token 889ded736f83d4e4719d55314b16bb79041fa720'} }).then((response) => {
            //         cy.log("Name of the branches")
            //         for (let j =0; j < response.body.length;j++) {
            //             cy.log(response.body[j].name)
            //         }
            //         cy.log("----------------------------------------------")
            //    })
           }
                
            
        })
    })



    // it("Show branches of each repository", () => {
    //     for ( let i =0; i<14; i++) {
    //         cy.request("https://api.github.com/repos/dendub/" + repos[i] + '/branches').then((response) => {
    //         expect(response.body).to.exist
    //         console.log(response.body.length)
    //         for (let j = 0; j < response.body.length; j++) {
    //                 expect(response.body[j].commit).to.exist
    //         }
    //         // console.log(expect(response.body[i]).length())
    //         // for (let i = 0; i < response.body.length(); i++) {
    //         //     branches[i] = response.body[i].name
    //         //     //  console.log(branches[i])
    //         // }
    //         // branches[i] = response.body[i].name
    //         // console.log(branches[i])
    //     })
        
    //     }
    //     // cy.request("https://api.github.com/repos/dendub/cypress_tests/branches/dev").then((response) => {
    //     //     expect(response).to.have.property('status', 200)
            

    //     // })
    //     // cy.request("https://api.github.com/repos/dendub/cypress_tests/commits/dev").then((response) => {
    //     //     expect(response).to.have.property('status', 200)
    //     //     expect(response).to.have.property('status', 200)

    //     // })
    // })
        
})