const { describe } = require("mocha");

describe('Apply Aadhar Button Test', () => {
    before(() => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    });
  
    it('should click and verify the result', () => {
      cy.visit('https://portal-demo.npinew.keenable.in/'); 
  
      cy.get('body > main > header > div > div.landing-container > div.flex.flex-col.items-center.justify-center.gap-2.mx-auto.mt-4 > div.flex.flex-col.sm\\:flex-row.justify-center.text-\\[0\\.75rem\\].items-center.my-1.sm\\:mt-4.gap-2.sm\\:text-\\[1rem\\] > ul > li:nth-child(1)')
        .click();
  
      cy.get('#content > main > div.my-2 > div:nth-child(1) > div > p.text-slate-500.dark\\:text-gray-100.ellipsis-2').should('be.visible');
      cy.wait(3000);
    });
  });
  
  
  describe('Digilocker Button Test', () => {
    before(() => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    });
  
    it('should click and verify the result', () => {
      cy.visit('https://portal-demo.npinew.keenable.in/'); 
  
      cy.get('body > main > header > div > div.landing-container > div.flex.flex-col.items-center.justify-center.gap-2.mx-auto.mt-4 > div.flex.flex-col.sm\\:flex-row.justify-center.text-\\[0\\.75rem\\].items-center.my-1.sm\\:mt-4.gap-2.sm\\:text-\\[1rem\\] > ul > li:nth-child(2)')
        .click();
  
      cy.get('#main-bread-crumb').should('be.visible');
      cy.wait(3000);
    });
  });
  
  
  describe('New Voter Registration', () => {
    before(() => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    });
  
    it('should click and verify the result', () => {
      cy.visit('https://portal-demo.npinew.keenable.in/'); 
  
      cy.get('body > main > header > div > div.landing-container > div.flex.flex-col.items-center.justify-center.gap-2.mx-auto.mt-4 > div.flex.flex-col.sm\\:flex-row.justify-center.text-\\[0\\.75rem\\].items-center.my-1.sm\\:mt-4.gap-2.sm\\:text-\\[1rem\\] > ul > li:nth-child(3)')
        .click();
  
      cy.get('#content > main > div.flex.flex-wrap.items-center.justify-between > div').should('be.visible');
      cy.wait(3000); 
    });
  });
  
  
  describe('Tatkaal Passport Service', () => {
    before(() => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    });
  
    it('should click and verify the result', () => {
      cy.visit('https://portal-demo.npinew.keenable.in/'); 
  
      cy.get('body > main > header > div > div.landing-container > div.flex.flex-col.items-center.justify-center.gap-2.mx-auto.mt-4 > div.flex.flex-col.sm\\:flex-row.justify-center.text-\\[0\\.75rem\\].items-center.my-1.sm\\:mt-4.gap-2.sm\\:text-\\[1rem\\] > ul > li:nth-child(4) > button')
    .click();
  
      cy.get('#content > main > div.my-2 > div:nth-child(1) > div').should('be.visible');
      cy.wait(3000); 
    });
  });
  
  
  describe('Apply for Driving Licence', () => {
    before(() => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    });
  
    it('should click and verify the result', () => {
      cy.visit('https://portal-demo.npinew.keenable.in/'); 
  
      cy.get('body > main > header > div > div.landing-container > div.flex.flex-col.items-center.justify-center.gap-2.mx-auto.mt-4 > div.flex.flex-col.sm\\:flex-row.justify-center.text-\\[0\\.75rem\\].items-center.my-1.sm\\:mt-4.gap-2.sm\\:text-\\[1rem\\] > ul > li:nth-child(5) > button')
        .click();
  
      cy.get('#content > main > div.my-2 > div:nth-child(1) > div > div.flex.items-center.gap-4.flex-wrap.md\\:mb-2 > div').should('be.visible');
      cy.wait(3000); 
    });
  });

  describe