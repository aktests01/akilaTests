// playwright-dev-page.js
const { expect } = require('@playwright/test');

exports.theInternetPage = class theInternetPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.theInternetPageHeader = page.locator('h1', { hasText: 'Welcome to the-internet' });
   
    //First Link on Page
    this.abTestLink = page.locator('//*[@id="content"]/ul/li[1]/a');
    this.abTestingPageHeader = page.locator('h3', {hasText:'A/B Test'});

//Add/Remove Elements page
this.addRemoveElementLink = page.locator('//*[@id="content"]/ul/li[2]/a');
this.addRemoveElementsHeader = page.locator('h3', {hasText: 'Add/Remove Elements '});
//Add Element Button
this.addElementBtn = page.locator('text=Add Element');
//Delete Button
this.deleteBtn = page.locator('text=Delete');

// Disappearing Elements page
this.disappearingElementsLnk = page.locator('text=Disappearing Elements');
this.disappearingPageHeading = page.locator('h3',{hasText:'Disappearing Elements'});
//Disappearing Elements > Home
this.homeLink = page.locator('text=Home');
//Disappearing Elements > About
this.aboutLink = page.locator('text=About');
//Page Heading Not Found
this.notFoundPageHeading=page.locator('h1', {hasText:'Not Found'});
//Disappearing Elements > Contact Us
this.contactUsLink = page.locator('text=Contact Us');
//Disappearing Elements > Portfolio
this.portfolioLink=page.locator('text=Portfolio');

//Checkboxes page
this.checkBoxesLink = page.locator('text=Checkboxes');
this.checkBoxPgHeading = page.locator('h3', {hasText:'Checkboxes'});
this.checkBoxOne = page.locator('//*[@id="checkboxes"]/input[1]');
this.checkBoxTwo = page.locator('//*[@id="checkboxes"]/input[2]');

//Input page
this.inputpageLink = page.locator('text=Input');
this.inputPgHeading = page.locator('h3', {hasText:'Input'});
this.numberTextBox = page.locator('//*[@id="content"]/div/div/div/input');

  //KeyPresses Page
  this.keyPressPgLink = page.locator('text=Key Presses');
  this.keyPressesPageHeading = page.locator('h3', {hasText:'Key Presses'});
  this.keyPressInput = page.locator('//*[@id="target"]');
  this.upArrowKeyResult = page.locator('//*[@id="result"]', {hasText: 'UP'});

   //JavaScript Alerts Page
   this.jvaAlrtsPgLnk= page.locator('text=JavaScript Alerts');
   this.jvaAlrtsPgHeading = page.locator('h3',{hasText: 'JavaScript Alerts'});
   this.clkJvaConfirmBtn = page.locator('text=Click for JS Confirm');
    this.dialogTxt = page.locator('text = I am a JS Confirm');
    this.acceptDialogResult=page.locator('//*[@id="result"]', {hasText: 'You clicked: Ok'});

//Hovers Page
this.hoversPgLnk = page.locator('text=Hovers');
this.hoversPgHeading = page.locator('h3',{hasText:'Hovers'});
this.hoverUserOneImg = page.locator('//*[@id="content"]/div/div[1]/img');
this.hoverFirstUserName = page.locator('//*[@id="content"]/div/div[1]/div/h5', {hasText:'name: user1'});
this.firstUserViewProfile = page.locator('//*[@id="content"]/div/div[1]/div/a',{hasText: 'View profile'});
this.hoverUserTwoImg = page.locator('//*[@id="content"]/div/div[2]/img');
this.hoverSecondUserName = page.locator('//*[@id="content"]/div/div[2]/div/h5', {hasText:'name: user2'});
this.secondUserViewProfile = page.locator('//*[@id="content"]/div/div[2]/div/a',{hasText: 'View profile'});

  }

  


  //goto home Page
  async goto() {
    await this.page.goto('http://the-internet.herokuapp.com/');
    await expect(this.theInternetPageHeader).toBeVisible();
  } 

  //Click First Link and verify Header
  async abTestVerify(){
    //await this.goto();
    console.log('Navigate to A/B Test Page');
     this.abTestLink.click();
    await expect(this.abTestingPageHeader).toBeVisible();
    console.log('A/B Test page is displayed')
   
  }
  
 /* 
  //Navigate to Add/Remove Elements page url  and Verify Page title
  //Click on Add Element Button and verify Delete button is displayed
  //Click on Delete Button and verify Delete button is not displayed */
 async addRemovePageVerify(){
console.log('Navigate to Add/Remove Elements Page')
  this.addRemoveElementLink.click();
   await expect(this.addRemoveElementsHeader).toBeVisible();
   console.log('Add/Remove Elements Page is displayed');
 this.addElementBtn.click();
console.log('Add Element button clicked');
await this.deleteBtn.click();
console.log('Delete Button clicked');
//Verify Delete Button is hidden on clicking
await expect(this.deleteBtn).toBeHidden();
console.log('Delete Button is hidden on clicking Delete Button')
 }
 
 //Click Home and About Us > to disappearing Elements Page
 async disappearingElementsPgVerify(){
console.log('Navigate to Disappearing Element Page');
   await this.disappearingElementsLnk.click();
await expect(this.disappearingPageHeading).toBeVisible();
console.log('Disappearing Elements Page is displayed');
// Click Home 
await this.homeLink.click();
console.log('Home Link from the page is cliced');
//Home page header displayed
await expect(this.theInternetPageHeader).toBeVisible();
console.log('Home Page is displayed');
console.log('Navigate to Disappearing Elements Page');
await this.disappearingElementsLnk.click();
console.log('Click on About Link');
await this.aboutLink.click();

await expect(this.notFoundPageHeading).toBeVisible();
console.log('About Page with Not Found Heading is displayed');
//await this.page.close();
 }

 //Click Contact Us >  Disappearing Elements Page
