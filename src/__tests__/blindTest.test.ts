import { PracticePage } from ".././PracticePage";

const chromedriver = require("chromedriver");
import { WebDriver, Builder, Capabilities, By, until } from "selenium-webdriver";
const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

const page = new PracticePage(driver);

let searchButton: By = By.css('[title="Search Medium"]');

describe("Test suite", () => {

  beforeEach(async () => {
    await page.navigate();
  });

  afterAll(async () => {
    await driver.quit();
  });

  describe("Test suite", () => { 
    test("My test", async () => {
      var searchTerm = "teacher";
      page.searchStories(searchTerm); //should search if provided selector is correct
      var titles = page.getStoryTitles();
      await titles.then(titles => {
        titles.forEach(title => {
          expect(title).toContain(searchTerm);
          console.log(title)
        })
      })
    })
  })
})

  