require("dotenv").config();
const { assert } = require("chai");
const loginPage = require("../../../pageObjects/login.page")
const inventoryPage = require("../../../pageObjects/inventory.page")
const data = require("../../../data/user");
const { login } = require("../../../pageObjects/login.page");

describe("Login", function () {
    it("Should log into web application", () => {
        browser.url('/');
        loginPage.h4Header.waitForDisplayed()
        assert.equal("Accepted usernames are:", loginPage.h4Header.getText())
        loginPage.login(data.standardUser)
        assert.equal("PRODUCTS", inventoryPage.pageTitle.getText())

    });

    it("Should be locked out", () => {
        browser.url('/')
        loginPage.login(data.lockedOut)
        loginPage.errorField.isDisplayed()
        assert.equal("Epic sadface: Sorry, this user has been locked out.", loginPage.errorField.getText())
        browser.pause(3000)
    })

})