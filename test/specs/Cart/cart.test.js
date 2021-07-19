require("dotenv").config();
const { assert } = require("chai");
const inventoryPage = require("../../../pageObjects/inventory.page")
const cartPage = require("../../../pageObjects/cart.page")
const loginPage = require("../../../pageObjects/login.page")
const data = require("../../../data/user");

describe("Cart tests", function () {

    before(()=>{
        browser.url('/')
        loginPage.login(data.standardUser)
    });

    it("Should add a product to and view cart", () => {
        let label = cartPage.addtoCart(1)
        inventoryPage.cartBtn.click()
        assert.equal(label,inventoryPage.productLabel.getText())
        cartPage.continueShoppingBtn.click()
    })

    it("Should add product to cart from single item view", () => {
        inventoryPage.viewProduct(4)
        inventoryPage.addItemToCartBtn.click()
        inventoryPage.backToProductsBtn.click()
        browser.pause(2000)
    })

    it("Should remove product from cart (Inventory view)", () => {
        cartPage.removeFromCart(4)
        //inventoryPage.cartBtn.click()
        //assert.equal("",inventoryPage.productLabel.getText())
        //cartPage.continueShoppingBtn.click()     
    })

    it("Should view cart and remove product", () => {
        inventoryPage.cartBtn.click()
        cartPage.removeBtn.click()
        browser.pause(3000)
    })

})