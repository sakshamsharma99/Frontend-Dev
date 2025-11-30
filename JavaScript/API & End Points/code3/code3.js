$(document).ready(function () {

    loadTasks();

    $("#filter").on("change", function () {
        loadTasks();
    });

});

function loadTasks() {
    let filterValue = $("#filter").val();
    let apiURL = "http://localhost:3003/tasks";
    if (filterValue === "completed") {
        apiURL += "?completed=true";
    } else if (filterValue) {
        apiURL += "?priority=" + filterValue;
    }

    $.ajax({
        url: apiURL,
        method: "GET",
        success: function (tasks) {
            displayTasks(tasks);
        }
    });
}

function displayTasks(tasks) {
    $("#taskList").empty();

    tasks.forEach(task => {

        const taskItem = $(`
            <div class="task-box">
                <span class="${task.completed ? 'completed' : ''}">
                    ${task.title} (${task.priority})
                </span>
                <input type="checkbox" ${task.completed ? "checked" : ""}>
            </div>
        `);
        taskItem.find("input").on("change", function () {
            let newStatus = !task.completed;

            $.ajax({
                url: `http://localhost:3003/tasks/${task.id}`,
                method: "PATCH",
                contentType: "application/json",
                data: JSON.stringify({ completed: newStatus }),
                success: () => loadTasks()
            });
        });

        $("#taskList").append(taskItem);
    });
}
