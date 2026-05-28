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
        const hoverables = document.querySelectorAll('a, button, select, input, textarea, .filter-btn, .mobile-menu-toggle, .pill-radio, .switch-toggle, [role="button"]');
        
        hoverables.forEach(el => {
            // Remove previous to avoid duplicates
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
            body.classList.toggle('menu-open');
            mobileToggle.classList.toggle('active');
        });
    }

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            body.classList.remove('menu-open');
            if (mobileToggle) mobileToggle.classList.remove('active');
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
        
        let currentStep = 1;
        const totalSteps = 4;
        
        const stepLabels = [
            "Personal Profile",
            "Professional Dossier",
            "Skills & Education",
            "Media Uploads & Mission"
        ];

        // Suggestions DB for Skills Tag Input
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

        // Toggle Modal Open
        btnJoinNow.addEventListener('click', () => {
            modalOverlay.classList.add('active');
            body.classList.add('menu-open'); // disable background scrolling
            
            // Prefill with drafts if available
            prefillDraft();
            updateStepDisplay();
        });

        // Toggle Modal Close
        const closeModal = () => {
            modalOverlay.classList.remove('active');
            body.classList.remove('menu-open');
            
            // If they closed on success, reset the form completely
            if (successScreen.classList.contains('active')) {
                resetModalForm();
            }
        };

        btnClose.addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) closeModal();
        });

        // Multi-Step Display Updates
        function updateStepDisplay() {
            steps.forEach(step => {
                const s = parseInt(step.getAttribute('data-step'));
                if (s === currentStep) {
                    step.classList.add('active');
                } else {
                    step.classList.remove('active');
                }
            });

            // Adjust navigation control buttons
            if (currentStep === 1) {
                btnPrev.style.display = 'none';
                btnNext.style.display = 'block';
                btnSubmit.style.display = 'none';
            } else if (currentStep === totalSteps) {
                btnPrev.style.display = 'block';
                btnNext.style.display = 'none';
                btnSubmit.style.display = 'block';
            } else {
                btnPrev.style.display = 'block';
                btnNext.style.display = 'block';
                btnSubmit.style.display = 'none';
            }

            // Update sidebar elements
            currentStepNum.textContent = `0${currentStep}`;
            const pct = (currentStep / totalSteps) * 100;
            progressBarFill.style.width = `${pct}%`;
            progressLabel.textContent = stepLabels[currentStep - 1];
            
            // Update custom hover cursor links
            updateCursorHoverEvents();
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
                // Skip validating if field or its wrapper is hidden (conditional fields)
                let parent = field.closest('.form-group');
                if (parent && parent.style.display === 'none') return;
                let uploadWrapper = field.closest('#showreel-field-wrapper');
                if (uploadWrapper && uploadWrapper.style.display === 'none') return;

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
                        errMsg = "Please enter a valid URL (e.g. https://github.com).";
                    }
                }

                if (!isFieldValid) {
                    isValid = false;
                    if (parent) {
                        parent.classList.add('field-invalid');
                        const errSpan = parent.querySelector('.field-error');
                        if (errSpan) errSpan.textContent = errMsg;
                    }
                } else {
                    if (parent) {
                        parent.classList.remove('field-invalid');
                    }
                }
            });

            return isValid;
        }

        // Listen for user input typing to clear errors
        form.addEventListener('input', (e) => {
            const parent = e.target.closest('.form-group');
            if (parent && parent.classList.contains('field-invalid')) {
                parent.classList.remove('field-invalid');
            }
            saveDraft();
        });

        form.addEventListener('change', (e) => {
            const parent = e.target.closest('.form-group');
            if (parent && parent.classList.contains('field-invalid')) {
                parent.classList.remove('field-invalid');
            }
            saveDraft();
        });

        // Auto-save Local Drafts
        function saveDraft() {
            const formData = {};
            const elements = form.querySelectorAll('input, select, textarea');
            
            elements.forEach(el => {
                if (el.type === 'file' || el.type === 'radio') return;
                formData[el.name] = el.value;
            });
            
            // Radio work type
            const checkedRadio = form.querySelector('input[name="work_type"]:checked');
            if (checkedRadio) formData['work_type'] = checkedRadio.value;
            
            // Remote toggle
            const remoteToggle = document.getElementById('join-remote');
            if (remoteToggle) formData['remote_work'] = remoteToggle.checked;

            formData['skills'] = selectedSkills;
            formData['step'] = currentStep;

            localStorage.setItem('april_grid_draft', JSON.stringify(formData));
            
            // Pulse Synced status
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
                
                // Trigger conditional changes
                handleRoleConditionalFields();
            } catch (err) {
                console.error("Error prefilling application draft:", err);
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

            // Web Dev or UIUX Dev -> Show GitHub Profile url
            if (val === 'web-dev' || val === 'uiux-dev') {
                gitField.style.display = 'block';
                if (gitInput) gitInput.setAttribute('required', 'required');
            } else {
                gitField.style.display = 'none';
                if (gitInput) gitInput.removeAttribute('required');
            }

            // Cinematographer or Video Editor -> Show Showreel file upload
            if (val === 'cinematographer' || val === 'video-editor') {
                showreelField.style.display = 'block';
                if (showreelInput) showreelInput.setAttribute('required', 'required');
            } else {
                showreelField.style.display = 'none';
                if (showreelInput) showreelInput.removeAttribute('required');
            }
            
            updateCursorHoverEvents();
        }

        // Skills tag suggestion searchable actions
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

            // Prevent enter key submitting form prematurely
            skillsSearchInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    const text = skillsSearchInput.value.trim();
                    if (text && !selectedSkills.includes(text)) {
                        addSkill(text);
                    }
                }
            });

            // Hide suggestions panel on document click
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
                tag.innerHTML = `${s} <span>&times;</span>`;
                tag.querySelector('span').addEventListener('click', () => removeSkill(s));
                skillsTagsContainer.appendChild(tag);
            });

            // Update hidden input to support HTML native validation
            if (hiddenSkillsInput) {
                hiddenSkillsInput.value = selectedSkills.join(',');
                // Dispatch event to clear potential validation state
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

            // Highlight dropzone on drag states
            ['dragenter', 'dragover'].forEach(eventName => {
                zone.addEventListener(eventName, (e) => {
                    e.preventDefault();
                    zone.classList.add('dragover');
                }, false);
            });

            ['dragleave', 'drop'].forEach(eventName => {
                zone.addEventListener(eventName, (e) => {
                    e.preventDefault();
                    zone.classList.remove('dragover');
                }, false);
            });

            zone.addEventListener('drop', (e) => {
                const dt = e.dataTransfer;
                const files = dt.files;
                if (files.length > 0) {
                    input.files = files;
                    handleFileUpload(zone, input, preview);
                }
            }, false);

            input.addEventListener('change', () => {
                handleFileUpload(zone, input, preview);
            });
        });

        function handleFileUpload(zone, input, preview) {
            const files = input.files;
            if (files.length === 0) return;
            
            const file = files[0];
            zone.classList.add('has-file');

            // Find name error wrap and clear it
            const wrapper = zone.closest('.upload-box-wrapper');
            if (wrapper) wrapper.classList.remove('field-invalid');

            // Render Preview Layout
            preview.innerHTML = '';
            
            const fileInfo = document.createElement('div');
            fileInfo.className = 'preview-file-info';
            fileInfo.textContent = file.name;
            preview.appendChild(fileInfo);

            // Thumbnail check if image profile photo
            if (file.type.startsWith('image/')) {
                const img = document.createElement('img');
                img.style.width = '50px';
                img.style.height = '50px';
                img.style.objectFit = 'cover';
                img.style.borderRadius = '50%';
                img.style.marginBottom = '6px';
                
                const reader = new FileReader();
                reader.onload = (e) => {
                    img.src = e.target.result;
                };
                reader.readAsDataURL(file);
                preview.insertBefore(img, fileInfo);
            }

            const removeBtn = document.createElement('button');
            removeBtn.type = 'button';
            removeBtn.className = 'preview-remove-btn';
            removeBtn.textContent = 'Remove';
            
            removeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                input.value = '';
                zone.classList.remove('has-file');
                preview.innerHTML = '';
            });
            preview.appendChild(removeBtn);
            
            updateCursorHoverEvents();
        }

        // Form Submit Handler
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            if (!validateStep(currentStep)) return;

            // Trigger submit loading state
            btnSubmit.classList.add('loading');
            btnSubmit.setAttribute('disabled', 'disabled');
            
            // Telemetry sync simulation (1.5s)
            setTimeout(() => {
                // Fetch submission payload details
                const application = {
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
                    submitted_at: new Date().toISOString()
                };

                // Store securely in localStorage list
                let apps = [];
                const existing = localStorage.getItem('april_grid_applications');
                if (existing) {
                    try {
                        apps = JSON.parse(existing);
                    } catch (_) {}
                }
                apps.push(application);
                localStorage.setItem('april_grid_applications', JSON.stringify(apps));

                // Clear Draft data
                localStorage.removeItem('april_grid_draft');

                // Toggle Success Screen layout
                successScreen.classList.add('active');
                runConfetti();

                // Reset loading button states
                btnSubmit.classList.remove('loading');
                btnSubmit.removeAttribute('disabled');
            }, 1500);
        });

        // Success Return Actions
        const resetModalForm = () => {
            form.reset();
            selectedSkills = [];
            currentStep = 1;
            
            // Clear files preview states
            dropzones.forEach(zone => {
                zone.classList.remove('has-file');
                const preview = zone.querySelector('.preview-area');
                if (preview) preview.innerHTML = '';
                const input = zone.querySelector('.file-input');
                if (input) input.value = '';
            });

            // Reset labels displays
            if (skillsTagsContainer) skillsTagsContainer.innerHTML = '';
            
            successScreen.classList.remove('active');
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
