const { describe, before, it } = require("mocha");

describe('Find Accessibility Icon', () => {
  before(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  });

  it('should click and verify the result', () => {
    cy.visit('https://portal-demo.npinew.keenable.in/'); 
  
    cy.get('.right-menu-landing-page > div.sm\\:flex > .relative > .rounded-lg > div > .h-7')
      .invoke('css', 'background-color', 'yellow');
    cy.wait(5000);    
  });
});

describe('click on Accessibility icon', () => {
  before(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  });

  it('should click and verify the result', () => {
    cy.visit('https://portal-demo.npinew.keenable.in/'); 

    cy.get('.right-menu-landing-page > div.sm\\:flex > .relative > .rounded-lg > div > .h-7')
    .click()
    .invoke('css', 'background-color', 'yellow');
    cy.wait(3000);

    cy.get('.right-menu-landing-page > div.sm\\:flex > .relative > .rounded-lg > div > .h-7')
    .click()
    .invoke('css', 'background-color', 'red');
    cy.wait(2000);
  });
});

describe('click on all Accessibility Tools', () =>{
  before(() =>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
  });
});

it('click and verify result', () =>{
  cy.visit('https://portal-demo.npinew.keenable.in/');

  cy.get('.right-menu-landing-page > div.sm\\:flex > .relative > .rounded-lg > div > .h-7')
  .click({force: true})
    .invoke('css', 'background-color', 'yellow');
    cy.wait(2000);

  cy.get('.right-menu-landing-page > div.sm\\:flex > .relative > .shadow > :nth-child(4) > :nth-child(1) > .border')
    .click({force: true})
    .invoke('css', 'background-color', 'grey');
    cy.wait(4000);

    cy.get('body > header > div > div > div > div:nth-child(1) > div > div.hidden.sm\\:flex.justify-center.items-center > div > div.border.shadow.absolute.\\!z-\\[999\\].bg-white.p-4.rounded-md.dark-card.block.w-\\[336px\\].left-\\[50\\%\\].translate-x-\\[-50\\%\\] > ul:nth-child(4) > li:nth-child(2) > button')
    .click({force: true})
    .invoke('css', 'background-color', 'yellow');
    cy.wait(4000);

    cy.get('.right-menu-landing-page > div.sm\\:flex > .relative > .shadow > :nth-child(7) > :nth-child(1) > .hover\\:bg-\\[\\#F7F7F7\\]')
    .click({force: true})
    .invoke('css', 'background-color', 'yellow');
    cy.wait(4000);

    cy.get('body > header > div > div > div > div:nth-child(1) > div > div.hidden.sm\\:flex.justify-center.items-center > div > div.border.shadow.absolute.\\!z-\\[999\\].bg-white.p-4.rounded-md.dark-card.block.w-\\[336px\\].left-\\[50\\%\\].translate-x-\\[-50\\%\\] > ul:nth-child(7) > li:nth-child(2) > button')
    .click({force: true})
    .invoke('css', 'background-color', 'yellow');
    cy.wait(4000);

    cy.get('body > header > div > div > div > div:nth-child(1) > div > div.hidden.sm\\:flex.justify-center.items-center > div > div.border.shadow.absolute.\\!z-\\[999\\].bg-white.p-4.rounded-md.dark-card.block.w-\\[336px\\].left-\\[50\\%\\].translate-x-\\[-50\\%\\] > ul:nth-child(7) > li:nth-child(3) > button')
    .click({force: true})
    .invoke('css', 'background-color', 'yellow');
    cy.wait(4000);

    cy.get('body > header > div > div > div > div:nth-child(1) > div > div.hidden.sm\\:flex.justify-center.items-center > div > div.border.shadow.absolute.\\!z-\\[999\\].bg-white.p-4.rounded-md.dark-card.block.w-\\[336px\\].left-\\[50\\%\\].translate-x-\\[-50\\%\\] > ul:nth-child(7) > li:nth-child(4) > button')
    .click({force: true})
    .invoke('css', 'background-color', 'yellow');
    cy.wait(4000);

    cy.get('body > header > div > div > div > div:nth-child(1) > div > div.hidden.sm\\:flex.justify-center.items-center > div > div.border.shadow.absolute.\\!z-\\[999\\].bg-white.p-4.rounded-md.dark-card.block.w-\\[336px\\].left-\\[50\\%\\].translate-x-\\[-50\\%\\] > ul:nth-child(7) > li:nth-child(5) > button')
    .click({force: true})
    .invoke('css', 'background-color', 'yellow');
    cy.wait(4000);

    cy.get('body > header > div > div > div > div:nth-child(1) > div > div.hidden.sm\\:flex.justify-center.items-center > div > div.border.shadow.absolute.\\!z-\\[999\\].bg-white.p-4.rounded-md.dark-card.block.w-\\[336px\\].left-\\[50\\%\\].translate-x-\\[-50\\%\\] > ul:nth-child(10) > li:nth-child(1) > button')
    .click({force: true})
    .invoke('css', 'background-color', 'yellow');
    cy.wait(4000);

    cy.get('body > header > div > div > div > div:nth-child(1) > div > div.hidden.sm\\:flex.justify-center.items-center > div > div.border.shadow.absolute.\\!z-\\[999\\].bg-white.p-4.rounded-md.dark-card.block.w-\\[336px\\].left-\\[50\\%\\].translate-x-\\[-50\\%\\] > ul:nth-child(10) > li:nth-child(1) > button')
    .click({force: true})
    .invoke('css', 'background-color', 'yellow');
    cy.wait(4000);

    cy.get('body > header > div > div > div > div:nth-child(1) > div > div.hidden.sm\\:flex.justify-center.items-center > div > div.border.shadow.absolute.\\!z-\\[999\\].bg-white.p-4.rounded-md.dark-card.block.w-\\[336px\\].left-\\[50\\%\\].translate-x-\\[-50\\%\\] > ul:nth-child(10) > li:nth-child(2) > button')
    .click({force: true})
    .invoke('css', 'background-color', 'yellow');
    cy.wait(4000);

    cy.get('body > header > div > div > div > div:nth-child(1) > div > div.hidden.sm\\:flex.justify-center.items-center > div > div.border.shadow.absolute.\\!z-\\[999\\].bg-white.p-4.rounded-md.dark-card.block.w-\\[336px\\].left-\\[50\\%\\].translate-x-\\[-50\\%\\] > ul:nth-child(10) > li:nth-child(2) > button')
    .click({force: true})
    .invoke('css', 'background-color', 'yellow');
    cy.wait(4000);

});
});