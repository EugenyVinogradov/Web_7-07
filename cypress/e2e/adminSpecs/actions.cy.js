const { admin } = require("../../fixtures/usrers");
const { selectors } = require("../../fixtures/selectors");

describe("admin actions", () => {
  beforeEach(function () {
    cy.visit(admin.URL);
  });

  it("Added and Deleted new hall", () => {
    cy.login(admin.login, admin.password);
    cy.contains("Администраторррская");
    cy.get(selectors.addHallButton).click();
    cy.contains("Добавление зала");
    cy.get(selectors.inputField).type("New Hall");
    cy.get(selectors.submitHallButton).click();
    cy.contains("New Hall");
    cy.xpath(selectors.deleteButton).click();
    cy.get(selectors.secondSubmitDeleteButton).click();
    cy.contains("Добавление зала").should('to.not.exist');
  });

});
