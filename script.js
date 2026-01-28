/* ================= DATA ================= */
const PROFILE = {
    name: "Md. Aftab Uddin",
    title: "Senior Unity Engineer",
    // New Summary added here:
    about: "7+ years of delivering Games, Modular systems, and AR/VR experiences. Contributed to a studio with 470M+ downloads. Expert in modular architecture, monetization SDKs, and performance optimization to deliver smooth performance and scalable systems.",
    email: "aftab.uddin.games@gmail.com",
    socials: {
      linkedin: "https://www.linkedin.com/in/aftab-games/",
      github: "https://github.com/aftab-games"
    },
    image: "assets/profile.jpeg"
};
  
const SKILLS = [
    {
      category: "Core",
      items: ["Unity", "C#", "OOP", "Design Patterns (SOLID, Observer, Command, Factory)"]
    },
    {
      category: "Performance & Optimization",
      items: ["Unity Profiler", "Frame Debugger", "Memory and Performance optimization", "Addressables"]
    },
    {
      category: "Tools & Pipeline",
      items: ["VContainer (DI)", "UniTask", "DOTween", "PrimeTween", "Gitflow", "CI/CD"]
    },
    {
      category: "SDKs & LiveOps",
      items: ["Firebase", "AdMob", "GameAnalytics", "Facebook", "IAP"]
    },
    {
      category: "Platforms",
      items: ["Android", "iOS", "WebGL"]
    }
];

