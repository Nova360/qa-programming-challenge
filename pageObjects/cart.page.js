// const { default: $ } = require("webdriverio/build/commands/browser/$")
const { default: $ } = require("webdriverio/build/commands/browser/$")
const inventoryPage = require("./inventory.page")
class Cart {

    get continueShoppingBtn() { return $("#continue-shopping") }
    get checkoutBtn() { return $("#checkout") }
    get removeBtn() {return $(".item_pricebar button")}
    //Functions
    addtoCart(index) {
        //put in check for button type
        let label = $(`.inventory_item:nth-child(${ index }) .inventory_item_name`).getText()
        $(`.inventory_item:nth-child(${ index }) .pricebar button`).click()
        return label
    }
    removeFromCart(index) {
        let label = $(`.inventory_item:nth-child(${ index }) .inventory_item_name`).getText()
        $(`.inventory_item:nth-child(${ index }) .pricebar button`).click()
        return label
    }

}
module.exports = new Cart()