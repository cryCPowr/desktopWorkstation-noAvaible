const themeToggleButton = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const themeStylesheet = document.getElementById("theme-stylesheet");

themeToggleButton.addEventListener("click", function() {
    if (document.body.classList.contains("light-theme")) {
        document.body.classList.remove("light-theme");
        document.body.classList.add("dark-theme");
        themeIcon.src = "asset/icon_dark_theme.svg"; 
        themeStylesheet.href = "css/dark_theme.css";
    } else {
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");
        themeIcon.src = "asset/icon_light_theme.svg";
        themeStylesheet.href = "css/light_theme.css";
    }
});
