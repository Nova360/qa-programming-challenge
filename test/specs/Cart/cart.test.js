require("dotenv").config();
const { assert } = require("chai");
const inventoryPage = require("../../../pageObjects/inventory.page")
const cartPage = require("../../../pageObjects/cart.page")
const loginPage = require("../../../pageObjects/login.page")
const data = require("../../../data/user");

describe("Cart tests", function () {
    it("Should add a product to and view cart", () => {
        //put in checks
        browser.url('/')
        loginPage.login(data.standardUser)
        browser.pause(1000)
        cartPage.addtoCart(1)
        inventoryPage.cartBtn.click()
        cartPage.continueShoppingBtn.click()
        //cartPage.removeFromCart(1)
    })

    it("Should add product to cart from single item view", () => {
        //put in checks etc 
        inventoryPage.viewProduct(4)
        browser.pause(1000)
        inventoryPage.addItemToCartBtn.click()
        browser.pause(1000)
    })

    it("Should remove product from cart (Inventory view)", () => {
        //put in checks etc
        inventoryPage.backToProductsBtn.click()
        browser.pause(2000)
        cartPage.removeFromCart(4)
        browser.pause(1000)
    })

    it("Should view cart and remove product", () => {
        //put in checks
        inventoryPage.cartBtn.click()
        browser.pause(5000)
    })

    it("Should go to checkout page")
})