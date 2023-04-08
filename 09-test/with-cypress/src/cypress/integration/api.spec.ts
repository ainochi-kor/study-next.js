import cypress from "cypress";

describe("articles APIs", () => {
  it("should correctly set application/json header", () => {
    cy.request("http://localhost:3000/api/articles")
      .its("headers")
      .its("content-type")
      .should("include", "application/json");
  });
});
