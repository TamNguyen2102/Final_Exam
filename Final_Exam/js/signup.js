//----------------- Const & Var handler -------------------

const form = document.querySelector(".login__form");
const feedback = document.querySelector(".errorMessage");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const agreement = document.querySelector("#agreement");

//----------------- Register handler -------------------

function signUpValidate() {
  if (checkUser() == false) {
    showError("Please enter your username");
    username.focus();
    return false;
  } 
  else if (checkEmail() == false) {
    showError("Please enter your email");
    email.focus();
    return false;
  } 
  else if (checkPass() == false) {
    showError("Please enter your password");
    password.focus();
    return false;
  }
  else if (checkPassLength() == false) {
    showError("Password must contain at least 6 characters");
    password.focus();
    return false;
  }
  else if (checkAgreement() == false) {
    showError("You must agree with our User Agreement")
    agreement.focus();
    return false;
  }
}

//----------------- Ultilities handler -------------------

function checkUser() {
  if (username.value === "" || username.value == null) {
    return false;
  } else {
    return true;
  } 
} 

function checkEmail() {
  if (email.value === "" || email.value == null) {
    return false;
  } else {
    return true;
  } 
} 

function checkPass() {
  if (password.value === "" || password.value == null) {
    return false;
  } else {
    return true;
  } 
} 

function checkPassLength() {
  if (password.value.length < 6) {
    return false;
  } else {
    return true;
  } 
}

function checkAgreement() {
  if (agreement.checked == false) {
    return false;
  }
  else {
    return true;
  }
}

function showError(text) {
  feedback.innerHTML = text;
  feedback.style.display = "";
}