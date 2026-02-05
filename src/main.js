import './style.css';

// DOM Elements
const navbar = document.querySelector('.navbar');
const mobileToggle = document.querySelector('.mobile-menu-toggle');
const body = document.body;
const fadeElements = document.querySelectorAll('.fade-up');

// Scroll Observer for Fade Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

fadeElements.forEach(el => observer.observe(el));

// Mobile Menu Toggle
mobileToggle.addEventListener('click', () => {
    body.classList.toggle('menu-open');
    // Animate hamburger to X
    mobileToggle.classList.toggle('active');
});

// Close mobile menu when link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        body.classList.remove('menu-open');
        mobileToggle.classList.remove('active');
    });
});

// Navbar Scroll Effect (Optional: add background opaque on scroll)
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(5, 5, 5, 0.9)';
    } else {
        navbar.style.background = 'rgba(5, 5, 5, 0.6)';
    }
});

console.log('April Grid Redesign Loaded');
