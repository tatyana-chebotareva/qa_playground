import { Builder, By, Capabilities, WebDriver } from "selenium-webdriver";

const chromedriver = require("chromedriver");

const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

describe("The calculator", () => {
  beforeEach(async () => {
    driver.get("http://localhost:3000");
  });
  afterAll(async () => {
    driver.quit();
  });
  describe("does simple math", () => {
    it("can do 2+2", async () => {
      await clickButton(driver, "2");
      await clickButton(driver, "+");
      await clickButton(driver, "2");
      await clickButton(driver, "=");
      let result = await getDisplay(driver);
      // your assertion here
    });
    it("can do 5-7", async () => {
      await clickButton(driver, "5");
      await clickButton(driver, "-");
      await clickButton(driver, "7");
      await clickButton(driver, "=");
      let result = await getDisplay(driver);
      // your assertion here
    });
    it("can do 18×2", async () => {
      await clickButton(driver, "1");
      await clickButton(driver, "8");
      await clickButton(driver, "×");
      await clickButton(driver, "2");
      await clickButton(driver, "=");
      let result = await getDisplay(driver);
      // your assertion here
    });
    it("can do 75÷10", async () => {
      await clickButton(driver, "7");
      await clickButton(driver, "5");
      await clickButton(driver, "÷");
      await clickButton(driver, "1");
      await clickButton(driver, "0");
      await clickButton(driver, "=");
      let result = await getDisplay(driver);
      // your assertion here
    });
  });
  describe("does more complicated math", () => {});
});

/** Pass in the driver, and a string matching the button you want to click, and the button will be clicked
 * @param {WebDriver} driver the test's driver object
 * @param {string} button the text on the button to click
 * @example clickButton(driver, "=") // will click the equals button
 */
async function clickButton(
  driver: WebDriver,
  button: string
): Promise<void> {
  return (
    await driver.findElement(By.xpath(`//button[text()="${button}"]`))
  ).click();
}
/** Pass in the driver, and get back a promise that will resolve as the displayed value
 * @param {WebDriver} driver the test's driver object
 * @returns {Promise<string>} A promised string that resolves to the text of the display
 * @example
 * getDisplay(driver).then(result=>console.log) // will log the text
 * let result = await getDisplay(driver) // will assign the text to the variable result
 */
async function getDisplay(driver: WebDriver): Promise<string> {
  return await (await driver.findElement(By.css(".display"))).getText();
}