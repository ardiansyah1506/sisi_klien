/* eslint-disable no-undef */
describe("Comprehensive Authentication Tests", () => {
  const baseUrl = "http://localhost:5173";

  beforeEach(() => {
    cy.visit(`${baseUrl}/login`);
    cy.url().should("include", "/login");
  });

  context("Login Tests", () => {
    it("should log in with valid credentials", () => {
      cy.get("input#email").type("hello@example.com");
      cy.get("input#password").type("123456");
      cy.get("button").contains("Login").click();

      cy.url().should("include", "/");
      cy.get("header").should("contain.text", "Welcome");
    });

    it("should not log in with invalid email", () => {
      cy.get("input#email").type("invalid@example.com");
      cy.get("input#password").type("123456");
      cy.get("button").contains("Login").click();

      // Verify error message
      cy.get("div").contains("Email not found").should("be.visible");
      cy.url().should("include", "/login");
    });

    it("should not log in with wrong password", () => {
      cy.get("input#email").type("hello@example.com");
      cy.get("input#password").type("wrongpassword");
      cy.get("button").contains("Login").click();

      cy.get("div").contains("Incorrect password").should("be.visible");
      cy.url().should("include", "/login");
    });

    it("should not log in with empty fields", () => {
      cy.get("button").contains("Login").click();

      cy.get("div").contains("Email is required").should("be.visible");
      cy.get("div").contains("Password is required").should("be.visible");
    });

    it("should not log in with invalid email format", () => {
      cy.get("input#email").type("invalidemail");
      cy.get("input#password").type("123456");
      cy.get("button").contains("Login").click();

      cy.get("div").contains("Invalid email format").should("be.visible");
    });

    it("should not log in with short password", () => {
      cy.get("input#email").type("hello@example.com");
      cy.get("input#password").type("123");
      cy.get("button").contains("Login").click();

      cy.get("div").contains("Password must be at least 6 characters").should("be.visible");
    });
  });


  context("Logout Tests", () => {
    it("should log out successfully", () => {
      // Perform login first
      cy.get("input#email").type("hello@example.com");
      cy.get("input#password").type("123456");
      cy.get("button").contains("Login").click();

      // Logout process
      cy.get("button").contains("Logout").click();

      // Verify redirection to login page
      cy.url().should("include", "/login");
      cy.get("input#email").should("be.visible");
    });
  });
});
