
Cypress.Commands.add('login', () => {
  cy.visit('/');
  cy.get('#email').type('arca@yopmail.com');
  cy.get('#password').type('lulu');
  cy.get('[name="signin"]').click();
  cy.url().should('include', '/Dashboard/Dash'); // optional check
});


    // ***********************************************
    // Visit https://on.cypress.io/custom-commands to
    // learn more about custom commands.
    // ***********************************************
    //
    //
    // -- This is a parent command --
    // Cypress.Commands.add('login', (email, password) => { })
    //
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
      })