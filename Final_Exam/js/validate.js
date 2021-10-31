//----------------- Login handler -------------------

const form = document.querySelector(".login__form");
const feedback = document.querySelector(".errorMessage");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

form.addEventListener("submit", (e) => {
  const message = [];
  if (email.value === "" || email.value == null) {
    message.push("Please enter your email");
  }

  if (password.value === "" || password.value == null) {
    message.push("Please enter your password");
  }

  if (password.value.length < 6) {
    message.push("Your password must contain at least 6 characters");
  }

  if (message.length > 0) {
    e.preventDefault();
    feedback.innerText = message.join(", ");
    feedback.style.display = "block";
  }
});

