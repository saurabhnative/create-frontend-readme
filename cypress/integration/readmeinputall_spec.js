describe("readme inputs all necessary steps", () => {
  beforeEach(() => {
    cy.visit("/app");
  });

  it("user can build a complete README file", () => {
    cy.get("#project-title").type("Stories Feed App");

    cy.get("h1").should("have.text", "Stories Feed App");
    cy.get("#project-image-url").type(Cypress.env("project_image_url"));

    cy.get('[alt="project-image"]')
      .should("be.visible")
      .and(($img) => {
        // "naturalWidth" and "naturalHeight" are set when the image loads
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      });

    cy.get("#project-description").type(
      "This application can be used to learn interesting facts about various categories like technology and fitness via stories"
    );
    cy.get("#description").should("contain", "This application can be used ");

    cy.get("#ShieldsIOContainer").click();

    cy.get(
      "#shields-io-input-container > .react-tagsinput > span > .react-tagsinput-input"
    )
      .type(Cypress.env("badge_url"))
      .type("{enter}")
      .type(Cypress.env("badge_url_2"))
      .type("{enter}")
      .type(Cypress.env("badge_url_3"))
      .type("{enter}");

    cy.get('[alt="shields"]')
      .should("be.visible")
      .and(($img) => {
        // "naturalWidth" and "naturalHeight" are set when the image loads
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      });

    cy.get("#projectDemoContainer").click();
    cy.get("#project-demo-url").type(Cypress.env("project_demo_url"));
    cy.get("a").should("exist");
    cy.get("#projectScreenShotsContainer").click();
    cy.get("[data-cy=first-text-inputScreenshotImageURL0]").type(
      Cypress.env("project_screenshot_url")
    );
    cy.get("[data-cy=second-text-inputEnterWidth0]").type("200");
    cy.get("[data-cy=third-text-inputEnterHeight0]").type("400");
    cy.get('[alt="project-screenshot"]')
      .should("be.visible")
      .and(($img) => {
        // "naturalWidth" and "naturalHeight" are set when the image loads
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      });
    cy.get("#featuresContainer").click();
    cy.get(
      "[data-cy=features-input-tags-containerFeatures] > .react-tagsinput > span > .react-tagsinput-input"
    )
      .type("News about various categories delivered in form of stories")
      .type("{enter}")
      .type("New from over 9 distinct categories")
      .type("{enter}");
    cy.get("#installationStepsContainer").click();
    cy.get("[data-cy=first-text-inputInstallationStep0]").type(
      "Run the app in the development mode"
    );
    cy.get("[data-cy=second-text-inputCodeforstep0]").type("yarn start");
    cy.get('[data-cy="Installation Step-button"]').click();
    cy.get("[data-cy=first-text-inputInstallationStep1]").type(
      "Builds the app for production to the build folder"
    );
    cy.get("[data-cy=second-text-inputCodeforstep1]").type("yarn build");
  });
});
