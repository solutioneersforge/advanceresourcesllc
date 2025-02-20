document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".menu-section li a");

    menuItems.forEach(item => {
        item.addEventListener("mouseover", function () {
            this.style.transform = "scale(0.9)"; // Zoom-out effect
            this.style.color = "blue"; // Change text color to blue
            this.style.transition = "transform 0.3s ease, color 0.3s ease";
        });

        item.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)"; // Reset to original size
            this.style.color = ""; // Reset color to default
        });
    });
});
