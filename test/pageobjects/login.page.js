const Page = require('./page');

class LoginPage extends Page {
   
    get inputUsername () { return $('#username') }
    get inputPassword () { return $('#password') }
    get btnSubmit () { return $('button[type="submit"]') }

    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
