(function(){const k=document.createElement("link").relList;if(k&&k.supports&&k.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))C(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const B of f.addedNodes)B.tagName==="LINK"&&B.rel==="modulepreload"&&C(B)}).observe(document,{childList:!0,subtree:!0});function M(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function C(c){if(c.ep)return;c.ep=!0;const f=M(c);fetch(c.href,f)}})();function ke(){if(document.getElementById("join-modal"))return;const m=document.createElement("div");m.id="join-modal",m.className="join-modal-overlay",m.setAttribute("role","dialog"),m.setAttribute("aria-modal","true"),m.setAttribute("aria-labelledby","modal-title"),m.innerHTML=`
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
                        
                        <!-- STEP 1: Personal Profile -->
                        <div class="form-step active" data-step="1" role="tabpanel" aria-label="Personal Profile Step">
                            <h3 class="step-title text-gradient-cyan">Personal Profile</h3>
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
                        <div class="form-step" data-step="2" role="tabpanel" aria-label="Professional Information Step" style="display:none;">
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
                        
                        <!-- STEP 3: Portfolio & Uploads -->
                        <div class="form-step" data-step="3" role="tabpanel" aria-label="Portfolio and Uploads Step" style="display:none;">
                            <h3 class="step-title text-gradient-cyan">Portfolio & Uploads</h3>
                            
                            <div class="step-fields-grid" style="grid-template-columns: 1fr; gap: 20px; margin-bottom: 20px;">
                                <div class="form-group skills-input-container">
                                    <input type="text" id="join-skills-search" placeholder="Type a skill (e.g. React, Figma) and press Enter or Select">
                                    <label for="join-skills-search">Skills Tag Input</label>
                                    <div class="skills-suggestions-dropdown" id="skills-suggestions" role="listbox" aria-label="Skills suggestions"></div>
                                    <div class="skills-tags-display" id="skills-tags-container"></div>
                                    <input type="hidden" id="join-skills-hidden" name="skills" required aria-required="true">
                                    <span class="field-error" style="bottom: -20px;"></span>
                                </div>
                            </div>
                            
                            <div class="step-fields-grid" style="margin-bottom: 30px;">
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
                        </div>
                        
                        <!-- STEP 4: Review + Submit -->
                        <div class="form-step" data-step="4" role="tabpanel" aria-label="Review and Submit Step" style="display:none;">
                            <h3 class="step-title text-gradient-cyan">Review & Submit</h3>
                            
                            <div class="review-summary-container">
                                <div class="review-section">
                                    <h4>Personal Profile</h4>
                                    <div class="review-grid-data" id="review-personal"></div>
                                </div>
                                
                                <div class="review-section">
                                    <h4>Professional Info</h4>
                                    <div class="review-grid-data" id="review-professional"></div>
                                </div>
                                
                                <div class="review-section">
                                    <h4>Capabilities & Uploads</h4>
                                    <div class="review-grid-data" id="review-uploads"></div>
                                </div>
                            </div>
                            
                            <div class="step-fields-grid" style="grid-template-columns: 1fr; margin-top: 20px;">
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
                            
                            <div class="consent-checkbox-wrapper">
                                <label class="consent-checkbox">
                                    <input type="checkbox" id="join-consent" name="consent" required aria-required="true">
                                    <span>I certify that all information provided is accurate and complete. I consent to April Grid processing my application details. *</span>
                                </label>
                                <span class="field-error" id="consent-error" aria-live="assertive"></span>
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
                </div>
            </div>
            
            <!-- SUCCESS SCREEN OVERLAY (DIRECT CHILD OF .join-modal-window) -->
            <div id="join-success-screen" class="success-screen" role="tabpanel" aria-label="Submission success screen" style="display: none;">
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
    `,document.body.appendChild(m)}function Se(){const m=document.getElementById("navbar-container"),k=document.getElementById("footer-container");m&&(m.innerHTML=`
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
        `),k&&(k.innerHTML=`
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
        `),ke(),typeof window.updateCursorHoverEvents=="function"&&window.updateCursorHoverEvents()}document.addEventListener("DOMContentLoaded",()=>{Se();const m=document.getElementById("preloader"),k=document.querySelector(".preloader-count");if(m&&k){let s=0;const p=Math.abs(Math.floor(1200/100)),u=setInterval(()=>{s++,k.textContent=s<10?`0${s}`:s,s>=100&&(clearInterval(u),setTimeout(()=>{m.style.opacity="0",m.style.transform="translateY(-100%)",setTimeout(()=>{m.style.display="none",ae()},1e3)},200))},p)}else ae();const M=document.createElement("div"),C=document.createElement("div");M.className="custom-cursor-dot",C.className="custom-cursor-ring",document.body.appendChild(M),document.body.appendChild(C);let c=window.innerWidth/2,f=window.innerHeight/2,B=c,V=f;window.addEventListener("mousemove",s=>{c=s.clientX,f=s.clientY,M.style.left=`${c}px`,M.style.top=`${f}px`});function ee(){B+=(c-B)*.15,V+=(f-V)*.15,C.style.left=`${B}px`,C.style.top=`${V}px`,requestAnimationFrame(ee)}ee();function D(){document.querySelectorAll('a, button, select, input, textarea, .filter-btn, .mobile-menu-toggle, .pill-radio, .switch-toggle, .upload-dropzone, [role="button"]').forEach(n=>{n.removeEventListener("mouseenter",te),n.removeEventListener("mouseleave",ie),n.addEventListener("mouseenter",te),n.addEventListener("mouseleave",ie)})}function te(){document.body.classList.add("cursor-hover")}function ie(){document.body.classList.remove("cursor-hover")}D(),window.updateCursorHoverEvents=D;const L=document.querySelector(".mobile-menu-toggle"),U=document.body;L&&L.addEventListener("click",()=>{const s=L.getAttribute("aria-expanded")==="true"||!1;L.setAttribute("aria-expanded",!s),U.classList.toggle("menu-open"),L.classList.toggle("active")}),document.querySelectorAll(".nav-links a").forEach(s=>{s.addEventListener("click",()=>{U.classList.remove("menu-open"),L&&(L.classList.remove("active"),L.setAttribute("aria-expanded","false"))})});const J=window.location.pathname;document.querySelectorAll(".nav-links a").forEach(s=>{(s.getAttribute("href")===J||J==="/"&&s.getAttribute("href")==="/index.html"||J.endsWith("/")&&s.getAttribute("href")==="/index.html")&&s.classList.add("active")}),document.querySelectorAll(".glass-panel, .expert-card, .hud-stat-card, .founder-card, .office-coordinate-card, .join-modal-window").forEach(s=>{s.addEventListener("mousemove",n=>{const p=s.getBoundingClientRect(),u=n.clientX-p.left,F=n.clientY-p.top;if(s.style.setProperty("--mouse-x",`${u/p.width*100}%`),s.style.setProperty("--mouse-y",`${F/p.height*100}%`),s.classList.contains("glass-panel")||s.classList.contains("expert-card")){const x=p.width/2,E=p.height/2,y=(E-F)/E*5,I=(u-x)/x*5;s.style.transform=`perspective(1000px) rotateX(${y}deg) rotateY(${I}deg) translateY(-5px)`}}),s.addEventListener("mouseleave",()=>{(s.classList.contains("glass-panel")||s.classList.contains("expert-card"))&&(s.style.transform="perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)")})}),document.querySelectorAll(".btn-magnet-wrap, .btn-futuristic").forEach(s=>{s.addEventListener("mousemove",n=>{const p=s.getBoundingClientRect(),u=p.left+p.width/2,F=p.top+p.height/2,x=n.clientX-u,E=n.clientY-F;s.style.transform=`translate(${x*.25}px, ${E*.25}px)`;const y=s.querySelector("span");y&&(y.style.transform=`translate(${x*.1}px, ${E*.1}px)`)}),s.addEventListener("mouseleave",()=>{s.style.transform="translate(0px, 0px)";const n=s.querySelector("span");n&&(n.style.transform="translate(0px, 0px)")})});const pe={threshold:.05,rootMargin:"0px 0px -80px 0px"},K=new IntersectionObserver(s=>{s.forEach(n=>{n.isIntersecting&&(n.target.classList.add("visible"),n.target.querySelectorAll(".reveal-item").forEach((p,u)=>{setTimeout(()=>{p.classList.add("visible")},u*100)}),K.unobserve(n.target))})},pe);document.querySelectorAll(".fade-up").forEach(s=>K.observe(s)),document.querySelectorAll(".reveal-wrapper").forEach(s=>K.observe(s));function ae(){document.querySelectorAll(".hero-section .fade-up, .hero-section .reveal-item").forEach((s,n)=>{setTimeout(()=>{s.classList.add("visible")},n*150)})}const N=document.querySelector(".navbar");window.addEventListener("scroll",()=>{N&&(window.scrollY>50?(N.style.background="rgba(3, 3, 3, 0.85)",N.style.borderBottom="1px solid rgba(255, 255, 255, 0.08)"):(N.style.background="rgba(3, 3, 3, 0.6)",N.style.borderBottom="1px solid rgba(255, 255, 255, 0.05)"))});const se=document.getElementById("back-to-top");se&&se.addEventListener("click",s=>{s.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})});function ue(){const s=document.getElementById("btn-join-now"),n=document.getElementById("join-modal");if(!s||!n)return;const p=n.querySelector(".join-modal-close"),u=document.getElementById("join-application-form"),F=n.querySelectorAll(".form-step"),x=document.getElementById("join-btn-prev"),E=document.getElementById("join-btn-next"),y=document.getElementById("join-btn-submit"),I=document.getElementById("join-success-screen"),ve=document.getElementById("join-success-close"),me=document.getElementById("current-step-num"),fe=document.getElementById("progress-bar-fill"),ye=n.querySelector(".progress-step-label"),P=document.getElementById("draft-sync-status"),S=document.getElementById("form-submit-error"),_=document.getElementById("upload-limit-error"),j=document.getElementById("join-consent");let b=1;const Y=4;let R=!1;const ge=["Personal Profile","Professional Information","Portfolio & Uploads","Review & Submit"],be=["React","Vue","Angular","Svelte","Node.js","Three.js","WebGL","GSAP","Framer Motion","Vite","TypeScript","SAP ABAP","SAP HANA","SAP Fiori","SAP UI5","SAP Consultant","Figma","Adobe XD","Sketch","UI/UX Design","Wireframing","Prototyping","Design System","Cinema 4D","Blender","Maya","3ds Max","ZBrush","3D Modelling","Texturing","Rendering","DaVinci Resolve","Adobe Premiere Pro","After Effects","Final Cut Pro","Video Editing","Color Grading","Cinematography","Camera Operation","Lighting Design","VFX","Generative AI","Midjourney","Stable Diffusion","Python","JavaScript","HTML5","CSS3","SASS","PostgreSQL","MongoDB","Tailwind CSS","Git"];let g=[],v={profile_photo_file:null,resume_file:null,portfolio_attachment_file:null,showreel_file:null};s.addEventListener("click",()=>{n.classList.add("active"),U.classList.add("menu-open"),xe(),G()});const W=()=>{R||(n.classList.remove("active"),U.classList.remove("menu-open"),I.style.display==="flex"&&ce())};p.addEventListener("click",W),n.addEventListener("click",e=>{e.target===n&&W()}),window.addEventListener("keydown",e=>{e.key==="Escape"&&n.classList.contains("active")&&W()}),u.addEventListener("keydown",e=>{if(e.key==="Enter"&&e.target.tagName!=="TEXTAREA")if(e.preventDefault(),e.target.id==="join-skills-search"){const t=e.target.value.trim();t&&!g.includes(t)&&re(t)}else b<Y&&E.click()}),j&&j.addEventListener("change",()=>{const e=j.closest(".consent-checkbox-wrapper");e&&e.classList.remove("field-invalid"),j.checked?y.removeAttribute("disabled"):y.setAttribute("disabled","disabled")});function G(){F.forEach(i=>{if(parseInt(i.getAttribute("data-step"))===b){i.style.display="flex",i.classList.add("active");const l=i.querySelectorAll('input, select, textarea, [tabindex="0"]');l.length>0&&l[0].focus()}else i.style.display="none",i.classList.remove("active")}),b===1?(x.style.display="none",E.style.display="block",y.style.display="none"):b===Y?(x.style.display="block",E.style.display="none",y.style.display="block",j&&!j.checked?y.setAttribute("disabled","disabled"):y.removeAttribute("disabled"),he()):(x.style.display="block",E.style.display="block",y.style.display="none"),me.textContent=`0${b}`;const e=b/Y*100;fe.style.width=`${e}%`,ye.textContent=ge[b-1];const t=n.querySelector(".join-modal-form-container");t&&(t.scrollTop=0);const a=n.querySelector(".join-modal-window");a&&(a.scrollTop=0),D()}function he(){const e=document.getElementById("review-personal"),t=document.getElementById("review-professional"),a=document.getElementById("review-uploads");if(!e||!t||!a)return;const i=d=>{const r=document.getElementById(d);return r&&r.value.trim()||"Not provided"},o=d=>{const r=document.getElementById(d);if(!r)return"Not provided";const h=r.options[r.selectedIndex];return h&&h.text||"Not provided"};e.innerHTML=`
                <div class="review-item-row"><span class="review-item-label">Name</span><span class="review-item-value" title="${i("join-fullname")}">${i("join-fullname")}</span></div>
                <div class="review-item-row"><span class="review-item-label">Email</span><span class="review-item-value" title="${i("join-email")}">${i("join-email")}</span></div>
                <div class="review-item-row"><span class="review-item-label">Phone</span><span class="review-item-value" title="${i("join-phone")}">${i("join-phone")}</span></div>
                <div class="review-item-row"><span class="review-item-label">DOB</span><span class="review-item-value">${i("join-dob")}</span></div>
                <div class="review-item-row"><span class="review-item-label">Gender</span><span class="review-item-value">${o("join-gender")}</span></div>
                <div class="review-item-row"><span class="review-item-label">Location</span><span class="review-item-value" title="${i("join-location")}">${i("join-location")}</span></div>
                <div class="review-item-row"><span class="review-item-label">Nationality</span><span class="review-item-value" title="${i("join-nationality")}">${i("join-nationality")}</span></div>
            `,t.innerHTML=`
                <div class="review-item-row"><span class="review-item-label">Target Role</span><span class="review-item-value">${o("join-role")}</span></div>
                <div class="review-item-row"><span class="review-item-label">Experience</span><span class="review-item-value">${i("join-experience")} Years</span></div>
                <div class="review-item-row"><span class="review-item-label">Current Company</span><span class="review-item-value" title="${i("join-company")}">${i("join-company")}</span></div>
                <div class="review-item-row"><span class="review-item-label">Current Position</span><span class="review-item-value" title="${i("join-position")}">${i("join-position")}</span></div>
                <div class="review-item-row"><span class="review-item-label">Expected Salary</span><span class="review-item-value">${i("join-expected-salary")}</span></div>
                <div class="review-item-row"><span class="review-item-label">Notice Period</span><span class="review-item-value">${i("join-notice-period")}</span></div>
                <div class="review-item-row"><span class="review-item-label">Portfolio URL</span><span class="review-item-value" title="${i("join-portfolio")}">${i("join-portfolio")}</span></div>
                <div class="review-item-row"><span class="review-item-label">LinkedIn</span><span class="review-item-value" title="${i("join-linkedin")}">${i("join-linkedin")}</span></div>
                ${document.getElementById("github-field-wrapper").style.display!=="none"?`
                <div class="review-item-row"><span class="review-item-label">GitHub</span><span class="review-item-value" title="${i("join-github")}">${i("join-github")}</span></div>
                `:""}
            `;const l=d=>d?d.name:"No file uploaded";a.innerHTML=`
                <div class="review-item-row"><span class="review-item-label">Degree</span><span class="review-item-value">${o("join-qualification")}</span></div>
                <div class="review-item-row"><span class="review-item-label">Institution</span><span class="review-item-value" title="${i("join-institution")}">${i("join-institution")}</span></div>
                <div class="review-item-row"><span class="review-item-label">Grad Year</span><span class="review-item-value">${i("join-gradyear")}</span></div>
                <div class="review-item-row"><span class="review-item-label">Skills List</span><span class="review-item-value" title="${g.join(", ")}">${g.join(", ")||"None selected"}</span></div>
                <div class="review-item-row"><span class="review-item-label">Photo</span><span class="review-item-value" title="${l(v.profile_photo_file)}">${l(v.profile_photo_file)}</span></div>
                <div class="review-item-row"><span class="review-item-label">Resume PDF</span><span class="review-item-value" title="${l(v.resume_file)}">${l(v.resume_file)}</span></div>
                <div class="review-item-row"><span class="review-item-label">Portfolio ZIP</span><span class="review-item-value" title="${l(v.portfolio_attachment_file)}">${l(v.portfolio_attachment_file)}</span></div>
                ${document.getElementById("showreel-field-wrapper").style.display!=="none"?`
                <div class="review-item-row"><span class="review-item-label">Showreel</span><span class="review-item-value" title="${l(v.showreel_file)}">${l(v.showreel_file)}</span></div>
                `:""}
            `}E.addEventListener("click",()=>{oe(b)&&b<Y&&(b++,G(),T())}),x.addEventListener("click",()=>{b>1&&(b--,G())});function oe(e){let t=!0;const a=n.querySelector(`.form-step[data-step="${e}"]`);if(!a)return!0;if(a.querySelectorAll("input[required], select[required], textarea[required]").forEach(o=>{let l=o.closest(".form-group");if(l&&l.style.display==="none")return;let d=o.closest("#showreel-field-wrapper");if(d&&d.style.display==="none")return;let r=o.closest(".upload-box-wrapper");const h=o.value.trim();let q=!0,$="This field is required.";if(!h)q=!1;else if(o.type==="email")/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(h)||(q=!1,$="Please enter a valid email address.");else if(o.type==="url")try{new URL(h)}catch{q=!1,$="Please enter a valid URL."}if(q)l?l.classList.remove("field-invalid"):r&&r.classList.remove("field-invalid");else if(t=!1,l){l.classList.add("field-invalid");const w=l.querySelector(".field-error");w&&(w.textContent=$)}else if(r){r.classList.add("field-invalid");const w=r.querySelector(".field-error");w&&(w.textContent=$)}}),e===3&&g.length===0){t=!1;const o=X.closest(".form-group");if(o){o.classList.add("field-invalid");const l=o.querySelector(".field-error");l&&(l.textContent="Please add at least one core skill.")}}return e===3&&!z()&&(t=!1),t}u.querySelectorAll("input, select, textarea").forEach(e=>{e.addEventListener("input",()=>{const t=e.closest(".form-group");t&&t.classList.contains("field-invalid")&&t.classList.remove("field-invalid"),T()}),e.addEventListener("change",()=>{const t=e.closest(".form-group");t&&t.classList.contains("field-invalid")&&t.classList.remove("field-invalid"),T()}),e.addEventListener("blur",()=>{we(e)})});function we(e){let t=e.closest(".form-group");if(!t||t.style.display==="none"||!e.hasAttribute("required"))return;const a=e.value.trim();let i=!0,o="This field is required.";if(!a)i=!1;else if(e.type==="email")/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a)||(i=!1,o="Invalid email format.");else if(e.type==="url")try{new URL(a)}catch{i=!1,o="Invalid URL layout."}if(i)t.classList.remove("field-invalid");else{t.classList.add("field-invalid");const l=t.querySelector(".field-error");l&&(l.textContent=o)}}function z(){let e=0;Object.values(v).forEach(a=>{a&&(e+=a.size)});const t=4*1024*1024;return e>t?(_&&(_.textContent=`Upload limit exceeded: ${(e/(1024*1024)).toFixed(2)}MB uploaded (Max 4.0MB combined). Please upload smaller files or provide links.`,_.style.display="block"),!1):(_&&(_.style.display="none"),!0)}function T(){if(R)return;const e={};u.querySelectorAll("input, select, textarea").forEach(o=>{o.type==="file"||o.type==="radio"||o.type==="checkbox"||(e[o.name]=o.value)});const a=u.querySelector('input[name="work_type"]:checked');a&&(e.work_type=a.value);const i=document.getElementById("join-remote");i&&(e.remote_work=i.checked),e.skills=g,e.step=b,localStorage.setItem("april_grid_draft",JSON.stringify(e)),P&&(P.textContent="SAVED",P.classList.remove("text-gradient-violet"),P.classList.add("text-gradient-cyan"),setTimeout(()=>{P&&(P.textContent="ONLINE",P.classList.remove("text-gradient-cyan"),P.classList.add("text-gradient-violet"))},1e3))}function xe(){const e=localStorage.getItem("april_grid_draft");if(e)try{const t=JSON.parse(e);if(Object.keys(t).forEach(a=>{const i=u.querySelector(`[name="${a}"]`);i&&i.type!=="file"&&(i.value=t[a])}),t.work_type){const a=u.querySelector(`input[name="work_type"][value="${t.work_type}"]`);a&&(a.checked=!0)}if(t.remote_work!==void 0){const a=document.getElementById("join-remote");a&&(a.checked=t.remote_work)}t.skills&&Array.isArray(t.skills)&&(g=t.skills,Z()),t.step&&(b=t.step),le()}catch(t){console.error("Error prefilling draft:",t)}}const Q=document.getElementById("join-role");Q&&Q.addEventListener("change",le);function le(){const e=Q.value,t=document.getElementById("github-field-wrapper"),a=document.getElementById("showreel-field-wrapper"),i=document.getElementById("join-github"),o=document.getElementById("join-showreel");if(e==="web-dev"||e==="uiux-dev")t.style.display="block",i&&i.setAttribute("required","required");else{t.style.display="none",i&&(i.removeAttribute("required"),i.value="");const l=i?i.closest(".form-group"):null;l&&l.classList.remove("field-invalid")}if(e==="cinematographer"||e==="video-editor")a.style.display="block",o&&o.setAttribute("required","required");else{a.style.display="none",o&&(o.removeAttribute("required"),o.value=""),v.showreel_file=null;const l=document.getElementById("dropzone-showreel");if(l){l.classList.remove("has-file");const r=l.querySelector(".preview-area");r&&(r.innerHTML="")}const d=a.closest(".upload-box-wrapper");d&&d.classList.remove("field-invalid")}z(),D()}const H=document.getElementById("join-skills-search"),A=document.getElementById("skills-suggestions"),O=document.getElementById("skills-tags-container"),X=document.getElementById("join-skills-hidden");H&&A&&(H.addEventListener("input",()=>{const e=H.value.toLowerCase().trim();if(A.innerHTML="",!e){A.style.display="none";return}const t=be.filter(a=>a.toLowerCase().includes(e)&&!g.includes(a));t.length>0?(t.forEach(a=>{const i=document.createElement("div");i.textContent=a,i.setAttribute("role","option"),i.addEventListener("click",()=>{re(a)}),A.appendChild(i)}),A.style.display="block"):A.style.display="none"}),document.addEventListener("click",e=>{e.target!==H&&(A.style.display="none")}));function re(e){g.includes(e)||(g.push(e),H.value="",A.style.display="none",Z(),T())}function Ee(e){g=g.filter(t=>t!==e),Z(),T()}function Z(){if(O){if(O.innerHTML="",g.forEach(e=>{const t=document.createElement("div");t.className="skill-tag",t.innerHTML=`${e} <span aria-label="Remove skill ${e}">&times;</span>`,t.querySelector("span").addEventListener("click",()=>Ee(e)),O.appendChild(t)}),X){X.value=g.join(",");const e=X.closest(".form-group");e&&g.length>0&&e.classList.remove("field-invalid")}D()}}const ne=n.querySelectorAll(".upload-dropzone");ne.forEach(e=>{const t=e.querySelector(".file-input"),a=e.querySelector(".preview-area");!t||!a||(e.addEventListener("keydown",i=>{(i.key===" "||i.key==="Enter")&&(i.preventDefault(),t.click())}),e.addEventListener("click",()=>{t.click()}),["dragenter","dragover"].forEach(i=>{e.addEventListener(i,o=>{o.preventDefault(),o.stopPropagation(),e.classList.add("dragover")},!1)}),["dragleave","drop"].forEach(i=>{e.addEventListener(i,o=>{o.preventDefault(),o.stopPropagation(),e.classList.remove("dragover")},!1)}),e.addEventListener("drop",i=>{i.preventDefault(),i.stopPropagation();const l=i.dataTransfer.files;l.length>0&&(t.files=l,de(e,t,a))},!1),t.addEventListener("change",i=>{i.stopPropagation(),de(e,t,a)}))});function de(e,t,a){const i=t.files;if(i.length===0)return;const o=i[0];e.classList.add("has-file");const l=e.closest(".upload-box-wrapper");l&&l.classList.remove("field-invalid"),a.innerHTML="";const d=document.createElement("div");d.className="preview-file-info",d.textContent=`${o.name} (${(o.size/1024).toFixed(1)} KB)`,a.appendChild(d);const r=new FileReader;r.onload=q=>{const $=q.target.result;if(v[t.name+"_file"]={base64:$,name:o.name,size:o.size},o.type.startsWith("image/")){const w=document.createElement("img");w.style.width="44px",w.style.height="44px",w.style.objectFit="cover",w.style.borderRadius="50%",w.style.marginBottom="6px",w.src=$,a.insertBefore(w,d)}z(),T()},r.readAsDataURL(o);const h=document.createElement("button");h.type="button",h.className="preview-remove-btn",h.textContent="Remove",h.setAttribute("aria-label",`Remove uploaded file ${o.name}`),h.addEventListener("click",q=>{q.stopPropagation(),t.value="",v[t.name+"_file"]=null,e.classList.remove("has-file"),a.innerHTML="",z(),T()}),a.appendChild(h),D()}u.addEventListener("submit",async e=>{if(e.preventDefault(),!R){if(j&&!j.checked){const t=j.closest(".consent-checkbox-wrapper");if(t){t.classList.add("field-invalid");const a=document.getElementById("consent-error");a&&(a.textContent="You must consent to terms to submit your application.")}return}if(oe(4)){R=!0,y.classList.add("loading"),y.setAttribute("disabled","disabled"),x.setAttribute("disabled","disabled"),p.setAttribute("disabled","disabled"),S&&(S.style.display="none",S.textContent="");try{const t={fullname:document.getElementById("join-fullname").value,email:document.getElementById("join-email").value,phone:document.getElementById("join-phone").value,dob:document.getElementById("join-dob").value,gender:document.getElementById("join-gender").value,location:document.getElementById("join-location").value,nationality:document.getElementById("join-nationality").value,role:document.getElementById("join-role").value,experience:document.getElementById("join-experience").value,company:document.getElementById("join-company").value,position:document.getElementById("join-position").value,expected_salary:document.getElementById("join-expected-salary").value,notice_period:document.getElementById("join-notice-period").value,portfolio_url:document.getElementById("join-portfolio").value,linkedin_url:document.getElementById("join-linkedin").value,github_url:document.getElementById("join-github")?document.getElementById("join-github").value:"",skills:g,qualification:document.getElementById("join-qualification").value,institution:document.getElementById("join-institution").value,grad_year:document.getElementById("join-gradyear").value,why_join:document.getElementById("join-why").value,best_project:document.getElementById("join-best-project").value,work_type:u.querySelector('input[name="work_type"]:checked').value,remote_work:document.getElementById("join-remote").checked,profile_photo_file:v.profile_photo_file,resume_file:v.resume_file,portfolio_attachment_file:v.portfolio_attachment_file,showreel_file:v.showreel_file},a=await fetch("/api/apply",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),i=await a.json();if(!a.ok)throw new Error(i.error||"Server rejected your application. Please check fields.");localStorage.removeItem("april_grid_draft"),I.style.display="flex",I.offsetWidth,I.classList.add("active"),je()}catch(t){if(console.error("Submission API Error:",t),S){S.textContent=`Submission Error: ${t.message}. Please try again.`,S.style.display="block";const a=n.querySelector(".join-modal-form-container");a&&(a.scrollTop=a.scrollHeight);const i=n.querySelector(".join-modal-window");i&&(i.scrollTop=i.scrollHeight)}}finally{R=!1,y.classList.remove("loading"),y.removeAttribute("disabled"),x.removeAttribute("disabled"),p.removeAttribute("disabled")}}}});const ce=()=>{u.reset(),g=[],b=1,v={profile_photo_file:null,resume_file:null,portfolio_attachment_file:null,showreel_file:null},ne.forEach(a=>{a.classList.remove("has-file");const i=a.querySelector(".preview-area");i&&(i.innerHTML="");const o=a.querySelector(".file-input");o&&(o.value="")}),O&&(O.innerHTML=""),S&&(S.style.display="none",S.textContent=""),_&&(_.style.display="none");const e=j.closest(".consent-checkbox-wrapper");e&&e.classList.remove("field-invalid");const t=document.getElementById("consent-error");t&&(t.textContent=""),I.classList.remove("active"),I.style.display="none",G()};ve.addEventListener("click",()=>{ce(),W()});function je(){const e=document.getElementById("confetti-canvas");if(!e)return;const t=e.getContext("2d");e.width=e.parentElement.clientWidth,e.height=e.parentElement.clientHeight;let a=[];const i=["#8b5cf6","#d946ef","#06b6d4","#3b82f6","#ffffff"];for(let d=0;d<100;d++)a.push({x:Math.random()*e.width,y:Math.random()*e.height-e.height,r:Math.random()*6+4,d:Math.random()*e.height,color:i[Math.floor(Math.random()*i.length)],tilt:Math.random()*10-5,tiltAngleIncremental:Math.random()*.07+.02,tiltAngle:0,speed:Math.random()*3+2});let o=!0;setTimeout(()=>o=!1,6e3);function l(){t.clearRect(0,0,e.width,e.height);let d=!1;a.forEach((r,h)=>{r.tiltAngle+=r.tiltAngleIncremental,r.y+=r.speed,r.x+=Math.sin(r.tiltAngle)*.5,r.tilt=Math.sin(r.tiltAngle-h/3)*15,r.y<e.height&&(d=!0),t.beginPath(),t.lineWidth=r.r,t.strokeStyle=r.color,t.moveTo(r.x+r.tilt+r.r/2,r.y),t.lineTo(r.x+r.tilt,r.y+r.tilt+r.r/2),t.stroke()}),d&&(o||a.some(r=>r.y<e.height))?requestAnimationFrame(l):t.clearRect(0,0,e.width,e.height)}l()}}ue()});
