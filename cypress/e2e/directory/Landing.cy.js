const { describe, before, it } = require("mocha");

describe('Go to Directy Page From menu bar', () =>{
    before(() =>{
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
    });
});

it('should click and verify the result', () =>{
    cy.visit('https://portal-demo.npinew.keenable.in/');

    cy.get('body > header > div > div > div > div.hidden.xl\\:block > div > div > div.cursor-pointer > div').click({ force: true });
  
      cy.viewport(1280, 720);
cy.get('body > header > div > div > div > div.hidden.xl\\:block > div > div > div.border.shadow.absolute.\\!z-\\[999\\].bg-white.p-4.rounded-md.dark-card.block.right-0.mt-1 > div')
  .should('be.visible');

  cy.get('body > header > div > div > div > div.hidden.xl\\:block > div > div > div.border.shadow.absolute.\\!z-\\[999\\].bg-white.p-4.rounded-md.dark-card.block.right-0.mt-1 > div > ul:nth-child(4) > li:nth-child(7)').click();

  cy.get('#content > section.content-panel.relative.container-grid > div').should('be.visible')

});
  });


describe('Breadcrumb Test', () => {
    before(() => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    });
  
    it('should click and verify the result', () => {
      cy.visit('https://portal-demo.npinew.keenable.in/directory'); 
  
      cy.get('#main-bread-crumb > li.cursor-pointer.dark\\:\\!text-\\[yellow\\].hover\\:text-black.text-nowrap.space-x-3')
        .click();
  
        
      cy.get('body > main > header > div > div.landing-container').should('be.visible');
      cy.wait(3000);
    });
  });


  describe('Who Who button Test', () => {
    before(() => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    });
  
    it('should click and verify the result', () => {
      cy.visit('https://portal-demo.npinew.keenable.in/directory'); 
  
      cy.get('#content > section:nth-child(2) > div > div > div.flex.flex-col.p-4.sm\\:p-0.gap-4.flex-\\[0\\.8\\].mt-6.sm\\:mt-0.sm\\:w-1\\/2 > button')
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
      cy.visit('https://portal-demo.npinew.keenable.in/directory'); 
  
      cy.get('#content > section.bg-\\[\\#D6DEF5\\].container-grid.relative.z-\\[1\\] > div > div.w-full.h-full.flex.items-center.justify-center.lg\\:justify-start.lg\\:flex-\\[1\\] > div > div.flex.justify-center.md\\:justify-start > button')
        .click();
  
        
      cy.get('#Central > div > div.section-padding.\\!pb-0 > div').should('be.visible');
      cy.wait(3000);
    });
  });


  describe('Central', () => {
    before(() => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    });
  
    it('should click and verify the result', () => {
      cy.visit('https://portal-demo.npinew.keenable.in/directory'); 
  
      cy.get('#content > section.bg-\\[\\#D6DEF5\\].container-grid.relative.z-\\[1\\] > div > div.w-full.lg\\:flex-\\[1\\].hidden.md\\:block > ul > li:nth-child(1)')
        .click();
  
        
      cy.get('#content > div.leaf-container-grid > div.min-h-\\[100vh\\].content-panel.content-card-margin-y-axis.shadow.section-padding').should('be.visible');
      cy.wait(3000);
    });
  });

  describe('State', () => {
    before(() => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    });
  
    it('should click and verify the result', () => {
      cy.visit('https://portal-demo.npinew.keenable.in/directory'); 
  
      cy.get('#content > section.bg-\\[\\#D6DEF5\\].container-grid.relative.z-\\[1\\] > div > div.w-full.lg\\:flex-\\[1\\].hidden.md\\:block > ul > li:nth-child(2)')
        .click();
  
        
      cy.get('#content > div.leaf-container-grid > div.min-h-\\[100vh\\].content-panel.content-card-margin-y-axis.shadow.section-padding').should('be.visible');
      cy.wait(3000);
    });
  });

  describe('District', () => {
    before(() => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    });
  
    it('should click and verify the result', () => {
      cy.visit('https://portal-demo.npinew.keenable.in/directory'); 
  
      cy.get('#content > section.bg-\\[\\#D6DEF5\\].container-grid.relative.z-\\[1\\] > div > div.w-full.lg\\:flex-\\[1\\].hidden.md\\:block > ul > li:nth-child(3)')
        .click();
  
        
      cy.get('#content > div.leaf-container-grid').should('be.visible');
      cy.wait(3000);
    });
  });

  describe('Judiciary', () => {
    before(() => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    });
  
    it('should click and verify the result', () => {
      cy.visit('https://portal-demo.npinew.keenable.in/directory'); 
  
      cy.get('#content > section.bg-\\[\\#D6DEF5\\].container-grid.relative.z-\\[1\\] > div > div.w-full.lg\\:flex-\\[1\\].hidden.md\\:block > ul > li:nth-child(4)')
        .click();
  
        
      cy.get('#content > div.leaf-container-grid > div.min-h-\\[100vh\\].content-panel.content-card-margin-y-axis.shadow.section-padding > div.flex.flex-col.gap-2').should('be.visible');
      cy.wait(3000);
    });
  });

  describe('India Mission', () => {
    before(() => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    });
  
    it('should click and verify the result', () => {
      cy.visit('https://portal-demo.npinew.keenable.in/directory'); 
  
      cy.get('#content > section.bg-\\[\\#D6DEF5\\].container-grid.relative.z-\\[1\\] > div > div.w-full.lg\\:flex-\\[1\\].hidden.md\\:block > ul > li:nth-child(5)')
        .click();
  
        
      cy.get('#content > div.leaf-container-grid > div.min-h-\\[100vh\\].content-panel.content-card-margin-y-axis.shadow.section-padding > div.flex.flex-col.gap-2 > div').should('be.visible');
      cy.wait(3000);
    });
  });

  describe('Web Directory', () => {
    before(() => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    });
  
    it('should click and verify the result', () => {
      cy.visit('https://portal-demo.npinew.keenable.in/directory'); 
  
      cy.get('#content > section:nth-child(4) > div > div > div.flex.flex-col.gap-4 > div.flex.justify-center.lg\\:justify-start > button')
        .click();
  
        
      cy.get('#About\\ Web\\ Direcory').should('be.visible');
      cy.wait(3000);
    });
  });

  // describe('Apex Bodies', () => {
  //   before(() => {
  //     Cypress.on('uncaught:exception', (err, runnable) => {
  //       return false;
  //     });
  //   });
  
  //   it('should click and verify the result', () => {
  //     cy.visit('https://portal-demo.npinew.keenable.in/directory'); 
  
  //     cy.get('#content > section:nth-child(4) > div > div > div.hidden.lg\\:block > ul > li:nth-child(1)')
  //       .click();
  
        
  //     cy.get('##content > div > div > div.leaf-container-grid').should('be.visible');
  //     cy.wait(3000);
  //   });
  // });

  // describe('Legislature', () => {
  //   before(() => {
  //     Cypress.on('uncaught:exception', (err, runnable) => {
  //       return false;
  //     });
  //   });
  
  //   it('should click and verify the result', () => {
  //     cy.visit('https://portal-demo.npinew.keenable.in/directory'); 
  
  //     cy.get('#content > section:nth-child(4) > div > div > div.hidden.lg\\:block > ul > li:nth-child(2) > a')
  //       .click();
  
        
  //     cy.get('#content > div > div > div.leaf-container-grid > div.min-h-\\[100vh\\].content-panel.content-card-margin-y-axis.shadow.section-padding').should('be.visible');
  //     cy.wait(3000);
  //   });
  // });

  // describe('State/Uts', () => {
  //   before(() => {
  //     Cypress.on('uncaught:exception', (err, runnable) => {
  //       return false;
  //     });
  //   });
  
  //   it('should click and verify the result', () => {
  //     cy.visit('https://portal-demo.npinew.keenable.in/directory'); 
  
  //     cy.get('#content > section:nth-child(4) > div > div > div.hidden.lg\\:block > ul > li:nth-child(3) > a')
  //       .click();
  
        
  //     cy.get('#content > div > div > div.leaf-container-grid > div.min-h-\\[100vh\\].content-panel.content-card-margin-y-axis.shadow.section-padding > div.mb-\\[1\\.875rem\\] > div > div.w-\\[20rem\\] > div > button > div').should('be.visible');
  //     cy.wait(3000);
  //   });
  // });
  
  // describe('Indian Mission Abroad', () => {
  //   before(() => {
  //     Cypress.on('uncaught:exception', (err, runnable) => {
  //       return false;
  //     });
  //   });
  
  //   it('should click and verify the result', () => {
  //     cy.visit('https://portal-demo.npinew.keenable.in/directory'); 
  
  //     cy.get('#content > section:nth-child(4) > div > div > div.hidden.lg\\:block > ul > li:nth-child(4) > a')
  //       .click();
  
        
  //     cy.get('#content > div > div > div.leaf-container-grid > div.min-h-\\[100vh\\].content-panel.content-card-margin-y-axis.shadow.section-padding > div.flex.flex-col.gap-2').should('be.visible');
  //     cy.wait(3000);
  //   });
  // });

  // describe('District', () => {
  //   before(() => {
  //     Cypress.on('uncaught:exception', (err, runnable) => {
  //       return false;
  //     });
  //   });
  
  //   it('should click and verify the result', () => {
  //     cy.visit('https://portal-demo.npinew.keenable.in/directory'); 
  
  //     cy.get('#content > section:nth-child(4) > div > div > div.hidden.lg\\:block > ul > li:nth-child(5) > a')
  //       .click();
  
        
  //     cy.get('#content > div > div > div.leaf-container-grid > div.min-h-\\[100vh\\].content-panel.content-card-margin-y-axis.shadow.section-padding > div.flex.flex-col.gap-2 > div > fieldset > div').should('be.visible');
  //     cy.wait(3000);
  //   });
  // });

  // describe('Union Government', () => {
  //   before(() => {
  //     Cypress.on('uncaught:exception', (err, runnable) => {
  //       return false;
  //     });
  //   });
  
  //   it('should click and verify the result', () => {
  //     cy.visit('https://portal-demo.npinew.keenable.in/directory'); 
  
  //     cy.get('#content > section:nth-child(4) > div > div > div.hidden.lg\\:block > ul > li:nth-child(6) > a')
  //       .click();
  
        
  //     cy.get('#content > div > div > div.leaf-container-grid > div.min-h-\\[100vh\\].content-panel.content-card-margin-y-axis.shadow.section-padding > div.mb-\\[1\\.875rem\\] > div > div.w-\\[20rem\\] > div > div > div > input').should('be.visible');
  //     cy.wait(3000);
  //   });
  // });

  // describe('Judiciary', () => {
  //   before(() => {
  //     Cypress.on('uncaught:exception', (err, runnable) => {
  //       return false;
  //     });
  //   });
  
  //   it('should click and verify the result', () => {
  //     cy.visit('https://portal-demo.npinew.keenable.in/directory'); 
  
  //     cy.get('#content > section:nth-child(4) > div > div > div.hidden.lg\\:block > ul > li:nth-child(7) > a')
  //       .click();
  
        
  //     cy.get('#content > div > div > div.leaf-container-grid > div.min-h-\\[100vh\\].content-panel.content-card-margin-y-axis.shadow.section-padding > div.flex.flex-col.gap-2 > div > div.flex.items-center.justify-center > div').should('be.visible');
  //     cy.wait(3000);
  //   });
  // });

  describe('Helpline Numbers', () => {
    before(() => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    });
  
    it('should click and verify the result', () => {
      cy.visit('https://portal-demo.npinew.keenable.in/directory'); 
  
      cy.get('#content > section:nth-child(5) > div > div > div:nth-child(1) > div.flex > button')
        .click();
  
        
      cy.get('#content > div > div > div > section.relative.shadow.content-panel.content-card-margin-top > div.content-panel.relative.z-\\[1\\].section-padding.\\!pb-0').should('be.visible');
      cy.wait(3000);
    });
  });

  describe('Public Utilities', () => {
    before(() => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    });
  
    it('should click and verify the result', () => {
      cy.visit('https://portal-demo.npinew.keenable.in/directory'); 
  
      cy.get('#content > section:nth-child(5) > div > div > div:nth-child(2) > div.flex > button > p')
        .click();
  
        
      cy.get('#content > div > div > div > section:nth-child(1) > div');
      cy.wait(3000);
    });
  });