const search = document.getElementById("searchBox");
const rows = document.querySelectorAll("#tableBody tr");
const msg = document.getElementById("message");

search.addEventListener("input", () => {
let value = search.value.toLowerCase();
let count = 0;

rows.forEach(row => {
let text = row.textContent.toLowerCase();
if (text.includes(value)) {
row.style.display = "";
count++;
} else {
row.style.display = "none";
}
});

msg.style.display = count === 0 ? "block" : "none";
});
