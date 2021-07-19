require("dotenv").config();
const { assert } = require("chai");
const inventoryPage = require("../../../pageObjects/inventory.page")
const loginPage = require("../../../pageObjects/login.page")
const data = require("../../../data/user");
const { login } = require("../../../pageObjects/login.page");

describe("Inventory page tests", function () {

    // it("Should confirm that the inventory list is displayed and view a single product", () => {
    //     browser.url('/')
    //     loginPage.login(data.standardUser)
    //     inventoryPage.inventoryList.waitForDisplayed()
    //     expect(inventoryPage.inventoryList.isDisplayed()).equals(true)
    //     let prod = inventoryPage.viewProduct(3)
    //     console.log("HERE: ", prod)
    //     expect(prod).equals(inventoryPage.itemName)
    //     // browser.pause(3000)
    // })

    it("Should sort the inventory list", () => {
        browser.url('/')
        loginPage.login(data.standardUser)
        //browser.url(`${ browser.options.baseUrl }/inventory.html`)
        inventoryPage.sortList.click()
        browser.pause()
    })


    // it("Should confirm that the inventory list is displayed and view a single product", () => {
    //     expect(inventoryPage.inventoryList.isDisplayed()).equals(true)
    //     expect(inventoryPage.viewProduct(3)).equals(inventoryPage.itemName)
    //     browser.pause(3000)
    // });
})