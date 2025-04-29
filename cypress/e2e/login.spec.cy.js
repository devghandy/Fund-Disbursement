 describe('Login  Test', () => {
        it('valid Login Test', () => {
            cy.get('#email').fill('arca@yopmail.com')
            cy.get('#password').fill('lulu')
            cy.get('[name="signin"]').click()
            cy.contains('Welcome Gandy Signature').should('be.visible');
            cy.get('[href="../Auth"]').click()
        });
        it('should not allow login with wrong password', () => {
            cy.get('#email').fill('arca@yopmail.com')
            cy.get('#password').fill('wrongpassword')
            cy.get('[name="signin"]').click()
            cy.contains('Invalid Credential Supplied!!!').should('be.visible')
        });

        it('should not allow login with invalid email format', () => {
            cy.get('#email').fill('invalid-email')
            cy.get('#password').fill('lulu')
            cy.get('[name="signin"]').click()       
            cy.contains('Invalid Credential Supplied!!!').should('be.visible'); 
        });
       
})
        

      
  
            