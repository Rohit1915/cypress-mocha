const { describe, before, it } = require("mocha");

// describe('Find Menu Bar', () => {
//   before(() => {
//     Cypress.on('uncaught:exception', (err, runnable) => {
//       return false;
//     });
//   });

//   it('Visit NPI Portal and see menu bar', () => {
//     cy.visit('https://portal-demo.npinew.keenable.in/'); 
  
//     cy.get('body > header > div > div > div > div.hidden.xl\\:block > div > div > div.cursor-pointer > div')
//       .invoke('css', 'background-color', 'yellow');
//     cy.wait(3000);    
//   });
// });

// describe('click menu bar', () =>{
//   before(() =>{
//     Cypress.on('uncaught:exception', (err, runnable) =>{
//       return false;
//     });
//   });

//   it('open and close menu bar', () =>{
//     cy.viewport(1280, 720);
//     cy.visit('https://portal-demo.npinew.keenable.in/');

//     cy.get('body > header > div > div > div > div.hidden.xl\\:block > div > div > div.cursor-pointer > div')
//    .click({force: true})
//     .invoke('css', 'background-color', 'yellow');
//     cy.wait(5000);

//     cy.get('body > header > div > div > div > div.hidden.xl\\:block > div > div > div.cursor-pointer > div')
//    .click({force: true})
//     .invoke('css', 'background-color', 'red');

//   });
// });

describe('click menu bar', () =>{
  before(() =>{
    Cypress.on('uncaught:exception', (err, runnable) =>{
      return false;
    });
  });

  it('click on all options', () =>{
    cy.viewport(1280, 720);
    cy.visit('https://portal-demo.npinew.keenable.in/');

    cy.get('body > header > div > div > div > div.hidden.xl\\:block > div > div > div.cursor-pointer > div')
   .click({force: true})
    .invoke('css', 'background-color', 'yellow');
    cy.wait(3000);

    cy.get(':nth-child(2) > .menu-heading')
   .click({force: true})
    .invoke('css', 'background-color', 'yellow');
     cy.wait(5000);

     cy.visit('https://portal-demo.npinew.keenable.in/');
     cy.get('body > header > div > div > div > div.hidden.xl\\:block > div > div > div.cursor-pointer > div')
   .click({force: true})
    .invoke('css', 'background-color', 'yellow');
    cy.wait(3000);

    cy.get('.py-10 > :nth-child(2) > :nth-child(2)')
   .click({force: true})
    .invoke('css', 'background-color', 'yellow');
     cy.wait(5000);
  });
});