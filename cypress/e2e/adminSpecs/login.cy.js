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
});