const PROJECTS = [
    {
      id: "rolling-race",
      title: "Rolling Race 3D",
      role: "Lead Gameplay Engineer",
      description: "Delivered core physics-based rolling mechanics, enemy AI, level systems, and UI integration for a hyper-casual race experience. Impact: Improved average session time and retention through responsive controls and dynamic levels.",
      mediaSrc: "assets/rolling-race.gif",
      orientation: "portrait",
      links: [
        { url: "https://play.google.com/store/apps/details?id=com.hg.rollingrace", type: "google-play" },
        { url: "https://apps.apple.com/kh/app/rolling-race-3d/id6470433345", type: "app-store" }
      ],
      techStack: ["Unity", "C#", "Physics Systems", "UI", "Game Analytics", "AdMob/Facebook"]
    },
    {
      id: "pack-the-house",
      title: "Pack The House",
      role: "Lead Gameplay Engineer",
      description: "Built modular systems for item interactions, multi-stage mechanics, and monetization hooks. Impact: Enhanced player engagement by structuring scalable game loops and satisfying simulation feedbacks.",
      mediaSrc: "assets/pack-the-house.gif",
      orientation: "portrait",
      links: [
        { url: "https://play.google.com/store/apps/details?id=build.hg.packthehouse", type: "google-play" },
        { url: "https://apps.apple.com/kh/app/pack-the-house/id1659261967", type: "app-store" }
      ],
      techStack: ["Unity Gameplay Architecture", "UI", "Ads Integration", "Modular systems"]
    },
    {
      id: "wondering-hero",
      title: "Wondering Hero",
      role: "Lead Gameplay Engineer",
      description: "Designed a robust character controller, adaptive enemy systems, and collectible mechanics. Impact: Increased session length significantly through engaging risk-reward progression and polished game feel.",
      mediaSrc: "assets/wondering-hero.gif",
      orientation: "portrait",
      links: [
        { url: "https://play.google.com/store/apps/details?id=com.hg.wonderinghero", type: "google-play" },
        { url: "https://apps.apple.com/kh/app/wondering-hero/id6470435642", type: "app-store" }
      ],
      techStack: ["Unity", "C#", "Level Design", "Ads/Analytics SDKs"]
    },
    {
      id: "color-and-grow",
      title: "Color and Grow",
      role: "Gameplay Programmer, Level Designer",
      description: "Engineered a shader-driven ASMR experience where world geometry dynamically populates based on player proximity. Optimized rendering for low-end devices while maintaining high-fidelity visual progression.",
      mediaSrc: "assets/color-and-grow.gif",
      orientation: "portrait",
      links: [
        { url: "https://play.google.com/store/apps/details?id=com.hg.colorandgrow", type: "google-play" },
        { url: "https://apps.apple.com/kh/app/color-and-grow/id1606149239", type: "app-store" }
      ],
      techStack: ["Unity", "Shaders", "Procedural Generation", "Optimization"]
    },
    {
      id: "ball-count-evolution",
      title: "Ball Count Evolution",
      role: "Gameplay Programmer",
      description: "Implemented mathematical gate logic and crowd evolution mechanics using high-performance object pooling. Optimized the rendering pipeline to handle hundreds of active agents simultaneously without frame drops.",
      mediaSrc: "assets/ball-count-evolution.gif",
      orientation: "portrait",
      links: [],
      techStack: ["Unity", "Object Pooling", "Math Logic", "Crowd Simulation"]
    },
    {
      id: "magic-match",
      title: "Magic Match Card Puzzle",
      role: "Game Developer",
      description: "Developed a memory-optimized card matching system with complex state management for puzzle logic. Integrated reward loops and progression systems to boost ad-viewing retention metrics.",
      mediaSrc: "assets/magic-match.gif",
      orientation: "portrait",
      links: [],
      techStack: ["Unity", "State Management", "Memory Optimization", "UI/UX"]
    },
    {
      id: "draw-shape",
      title: "Draw and Find The Shape",
      role: "Game Developer",
      description: "Built a custom gesture recognition algorithm to accurately detect user-drawn patterns against cluttered backgrounds. Refined detection thresholds to minimize player frustration and ensure smooth inputs.",
      mediaSrc: "assets/draw-shape.gif",
      orientation: "portrait",
      links: [],
      techStack: ["Unity", "Pattern Recognition", "Input Systems", "Algorithms"]
    },
    {
      id: "sprint-race",
      title: "Sprint Race",
      role: "Game Developer",
      description: "Programmed competitive AI agents with rubber-banding mechanics to maintain race tension. Implemented smooth camera tracking and speed boost VFX to enhance the sense of velocity.",
      mediaSrc: "assets/sprint-race.gif",
      orientation: "portrait",
      links: [],
      techStack: ["Unity", "AI Navigation", "Camera Systems", "VFX"]
    },
    {
      id: "jet-rider",
      title: "Jet Rider",
      role: "Game Developer",
      description: "Simulated fuel-dependent flight physics and collision detection systems. Tuned control sensitivity for a 'tough-but-fair' difficulty curve that challenges player precision.",
      mediaSrc: "assets/jet-rider.gif",
      orientation: "portrait",
      links: [],
      techStack: ["Unity", "Physics", "Fuel Systems", "Control Tuning"]
    },
    {
      id: "high-heels-dunk",
      title: "High Heels Dunk",
      role: "Game Developer",
      description: "Solved complex character stacking physics where geometry changes dynamically during gameplay. Implemented Inverse Kinematics (IK) adjustments to ensure realistic animation blending during stack growth.",
      mediaSrc: "assets/high-heels-dunk.gif",
      orientation: "portrait",
      links: [],
      techStack: ["Unity", "Inverse Kinematics", "Dynamic Physics", "Animation"]
    },
    {
      id: "roof-bike",
      title: "Roof Bike Stunt",
      role: "Game Developer",
      description: "Fine-tuned rigidbody vehicle physics for arcade-style stunt control across complex rooftop geometries. Designed 'fail-fun' scenarios and ragdoll transitions to encourage replayability.",
      mediaSrc: "assets/roof-bike.gif",
      orientation: "portrait",
      links: [],
      techStack: ["Unity", "WheelCollider", "Ragdoll Physics", "Level Design"]
    },
    {
      id: "physiotrack",
      title: "Physiotrack",
      role: "System & Game Developer",
      description: "Built sensor-linked UI and evaluation tools for physical rehabilitation using MS-Kinect. Created real-time report generation systems and secure backend synchronization for patient data.",
      mediaSrc: "assets/physiotrack.gif", 
      orientation: "landscape",
      links: [],
      techStack: ["Unity", "MS-Kinect", "Embedded Systems", "Healthcare Tech"]
    }
];

