// const { default: $ } = require("webdriverio/build/commands/browser/$")
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
    get productDesc() {return $(".inventory_item_desc")}
    get sortList() { return $(".product_sort_container") }
    get sortContainer() {return $(".select_container")}
    get cartBtn() { return $("#shopping_cart_container a") }
    get itemName() { return $(".inventory_details_name") }
    get burgerMenu() {return $("#react-burger-menu-btn")}
    get logoutBtn() {return $(".bm-item-list a:nth-child(3)")}

    //Functions
    viewProduct(index) {
        let label = $(`.inventory_item:nth-child(${ index }) .inventory_item_name`).getText()
        $(`.inventory_item:nth-child(${ index }) .inventory_item_label a`).click()
        return label
    }

    logout(){
        this.burgerMenu.waitForExist()
        this.burgerMenu.isDisplayed()
        this.burgerMenu.click()
        this.logoutBtn.waitForDisplayed()
        this.logoutBtn.click()
    }

    sortInventory(index){
        this.sortList.$(`option:nth-child(${index})`).click()
    }

    imageCheck(){
        let flag = true
        for (let i = 1; i < 7; i++) {
            if($(`.inventory_item:nth-child(${i}) .inventory_item_img`).isDisplayed() == false)
            {
                flag = false
                break
            }
                
          }  
          return flag
    }

    priceCheck(){
        let flag = true
        for (let i = 1; i < 7; i++) {
            if($(`.inventory_item:nth-child(${i}) .pricebar .inventory_item_price`).isDisplayed() == false)
            {
                flag = false
                break
            }
                
          }  
          return flag
    }

    labelCheck(){
        let flag = true
        for (let i = 1; i < 7; i++) {
            if($(`.inventory_item:nth-child(${i}) .inventory_item_name`).isDisplayed() == false)
            {
                flag = false
                break
            }
                
          }  
          return flag
    }

    descCheck(){
            let flag = true
            for (let i = 1; i < 7; i++) {
                if($(`.inventory_item:nth-child(${i}) .inventory_item_desc`).isDisplayed() == false)
                {
                    flag = false
                    break
                }
                    
              }  
              return flag
        }  
}
module.exports = new Inventory()