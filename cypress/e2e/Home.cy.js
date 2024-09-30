const { describe } = require("mocha");

// Trending Search 

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
  
      cy.get('#content > main > div.my-2 > div:nth-child(2) > div > div.flex.items-center.gap-4.flex-wrap.md\\:mb-2').should('be.visible');
      cy.wait(5000);
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
      cy.wait(5000);
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
      cy.wait(5000); 
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
      cy.wait(5000); 
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
      cy.wait(5000); 
    });
  });

//   Online service

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
      cy.wait(5000);
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
      cy.wait(5000);
    });
  });
  
  
  describe('Category Test', () => {
    before(() => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    });
  
    it('should click and verify the result', () => {
      cy.visit('https://portal-demo.npinew.keenable.in/'); 
  
      cy.get('#content > div > div.flex-\\[1\\].bg-theme-primary.md\\:bg-white.text-white.px-4.py-4.\\32 xl\\:px-10.\\32 xl\\:py-14 > ul > li:nth-child(3)')
        .click();
  
      cy.get('#content > main > p').should('be.visible');
      cy.wait(5000); 
    });
  });

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
      cy.wait(5000); 
    });
  });

  // Category

  describe('Agriculture, Rural & Environment', () => {
    before(() => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    });
  
    it('should click and verify the result', () => {
      cy.visit('https://portal-demo.npinew.keenable.in/'); 
  
      cy.get('body > main > div.section-padding.dark\\:bg-black.bg-\\[\\#F8F8FA\\] > div:nth-child(2) > div > div > div > div.overflow-hidden > div > div:nth-child(1) > ul > li:nth-child(1) > div > div')
        .click();
  
      cy.get('#Information > div > p').should('be.visible');
      cy.wait(5000);
    });
  });
  
  
  describe('Benefits & Social development', () => {
    before(() => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    });
  
    it('should click  and verify the result', () => {
      cy.visit('https://portal-demo.npinew.keenable.in/'); 
  
      cy.get('body > main > div.section-padding.dark\\:bg-black.bg-\\[\\#F8F8FA\\] > div:nth-child(2) > div > div > div > div.overflow-hidden > div > div:nth-child(1) > ul > li:nth-child(2) > div > div > div:nth-child(2) > a > h3')
        .click();
  
      cy.get('#Information > div > h1').should('be.visible');
      cy.wait(5000);
    });
  });
  
  
  describe('Business & Self-employed', () => {
    before(() => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    });
  
    it('should click  and verify the result', () => {
      cy.visit('https://portal-demo.npinew.keenable.in/'); 
  
      cy.get('body > main > div.section-padding.dark\\:bg-black.bg-\\[\\#F8F8FA\\] > div:nth-child(2) > div > div > div > div.overflow-hidden > div > div:nth-child(1) > ul > li:nth-child(3) > div > div > div:nth-child(2) > a > h3')
        .click();
  
      cy.get('#Information');
      cy.wait(5000); 
    });
  });
  
  
  describe('Citizenship, Visa & Passports', () => {
    before(() => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    });
  
    it('should click  and verify the result', () => {
      cy.visit('https://portal-demo.npinew.keenable.in/'); 
  
      cy.get('body > main > div.section-padding.dark\\:bg-black.bg-\\[\\#F8F8FA\\] > div:nth-child(2) > div > div > div > div.overflow-hidden > div > div:nth-child(1) > ul > li:nth-child(4) > div > div > div:nth-child(2) > a > h3')
    .click();
  
      cy.get('#Information').should('be.visible');
      cy.wait(5000); 
    });
  });
  
  
  describe('Defence & Foreign affairs', () => {
    before(() => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    });
  
    it('should click  and verify the result', () => {
      cy.visit('https://portal-demo.npinew.keenable.in/'); 
  
      cy.get('body > main > div.section-padding.dark\\:bg-black.bg-\\[\\#F8F8FA\\] > div:nth-child(2) > div > div > div > div.overflow-hidden > div > div:nth-child(1) > ul > li:nth-child(5) > div > div > div:nth-child(2) > a > h3')
        .click();
  
      cy.get('#Information').should('be.visible');
      cy.wait(5000); 
    });
  });

  describe('Driving & Transport', () => {
    before(() => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    });
  
    it('should click and verify the result', () => {
      cy.visit('https://portal-demo.npinew.keenable.in/'); 
  
      cy.get('body > main > div.section-padding.dark\\:bg-black.bg-\\[\\#F8F8FA\\] > div:nth-child(2) > div > div > div > div.overflow-hidden > div > div:nth-child(1) > ul > li:nth-child(6) > div > div > div:nth-child(2) > a > h3')
        .click();
  
      cy.get('#Ministry > div.flex.flex-col.gap-8.items-center.section-padding > div > ul > li:nth-child(2)').should('be.visible');
      cy.wait(5000); 
    });
  });

  // Directory

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

  // Explore Bharat

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
      cy.wait(5000);
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
      cy.wait(5000);
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
      cy.wait(5000);
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
      cy.wait(5000);
    });
  });