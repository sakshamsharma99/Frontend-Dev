const form = document.getElementById("form");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let valid = true;
    successMsg.textContent = "";

    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required";
        valid = false;
    }

    if (!emailInput.value.includes("@")) {
        emailError.textContent = "Invalid email";
        valid = false;
    }

    if (passwordInput.value.length < 6) {
        passwordError.textContent = "Password must be 6+ characters";
        valid = false;
    }

    if (valid) {
        successMsg.textContent = "Form Submitted Successfully";
        form.reset();
    }
});

nameInput.addEventListener("input", () => nameError.textContent = "");
emailInput.addEventListener("input", () => emailError.textContent = "");
passwordInput.addEventListener("input", () => passwordError.textContent = "");