/* ================= ICONS (SVG Strings) ================= */
const ICONS = {
    GooglePlay: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85M21.66,10.87L18.55,12.64L15.31,13.63L15.34,13.61L15.39,13.56L15.43,13.51L21.66,13.13C22.13,12.85 22.13,12.15 21.66,11.87M14.54,11.14L6.05,2.66L16.81,8.88"/></svg>`,
    AppStore: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.86-1.09 1.54-2.56 1.35-4.05-1.31.05-2.92.91-3.86 2.02-.78.91-1.46 2.38-1.28 3.95 1.45.11 2.93-.83 3.79-1.92"/></svg>`,
    GitHub: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`
};

/* ================= LOGIC TO RENDER HTML ================= */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Setup Profile Data
    document.getElementById('profile-title').textContent = PROFILE.title;
    
    // NEW: Inject the About Summary
    const aboutElement = document.getElementById('profile-about');
    if(aboutElement) aboutElement.textContent = PROFILE.about;

    document.getElementById('email-link').href = `mailto:${PROFILE.email}`;
    document.getElementById('linkedin-link').href = PROFILE.socials.linkedin;
    document.getElementById('github-link').href = PROFILE.socials.github;
    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('footer-name').textContent = PROFILE.name;
    document.getElementById('profile-image').src = PROFILE.image;

    // 2. Render Skills
    const skillsContainer = document.getElementById('skills-container');
    SKILLS.forEach(skillGroup => {
        const skillHTML = `
            <div class="bg-brand-dark p-8 rounded-2xl border border-gray-800 hover:border-brand-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/5 group">
                <h4 class="text-xl font-bold text-brand-light mb-6 border-l-4 border-brand-accent pl-4 group-hover:text-white transition-colors">
                    ${skillGroup.category}
                </h4>
                <div class="flex flex-wrap gap-3">
                    ${skillGroup.items.map(item => `
                        <span class="px-3 py-1.5 bg-gray-800 text-gray-400 text-sm rounded-lg font-medium border border-gray-700 hover:text-brand-accent hover:border-brand-accent/50 transition-colors cursor-default">
                            ${item}
                        </span>
                    `).join('')}
                </div>
            </div>
        `;
        skillsContainer.innerHTML += skillHTML;
    });

    // 3. Render Projects
    const projectsContainer = document.getElementById('projects-container');
    PROJECTS.forEach((project, index) => {
        const isEven = index % 2 === 0;
        const isPortrait = project.orientation === 'portrait';
        const directionClass = !isEven ? 'md:flex-row-reverse' : '';
        const mediaClass = isPortrait 
            ? 'w-full max-w-[280px] aspect-[9/16]' 
            : 'w-full aspect-video';

        // Generate Links HTML
        let linksHTML = '';
        if (project.links.length > 0) {
            linksHTML = '<div class="flex gap-4 justify-center md:justify-start pt-2">';
            project.links.forEach(link => {
                let icon = '';
                if(link.type === 'google-play') icon = ICONS.GooglePlay;
                if(link.type === 'app-store') icon = ICONS.AppStore;
                if(link.type === 'github') icon = ICONS.GitHub;

                linksHTML += `
                    <a href="${link.url}" target="_blank" rel="noopener noreferrer"
                       class="p-2 bg-gray-800 rounded-lg hover:bg-brand-accent hover:text-brand-dark transition-all duration-300 group">
                       ${icon}
                    </a>
                `;
            });
            linksHTML += '</div>';
        }

        // Generate Tech Stack HTML
        const techStackHTML = project.techStack.map(tech => 
            `<span class="px-3 py-1 bg-brand-surface border border-gray-700 rounded-full text-xs text-brand-accent font-medium">${tech}</span>`
        ).join('');

        const projectHTML = `
            <div class="flex flex-col md:flex-row gap-8 md:gap-16 items-center py-16 border-b border-gray-800 last:border-0 ${directionClass}">
                <!-- Visual Side -->
                <div class="w-full md:w-1/2 flex justify-center">
                    <div class="relative rounded-2xl overflow-hidden shadow-2xl bg-black border border-gray-800 group ${mediaClass}">
                        <img src="${project.mediaSrc}" alt="${project.title} Gameplay" 
                            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" 
                            loading="lazy" />
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                    </div>
                </div>

                <!-- Text Side -->
                <div class="w-full md:w-1/2 space-y-6 text-center md:text-left">
                    <div>
                        <h3 class="text-3xl font-bold text-white mb-2">${project.title}</h3>
                        <div class="flex flex-wrap gap-2 justify-center md:justify-start mb-4">
                            ${techStackHTML}
                        </div>
                        <p class="text-brand-secondary font-medium text-lg">${project.role}</p>
                    </div>
                    
                    <p class="text-gray-400 leading-relaxed text-base">${project.description}</p>
                    ${linksHTML}
                </div>
            </div>
        `;
        projectsContainer.innerHTML += projectHTML;
    });

    // 4. Navbar Logic (Scroll & Mobile Menu)
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    // Scroll Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-brand-dark/90', 'backdrop-blur-md', 'shadow-lg', 'py-4');
            navbar.classList.remove('bg-transparent', 'py-6');
        } else {
            navbar.classList.add('bg-transparent', 'py-6');
            navbar.classList.remove('bg-brand-dark/90', 'backdrop-blur-md', 'shadow-lg', 'py-4');
        }
    });

    // Mobile Menu Toggle
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        const iconPath = mobileMenuBtn.querySelector('path');
        if (mobileMenu.classList.contains('hidden')) {
             // Hamburger
             iconPath.setAttribute('d', "M4 6h16M4 12h16M4 18h16");
        } else {
             // X icon
             iconPath.setAttribute('d', "M6 18L18 6M6 6l12 12");
        }
    });

    // Close mobile menu when clicking a link
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileMenuBtn.querySelector('path').setAttribute('d', "M4 6h16M4 12h16M4 18h16");
        });
    });
});