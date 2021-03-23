describe('Login', function(){
    it('Login', function() {
        cy.visit('https://bemygym.projektstudencki.pl/')
        cy.pause()
        cy.contains('ZALOGUJ').click()
        cy.contains('Zarejestruj się').click()
        cy.get('input[id="firstName"]').type("denys")
        cy.get('input[id="surname"]').type("dubovskyy")
        cy.get('input[id="email"]').type("egxy991111@gmail.com")
        cy.get('input[id="number"]').type("733937083")
        cy.get('input[id="password"]').type("12345678")
        cy.contains('Zarejestruj').click()
        cy.url()
            .should('include', '/')

        cy.wyloguj()
        cy.contains('ZALOGUJ').click()
        cy.login('egxy@gmail.com','12345678')
        cy.url()
            .should('include', '/')
        cy.wyloguj()
    })
})