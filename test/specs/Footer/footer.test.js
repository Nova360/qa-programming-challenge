require("dotenv").config();
const { assert } = require("chai");
const loginPage = require("../../../pageObjects/login.page")
const footerPage = require("../../../pageObjects/footer.page")
const inventoryPage = require("../../../pageObjects/inventory.page")
const data = require("../../../data/user");

describe("Footer tests", function () {
    it("Should confirm that footer is present on the inventory page", () => {
        browser.url('/')
        loginPage.login(data.standardUser)
        footerPage.footer.waitForExist()
        //expect(footerPage.footer.isExisting()).equals(true)
        expect(footerPage.footer.isDisplayed()).equals(true)
    })

    it("Should open twitter link in a new tab", () => {
        footerPage.footerLink(1)
        browser.switchWindow(/twitter/i);
        assert.equal("https://twitter.com/saucelabs", browser.getUrl())
       browser.closeWindow()
    })

    it("Should open facebook link in a new tab", () => {
        browser.switchWindow(/saucedemo/i);
        footerPage.footerLink(2)
        browser.switchWindow(/facebook/i);
        assert.equal("https://www.facebook.com/saucelabs", browser.getUrl())
        browser.closeWindow()
    })

    it("Should open linkedin link in a new tab", () => {
        browser.switchWindow(/saucedemo/i);
        footerPage.footerLink(3)
        browser.switchWindow(/linkedin/i);
       //expect(browser).toHaveUrlContaining('linkedin')
        //assert.equal("https://www.linkedin.com/company/sauce-labs/", browser.getUrl())
        browser.closeWindow()
    })

    it("Should confirm that footer is present on the cart page", () => {
        browser.switchWindow(/saucedemo/i);
        inventoryPage.cartBtn.click()
        footerPage.footer.waitForExist()
        //expect(footerPage.footer.isExisting()).equals(true)
        expect(footerPage.footer.isDisplayed()).equals(true)
    })
})