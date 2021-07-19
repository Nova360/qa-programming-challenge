class Footer {
    get footer() { return $(".footer") }
    get footerLinks() { return $(".social") }

    footerLink(index) {
        //.social li:nth-child(2)}
        this.footerLinks.$(`li:nth-child(${index})`).click()
    }
}
module.exports = new Footer()