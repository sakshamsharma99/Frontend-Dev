// DOM elements
const inputBox = document.getElementById("productInput");
const addBtn = document.getElementById("addBtn");
const productList = document.getElementById("productList");

let activeEdit = null; // Track the item being edited


addBtn.addEventListener("click", () => {
    const value = inputBox.value.trim();

    if (!value) return;

    const li = document.createElement("li");
    li.innerHTML = `
        <span class="product-name">${value}</span>
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
    `;

    productList.appendChild(li);
    inputBox.value = "";
});


productList.addEventListener("click", (event) => {
    const target = event.target;
    const li = target.closest("li");

    // Delete product
    if (target.classList.contains("delete")) {
        li.remove();
    }

    // Edit product
    if (target.classList.contains("edit")) {

        // If another edit was in progress, save that first
        if (activeEdit && activeEdit !== li) {
            saveEdit(activeEdit);
        }

        const span = li.querySelector(".product-name");
        const currentText = span.textContent;

        // Replace text with input
        span.outerHTML = `<input type="text" class="edit-input" value="${currentText}">`;
        activeEdit = li;
    }
});


document.addEventListener("click", (event) => {
    if (activeEdit && !activeEdit.contains(event.target)) {
        saveEdit(activeEdit);
    }
});

// Save edited item
function saveEdit(li) {
    const input = li.querySelector(".edit-input");

    if (input) {
        const newValue = input.value.trim() || "Unnamed Product";
        input.outerHTML = `<span class="product-name">${newValue}</span>`;
    }

    activeEdit = null;
}
