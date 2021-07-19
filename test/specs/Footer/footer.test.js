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

    // it("Should open twitter link in a new tab", () => {

    // })

    // it("Should open facebook link in a new tab", () => {

    // })

    // it("Should open linkedin link in a new tab", () => {

    // })

    it("Should confirm that footer is present on the cart page", () => {
        //browser.url(`${ browser.options.baseUrl }/cart.html`)
        //browser.pause(3000)
        inventoryPage.cartBtn.click()
        footerPage.footer.waitForExist()
        //expect(footerPage.footer.isExisting()).equals(true)
        expect(footerPage.footer.isDisplayed()).equals(true)
    })
})