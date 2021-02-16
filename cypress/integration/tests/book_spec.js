describe('Booking gym', function(){
    it('booking', function(){
        cy.visit('https://bemygym.projektstudencki.pl/')
        cy.get('.btn-primary').click()
        cy.contains('więcej informacji').click()
        cy.get('input[label="imię"]').type("denys") 
        cy.get('input[label="nazwisko"]').type("dubovskyy") 
        cy.get('input[label="Email"]').type("dubovskyy@gmail.com") 
        cy.get('input[label="Telefon"]').type("733937083") 
        cy.get('.booking-button').click()
        cy.get('#react-tabs-2').click()
        
        cy.contains('ZALOGUJ').click()
        cy.login('egxy@gmail.com','12345678 ')
    })
})