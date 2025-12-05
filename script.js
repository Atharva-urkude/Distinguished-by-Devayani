const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("open");
});
// HERO PARALLAX EFFECT
/* ========================= PARALLAX SCROLL (X + Y) ========================= */

const heroBg = document.querySelector(".hero-bg");
const heroContent = document.querySelector(".hero-inner");
const heroImage = document.querySelector(".hero-img-full img");

window.addEventListener("scroll", () => {
    let s = window.scrollY;

    // Background horizontal parallax
    if (heroBg) {
        heroBg.style.transform = `translateX(${s * 0.18}px) scale(1.2)`;
    }

    // Content vertical smooth parallax
    heroContent.style.transform = `translateY(${s * 0.12}px)`;

    // Foreground image parallax
    heroImage.style.transform = `translateY(${s * 0.09}px) scale(1.12)`;
});

// Quote Banner Parallax (Y-axis smooth scroll)
const quoteBanner = document.querySelector(".quote-banner");

window.addEventListener("scroll", () => {
    let s = window.scrollY;
    quoteBanner.style.transform = `translateY(${s * 0.08}px)`; 
});

// Fade Animations for About Section
const fadeElements = document.querySelectorAll('.fade-left, .fade-right');

function handleFade() {
    fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add('fade-in');
        }
    });
}

window.addEventListener('scroll', handleFade);
window.addEventListener('load', handleFade);
// Toggle service cards open/close
function toggleCard(card) {
    card.classList.toggle("active");
}
function toggleCard(card) {
    card.classList.toggle("active");
}
// Parallax X effect for banner
const bannerBg = document.querySelector(".banner-bg");

window.addEventListener("scroll", () => {
    const offsetX = window.scrollY * 0.12; 
    bannerBg.style.transform = `translateX(${offsetX}px)`; 
});
// Billing Toggle
document.querySelectorAll(".billing-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(".billing-btn.active").classList.remove("active");
        btn.classList.add("active");

        const type = btn.dataset.type;

        document.querySelectorAll(".plan-price").forEach(price => {
            price.innerHTML = (type === "monthly")
                ? `₹${price.dataset.monthly}`
                : `₹${price.dataset.yearly}`;
        });
    });
});

// Slider Buttons
const slider = document.querySelector(".membership-slider");

document.querySelector(".left-slide").onclick = () => slider.scrollLeft -= 350;
document.querySelector(".right-slide").onclick = () => slider.scrollLeft += 350;

// Guides Slider Controls
const guideSlider = document.querySelector(".guides-slider");

document.querySelector(".left-guide").onclick = () => guideSlider.scrollLeft -= 400;
document.querySelector(".right-guide").onclick = () => guideSlider.scrollLeft += 400;

// BLOG SLIDER CONTROLS
const blogSlider = document.querySelector(".blogs-slider");

document.querySelector(".left-blog").onclick = () => blogSlider.scrollLeft -= 450;
document.querySelector(".right-blog").onclick = () => blogSlider.scrollLeft += 450;

