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
document.addEventListener('DOMContentLoaded', renderTeams);
