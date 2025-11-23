const textarea = document.getElementById("textInput");
const counter = document.getElementById("counter");
const resetBtn = document.getElementById("resetBtn");

const maxChars = 100;

textarea.addEventListener("input", function (e) {
    let remaining = maxChars - textarea.value.length;

    // Change counter color based on remaining characters
    if (remaining <= 0) {
        counter.textContent = "0 characters remaining";
        counter.className = "danger";

        // Prevent extra characters
        textarea.value = textarea.value.substring(0, maxChars);
    } 
    else if (remaining <= 20) {
        counter.textContent = `${remaining} characters remaining`;
        counter.className = "warning";
    }
    else {
        counter.textContent = `${remaining} characters remaining`;
        counter.className = "";
    }
});

// Reset button functionality
resetBtn.addEventListener("click", () => {
    textarea.value = "";
    counter.textContent = "100 characters remaining";
    counter.className = "";
});
