const { describe } = require("mocha");

describe('Apply Central Govt. Test', () => {
    before(() => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    });
  
    it('should click and verify the result', () => {
      cy.visit('https://portal-demo.npinew.keenable.in/'); 
  
      cy.get('#content > div > div.flex-\\[1\\].bg-theme-primary.md\\:bg-white.text-white.px-4.py-4.\\32 xl\\:px-10.\\32 xl\\:py-14 > ul > li:nth-child(1) > a > div.flex.flex-col > h2')
  .click();
  
  cy.get('#content > main > div.flex.flex-col.divide-y > div:nth-child(2) > div').should('be.visible');
      cy.wait(4000);
    });
  });
  
  
  describe('State Govt. Test', () => {
    before(() => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    });
  
    it('should click and verify the result', () => {
      cy.visit('https://portal-demo.npinew.keenable.in/'); 
  
      cy.get('#content > div > div.flex-\\[1\\].bg-theme-primary.md\\:bg-white.text-white.px-4.py-4.\\32 xl\\:px-10.\\32 xl\\:py-14 > ul > li:nth-child(2)')
        .click();
  
      cy.get('#content > main > div.border-\\[1px\\].border-\\[\\#D3D3D3\\].my-4').should('be.visible');
      cy.wait(4000);
    });
  });
  
  
  // describe('Category Test', () => {
  //   before(() => {
  //     Cypress.on('uncaught:exception', (err, runnable) => {
  //       return false;
  //     });
  //   });
  
  //   it('should click and verify the result', () => {
  //     cy.visit('https://portal-demo.npinew.keenable.in/'); 
  
  //     cy.get('#content > div > div.flex-\\[1\\].bg-theme-primary.md\\:bg-white.text-white.px-4.py-4.\\32 xl\\:px-10.\\32 xl\\:py-14 > ul > li:nth-child(4)')
  //       .click();
  
  //     cy.get('#content > main').should('be.visible');
  //     cy.wait(4000); 
  //   });
  // });

  describe('Calendar', () => {
    before(() => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    });
  
    it('should click and verify the result', () => {
      cy.visit('https://portal-demo.npinew.keenable.in/'); 
  
      cy.get('body > main > header > div > div.absolute.right-0.bottom-\\[59\\%\\].sm\\:bottom-\\[52\\%\\] > div > a > div.p-\\[0\\.5em\\].pl-\\[0\\.75rem\\]')
        .click();
  
      cy.get('#content > div.flex.flex-wrap.md\\:justify-center.justify-start.relative.gap-3 > h1').should('be.visible');
      cy.wait(4000); 
    });
  });
