// Select all theme buttons
const btns = document.querySelectorAll(".theme-btn");

btns.forEach((btn) => {
    btn.addEventListener("click", () => {

       
        const selectedTheme = btn.getAttribute("data-theme");

       
        document.body.setAttribute("data-theme", selectedTheme);

        console.log("Theme changed to:", selectedTheme);
    });
});
