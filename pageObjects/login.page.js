const data = require("../data/user")
class Login {
    get loginBtn() { return $("#login-button"); }
    get h4Header() { return $("h4=Accepted usernames are:") }
    get usernameField() { return $("#user-name") }
    get passwordField() { return $("#password") }
    get errorField() { return $(".error-message-container h3") }

    //Functions
    login(username) {
        this.usernameField.click()
        this.usernameField.setValue(username)
        this.passwordField.click()
        this.passwordField.setValue(data.password)
        this.loginBtn.click()
    }
}
module.exports = new Login()