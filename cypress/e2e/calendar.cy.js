const { describe } = require("mocha");

describe('Find Calendar Icon', () => {
  before(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  });

  it('should click and verify the result', () => {
    cy.visit('https://portal-demo.npinew.keenable.in/'); 
  
    cy.get('body > header > div > div > div > div:nth-child(1) > div > div.flex.items-center.p-1\\.5.pr-0.sm\\:pr-1\\.5.rounded-lg.hover\\:bg-\\[\\#2B2288\\]')
      .invoke('css', 'background-color', 'yellow');
    cy.wait(2000);
  });
});

  describe('click on Calendar Icon', () => {
    before(() => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    });
  
    it('should click and verify the result', () => {
      cy.visit('https://portal-demo.npinew.keenable.in/'); 
  
      cy.get('body > header > div > div > div > div:nth-child(1) > div > div.flex.items-center.p-1\\.5.pr-0.sm\\:pr-1\\.5.rounded-lg.hover\\:bg-\\[\\#2B2288\\]')
      .click()
      .invoke('css', 'background-color', 'yellow');
      cy.wait(3000);

      cy.get('body > header > div > div > div > div:nth-child(1) > div > div.flex.items-center.p-1\\.5.pr-0.sm\\:pr-1\\.5.rounded-lg.hover\\:bg-\\[\\#2B2288\\]')
      .click()
      .invoke('css', 'background-color', 'red');
      cy.wait(2000);
    });
  });

  describe('click on Calendar Icon', () => {
    before(() => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    });
  
    it('should click and verify the result', () => {
      cy.visit('https://portal-demo.npinew.keenable.in/');
  
      cy.get('body > header > div > div > div > div:nth-child(1) > div > div.flex.items-center.p-1\\.5.pr-0.sm\\:pr-1\\.5.rounded-lg.hover\\:bg-\\[\\#2B2288\\]')
        .click()
        .invoke('css', 'background-color', 'yellow');
  cy.wait(3000);

  cy.get('body > header > div > div > div > div:nth-child(1) > div > div.flex.items-center.p-1\\.5.pr-0.sm\\:pr-1\\.5.rounded-lg.hover\\:bg-\\[\\#2B2288\\] > div > div.border.shadow.absolute.\\!z-\\[999\\].bg-white.p-4.rounded-md.dark-card.block.w-\\[23rem\\].left-\\[50\\%\\].translate-x-\\[-50\\%\\].mt-2.calendar-widget.rounded.bg-white.flex.flex-col.gap-2.md\\:gap-4.p-4.theme-box-shadow.dark\\:bg-charcoal_gray > div > div.calendar-header > div > div.flex.flex-row.gap-1 > div:nth-child(2) > button')
        .click({force: true})
        .invoke('css', 'background-color', 'blue');
        cy.wait(3000);

        cy.get('body > header > div > div > div > div:nth-child(1) > div > div.flex.items-center.p-1\\.5.pr-0.sm\\:pr-1\\.5.rounded-lg.hover\\:bg-\\[\\#2B2288\\] > div > div.border.shadow.absolute.\\!z-\\[999\\].bg-white.p-4.rounded-md.dark-card.block.w-\\[23rem\\].left-\\[50\\%\\].translate-x-\\[-50\\%\\].mt-2.calendar-widget.rounded.bg-white.flex.flex-col.gap-2.md\\:gap-4.p-4.theme-box-shadow.dark\\:bg-charcoal_gray > div > div.calendar-header > div > div.flex.flex-row.gap-1 > div:nth-child(1) > button')
        .click({force: true})
        .invoke('css', 'background-color', 'blue');
        cy.wait(3000);
  
      cy.get('.right-menu-landing-page > .p-1\\.5 > .relative > .border > .flex-col > .ml-auto > .bg-\\[\\#FFE9E9\\]')
        .click({force: true})
        .invoke('css', 'background-color', 'red');
  cy.wait(3000);
  
      });
  });

  describe('click on Calendar Icon', () => {
    before(() => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    });
  
    it('should click and verify the result', () => {
      cy.visit('https://portal-demo.npinew.keenable.in/calendar'); 
  
      cy.get('#breadcrumb-1')
      .click()
      .invoke('css', 'background-color', 'yellow');
      cy.wait(3000);
      
    });
  });
