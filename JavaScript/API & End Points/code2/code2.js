function loadEmployees() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3002/employees");
    
    xhr.onload = function () {
        if (xhr.status === 200) {
            const employees = JSON.parse(xhr.responseText);
            displayEmployees(employees);
        }
    };

    xhr.send();
}

function displayEmployees(data) {
    const container = document.getElementById("employees");
    container.innerHTML = "";

    data.forEach(emp => {
        const row = document.createElement("div");
        row.className = "emp-row";

        row.innerHTML = `
            <span>${emp.name}</span>
            <span class="${emp.status}">${emp.status}</span>
            <label>
                <input type="checkbox" ${emp.status === "active" ? "checked" : ""}>
                Toggle
            </label>
        `;

        const checkbox = row.querySelector("input");

        checkbox.addEventListener("change", function () {
            const oldStatus = emp.status;
            const newStatus = oldStatus === "active" ? "inactive" : "active";

            row.querySelector("span:nth-child(2)").textContent = newStatus;
            row.querySelector("span:nth-child(2)").className = newStatus;

            updateStatus(emp.id, newStatus, function (success) {
                if (!success) {
                    alert("Error updating status!");

                    row.querySelector("span:nth-child(2)").textContent = oldStatus;
                    row.querySelector("span:nth-child(2)").className = oldStatus;

                    checkbox.checked = oldStatus === "active";
                }
            });
        });

        container.appendChild(row);
    });
}

function updateStatus(id, newStatus, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open("PATCH", `http://localhost:3002/employees/${id}`);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = function () {
        callback(xhr.status === 200);
    };

    xhr.onerror = function () {
        callback(false);
    };

    xhr.send(JSON.stringify({ status: newStatus }));
}

loadEmployees();
