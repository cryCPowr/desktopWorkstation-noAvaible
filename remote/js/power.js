const powerToggle = document.getElementById("power-toggle");
const powerIcon = document.getElementById("power-icon");

let isOn = false;

powerToggle.addEventListener("click", function () {
    isOn = !isOn;

    if (isOn) {
        powerIcon.src = "asset/button_on_light.svg"; // Ganti ke ikon ON
    } else {
        powerIcon.src = "asset/button_off_light.svg"; // Ganti ke ikon OFF
    }
});
