const { describe } = require("mocha");

describe('Agriculture, Rural & Environment', () => {
    before(() => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    });
  
    it('should click and verify the result', () => {
      cy.visit('https://portal-demo.npinew.keenable.in/'); 
  
      cy.get('body > main > div.section-padding.dark\\:bg-black.bg-\\[\\#F8F8FA\\] > div:nth-child(2) > div > div > div > div.overflow-hidden > div > div:nth-child(1) > ul > li:nth-child(1) > div > div')
        .click();
  
      cy.get('#Information > div > p').should('be.visible');
      cy.wait(3000);
    });
  });
  
  
  describe('Benefits & Social development', () => {
    before(() => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    });
  
    it('should click  and verify the result', () => {
      cy.visit('https://portal-demo.npinew.keenable.in/'); 
  
      cy.get('body > main > div.section-padding.dark\\:bg-black.bg-\\[\\#F8F8FA\\] > div:nth-child(2) > div > div > div > div.overflow-hidden > div > div:nth-child(1) > ul > li:nth-child(2) > div > div > div:nth-child(2) > a > h3')
        .click();
  
      cy.get('#Information > div > h1').should('be.visible');
      cy.wait(3000);
    });
  });
  
  
  describe('Business & Self-employed', () => {
    before(() => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    });
  
    it('should click  and verify the result', () => {
      cy.visit('https://portal-demo.npinew.keenable.in/'); 
  
      cy.get('body > main > div.section-padding.dark\\:bg-black.bg-\\[\\#F8F8FA\\] > div:nth-child(2) > div > div > div > div.overflow-hidden > div > div:nth-child(1) > ul > li:nth-child(3) > div > div > div:nth-child(2) > a > h3')
        .click();
  
      cy.get('#Information');
      cy.wait(3000); 
    });
  });
  
  
  describe('Citizenship, Visa & Passports', () => {
    before(() => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    });
  
    it('should click  and verify the result', () => {
      cy.visit('https://portal-demo.npinew.keenable.in/'); 
  
      cy.get('body > main > div.section-padding.dark\\:bg-black.bg-\\[\\#F8F8FA\\] > div:nth-child(2) > div > div > div > div.overflow-hidden > div > div:nth-child(1) > ul > li:nth-child(4) > div > div > div:nth-child(2) > a > h3')
    .click();
  
      cy.get('#Information').should('be.visible');
      cy.wait(3000); 
    });
  });
  
  
  describe('Defence & Foreign affairs', () => {
    before(() => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    });
  
    it('should click  and verify the result', () => {
      cy.visit('https://portal-demo.npinew.keenable.in/'); 
  
      cy.get('body > main > div.section-padding.dark\\:bg-black.bg-\\[\\#F8F8FA\\] > div:nth-child(2) > div > div > div > div.overflow-hidden > div > div:nth-child(1) > ul > li:nth-child(5) > div > div > div:nth-child(2) > a > h3')
        .click();
  
      cy.get('#Information').should('be.visible');
      cy.wait(3000); 
    });
  });

  describe('Driving & Transport', () => {
    before(() => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    });
  
    it('should click and verify the result', () => {
      cy.visit('https://portal-demo.npinew.keenable.in/'); 
  
      cy.get('body > main > div.section-padding.dark\\:bg-black.bg-\\[\\#F8F8FA\\] > div:nth-child(2) > div > div > div > div.overflow-hidden > div > div:nth-child(1) > ul > li:nth-child(6) > div > div > div:nth-child(2) > a > h3')
        .click();
  
      cy.get('#Ministry > div.flex.flex-col.gap-8.items-center.section-padding > div > ul > li:nth-child(2)').should('be.visible');
      cy.wait(3000); 
    });
  });
