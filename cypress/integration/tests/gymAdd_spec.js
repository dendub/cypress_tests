describe("Gym addition", function() {
    it("Gym addition", function() {
        cy.visit('https://bemygym.projektstudencki.pl/')
        cy.contains('ZALOGUJ').click()
        cy.login('egxy@gmail.com','12345678')
        cy.contains('DODAJ SALĘ').click()
        cy.get('input[name="gymName"]').type("Gym number 1")
        cy.get('input[name="gymStreet"]').type("Akademik 23")
        cy.get('input[name="gymCity"]').type("Poznan")
        cy.get('input[name="gymZip"]').type("60650")
        cy.get('input[name="gymLength"]').type("35")
        cy.get('input[name="gymWidth"]').type("7")
        cy.get('input[name="gymHeight"]').type("4")
        cy.get('input[name="audience"]').type("100")
        cy.get('input[name="changingRooms"]').type("2")
        cy.get('input[name="gymPrice"]').type("60")
        cy.get('input[name="gymPhone"]').type("733937083")
        cy.get('input[name="gymEmail"]').type("lol2x@gmial.com")
        cy.get('textarea').type("best gym in the city")
        cy.pause()
        cy.get('.form_button').contains('DODAJ').click()
        cy.url()
            .should('include', '/profile')
        cy.wyloguj()
    })
})
