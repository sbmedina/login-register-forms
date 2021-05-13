const RegisterPage = require("../pageobjects/register.page");

describe("Register form credentials verifications", () => {
  beforeAll("Open browser", () => {
    RegisterPage.open();
  });
  it("Put valid data but invalid full name", () => {
    RegisterPage.fullName.setValue("juancarlos");
    RegisterPage.email.setValue("juancarlos@gmail.com");
    RegisterPage.password.setValue("j1324657");
    RegisterPage.repeatPassword.setValue("j1324657");

    expect(RegisterPage.wrongNameDiv).toHaveText(
      "Name should have more than 6 characters and a space between words"
    );
  });
  it("Put valid data in the form", () => {
    RegisterPage.fullName.setValue("Juan Carlos");
    RegisterPage.email.setValue("juancarlos@gmail.com");
    RegisterPage.password.setValue("j1324657");
    RegisterPage.repeatPassword.setValue("j1324657");
    RegisterPage.submit();

    expect(RegisterPage.validationsDiv).toBeDisplayed(
      "Registration successfully. User data: juancarlos@gmail.com j1324657"
    );
  });
});
describe("Redirect to login page", () => {
  it("Redirect link to login test", () => {
    RegisterPage.open();
    RegisterPage.redirectToLogin.click();

    expect(RegisterPage.redirectToLogin).toBeClickable();
    expect(browser).toHaveUrl(
      "https://sbmedina.github.io/login-register-forms/login.html"
    );
  });
});
