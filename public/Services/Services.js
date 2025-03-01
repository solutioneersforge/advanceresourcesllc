document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menuSection = document.querySelector(".menu-section");
  
    // Toggle the menu on button click
    menuToggle.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent the click event from bubbling up
        menuSection.classList.toggle("active");
    });
  
    // Close the menu when clicking outside of it
    document.addEventListener("click", function (event) {
        if (!menuSection.contains(event.target) && !menuToggle.contains(event.target)) {
            menuSection.classList.remove("active");
        }
    });
  });
  
  // Add interactivity to the "Contact Us" button
  document.getElementById('contactBtn').addEventListener('click', function () {
    alert('Thank you for reaching out! Please email us at info@arm-mfg.com.');
  });