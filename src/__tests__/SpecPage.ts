import { By, until, WebDriver, WebElement } from "selenium-webdriver";

export class SpecPage{
    driver: WebDriver;
    url:string = "https://www.google.com/";
    searchField: By = By.name("q");
    resultText: By = By.xpath('//*[div/a/h3]');

/**
   * @param {WebDriver} driver - the driver object the page object should interact with
   * @example
   * const page = new PracticePage(driver);
   */
    constructor(driver: WebDriver) {
        this.driver = driver;
    }

    async click(by: By) {
        let elm = await this.driver.wait(until.elementIsVisible(this.driver.findElement(by)));
        await elm.click();
    }

    async sendKeys(by: By, keys: string) {
        let elm = await this.driver.wait(until.elementIsVisible(this.driver.findElement(by)));
        await elm.sendKeys(keys);
    }
  
    async getResults(): Promise<any> {
        await this.driver.wait(until.elementIsVisible(this.driver.findElement(this.resultText)));
        let myResult  = (await this.driver.findElement(this.resultText)).getText();
        return myResult;
    }
    async doSearch(arg0: string) {
        await this.click(this.searchField)
        await this.sendKeys(this.searchField, `${arg0}\n`);
        await this.driver.findElement(By.className("dodTBe"));
    }
    async navigate() {
        await this.driver.get(this.url);
        await this.driver.findElement(By.css('[alt="Google"]'));
    }

}