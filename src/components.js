export function loadComponents() {
    const headerContainer = document.getElementById('navbar-container');
    const footerContainer = document.getElementById('footer-container');

    if (headerContainer) {
        headerContainer.innerHTML = `
            <header class="navbar">
                <div class="container nav-content">
                    <a href="/index.html" class="logo">
                        <img src="/assets/logo-new.png" alt="April Grid Logo" style="height: 48px; width: auto;" onerror="this.src='/assets/logo-main.png'">
                    </a>
                    <ul class="nav-links">
                        <li><a href="/services.html">Services</a></li>
                        <li><a href="/work.html">Work</a></li>
                        <li><a href="/about.html">About</a></li>
                    </ul>
                    <div class="btn-magnet-wrap" style="margin-left: 20px;">
                        <a href="/contact.html" class="btn-futuristic btn-futuristic-cyan" style="padding: 12px 28px; font-size: 0.8rem; border-radius: 100px;">
                            <span>Start a Project</span>
                        </a>
                    </div>
                    <div class="mobile-menu-toggle">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </header>
        `;
    }

    if (footerContainer) {
        footerContainer.innerHTML = `
            <footer class="footer-section">
                <div class="container footer-grid-layout">
                    <div class="footer-cta fade-up">
                        <h2 class="reveal-wrapper"><span class="reveal-item">Ready to Scale?</span></h2>
                        <a href="/contact.html" class="cta-link text-gradient-violet">
                            <span>Let's Build the Future &rarr;</span>
                        </a>
                    </div>
                    
                    <div class="footer-content fade-up">
                        <div class="col">
                            <h4>Agency Coordinates</h4>
                            <p>Trivandrum, Kerala, India</p>
                            <p class="mono-num">+91 9688 503503</p>
                            <a href="mailto:hello@aprilgrid.com" class="text-gradient-cyan">hello@aprilgrid.com</a>
                        </div>
                        <div class="col">
                            <h4>Menu Grid</h4>
                            <a href="/services.html">Services</a>
                            <a href="/work.html">Work</a>
                            <a href="/about.html">About</a>
                            <a href="/contact.html">Contact Us</a>
                        </div>
                        <div class="col">
                            <h4>Digital Channels</h4>
                            <a href="https://www.instagram.com/aprilgrid" target="_blank" class="social-link">Instagram</a>
                            <a href="#" class="social-link">LinkedIn</a>
                            <a href="#" class="social-link">Behance</a>
                        </div>
                    </div>
                    
                    <div class="footer-bottom">
                        <div class="logo-footer">
                            <img src="/assets/logo-new.png" alt="April Grid" style="height: 28px; opacity: 0.4;" onerror="this.src='/assets/logo-main.png'">
                        </div>
                        <p class="tagline text-gradient-violet">Where Creativity Meets Code.</p>
                        <p>&copy; 2026 April Grid. All rights reserved.</p>
                        <a href="#" class="back-to-top" id="back-to-top">Back to top &uarr;</a>
                    </div>
                </div>
            </footer>
        `;
    }

    // Refresh cursor events for newly added links
    if (typeof window.updateCursorHoverEvents === 'function') {
        window.updateCursorHoverEvents();
    }
}
