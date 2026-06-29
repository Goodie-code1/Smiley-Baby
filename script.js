// =========================
// Loader
// =========================

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);

    }, 500);
});


// =========================
// Mobile Menu
// =========================

const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});


// Close menu after clicking link

document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });

});


// =========================
// Copy Contract Address
// =========================

const copyBtn = document.getElementById("copyBtn");

copyBtn.addEventListener("click", () => {

    const contractText =
        document.getElementById("contractText").textContent.trim();

    navigator.clipboard.writeText(contractText);

    copyBtn.textContent = "Copied! ✅";

    const toast = document.getElementById("toast");

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);

    setTimeout(() => {
        copyBtn.textContent = "Copy CA";
    }, 3000);

});


// =========================
// Animated Counters
// =========================

const counters = document.querySelectorAll(".counter");

const animateCounter = (counter) => {

    const target =
        Number(counter.getAttribute("data-target"));

    let current = 0;

    const increment = target / 150;

    const updateCounter = () => {

        current += increment;

        if (current < target) {

            counter.textContent =
                Math.floor(current).toLocaleString();

            requestAnimationFrame(updateCounter);

        } else {

            counter.textContent =
                target.toLocaleString();

        }
    };

    updateCounter();
};

const counterObserver =
new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            animateCounter(entry.target);

            counterObserver.unobserve(entry.target);
        }
    });

}, {
    threshold: 0.5
});

counters.forEach(counter => {
    counterObserver.observe(counter);
});


// =========================
// Scroll Reveal Animation
// =========================

const revealElements =
document.querySelectorAll(".reveal");

const revealObserver =
new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");
        }

    });

}, {
    threshold: 0.15
});

revealElements.forEach(element => {
    revealObserver.observe(element);
});


// =========================
// Active Navigation
// =========================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            currentSection =
                section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");
        }
    });

});


// =========================
// Navbar Background Effect
// =========================

const navbar =
document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(0,0,0,0.92)";

    } else {

        navbar.style.background =
            "rgba(0,0,0,0.75)";
    }

});


// =========================
// Smooth Internal Scrolling
// =========================

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        const targetId =
            this.getAttribute("href");

        if (targetId === "#") return;

        e.preventDefault();

        const target =
            document.querySelector(targetId);

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});