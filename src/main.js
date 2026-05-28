import './style.css';
import { loadComponents } from './components.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Inject Global Dynamic Structure (Header, Footer)
    loadComponents();

    // 2. Futuristic Preloader Count-Up
    const preloader = document.getElementById('preloader');
    const preloaderCount = document.querySelector('.preloader-count');
    
    if (preloader && preloaderCount) {
        let count = 0;
        const duration = 1200; // ms
        const stepTime = Math.abs(Math.floor(duration / 100));
        
        const timer = setInterval(() => {
            count++;
            preloaderCount.textContent = count < 10 ? `0${count}` : count;
            
            if (count >= 100) {
                clearInterval(timer);
                
                // Animate out preloader
                setTimeout(() => {
                    preloader.style.opacity = '0';
                    preloader.style.transform = 'translateY(-100%)';
                    
                    // Trigger first reveals
                    setTimeout(() => {
                        preloader.style.display = 'none';
                        triggerInitialReveals();
                    }, 1000);
                }, 200);
            }
        }, stepTime);
    } else {
        // If no preloader exists, trigger reveals immediately
        triggerInitialReveals();
    }

    // 3. Inject Custom Glowing Cursor Elements
    const cursorDot = document.createElement('div');
    const cursorRing = document.createElement('div');
    cursorDot.className = 'custom-cursor-dot';
    cursorRing.className = 'custom-cursor-ring';
    document.body.appendChild(cursorDot);
    document.body.appendChild(cursorRing);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    // Follow mouse coordinates
    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        cursorDot.style.left = `${mouseX}px`;
        cursorDot.style.top = `${mouseY}px`;
    });

    // Custom animation loop for the lagging outer cursor ring (lerp)
    function animateCursor() {
        const lerpFactor = 0.15;
        ringX += (mouseX - ringX) * lerpFactor;
        ringY += (mouseY - ringY) * lerpFactor;

        cursorRing.style.left = `${ringX}px`;
        cursorRing.style.top = `${ringY}px`;

        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Setup cursor hover styles
    function updateCursorHoverEvents() {
        const hoverables = document.querySelectorAll('a, button, select, input, textarea, .filter-btn, .mobile-menu-toggle, [role="button"]');
        
        hoverables.forEach(el => {
            el.addEventListener('mouseenter', () => {
                document.body.classList.add('cursor-hover');
            });
            el.addEventListener('mouseleave', () => {
                document.body.classList.remove('cursor-hover');
            });
        });
    }
    updateCursorHoverEvents();

    // 4. Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const body = document.body;
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            body.classList.toggle('menu-open');
            mobileToggle.classList.toggle('active');
        });
    }

    // Close menu when clicking link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            body.classList.remove('menu-open');
            if (mobileToggle) mobileToggle.classList.remove('active');
        });
    });
    
    // Highlight active link in navbar
    const currentPath = window.location.pathname;
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href') === currentPath || 
            (currentPath === '/' && link.getAttribute('href') === '/index.html') ||
            (currentPath.endsWith('/') && link.getAttribute('href') === '/index.html')) {
            link.classList.add('active');
        }
    });

    // 5. Spotlight Hover Effect & 3D Cards Tilt
    const panels = document.querySelectorAll('.glass-panel, .expert-card, .hud-stat-card, .founder-card, .office-coordinate-card');
    
    panels.forEach(panel => {
        panel.addEventListener('mousemove', (e) => {
            const rect = panel.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Set variables for the glow spotlights
            panel.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`);
            panel.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`);

            // Apply 3D Tilt Effect
            if (panel.classList.contains('glass-panel') || panel.classList.contains('expert-card')) {
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((centerY - y) / centerY) * 5; // max rotate 5deg
                const rotateY = ((x - centerX) / centerX) * 5;
                
                panel.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
            }
        });

        panel.addEventListener('mouseleave', () => {
            // Reset transforms on mouse leave
            if (panel.classList.contains('glass-panel') || panel.classList.contains('expert-card')) {
                panel.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
            }
        });
    });

    // 6. Magnetic Buttons
    const magnets = document.querySelectorAll('.btn-magnet-wrap, .btn-futuristic');
    
    magnets.forEach(magnet => {
        magnet.addEventListener('mousemove', (e) => {
            const rect = magnet.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            // Offset calculation
            const deltaX = e.clientX - centerX;
            const deltaY = e.clientY - centerY;
            
            // Move slightly towards mouse
            magnet.style.transform = `translate(${deltaX * 0.25}px, ${deltaY * 0.25}px)`;
            
            // Move inner text / element slightly more
            const text = magnet.querySelector('span');
            if (text) {
                text.style.transform = `translate(${deltaX * 0.1}px, ${deltaY * 0.1}px)`;
            }
        });

        magnet.addEventListener('mouseleave', () => {
            // Smooth reset
            magnet.style.transform = 'translate(0px, 0px)';
            const text = magnet.querySelector('span');
            if (text) {
                text.style.transform = 'translate(0px, 0px)';
            }
        });
    });

    // 7. Scroll-Triggered Reveals using IntersectionObserver
    const revealOptions = {
        threshold: 0.05,
        rootMargin: "0px 0px -80px 0px"
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Observe elements that are inside for staggered timing
                entry.target.querySelectorAll('.reveal-item').forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('visible');
                    }, index * 100);
                });
                revealObserver.unobserve(entry.target);
            }
        });
    }, revealOptions);

    // Register all elements to observe
    document.querySelectorAll('.fade-up').forEach(el => revealObserver.observe(el));
    document.querySelectorAll('.reveal-wrapper').forEach(el => revealObserver.observe(el));

    function triggerInitialReveals() {
        // Find visible elements on viewport immediately and trigger
        document.querySelectorAll('.hero-section .fade-up, .hero-section .reveal-item').forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('visible');
            }, index * 150);
        });
    }

    // 8. Navbar Scroll State & Glassmorphism Blur Shift
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (!navbar) return;
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(3, 3, 3, 0.85)';
            navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.08)';
        } else {
            navbar.style.background = 'rgba(3, 3, 3, 0.6)';
            navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.05)';
        }
    });

    // 9. Back To Top
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        backToTop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Export cursor update helper to global scope so that dynamically loaded content can re-register listeners
    window.updateCursorHoverEvents = updateCursorHoverEvents;
});
