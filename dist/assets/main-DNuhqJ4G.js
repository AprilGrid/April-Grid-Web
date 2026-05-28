(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function d(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=d(t);fetch(t.href,r)}})();function q(){const n=document.getElementById("navbar-container"),a=document.getElementById("footer-container");n&&(n.innerHTML=`
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
        `),a&&(a.innerHTML=`
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
        `),typeof window.updateCursorHoverEvents=="function"&&window.updateCursorHoverEvents()}document.addEventListener("DOMContentLoaded",()=>{q();const n=document.getElementById("preloader"),a=document.querySelector(".preloader-count");if(n&&a){let e=0;const s=Math.abs(Math.floor(1200/100)),i=setInterval(()=>{e++,a.textContent=e<10?`0${e}`:e,e>=100&&(clearInterval(i),setTimeout(()=>{n.style.opacity="0",n.style.transform="translateY(-100%)",setTimeout(()=>{n.style.display="none",E()},1e3)},200))},s)}else E();const d=document.createElement("div"),c=document.createElement("div");d.className="custom-cursor-dot",c.className="custom-cursor-ring",document.body.appendChild(d),document.body.appendChild(c);let t=window.innerWidth/2,r=window.innerHeight/2,l=t,g=r;window.addEventListener("mousemove",e=>{t=e.clientX,r=e.clientY,d.style.left=`${t}px`,d.style.top=`${r}px`});function x(){l+=(t-l)*.15,g+=(r-g)*.15,c.style.left=`${l}px`,c.style.top=`${g}px`,requestAnimationFrame(x)}x();function w(){document.querySelectorAll('a, button, select, input, textarea, .filter-btn, .mobile-menu-toggle, [role="button"]').forEach(o=>{o.addEventListener("mouseenter",()=>{document.body.classList.add("cursor-hover")}),o.addEventListener("mouseleave",()=>{document.body.classList.remove("cursor-hover")})})}w();const u=document.querySelector(".mobile-menu-toggle"),L=document.body;u&&u.addEventListener("click",()=>{L.classList.toggle("menu-open"),u.classList.toggle("active")}),document.querySelectorAll(".nav-links a").forEach(e=>{e.addEventListener("click",()=>{L.classList.remove("menu-open"),u&&u.classList.remove("active")})});const y=window.location.pathname;document.querySelectorAll(".nav-links a").forEach(e=>{(e.getAttribute("href")===y||y==="/"&&e.getAttribute("href")==="/index.html"||y.endsWith("/")&&e.getAttribute("href")==="/index.html")&&e.classList.add("active")}),document.querySelectorAll(".glass-panel, .expert-card, .hud-stat-card, .founder-card, .office-coordinate-card").forEach(e=>{e.addEventListener("mousemove",o=>{const s=e.getBoundingClientRect(),i=o.clientX-s.left,h=o.clientY-s.top;if(e.style.setProperty("--mouse-x",`${i/s.width*100}%`),e.style.setProperty("--mouse-y",`${h/s.height*100}%`),e.classList.contains("glass-panel")||e.classList.contains("expert-card")){const m=s.width/2,f=s.height/2,v=(f-h)/f*5,S=(i-m)/m*5;e.style.transform=`perspective(1000px) rotateX(${v}deg) rotateY(${S}deg) translateY(-5px)`}}),e.addEventListener("mouseleave",()=>{(e.classList.contains("glass-panel")||e.classList.contains("expert-card"))&&(e.style.transform="perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)")})}),document.querySelectorAll(".btn-magnet-wrap, .btn-futuristic").forEach(e=>{e.addEventListener("mousemove",o=>{const s=e.getBoundingClientRect(),i=s.left+s.width/2,h=s.top+s.height/2,m=o.clientX-i,f=o.clientY-h;e.style.transform=`translate(${m*.25}px, ${f*.25}px)`;const v=e.querySelector("span");v&&(v.style.transform=`translate(${m*.1}px, ${f*.1}px)`)}),e.addEventListener("mouseleave",()=>{e.style.transform="translate(0px, 0px)";const o=e.querySelector("span");o&&(o.style.transform="translate(0px, 0px)")})});const C={threshold:.05,rootMargin:"0px 0px -80px 0px"},b=new IntersectionObserver(e=>{e.forEach(o=>{o.isIntersecting&&(o.target.classList.add("visible"),o.target.querySelectorAll(".reveal-item").forEach((s,i)=>{setTimeout(()=>{s.classList.add("visible")},i*100)}),b.unobserve(o.target))})},C);document.querySelectorAll(".fade-up").forEach(e=>b.observe(e)),document.querySelectorAll(".reveal-wrapper").forEach(e=>b.observe(e));function E(){document.querySelectorAll(".hero-section .fade-up, .hero-section .reveal-item").forEach((e,o)=>{setTimeout(()=>{e.classList.add("visible")},o*150)})}const p=document.querySelector(".navbar");window.addEventListener("scroll",()=>{p&&(window.scrollY>50?(p.style.background="rgba(3, 3, 3, 0.85)",p.style.borderBottom="1px solid rgba(255, 255, 255, 0.08)"):(p.style.background="rgba(3, 3, 3, 0.6)",p.style.borderBottom="1px solid rgba(255, 255, 255, 0.05)"))});const A=document.getElementById("back-to-top");A&&A.addEventListener("click",e=>{e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})}),window.updateCursorHoverEvents=w});
