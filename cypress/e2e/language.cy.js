const { describe, before, it } = require("mocha");

// describe('Find Accessibility Icon', () => {
//   before(() => {
//     Cypress.on('uncaught:exception', (err, runnable) => {
//       return false;
//     });
//   });

//   it('should click and verify the result', () => {
//     cy.visit('https://portal-demo.npinew.keenable.in/'); 
  
//     cy.get('body > header > div > div > div > div:nth-child(1) > div > div.relative.flex.items-center.min-w-8.max-w-8.justify-center.min-h-6.rounded-lg.hover\\:bg-\\[\\#2B2288\\] > div > div.cursor-pointer.rounded-lg.hover\\:bg-\\[\\#2B2288\\].min-w-8.max-w-8.min-h-8.max-h-8.p-1 > div.block.dark\\:hidden')
//       .invoke('css', 'background-color', 'yellow');
//     cy.wait(4000);    
//   });
// });

// describe('click on Accessibility icon', () => {
//   before(() => {
//     Cypress.on('uncaught:exception', (err, runnable) => {
//       return false;
//     });
//   });

//   it('should click and verify the result', () => {
//     cy.visit('https://portal-demo.npinew.keenable.in/'); 

//     cy.get('body > header > div > div > div > div:nth-child(1) > div > div.relative.flex.items-center.min-w-8.max-w-8.justify-center.min-h-6.rounded-lg.hover\\:bg-\\[\\#2B2288\\] > div > div.cursor-pointer.rounded-lg.hover\\:bg-\\[\\#2B2288\\].min-w-8.max-w-8.min-h-8.max-h-8.p-1 > div.block.dark\\:hidden')
//     .click()
//     .invoke('css', 'background-color', 'yellow');
//     cy.wait(3000);

//     cy.get('body > header > div > div > div > div:nth-child(1) > div > div.relative.flex.items-center.min-w-8.max-w-8.justify-center.min-h-6.rounded-lg.hover\\:bg-\\[\\#2B2288\\] > div > div.cursor-pointer.rounded-lg.hover\\:bg-\\[\\#2B2288\\].min-w-8.max-w-8.min-h-8.max-h-8.p-1 > div.block.dark\\:hidden')
//     .click()
//     .invoke('css', 'background-color', 'red');
//     cy.wait(10000);
//   });
// });

describe('click on all Accessibility Tools', () =>{
  before(() =>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
  });
});

it('click and verify result', () =>{
  cy.visit('https://portal-demo.npinew.keenable.in/');

  cy.get('body > header > div > div > div > div:nth-child(1) > div > div.relative.flex.items-center.min-w-8.max-w-8.justify-center.min-h-6.rounded-lg.hover\\:bg-\\[\\#2B2288\\] > div > div.cursor-pointer.rounded-lg.hover\\:bg-\\[\\#2B2288\\].min-w-8.max-w-8.min-h-8.max-h-8.p-1 > div.block.dark\\:hidden')
  .click()
    .invoke('css', 'background-color', 'yellow');
    cy.wait(10000);

  cy.get('#anuvadak-language-selector-list > li:nth-child(2)')
    .click({force: true})
    .invoke('css', 'background-color', 'yellow');
    cy.wait(10000);

    cy.get('body > header > div > div > div > div:nth-child(1) > div > div.relative.flex.items-center.min-w-8.max-w-8.justify-center.min-h-6.rounded-lg.hover\\:bg-\\[\\#2B2288\\] > div > div.cursor-pointer.rounded-lg.hover\\:bg-\\[\\#2B2288\\].min-w-8.max-w-8.min-h-8.max-h-8.p-1 > div.block.dark\\:hidden')
    .click()
      .invoke('css', 'background-color', 'yellow');
      cy.wait(10000);
  
    cy.get('#anuvadak-language-selector-list > li:nth-child(3)')
      .click({force: true})
      .invoke('css', 'background-color', 'yellow');
      cy.wait(10000);

      cy.get('body > header > div > div > div > div:nth-child(1) > div > div.relative.flex.items-center.min-w-8.max-w-8.justify-center.min-h-6.rounded-lg.hover\\:bg-\\[\\#2B2288\\] > div > div.cursor-pointer.rounded-lg.hover\\:bg-\\[\\#2B2288\\].min-w-8.max-w-8.min-h-8.max-h-8.p-1 > div.block.dark\\:hidden')
    .click()
      .invoke('css', 'background-color', 'yellow');
      cy.wait(10000);
  
    cy.get('#anuvadak-language-selector-list > li:nth-child(4)')
      .click({force: true})
      .invoke('css', 'background-color', 'yellow');
      cy.wait(10000);
});
});