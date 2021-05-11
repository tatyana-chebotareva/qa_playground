import {
    Builder,
    By,
    Capabilities,
    until,
    WebDriver,
  } from "selenium-webdriver";
  
import * as signInData from "../TYJA/signInData.json";
//now someAlias is a JavaScript object/array parsed from file.json
console.log(signInData);

  const chromedriver = require("chromedriver");
  const driver = new Builder().withCapabilities(Capabilities.chrome()).build();
  
  class TYJA {
    driver: WebDriver;
    usernameField: By = By.name("email");
    passwordField: By = By.name("password");
    loginButton: By = By.xpath("//button[contains(text(), 'Login')]");
    header: By = By.css(".header-left-header > p");
    jobsTitle: By = By.css(".title-bar-jobs");
    url: string = "https://tyja.devmountain.com/";
    constructor(driver: WebDriver) {
      this.driver = driver;
    }
    /**
     * loads up the app's home page, and signs in using the data in the file
     * `signInData.json`, not any parameters passed in.
     */
    async signIn(): Promise<void> {
      // your code here
      await this.driver.get(this.url);
      await (await this.driver.findElement(this.usernameField)).sendKeys(signInData.username);
      await (await this.driver.findElement(this.passwordField)).sendKeys(signInData.password);
      return await (await driver.findElement(this.loginButton)).click();      
    }
  }
  
  describe("TYJA", () => {
    const page = new TYJA(driver);
    beforeEach(async () => {
      // loads the page and signs in
      await page.signIn();
    });
    afterAll(async () => {
      await driver.quit();
    });
    test("login defaults to the jobs page", async () => {
      // waits for the page load
      await driver.wait(until.elementLocated(page.header));
      let header = await driver.findElement(page.header);
      let jobsTitle = await driver.findElement(page.jobsTitle);
      // makes sure the right app loaded
      expect(await header.getText()).toBe("TRACK YOUR JOB APPLICATION");
      // and that the jobs page title is visible
      expect(await jobsTitle.isDisplayed()).toBeTruthy();
    });
  });