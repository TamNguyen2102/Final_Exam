//----------------- Register handler -------------------

const form = document.querySelector(".login__form");
const feedback = document.querySelector(".errorMessage");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const agreement = document.querySelector("#agreement");

form.addEventListener("submit", (e) => {
  const message = [];
  if (name.value === "" || name.value == null) {
    message.push("Please enter your name");
  }

  if (email.value === "" || email.value == null) {
    message.push("Please enter your email");
  }

  if (password.value === "" || password.value == null) {
    message.push("Please enter your password");
  }

  if (password.value.length < 6) {
    message.push("Your password must contain at least 6 characters");
  }

  if (agreement.checked == false) {
    message.push("You have to agree with the Privacy Policy");
  }

  if (message.length > 0) {
    e.preventDefault();
    feedback.innerText = message.join(", ");
    feedback.style.display = "block";
  }
});