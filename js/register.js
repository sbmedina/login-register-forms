var fullName = document.getElementById('fullName');
var email = document.getElementById('email');
var password = document.getElementById('password');
var repeatPass = document.getElementById('repeatPass');
var wName = document.getElementById('wName');
var wEmail = document.getElementById('wEmail');
var wPassword = document.getElementById('wPassword');
var wRepeat = document.getElementById('wRepeat');
var submitForm = document.getElementById('submitForm');
var validations = document.getElementById('validations');
var fields = {
  fullName: false,
  email:false,
  password: false,
  repeatPass: false,
}
var rForm = document.getElementById('registerForm')

fullName.onblur = validateName;
function validateName() {
  if (!(/^[a-zA-Z]+(?:\s[a-zA-Z]+)+$/.test(fullName.value)) || fullName.value.length < 6) {
    wName.textContent = 'Name should have more than 6 characters and a space between words';
    wName.style.color = 'red';
    wName.style.display = 'block';
  } else {
    fields['fullName'] = true;
  }
}
email.onblur = validateEmail;
function validateEmail() {
  if (!(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(email.value))) {
    wEmail.textContent = 'Insert a valid email';
    wEmail.style.color = 'red';
    wEmail.style.display = 'block';
  } else {
    fields['email'] = true;
  }
}
password.onblur = validatePassword;
function validatePassword() {
  if (!(/^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/.test(password.value))) {
    wPassword.textContent = 'Password should have at least 8 characters (letters and numbers)';
    wPassword.style.color = 'red';
    wPassword.style.display = 'block';
  } else (password.value);
    fields['password'] = true;
}
repeatPass.onblur = repeatPassword;
function repeatPassword() {
  if (repeatPass.value !== password.value) {
    wRepeat.textContent = 'The password does not match';
    wRepeat.style.color = 'red';
    wRepeat.style.display = 'block';
  } else {
    fields['repeatPass'] = true;
  }
}

fullName.onfocus = function () {
  wName.style.display = 'none';
}
email.onfocus = function () {
  wEmail.style.display = 'none';
}
password.onfocus = function () {
  wPassword.style.display = 'none';
}
repeatPass.onfocus = function () {
  wRepeat.style.display = 'none';
}

rForm.addEventListener('submit', function(e) {
  e.preventDefault ();
  submitForm.addEventListener('click', validations);
  if (fields ['fullName'] && fields ['email'] && fields ['password'] && fields ['repeatPass']) {
  validations.innerHTML = 'Registration successfully. User data: '+ fullName.value + " " + email.value + " " + password.value;
  fetch(`https://jsonplaceholder.typicode.com/users?email=${email.value}`)
  .then(response => response.json())
  .then(data => console.log(data));
  }
})