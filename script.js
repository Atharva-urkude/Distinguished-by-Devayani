// Robust logo click behavior (delegated) — place near end of script.js
document.addEventListener('click', function (e) {
  const logoAnchor = e.target.closest('.logo-link');
  if (!logoAnchor) return; // not a click on the logo

  // Prevent default anchor jump so we can do smooth scroll reliably
  e.preventDefault();

  // Close mobile menu if open (safe checks)
  try {
    if (typeof mobileMenu !== 'undefined' && mobileMenu.classList.contains('open')) {
      mobileMenu.classList.remove('open');
    }
    if (typeof hamburger !== 'undefined' && hamburger.classList.contains('active')) {
      hamburger.classList.remove('active');
    }
  } catch (err) {
    // ignore if mobileMenu/hamburger not present
    console.warn('menu close error:', err);
  }

  // Scroll to hero (id="newhero") if exists, otherwise scroll to top
  const hero = document.getElementById('newhero');
  const offset = -70; // adjust for fixed navbar height if needed
  if (hero) {
    const y = hero.getBoundingClientRect().top + window.pageYOffset + offset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  } else {
    // fallback to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});

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


/* ========================= ABOUT SECTION FADE-IN ========================= */
/* ========================= SMOOTH SCROLL REVEAL ========================= */

const revealElements = document.querySelectorAll("[data-fade]");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-visible");
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((el, i) => {
  el.classList.add("reveal-hidden");

  // small stagger delay effect
  el.style.transitionDelay = `${i * 0.08}s`;

  revealObserver.observe(el);
});

const achItems = document.querySelectorAll(".reveal-ach");

const achObserve = new IntersectionObserver(
  (entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.classList.add("visible-ach");
          }
      });
  },
  { threshold: 0.2 }
);

achItems.forEach((el) => achObserve.observe(el));

// Toggle service details
function toggleService(btn) {
    const details = btn.nextElementSibling;
    const isOpen = details.classList.contains("open");

    details.classList.toggle("open");
    btn.textContent = isOpen ? "View Details" : "Hide Details";
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

document.querySelector(".consult-btn")
    .addEventListener("click", () => {
        alert("Thank you! We will connect with you shortly.");
    });

