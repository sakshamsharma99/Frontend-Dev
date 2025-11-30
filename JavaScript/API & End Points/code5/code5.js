document.addEventListener("DOMContentLoaded", function () {
    loadTimetable("Monday");

    document.getElementById("daySelect").addEventListener("change", function () {
        loadTimetable(this.value);
    });
});

function loadTimetable(day) {
    fetch(`http://localhost:3005/timetable?day=${day}`)
        .then(res => res.json())
        .then(data => displayTimetable(data));
}

function displayTimetable(classes) {
    const container = document.getElementById("timetable");
    container.innerHTML = "";

    if (classes.length === 0) {
        container.innerHTML = "<p>No classes today.</p>";
        return;
    }

    classes.forEach(item => {
        const div = document.createElement("div");
        div.className = "class-box";

        div.innerHTML = `
            <strong>Subject:</strong> ${item.subject}<br>
            <strong>Faculty:</strong> ${item.faculty}<br>
            <strong>Time:</strong> ${item.time}
        `;

        container.appendChild(div);
    });
}
