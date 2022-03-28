// playwright.config.js
// @ts-check
const { devices } = require('@playwright/test');

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {

 // ['html', { open: 'never' }] ,
  reporter: [ 
   
    ['list'],
    ['junit', {  outputFile: 'results.xml' }]
  ],

  projects: [
    {
        
      name: 'chromium',
      use: { 
        browserName: 'chromium',
        headless: false,
        screenshot: 'only-on-failure',
      }
       },

     
    
    {
      name: 'firefox',
      use: { 

      browserName: 'firefox',
      
    }
    },

    {
      name: 'webkit',
      use: { 

        browserName: 'webkit',
          
      }
    },
  ],
};

module.exports = config;

