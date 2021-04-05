var validations = document.getElementById('validations');
var registerForm = document.getElementById('registerForm');
var validationResults = 'Validation Result: ';
var fields = document.querySelectorAll('input');

var validationForm = function() {
  if (registerForm) {
    validations.innerHTML(validationResults + 'Form is found ')
  }
}
validationForm();

var fieldsVal = function() {
  if (fields.length = 4) {
    validations.innerHTML(validationResults )
  }
  else {
    validations.innerHTML('There are missing fields')
  }
}
fieldsVal();

var fieldsReq = function() {
  if (fields = true) {
    validations.innerHTML(validationResults + 'Every fields are required')
  } else {
    validations.innerHTML(validationResults + ' Required fields are missing')
  }
}
fieldsReq();