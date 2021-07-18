const { default: $ } = require("webdriverio/build/commands/browser/$")

class Inventory {
    get pageTitle() { return $(".title") }
    get inventoryList() { return $(".inventory_list") }
    //get inventoryItem() { return $("") }
    get addToCartBtn() { return $(".pricebar button") }
    get addItemToCartBtn() { return $('.inventory_details_desc_container button') }
    get backToProductsBtn() { return $("#back-to-products") }
    get productLabel() { return $(".inventory_item_name") }
    get productLink() { return $(".inventory_item_label a") }
    get productImg() { return $(".inventory_item_img") }
    get productPrice() { return $(".pricebar .inventory_item_price") }
    get sortList() { return $(".product_sort_container") }
    get cart() { return $("#shopping_cart_container a") }
    get itemName() { return $(".inventory_details_name") }

    //Functions
    viewProduct(index) {
        //let prodName = $(`.inventory_item:nth-child(${ index }) .inventory_item_name`).getText()
        $(`.inventory_item:nth-child(${ index }) .inventory_item_label a`).click()
        //return prodName
    }
}
module.exports = new Inventory()