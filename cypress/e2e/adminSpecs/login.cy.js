const { selectors } = require("../../fixtures/selectors");
const { admin } = require("../../fixtures/usrers");

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

describe("login admin", () => {
  beforeEach(function () {
    cy.visit(admin.URL);
  });

  it("login admin happy path", () => {
    cy.login(admin.login, admin.password);
    cy.contains("Администраторррская");
  });

  it("login admin sad path wrong password", () => {
    cy.login(admin.login, admin.wrongPassword);
    cy.contains("Ошибка авторизации!");
  });

  it("login admin sad path wrong login", () => {
    cy.login(admin.wrongLogin, admin.password);
    cy.contains("Ошибка авторизации!");
  });

  it("login admin sad path field login is empty", () => {
    cy.get(selectors.password).type(admin.password).click();
    cy.get(selectors.login).then($el => $el[0].checkValidity()).should('be.false')
  });

  it("login admin sad path field password is empty", () => {
    cy.get(selectors.login).type(admin.login);
    cy.get(selectors.authButton).click();
    cy.get(selectors.password).then($el => $el[0].checkValidity()).should('be.false')
  });

  it("login admin sad path fields login and password is empty", () => {
    cy.get(selectors.authButton).click();
    cy.get(selectors.login).then($el => $el[0].checkValidity()).should('be.false')
  });
});
