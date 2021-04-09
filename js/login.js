var email = document.getElementById('email');
var password = document.getElementById('password');
var wEmail = document.getElementById('wEmail');
var wPassword = document.getElementById('wPassword');

email.onblur = validateEmail;
function validateEmail() {
  if (!(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(email.value))) {
    wEmail.textContent = 'Insert a valid email';
    wEmail.style.color = 'red';
    wEmail.style.display = 'block';
  }
}
password.onblur = validatePassword;
function validatePassword() {
  if (!(/^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/.test(password.value))) {
    wPassword.textContent = 'Password should have at least 8 characters (letters and numbers)';
    wPassword.style.color = 'red';
    wPassword.style.display = 'block';
  } else if (password.value);
}

email.onfocus = function () {
  wEmail.style.display = 'none';
}
password.onfocus = function () {
  wPassword.style.display = 'none';
}