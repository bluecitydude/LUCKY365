// Hackathon teams data with project information and tech-styled SVG icons
const hackathonTeams = [
    {
        teamName: "ResTecSol",
        members: "Tejendra Purohit, Jasleen Kaur Handa, Shahid Ansari, Tushar Sharma",
        projectName: "Talent Bloom",
        description: "Find your talent and improve it in simple ways with AI-powered guidance.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>`,
        link: "https://restecsol-talent-bloom.netlify.app"
    },
    {
        teamName: "4QBits",
        members: "Nitin Daswani, Khush Soni, Jatin, Hinal Parmar",
        projectName: "Workshop Management System",
        description: "Smart platform for managing workshops, registrations and communication.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line><path d="M8 14h.01"></path><path d="M12 14h.01"></path><path d="M16 14h.01"></path><path d="M8 18h.01"></path><path d="M12 18h.01"></path><path d="M16 18h.01"></path></svg>`,
        link: "https://4qbits-wms.vercel.app"
    },
    {
        teamName: "The Tech Titans",
        members: "Neelima Maheshwari, Krishna Khubchandani, Aryan Soni, Nishant Rupani",
        projectName: "Intern Match",
        description: "AI-powered engine that matches students with ideal internships & placements.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M22 12h-4"></path><path d="M6 12H2"></path><path d="M12 6V2"></path><path d="M12 22v-4"></path></svg>`,
        link: "https://the-tech-titans-intern-match.netlify.app"
    },
    {
        teamName: "DevDominators",
        members: "Innovative Students Team",
        projectName: "AI Study Planner",
        description: "Smart AI-powered study planner that optimizes your learning schedule for maximum efficiency.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`,
        link: "https://devdominators-ai-study-planner.netlify.app"
    },
    {
        teamName: "Routine Risers",
        members: "Yagya Kansara (Leader), Nishant Vaishnav, Ashish Rankawat, Sahil Jangid",
        projectName: "Habit Building AI Coach",
        description: "AI-powered personal coach for building healthy habits and boosting daily productivity.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`,
        link: "https://routine-risers-habit-builder.netlify.app/"
    }
];

// Theme Management - Simple Light/Dark Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Initialize Theme
const savedTheme = localStorage.getItem('theme') || 'dark';
body.setAttribute('data-theme', savedTheme);

// Theme Toggle Handler
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);

        // Add flash animation
        body.classList.remove('theme-changing');
        void body.offsetWidth; // Trigger reflow
        body.classList.add('theme-changing');

        setTimeout(() => body.classList.remove('theme-changing'), 400);
    });
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    initSplash();
    renderTeams();
    initTypingEffect();
    initParallaxEffect();
    initMouseTrackingGlow();
    initScrollAnimations();
});

// Parallax 3D effect on mouse move
function initParallaxEffect() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
    });
}

// Mouse tracking glow effect
function initMouseTrackingGlow() {
    const container = document.querySelector('.container');
    if (!container) return;

    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Create a subtle glow that follows the cursor
    const glow = document.createElement('div');
    glow.style.cssText = `
        position: fixed;
        width: 300px;
        height: 300px;
        background: radial-gradient(circle, rgba(50, 130, 184, 0.1) 0%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 0;
        top: -150px;
        left: -150px;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    document.body.appendChild(glow);

    document.addEventListener('mousemove', (e) => {
        glow.style.top = (e.clientY - 150) + 'px';
        glow.style.left = (e.clientX - 150) + 'px';
        glow.style.opacity = '0.5';
    });

    document.addEventListener('mouseleave', () => {
        glow.style.opacity = '0';
    });
}

// Scroll animations
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = `fadeInScale 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`;
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px'
    });

    document.querySelectorAll('.card').forEach(card => {
        observer.observe(card);
    });
}

// Render team cards dynamically
function renderTeams() {
    const container = document.getElementById('teamContainer');
    if (!container) return;

    hackathonTeams.forEach((team, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.animationDelay = `${index * 100}ms`;

        card.innerHTML = `
            <div class="card-display">
                <div class="card-icon">${team.icon}</div>
                <h2 class="project-title-display">${team.projectName}</h2>
                <p class="project-desc-display">${team.description}</p>
            </div>
            
            <div class="tooltip-content">
                <div class="tooltip-header">
                    <div class="label">Team</div>
                    <h3 class="team-name-tooltip">${team.teamName}</h3>
                </div>
                
                <div class="members-block">
                    <div class="label">Team Members</div>
                    <div class="members-list">${team.members}</div>
                </div>

                <a href="${team.link}" target="_blank" rel="noopener noreferrer" class="btn-visit">
                    Visit Project
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                </a>
            </div>
        `;

        container.appendChild(card);
    });
}

// Minimal Splash Screen Logic
function initSplash() {
    const splash = document.getElementById('splash-screen');
    const body = document.body;

    if (!splash) return;

    body.style.overflow = 'hidden';

    setTimeout(() => {
        splash.classList.add('fade-out');
        body.style.overflow = '';

        setTimeout(() => {
            splash.remove();
        }, 1000);
    }, 2000);
}

// Typing Text Animation
function initTypingEffect() {
    const typingText = document.getElementById('typing-text');
    if (!typingText) return;

    const phrases = [
        "Initializing platform...",
        "System: Optimal",
        "Mode: Professional",
        "Ready to innovate."
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 50;

    function type() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            typingText.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 30;
        } else {
            typingText.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 80;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typeSpeed = 2000;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    type();
}
