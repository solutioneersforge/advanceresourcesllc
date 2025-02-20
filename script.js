document.addEventListener("DOMContentLoaded", function () {
    // Toggle Mobile Navigation Menu
    const menuToggle = document.createElement("button");
    menuToggle.innerHTML = "☰";
    menuToggle.classList.add("menu-toggle");
    document.querySelector(".nav-bar-panel")?.appendChild(menuToggle);

    const menuContainer = document.querySelector(".menu-container");
    if (menuToggle && menuContainer) {
        menuToggle.addEventListener("click", function () {
            menuContainer.classList.toggle("active");
        });
    }

    // Smooth Scroll Effect for Internal Links Only
    document.querySelectorAll(".menu-section a").forEach(anchor => {
        const href = anchor.getAttribute("href");
        if (href && href.startsWith("#")) {
            anchor.addEventListener("click", function (e) {
                e.preventDefault();
                const targetElement = document.getElementById(href.substring(1));
                targetElement?.scrollIntoView({ behavior: "smooth" });
            });
        }
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

    // Button Hover Effect
    const quoteButton = document.querySelector(".quote-button");
    if (quoteButton) {
        quoteButton.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.1)";
            this.style.boxShadow = "0px 4px 15px rgba(58, 106, 253, 0.5)";
        });
        quoteButton.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
            this.style.boxShadow = "none";
        });
    }

    // Responsive Image Container Scaling
    function adjustImageContainer() {
        const imageContainer = document.querySelector(".image-container");
        if (imageContainer) {
            imageContainer.style.transform = window.innerWidth < 1024 ? "scale(0.8)" : "scale(1)";
            imageContainer.style.transition = "box-shadow 0.5s ease-in-out";
            imageContainer.style.boxShadow = "0px 10px 50px rgba(0, 0, 0, 0.3)";
        }
    }
    window.addEventListener("resize", adjustImageContainer);
    adjustImageContainer();

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

    // Background & Image Container Animation
    const backgroundImage = document.querySelector(".main-top-bg");
    const imageContainer = document.querySelector(".image-container");

    function animateBackground() {
        if (backgroundImage) {
            backgroundImage.style.transition = "";
            backgroundImage.style.transform = "";
            setTimeout(() => {
                backgroundImage.style.transform = "scale(1)";
            }, 1500);
        }
    }

    if (imageContainer) {
        imageContainer.style.opacity = "0";
        imageContainer.style.transform = "translateX(+100%)";
        setTimeout(() => {
            imageContainer.style.transition = "transform 2.5s ease-in-out, opacity 0.5s ease-in-out";
            imageContainer.style.opacity = "1";
            imageContainer.style.transform = "translateX(0)";
        }, 2500);
    }

    setInterval(animateBackground, 3000);

    // Zoom-out effect for Get a Quote button
    const getQuoteBtn = document.querySelector(".get-quote-btn");
    if (getQuoteBtn) {
        getQuoteBtn.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.1)";
            this.style.transition = "transform 0.3s ease-in-out";
        });

        getQuoteBtn.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
        });
    }

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

    // Animation for Sub-Boxes
    document.querySelectorAll(".sub-box").forEach((box, index) => {
        setTimeout(() => {
            box.classList.add("animate-up");
        }, index * 200);
    });

    // Zoom Effect on Hover for Service Items
    document.querySelectorAll(".service-item").forEach((item) => {
        item.addEventListener("mouseenter", () => item.classList.add("zoom-out"));
        item.addEventListener("mouseleave", () => item.classList.remove("zoom-out"));
    });

    // Feature Card Scroll Animation
    function animateOnScroll() {
        document.querySelectorAll(".feature-card").forEach((card) => {
            if (card.getBoundingClientRect().top < window.innerHeight - 100) {
                card.classList.add("animate-left-to-right");
            }
        });
    }
    window.addEventListener("scroll", animateOnScroll);
    animateOnScroll();

    const robot = document.querySelector(".robot-body");

    if (robot) {
        // Ensure it's initially positioned off-screen
        robot.style.opacity = "0";
        robot.style.transform = "translate(100px, 100px)";

        setTimeout(() => {
            robot.style.opacity = "1"; // Fade-in effect
            robot.style.transform = "translate(0, 0)"; // Move to its defined position
        }, 1000); // Delay for smooth animation
    }

    const secondContainer = document.querySelector(".second-container");
    if (secondContainer) {
        secondContainer.classList.add("fade-in"); // Ensure the class is added
    }
});
