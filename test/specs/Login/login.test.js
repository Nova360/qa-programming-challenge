require("dotenv").config();
const { assert } = require("chai");
const loginPage = require("../../../pageObjects/login.page")
const inventoryPage = require("../../../pageObjects/inventory.page")
const data = require("../../../data/user");
const { login } = require("../../../pageObjects/login.page");
const cartPage = require("../../../pageObjects/cart.page");
const { standardUser } = require("../../../data/user");

describe("Login/Logout page tests", function () {
    it("Should be able to log in/out of the web application as a standard user", () => {
        browser.url('/');
        loginPage.h4Header.waitForDisplayed()
        assert.equal("Accepted usernames are:", loginPage.h4Header.getText())
        loginPage.login(data.standardUser)
        inventoryPage.pageTitle.waitForDisplayed()
        assert.equal("PRODUCTS", inventoryPage.pageTitle.getText())
        inventoryPage.logout()
    });

    it("Should be able to log in/out of the application as a problem user", () => {
        loginPage.h4Header.waitForDisplayed()
        assert.equal("Accepted usernames are:", loginPage.h4Header.getText())
        loginPage.login(data.problemUser)
        inventoryPage.pageTitle.waitForDisplayed()
        assert.equal("PRODUCTS", inventoryPage.pageTitle.getText())
        inventoryPage.logout()
    });

    it("Should be unable to log in", () => {
        loginPage.login(data.lockedOut)
        loginPage.errorField.isDisplayed()
        assert.equal("Epic sadface: Sorry, this user has been locked out.", loginPage.errorField.getText())
    });

    it("Product added to cart should remain after logging out/in", ()=>{
        loginPage.clearLogin()
        loginPage.login(standardUser)
        let label = cartPage.addtoCart(1)
        inventoryPage.logout()
        loginPage.login(standardUser)
        inventoryPage.cartBtn.waitForExist()
        inventoryPage.cartBtn.click()
        assert.equal(label,inventoryPage.productLabel.getText())
        inventoryPage.logout()
    })
    
        it("Should be able to log in/out of the application as a glitched user", () => {
        loginPage.h4Header.waitForDisplayed()
        assert.equal("Accepted usernames are:", loginPage.h4Header.getText())
        loginPage.login(data.glitchedUser)
        //browser.waitUntil(()=>loginPage.login(data.glitchedUser), {timeout: 6000,})
        inventoryPage.pageTitle.waitForDisplayed()
        assert.equal("PRODUCTS", inventoryPage.pageTitle.getText())
        inventoryPage.logout()
    });

})
