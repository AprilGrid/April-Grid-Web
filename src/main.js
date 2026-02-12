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

// 3D Tilt Effect for Service Cards
const cards = document.querySelectorAll('.service-card');

cards.forEach(card => {
    const visual = card.querySelector('.card-visual img');

    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Calculate rotation based on cursor position
        // Center of card is (0,0) rotation
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -15; // Max 15deg
        const rotateY = ((x - centerX) / centerX) * 15;

        // Apply transform
        visual.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`;
    });

    card.addEventListener('mouseleave', () => {
        // Reset position smoothly
        visual.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
    });
});

console.log('April Grid Redesign Loaded');
