var settingsmenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn");

// Function to toggle the settings menu height
function settingsMenuToggle() {
    if (settingsmenu) {
        settingsmenu.classList.toggle("settings-menu-height");
    }
}

// Toggle dark mode and save preference to localStorage
if (darkBtn) {
    darkBtn.onclick = function() {
        darkBtn.classList.toggle("dark-btn-on");
        document.body.classList.toggle("dark-theme");

        // Save the user's theme preference to localStorage
        const currentTheme = document.body.classList.contains("dark-theme") ? "dark" : "light";
        localStorage.setItem("theme", currentTheme);
    };
}

// Apply the saved theme on page load
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    if (darkBtn) darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
} else {
    if (darkBtn) darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}