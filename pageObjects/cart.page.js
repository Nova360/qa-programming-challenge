// const { default: $ } = require("webdriverio/build/commands/browser/$")
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

    removeCount(){

        for(let i = 1; i < $$("item_pricebar").length+1; i++)
            this.removeBtn[i].click()

    }

}
module.exports = new Cart()