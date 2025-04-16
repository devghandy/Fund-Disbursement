
    describe('Login  Test', () => {
        it.only('valid Login Test', () => {
            cy.get('a[href="auth"]').click()
            cy.get('#email').fill('arca@yopmail.com')
            cy.get('#password').fill('lulu')
            cy.get('[name="signin"]').click()
            cy.get('[href="../Billing/BillingAccount"]').click()
            cy.get('#btnProcess').should('be.visible').click()
        });

        it('should successfully add a billing account', ()=>{
            cy.get('#btnProcess').should('be.visible').click()

})

        it('should not allow login with wrong password', () => {
           cy.get('a[href="auth"]').click()
           cy.get('#email').fill('arca@yopmail.com')
           cy.get('#password').fill('wrongpassword')
           cy.get('[name="signin"]').click()
           cy.contains('Invalid Credential Supplied!!!').should('be.visible')
});

      
    });
            