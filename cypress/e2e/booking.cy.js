const seats = require("../fixtures/seats.json");
const { selectors } = require("../fixtures/selectors");
const { admin } = require("../fixtures/usrers");

it("booking three tickets on next day", () => {
  cy.visit(admin.URL);
  cy.login(admin.login, admin.password);
  cy.xpath(selectors.firstHall)
    .then(($el) => $el.textContent)
    .should("have.text", "data.newHall");
  cy.xpath(selectors.firstHall)
    .invoke("text")
    .then((hallName) => {
      cy.visit("/");
      cy.get(selectors.nextDay).click();
      cy.get(selectors.hallsInTheater).last().should("have.text", hallName);
      cy.contains(hallName)
        .parent()
        .children(selectors.seance)
        .children(selectors.seanceTime)
        .click();
      seats.forEach((seats) => {
        let selector =
          selectors.seatsPart1 +
          `${seats.row}` +
          selectors.seatsPart2 +
          `${seats.seat}` +
          selectors.seatsPart3;
        cy.get(selector).click();
      });
      cy.get(selectors.bookingButton).click();
      cy.get(selectors.bookingTitle).should("have.text", "Вы выбрали билеты:");
      cy.get(selectors.bookingSeatsAndRows).should(
        "have.text",
        "Ряд/Место: 5/4, 5/5, 5/6"
      );
      cy.get(selectors.bookingHall).should("have.text", `В зале: ${hallName}`);
      cy.contains("Получить код бронирования")
        .should("be.visible")
        .and("not.be.disabled");
    });
});
