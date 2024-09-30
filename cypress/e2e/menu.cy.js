const { describe } = require("mocha");

// Menu Bar

describe('Menu Bar Test', () => {
    before(() => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    });
  
    it('should click and verify the result', () => {
      cy.visit('https://portal-demo.npinew.keenable.in/'); 
  
      cy.get('body > header > div > div > div > div.hidden.xl\\:block > div > div > div.cursor-pointer > div').click({ force: true });
  
      cy.viewport(1280, 720);
cy.get('body > header > div > div > div > div.hidden.xl\\:block > div > div > div.border.shadow.absolute.\\!z-\\[999\\].bg-white.p-4.rounded-md.dark-card.block.right-0.mt-1 > div')
  .should('be.visible');
      cy.wait(5000);
    });
  });
  