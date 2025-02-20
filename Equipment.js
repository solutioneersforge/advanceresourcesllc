document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector(".menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");

    if (toggleButton) {  // Ensure button exists
        toggleButton.style.display = "block";  // Force show toggle button

        toggleButton.addEventListener("click", function() {
            mobileMenu.classList.toggle("show");
        });
    }
});
