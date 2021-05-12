const LoginPage = require('../pageobjects/login.page');

describe ('Login test', () => {
  beforeAll('Open browser', () =>{
  LoginPage.open();
  })
  browser.pause(3000)
  it('Put valid email and invalid password', () => {
      LoginPage.email.setValue('juancarlos@gmail.com')
      LoginPage.password.setValue('sdgsdg')
      LoginPage.submit()

      expect(LoginPage.wrongPasswordDiv).toHaveText('Password should have at least 8 characters (letters and numbers)')
  })

  it('Put invalid email and password', () => {
      LoginPage.email.setValue('juancarlos')
      LoginPage.password.setValue('xfbdf')
      LoginPage.submit()
      expect(LoginPage.wrongEmailDiv).toHaveText('Insert a valid email')
      expect(LoginPage.wrongPasswordDiv).toHaveText('Password should have at least 8 characters (letters and numbers)')
  })

  it('Put valid email and password', () => {
      LoginPage.email.setValue('juancarlos@gmail.com')
      LoginPage.password.setValue('j1234567')
      LoginPage.submit()

      expect(LoginPage.validationsDiv).toHaveText('Your account data is: juancarlos@gmail.com j1234567')
  })
})