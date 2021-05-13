const Page = require("./page");

class RegisterPage extends Page {
    get fullName() {
        return $("#fullName");
    }
    get email() {
        return $("#email");
    }
    get password() {
        return $("#password");
    }
    get repeatPassword() {
        return $("#repeatPass");
    }
    get submitBtn() {
        return $("#submitForm");
    }
    get wrongNameDiv() {
        return $("#wName");
    }
    get wrongEmailDiv() {
        return $("#wEmail");
    }
    get wrongPasswordDiv() {
        return $("#wPassword");
    }
    get wrongConfirmPasswordDiv() {
        return $("#wRepeat");
    }
    get validationsDiv() {
        return $("#validations");
    }
    get redirectToLogin() {
        return $("a");
    }

    open() {
        return super.open("register");
    }

    submit() {
        this.submitBtn.click();
    }
}
module.exports = new RegisterPage();
