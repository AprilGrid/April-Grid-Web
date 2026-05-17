import './style.css';
import { loadComponents } from './components.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Load dynamic header and footer
    loadComponents();

    // 2. Setup Mobile Menu (after header is injected)
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const body = document.body;
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            body.classList.toggle('menu-open');
            mobileToggle.classList.toggle('active');
        });
    }

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            body.classList.remove('menu-open');
            if (mobileToggle) mobileToggle.classList.remove('active');
        });
    });
    
    // Highlight active link in navbar
    const currentPath = window.location.pathname;
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href') === currentPath || (currentPath === '/' && link.getAttribute('href') === '/index.html')) {
            link.classList.add('active');
        }
    });

    // 3. Scroll Animations Setup
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe fade-up elements
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
    
    // Observe text-reveal elements
    document.querySelectorAll('.text-reveal').forEach(el => observer.observe(el));

    // 4. Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (!navbar) return;
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(5, 5, 5, 0.95)';
            navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
        } else {
            navbar.style.background = 'rgba(5, 5, 5, 0.8)';
            navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.08)';
        }
    });

    // 5. Back to top button
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        backToTop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    console.log('April Grid Redesign Initialized');
});
