describe('Contact form', function(){
    it('contact form', function(){
        cy.visit('https://bemygym.projektstudencki.pl/')
        cy.contains('ZALOGUJ').click()
        cy.login('ddubovskyssssy@gmail.com','12345678')
        cy.contains('PROFIL').click()
        cy.get('.profile-gyms-show').click()
        // cy.get('.change_status').click({multiple: true})
        // cy.get('.delete_btn').click({multiple: true})
        cy.wyloguj()
    })
})