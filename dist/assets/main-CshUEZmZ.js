(function(){const x=document.createElement("link").relList;if(x&&x.supports&&x.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))j(r);new MutationObserver(r=>{for(const p of r)if(p.type==="childList")for(const S of p.addedNodes)S.tagName==="LINK"&&S.rel==="modulepreload"&&j(S)}).observe(document,{childList:!0,subtree:!0});function I(r){const p={};return r.integrity&&(p.integrity=r.integrity),r.referrerPolicy&&(p.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?p.credentials="include":r.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function j(r){if(r.ep)return;r.ep=!0;const p=I(r);fetch(r.href,p)}})();function ve(){if(document.getElementById("join-modal"))return;const v=document.createElement("div");v.id="join-modal",v.className="join-modal-overlay",v.innerHTML=`
        <div class="join-modal-window glass-panel">
            <button class="join-modal-close" aria-label="Close modal">&times;</button>
            
            <div class="join-modal-grid">
                <!-- Left Column: Branding / Info -->
                <div class="join-modal-sidebar">
                    <div class="sidebar-glowing-blob"></div>
                    <div class="sidebar-content">
                        <div class="sidebar-tag">JOIN THE GRID</div>
                        <h2 class="sidebar-heading">Join Our<br><span class="text-gradient-violet">Creative Team</span></h2>
                        <p class="sidebar-subheading">We’re building the future with creators, developers, designers, and innovators.</p>
                        
                        <div class="sidebar-progress-container">
                            <div class="progress-step-indicator">
                                <span id="current-step-num" class="mono-num">01</span> / <span class="mono-num">04</span>
                            </div>
                            <div class="progress-bar-track">
                                <div id="progress-bar-fill"></div>
                            </div>
                            <div class="progress-step-label">Personal Profile</div>
                        </div>
                        
                        <div class="sidebar-telemetry">
                            <div class="telemetry-row">
                                <span class="telemetry-label">SECURE ENCRYPTION</span>
                                <span class="telemetry-value text-gradient-cyan">ACTIVE (AES-256)</span>
                            </div>
                            <div class="telemetry-row">
                                <span class="telemetry-label">LOCAL DRAFT SYNC</span>
                                <span id="draft-sync-status" class="telemetry-value text-gradient-violet">ONLINE</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Right Column: Form Fields -->
                <div class="join-modal-form-container">
                    <form id="join-application-form" class="join-form" novalidate>
                        
                        <!-- STEP 1: Basic Information -->
                        <div class="form-step active" data-step="1">
                            <h3 class="step-title text-gradient-cyan">Basic Information</h3>
                            <div class="step-fields-grid">
                                <div class="form-group">
                                    <input type="text" id="join-fullname" name="fullname" required placeholder="John Doe">
                                    <label for="join-fullname">Full Name *</label>
                                    <span class="field-error"></span>
                                </div>
                                <div class="form-group">
                                    <input type="email" id="join-email" name="email" required placeholder="john@example.com">
                                    <label for="join-email">Email Address *</label>
                                    <span class="field-error"></span>
                                </div>
                                <div class="form-group">
                                    <input type="tel" id="join-phone" name="phone" required placeholder="+1 (555) 000-0000">
                                    <label for="join-phone">Phone Number *</label>
                                    <span class="field-error"></span>
                                </div>
                                <div class="form-group">
                                    <input type="date" id="join-dob" name="dob" required style="color: var(--text-secondary);">
                                    <label for="join-dob">Date of Birth *</label>
                                    <span class="field-error"></span>
                                </div>
                                <div class="form-group">
                                    <select id="join-gender" name="gender" required>
                                        <option value="" disabled selected>Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="nonbinary">Non-binary</option>
                                        <option value="other">Prefer not to say</option>
                                    </select>
                                    <label for="join-gender">Gender *</label>
                                    <span class="field-error"></span>
                                </div>
                                <div class="form-group">
                                    <input type="text" id="join-location" name="location" required placeholder="New York, USA">
                                    <label for="join-location">Current Location *</label>
                                    <span class="field-error"></span>
                                </div>
                                <div class="form-group">
                                    <input type="text" id="join-nationality" name="nationality" required placeholder="American">
                                    <label for="join-nationality">Nationality *</label>
                                    <span class="field-error"></span>
                                </div>
                            </div>
                        </div>
                        
                        <!-- STEP 2: Professional Information -->
                        <div class="form-step" data-step="2">
                            <h3 class="step-title text-gradient-cyan">Professional Information</h3>
                            <div class="step-fields-grid">
                                <div class="form-group">
                                    <select id="join-role" name="role" required>
                                        <option value="" disabled selected>Select Target Role</option>
                                        <option value="web-dev">Web Developers</option>
                                        <option value="cinematographer">Cinematographer</option>
                                        <option value="sap-dev">SAP Developers</option>
                                        <option value="3d-modeller">3D Modellers</option>
                                        <option value="video-editor">Video Editors</option>
                                        <option value="uiux-dev">UI/UX Developers</option>
                                    </select>
                                    <label for="join-role">Applying For *</label>
                                    <span class="field-error"></span>
                                </div>
                                <div class="form-group">
                                    <input type="number" id="join-experience" name="experience" min="0" max="50" required placeholder="e.g. 3">
                                    <label for="join-experience">Years of Experience *</label>
                                    <span class="field-error"></span>
                                </div>
                                <div class="form-group">
                                    <input type="text" id="join-company" name="company" placeholder="e.g. Acme Corp">
                                    <label for="join-company">Current Company</label>
                                    <span class="field-error"></span>
                                </div>
                                <div class="form-group">
                                    <input type="text" id="join-position" name="position" placeholder="e.g. Senior Designer">
                                    <label for="join-position">Current Position</label>
                                    <span class="field-error"></span>
                                </div>
                                <div class="form-group">
                                    <input type="text" id="join-expected-salary" name="expected_salary" placeholder="e.g. $80k - $100k / yr">
                                    <label for="join-expected-salary">Expected Salary</label>
                                    <span class="field-error"></span>
                                </div>
                                <div class="form-group">
                                    <input type="text" id="join-notice-period" name="notice_period" placeholder="e.g. Immediate, 30 days">
                                    <label for="join-notice-period">Notice Period</label>
                                    <span class="field-error"></span>
                                </div>
                                <div class="form-group">
                                    <input type="url" id="join-portfolio" name="portfolio_url" placeholder="https://myportfolio.com">
                                    <label for="join-portfolio">Portfolio Website</label>
                                    <span class="field-error"></span>
                                </div>
                                <div class="form-group">
                                    <input type="url" id="join-linkedin" name="linkedin_url" placeholder="https://linkedin.com/in/username">
                                    <label for="join-linkedin">LinkedIn Profile</label>
                                    <span class="field-error"></span>
                                </div>
                                <div class="form-group" id="github-field-wrapper" style="display: none;">
                                    <input type="url" id="join-github" name="github_url" placeholder="https://github.com/username">
                                    <label for="join-github">GitHub Profile *</label>
                                    <span class="field-error"></span>
                                </div>
                            </div>
                        </div>
                        
                        <!-- STEP 3: Skills & Education -->
                        <div class="form-step" data-step="3">
                            <h3 class="step-title text-gradient-cyan">Skills & Education</h3>
                            <div class="step-fields-grid" style="grid-template-columns: 1fr;">
                                <div class="form-group skills-input-container">
                                    <input type="text" id="join-skills-search" placeholder="Type a skill (e.g. React, Three.js, Figma) and press Enter">
                                    <label for="join-skills-search">Skills Tag Input *</label>
                                    <div class="skills-suggestions-dropdown" id="skills-suggestions"></div>
                                    <div class="skills-tags-display" id="skills-tags-container"></div>
                                    <input type="hidden" id="join-skills-hidden" name="skills" required>
                                    <span class="field-error"></span>
                                </div>
                            </div>
                            
                            <div class="step-fields-grid" style="margin-top: 36px;">
                                <div class="form-group">
                                    <select id="join-qualification" name="qualification" required>
                                        <option value="" disabled selected>Select Qualification</option>
                                        <option value="highschool">High School</option>
                                        <option value="bachelor">Bachelor's Degree</option>
                                        <option value="master">Master's Degree</option>
                                        <option value="phd">PhD</option>
                                        <option value="self-taught">Self-taught / Portfolio-focused</option>
                                    </select>
                                    <label for="join-qualification">Highest Qualification *</label>
                                    <span class="field-error"></span>
                                </div>
                                <div class="form-group">
                                    <input type="text" id="join-institution" name="institution" required placeholder="University of Digital Arts">
                                    <label for="join-institution">Institution Name *</label>
                                    <span class="field-error"></span>
                                </div>
                                <div class="form-group">
                                    <input type="number" id="join-gradyear" name="grad_year" min="1990" max="2032" required placeholder="2024">
                                    <label for="join-gradyear">Graduation Year *</label>
                                    <span class="field-error"></span>
                                </div>
                            </div>
                        </div>
                        
                        <!-- STEP 4: Uploads & Additional Details -->
                        <div class="form-step" data-step="4">
                            <h3 class="step-title text-gradient-cyan">Media Uploads & Mission</h3>
                            
                            <div class="uploads-grid">
                                <div class="upload-box-wrapper">
                                    <div class="upload-dropzone" id="dropzone-photo">
                                        <input type="file" id="join-photo" name="profile_photo" accept="image/*" class="file-input">
                                        <div class="dropzone-label">
                                            <span class="icon">📷</span>
                                            <span class="text">Profile Photo</span>
                                            <span class="subtext">Drag & drop or Click</span>
                                        </div>
                                        <div class="preview-area"></div>
                                    </div>
                                    <span class="field-error"></span>
                                </div>
                                
                                <div class="upload-box-wrapper">
                                    <div class="upload-dropzone" id="dropzone-resume">
                                        <input type="file" id="join-resume" name="resume" accept=".pdf,.doc,.docx" required class="file-input">
                                        <div class="dropzone-label">
                                            <span class="icon">📄</span>
                                            <span class="text">Resume * (PDF)</span>
                                            <span class="subtext">Drag & drop or Click</span>
                                        </div>
                                        <div class="preview-area"></div>
                                    </div>
                                    <span class="field-error"></span>
                                </div>

                                <div class="upload-box-wrapper">
                                    <div class="upload-dropzone" id="dropzone-portfolio">
                                        <input type="file" id="join-portfolio-file" name="portfolio_file" accept=".pdf,.zip" class="file-input">
                                        <div class="dropzone-label">
                                            <span class="icon">💼</span>
                                            <span class="text">Portfolio File</span>
                                            <span class="subtext">Drag & drop or Click</span>
                                        </div>
                                        <div class="preview-area"></div>
                                    </div>
                                    <span class="field-error"></span>
                                </div>

                                <div class="upload-box-wrapper" id="showreel-field-wrapper" style="display: none;">
                                    <div class="upload-dropzone" id="dropzone-showreel">
                                        <input type="file" id="join-showreel" name="showreel" accept="video/*" class="file-input">
                                        <div class="dropzone-label">
                                            <span class="icon">🎬</span>
                                            <span class="text">Showreel File *</span>
                                            <span class="subtext">Drag & drop or Click</span>
                                        </div>
                                        <div class="preview-area"></div>
                                    </div>
                                    <span class="field-error"></span>
                                </div>
                            </div>

                            <div class="step-fields-grid" style="grid-template-columns: 1fr; margin-top: 30px;">
                                <div class="form-group">
                                    <textarea id="join-why" name="why_join" required placeholder="Share your motivation to join our crew..."></textarea>
                                    <label for="join-why">Why do you want to join us? *</label>
                                    <span class="field-error"></span>
                                </div>
                                <div class="form-group">
                                    <textarea id="join-best-project" name="best_project" required placeholder="Describe the stack, challenges, and results..."></textarea>
                                    <label for="join-best-project">Tell us about your best project *</label>
                                    <span class="field-error"></span>
                                </div>
                            </div>

                            <div class="work-options-row">
                                <div class="work-type-options">
                                    <span class="option-label">Preferred Work Type *</span>
                                    <div class="pill-radio-group">
                                        <label class="pill-radio">
                                            <input type="radio" name="work_type" value="Full Time" checked>
                                            <span>Full Time</span>
                                        </label>
                                        <label class="pill-radio">
                                            <input type="radio" name="work_type" value="Part Time">
                                            <span>Part Time</span>
                                        </label>
                                        <label class="pill-radio">
                                            <input type="radio" name="work_type" value="Freelance">
                                            <span>Freelance</span>
                                        </label>
                                        <label class="pill-radio">
                                            <input type="radio" name="work_type" value="Internship">
                                            <span>Internship</span>
                                        </label>
                                    </div>
                                </div>
                                
                                <div class="remote-toggle-option">
                                    <span class="option-label">Available to work remotely? *</span>
                                    <label class="switch-toggle">
                                        <input type="checkbox" id="join-remote" name="remote_work" checked>
                                        <span class="slider"></span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <!-- Form Navigation Control -->
                        <div class="form-nav-controls">
                            <button type="button" id="join-btn-prev" class="btn-futuristic" style="display: none; padding: 12px 30px; font-size: 0.85rem;">
                                <span>Back</span>
                            </button>
                            <button type="button" id="join-btn-next" class="btn-futuristic btn-futuristic-cyan" style="padding: 12px 30px; font-size: 0.85rem; margin-left: auto;">
                                <span>Next Step</span>
                            </button>
                            <button type="submit" id="join-btn-submit" class="btn-futuristic btn-futuristic-cyan" style="display: none; padding: 12px 30px; font-size: 0.85rem; margin-left: auto;">
                                <span>Submit Application</span>
                            </button>
                        </div>
                    </form>
                    
                    <!-- SUCCESS SCREEN OVERLAY -->
                    <div id="join-success-screen" class="success-screen">
                        <canvas id="confetti-canvas"></canvas>
                        <div class="success-screen-content">
                            <div class="success-checkmark">
                                <svg viewBox="0 0 52 52">
                                    <circle class="checkmark-circle" cx="26" cy="26" r="25" fill="none"/>
                                    <path class="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                                </svg>
                            </div>
                            <h3 class="success-title">Application Submitted Successfully</h3>
                            <p class="success-desc">Our team will review your application. Our team will contact you soon.</p>
                            <div class="btn-magnet-wrap" style="margin-top: 40px; display: inline-block;">
                                <button type="button" id="join-success-close" class="btn-futuristic btn-futuristic-cyan">
                                    <span>Return to Studio</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,document.body.appendChild(v)}function ge(){const v=document.getElementById("navbar-container"),x=document.getElementById("footer-container");v&&(v.innerHTML=`
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
                    <div style="display: flex; align-items: center; gap: 12px;">
                        <div class="btn-magnet-wrap">
                            <a href="/contact.html" class="btn-futuristic btn-futuristic-cyan" style="padding: 12px 24px; font-size: 0.8rem; border-radius: 100px;">
                                <span>Start a Project</span>
                            </a>
                        </div>
                        <div class="btn-magnet-wrap">
                            <button id="btn-join-now" class="btn-futuristic" style="padding: 12px 24px; font-size: 0.8rem; border-radius: 100px; border-color: var(--accent-purple); color: var(--accent-purple); background: transparent;">
                                <span>JOIN NOW</span>
                            </button>
                        </div>
                    </div>
                    <div class="mobile-menu-toggle">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </header>
        `),x&&(x.innerHTML=`
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
        `),ve(),typeof window.updateCursorHoverEvents=="function"&&window.updateCursorHoverEvents()}document.addEventListener("DOMContentLoaded",()=>{ge();const v=document.getElementById("preloader"),x=document.querySelector(".preloader-count");if(v&&x){let i=0;const c=Math.abs(Math.floor(1200/100)),d=setInterval(()=>{i++,x.textContent=i<10?`0${i}`:i,i>=100&&(clearInterval(d),setTimeout(()=>{v.style.opacity="0",v.style.transform="translateY(-100%)",setTimeout(()=>{v.style.display="none",z()},1e3)},200))},c)}else z();const I=document.createElement("div"),j=document.createElement("div");I.className="custom-cursor-dot",j.className="custom-cursor-ring",document.body.appendChild(I),document.body.appendChild(j);let r=window.innerWidth/2,p=window.innerHeight/2,S=r,R=p;window.addEventListener("mousemove",i=>{r=i.clientX,p=i.clientY,I.style.left=`${r}px`,I.style.top=`${p}px`});function G(){S+=(r-S)*.15,R+=(p-R)*.15,j.style.left=`${S}px`,j.style.top=`${R}px`,requestAnimationFrame(G)}G();function A(){document.querySelectorAll('a, button, select, input, textarea, .filter-btn, .mobile-menu-toggle, .pill-radio, .switch-toggle, [role="button"]').forEach(s=>{s.removeEventListener("mouseenter",J),s.removeEventListener("mouseleave",V),s.addEventListener("mouseenter",J),s.addEventListener("mouseleave",V)})}function J(){document.body.classList.add("cursor-hover")}function V(){document.body.classList.remove("cursor-hover")}A(),window.updateCursorHoverEvents=A;const P=document.querySelector(".mobile-menu-toggle"),N=document.body;P&&P.addEventListener("click",()=>{N.classList.toggle("menu-open"),P.classList.toggle("active")}),document.querySelectorAll(".nav-links a").forEach(i=>{i.addEventListener("click",()=>{N.classList.remove("menu-open"),P&&P.classList.remove("active")})});const O=window.location.pathname;document.querySelectorAll(".nav-links a").forEach(i=>{(i.getAttribute("href")===O||O==="/"&&i.getAttribute("href")==="/index.html"||O.endsWith("/")&&i.getAttribute("href")==="/index.html")&&i.classList.add("active")}),document.querySelectorAll(".glass-panel, .expert-card, .hud-stat-card, .founder-card, .office-coordinate-card, .join-modal-window").forEach(i=>{i.addEventListener("mousemove",s=>{const c=i.getBoundingClientRect(),d=s.clientX-c.left,C=s.clientY-c.top;if(i.style.setProperty("--mouse-x",`${d/c.width*100}%`),i.style.setProperty("--mouse-y",`${C/c.height*100}%`),i.classList.contains("glass-panel")||i.classList.contains("expert-card")){const b=c.width/2,E=c.height/2,h=(E-C)/E*5,M=(d-b)/b*5;i.style.transform=`perspective(1000px) rotateX(${h}deg) rotateY(${M}deg) translateY(-5px)`}}),i.addEventListener("mouseleave",()=>{(i.classList.contains("glass-panel")||i.classList.contains("expert-card"))&&(i.style.transform="perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)")})}),document.querySelectorAll(".btn-magnet-wrap, .btn-futuristic").forEach(i=>{i.addEventListener("mousemove",s=>{const c=i.getBoundingClientRect(),d=c.left+c.width/2,C=c.top+c.height/2,b=s.clientX-d,E=s.clientY-C;i.style.transform=`translate(${b*.25}px, ${E*.25}px)`;const h=i.querySelector("span");h&&(h.style.transform=`translate(${b*.1}px, ${E*.1}px)`)}),i.addEventListener("mouseleave",()=>{i.style.transform="translate(0px, 0px)";const s=i.querySelector("span");s&&(s.style.transform="translate(0px, 0px)")})});const se={threshold:.05,rootMargin:"0px 0px -80px 0px"},H=new IntersectionObserver(i=>{i.forEach(s=>{s.isIntersecting&&(s.target.classList.add("visible"),s.target.querySelectorAll(".reveal-item").forEach((c,d)=>{setTimeout(()=>{c.classList.add("visible")},d*100)}),H.unobserve(s.target))})},se);document.querySelectorAll(".fade-up").forEach(i=>H.observe(i)),document.querySelectorAll(".reveal-wrapper").forEach(i=>H.observe(i));function z(){document.querySelectorAll(".hero-section .fade-up, .hero-section .reveal-item").forEach((i,s)=>{setTimeout(()=>{i.classList.add("visible")},s*150)})}const T=document.querySelector(".navbar");window.addEventListener("scroll",()=>{T&&(window.scrollY>50?(T.style.background="rgba(3, 3, 3, 0.85)",T.style.borderBottom="1px solid rgba(255, 255, 255, 0.08)"):(T.style.background="rgba(3, 3, 3, 0.6)",T.style.borderBottom="1px solid rgba(255, 255, 255, 0.05)"))});const Q=document.getElementById("back-to-top");Q&&Q.addEventListener("click",i=>{i.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})});function ne(){const i=document.getElementById("btn-join-now"),s=document.getElementById("join-modal");if(!i||!s)return;const c=s.querySelector(".join-modal-close"),d=document.getElementById("join-application-form"),C=s.querySelectorAll(".form-step"),b=document.getElementById("join-btn-prev"),E=document.getElementById("join-btn-next"),h=document.getElementById("join-btn-submit"),M=document.getElementById("join-success-screen"),ae=document.getElementById("join-success-close"),le=document.getElementById("current-step-num"),re=document.getElementById("progress-bar-fill"),de=s.querySelector(".progress-step-label"),w=document.getElementById("draft-sync-status");let f=1;const $=4,ce=["Personal Profile","Professional Dossier","Skills & Education","Media Uploads & Mission"],pe=["React","Vue","Angular","Svelte","Node.js","Three.js","WebGL","GSAP","Framer Motion","Vite","TypeScript","SAP ABAP","SAP HANA","SAP Fiori","SAP UI5","SAP Consultant","Figma","Adobe XD","Sketch","UI/UX Design","Wireframing","Prototyping","Design System","Cinema 4D","Blender","Maya","3ds Max","ZBrush","3D Modelling","Texturing","Rendering","DaVinci Resolve","Adobe Premiere Pro","After Effects","Final Cut Pro","Video Editing","Color Grading","Cinematography","Camera Operation","Lighting Design","VFX","Generative AI","Midjourney","Stable Diffusion","Python","JavaScript","HTML5","CSS3","SASS","PostgreSQL","MongoDB","Tailwind CSS","Git"];let g=[];i.addEventListener("click",()=>{s.classList.add("active"),N.classList.add("menu-open"),ue(),F()});const Y=()=>{s.classList.remove("active"),N.classList.remove("menu-open"),M.classList.contains("active")&&oe()};c.addEventListener("click",Y),s.addEventListener("click",e=>{e.target===s&&Y()});function F(){C.forEach(t=>{parseInt(t.getAttribute("data-step"))===f?t.classList.add("active"):t.classList.remove("active")}),f===1?(b.style.display="none",E.style.display="block",h.style.display="none"):f===$?(b.style.display="block",E.style.display="none",h.style.display="block"):(b.style.display="block",E.style.display="block",h.style.display="none"),le.textContent=`0${f}`;const e=f/$*100;re.style.width=`${e}%`,de.textContent=ce[f-1],A()}E.addEventListener("click",()=>{K(f)&&f<$&&(f++,F(),_())}),b.addEventListener("click",()=>{f>1&&(f--,F())});function K(e){let t=!0;const o=s.querySelector(`.form-step[data-step="${e}"]`);return o?(o.querySelectorAll("input[required], select[required], textarea[required]").forEach(l=>{let u=l.closest(".form-group");if(u&&u.style.display==="none")return;let y=l.closest("#showreel-field-wrapper");if(y&&y.style.display==="none")return;const n=l.value.trim();let m=!0,B="This field is required.";if(!n)m=!1;else if(l.type==="email")/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n)||(m=!1,B="Please enter a valid email address.");else if(l.type==="url")try{new URL(n)}catch{m=!1,B="Please enter a valid URL (e.g. https://github.com)."}if(m)u&&u.classList.remove("field-invalid");else if(t=!1,u){u.classList.add("field-invalid");const q=u.querySelector(".field-error");q&&(q.textContent=B)}}),t):!0}d.addEventListener("input",e=>{const t=e.target.closest(".form-group");t&&t.classList.contains("field-invalid")&&t.classList.remove("field-invalid"),_()}),d.addEventListener("change",e=>{const t=e.target.closest(".form-group");t&&t.classList.contains("field-invalid")&&t.classList.remove("field-invalid"),_()});function _(){const e={};d.querySelectorAll("input, select, textarea").forEach(l=>{l.type==="file"||l.type==="radio"||(e[l.name]=l.value)});const o=d.querySelector('input[name="work_type"]:checked');o&&(e.work_type=o.value);const a=document.getElementById("join-remote");a&&(e.remote_work=a.checked),e.skills=g,e.step=f,localStorage.setItem("april_grid_draft",JSON.stringify(e)),w&&(w.textContent="SAVED",w.classList.remove("text-gradient-violet"),w.classList.add("text-gradient-cyan"),setTimeout(()=>{w&&(w.textContent="ONLINE",w.classList.remove("text-gradient-cyan"),w.classList.add("text-gradient-violet"))},1e3))}function ue(){const e=localStorage.getItem("april_grid_draft");if(e)try{const t=JSON.parse(e);if(Object.keys(t).forEach(o=>{const a=d.querySelector(`[name="${o}"]`);a&&a.type!=="file"&&(a.value=t[o])}),t.work_type){const o=d.querySelector(`input[name="work_type"][value="${t.work_type}"]`);o&&(o.checked=!0)}if(t.remote_work!==void 0){const o=document.getElementById("join-remote");o&&(o.checked=t.remote_work)}t.skills&&Array.isArray(t.skills)&&(g=t.skills,X()),t.step&&(f=t.step),Z()}catch(t){console.error("Error prefilling application draft:",t)}}const U=document.getElementById("join-role");U&&U.addEventListener("change",Z);function Z(){const e=U.value,t=document.getElementById("github-field-wrapper"),o=document.getElementById("showreel-field-wrapper"),a=document.getElementById("join-github"),l=document.getElementById("join-showreel");e==="web-dev"||e==="uiux-dev"?(t.style.display="block",a&&a.setAttribute("required","required")):(t.style.display="none",a&&a.removeAttribute("required")),e==="cinematographer"||e==="video-editor"?(o.style.display="block",l&&l.setAttribute("required","required")):(o.style.display="none",l&&l.removeAttribute("required")),A()}const L=document.getElementById("join-skills-search"),k=document.getElementById("skills-suggestions"),D=document.getElementById("skills-tags-container"),W=document.getElementById("join-skills-hidden");L&&k&&(L.addEventListener("input",()=>{const e=L.value.toLowerCase().trim();if(k.innerHTML="",!e){k.style.display="none";return}const t=pe.filter(o=>o.toLowerCase().includes(e)&&!g.includes(o));t.length>0?(t.forEach(o=>{const a=document.createElement("div");a.textContent=o,a.addEventListener("click",()=>{ee(o)}),k.appendChild(a)}),k.style.display="block"):k.style.display="none"}),L.addEventListener("keydown",e=>{if(e.key==="Enter"){e.preventDefault();const t=L.value.trim();t&&!g.includes(t)&&ee(t)}}),document.addEventListener("click",e=>{e.target!==L&&(k.style.display="none")}));function ee(e){g.includes(e)||(g.push(e),L.value="",k.style.display="none",X(),_())}function me(e){g=g.filter(t=>t!==e),X(),_()}function X(){if(D){if(D.innerHTML="",g.forEach(e=>{const t=document.createElement("div");t.className="skill-tag",t.innerHTML=`${e} <span>&times;</span>`,t.querySelector("span").addEventListener("click",()=>me(e)),D.appendChild(t)}),W){W.value=g.join(",");const e=W.closest(".form-group");e&&g.length>0&&e.classList.remove("field-invalid")}A()}}const te=s.querySelectorAll(".upload-dropzone");te.forEach(e=>{const t=e.querySelector(".file-input"),o=e.querySelector(".preview-area");!t||!o||(["dragenter","dragover"].forEach(a=>{e.addEventListener(a,l=>{l.preventDefault(),e.classList.add("dragover")},!1)}),["dragleave","drop"].forEach(a=>{e.addEventListener(a,l=>{l.preventDefault(),e.classList.remove("dragover")},!1)}),e.addEventListener("drop",a=>{const u=a.dataTransfer.files;u.length>0&&(t.files=u,ie(e,t,o))},!1),t.addEventListener("change",()=>{ie(e,t,o)}))});function ie(e,t,o){const a=t.files;if(a.length===0)return;const l=a[0];e.classList.add("has-file");const u=e.closest(".upload-box-wrapper");u&&u.classList.remove("field-invalid"),o.innerHTML="";const y=document.createElement("div");if(y.className="preview-file-info",y.textContent=l.name,o.appendChild(y),l.type.startsWith("image/")){const m=document.createElement("img");m.style.width="50px",m.style.height="50px",m.style.objectFit="cover",m.style.borderRadius="50%",m.style.marginBottom="6px";const B=new FileReader;B.onload=q=>{m.src=q.target.result},B.readAsDataURL(l),o.insertBefore(m,y)}const n=document.createElement("button");n.type="button",n.className="preview-remove-btn",n.textContent="Remove",n.addEventListener("click",m=>{m.stopPropagation(),t.value="",e.classList.remove("has-file"),o.innerHTML=""}),o.appendChild(n),A()}d.addEventListener("submit",e=>{e.preventDefault(),K(f)&&(h.classList.add("loading"),h.setAttribute("disabled","disabled"),setTimeout(()=>{const t={fullname:document.getElementById("join-fullname").value,email:document.getElementById("join-email").value,phone:document.getElementById("join-phone").value,dob:document.getElementById("join-dob").value,gender:document.getElementById("join-gender").value,location:document.getElementById("join-location").value,nationality:document.getElementById("join-nationality").value,role:document.getElementById("join-role").value,experience:document.getElementById("join-experience").value,company:document.getElementById("join-company").value,position:document.getElementById("join-position").value,expected_salary:document.getElementById("join-expected-salary").value,notice_period:document.getElementById("join-notice-period").value,portfolio_url:document.getElementById("join-portfolio").value,linkedin_url:document.getElementById("join-linkedin").value,github_url:document.getElementById("join-github")?document.getElementById("join-github").value:"",skills:g,qualification:document.getElementById("join-qualification").value,institution:document.getElementById("join-institution").value,grad_year:document.getElementById("join-gradyear").value,why_join:document.getElementById("join-why").value,best_project:document.getElementById("join-best-project").value,work_type:d.querySelector('input[name="work_type"]:checked').value,remote_work:document.getElementById("join-remote").checked,submitted_at:new Date().toISOString()};let o=[];const a=localStorage.getItem("april_grid_applications");if(a)try{o=JSON.parse(a)}catch{}o.push(t),localStorage.setItem("april_grid_applications",JSON.stringify(o)),localStorage.removeItem("april_grid_draft"),M.classList.add("active"),fe(),h.classList.remove("loading"),h.removeAttribute("disabled")},1500))});const oe=()=>{d.reset(),g=[],f=1,te.forEach(e=>{e.classList.remove("has-file");const t=e.querySelector(".preview-area");t&&(t.innerHTML="");const o=e.querySelector(".file-input");o&&(o.value="")}),D&&(D.innerHTML=""),M.classList.remove("active"),F()};ae.addEventListener("click",()=>{oe(),Y()});function fe(){const e=document.getElementById("confetti-canvas");if(!e)return;const t=e.getContext("2d");e.width=e.parentElement.clientWidth,e.height=e.parentElement.clientHeight;let o=[];const a=["#8b5cf6","#d946ef","#06b6d4","#3b82f6","#ffffff"];for(let y=0;y<100;y++)o.push({x:Math.random()*e.width,y:Math.random()*e.height-e.height,r:Math.random()*6+4,d:Math.random()*e.height,color:a[Math.floor(Math.random()*a.length)],tilt:Math.random()*10-5,tiltAngleIncremental:Math.random()*.07+.02,tiltAngle:0,speed:Math.random()*3+2});let l=!0;setTimeout(()=>l=!1,6e3);function u(){t.clearRect(0,0,e.width,e.height);let y=!1;o.forEach((n,m)=>{n.tiltAngle+=n.tiltAngleIncremental,n.y+=n.speed,n.x+=Math.sin(n.tiltAngle)*.5,n.tilt=Math.sin(n.tiltAngle-m/3)*15,n.y<e.height&&(y=!0),t.beginPath(),t.lineWidth=n.r,t.strokeStyle=n.color,t.moveTo(n.x+n.tilt+n.r/2,n.y),t.lineTo(n.x+n.tilt,n.y+n.tilt+n.r/2),t.stroke()}),y&&(l||o.some(n=>n.y<e.height))?requestAnimationFrame(u):t.clearRect(0,0,e.width,e.height)}u()}}ne()});
