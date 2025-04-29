

describe('billing account', () =>{
    it.only('should successfully add a billing account', ()=>{
            cy.get('[href="../Billing/BillingAccount"]').click()
            cy.get('#btnProcess').should('be.visible').click()
            cy.get('[name="bankList"]').should('be.visible').select('058')
            cy.get('#accountNumber').fill('0015054288')
            cy.get('input[type=file]').attachFile('MANDATE_LETTER_TO_BANKS (1).docx')
            cy.get('[class="custom-file-upload"]').click().wait(2000)
            cy.get('#submit').click()
    })

    it('should show error when required fields are empty while adding billing account', () => {
        cy.get('[href="../Billing/BillingAccount"]').click();
        cy.get('#btnProcess').should('be.visible').click()
        // cy.get('#submit').click(); 
        // cy.contains('An error occurred.Select and upload file!!!!').should('be.visible');
    });
    
})