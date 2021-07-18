require("dotenv").config();
const { assert } = require("chai");
const inventoryPage = require("../../../pageObjects/inventory.page")
const cartPage = require("../../../pageObjects/cart.page")
const loginPage = require("../../../pageObjects/login.page")
const data = require("../../../data/user");

describe("Cart tests", function () {
    it("Should add a product to cart", () => {
        //put in checks
        browser.url('/')
        loginPage.login(data.standardUser)
        cartPage.addtoCart(1)
        cartPage.removeFromCart(1)
    })

    // it("Should add product to cart from single item view", () => {
    //     //put in checks etc 
    //     inventoryPage.viewProduct(4)
    //     browser.pause(1000)
    //     inventoryPage.addItemToCartBtn.click()
    //     browser.pause(1000)
    // })

    // it("Should remove product from cart (Inventory view)", () => {
    //     //put in checks etc
    //     inventoryPage.backToProductsBtn.click()
    //     browser.pause(1000)
    //     cartPage.removeFromCart(4)
    //     browser.pause(1000)
    // })
})