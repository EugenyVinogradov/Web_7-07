// const { describe } = require("mocha");
const { selectors } = require("../fixtures/selectors");
const { admin } = require("../fixtures/usrers");




it("correct display of the main page", () => {
  cy.visit('/');
  cy.get(selectors.daysToolbar).should('have.length', 7);
  cy.get(selectors.moviesTitle).should('be.visible');
})


describe('login admin', () => {

  beforeEach(function() {          
    cy.visit(admin.URL);
  });

  it('login admin happy path', () => {
    cy.login(admin.login, admin.password);
    cy.contains('Администраторррская');
  })

  it('login admin sad path wrong password', () => {
    cy.login(admin.login, admin.wrongPassword);
    cy.contains('Ошибка авторизации!');
  })

  it('login admin sad path wrong login', () => {
    cy.login(admin.wrongLogin, admin.password);
    cy.contains('Ошибка авторизации!');
  })

})


it.only('booking three tickets on next day', () => {
  cy.visit(admin.URL);
  cy.login(admin.login, admin.password);
  const hallsArray = cy.get(selectors.hallsArray).invoke('text');
  cy.log(hallsArray);    
  // console.log(movieFirst);
  // cy.visit('/');
  // cy.get(selectors.nextDay).click();
  // cy.contains(movieFirst);



})