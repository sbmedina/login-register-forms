const Page = require('./page');

class LoginPage extends Page {

    get email () { return $('#email') };
    get password () { return $('#password')};
    get redirectToRegister () { return $('#redirect')};
    get submitBtn () { return $('#buttons')};
    get wrongEmailDiv () { return $('#wEmail')};
    get wrongPasswordDiv () { return $('#wPassword')};
    get validationsDiv () { return $('#validations')};
    open () {
        return super.open('login');
    }

    submit () {
        this.submitBtn.click()
    }
}

module.exports = new LoginPage();
