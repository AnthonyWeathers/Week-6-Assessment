const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });

  test("clicking the Draw button displays the div with id = “choices”", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);

    await driver.findElement(By.id('draw')).click()

    await driver.sleep(1000)
    const draw = await driver.findElement(By.id('choose-header'))

    const className = await draw.getAttribute('class')

    expect(className.includes('hide')).not.toEqual(true)
    await driver.sleep(1000)
  });

  test("clicking an “Add to Duo” button displays the div with id = “player-duo”", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);

    await driver.findElement(By.id('draw')).click()

    await driver.sleep(1000)

    const elements = await driver.findElements(By.className("bot-btn"));

    for (const element of elements) {
        await element.click();
        break; // Exit the loop once the desired button is found
      }
    await driver.sleep(1000)


    const addToDuo = await driver.findElement(By.id('your-duo-header'))

    const className = await addToDuo.getAttribute('class')

    expect(className.includes('hide')).not.toEqual(true)
    await driver.sleep(1000)
  });
});