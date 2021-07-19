require("dotenv").config();
const { assert } = require("chai");
const inventoryPage = require("../../../pageObjects/inventory.page")
const loginPage = require("../../../pageObjects/login.page")
const data = require("../../../data/user");
const { login } = require("../../../pageObjects/login.page");

describe("Inventory page tests - ", function () {

    before(()=>{
        browser.url('/')
        loginPage.login(data.standardUser)
    });

    it("Should confirm that the inventory list is displayed and view a single product", () => {
        inventoryPage.inventoryList.waitForDisplayed()
        expect(inventoryPage.inventoryList.isDisplayed()).equals(true)
        let prod = inventoryPage.viewProduct(3)
        expect(prod).equals(inventoryPage.itemName.getText())
        inventoryPage.backToProductsBtn.click()
    })

    it("Should sort the inventory Price(low to high) ", () => {
        inventoryPage.sortList.click()
        inventoryPage.sortInventory(3)
    })

    it("Should sort the inventory Name(A to Z) ", () => {
        inventoryPage.sortList.click()
        inventoryPage.sortInventory(1)
    })

    it("Should sort the inventory Name(Z to A) ", () => {
        inventoryPage.sortList.click()
        inventoryPage.sortInventory(2)
    })

    it("Should sort the inventory Price(high to low) ", () => {
        inventoryPage.sortList.click()
        inventoryPage.sortInventory(4)
    })

    it("Should confirm that each product has an image displayed", ()=>{
        expect(inventoryPage.imageCheck()).equals(true)
    })

    it("Should confirm that each product has an price displayed", ()=>{
        expect(inventoryPage.priceCheck()).equals(true)
    })

    it("Should confirm that each product has an label displayed", ()=>{
        expect(inventoryPage.labelCheck()).equals(true)
    })

    it("Should confirm that each product has an description displayed", ()=>{
        expect(inventoryPage.descCheck()).equals(true)
    })
})