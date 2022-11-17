const { selectors } = require("../fixtures/selectors");

it("correct display of the main page", () => {
  cy.visit("/");
  cy.get(selectors.daysToolbar).should("have.length", 7);
  cy.get(selectors.moviesTitle).should("be.visible");
});
