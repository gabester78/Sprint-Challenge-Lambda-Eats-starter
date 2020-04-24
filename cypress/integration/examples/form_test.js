describe("Testing our pizza order form", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3000/Pizza");
  });
  it("Add test to inputs and submit form", function () {
    cy.get("#name").type("Gabriel").should("have.value", "Gabriel");
    cy.get("#topping1").check().should("have.value", "on");
    cy.get("#topping3").check().should("have.value", "on");
    cy.get("form").submit();
  });
});
