export function loadComponents() {
    const headerContainer = document.getElementById('navbar-container');
    const footerContainer = document.getElementById('footer-container');

    if (headerContainer) {
        headerContainer.innerHTML = `
            <header class="navbar">
                <div class="container nav-content">
                    <a href="/" class="logo">
                        <img src="/assets/logo-new.png" alt="April Grid Logo" style="height: 50px; width: auto;">
                    </a>
                    <ul class="nav-links">
                        <li><a href="/services.html">Services</a></li>
                        <li><a href="/work.html">Work</a></li>
                        <li><a href="/about.html">About</a></li>
                    </ul>
                    <a href="/contact.html" class="btn-contact">Start a Project</a>
                    <div class="mobile-menu-toggle">
                        <span></span><span></span>
                    </div>
                </div>
            </header>
        `;
    }

    if (footerContainer) {
        footerContainer.innerHTML = `
            <footer class="footer-section">
                <div class="container footer-grid">
                    <div class="footer-cta fade-up">
                        <h2>Ready to scale?</h2>
                        <a href="/contact.html" class="cta-link">Start a Project &rarr;</a>
                    </div>
                    <div class="footer-content fade-up delay-1">
                        <div class="col">
                            <h4>April Grid</h4>
                            <p>Trivandrum, Kerala, India</p>
                            <p>+91 9688 503503</p>
                            <a href="mailto:hello@aprilgrid.com">hello@aprilgrid.com</a>
                        </div>
                        <div class="col">
                            <h4>Menu</h4>
                            <a href="/services.html">Services</a>
                            <a href="/work.html">Work</a>
                            <a href="/about.html">About</a>
                            <a href="/contact.html">Contact</a>
                        </div>
                        <div class="col">
                            <h4>Socials</h4>
                            <a href="https://www.instagram.com/aprilgrid" target="_blank">Instagram</a>
                            <a href="#">LinkedIn</a>
                            <a href="#">Behance</a>
                        </div>
                    </div>
                    <div class="footer-bottom fade-up delay-2">
                        <div class="logo-footer">
                            <img src="/assets/logo-new.png" alt="April Grid" style="height: 30px; opacity: 0.5;">
                        </div>
                        <p class="tagline">Where Creativity Meets Code.</p>
                        <p>&copy; 2026 April Grid. All rights reserved.</p>
                        <a href="#" class="back-to-top" id="back-to-top">Back to top &uarr;</a>
                    </div>
                </div>
            </footer>
        `;
    }
}
