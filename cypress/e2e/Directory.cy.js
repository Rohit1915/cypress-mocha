const {describe} = require("mocha")

describe('Who Who test', () => {
    before(() => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    });
  
    it('should click and verify the result', () => {
      cy.visit('https://portal-demo.npinew.keenable.in/'); 
  
      cy.get('body > main > section.bg-\\[\\#F8F8FA\\].dark\\:bg-black.mix-blend-normal.bg-no-repeat.bg-top.bg-\\[url\\(\\"\\/image\\/static\\/GovernmentDirectoriesVector\\.png\\"\\)\\].section-padding > div > ul > li:nth-child(1)')
        .click();
  
      cy.get('#whoiswho > div.relative.section-padding.content-panel.z-\\[10\\].content-card-margin-top').should('be.visible');
      cy.wait(3000);
    });
  });

  describe('Contact Directory Test', () => {
    before(() => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    });
  
    it('should click and verify the result', () => {
      cy.visit('https://portal-demo.npinew.keenable.in/'); 
  
      cy.get('body > main > section.bg-\\[\\#F8F8FA\\].dark\\:bg-black.mix-blend-normal.bg-no-repeat.bg-top.bg-\\[url\\(\\"\\/image\\/static\\/GovernmentDirectoriesVector\\.png\\"\\)\\].section-padding > div > ul > li:nth-child(2)')
        .click();
  
      cy.get('#Central > div > div.section-padding.\\!pb-0').should('be.visible');
      cy.wait(3000);
    });
  });

  describe('Web Directory Test', () => {
    before(() => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    });
  
    it('should click and verify the result', () => {
      cy.visit('https://portal-demo.npinew.keenable.in/'); 
  
      cy.get('body > main > section.bg-\\[\\#F8F8FA\\].dark\\:bg-black.mix-blend-normal.bg-no-repeat.bg-top.bg-\\[url\\(\\"\\/image\\/static\\/GovernmentDirectoriesVector\\.png\\"\\)\\].section-padding > div > ul > li:nth-child(3)')
        .click();
  
      cy.get('#About\\ Web\\ Direcory').should('be.visible');
      cy.wait(3000);
    });
  });

  describe('Public Utilities Test', () => {
    before(() => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    });
  
    it('should click and verify the result', () => {
      cy.visit('https://portal-demo.npinew.keenable.in/'); 
  
      cy.get('body > main > section.bg-\\[\\#F8F8FA\\].dark\\:bg-black.mix-blend-normal.bg-no-repeat.bg-top.bg-\\[url\\(\\"\\/image\\/static\\/GovernmentDirectoriesVector\\.png\\"\\)\\].section-padding > div > ul > li:nth-child(4)')
        .click();
  
      cy.get('#content > div > div > div > section:nth-child(1) > div').should('be.visible');
      cy.wait(3000);
    });
  });

  describe('Help Line Test', () => {
    before(() => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    });
  
    it('should click and verify the result', () => {
      cy.visit('https://portal-demo.npinew.keenable.in/'); 
  
      cy.get('body > main > section.bg-\\[\\#F8F8FA\\].dark\\:bg-black.mix-blend-normal.bg-no-repeat.bg-top.bg-\\[url\\(\\"\\/image\\/static\\/GovernmentDirectoriesVector\\.png\\"\\)\\].section-padding > div > ul > li:nth-child(5)')
        .click();
  
      cy.get('#content > div > div > div > section.relative.shadow.content-panel.content-card-margin-top > div.content-panel.relative.z-\\[1\\].section-padding.\\!pb-0').should('be.visible');
      cy.wait(3000);
    });
  });