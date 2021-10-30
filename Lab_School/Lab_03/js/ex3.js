const inputGroup = document.querySelectorAll(".form-control");
const form = document.querySelector("form");

console.log(inputGroup);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  inputGroup.forEach((input) => {
    if (input.value === "" || input.value == null) {
      input.classList.add("is-invalid");
    } else {
      input.classList.add("is-valid");
    }
  });
});
