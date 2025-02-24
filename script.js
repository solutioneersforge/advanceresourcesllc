document.addEventListener("DOMContentLoaded", function () {
    // Toggle Mobile Navigation Menu
    const menuToggle = document.createElement("button");
    menuToggle.innerHTML = "";
    menuToggle.classList.add("menu-toggle");
    document.querySelector(".nav-bar-panel").appendChild(menuToggle);

    const menuContainer = document.querySelector(".menu-container");
    menuToggle.addEventListener("click", function () {
        menuContainer.classList.toggle("active");
    });

    // Smooth Scroll Effect for Navigation Links
    document.querySelectorAll(".menu-section a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId)?.scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Hero Text Animation
    const heroText = document.querySelector(".hero-text-box");
    heroText.style.opacity = 0;
    heroText.style.transform = "translateY(50px)";
    setTimeout(() => {
        heroText.style.transition = "opacity 1.5s ease-in-out, transform 1.5s ease-in-out";
        heroText.style.opacity = 1;
        heroText.style.transform = "translateY(0)";
    }, 500);

    // Button Hover Effect
    document.querySelector(".quote-button").addEventListener("mouseenter", function () {
        this.style.transform = "scale(1.1)";
        this.style.boxShadow = "0px 4px 15px rgba(58, 106, 253, 0.5)";
    });
    document.querySelector(".quote-button").addEventListener("mouseleave", function () {
        this.style.transform = "scale(1)";
        this.style.boxShadow = "none";
    });

    
    
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
});
document.addEventListener("DOMContentLoaded", function () {
    const backgroundImage = document.querySelector(".main-top-bg");
    const imageContainer = document.querySelector(".image-container");

    function animateBackground() {
        backgroundImage.style.transition = "";
        backgroundImage.style.transform = "";

        setTimeout(() => {
            backgroundImage.style.transform = "scale(1)";
        }, 1500);
    }

    setInterval(animateBackground, 3000);

    // Image Container Animation - Slide from right and Zoom Out
imageContainer.style.opacity = "0";
imageContainer.style.transform = "translateX(+100%) scale(1.5)"; // Start zoomed in and off-screen

setTimeout(() => {
    imageContainer.style.opacity = "1";
    imageContainer.style.transform = "translateX(0) scale(1)"; // Slide in and zoom out to normal size
}, 2500);
});


document.addEventListener("DOMContentLoaded", function () {
    // Zoom-out effect for Get a Quote button
    const getQuoteBtn = document.querySelector(".get-quote-btn");

    getQuoteBtn.addEventListener("mouseenter", function () {
        this.style.transform = "scale(1.1)";
        this.style.transition = "transform 0.3s ease-in-out";
    });

    getQuoteBtn.addEventListener("mouseleave", function () {
        this.style.transform = "scale(1)";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Animation for View Material Catalog
    const materialCatalog = document.querySelector(".material-catalog");

    materialCatalog.addEventListener("mouseenter", function () {
        this.style.transform = "translateX(10px)";
        this.style.transition = "transform 0.3s ease-in-out";
    });

    materialCatalog.addEventListener("mouseleave", function () {
        this.style.transform = "translateX(0)";
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const subBoxes = document.querySelectorAll(".third-box");

    subBoxes.forEach((box, index) => {
        setTimeout(() => {
            box.classList.add("animate-up");
        }, index * 200); // Delay each box slightly for a staggered effect
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const serviceItems = document.querySelectorAll(".service-item");

    serviceItems.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            item.classList.add("zoom-out");
        });

        item.addEventListener("mouseleave", () => {
            item.classList.remove("zoom-out");
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const serviceItems = document.querySelectorAll(".service-item");
    const seeMoreButton = document.querySelector(".see-more");

    // Function to add zoom effect on hover
    function addZoomEffect(element) {
        element.addEventListener("mouseenter", () => {
            element.classList.add("zoom-out");
        });

        element.addEventListener("mouseleave", () => {
            element.classList.remove("zoom-out");
        });
    }

    // Apply zoom effect to each service item
    serviceItems.forEach((item) => addZoomEffect(item));

    // Apply zoom effect to the "See More" button
    if (seeMoreButton) {
        addZoomEffect(seeMoreButton);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const featureCards = document.querySelectorAll(".feature-card");

    function animateOnScroll() {
        featureCards.forEach((card, index) => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;

            if (cardPosition < screenHeight - 100) {
                card.classList.add("animate-left-to-right");
            }
        });
    }

    window.addEventListener("scroll", animateOnScroll);
    animateOnScroll(); // Run on page load in case elements are already in view
});

document.addEventListener("DOMContentLoaded", function () {
    const robot = document.querySelector(".robot-body");
    robot.classList.add("show");  // Add class to trigger animation
});

document.addEventListener("DOMContentLoaded", function () {
    const robot = document.querySelector(".robot-body");
    robot.classList.add("show");  // Add class to trigger animation

    window.addEventListener("scroll", animateOnScroll);
    animateOnScroll(); // Run on page load in case elements are already in view
});

