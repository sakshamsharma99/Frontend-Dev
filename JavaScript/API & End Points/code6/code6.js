document.getElementById("regForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    axios
        .get(`http://localhost:3006/users?email=${email}`)
        .then(res => {
            if (res.data.length > 0) {
                showMessage("Email already registered.", true);
            } else {
                // Proceed with registration
                axios
                    .post("http://localhost:3006/users", {
                        name,
                        email,
                        password
                    })
                    .then(() => {
                        showMessage("Registration successful!", false);
                        document.getElementById("regForm").reset();
                    });
            }
        })
        .catch(() => {
            showMessage("Error connecting to server.", true);
        });
});

function showMessage(msg, isError) {
    const msgBox = document.getElementById("msg");
    msgBox.textContent = msg;
    msgBox.className = isError ? "error" : "success";
}
