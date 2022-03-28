const { test, expect } = require('@playwright/test');
const { theInternetPage } = require('./the-internet-page');

test.describe.configure({ mode: 'parallel' });

test.beforeEach(async ({ page }) => {
  // Go to the starting url before each test.
  await page.goto('http://the-internet.herokuapp.com/');
});

test.afterEach(async ({ page }, testInfo) => {
  console.log(`Finished ${testInfo.title} with status ${testInfo.status}`);

  if (testInfo.status !== testInfo.expectedStatus)
    console.log(`Did not run as expected, ended up at ${page.url()}`);
});

test.afterEach(async ({page}) => {
  await page.close();
});


test('Verify Home page and A/B Test Page', async ({ page }) => {
  const theInternet = new theInternetPage(page);
  //Navigate to HomePage and verify Title

  await theInternet.abTestVerify();
  
});


test('Verify Add/Remove Elements from Home page', async ({ page }) => {
  const theInternet = new theInternetPage(page);
  await theInternet.addRemovePageVerify();
  
});

test('Verify Home and About links from Disappearing Elements Page', async ({ page }) => {
  const theInternet = new theInternetPage(page);
await theInternet.disappearingElementsPgVerify();
});

test('Verify Contact Us link from Disappearing Elements Page', async ({ page }) => {
  const theInternet = new theInternetPage(page);
await theInternet.contactUsPgVerify();
});

test('Verify Portfolio link from Disappearing Elements Page', async ({ page }) => {
  const theInternet = new theInternetPage(page);
await theInternet.portfolioPgVerify();
});

test('Verify Checkbox link from Home Page', async ({ page }) => {
  const theInternet = new theInternetPage(page);
await theInternet.checkBoxPgVerify();
});

test('Verify Input link from Home Page', async ({ page }) => {
  const theInternet = new theInternetPage(page);
await theInternet.inputPgVerify();
});

test('Verify Key Presses link from Home Page', async ({ page }) => {
  const theInternet = new theInternetPage(page);
await theInternet.keyPressPgVerify();

});

test('Verify JvaScrpt Alerts link from Home Page', async ({ page }) => {
  const theInternet = new theInternetPage(page);
await theInternet.jvaPgVerify();
page.on ('dialog', async ({ dialog }) => {
await expect(dialog.message()).toEqual('I am a JS Confirm');
await dialog.accept();
});
});

test('Verify Hover link from Home Page', async ({ page }) => {
  const theInternet = new theInternetPage(page);
await theInternet.hoversPgVerify();

});