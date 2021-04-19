var email = document.getElementById("email");
var password = document.getElementById("password");
var wEmail = document.getElementById("wEmail");
var wPassword = document.getElementById("wPassword");
var validations = document.getElementById("validations");
var submitForm = document.getElementById("submitForm");
var fields = {
  email: false,
  password: false,
};
var rForm = document.getElementById("registerForm");

email.onblur = validateEmail;
function validateEmail() {
  if (!/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(email.value)) {
    wEmail.textContent = "Insert a valid email";
    wEmail.style.color = "red";
    wEmail.style.display = "block";
  } else {
    fields["email"] = true;
  }
}
password.onblur = validatePassword;
function validatePassword() {
  if (!/^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/.test(password.value)) {
    wPassword.textContent =
      "Password should have at least 8 characters (letters and numbers)";
    wPassword.style.color = "red";
    wPassword.style.display = "block";
  } else password.value;
  fields["password"] = true;
}

email.onfocus = function () {
  wEmail.style.display = "none";
};
password.onfocus = function () {
  wPassword.style.display = "none";
};

rForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (fields["email"] && fields["password"]) {
    validations.textContent =
      "Your account data is: " + email.value + " " + password.value;
    sendLoginForm();
  }
});

function sendLoginForm() {
  fetch("http://localhost:7000/login", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email.value,
      password: password.value,
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch(function (error) {
      console.log("Error trying to send the data");
    });
}
