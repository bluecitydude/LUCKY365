// Hackathon teams data with project information and tech-styled SVG icons
const hackathonTeams = [
    {
        teamName: "4QBits",
        members: "Nitin Daswani, Khush Soni, Jatin, Hinal Parmar",
        projectName: "Workshop Management System",
        description: "Smart platform for managing workshops, registrations and communication.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line><path d="M8 14h.01"></path><path d="M12 14h.01"></path><path d="M16 14h.01"></path><path d="M8 18h.01"></path><path d="M12 18h.01"></path><path d="M16 18h.01"></path></svg>`, // Calendar/Schedule
        link: "https://workshop-management.netlify.app/"
    },
    {
        teamName: "ResTecSol",
        members: "Tejendra Purohit, Jasleen Kaur Handa, Shahid Ansari, Tushar Sharma",
        projectName: "Resource & Task Management System",
        description: "A productivity and workflow solution for teams and organizations.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect><path d="M9 14l2 2 4-4"></path><path d="M9 19h6"></path><path d="M9 10h6"></path></svg>`, // Checklist
        link: "https://tms-restecsol.lovable.app/auth"
    },
    {
        teamName: "Future Forge",
        members: "Kapil Bhati, Jorawar, Ayush Upadhyay, Manali Jain",
        projectName: "RSGFOL Platform",
        description: "Next-generation digital solution for collaborative innovation.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`, // Global/Network
        link: "https://rsgfol.readdy.co"
    },
    {
        teamName: "The Tech Titans",
        members: "Neelima Maheshwari, Krishna Khubchandani, Aryan Soni, Nishant Rupani",
        projectName: "Intern Match",
        description: "AI-powered engine that matches students with ideal internships & placements.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M22 12h-4"></path><path d="M6 12H2"></path><path d="M12 6V2"></path><path d="M12 22v-4"></path></svg>`, // Target/Focus
        link: "https://v0-intern-match-og.vercel.app/"
    },
    {
        teamName: "The Seekers",
        members: "Bhavya Veerwani, Isha Soni, Garv Prajapat, Priyanshu Gander",
        projectName: "Campus Lost & Found",
        description: "Centralized platform to recover lost items inside college campuses.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><path d="M11 8v6"></path><path d="M8 11h6"></path></svg>`, // Search/Radar
        link: "https://campus-lost-nd-found.lovable.app"
    },
    {
        teamName: "Routine Risers",
        members: "Yagya Kansara, Sahil Jangid, Ashish Rankawat, Nishant Vaishnav",
        projectName: "HabitBreakers",
        description: "AI-based personal habit building and productivity improvement assistant.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`, // Heartbeat/Activity
        link: "https://habitbreakers.lovable.app"
    },
    {
        teamName: "AI Marauders",
        members: "Garvita Goyal, Dimpal Sharma, Arbaz Khan, Palak Dharival",
        projectName: "Result Management System",
        description: "Comprehensive platform for managing academic results, transcripts, and student performance tracking.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`, // Bar chart
        link: "https://faculty-fluence-suite.lovable.app"
    },
    {
        teamName: "SkillForge",
        members: "Pragya Gehlot, Ritu Kushwaha, Vineet Rawal, Kishan Lal",
        projectName: "SkillForge",
        description: "An advanced platform dedicated to skill development and professional growth through interactive learning.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`, // Hammer/Wrench (Forging/Skill)
        link: "https://skll.lovable.app/"
    }
];

// Theme Management - Multi-Theme Support
const themeSlider = document.getElementById('themeSlider');
const sliderHandle = document.querySelector('.slider-handle');
const themeLabels = document.querySelectorAll('.theme-label');
const sliderContainer = document.querySelector('.theme-slider-container');
const body = document.body;

// Theme Sequence
const themes = ['dark', 'light', 'matrix', 'cyber'];
let currentThemeIndex = 0;
let isDragging = false;

// Initialize Theme
const savedTheme = localStorage.getItem('theme');
const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
    currentThemeIndex = Math.max(0, themes.indexOf(savedTheme));
} else if (systemPrefersLight) {
    body.setAttribute('data-theme', 'light');
    currentThemeIndex = 1;
}

// Update Slider UI
function updateSliderUI(index) {
    const percentage = (index / (themes.length - 1)) * 100;
    sliderHandle.style.left = `${percentage}%`;

    themeLabels.forEach((label, i) => {
        if (i === index) label.classList.add('active');
        else label.classList.remove('active');
    });
}

// Initial Slider Positioning
updateSliderUI(currentThemeIndex);

