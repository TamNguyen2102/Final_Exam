const email = document.querySelector("#email");
const pwd = document.querySelector("#pwd");
const cemail = "admin@gmail.com"
const cpwd = "123456"

$(".form").validate({
    rules: {
        email: {
            required: true,
            email: true
        },
        password: {
            required: true,
            minlength: 6
        }
    },

    messages: {
        email: {
            required: "Please enter your email",
            email: "Please enter a valid email"
        },
        password: {
            required: "Please enter your password",
            minlength: "Your password must contain at least 6 characters"
        }
    }
});

