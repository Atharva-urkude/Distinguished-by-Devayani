const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("open");
});
// HERO PARALLAX EFFECT
const heroBg = document.querySelector('.hero-bg');
const heroContent = document.querySelector('.hero-content');

window.addEventListener('scroll', () => {
    let s = window.scrollY;

    // Move background slower
    heroBg.style.transform = `translateY(${s * 0.28}px) scale(1.20)`;

    // Move foreground slightly
    heroContent.style.transform = `translateY(${s * 0.15}px)`;
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

