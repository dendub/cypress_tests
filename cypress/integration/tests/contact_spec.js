describe('Contact form', function(){
    it('contact form', function(){
        cy.visit('https://bemygym.projektstudencki.pl/')
        cy.contains('Skontaktuj się z nami!').click()
        cy.get('input[name="nickname"]').type('Denys Dubovskyy')
        cy.get('input[name="email"]').type('egxy@gmail.com')
        cy.get('textarea[name="message"]').type('I faced problems with gyms bookings')
        cy.get('.button').click()
        cy.pause()
        cy.contains("OK").click()
        cy.get(".logo1").click()

    })
})