const { describe } = require("mocha")

describe('Travel & Tourism test', () => {
    before(() => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    });
  
    it('should click and verify the result', () => {
      cy.visit('https://portal-demo.npinew.keenable.in/'); 
  
      cy.get('body > main > div.bg-\\[\\#F8F8FA\\].dark-black.overflow-hidden > div.w-full.md\\:w-\\[95\\%\\].lg\\:max-w-\\[1600px\\].mx-auto.relative.z-\\[1\\] > div.bg-\\[\\#4338B0\\].z-\\[2\\].relative > div > div.lg\\:max-w-\\[592px\\].w-full.py-4.md\\:py-8.md\\:px-4.lg\\:px-0.z-\\[1\\] > div.grid.grid-cols-4.lg\\:grid-cols-2.lg\\:gap-4.overflow-x-auto.no-scrollbar.min-w-\\[370px\\].mx-auto.lg\\:mx-20 > a:nth-child(1)')
        .click();
  
      cy.get('#content > main > div.flex.flex-col.lg\\:flex-row.justify-between.items-start.lg\\:items-center.dark\\:text-white.mb-3').should('be.visible');
      cy.wait(3000);
    });
  });

  describe('Culinary Delight test', () => {
    before(() => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    });
  
    it('should click and verify the result', () => {
      cy.visit('https://portal-demo.npinew.keenable.in/'); 
  
      cy.get('body > main > div.bg-\\[\\#F8F8FA\\].dark-black.overflow-hidden > div.w-full.md\\:w-\\[95\\%\\].lg\\:max-w-\\[1600px\\].mx-auto.relative.z-\\[1\\] > div.bg-\\[\\#4338B0\\].z-\\[2\\].relative > div > div.lg\\:max-w-\\[592px\\].w-full.py-4.md\\:py-8.md\\:px-4.lg\\:px-0.z-\\[1\\] > div.grid.grid-cols-4.lg\\:grid-cols-2.lg\\:gap-4.overflow-x-auto.no-scrollbar.min-w-\\[370px\\].mx-auto.lg\\:mx-20 > a:nth-child(2)')
        .click();
  
      cy.get('#content > main > div.flex.flex-col.lg\\:flex-row.justify-between.items-start.lg\\:items-center.dark\\:text-white.mb-3').should('be.visible');
      cy.wait(3000);
    });
  });

  describe('One District One Product test', () => {
    before(() => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    });
  
    it('should click and verify the result', () => {
      cy.visit('https://portal-demo.npinew.keenable.in/'); 
  
      cy.get('body > main > div.bg-\\[\\#F8F8FA\\].dark-black.overflow-hidden > div.w-full.md\\:w-\\[95\\%\\].lg\\:max-w-\\[1600px\\].mx-auto.relative.z-\\[1\\] > div.bg-\\[\\#4338B0\\].z-\\[2\\].relative > div > div.lg\\:max-w-\\[592px\\].w-full.py-4.md\\:py-8.md\\:px-4.lg\\:px-0.z-\\[1\\] > div.grid.grid-cols-4.lg\\:grid-cols-2.lg\\:gap-4.overflow-x-auto.no-scrollbar.min-w-\\[370px\\].mx-auto.lg\\:mx-20 > a:nth-child(3)')
        .click();
  
      cy.get('#content > main > div.flex.flex-col.lg\\:flex-row.justify-between.items-start.lg\\:items-center.dark\\:text-white.mb-3').should('be.visible');
      cy.wait(3000);
    });
  });

  describe('Facts of India test', () => {
    before(() => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    });
  
    it('should click and verify the result', () => {
      cy.visit('https://portal-demo.npinew.keenable.in/'); 
  
      cy.get('body > main > div.bg-\\[\\#F8F8FA\\].dark-black.overflow-hidden > div.w-full.md\\:w-\\[95\\%\\].lg\\:max-w-\\[1600px\\].mx-auto.relative.z-\\[1\\] > div.bg-\\[\\#4338B0\\].z-\\[2\\].relative > div > div.lg\\:max-w-\\[592px\\].w-full.py-4.md\\:py-8.md\\:px-4.lg\\:px-0.z-\\[1\\] > div.grid.grid-cols-4.lg\\:grid-cols-2.lg\\:gap-4.overflow-x-auto.no-scrollbar.min-w-\\[370px\\].mx-auto.lg\\:mx-20 > a:nth-child(4)')
        .click();
  
      cy.get('#content > main > div > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(1) > h1').should('be.visible');
      cy.wait(3000);
    });
  });