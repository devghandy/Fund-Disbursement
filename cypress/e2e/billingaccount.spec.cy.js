

describe('billing account', () =>{
    before(() => {
        cy.login(); // ← now you're logged in before each test
      });

    it('should successfully add a billing account', ()=>{
        cy.get('[href="../Billing/BillingAccount"]').click()
        cy.get('#btnProcess').should('be.visible').click()

    })
})