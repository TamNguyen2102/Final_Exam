//----------------- Const & Var handler -------------------

const form = document.querySelector(".login__form");
const feedback = document.querySelector(".errorMessage");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const signin_button = document.querySelector(".btn-signin");
const agreement = document.querySelector("#agreement");
const username = document.querySelector("#username");
let nameList = ["admin", "khang", "tam", "son"]
let emailList = ["admin@gg.com", "khang@gg.com", "tam@gg.com", "son@gg.com"];
let passList = ["123456", "123456", "123456", "123456"];
let attempts = 5;

//----------------- Login handler -------------------

function signInValidate() {
  if (checkEmail() == false) {
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
  else if (validateEmail() == false) {
    showError("Your email is incorrect");
    email.focus();
    attempts--;
    return false;
  }
  else if (validatePass() == false) {
    showError("Your password is incorrect");
    password.focus();
    attempts--;
    return false;
  } 
  else if (attempts <= 0) {
    email.disabled = true;
    password.disabled = true;
    signin_button.disabled = true;
    showError("We have disabled the sign in page to protect your account");
    return false;
  } 
}

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
  } else {
    saveUEP();
    return true;
  }
}

//----------------- Ultilities handler -------------------

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

function showError(text) {
  feedback.innerHTML = text;
  feedback.style.display = "";
}

function validateEmail() {
  //Need to check in data base
  for (let i = 0; i <= emailList.length; i++) {
    if (email.value === emailList[i]) {
      return true;
    }
  }
  return false;
}

function validatePass() {
  //Need to check in data base
  for (let i = 0; i <= passList.length; i++) {
    if (password.value === passList[i]) {
      return true;
    }
  }
  return false;
}

function checkAgreement() {
  if (agreement.checked == false) {
    return false;
  }
  else {
    return true;
  }
}

function checkUser() {
  if (username.value === "" || username.value == null) {
    return false;
  } else {
    return true;
  } 
}

function saveUEP() {
  nameList.push(username.value);
  emailList.push(email.value);
  passList.push(password.value);
}

//----------------- Sidebar handler -------------------

let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtnChange(); //calling the function(optional)
});

searchBtn.addEventListener("click", () => {
  // Sidebar open when click on search icon
  sidebar.classList.toggle("open");
  menuBtnChange(); //calling the function(optional)
});

function menuBtnChange() {
  if (sidebar.classList.contains("open")) {
    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right"); //replacing the iconns class
  } else {
    closeBtn.classList.replace("bx-menu-alt-right", "bx-menu"); //replacing the icons class
  }
}