document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menuSection = document.querySelector(".menu-section");
    const body = document.body;

    menuToggle.addEventListener("click", function () {
        menuSection.classList.toggle("active");
        body.classList.toggle("menu-open");
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!menuSection.contains(event.target) && !menuToggle.contains(event.target)) {
            menuSection.classList.remove("active");
            body.classList.remove("menu-open");
        }
    });

    // Smooth Scroll Effect for Internal Navigation Links
    document.querySelectorAll(".menu-section a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href");

            // Check if the link is internal (starts with #)
            if (targetId.startsWith("#")) {
                e.preventDefault();
                document.querySelector(targetId)?.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Hero Text Animation
    const heroText = document.querySelector(".hero-text-box");
    if (heroText) {
        heroText.style.opacity = 0;
        heroText.style.transform = "translateY(50px)";
        setTimeout(() => {
            heroText.style.transition = "opacity 1.5s ease-in-out, transform 1.5s ease-in-out";
            heroText.style.opacity = 1;
            heroText.style.transform = "translateY(0)";
        }, 500);
    }

    // Button Hover Effects (Quote & Get a Quote)
    document.querySelectorAll(".quote-button, .get-quote-btn").forEach(button => {
        button.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.1)";
            this.style.boxShadow = "0px 4px 15px rgba(58, 106, 253, 0.5)";
        });
        button.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
            this.style.boxShadow = "none";
        });
    });

    // Menu Hover Effects
    document.querySelectorAll(".menu-section a").forEach(menuItem => {
        menuItem.addEventListener("mouseenter", function () {
            this.style.color = "#3A6AFD";
            this.style.transform = "scale(1.1)";
            this.style.transition = "color 0.3s ease-in-out, transform 0.3s ease-in-out";
        });
        menuItem.addEventListener("mouseleave", function () {
            this.style.color = "white";
            this.style.transform = "scale(1)";
        });
    });

    // Animate Background
    const backgroundImage = document.querySelector(".main-top-bg");
    function animateBackground() {
        if (backgroundImage) {
            backgroundImage.style.transition = "transform 1.5s ease-in-out";
            backgroundImage.style.transform = "scale(1)";
        }
    }
    if (backgroundImage) setInterval(animateBackground, 3000);

    // Animation for View Material Catalog
    const materialCatalog = document.querySelector(".material-catalog");
    if (materialCatalog) {
        materialCatalog.addEventListener("mouseenter", function () {
            this.style.transform = "translateX(10px)";
            this.style.transition = "transform 0.3s ease-in-out";
        });
        materialCatalog.addEventListener("mouseleave", function () {
            this.style.transform = "translateX(0)";
        });
    }

    // Staggered Animation for Third-Box Elements
    document.querySelectorAll(".third-box").forEach((box, index) => {
        setTimeout(() => {
            box.classList.add("animate-up");
        }, index * 200);
    });

    // Hover Zoom Effect for Service Items & See More Button
    const zoomElements = document.querySelectorAll(".service-item, .see-more");
    zoomElements.forEach(element => {
        element.addEventListener("mouseenter", () => element.classList.add("zoom-out"));
        element.addEventListener("mouseleave", () => element.classList.remove("zoom-out"));
    });

    // Scroll Animation for Feature Cards
    const featureCards = document.querySelectorAll(".feature-card");
    function animateOnScroll() {
        featureCards.forEach(card => {
            if (card.getBoundingClientRect().top < window.innerHeight - 100) {
                card.classList.add("animate-left-to-right");
            }
        });
    }
    window.addEventListener("scroll", animateOnScroll);
    animateOnScroll(); // Run once on page load

    // Robot Animation on Load
    const robot = document.querySelector(".robot-body");
    if (robot) robot.classList.add("show");
});

