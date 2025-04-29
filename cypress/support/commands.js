import 'cypress-file-upload';

    // ***********************************************
    // Visit https://on.cypress.io/custom-commands to
    // learn more about custom commands.
    // ***********************************************
    //
    //
    
    Cypress.Commands.add('login', ()=>{
      cy.visit('/')
      cy.get('#email').type('arca@yopmail.com')
      cy.get('#password').type('lulu')
      cy.get('[name="signin"]').click()
    })
    
    //
    // -- This is a child command --
    // Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
    //
    //
    // -- This is a dual command --
    // Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
    //
    //
    // -- This will overwrite an existing command --
    // Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
        
    beforeEach(() =>{
        cy.on('uncaught:exception', ()=>{
          return false
        })
        cy.visit('/')
        cy.login()
      })