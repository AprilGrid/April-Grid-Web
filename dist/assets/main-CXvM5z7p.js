(function(){const w=document.createElement("link").relList;if(w&&w.supports&&w.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))q(d);new MutationObserver(d=>{for(const m of d)if(m.type==="childList")for(const C of m.addedNodes)C.tagName==="LINK"&&C.rel==="modulepreload"&&q(C)}).observe(document,{childList:!0,subtree:!0});function T(d){const m={};return d.integrity&&(m.integrity=d.integrity),d.referrerPolicy&&(m.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?m.credentials="include":d.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function q(d){if(d.ep)return;d.ep=!0;const m=T(d);fetch(d.href,m)}})();function we(){if(document.getElementById("join-modal"))return;const u=document.createElement("div");u.id="join-modal",u.className="join-modal-overlay",u.setAttribute("role","dialog"),u.setAttribute("aria-modal","true"),u.setAttribute("aria-labelledby","modal-title"),u.innerHTML=`
        <div class="join-modal-window glass-panel">
            <button class="join-modal-close" aria-label="Close application modal">&times;</button>
            
            <div class="join-modal-grid">
                <!-- Left Column: Branding / Info (Sticky Progress on Mobile) -->
                <div class="join-modal-sidebar">
                    <div class="sidebar-glowing-blob"></div>
                    <div class="sidebar-content">
                        <div>
                            <div class="sidebar-tag">JOIN THE GRID</div>
                            <h2 id="modal-title" class="sidebar-heading">Join Our<br><span class="text-gradient-violet">Creative Team</span></h2>
                            <p class="sidebar-subheading">We’re building the future with creators, developers, designers, and innovators.</p>
                        </div>
                        
                        <div class="sidebar-progress-container">
                            <div class="progress-step-indicator" aria-live="polite">
                                <span id="current-step-num" class="mono-num">01</span> / <span class="mono-num">04</span>
                            </div>
                            <div class="progress-bar-track" aria-hidden="true">
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
                        <div class="form-step active" data-step="1" role="tabpanel" aria-label="Personal Profile Step">
                            <h3 class="step-title text-gradient-cyan">Basic Information</h3>
                            <div class="step-fields-grid">
                                <div class="form-group">
                                    <input type="text" id="join-fullname" name="fullname" required placeholder="John Doe" aria-required="true">
                                    <label for="join-fullname">Full Name</label>
                                    <span class="field-error" aria-live="assertive"></span>
                                </div>
                                <div class="form-group">
                                    <input type="email" id="join-email" name="email" required placeholder="john@example.com" aria-required="true">
                                    <label for="join-email">Email Address</label>
                                    <span class="field-error" aria-live="assertive"></span>
                                </div>
                                <div class="form-group">
                                    <input type="tel" id="join-phone" name="phone" required placeholder="+1 (555) 000-0000" aria-required="true">
                                    <label for="join-phone">Phone Number</label>
                                    <span class="field-error" aria-live="assertive"></span>
                                </div>
                                <div class="form-group">
                                    <input type="date" id="join-dob" name="dob" required style="color: var(--text-secondary);" aria-required="true">
                                    <label for="join-dob">Date of Birth</label>
                                    <span class="field-error" aria-live="assertive"></span>
                                </div>
                                <div class="form-group">
                                    <select id="join-gender" name="gender" required aria-required="true">
                                        <option value="" disabled selected>Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="nonbinary">Non-binary</option>
                                        <option value="other">Prefer not to say</option>
                                    </select>
                                    <label for="join-gender">Gender</label>
                                    <span class="field-error" aria-live="assertive"></span>
                                </div>
                                <div class="form-group">
                                    <input type="text" id="join-location" name="location" required placeholder="New York, USA" aria-required="true">
                                    <label for="join-location">Current Location</label>
                                    <span class="field-error" aria-live="assertive"></span>
                                </div>
                                <div class="form-group">
                                    <input type="text" id="join-nationality" name="nationality" required placeholder="American" aria-required="true">
                                    <label for="join-nationality">Nationality</label>
                                    <span class="field-error" aria-live="assertive"></span>
                                </div>
                            </div>
                        </div>
                        
                        <!-- STEP 2: Professional Information -->
                        <div class="form-step" data-step="2" role="tabpanel" aria-label="Professional Dossier Step" style="display:none;">
                            <h3 class="step-title text-gradient-cyan">Professional Information</h3>
                            <div class="step-fields-grid">
                                <div class="form-group">
                                    <select id="join-role" name="role" required aria-required="true">
                                        <option value="" disabled selected>Select Target Role</option>
                                        <option value="web-dev">Web Developers</option>
                                        <option value="cinematographer">Cinematographer</option>
                                        <option value="sap-dev">SAP Developers</option>
                                        <option value="3d-modeller">3D Modellers</option>
                                        <option value="video-editor">Video Editors</option>
                                        <option value="uiux-dev">UI/UX Developers</option>
                                    </select>
                                    <label for="join-role">Applying For</label>
                                    <span class="field-error" aria-live="assertive"></span>
                                </div>
                                <div class="form-group">
                                    <input type="number" id="join-experience" name="experience" min="0" max="50" required placeholder="e.g. 3" aria-required="true">
                                    <label for="join-experience">Years of Experience</label>
                                    <span class="field-error" aria-live="assertive"></span>
                                </div>
                                <div class="form-group">
                                    <input type="text" id="join-company" name="company" placeholder="e.g. Acme Corp">
                                    <label for="join-company">Current Company</label>
                                    <span class="field-error" aria-live="assertive"></span>
                                </div>
                                <div class="form-group">
                                    <input type="text" id="join-position" name="position" placeholder="e.g. Senior Designer">
                                    <label for="join-position">Current Position</label>
                                    <span class="field-error" aria-live="assertive"></span>
                                </div>
                                <div class="form-group">
                                    <input type="text" id="join-expected-salary" name="expected_salary" placeholder="e.g. $80k - $100k / yr">
                                    <label for="join-expected-salary">Expected Salary</label>
                                    <span class="field-error" aria-live="assertive"></span>
                                </div>
                                <div class="form-group">
                                    <input type="text" id="join-notice-period" name="notice_period" placeholder="e.g. Immediate, 30 days">
                                    <label for="join-notice-period">Notice Period</label>
                                    <span class="field-error" aria-live="assertive"></span>
                                </div>
                                <div class="form-group">
                                    <input type="url" id="join-portfolio" name="portfolio_url" placeholder="https://myportfolio.com">
                                    <label for="join-portfolio">Portfolio Website</label>
                                    <span class="field-error" aria-live="assertive"></span>
                                </div>
                                <div class="form-group">
                                    <input type="url" id="join-linkedin" name="linkedin_url" placeholder="https://linkedin.com/in/username">
                                    <label for="join-linkedin">LinkedIn Profile</label>
                                    <span class="field-error" aria-live="assertive"></span>
                                </div>
                                <div class="form-group" id="github-field-wrapper" style="display: none;">
                                    <input type="url" id="join-github" name="github_url" placeholder="https://github.com/username">
                                    <label for="join-github">GitHub Profile</label>
                                    <span class="field-error" aria-live="assertive"></span>
                                </div>
                            </div>
                        </div>
                        
                        <!-- STEP 3: Skills & Education -->
                        <div class="form-step" data-step="3" role="tabpanel" aria-label="Skills and Education Step" style="display:none;">
                            <h3 class="step-title text-gradient-cyan">Skills & Education</h3>
                            <div class="step-fields-grid" style="grid-template-columns: 1fr;">
                                <div class="form-group skills-input-container">
                                    <input type="text" id="join-skills-search" placeholder="Type a skill (e.g. React, Figma) and press Enter or Select">
                                    <label for="join-skills-search">Skills Tag Input</label>
                                    <div class="skills-suggestions-dropdown" id="skills-suggestions" role="listbox" aria-label="Skills suggestions"></div>
                                    <div class="skills-tags-display" id="skills-tags-container"></div>
                                    <input type="hidden" id="join-skills-hidden" name="skills" required aria-required="true">
                                    <span class="field-error" aria-live="assertive"></span>
                                </div>
                            </div>
                            
                            <div class="step-fields-grid" style="margin-top: 36px;">
                                <div class="form-group">
                                    <select id="join-qualification" name="qualification" required aria-required="true">
                                        <option value="" disabled selected>Select Qualification</option>
                                        <option value="highschool">High School</option>
                                        <option value="bachelor">Bachelor's Degree</option>
                                        <option value="master">Master's Degree</option>
                                        <option value="phd">PhD</option>
                                        <option value="self-taught">Self-taught / Portfolio-focused</option>
                                    </select>
                                    <label for="join-qualification">Highest Qualification</label>
                                    <span class="field-error" aria-live="assertive"></span>
                                </div>
                                <div class="form-group">
                                    <input type="text" id="join-institution" name="institution" required placeholder="University of Digital Arts" aria-required="true">
                                    <label for="join-institution">Institution Name</label>
                                    <span class="field-error" aria-live="assertive"></span>
                                </div>
                                <div class="form-group">
                                    <input type="number" id="join-gradyear" name="grad_year" min="1990" max="2032" required placeholder="2024" aria-required="true">
                                    <label for="join-gradyear">Graduation Year</label>
                                    <span class="field-error" aria-live="assertive"></span>
                                </div>
                            </div>
                        </div>
                        
                        <!-- STEP 4: Uploads & Additional Details -->
                        <div class="form-step" data-step="4" role="tabpanel" aria-label="Uploads and Mission Step" style="display:none;">
                            <h3 class="step-title text-gradient-cyan">Media Uploads & Mission</h3>
                            
                            <div class="uploads-grid">
                                <div class="upload-box-wrapper">
                                    <div class="upload-dropzone" id="dropzone-photo" role="button" aria-label="Upload profile photo" tabindex="0">
                                        <input type="file" id="join-photo" name="profile_photo" accept="image/*" class="file-input" tabindex="-1">
                                        <div class="dropzone-label">
                                            <span class="icon" aria-hidden="true">📷</span>
                                            <span class="text">Profile Photo</span>
                                            <span class="subtext">Drag & drop or Click</span>
                                        </div>
                                        <div class="preview-area"></div>
                                    </div>
                                    <span class="field-error" aria-live="assertive"></span>
                                </div>
                                
                                <div class="upload-box-wrapper">
                                    <div class="upload-dropzone" id="dropzone-resume" role="button" aria-label="Upload resume PDF" tabindex="0">
                                        <input type="file" id="join-resume" name="resume" accept=".pdf,.doc,.docx" required class="file-input" tabindex="-1" aria-required="true">
                                        <div class="dropzone-label">
                                            <span class="icon" aria-hidden="true">📄</span>
                                            <span class="text">Resume (PDF)</span>
                                            <span class="subtext">Drag & drop or Click</span>
                                        </div>
                                        <div class="preview-area"></div>
                                    </div>
                                    <span class="field-error" aria-live="assertive"></span>
                                </div>

                                <div class="upload-box-wrapper">
                                    <div class="upload-dropzone" id="dropzone-portfolio" role="button" aria-label="Upload portfolio attachment" tabindex="0">
                                        <input type="file" id="join-portfolio-file" name="portfolio_file" accept=".pdf,.zip" class="file-input" tabindex="-1">
                                        <div class="dropzone-label">
                                            <span class="icon" aria-hidden="true">💼</span>
                                            <span class="text">Portfolio File</span>
                                            <span class="subtext">Drag & drop or Click</span>
                                        </div>
                                        <div class="preview-area"></div>
                                    </div>
                                    <span class="field-error" aria-live="assertive"></span>
                                </div>

                                <div class="upload-box-wrapper" id="showreel-field-wrapper" style="display: none;">
                                    <div class="upload-dropzone" id="dropzone-showreel" role="button" aria-label="Upload showreel video" tabindex="0">
                                        <input type="file" id="join-showreel" name="showreel" accept="video/*" class="file-input" tabindex="-1">
                                        <div class="dropzone-label">
                                            <span class="icon" aria-hidden="true">🎬</span>
                                            <span class="text">Showreel File</span>
                                            <span class="subtext">Drag & drop or Click</span>
                                        </div>
                                        <div class="preview-area"></div>
                                    </div>
                                    <span class="field-error" aria-live="assertive"></span>
                                </div>
                            </div>
                            
                            <!-- Total Size Warning Container -->
                            <div id="upload-limit-error" class="field-error" style="position: static; display: none; margin-top: 15px; font-weight: bold; text-align: center;" aria-live="assertive"></div>

                            <div class="step-fields-grid" style="grid-template-columns: 1fr; margin-top: 30px;">
                                <div class="form-group">
                                    <textarea id="join-why" name="why_join" required placeholder="Share your motivation to join our crew..." aria-required="true"></textarea>
                                    <label for="join-why">Why do you want to join us?</label>
                                    <span class="field-error" aria-live="assertive"></span>
                                </div>
                                <div class="form-group">
                                    <textarea id="join-best-project" name="best_project" required placeholder="Describe the stack, challenges, and results..." aria-required="true"></textarea>
                                    <label for="join-best-project">Tell us about your best project</label>
                                    <span class="field-error" aria-live="assertive"></span>
                                </div>
                            </div>

                            <div class="work-options-row">
                                <div class="work-type-options">
                                    <span class="option-label">Preferred Work Type</span>
                                    <div class="pill-radio-group" role="radiogroup" aria-label="Work Type Preference">
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
                                    <span class="option-label">Available to work remotely?</span>
                                    <label class="switch-toggle" aria-label="Remote work available toggle">
                                        <input type="checkbox" id="join-remote" name="remote_work" checked>
                                        <span class="slider"></span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <!-- Form Navigation Control -->
                        <div class="form-nav-controls">
                            <button type="button" id="join-btn-prev" class="btn-futuristic" style="display: none; padding: 12px 30px; font-size: 0.85rem;" aria-label="Go back to previous step">
                                <span>Back</span>
                            </button>
                            <button type="button" id="join-btn-next" class="btn-futuristic btn-futuristic-cyan" style="padding: 12px 30px; font-size: 0.85rem; margin-left: auto;" aria-label="Continue to next step">
                                <span>Next Step</span>
                            </button>
                            <button type="submit" id="join-btn-submit" class="btn-futuristic btn-futuristic-cyan" style="display: none; padding: 12px 30px; font-size: 0.85rem; margin-left: auto;" aria-label="Submit entire application">
                                <span>Submit Application</span>
                            </button>
                        </div>
                        
                        <!-- Form-wide API Error Container -->
                        <div id="form-submit-error" class="field-error" style="position: static; display: none; margin-top: 20px; text-align: center; font-size: 0.95rem; border: 1px solid rgba(217, 70, 239, 0.3); padding: 12px; background: rgba(217, 70, 239, 0.05); border-radius: 4px;" aria-live="assertive"></div>
                    </form>
                    
                    <!-- SUCCESS SCREEN OVERLAY -->
                    <div id="join-success-screen" class="success-screen" role="tabpanel" aria-label="Submission success screen">
                        <canvas id="confetti-canvas"></canvas>
                        <div class="success-screen-content">
                            <div class="success-checkmark">
                                <svg viewBox="0 0 52 52" aria-hidden="true">
                                    <circle class="checkmark-circle" cx="26" cy="26" r="25" fill="none"/>
                                    <path class="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                                </svg>
                            </div>
                            <h3 class="success-title">Application Submitted Successfully</h3>
                            <p class="success-desc">Our team will review your application. Our team will contact you soon.</p>
                            <div class="btn-magnet-wrap" style="margin-top: 40px; display: inline-block;">
                                <button type="button" id="join-success-close" class="btn-futuristic btn-futuristic-cyan" aria-label="Close dialog and return to site">
                                    <span>Return to Studio</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,document.body.appendChild(u)}function ke(){const u=document.getElementById("navbar-container"),w=document.getElementById("footer-container");u&&(u.innerHTML=`
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
                    <div class="mobile-menu-toggle" role="button" aria-expanded="false" aria-label="Toggle mobile menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </header>
        `),w&&(w.innerHTML=`
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
        `),we(),typeof window.updateCursorHoverEvents=="function"&&window.updateCursorHoverEvents()}document.addEventListener("DOMContentLoaded",()=>{ke();const u=document.getElementById("preloader"),w=document.querySelector(".preloader-count");if(u&&w){let o=0;const c=Math.abs(Math.floor(1200/100)),p=setInterval(()=>{o++,w.textContent=o<10?`0${o}`:o,o>=100&&(clearInterval(p),setTimeout(()=>{u.style.opacity="0",u.style.transform="translateY(-100%)",setTimeout(()=>{u.style.display="none",ie()},1e3)},200))},c)}else ie();const T=document.createElement("div"),q=document.createElement("div");T.className="custom-cursor-dot",q.className="custom-cursor-ring",document.body.appendChild(T),document.body.appendChild(q);let d=window.innerWidth/2,m=window.innerHeight/2,C=d,X=m;window.addEventListener("mousemove",o=>{d=o.clientX,m=o.clientY,T.style.left=`${d}px`,T.style.top=`${m}px`});function Z(){C+=(d-C)*.15,X+=(m-X)*.15,q.style.left=`${C}px`,q.style.top=`${X}px`,requestAnimationFrame(Z)}Z();function M(){document.querySelectorAll('a, button, select, input, textarea, .filter-btn, .mobile-menu-toggle, .pill-radio, .switch-toggle, .upload-dropzone, [role="button"]').forEach(s=>{s.removeEventListener("mouseenter",ee),s.removeEventListener("mouseleave",te),s.addEventListener("mouseenter",ee),s.addEventListener("mouseleave",te)})}function ee(){document.body.classList.add("cursor-hover")}function te(){document.body.classList.remove("cursor-hover")}M(),window.updateCursorHoverEvents=M;const L=document.querySelector(".mobile-menu-toggle"),H=document.body;L&&L.addEventListener("click",()=>{const o=L.getAttribute("aria-expanded")==="true"||!1;L.setAttribute("aria-expanded",!o),H.classList.toggle("menu-open"),L.classList.toggle("active")}),document.querySelectorAll(".nav-links a").forEach(o=>{o.addEventListener("click",()=>{H.classList.remove("menu-open"),L&&(L.classList.remove("active"),L.setAttribute("aria-expanded","false"))})});const V=window.location.pathname;document.querySelectorAll(".nav-links a").forEach(o=>{(o.getAttribute("href")===V||V==="/"&&o.getAttribute("href")==="/index.html"||V.endsWith("/")&&o.getAttribute("href")==="/index.html")&&o.classList.add("active")}),document.querySelectorAll(".glass-panel, .expert-card, .hud-stat-card, .founder-card, .office-coordinate-card, .join-modal-window").forEach(o=>{o.addEventListener("mousemove",s=>{const c=o.getBoundingClientRect(),p=s.clientX-c.left,D=s.clientY-c.top;if(o.style.setProperty("--mouse-x",`${p/c.width*100}%`),o.style.setProperty("--mouse-y",`${D/c.height*100}%`),o.classList.contains("glass-panel")||o.classList.contains("expert-card")){const b=c.width/2,E=c.height/2,h=(E-D)/E*5,R=(p-b)/b*5;o.style.transform=`perspective(1000px) rotateX(${h}deg) rotateY(${R}deg) translateY(-5px)`}}),o.addEventListener("mouseleave",()=>{(o.classList.contains("glass-panel")||o.classList.contains("expert-card"))&&(o.style.transform="perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)")})}),document.querySelectorAll(".btn-magnet-wrap, .btn-futuristic").forEach(o=>{o.addEventListener("mousemove",s=>{const c=o.getBoundingClientRect(),p=c.left+c.width/2,D=c.top+c.height/2,b=s.clientX-p,E=s.clientY-D;o.style.transform=`translate(${b*.25}px, ${E*.25}px)`;const h=o.querySelector("span");h&&(h.style.transform=`translate(${b*.1}px, ${E*.1}px)`)}),o.addEventListener("mouseleave",()=>{o.style.transform="translate(0px, 0px)";const s=o.querySelector("span");s&&(s.style.transform="translate(0px, 0px)")})});const ce={threshold:.05,rootMargin:"0px 0px -80px 0px"},J=new IntersectionObserver(o=>{o.forEach(s=>{s.isIntersecting&&(s.target.classList.add("visible"),s.target.querySelectorAll(".reveal-item").forEach((c,p)=>{setTimeout(()=>{c.classList.add("visible")},p*100)}),J.unobserve(s.target))})},ce);document.querySelectorAll(".fade-up").forEach(o=>J.observe(o)),document.querySelectorAll(".reveal-wrapper").forEach(o=>J.observe(o));function ie(){document.querySelectorAll(".hero-section .fade-up, .hero-section .reveal-item").forEach((o,s)=>{setTimeout(()=>{o.classList.add("visible")},s*150)})}const F=document.querySelector(".navbar");window.addEventListener("scroll",()=>{F&&(window.scrollY>50?(F.style.background="rgba(3, 3, 3, 0.85)",F.style.borderBottom="1px solid rgba(255, 255, 255, 0.08)"):(F.style.background="rgba(3, 3, 3, 0.6)",F.style.borderBottom="1px solid rgba(255, 255, 255, 0.05)"))});const ae=document.getElementById("back-to-top");ae&&ae.addEventListener("click",o=>{o.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})});function pe(){const o=document.getElementById("btn-join-now"),s=document.getElementById("join-modal");if(!o||!s)return;const c=s.querySelector(".join-modal-close"),p=document.getElementById("join-application-form"),D=s.querySelectorAll(".form-step"),b=document.getElementById("join-btn-prev"),E=document.getElementById("join-btn-next"),h=document.getElementById("join-btn-submit"),R=document.getElementById("join-success-screen"),ue=document.getElementById("join-success-close"),me=document.getElementById("current-step-num"),fe=document.getElementById("progress-bar-fill"),ve=s.querySelector(".progress-step-label"),j=document.getElementById("draft-sync-status"),k=document.getElementById("form-submit-error"),B=document.getElementById("upload-limit-error");let v=1;const U=4;let N=!1;const ge=["Personal Profile","Professional Dossier","Skills & Education","Media Uploads & Mission"],ye=["React","Vue","Angular","Svelte","Node.js","Three.js","WebGL","GSAP","Framer Motion","Vite","TypeScript","SAP ABAP","SAP HANA","SAP Fiori","SAP UI5","SAP Consultant","Figma","Adobe XD","Sketch","UI/UX Design","Wireframing","Prototyping","Design System","Cinema 4D","Blender","Maya","3ds Max","ZBrush","3D Modelling","Texturing","Rendering","DaVinci Resolve","Adobe Premiere Pro","After Effects","Final Cut Pro","Video Editing","Color Grading","Cinematography","Camera Operation","Lighting Design","VFX","Generative AI","Midjourney","Stable Diffusion","Python","JavaScript","HTML5","CSS3","SASS","PostgreSQL","MongoDB","Tailwind CSS","Git"];let y=[],S={profile_photo_file:null,resume_file:null,portfolio_attachment_file:null,showreel_file:null};o.addEventListener("click",()=>{s.classList.add("active"),H.classList.add("menu-open"),he(),Y()});const W=()=>{N||(s.classList.remove("active"),H.classList.remove("menu-open"),R.classList.contains("active")&&de())};c.addEventListener("click",W),s.addEventListener("click",e=>{e.target===s&&W()}),window.addEventListener("keydown",e=>{e.key==="Escape"&&s.classList.contains("active")&&W()}),p.addEventListener("keydown",e=>{if(e.key==="Enter"&&e.target.tagName!=="TEXTAREA")if(e.preventDefault(),e.target.id==="join-skills-search"){const t=e.target.value.trim();t&&!y.includes(t)&&se(t)}else v<U&&E.click()});function Y(){D.forEach(a=>{if(parseInt(a.getAttribute("data-step"))===v){a.style.display="flex",a.classList.add("active");const l=a.querySelectorAll('input, select, textarea, [tabindex="0"]');l.length>0&&l[0].focus()}else a.style.display="none",a.classList.remove("active")}),v===1?(b.style.display="none",E.style.display="block",h.style.display="none"):v===U?(b.style.display="block",E.style.display="none",h.style.display="block"):(b.style.display="block",E.style.display="block",h.style.display="none"),me.textContent=`0${v}`;const e=v/U*100;fe.style.width=`${e}%`,ve.textContent=ge[v-1];const t=s.querySelector(".join-modal-form-container");t&&(t.scrollTop=0);const i=s.querySelector(".join-modal-window");i&&(i.scrollTop=0),M()}E.addEventListener("click",()=>{oe(v)&&v<U&&(v++,Y(),P())}),b.addEventListener("click",()=>{v>1&&(v--,Y())});function oe(e){let t=!0;const i=s.querySelector(`.form-step[data-step="${e}"]`);if(!i)return!0;if(i.querySelectorAll("input[required], select[required], textarea[required]").forEach(r=>{let l=r.closest(".form-group");if(l&&l.style.display==="none")return;let f=r.closest("#showreel-field-wrapper");if(f&&f.style.display==="none")return;let n=r.closest(".upload-box-wrapper");const x=r.value.trim();let A=!0,_="This field is required.";if(!x)A=!1;else if(r.type==="email")/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(x)||(A=!1,_="Please enter a valid email address.");else if(r.type==="url")try{new URL(x)}catch{A=!1,_="Please enter a valid URL."}if(A)l?l.classList.remove("field-invalid"):n&&n.classList.remove("field-invalid");else if(t=!1,l){l.classList.add("field-invalid");const g=l.querySelector(".field-error");g&&(g.textContent=_)}else if(n){n.classList.add("field-invalid");const g=n.querySelector(".field-error");g&&(g.textContent=_)}}),e===3&&y.length===0){t=!1;const r=G.closest(".form-group");if(r){r.classList.add("field-invalid");const l=r.querySelector(".field-error");l&&(l.textContent="Please add at least one core skill.")}}return e===4&&!z()&&(t=!1),t}p.querySelectorAll("input, select, textarea").forEach(e=>{e.addEventListener("input",()=>{const t=e.closest(".form-group");t&&t.classList.contains("field-invalid")&&t.classList.remove("field-invalid"),P()}),e.addEventListener("change",()=>{const t=e.closest(".form-group");t&&t.classList.contains("field-invalid")&&t.classList.remove("field-invalid"),P()}),e.addEventListener("blur",()=>{be(e)})});function be(e){let t=e.closest(".form-group");if(!t||t.style.display==="none"||!e.hasAttribute("required"))return;const i=e.value.trim();let a=!0,r="This field is required.";if(!i)a=!1;else if(e.type==="email")/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i)||(a=!1,r="Invalid email format.");else if(e.type==="url")try{new URL(i)}catch{a=!1,r="Invalid URL layout."}if(a)t.classList.remove("field-invalid");else{t.classList.add("field-invalid");const l=t.querySelector(".field-error");l&&(l.textContent=r)}}function z(){let e=0;Object.values(S).forEach(i=>{i&&(e+=i.size)});const t=4*1024*1024;return e>t?(B&&(B.textContent=`Upload limit exceeded: ${(e/(1024*1024)).toFixed(2)}MB uploaded (Max 4.0MB combined). Please upload smaller files or provide links.`,B.style.display="block"),!1):(B&&(B.style.display="none"),!0)}function P(){if(N)return;const e={};p.querySelectorAll("input, select, textarea").forEach(r=>{r.type==="file"||r.type==="radio"||r.type==="checkbox"||(e[r.name]=r.value)});const i=p.querySelector('input[name="work_type"]:checked');i&&(e.work_type=i.value);const a=document.getElementById("join-remote");a&&(e.remote_work=a.checked),e.skills=y,e.step=v,localStorage.setItem("april_grid_draft",JSON.stringify(e)),j&&(j.textContent="SAVED",j.classList.remove("text-gradient-violet"),j.classList.add("text-gradient-cyan"),setTimeout(()=>{j&&(j.textContent="ONLINE",j.classList.remove("text-gradient-cyan"),j.classList.add("text-gradient-violet"))},1e3))}function he(){const e=localStorage.getItem("april_grid_draft");if(e)try{const t=JSON.parse(e);if(Object.keys(t).forEach(i=>{const a=p.querySelector(`[name="${i}"]`);a&&a.type!=="file"&&(a.value=t[i])}),t.work_type){const i=p.querySelector(`input[name="work_type"][value="${t.work_type}"]`);i&&(i.checked=!0)}if(t.remote_work!==void 0){const i=document.getElementById("join-remote");i&&(i.checked=t.remote_work)}t.skills&&Array.isArray(t.skills)&&(y=t.skills,Q()),t.step&&(v=t.step),re()}catch(t){console.error("Error prefilling draft:",t)}}const K=document.getElementById("join-role");K&&K.addEventListener("change",re);function re(){const e=K.value,t=document.getElementById("github-field-wrapper"),i=document.getElementById("showreel-field-wrapper"),a=document.getElementById("join-github"),r=document.getElementById("join-showreel");if(e==="web-dev"||e==="uiux-dev")t.style.display="block",a&&a.setAttribute("required","required");else{t.style.display="none",a&&(a.removeAttribute("required"),a.value="");const l=a?a.closest(".form-group"):null;l&&l.classList.remove("field-invalid")}if(e==="cinematographer"||e==="video-editor")i.style.display="block",r&&r.setAttribute("required","required");else{i.style.display="none",r&&(r.removeAttribute("required"),r.value=""),S.showreel_file=null;const l=document.getElementById("dropzone-showreel");if(l){l.classList.remove("has-file");const n=l.querySelector(".preview-area");n&&(n.innerHTML="")}const f=i.closest(".upload-box-wrapper");f&&f.classList.remove("field-invalid")}z(),M()}const O=document.getElementById("join-skills-search"),I=document.getElementById("skills-suggestions"),$=document.getElementById("skills-tags-container"),G=document.getElementById("join-skills-hidden");O&&I&&(O.addEventListener("input",()=>{const e=O.value.toLowerCase().trim();if(I.innerHTML="",!e){I.style.display="none";return}const t=ye.filter(i=>i.toLowerCase().includes(e)&&!y.includes(i));t.length>0?(t.forEach(i=>{const a=document.createElement("div");a.textContent=i,a.setAttribute("role","option"),a.addEventListener("click",()=>{se(i)}),I.appendChild(a)}),I.style.display="block"):I.style.display="none"}),document.addEventListener("click",e=>{e.target!==O&&(I.style.display="none")}));function se(e){y.includes(e)||(y.push(e),O.value="",I.style.display="none",Q(),P())}function xe(e){y=y.filter(t=>t!==e),Q(),P()}function Q(){if($){if($.innerHTML="",y.forEach(e=>{const t=document.createElement("div");t.className="skill-tag",t.innerHTML=`${e} <span aria-label="Remove skill ${e}">&times;</span>`,t.querySelector("span").addEventListener("click",()=>xe(e)),$.appendChild(t)}),G){G.value=y.join(",");const e=G.closest(".form-group");e&&y.length>0&&e.classList.remove("field-invalid")}M()}}const le=s.querySelectorAll(".upload-dropzone");le.forEach(e=>{const t=e.querySelector(".file-input"),i=e.querySelector(".preview-area");!t||!i||(e.addEventListener("keydown",a=>{(a.key===" "||a.key==="Enter")&&(a.preventDefault(),t.click())}),e.addEventListener("click",()=>{t.click()}),["dragenter","dragover"].forEach(a=>{e.addEventListener(a,r=>{r.preventDefault(),r.stopPropagation(),e.classList.add("dragover")},!1)}),["dragleave","drop"].forEach(a=>{e.addEventListener(a,r=>{r.preventDefault(),r.stopPropagation(),e.classList.remove("dragover")},!1)}),e.addEventListener("drop",a=>{a.preventDefault(),a.stopPropagation();const l=a.dataTransfer.files;l.length>0&&(t.files=l,ne(e,t,i))},!1),t.addEventListener("change",a=>{a.stopPropagation(),ne(e,t,i)}))});function ne(e,t,i){const a=t.files;if(a.length===0)return;const r=a[0];e.classList.add("has-file");const l=e.closest(".upload-box-wrapper");l&&l.classList.remove("field-invalid"),i.innerHTML="";const f=document.createElement("div");f.className="preview-file-info",f.textContent=`${r.name} (${(r.size/1024).toFixed(1)} KB)`,i.appendChild(f);const n=new FileReader;n.onload=A=>{const _=A.target.result;if(S[t.name+"_file"]={base64:_,name:r.name,size:r.size},r.type.startsWith("image/")){const g=document.createElement("img");g.style.width="44px",g.style.height="44px",g.style.objectFit="cover",g.style.borderRadius="50%",g.style.marginBottom="6px",g.src=_,i.insertBefore(g,f)}z(),P()},n.readAsDataURL(r);const x=document.createElement("button");x.type="button",x.className="preview-remove-btn",x.textContent="Remove",x.setAttribute("aria-label",`Remove uploaded file ${r.name}`),x.addEventListener("click",A=>{A.stopPropagation(),t.value="",S[t.name+"_file"]=null,e.classList.remove("has-file"),i.innerHTML="",z(),P()}),i.appendChild(x),M()}p.addEventListener("submit",async e=>{if(e.preventDefault(),!N&&oe(4)){N=!0,h.classList.add("loading"),h.setAttribute("disabled","disabled"),b.setAttribute("disabled","disabled"),c.setAttribute("disabled","disabled"),k&&(k.style.display="none",k.textContent="");try{const t={fullname:document.getElementById("join-fullname").value,email:document.getElementById("join-email").value,phone:document.getElementById("join-phone").value,dob:document.getElementById("join-dob").value,gender:document.getElementById("join-gender").value,location:document.getElementById("join-location").value,nationality:document.getElementById("join-nationality").value,role:document.getElementById("join-role").value,experience:document.getElementById("join-experience").value,company:document.getElementById("join-company").value,position:document.getElementById("join-position").value,expected_salary:document.getElementById("join-expected-salary").value,notice_period:document.getElementById("join-notice-period").value,portfolio_url:document.getElementById("join-portfolio").value,linkedin_url:document.getElementById("join-linkedin").value,github_url:document.getElementById("join-github")?document.getElementById("join-github").value:"",skills:y,qualification:document.getElementById("join-qualification").value,institution:document.getElementById("join-institution").value,grad_year:document.getElementById("join-gradyear").value,why_join:document.getElementById("join-why").value,best_project:document.getElementById("join-best-project").value,work_type:p.querySelector('input[name="work_type"]:checked').value,remote_work:document.getElementById("join-remote").checked,profile_photo_file:S.profile_photo_file,resume_file:S.resume_file,portfolio_attachment_file:S.portfolio_attachment_file,showreel_file:S.showreel_file},i=await fetch("/api/apply",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),a=await i.json();if(!i.ok)throw new Error(a.error||"Server rejected your application. Please check fields.");localStorage.removeItem("april_grid_draft"),R.classList.add("active"),Ee()}catch(t){if(console.error("Submission API Error:",t),k){k.textContent=`Submission Error: ${t.message}. Please retry.`,k.style.display="block";const i=s.querySelector(".join-modal-form-container");i&&(i.scrollTop=i.scrollHeight)}}finally{N=!1,h.classList.remove("loading"),h.removeAttribute("disabled"),b.removeAttribute("disabled"),c.removeAttribute("disabled")}}});const de=()=>{p.reset(),y=[],v=1,S={profile_photo_file:null,resume_file:null,portfolio_attachment_file:null,showreel_file:null},le.forEach(e=>{e.classList.remove("has-file");const t=e.querySelector(".preview-area");t&&(t.innerHTML="");const i=e.querySelector(".file-input");i&&(i.value="")}),$&&($.innerHTML=""),k&&(k.style.display="none",k.textContent=""),B&&(B.style.display="none"),R.classList.remove("active"),Y()};ue.addEventListener("click",()=>{de(),W()});function Ee(){const e=document.getElementById("confetti-canvas");if(!e)return;const t=e.getContext("2d");e.width=e.parentElement.clientWidth,e.height=e.parentElement.clientHeight;let i=[];const a=["#8b5cf6","#d946ef","#06b6d4","#3b82f6","#ffffff"];for(let f=0;f<100;f++)i.push({x:Math.random()*e.width,y:Math.random()*e.height-e.height,r:Math.random()*6+4,d:Math.random()*e.height,color:a[Math.floor(Math.random()*a.length)],tilt:Math.random()*10-5,tiltAngleIncremental:Math.random()*.07+.02,tiltAngle:0,speed:Math.random()*3+2});let r=!0;setTimeout(()=>r=!1,6e3);function l(){t.clearRect(0,0,e.width,e.height);let f=!1;i.forEach((n,x)=>{n.tiltAngle+=n.tiltAngleIncremental,n.y+=n.speed,n.x+=Math.sin(n.tiltAngle)*.5,n.tilt=Math.sin(n.tiltAngle-x/3)*15,n.y<e.height&&(f=!0),t.beginPath(),t.lineWidth=n.r,t.strokeStyle=n.color,t.moveTo(n.x+n.tilt+n.r/2,n.y),t.lineTo(n.x+n.tilt,n.y+n.tilt+n.r/2),t.stroke()}),f&&(r||i.some(n=>n.y<e.height))?requestAnimationFrame(l):t.clearRect(0,0,e.width,e.height)}l()}}pe()});
