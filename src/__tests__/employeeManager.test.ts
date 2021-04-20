import {
    Builder,
    By,
    Capabilities,
    until,
    WebDriver,
    WebElement,
    Key,
  } from "selenium-webdriver";

  jest.setTimeout(10000);

  const chromedriver = require("chromedriver");
  
  const driver: WebDriver = new Builder()
    .withCapabilities(Capabilities.chrome())
    .build();
  const bernice: By = By.name("employee1");
  const marnie: By = By.name("employee2");
  const phillip: By = By.name("employee3");
  const nameDisplay: By = By.id("employeeTitle");
  const nameInput: By = By.name("nameEntry");
  const phoneInput: By = By.name("phoneEntry");
  const titleInput: By = By.name("titleEntry");
  const saveButton: By = By.id("saveBtn");
  const cancelButton: By = By.name("cancel");
  const errorCard: By = By.css(".errorCard");
  
  describe("Employee Manager 1.2", () => {
    beforeEach(async () => {
      await driver.get(
        "https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html"
      );
    });
    afterAll(async () => {
      await driver.quit();
    });

    //#1
    describe("handles unsaved, canceled, and saved changes correctly", () => { 
      test("An unsaved change doesn't persist", async () => {
        /*
        This test follows these steps:
        1. Open Bernice Ortiz
        2. Edit the name input
        3. Open Phillip Weaver
        4. Open Bernice Ortiz
        5. Verify the name field is the original name
      */
        await driver.findElement(bernice).click(); //Open Bernice Ortiz
        await driver.wait(
          until.elementIsVisible(await driver.findElement(nameInput)) //wait for the name input
        );
        await driver.findElement(nameInput).clear(); //Edit the name input - clear
        await driver.findElement(nameInput).sendKeys("Test Name"); //Edit the name input - enter "Test name"
        await driver.findElement(phillip).click(); //Open Phillip Weaver
        await driver.wait(
          until.elementTextContains(
            await driver.findElement(nameDisplay), //wait for the name displayed
            "Phillip"
          )
        );
        await driver.findElement(bernice).click(); //Open Bernice Ortiz
        await driver.wait(
          until.elementTextContains(
            await driver.findElement(nameDisplay), //wait for the name displayed
            "Bernice"
          )
        );
        expect(
          await (await driver.findElement(nameInput)).getAttribute("value") //check the name was not changed
        ).toBe("Bernice Ortiz");
      });
  
      //#2
      test("A canceled change doesn't persist", async () => {
        /*
        This test follows these steps:
        1. Open Phillip Weaver
        2. Edit the name input
        3. Click cancel
        5. Verify the name field is the original name
      */
        await driver.findElement(phillip).click(); //Open Phillip Weaver
        await driver.wait(
          until.elementIsVisible(await driver.findElement(nameInput)) //wait for the name input
        );
        await driver.findElement(nameInput).clear(); //Edit the name input - clear
        await driver.findElement(nameInput).sendKeys("Test Name"); //Edit the name input - enter "Test name"
        await driver.findElement(cancelButton).click(); //hit Cancel button
        expect(
          await (await driver.findElement(nameInput)).getAttribute("value")  //wait for the name displayed
        ).toBe("Phillip Weaver");

        //the test should also have steps: open another employee, get back to the Phillip and check the name again:
        await driver.findElement(bernice).click(); //Open Bernice Ortiz
        await driver.wait(
          until.elementTextContains(
            await driver.findElement(nameDisplay), //wait for the name displayed
            "Bernice"
          )
        );
        await driver.findElement(phillip).click(); //Open Phillip Weaver
        await driver.wait(
          until.elementTextContains(
            await driver.findElement(nameDisplay), //wait for the name displayed
            "Phillip"
          )
        );
        expect(
            await (await driver.findElement(nameInput)).getAttribute("value") //check the name was not changed
          ).toBe("Phillip Weaver");
      });
  
      //#3
      test("A saved change persists", async () => {
        /*
        This test follows these steps:
        1. Open Bernice Ortiz
        2. Edit the name input
        3. Save the change
        4. Open Phillip Weaver
        5. Open Bernice Ortiz's old record
        5. Verify the name field is the edited name
        */
        await driver.findElement(bernice).click(); // Open Bernice Ortiz
        await driver.wait(
          until.elementIsVisible(await driver.findElement(nameInput)) // wait for the name input
        );
        await driver.findElement(nameInput).clear(); // Edit the name input - clear
        await driver.findElement(nameInput).sendKeys("Test Name"); // Edit the name input - enter "Test Name"
        await driver.findElement(saveButton).click(); // Hit Save button
        await driver.findElement(phillip).click(); // Open Phillip Weaver
        await driver.wait(
          until.elementTextContains(
            await driver.findElement(nameDisplay), // wait for the name to be displayed
            "Phillip"
          )
        );
        await driver.findElement(bernice).click(); // Open Bernice Ortiz
        expect(
          await (await driver.findElement(nameInput)).getAttribute("value") // check the name was changed to "Test Name"
        ).toBe("Test Name");
      });
    });

    describe("handles error messages correctly", () => {
        
      //#4
      test("shows an error message for an empty name field", async () => {
        /*
        This test follows these steps:
        1. Open Bernice Ortiz
        2. Clear the name input
        3. Save the change
        4. Verify the error is present
        */
        //would be nice to verify that the name was not saved as empty by opening Phillip page and then returning to Bernice page to confirm
        await driver.findElement(bernice).click(); // Open Bernice Ortiz
        await driver.wait(
          until.elementIsVisible(await driver.findElement(nameInput)) // wait for the name input
        );
        await driver.findElement(nameInput).clear(); // Edit the name input - clear
        await driver.findElement(nameInput).sendKeys(Key.SPACE, Key.BACK_SPACE); // Edit the name input - enter " " then BACKSPACE
        await driver.findElement(saveButton).click(); // Hit Save button
        await driver.wait(until.elementLocated(errorCard));
        expect(await (await driver.findElement(errorCard)).getText()).toBe( // Should get an Error message
          "The name field must be between 1 and 30 characters long."
        );
      });

      //#5
      test("lets you cancel out of an error message", async () => {
        /*
        This test follows these steps:
        1. Open Bernice Ortiz
        2. Clear the name input
        3. Save the change
        4. Verify the error is present
        5. Cancel the change
        6. Verify the error is gone
        */
        //would be nice to verify that the name was not saved as empty: by opening Phillip page and then returning to Bernice page to confirm
        //would be nice to have a test that user can actually save valid changes after correcting errors
        await driver.findElement(bernice).click(); // Open Bernice Ortiz
        await driver.wait(
          until.elementIsVisible(await driver.findElement(nameInput)) // wait for the name input
        );
        await driver.findElement(nameInput).clear(); // Edit the name input - clear
        await driver.findElement(nameInput).sendKeys(Key.SPACE, Key.BACK_SPACE); // Edit the name input - enter " " then BACKSPACE
        await driver.findElement(saveButton).click(); // Hit Save button
        await driver.wait(until.elementLocated(errorCard));
        expect(await (await driver.findElement(errorCard)).getText()).toBe( // Should get an Error message
          "The name field must be between 1 and 30 characters long."
        );
        await driver.findElement(nameInput).sendKeys(Key.SPACE); // Edit the name input - enter " "
        await driver.findElement(saveButton).click(); // Hit Save button
        driver.wait(() => true, 500);
        expect(await driver.findElements(errorCard)).toHaveLength(0); // Error message should be gone
      });
    });
  });