import './style.css';
import { loadComponents } from './components.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Inject Global Dynamic Structure (Header, Footer, and Join Modal)
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

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        cursorDot.style.left = `${mouseX}px`;
        cursorDot.style.top = `${mouseY}px`;
    });

    function animateCursor() {
        const lerpFactor = 0.15;
        ringX += (mouseX - ringX) * lerpFactor;
        ringY += (mouseY - ringY) * lerpFactor;

        cursorRing.style.left = `${ringX}px`;
        cursorRing.style.top = `${ringY}px`;

        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    function updateCursorHoverEvents() {
        const hoverables = document.querySelectorAll('a, button, select, input, textarea, .filter-btn, .mobile-menu-toggle, .pill-radio, .switch-toggle, .upload-dropzone, [role="button"]');
        
        hoverables.forEach(el => {
            el.removeEventListener('mouseenter', addCursorHover);
            el.removeEventListener('mouseleave', removeCursorHover);
            
            el.addEventListener('mouseenter', addCursorHover);
            el.addEventListener('mouseleave', removeCursorHover);
        });
    }

    function addCursorHover() {
        document.body.classList.add('cursor-hover');
    }

    function removeCursorHover() {
        document.body.classList.remove('cursor-hover');
    }
    
    updateCursorHoverEvents();
    window.updateCursorHoverEvents = updateCursorHoverEvents;

    // 4. Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const body = document.body;
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            const expanded = mobileToggle.getAttribute('aria-expanded') === 'true' || false;
            mobileToggle.setAttribute('aria-expanded', !expanded);
            body.classList.toggle('menu-open');
            mobileToggle.classList.toggle('active');
        });
    }

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            body.classList.remove('menu-open');
            if (mobileToggle) {
                mobileToggle.classList.remove('active');
                mobileToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });
    
    const currentPath = window.location.pathname;
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href') === currentPath || 
            (currentPath === '/' && link.getAttribute('href') === '/index.html') ||
            (currentPath.endsWith('/') && link.getAttribute('href') === '/index.html')) {
            link.classList.add('active');
        }
    });

    // 5. Spotlight Hover Effect & 3D Cards Tilt
    const panels = document.querySelectorAll('.glass-panel, .expert-card, .hud-stat-card, .founder-card, .office-coordinate-card, .join-modal-window');
    
    panels.forEach(panel => {
        panel.addEventListener('mousemove', (e) => {
            const rect = panel.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            panel.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`);
            panel.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`);

            if (panel.classList.contains('glass-panel') || panel.classList.contains('expert-card')) {
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((centerY - y) / centerY) * 5; 
                const rotateY = ((x - centerX) / centerX) * 5;
                
                panel.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
            }
        });

        panel.addEventListener('mouseleave', () => {
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
            const deltaX = e.clientX - centerX;
            const deltaY = e.clientY - centerY;
            
            magnet.style.transform = `translate(${deltaX * 0.25}px, ${deltaY * 0.25}px)`;
            
            const text = magnet.querySelector('span');
            if (text) {
                text.style.transform = `translate(${deltaX * 0.1}px, ${deltaY * 0.1}px)`;
            }
        });

        magnet.addEventListener('mouseleave', () => {
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
                entry.target.querySelectorAll('.reveal-item').forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('visible');
                    }, index * 100);
                });
                revealObserver.unobserve(entry.target);
            }
        });
    }, revealOptions);

    document.querySelectorAll('.fade-up').forEach(el => revealObserver.observe(el));
    document.querySelectorAll('.reveal-wrapper').forEach(el => revealObserver.observe(el));

    function triggerInitialReveals() {
        document.querySelectorAll('.hero-section .fade-up, .hero-section .reveal-item').forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('visible');
            }, index * 150);
        });
    }

    // 8. Navbar Scroll State
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

    // ==========================================================================
    // JOIN NOW INTERACTIVE MODAL FUNCTIONALITY
    // ==========================================================================
    function setupJoinModal() {
        const btnJoinNow = document.getElementById('btn-join-now');
        const modalOverlay = document.getElementById('join-modal');
        if (!btnJoinNow || !modalOverlay) return;

        const btnClose = modalOverlay.querySelector('.join-modal-close');
        const form = document.getElementById('join-application-form');
        const steps = modalOverlay.querySelectorAll('.form-step');
        const btnPrev = document.getElementById('join-btn-prev');
        const btnNext = document.getElementById('join-btn-next');
        const btnSubmit = document.getElementById('join-btn-submit');
        const successScreen = document.getElementById('join-success-screen');
        const btnSuccessClose = document.getElementById('join-success-close');
        
        const currentStepNum = document.getElementById('current-step-num');
        const progressBarFill = document.getElementById('progress-bar-fill');
        const progressLabel = modalOverlay.querySelector('.progress-step-label');
        const draftSyncStatus = document.getElementById('draft-sync-status');
        const formSubmitError = document.getElementById('form-submit-error');
        const uploadLimitError = document.getElementById('upload-limit-error');
        const consentCheckbox = document.getElementById('join-consent');
        
        let currentStep = 1;
        const totalSteps = 4;
        let isSubmitting = false;
        
        const stepLabels = [
            "Personal Profile",
            "Professional Information",
            "Portfolio & Uploads",
            "Review & Submit"
        ];

        const skillsSuggestionsList = [
            "React", "Vue", "Angular", "Svelte", "Node.js", "Three.js", "WebGL", "GSAP", "Framer Motion", "Vite", "TypeScript",
            "SAP ABAP", "SAP HANA", "SAP Fiori", "SAP UI5", "SAP Consultant",
            "Figma", "Adobe XD", "Sketch", "UI/UX Design", "Wireframing", "Prototyping", "Design System",
            "Cinema 4D", "Blender", "Maya", "3ds Max", "ZBrush", "3D Modelling", "Texturing", "Rendering",
            "DaVinci Resolve", "Adobe Premiere Pro", "After Effects", "Final Cut Pro", "Video Editing", "Color Grading",
            "Cinematography", "Camera Operation", "Lighting Design", "VFX", "Generative AI", "Midjourney", "Stable Diffusion",
            "Python", "JavaScript", "HTML5", "CSS3", "SASS", "PostgreSQL", "MongoDB", "Tailwind CSS", "Git"
        ];
        
        let selectedSkills = [];
        
        let uploadedFiles = {
            profile_photo_file: null,
            resume_file: null,
            portfolio_attachment_file: null,
            showreel_file: null
        };

        // Open Modal
        btnJoinNow.addEventListener('click', () => {
            modalOverlay.classList.add('active');
            body.classList.add('menu-open');
            
            // Prefill with drafts if available
            prefillDraft();
            updateStepDisplay();
        });

        // Close Modal
        const closeModal = () => {
            if (isSubmitting) return; // Prevent closing while API request runs
            modalOverlay.classList.remove('active');
            body.classList.remove('menu-open');
            
            if (successScreen.style.display === 'flex') {
                resetModalForm();
            }
        };

        btnClose.addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) closeModal();
        });

        // Keyboard accessibility: Escape to Close
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
                closeModal();
            }
        });

        // Block premature Enter submit inside inputs
        form.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
                e.preventDefault();
                
                if (e.target.id === 'join-skills-search') {
                    const text = e.target.value.trim();
                    if (text && !selectedSkills.includes(text)) {
                        addSkill(text);
                    }
                } else if (currentStep < totalSteps) {
                    btnNext.click();
                }
            }
        });

        // Toggle Submit Button Disabled state based on Consent Checkbox
        if (consentCheckbox) {
            consentCheckbox.addEventListener('change', () => {
                const consentParent = consentCheckbox.closest('.consent-checkbox-wrapper');
                if (consentParent) consentParent.classList.remove('field-invalid');
                
                if (consentCheckbox.checked) {
                    btnSubmit.removeAttribute('disabled');
                } else {
                    btnSubmit.setAttribute('disabled', 'disabled');
                }
            });
        }

        // Multi-Step Display Updates
        function updateStepDisplay() {
            steps.forEach(step => {
                const s = parseInt(step.getAttribute('data-step'));
                if (s === currentStep) {
                    step.style.display = 'flex';
                    step.classList.add('active');
                    
                    const focusable = step.querySelectorAll('input, select, textarea, [tabindex="0"]');
                    if (focusable.length > 0) {
                        focusable[0].focus();
                    }
                } else {
                    step.style.display = 'none';
                    step.classList.remove('active');
                }
            });

            if (currentStep === 1) {
                btnPrev.style.display = 'none';
                btnNext.style.display = 'block';
                btnSubmit.style.display = 'none';
            } else if (currentStep === totalSteps) {
                btnPrev.style.display = 'block';
                btnNext.style.display = 'none';
                btnSubmit.style.display = 'block';
                
                // Consent logic validation initialization
                if (consentCheckbox && !consentCheckbox.checked) {
                    btnSubmit.setAttribute('disabled', 'disabled');
                } else {
                    btnSubmit.removeAttribute('disabled');
                }
                
                // Compile and render live entries onto Review page
                renderSummaryPage();
            } else {
                btnPrev.style.display = 'block';
                btnNext.style.display = 'block';
                btnSubmit.style.display = 'none';
            }

            currentStepNum.textContent = `0${currentStep}`;
            const pct = (currentStep / totalSteps) * 100;
            progressBarFill.style.width = `${pct}%`;
            progressLabel.textContent = stepLabels[currentStep - 1];
            
            const formContainer = modalOverlay.querySelector('.join-modal-form-container');
            if (formContainer) formContainer.scrollTop = 0;
            
            const modalWindow = modalOverlay.querySelector('.join-modal-window');
            if (modalWindow) modalWindow.scrollTop = 0;

            updateCursorHoverEvents();
        }

        // Generate application summary dynamically
        function renderSummaryPage() {
            const reviewPersonal = document.getElementById('review-personal');
            const reviewProfessional = document.getElementById('review-professional');
            const reviewUploads = document.getElementById('review-uploads');
            
            if (!reviewPersonal || !reviewProfessional || !reviewUploads) return;
            
            const valOf = (id) => {
                const el = document.getElementById(id);
                return el ? (el.value.trim() || 'Not provided') : 'Not provided';
            };

            const valOfSelect = (id) => {
                const el = document.getElementById(id);
                if (!el) return 'Not provided';
                const opt = el.options[el.selectedIndex];
                return opt ? (opt.text || 'Not provided') : 'Not provided';
            };

            // Populate Personal Profile Summary
            reviewPersonal.innerHTML = `
                <div class="review-item-row"><span class="review-item-label">Name</span><span class="review-item-value" title="${valOf('join-fullname')}">${valOf('join-fullname')}</span></div>
                <div class="review-item-row"><span class="review-item-label">Email</span><span class="review-item-value" title="${valOf('join-email')}">${valOf('join-email')}</span></div>
                <div class="review-item-row"><span class="review-item-label">Phone</span><span class="review-item-value" title="${valOf('join-phone')}">${valOf('join-phone')}</span></div>
                <div class="review-item-row"><span class="review-item-label">DOB</span><span class="review-item-value">${valOf('join-dob')}</span></div>
                <div class="review-item-row"><span class="review-item-label">Gender</span><span class="review-item-value">${valOfSelect('join-gender')}</span></div>
                <div class="review-item-row"><span class="review-item-label">Location</span><span class="review-item-value" title="${valOf('join-location')}">${valOf('join-location')}</span></div>
                <div class="review-item-row"><span class="review-item-label">Nationality</span><span class="review-item-value" title="${valOf('join-nationality')}">${valOf('join-nationality')}</span></div>
            `;

            // Populate Professional Info Summary
            reviewProfessional.innerHTML = `
                <div class="review-item-row"><span class="review-item-label">Target Role</span><span class="review-item-value">${valOfSelect('join-role')}</span></div>
                <div class="review-item-row"><span class="review-item-label">Experience</span><span class="review-item-value">${valOf('join-experience')} Years</span></div>
                <div class="review-item-row"><span class="review-item-label">Current Company</span><span class="review-item-value" title="${valOf('join-company')}">${valOf('join-company')}</span></div>
                <div class="review-item-row"><span class="review-item-label">Current Position</span><span class="review-item-value" title="${valOf('join-position')}">${valOf('join-position')}</span></div>
                <div class="review-item-row"><span class="review-item-label">Expected Salary</span><span class="review-item-value">${valOf('join-expected-salary')}</span></div>
                <div class="review-item-row"><span class="review-item-label">Notice Period</span><span class="review-item-value">${valOf('join-notice-period')}</span></div>
                <div class="review-item-row"><span class="review-item-label">Portfolio URL</span><span class="review-item-value" title="${valOf('join-portfolio')}">${valOf('join-portfolio')}</span></div>
                <div class="review-item-row"><span class="review-item-label">LinkedIn</span><span class="review-item-value" title="${valOf('join-linkedin')}">${valOf('join-linkedin')}</span></div>
                ${document.getElementById('github-field-wrapper').style.display !== 'none' ? `
                <div class="review-item-row"><span class="review-item-label">GitHub</span><span class="review-item-value" title="${valOf('join-github')}">${valOf('join-github')}</span></div>
                ` : ''}
            `;

            // Populate Uploads & Skills Summary
            const getFileName = (fileObj) => fileObj ? fileObj.name : 'No file uploaded';
            
            reviewUploads.innerHTML = `
                <div class="review-item-row"><span class="review-item-label">Degree</span><span class="review-item-value">${valOfSelect('join-qualification')}</span></div>
                <div class="review-item-row"><span class="review-item-label">Institution</span><span class="review-item-value" title="${valOf('join-institution')}">${valOf('join-institution')}</span></div>
                <div class="review-item-row"><span class="review-item-label">Grad Year</span><span class="review-item-value">${valOf('join-gradyear')}</span></div>
                <div class="review-item-row"><span class="review-item-label">Skills List</span><span class="review-item-value" title="${selectedSkills.join(', ')}">${selectedSkills.join(', ') || 'None selected'}</span></div>
                <div class="review-item-row"><span class="review-item-label">Photo</span><span class="review-item-value" title="${getFileName(uploadedFiles.profile_photo_file)}">${getFileName(uploadedFiles.profile_photo_file)}</span></div>
                <div class="review-item-row"><span class="review-item-label">Resume PDF</span><span class="review-item-value" title="${getFileName(uploadedFiles.resume_file)}">${getFileName(uploadedFiles.resume_file)}</span></div>
                <div class="review-item-row"><span class="review-item-label">Portfolio ZIP</span><span class="review-item-value" title="${getFileName(uploadedFiles.portfolio_attachment_file)}">${getFileName(uploadedFiles.portfolio_attachment_file)}</span></div>
                ${document.getElementById('showreel-field-wrapper').style.display !== 'none' ? `
                <div class="review-item-row"><span class="review-item-label">Showreel</span><span class="review-item-value" title="${getFileName(uploadedFiles.showreel_file)}">${getFileName(uploadedFiles.showreel_file)}</span></div>
                ` : ''}
            `;
        }

        // Navigation actions
        btnNext.addEventListener('click', () => {
            if (validateStep(currentStep)) {
                if (currentStep < totalSteps) {
                    currentStep++;
                    updateStepDisplay();
                    saveDraft();
                }
            }
        });

        btnPrev.addEventListener('click', () => {
            if (currentStep > 1) {
                currentStep--;
                updateStepDisplay();
            }
        });

        // Validation for each step
        function validateStep(stepNum) {
            let isValid = true;
            const currentStepPanel = modalOverlay.querySelector(`.form-step[data-step="${stepNum}"]`);
            if (!currentStepPanel) return true;

            const fields = currentStepPanel.querySelectorAll('input[required], select[required], textarea[required]');
            
            fields.forEach(field => {
                let parent = field.closest('.form-group');
                if (parent && parent.style.display === 'none') return;
                
                let uploadWrapper = field.closest('#showreel-field-wrapper');
                if (uploadWrapper && uploadWrapper.style.display === 'none') return;

                let uploadBoxWrapper = field.closest('.upload-box-wrapper');

                const val = field.value.trim();
                let isFieldValid = true;
                let errMsg = "This field is required.";

                if (!val) {
                    isFieldValid = false;
                } else if (field.type === 'email') {
                    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!re.test(val)) {
                        isFieldValid = false;
                        errMsg = "Please enter a valid email address.";
                    }
                } else if (field.type === 'url') {
                    try {
                        new URL(val);
                    } catch (_) {
                        isFieldValid = false;
                        errMsg = "Please enter a valid URL.";
                    }
                }

                if (!isFieldValid) {
                    isValid = false;
                    if (parent) {
                        parent.classList.add('field-invalid');
                        const errSpan = parent.querySelector('.field-error');
                        if (errSpan) errSpan.textContent = errMsg;
                    } else if (uploadBoxWrapper) {
                        uploadBoxWrapper.classList.add('field-invalid');
                        const errSpan = uploadBoxWrapper.querySelector('.field-error');
                        if (errSpan) errSpan.textContent = errMsg;
                    }
                } else {
                    if (parent) {
                        parent.classList.remove('field-invalid');
                    } else if (uploadBoxWrapper) {
                        uploadBoxWrapper.classList.remove('field-invalid');
                    }
                }
            });

            // Specific Skills validation inside Step 3
            if (stepNum === 3 && selectedSkills.length === 0) {
                isValid = false;
                const skillsGroup = hiddenSkillsInput.closest('.form-group');
                if (skillsGroup) {
                    skillsGroup.classList.add('field-invalid');
                    const errSpan = skillsGroup.querySelector('.field-error');
                    if (errSpan) errSpan.textContent = "Please add at least one core skill.";
                }
            }

            // Total Upload Size Limit validation inside Step 3
            if (stepNum === 3 && !checkTotalFileSize()) {
                isValid = false;
            }

            return isValid;
        }

        // Real-time input validation
        form.querySelectorAll('input, select, textarea').forEach(el => {
            el.addEventListener('input', () => {
                const parent = el.closest('.form-group');
                if (parent && parent.classList.contains('field-invalid')) {
                    parent.classList.remove('field-invalid');
                }
                saveDraft();
            });

            el.addEventListener('change', () => {
                const parent = el.closest('.form-group');
                if (parent && parent.classList.contains('field-invalid')) {
                    parent.classList.remove('field-invalid');
                }
                saveDraft();
            });

            el.addEventListener('blur', () => {
                validateField(el);
            });
        });

        function validateField(field) {
            let parent = field.closest('.form-group');
            if (!parent || parent.style.display === 'none' || !field.hasAttribute('required')) return;
            
            const val = field.value.trim();
            let isFieldValid = true;
            let errMsg = "This field is required.";

            if (!val) {
                isFieldValid = false;
            } else if (field.type === 'email') {
                const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!re.test(val)) {
                    isFieldValid = false;
                    errMsg = "Invalid email format.";
                }
            } else if (field.type === 'url') {
                try {
                    new URL(val);
                } catch (_) {
                    isFieldValid = false;
                    errMsg = "Invalid URL layout.";
                }
            }

            if (!isFieldValid) {
                parent.classList.add('field-invalid');
                const errSpan = parent.querySelector('.field-error');
                if (errSpan) errSpan.textContent = errMsg;
            } else {
                parent.classList.remove('field-invalid');
            }
        }

        // File upload size validation
        function checkTotalFileSize() {
            let total = 0;
            Object.values(uploadedFiles).forEach(f => {
                if (f) total += f.size;
            });
            
            const maxLimit = 4 * 1024 * 1024; // 4MB Vercel Max payload limit
            if (total > maxLimit) {
                if (uploadLimitError) {
                    uploadLimitError.textContent = `Upload limit exceeded: ${(total / (1024 * 1024)).toFixed(2)}MB uploaded (Max 4.0MB combined). Please upload smaller files or provide links.`;
                    uploadLimitError.style.display = 'block';
                }
                return false;
            } else {
                if (uploadLimitError) {
                    uploadLimitError.style.display = 'none';
                }
                return true;
            }
        }

        // Auto-save drafts
        function saveDraft() {
            if (isSubmitting) return;
            
            const formData = {};
            const elements = form.querySelectorAll('input, select, textarea');
            
            elements.forEach(el => {
                if (el.type === 'file' || el.type === 'radio' || el.type === 'checkbox') return;
                formData[el.name] = el.value;
            });
            
            const checkedRadio = form.querySelector('input[name="work_type"]:checked');
            if (checkedRadio) formData['work_type'] = checkedRadio.value;
            
            const remoteToggle = document.getElementById('join-remote');
            if (remoteToggle) formData['remote_work'] = remoteToggle.checked;

            formData['skills'] = selectedSkills;
            formData['step'] = currentStep;

            localStorage.setItem('april_grid_draft', JSON.stringify(formData));
            
            if (draftSyncStatus) {
                draftSyncStatus.textContent = "SAVED";
                draftSyncStatus.classList.remove('text-gradient-violet');
                draftSyncStatus.classList.add('text-gradient-cyan');
                setTimeout(() => {
                    if (draftSyncStatus) {
                        draftSyncStatus.textContent = "ONLINE";
                        draftSyncStatus.classList.remove('text-gradient-cyan');
                        draftSyncStatus.classList.add('text-gradient-violet');
                    }
                }, 1000);
            }
        }

        function prefillDraft() {
            const draftRaw = localStorage.getItem('april_grid_draft');
            if (!draftRaw) return;

            try {
                const draft = JSON.parse(draftRaw);
                
                Object.keys(draft).forEach(key => {
                    const el = form.querySelector(`[name="${key}"]`);
                    if (el && el.type !== 'file') {
                        el.value = draft[key];
                    }
                });

                if (draft.work_type) {
                    const radio = form.querySelector(`input[name="work_type"][value="${draft.work_type}"]`);
                    if (radio) radio.checked = true;
                }

                if (draft.remote_work !== undefined) {
                    const remoteToggle = document.getElementById('join-remote');
                    if (remoteToggle) remoteToggle.checked = draft.remote_work;
                }

                if (draft.skills && Array.isArray(draft.skills)) {
                    selectedSkills = draft.skills;
                    renderSkillsTags();
                }

                if (draft.step) {
                    currentStep = draft.step;
                }
                
                handleRoleConditionalFields();
            } catch (err) {
                console.error("Error prefilling draft:", err);
            }
        }

        // Conditional Field Actions
        const selectRole = document.getElementById('join-role');
        if (selectRole) {
            selectRole.addEventListener('change', handleRoleConditionalFields);
        }

        function handleRoleConditionalFields() {
            const val = selectRole.value;
            const gitField = document.getElementById('github-field-wrapper');
            const showreelField = document.getElementById('showreel-field-wrapper');
            
            const gitInput = document.getElementById('join-github');
            const showreelInput = document.getElementById('join-showreel');

            if (val === 'web-dev' || val === 'uiux-dev') {
                gitField.style.display = 'block';
                if (gitInput) gitInput.setAttribute('required', 'required');
            } else {
                gitField.style.display = 'none';
                if (gitInput) {
                    gitInput.removeAttribute('required');
                    gitInput.value = '';
                }
                const gitParent = gitInput ? gitInput.closest('.form-group') : null;
                if (gitParent) gitParent.classList.remove('field-invalid');
            }

            if (val === 'cinematographer' || val === 'video-editor') {
                showreelField.style.display = 'block';
                if (showreelInput) showreelInput.setAttribute('required', 'required');
            } else {
                showreelField.style.display = 'none';
                if (showreelInput) {
                    showreelInput.removeAttribute('required');
                    showreelInput.value = '';
                }
                uploadedFiles.showreel_file = null;
                const showreelDropzone = document.getElementById('dropzone-showreel');
                if (showreelDropzone) {
                    showreelDropzone.classList.remove('has-file');
                    const preview = showreelDropzone.querySelector('.preview-area');
                    if (preview) preview.innerHTML = '';
                }
                const showreelParent = showreelField.closest('.upload-box-wrapper');
                if (showreelParent) showreelParent.classList.remove('field-invalid');
            }
            
            checkTotalFileSize();
            updateCursorHoverEvents();
        }

        // Skills suggestions and tag actions
        const skillsSearchInput = document.getElementById('join-skills-search');
        const skillsSuggestionsPanel = document.getElementById('skills-suggestions');
        const skillsTagsContainer = document.getElementById('skills-tags-container');
        const hiddenSkillsInput = document.getElementById('join-skills-hidden');

        if (skillsSearchInput && skillsSuggestionsPanel) {
            skillsSearchInput.addEventListener('input', () => {
                const query = skillsSearchInput.value.toLowerCase().trim();
                skillsSuggestionsPanel.innerHTML = '';
                
                if (!query) {
                    skillsSuggestionsPanel.style.display = 'none';
                    return;
                }

                const matches = skillsSuggestionsList.filter(s => 
                    s.toLowerCase().includes(query) && !selectedSkills.includes(s)
                );

                if (matches.length > 0) {
                    matches.forEach(m => {
                        const div = document.createElement('div');
                        div.textContent = m;
                        div.setAttribute('role', 'option');
                        div.addEventListener('click', () => {
                            addSkill(m);
                        });
                        skillsSuggestionsPanel.appendChild(div);
                    });
                    skillsSuggestionsPanel.style.display = 'block';
                } else {
                    skillsSuggestionsPanel.style.display = 'none';
                }
            });

            document.addEventListener('click', (e) => {
                if (e.target !== skillsSearchInput) {
                    skillsSuggestionsPanel.style.display = 'none';
                }
            });
        }

        function addSkill(skill) {
            if (selectedSkills.includes(skill)) return;
            selectedSkills.push(skill);
            skillsSearchInput.value = '';
            skillsSuggestionsPanel.style.display = 'none';
            renderSkillsTags();
            saveDraft();
        }

        function removeSkill(skill) {
            selectedSkills = selectedSkills.filter(s => s !== skill);
            renderSkillsTags();
            saveDraft();
        }

        function renderSkillsTags() {
            if (!skillsTagsContainer) return;
            skillsTagsContainer.innerHTML = '';
            selectedSkills.forEach(s => {
                const tag = document.createElement('div');
                tag.className = 'skill-tag';
                tag.innerHTML = `${s} <span aria-label="Remove skill ${s}">&times;</span>`;
                tag.querySelector('span').addEventListener('click', () => removeSkill(s));
                skillsTagsContainer.appendChild(tag);
            });

            if (hiddenSkillsInput) {
                hiddenSkillsInput.value = selectedSkills.join(',');
                const parent = hiddenSkillsInput.closest('.form-group');
                if (parent && selectedSkills.length > 0) {
                    parent.classList.remove('field-invalid');
                }
            }
            updateCursorHoverEvents();
        }

        // Uploads drag-and-drop bindings
        const dropzones = modalOverlay.querySelectorAll('.upload-dropzone');
        
        dropzones.forEach(zone => {
            const input = zone.querySelector('.file-input');
            const preview = zone.querySelector('.preview-area');
            if (!input || !preview) return;

            zone.addEventListener('keydown', (e) => {
                if (e.key === ' ' || e.key === 'Enter') {
                    e.preventDefault();
                    input.click();
                }
            });

            zone.addEventListener('click', () => {
                input.click();
            });

            ['dragenter', 'dragover'].forEach(eventName => {
                zone.addEventListener(eventName, (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    zone.classList.add('dragover');
                }, false);
            });

            ['dragleave', 'drop'].forEach(eventName => {
                zone.addEventListener(eventName, (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    zone.classList.remove('dragover');
                }, false);
            });

            zone.addEventListener('drop', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const dt = e.dataTransfer;
                const files = dt.files;
                if (files.length > 0) {
                    input.files = files;
                    handleFileUpload(zone, input, preview);
                }
            }, false);

            input.addEventListener('change', (e) => {
                e.stopPropagation();
                handleFileUpload(zone, input, preview);
            });
        });

        function handleFileUpload(zone, input, preview) {
            const files = input.files;
            if (files.length === 0) return;
            
            const file = files[0];
            zone.classList.add('has-file');

            const wrapper = zone.closest('.upload-box-wrapper');
            if (wrapper) wrapper.classList.remove('field-invalid');

            // Render Preview Layout
            preview.innerHTML = '';
            
            const fileInfo = document.createElement('div');
            fileInfo.className = 'preview-file-info';
            fileInfo.textContent = `${file.name} (${(file.size / 1024).toFixed(1)} KB)`;
            preview.appendChild(fileInfo);

            const reader = new FileReader();
            reader.onload = (e) => {
                const base64 = e.target.result;
                uploadedFiles[input.name + "_file"] = {
                    base64: base64,
                    name: file.name,
                    size: file.size
                };
                
                if (file.type.startsWith('image/')) {
                    const img = document.createElement('img');
                    img.style.width = '44px';
                    img.style.height = '44px';
                    img.style.objectFit = 'cover';
                    img.style.borderRadius = '50%';
                    img.style.marginBottom = '6px';
                    img.src = base64;
                    preview.insertBefore(img, fileInfo);
                }
                
                checkTotalFileSize();
                saveDraft();
            };
            reader.readAsDataURL(file);

            const removeBtn = document.createElement('button');
            removeBtn.type = 'button';
            removeBtn.className = 'preview-remove-btn';
            removeBtn.textContent = 'Remove';
            removeBtn.setAttribute('aria-label', `Remove uploaded file ${file.name}`);
            
            removeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                input.value = '';
                uploadedFiles[input.name + "_file"] = null;
                zone.classList.remove('has-file');
                preview.innerHTML = '';
                checkTotalFileSize();
                saveDraft();
            });
            preview.appendChild(removeBtn);
            
            updateCursorHoverEvents();
        }

        // Form Submit Handler
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            if (isSubmitting) return;

            // Consent validation Check
            if (consentCheckbox && !consentCheckbox.checked) {
                const consentParent = consentCheckbox.closest('.consent-checkbox-wrapper');
                if (consentParent) {
                    consentParent.classList.add('field-invalid');
                    const errSpan = document.getElementById('consent-error');
                    if (errSpan) errSpan.textContent = "You must consent to terms to submit your application.";
                }
                return;
            }

            if (!validateStep(4)) return;

            isSubmitting = true;
            btnSubmit.classList.add('loading');
            btnSubmit.setAttribute('disabled', 'disabled');
            btnPrev.setAttribute('disabled', 'disabled');
            btnClose.setAttribute('disabled', 'disabled');
            
            if (formSubmitError) {
                formSubmitError.style.display = 'none';
                formSubmitError.textContent = '';
            }

            try {
                const payload = {
                    fullname: document.getElementById('join-fullname').value,
                    email: document.getElementById('join-email').value,
                    phone: document.getElementById('join-phone').value,
                    dob: document.getElementById('join-dob').value,
                    gender: document.getElementById('join-gender').value,
                    location: document.getElementById('join-location').value,
                    nationality: document.getElementById('join-nationality').value,
                    role: document.getElementById('join-role').value,
                    experience: document.getElementById('join-experience').value,
                    company: document.getElementById('join-company').value,
                    position: document.getElementById('join-position').value,
                    expected_salary: document.getElementById('join-expected-salary').value,
                    notice_period: document.getElementById('join-notice-period').value,
                    portfolio_url: document.getElementById('join-portfolio').value,
                    linkedin_url: document.getElementById('join-linkedin').value,
                    github_url: document.getElementById('join-github') ? document.getElementById('join-github').value : '',
                    skills: selectedSkills,
                    qualification: document.getElementById('join-qualification').value,
                    institution: document.getElementById('join-institution').value,
                    grad_year: document.getElementById('join-gradyear').value,
                    why_join: document.getElementById('join-why').value,
                    best_project: document.getElementById('join-best-project').value,
                    work_type: form.querySelector('input[name="work_type"]:checked').value,
                    remote_work: document.getElementById('join-remote').checked,
                    
                    profile_photo_file: uploadedFiles.profile_photo_file,
                    resume_file: uploadedFiles.resume_file,
                    portfolio_attachment_file: uploadedFiles.portfolio_attachment_file,
                    showreel_file: uploadedFiles.showreel_file
                };

                const response = await fetch('/api/apply', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                });

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.error || 'Server rejected your application. Please check fields.');
                }

                // SUCCESS STATE TRIGGER ONLY ON TRUE CONFIRMED RESPONSE!
                localStorage.removeItem('april_grid_draft'); 
                
                successScreen.style.display = 'flex';
                // Force layout reflow
                void successScreen.offsetWidth;
                successScreen.classList.add('active');
                runConfetti();

            } catch (err) {
                console.error("Submission API Error:", err);
                if (formSubmitError) {
                    formSubmitError.textContent = `Submission Error: ${err.message}. Please try again.`;
                    formSubmitError.style.display = 'block';
                    
                    const formContainer = modalOverlay.querySelector('.join-modal-form-container');
                    if (formContainer) formContainer.scrollTop = formContainer.scrollHeight;
                    
                    const modalWindow = modalOverlay.querySelector('.join-modal-window');
                    if (modalWindow) modalWindow.scrollTop = modalWindow.scrollHeight;
                }
            } finally {
                isSubmitting = false;
                btnSubmit.classList.remove('loading');
                btnSubmit.removeAttribute('disabled');
                btnPrev.removeAttribute('disabled');
                btnClose.removeAttribute('disabled');
            }
        });

        // Success Return Actions
        const resetModalForm = () => {
            form.reset();
            selectedSkills = [];
            currentStep = 1;
            
            uploadedFiles = {
                profile_photo_file: null,
                resume_file: null,
                portfolio_attachment_file: null,
                showreel_file: null
            };

            dropzones.forEach(zone => {
                zone.classList.remove('has-file');
                const preview = zone.querySelector('.preview-area');
                if (preview) preview.innerHTML = '';
                const input = zone.querySelector('.file-input');
                if (input) input.value = '';
            });

            if (skillsTagsContainer) skillsTagsContainer.innerHTML = '';
            if (formSubmitError) {
                formSubmitError.style.display = 'none';
                formSubmitError.textContent = '';
            }
            if (uploadLimitError) {
                uploadLimitError.style.display = 'none';
            }
            
            const consentParent = consentCheckbox.closest('.consent-checkbox-wrapper');
            if (consentParent) consentParent.classList.remove('field-invalid');
            const consentErrSpan = document.getElementById('consent-error');
            if (consentErrSpan) consentErrSpan.textContent = '';

            // Strict Close resets display to none
            successScreen.classList.remove('active');
            successScreen.style.display = 'none';
            
            updateStepDisplay();
        };

        btnSuccessClose.addEventListener('click', () => {
            resetModalForm();
            closeModal();
        });

        // Confetti Canvas Particle generator
        function runConfetti() {
            const canvas = document.getElementById('confetti-canvas');
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            canvas.width = canvas.parentElement.clientWidth;
            canvas.height = canvas.parentElement.clientHeight;
            
            let particles = [];
            const colors = ['#8b5cf6', '#d946ef', '#06b6d4', '#3b82f6', '#ffffff'];
            
            for (let i = 0; i < 100; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height - canvas.height,
                    r: Math.random() * 6 + 4,
                    d: Math.random() * canvas.height,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    tilt: Math.random() * 10 - 5,
                    tiltAngleIncremental: Math.random() * 0.07 + 0.02,
                    tiltAngle: 0,
                    speed: Math.random() * 3 + 2
                });
            }
            
            let active = true;
            setTimeout(() => active = false, 6000); 
            
            function draw() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                
                let remaining = false;
                particles.forEach((p, idx) => {
                    p.tiltAngle += p.tiltAngleIncremental;
                    p.y += p.speed;
                    p.x += Math.sin(p.tiltAngle) * 0.5;
                    p.tilt = Math.sin(p.tiltAngle - idx / 3) * 15;
                    
                    if (p.y < canvas.height) remaining = true;
                    
                    ctx.beginPath();
                    ctx.lineWidth = p.r;
                    ctx.strokeStyle = p.color;
                    ctx.moveTo(p.x + p.tilt + p.r / 2, p.y);
                    ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 2);
                    ctx.stroke();
                });
                
                if (remaining && (active || particles.some(p => p.y < canvas.height))) {
                    requestAnimationFrame(draw);
                } else {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                }
            }
            draw();
        }
    }

    setupJoinModal();
});
