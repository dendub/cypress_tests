const { duration } = require("moment");

let log = console.log;

describe('', () => {

    it('Choose MacBook', () => {
        cy.visit('https://www.apple.com/')
        
        cy.get("a").contains("Mac").click({force:true}) 
        cy.pause()
        cy.macs("MacBook Air")
        cy.macs("MacBook Pro 13”")
        cy.macs("MacBook Pro 16")
        cy.macs("iMac")
        cy.macs("iMac Pro")
        cy.macs("Mac Pro")
        cy.macs("Mac mini")
        cy.macs("Compare")
        cy.macs("Pro Display XDR")
        

        cy.get(".chapternav-items").contains("MacBook Pro 16").click()
        cy.get(".ac-ln-menu-link").contains("Tech Specs").click()
        cy.scrollTo("bottom", {duration:1000})
        cy.scrollTo("top", {duration:1000})
        // cy.get("#nav-hamburger-menu").click()
        // cy.get(".hmenu-item").contains("Sign In").click()

        // cy.get('input[type="email"]').type("ddubovskyy@gmail.com")
        // cy.get('#continue').click()
        // cy.get('input[type="password"]').type("ddubovskyy99")
        // cy.get('#signInSubmit').click()

        // cy.get("#nav-hamburger-menu").click()
        // cy.get(".hmenu-item").contains("Electronics").click()
        // cy.get('.hmenu-back-button').contains("main menu").click({force:true})

        // cy.get(".hmenu-item").each(() => {
        //     cy.get(".hmenu-item").click({multiple : true, force:true})
        //     cy.get('a[aria-label="Back to main menu"]').click({multiple:true, force:true})
        // })
        // cy.get(".hmenu-item").contains("Electronics").click()
        // cy.get(".hmenu-item").contains("Camera & Photo").click()
        
    })
})