// Theme Change with Flash Effect
function setTheme(index) {
    if (index === currentThemeIndex) return;

    currentThemeIndex = index;
    const newTheme = themes[index];

    // Add flash animation
    body.classList.remove('theme-changing');
    void body.offsetWidth; // Trigger reflow
    body.classList.add('theme-changing');

    // Update attributes
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateSliderUI(index);

    // Remove class after animation
    setTimeout(() => body.classList.remove('theme-changing'), 500);
}

// Interaction Handlers
const handleInteraction = (clientX) => {
    const rect = themeSlider.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const index = Math.round((x / rect.width) * (themes.length - 1));
    setTheme(index);
};

if (themeSlider && sliderContainer) {
    document.addEventListener('mousedown', (e) => {
        // Check if the click is within the unified container block
        if (sliderContainer.contains(e.target)) {
            isDragging = true;
            handleInteraction(e.clientX);
        }
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) handleInteraction(e.clientX);
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });

    // Touch Support for the whole block
    sliderContainer.addEventListener('touchstart', (e) => {
        isDragging = true;
        handleInteraction(e.touches[0].clientX);
    }, { passive: true });

    document.addEventListener('touchmove', (e) => {
        if (isDragging) handleInteraction(e.touches[0].clientX);
    }, { passive: true });

    document.addEventListener('touchend', () => {
        isDragging = false;
    });
}

// Label Click Handling
themeLabels.forEach((label, index) => {
    label.addEventListener('click', (e) => {
        e.stopPropagation();
        setTheme(index);
    });
});

// Render team cards dynamically with tooltip on hover
function renderTeams() {
    const container = document.getElementById('teamContainer');

    hackathonTeams.forEach((team, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.animationDelay = `${index * 100}ms`;

        // Create card with project icon and name only
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

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    initSplash(); // Run Splash Screen first
    renderTeams();
    initCursor();
    initTypingEffect();
});

// Tech Splash Screen Logic
function initSplash() {
    const splash = document.getElementById('splash-screen');
    const body = document.body;

    // Disable scrolling
    body.style.overflow = 'hidden';

    // Wait for animation
    setTimeout(() => {
        splash.classList.add('fade-out');
        body.style.overflow = ''; // Enable scrolling

        // Remove from DOM after fade out
        setTimeout(() => {
            splash.style.display = 'none';
        }, 500);
    }, 2800); // Wait slightly longer than animation (2.5s)
}

// Typing Text Animation
function initTypingEffect() {
    const typingText = document.getElementById('typing-text');
    if (!typingText) return;

    const phrases = [
        "Initializing hackathon_module...",
        "Loading project_data.db...",
        "Status: System Optimal",
        "Connection: Secure",
        "Access: Authorized"
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
            typeSpeed = 30; // Faster deleting
        } else {
            typingText.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 80; // Normal typing
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            // Finished typing phrase
            isDeleting = true;
            typeSpeed = 2000; // Pause at end to read
        } else if (isDeleting && charIndex === 0) {
            // Finished deleting
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeSpeed = 500; // Pause before new phrase
        }

        setTimeout(type, typeSpeed);
    }

    // Start the typing loop
    type();
}

// Custom Cursor Logic
function initCursor() {
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    const body = document.body;

    // Move cursor
    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        // Slight delay for trailing effect
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: 'forwards' });
    });

    // Global Click Animation (Animate ANYTHING clicked)
    window.addEventListener('mousedown', (e) => {
        const target = e.target;

        // Don't animate the body, html or cursor itself
        if (target !== document.body &&
            target !== document.documentElement &&
            !target.classList.contains('cursor-dot') &&
            !target.classList.contains('cursor-outline')) {

            // Apply a quick scale pop
            target.animate([
                { transform: 'scale(1)' },
                { transform: 'scale(0.95)' },
                { transform: 'scale(1)' }
            ], {
                duration: 200,
                easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            });
        }
    });

    // Hover Effects for Interactive Elements
    const interactiveElements = document.querySelectorAll('a, button, .card, input, textarea');

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            body.classList.add('hovering');
        });

        el.addEventListener('mouseleave', () => {
            body.classList.remove('hovering');
        });

    });

    // Click Ripple Effect
    window.addEventListener('click', (e) => {
        const ripple = document.createElement('div');
        ripple.className = 'click-ripple';
        ripple.style.left = `${e.clientX}px`;
        ripple.style.top = `${e.clientY}px`;

        document.querySelector('.click-effects-container').appendChild(ripple);

        // Remove ripple after animation
        ripple.addEventListener('animationend', () => {
            ripple.remove();
        });
    });
}
