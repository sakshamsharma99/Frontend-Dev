$(document).ready(function () {
    let hour = new Date().getHours();
    let greetingText = "";

    if (hour < 12) {
        greetingText = "Good Morning!";
    } else if (hour < 18) {
        greetingText = "Good Afternoon!";
    } else {
        greetingText = "Good Evening!";
    }

    $("#greeting").text(greetingText);

    $("#changeGreetingBtn").click(function () {
        $("#greeting").text("Believe in yourself! You can do great things.");
    });

    $("#toggleWelcomeBtn").click(function () {
        $("#welcomeMsg").toggle();
    });

    $("#greeting").click(function () {
        alert("You clicked the greeting!");
    });
});
