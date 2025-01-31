const themeToggleButton = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const themeStylesheet = document.getElementById("theme-stylesheet"); // Mengakses file CSS tema yang aktif

themeToggleButton.addEventListener("click", function() {
    // Jika tema yang aktif adalah light-theme
    if (document.body.classList.contains("light-theme")) {
        // Ganti ke dark-theme
        document.body.classList.remove("light-theme");
        document.body.classList.add("dark-theme");

        // Update ikon ke dark theme
        themeIcon.src = "asset/icon_dark_theme.svg"; 
        
        // Mengubah file CSS yang dimuat
        themeStylesheet.href = "css/dark_theme.css";
    } else {
        // Ganti ke light-theme
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");

        // Update ikon ke light theme
        themeIcon.src = "asset/icon_light_theme.svg";
        
        // Mengubah file CSS yang dimuat
        themeStylesheet.href = "css/light_theme.css";
    }
});
