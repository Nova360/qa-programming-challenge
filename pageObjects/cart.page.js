const { default: $ } = require("webdriverio/build/commands/browser/$")
const inventoryPage = require("./inventory.page")
class Cart {


    addtoCart(index) {
        //put in check for button type
        $(`.inventory_item:nth-child(${ index }) .pricebar button`).click()
    }
    removeFromCart(index) {
        $(`.inventory_item:nth-child(${ index }) .pricebar button`).click()
    }

}
module.exports = new Cart()