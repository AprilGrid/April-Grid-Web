const nodemailer = require('nodemailer');

module.exports = async function handler(req, res) {
    // Enable CORS for frontend requests
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const body = req.body;

        // 1. Validation & Sanitization
        const requiredFields = ['fullname', 'email', 'phone', 'role', 'skills', 'qualification', 'institution', 'grad_year', 'why_join', 'best_project', 'work_type'];
        const missingFields = requiredFields.filter(f => !body[f] || (typeof body[f] === 'string' && body[f].trim() === ''));

        if (missingFields.length > 0) {
            return res.status(400).json({ error: `Missing required fields: ${missingFields.join(', ')}` });
        }

        // Sanitize string helpers
        const clean = (val) => (typeof val === 'string' ? val.replace(/</g, "&lt;").replace(/>/g, "&gt;").trim() : val);

        const fullname = clean(body.fullname);
        const email = clean(body.email);
        const phone = clean(body.phone);
        const dob = clean(body.dob || 'Not provided');
        const gender = clean(body.gender || 'Not provided');
        const location = clean(body.location);
        const nationality = clean(body.nationality);
        const role = clean(body.role);
        const experience = parseInt(body.experience || 0);
        const company = clean(body.company || 'None');
        const position = clean(body.position || 'None');
        const expectedSalary = clean(body.expected_salary || 'Not specified');
        const noticePeriod = clean(body.notice_period || 'Not specified');
        const portfolioUrl = clean(body.portfolio_url || 'Not provided');
        const linkedinUrl = clean(body.linkedin_url || 'Not provided');
        const githubUrl = clean(body.github_url || 'Not provided');
        const skillsList = Array.isArray(body.skills) ? body.skills : (body.skills ? body.skills.split(',') : []);
        const qualification = clean(body.qualification);
        const institution = clean(body.institution);
        const gradYear = parseInt(body.grad_year);
        const whyJoin = clean(body.why_join);
        const bestProject = clean(body.best_project);
        const workType = clean(body.work_type);
        const remoteWork = body.remote_work ? 'Yes' : 'No';

        // 2. Setup SMTP Mail Transporter
        let transporter;
        let isUsingTestAccount = false;
        let previewUrl = null;

        const useSMTP = process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS;

        if (useSMTP) {
            transporter = nodemailer.createTransport({
                host: process.env.SMTP_HOST,
                port: parseInt(process.env.SMTP_PORT || '587'),
                secure: process.env.SMTP_PORT === '465',
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASS
                }
            });
        } else {
            // Development fallback: ephemeral Ethereal Sandbox SMTP
            console.log("No SMTP environment credentials detected. Creating ephemeral test account on smtp.ethereal.email...");
            try {
                const testAccount = await nodemailer.createTestAccount();
                transporter = nodemailer.createTransport({
                    host: "smtp.ethereal.email",
                    port: 587,
                    secure: false,
                    auth: {
                        user: testAccount.user,
                        pass: testAccount.pass
                    }
                });
                isUsingTestAccount = true;
            } catch (err) {
                console.error("Failed to create Ethereal SMTP test account on the fly:", err);
                return res.status(500).json({ error: 'Mail transport configuration failed. Please provide SMTP details.' });
            }
        }

        // 3. Parse Attachments (Base64 uploads)
        const attachments = [];

        const addAttachment = (fileData, defaultName) => {
            if (fileData && typeof fileData === 'object' && fileData.base64 && fileData.name) {
                const base64Data = fileData.base64.split('base64,')[1] || fileData.base64;
                attachments.push({
                    filename: clean(fileData.name),
                    content: Buffer.from(base64Data, 'base64')
                });
            }
        };

        addAttachment(body.profile_photo_file, 'profile_photo');
        addAttachment(body.resume_file, 'resume.pdf');
        addAttachment(body.portfolio_attachment_file, 'portfolio_file');
        addAttachment(body.showreel_file, 'showreel_file');

        // 4. Construct Structured HTML Email Content
        const htmlContent = `
            <div style="background-color: #030303; color: #ffffff; font-family: sans-serif; padding: 40px; border-radius: 8px; max-width: 650px; margin: 0 auto; border: 1px solid #1f1f23;">
                <div style="border-bottom: 2px solid #8b5cf6; padding-bottom: 20px; margin-bottom: 30px; text-align: center;">
                    <h1 style="color: #ffffff; text-transform: uppercase; letter-spacing: 2px; margin: 0; font-size: 24px;">April Grid</h1>
                    <p style="color: #8b5cf6; font-size: 14px; text-transform: uppercase; margin: 5px 0 0 0;">New Career Application</p>
                </div>

                <div style="margin-bottom: 30px;">
                    <h2 style="color: #06b6d4; font-size: 18px; text-transform: uppercase; border-bottom: 1px solid #1f1f23; padding-bottom: 8px; margin-bottom: 15px;">1. Candidate Profile</h2>
                    <table style="width: 100%; border-collapse: collapse; color: #a1a1aa; font-size: 14px;">
                        <tr><td style="padding: 6px 0; font-weight: bold; width: 140px; color: #ffffff;">Full Name:</td><td style="padding: 6px 0;">${fullname}</td></tr>
                        <tr><td style="padding: 6px 0; font-weight: bold; color: #ffffff;">Email Address:</td><td style="padding: 6px 0;"><a href="mailto:${email}" style="color: #06b6d4; text-decoration: none;">${email}</a></td></tr>
                        <tr><td style="padding: 6px 0; font-weight: bold; color: #ffffff;">Phone Number:</td><td style="padding: 6px 0;">${phone}</td></tr>
                        <tr><td style="padding: 6px 0; font-weight: bold; color: #ffffff;">Date of Birth:</td><td style="padding: 6px 0;">${dob}</td></tr>
                        <tr><td style="padding: 6px 0; font-weight: bold; color: #ffffff;">Gender:</td><td style="padding: 6px 0; text-transform: capitalize;">${gender}</td></tr>
                        <tr><td style="padding: 6px 0; font-weight: bold; color: #ffffff;">Location:</td><td style="padding: 6px 0;">${location}</td></tr>
                        <tr><td style="padding: 6px 0; font-weight: bold; color: #ffffff;">Nationality:</td><td style="padding: 6px 0;">${nationality}</td></tr>
                    </table>
                </div>

                <div style="margin-bottom: 30px;">
                    <h2 style="color: #06b6d4; font-size: 18px; text-transform: uppercase; border-bottom: 1px solid #1f1f23; padding-bottom: 8px; margin-bottom: 15px;">2. Professional Details</h2>
                    <table style="width: 100%; border-collapse: collapse; color: #a1a1aa; font-size: 14px;">
                        <tr><td style="padding: 6px 0; font-weight: bold; width: 140px; color: #ffffff;">Target Role:</td><td style="padding: 6px 0; color: #8b5cf6; font-weight: bold;">${role.toUpperCase()}</td></tr>
                        <tr><td style="padding: 6px 0; font-weight: bold; color: #ffffff;">Experience:</td><td style="padding: 6px 0;">${experience} Years</td></tr>
                        <tr><td style="padding: 6px 0; font-weight: bold; color: #ffffff;">Current Company:</td><td style="padding: 6px 0;">${company}</td></tr>
                        <tr><td style="padding: 6px 0; font-weight: bold; color: #ffffff;">Current Position:</td><td style="padding: 6px 0;">${position}</td></tr>
                        <tr><td style="padding: 6px 0; font-weight: bold; color: #ffffff;">Expected Salary:</td><td style="padding: 6px 0;">${expectedSalary}</td></tr>
                        <tr><td style="padding: 6px 0; font-weight: bold; color: #ffffff;">Notice Period:</td><td style="padding: 6px 0;">${noticePeriod}</td></tr>
                        <tr><td style="padding: 6px 0; font-weight: bold; color: #ffffff;">Work Preference:</td><td style="padding: 6px 0;">${workType} (Remote: ${remoteWork})</td></tr>
                    </table>
                </div>

                <div style="margin-bottom: 30px;">
                    <h2 style="color: #06b6d4; font-size: 18px; text-transform: uppercase; border-bottom: 1px solid #1f1f23; padding-bottom: 8px; margin-bottom: 15px;">3. Capabilities & Academics</h2>
                    <div style="margin-bottom: 15px;">
                        <strong style="display: block; margin-bottom: 6px; color: #ffffff; font-size: 14px;">Core Skills:</strong>
                        <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                            ${skillsList.map(s => `<span style="background-color: rgba(139, 92, 246, 0.15); border: 1px solid rgba(139, 92, 246, 0.3); color: #8b5cf6; padding: 4px 10px; border-radius: 4px; font-size: 12px; margin-right: 6px; margin-bottom: 6px; display: inline-block;">${s.trim()}</span>`).join('')}
                        </div>
                    </div>
                    <table style="width: 100%; border-collapse: collapse; color: #a1a1aa; font-size: 14px;">
                        <tr><td style="padding: 6px 0; font-weight: bold; width: 140px; color: #ffffff;">Highest Degree:</td><td style="padding: 6px 0; text-transform: capitalize;">${qualification}</td></tr>
                        <tr><td style="padding: 6px 0; font-weight: bold; color: #ffffff;">Institution:</td><td style="padding: 6px 0;">${institution}</td></tr>
                        <tr><td style="padding: 6px 0; font-weight: bold; color: #ffffff;">Graduation Year:</td><td style="padding: 6px 0;">${gradYear}</td></tr>
                    </table>
                </div>

                <div style="margin-bottom: 30px;">
                    <h2 style="color: #06b6d4; font-size: 18px; text-transform: uppercase; border-bottom: 1px solid #1f1f23; padding-bottom: 8px; margin-bottom: 15px;">4. Channels & Dossiers</h2>
                    <table style="width: 100%; border-collapse: collapse; color: #a1a1aa; font-size: 14px;">
                        <tr><td style="padding: 6px 0; font-weight: bold; width: 140px; color: #ffffff;">Portfolio:</td><td style="padding: 6px 0;"><a href="${portfolioUrl}" target="_blank" style="color: #06b6d4; text-decoration: none;">${portfolioUrl}</a></td></tr>
                        <tr><td style="padding: 6px 0; font-weight: bold; color: #ffffff;">LinkedIn:</td><td style="padding: 6px 0;"><a href="${linkedinUrl}" target="_blank" style="color: #06b6d4; text-decoration: none;">${linkedinUrl}</a></td></tr>
                        <tr><td style="padding: 6px 0; font-weight: bold; color: #ffffff;">GitHub:</td><td style="padding: 6px 0;"><a href="${githubUrl}" target="_blank" style="color: #06b6d4; text-decoration: none;">${githubUrl}</a></td></tr>
                    </table>
                </div>

                <div style="margin-bottom: 30px;">
                    <h2 style="color: #06b6d4; font-size: 18px; text-transform: uppercase; border-bottom: 1px solid #1f1f23; padding-bottom: 8px; margin-bottom: 15px;">5. Motivation & Project</h2>
                    <div style="margin-bottom: 15px;">
                        <strong style="display: block; margin-bottom: 6px; color: #ffffff; font-size: 14px;">Why join April Grid?</strong>
                        <p style="color: #a1a1aa; font-size: 13px; line-height: 1.5; margin: 0; background: #0c0c0e; padding: 12px; border-radius: 4px; white-space: pre-wrap;">${whyJoin}</p>
                    </div>
                    <div>
                        <strong style="display: block; margin-bottom: 6px; color: #ffffff; font-size: 14px;">Best Project Breakdown:</strong>
                        <p style="color: #a1a1aa; font-size: 13px; line-height: 1.5; margin: 0; background: #0c0c0e; padding: 12px; border-radius: 4px; white-space: pre-wrap;">${bestProject}</p>
                    </div>
                </div>

                <div style="border-top: 1px solid #1f1f23; padding-top: 15px; font-size: 11px; color: #52525b; text-align: center;">
                    Securely dispatched by April Grid Career Portal. Remote Client IP logs synced.
                </div>
            </div>
        `;

        // 5. Send Mail
        const mailOptions = {
            from: `"April Grid Portal" <${isUsingTestAccount ? transporter.options.auth.user : process.env.SMTP_USER}>`,
            to: 'hello@aprilgrid.com',
            subject: `[CAREERS] Application: ${fullname} - ${role.toUpperCase()}`,
            text: `April Grid Career Application\n\nCandidate: ${fullname}\nEmail: ${email}\nPhone: ${phone}\nApplied For: ${role}\nExperience: ${experience} yrs\nPortfolio: ${portfolioUrl}\n\nMotivation:\n${whyJoin}`,
            html: htmlContent,
            attachments: attachments
        };

        const info = await transporter.sendMail(mailOptions);

        if (isUsingTestAccount) {
            previewUrl = nodemailer.getTestMessageUrl(info);
            console.log(`Email successfully delivered! Sandbox URL: ${previewUrl}`);
        }

        return res.status(200).json({
            success: true,
            message: 'Application submitted successfully',
            previewUrl: previewUrl
        });

    } catch (error) {
        console.error("Serverless form processor error:", error);
        return res.status(500).json({ error: `Internal server failure: ${error.message}` });
    }
};
