const { selectors } =  require("../fixtures/selectors");


Cypress.Commands.add("login", (login, password) => {
    cy.get(selectors.login).type(login);
    cy.get(selectors.password).type(password);
    cy.get(selectors.authButton).click();
   })

 