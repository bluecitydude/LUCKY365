// Hackathon teams data with project information and relevant icons
const hackathonTeams = [
    {
        teamName: "4QBits",
        members: "Nitin Daswani, Khush Soni, Jatin, Hinal Parmar",
        projectName: "Workshop Management System",
        description: "Smart platform for managing workshops, registrations and communication.",
        icon: "📚", // Workshop management icon
        link: "https://workshop-management.netlify.app/"
    },
    {
        teamName: "ResTecSol",
        members: "Tejendra Purohit, Jasleen Kaur Handa, Shahid Ansari, Tushar Sharma",
        projectName: "Resource & Task Management System",
        description: "A productivity and workflow solution for teams and organizations.",
        icon: "📋", // Task management icon
        link: "https://tms-restecsol.lovable.app/auth"
    },
    {
        teamName: "Future Forge",
        members: "Kapil Bhati, Jorawar, Ayush Upadhyay, Manali Jain",
        projectName: "RSGFOL Platform",
        description: "Next-generation digital solution for collaborative innovation.",
        icon: "🔧", // Innovation/platform development icon
        link: "https://rsgfol.readdy.co"
    },
    {
        teamName: "The Tech Titans",
        members: "Neelima Maheshwari, Krishna Khubchandani, Aryan Soni, Nishant Rupani",
        projectName: "Intern Match",
        description: "AI-powered engine that matches students with ideal internships & placements.",
        icon: "🎓", // Education/internship matching icon
        link: "https://v0-intern-match-og.vercel.app/"
    },
    {
        teamName: "The Seekers",
        members: "Bhavya Veerwani, Isha Soni, Garv Prajapat, Priyanshu Gander",
        projectName: "Campus Lost & Found",
        description: "Centralized platform to recover lost items inside college campuses.",
        icon: "🔎", // Lost & found search icon
        link: "https://campus-lost-nd-found.lovable.app"
    },
    {
        teamName: "Routine Risers",
        members: "Yagya Kansara, Sahil Jangid, Ashish Rankawat, Nishant Vaishnav",
        projectName: "HabitBreakers",
        description: "AI-based personal habit building and productivity improvement assistant.",
        icon: "💪", // Habit building/personal growth icon
        link: "https://habitbreakers.lovable.app"
    },
    {
        teamName: "AI Marauders",
        members: "Garvita Goyal, Dimpal Sharma, Arbaz Khan, Palak Dharival",
        projectName: "Result Management System",
        description: "Comprehensive platform for managing academic results, transcripts, and student performance tracking.",
        icon: "📊", // Result/data management icon
        link: "https://faculty-fluence-suite.lovable.app"
    }
];

// Theme Management
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference or system preference
const savedTheme = localStorage.getItem('theme');
const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
} else if (systemPrefersLight) {
    body.setAttribute('data-theme', 'light');
}

// Listen for system theme changes (updates automatically if user hasn't overridden)
window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        body.setAttribute('data-theme', e.matches ? 'light' : 'dark');
    }
});

// Toggle Theme Event
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

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
        "Showcasing the next generation of digital innovation",
        "Initializing Lucky365 Hackathon Module...",
        "Loading top-tier student projects...",
        "System optimal. Innovation status: 100%.",
        "Analyzing code... Compilation successful.",
        "Welcome to the future of technology."
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

        // Add pop animation on click
        el.addEventListener('click', function () {
            this.classList.remove('click-pop');
            void this.offsetWidth; // Trigger reflow
            this.classList.add('click-pop');

            // Remove class after animation
            setTimeout(() => {
                this.classList.remove('click-pop');
            }, 300);
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
