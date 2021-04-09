var email = document.getElementById('email');
var password = document.getElementById('password');
var wEmail = document.getElementById('wEmail');
var wPassword = document.getElementById('wPassword');
var validations = document.getElementById('validations')
var submitForm = document.getElementById('submitForm')

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

/*var form = []

submitForm.addEventListener('click', function(){
})
form.push(email.value, password.value)*/

async function getUsers(){
  fetch(`https://jsonplaceholder.typicode.com/users?email=${email.value}`)
  .then(function(response){
    return response.json();
  })
  .then(data => console.log(data))
  .catch()
};

submitForm.onclick = function() {
  getUsers();
};