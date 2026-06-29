// LOADER

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    setTimeout(() => {
        loader.style.display = "none";
    }, 500);

});


// MOBILE MENU

const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

});


// CLOSE MOBILE MENU WHEN LINK IS CLICKED

document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

    });

});


// COPY CONTRACT ADDRESS

const copyBtn = document.getElementById("copyBtn");

if (copyBtn) {

    copyBtn.addEventListener("click", () => {

        const contractText =
            document.getElementById("contractText").innerText;

        navigator.clipboard.writeText(contractText);

        const toast = document.getElementById("toast");

        toast.classList.add("show");

        copyBtn.innerText = "Copied! ✅";

        setTimeout(() => {

            toast.classList.remove("show");

            copyBtn.innerText = "Copy CA";

        }, 3000);

    });

}


// SMOOTH SCROLL

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target =
            document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// REVEAL ANIMATION

const reveals = document.querySelectorAll(".reveal");

function revealSections() {

    reveals.forEach(section => {

        const windowHeight = window.innerHeight;

        const sectionTop =
            section.getBoundingClientRect().top;

        if (sectionTop < windowHeight - 100) {

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();


// ACTIVE NAVIGATION LINKS

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {
            link.classList.add("active");
        }

    });

});


// TOKENOMICS COUNTER

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const target =
        Number(counter.getAttribute("data-target"));

    const updateCounter = () => {

        const current =
            Number(counter.innerText.replace(/,/g, ""));

        const increment = target / 100;

        if (current < target) {

            counter.innerText =
                Math.ceil(current + increment)
                .toLocaleString();

            requestAnimationFrame(updateCounter);

        } else {

            counter.innerText =
                target.toLocaleString();

        }

    };

    updateCounter();

});