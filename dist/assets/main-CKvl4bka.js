(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function c(){const r=document.getElementById("navbar-container"),a=document.getElementById("footer-container");r&&(r.innerHTML=`
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
        `),a&&(a.innerHTML=`
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
        `)}document.addEventListener("DOMContentLoaded",()=>{c();const r=document.querySelector(".mobile-menu-toggle"),a=document.body;r&&r.addEventListener("click",()=>{a.classList.toggle("menu-open"),r.classList.toggle("active")}),document.querySelectorAll(".nav-links a").forEach(o=>{o.addEventListener("click",()=>{a.classList.remove("menu-open"),r&&r.classList.remove("active")})});const s=window.location.pathname;document.querySelectorAll(".nav-links a").forEach(o=>{(o.getAttribute("href")===s||s==="/"&&o.getAttribute("href")==="/index.html")&&o.classList.add("active")});const n={threshold:.1,rootMargin:"0px 0px -50px 0px"},e=new IntersectionObserver(o=>{o.forEach(l=>{l.isIntersecting&&(l.target.classList.add("visible"),e.unobserve(l.target))})},n);document.querySelectorAll(".fade-up").forEach(o=>e.observe(o)),document.querySelectorAll(".text-reveal").forEach(o=>e.observe(o));const t=document.querySelector(".navbar");window.addEventListener("scroll",()=>{t&&(window.scrollY>50?(t.style.background="rgba(5, 5, 5, 0.95)",t.style.borderBottom="1px solid rgba(255, 255, 255, 0.1)"):(t.style.background="rgba(5, 5, 5, 0.8)",t.style.borderBottom="1px solid rgba(255, 255, 255, 0.08)"))});const i=document.getElementById("back-to-top");i&&i.addEventListener("click",o=>{o.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})}),console.log("April Grid Redesign Initialized")});
