const steps = document.querySelectorAll(".form-step");
let currentStep = 0;

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("password");

const errName = document.getElementById("errName");
const errEmail = document.getElementById("errEmail");
const errPassword = document.getElementById("errPassword");

function showStep(index) {
    steps.forEach(step => step.classList.remove("active"));
    steps[index].classList.add("active");
}

// Step 1 Next
document.getElementById("next1").addEventListener("click", () => {
    if (nameInput.value.trim() === "") {
        errName.textContent = "Name is required!";
    } else {
        errName.textContent = "";
        currentStep++;
        showStep(currentStep);
    }
});

// Step 2 Next
document.getElementById("next2").addEventListener("click", () => {
    if (!emailInput.value.includes("@")) {
        errEmail.textContent = "Enter a valid email!";
    } else {
        errEmail.textContent = "";
        currentStep++;
        showStep(currentStep);
    }
});

// Step 3 Finish
document.getElementById("finish").addEventListener("click", () => {
    if (passInput.value.length < 6) {
        errPassword.textContent = "Password must be at least 6 characters!";
    } else {
        errPassword.textContent = "";

        // Show summary
        document.getElementById("sumName").textContent = nameInput.value;
        document.getElementById("sumEmail").textContent = emailInput.value;
        document.getElementById("sumPassword").textContent = passInput.value;

        currentStep++;
        showStep(currentStep);
    }
});

// Back Buttons
document.getElementById("back1").addEventListener("click", () => {
    currentStep--;
    showStep(currentStep);
});

document.getElementById("back2").addEventListener("click", () => {
    currentStep--;
    showStep(currentStep);
});

// Init
showStep(currentStep);