async contactUsPgVerify(){
  console.log('Navigate to Disappearing Element Page');
await this.disappearingElementsLnk.click();
await this.contactUsLink.click();
console.log('Click on Contact Us');
await expect(this.notFoundPageHeading).toBeVisible();
console.log('Contact Us Page with Not Found Heading is displayed');
}

//Click on Portfolio link > Disappearing Elements Page
async portfolioPgVerify(){
  console.log('Navigate to Disappearing Element Page');
await this.disappearingElementsLnk.click();
await this.portfolioLink.click();
console.log('Click on Portfolio Link');

await expect(this.notFoundPageHeading).toBeVisible();
console.log('Portfolio Page with Not Found Heading is displayed');

}

//Click on CheckBox Link > Home Page
async checkBoxPgVerify(){
  console.log('Navigate to CheckBox Page');
await this.checkBoxesLink.click();
await expect(this.checkBoxPgHeading).toBeVisible();
console.log('Checkbox page is displayed');
//checkbox2 is checked by default
await expect(this.checkBoxTwo).toBeChecked();
console.log('CheckBox1 is checked by default');
//Select checkbox1
await this.checkBoxOne.check();
console.log('Check Checkbox2');
//Verify checkbox1 is selected
await expect(this.checkBoxOne).toBeChecked();
console.log('Checkbox1 is checked');
//await this.page.close();
}

//Click on Input link > Home Page
async inputPgVerify(){
  console.log('Navigate to Input Page');
  await this.inputpageLink.click();
  await expect(this.inputPgHeading).toBeVisible();
  console.log('Input Page displayed');
  //Enter Number 1
  await this.numberTextBox.fill('1');
  console.log('1 entered ');

  //Clear Field value
  await this.numberTextBox.fill('');
  console.log('1 cleared and set to blank');

}

async keyPressPgVerify(){
  console.log('Navigate to Key Presses Page');
  await this.keyPressPgLink.click();
  await expect(this.keyPressesPageHeading).toBeVisible();
  console.log('Key Press Page is displayed');
  await this.keyPressInput.press('ArrowUp');
  
  await expect(this.upArrowKeyResult).toBeVisible();
  console.log('Up Arrow Key Press successful');
  
}


async jvaPgVerify(){
  
  console.log('Navigate to Javascript Alerts page');
  await this.jvaAlrtsPgLnk.click();
  
  await expect(this.jvaAlrtsPgHeading).toBeVisible();
  console.log('Javascript Alerts Page is displayed');

  await this.clkJvaConfirmBtn.click();
  console.log('Clicked on Jva Confirm Button');

 }

 async hoversPgVerify(){
console.log("Navigate to Hovers Page");
await this.hoversPgLnk.click();

await expect(this.hoversPgHeading).toBeVisible();
console.log("Hovers Page is displayed");

await this.hoverUserOneImg.hover();
console.log('Hover on Image1');
await expect(this.hoverFirstUserName).toBeVisible();
console.log('name: User1 is displayed');
await expect(this.firstUserViewProfile).toBeVisible();
console.log('View Profile link is displayed');

await this.hoverUserTwoImg.hover();
console.log('Hover on Image2');
await expect(this.hoverSecondUserName).toBeVisible();
console.log('name: User2 is displayed');
await expect(this.hoverSecondUserName).toBeVisible();
console.log('View Profile link is displayed');


 }
} 


