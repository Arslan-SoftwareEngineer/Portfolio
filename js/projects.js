/* ==========================================================================
   MUHAMMAD ARSLAN JAFFER — PROJECTS DATA & CONTROLLER
   Full projects showcase with Streamlit, GitHub, Vercel & Modal logic
   ========================================================================== */

const PROJECTS_DATA = [
  {
    id: "auticom-aasaan",
    title: "AutiCom (Aasaan) — Autism Aid Platform",
    category: "ai-ml",
    isFeatured: true,
    deployType: "fyp",
    deployLabel: "Final Year Project",
    summary: "Assistive AI educational platform providing personalized speech, behavioral, and habit-building modules for autistic children, parents, and therapists.",
    techStack: ["Python", "PyTorch", "Whisper STT", "Edge-TTS", "Flutter", "FastAPI"],
    githubUrl: "https://github.com/ars3lan-se/AutiCom-Aasaan",
    liveUrl: "https://github.com/ars3lan-se/AutiCom-Aasaan",
    liveLabel: "Research / Demo",
    architecture: "Multimodal AI Architecture with Speech Phoneme Analysis, Emotion Detection, and Adaptive Reinforcement Schedule.",
    highlights: [
      "Custom speech training modules for non-verbal and minimally verbal children.",
      "Therapist portal with quantitative behavioral analytics & milestone tracking.",
      "Multimodal prompt engine fine-tuned for neurodiverse educational workflows."
    ]
  },
  {
    id: "buddie-ai",
    title: "Buddie AI Voice Assistant",
    category: "ai-ml",
    isFeatured: true,
    deployType: "vercel",
    deployLabel: "Deployed on Vercel",
    summary: "Full-stack voice-driven AI assistant powered by Groq LPU inference, Whisper STT, and Edge-TTS for lightning-fast speech interactions.",
    techStack: ["Flask", "Python", "Groq API", "Whisper STT", "Edge-TTS", "Vercel"],
    githubUrl: "https://github.com/ars3lan-se/buddie-ai-voice-assistant",
    liveUrl: "https://buddie-ai.vercel.app",
    liveLabel: "Live Vercel App",
    architecture: "Low-latency streaming voice pipeline connecting Whisper audio transcription, Groq LLM reasoning, and Edge-TTS synthesis.",
    highlights: [
      "Sub-second voice round-trip latency utilizing Groq's high-speed inference.",
      "Microphone input streaming with real-time browser audio processing.",
      "Serverless Flask backend deployed directly on Vercel with web audio API."
    ]
  },
  {
    id: "ezitech-rag-hub",
    title: "Ezitech RAG & Churn Intelligence Hub",
    category: "streamlit",
    isFeatured: true,
    deployType: "streamlit",
    deployLabel: "Deployed on Streamlit",
    summary: "Enterprise RAG pipeline with Pinecone vector DB and XGBoost customer churn prediction with interactive Streamlit dashboards.",
    techStack: ["Streamlit", "Pinecone", "XGBoost", "Python", "LangChain", "Pandas"],
    githubUrl: "https://github.com/ars3lan-se/ezitech-rag-churn-hub",
    liveUrl: "https://share.streamlit.io/ars3lan-se/ezitech-rag-hub",
    liveLabel: "Live Streamlit App",
    architecture: "Dense vector indexing with Pinecone + XGBoost gradient boosting classifier wrapped in a Streamlit Cloud reactive UI.",
    highlights: [
      "Engineered during Deep Learning Internship at Ezitech Institute.",
      "Semantic search and context augmentation over multi-document knowledge bases.",
      "Interactive parameter tuning and feature importance plots via Streamlit widgets."
    ]
  },
  {
    id: "giggle-learn",
    title: "Giggle Learn — Assistive Audio EdTech",
    category: "ai-ml",
    isFeatured: false,
    deployType: "github",
    deployLabel: "GitHub Repo",
    summary: "AI-powered educational platform designed to assist visually impaired students through voice-driven lessons and acoustic interactive quizzes.",
    techStack: ["Python", "PyTorch", "SpeechRecognition", "Audio DSP", "SQLite"],
    githubUrl: "https://github.com/ars3lan-se/Giggle-Learn",
    liveUrl: "https://github.com/ars3lan-se/Giggle-Learn",
    liveLabel: "Source Code",
    architecture: "Voice-first UX architecture with zero visual requirement, spatial audio feedback cues, and automated quiz evaluation.",
    highlights: [
      "Screenless navigation optimized entirely for voice dialogue commands.",
      "Curriculum-aligned audio lessons with dynamic comprehension testing.",
      "Local lightweight inference ensuring accessibility in low-bandwidth regions."
    ]
  },
  {
    id: "agentic-ai-workflow",
    title: "Agentic AI Workflow Automation",
    category: "ai-ml",
    isFeatured: true,
    deployType: "github",
    deployLabel: "GitHub + n8n",
    summary: "Autonomous agentic workflow integrating a mobile Flutter frontend with custom Python AI agents orchestrated through an n8n backend.",
    techStack: ["Flutter", "Dart", "Python", "n8n", "OpenAI/Groq", "REST API"],
    githubUrl: "https://github.com/ars3lan-se/Agentic-AI-Workflow",
    liveUrl: "https://github.com/ars3lan-se/Agentic-AI-Workflow",
    liveLabel: "Source Code",
    architecture: "Event-driven workflow DAG with n8n orchestration, specialized Python micro-agents, and reactive Flutter UI.",
    highlights: [
      "Multi-agent task delegation with autonomous planning and verification.",
      "Webhook-driven state updates between mobile app and backend graph.",
      "Extensible pipeline for scraping, processing, and generating structured reports."
    ]
  },
  {
    id: "fullstack-health",
    title: "MedPortal — Full-Stack Health Application",
    category: "fullstack",
    isFeatured: false,
    deployType: "github",
    deployLabel: "MERN Stack",
    summary: "Role-based healthcare ecosystem featuring dedicated portals for Patients, Doctors, and Administrators with appointment booking and health records.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "JWT Auth", "REST"],
    githubUrl: "https://github.com/ars3lan-se/Full-Stack-Health-Application",
    liveUrl: "https://github.com/ars3lan-se/Full-Stack-Health-Application",
    liveLabel: "GitHub Repo",
    architecture: "Decoupled MERN stack with JWT authentication, role guards, and MongoDB schema design for HIPAA-compliant record models.",
    highlights: [
      "Three role-tailored dashboards: Doctor clinic manager, Patient portal, Admin panel.",
      "Real-time appointment scheduling and digital prescription generator.",
      "Secured API endpoints with bcrypt password hashing and token refresh."
    ]
  },
  {
    id: "safec-emergency",
    title: "Safec Emergency Guidance System",
    category: "systems",
    isFeatured: false,
    deployType: "github",
    deployLabel: "IoT + AI",
    summary: "Real-time sensor-driven emergency guidance application for automated incident detection, computer vision hazard analysis, and rapid responder coordination.",
    techStack: ["Python", "OpenCV", "Hardware Sensors", "Socket.io", "GPS API"],
    githubUrl: "https://github.com/ars3lan-se/Safec-Emergency-System",
    liveUrl: "https://github.com/ars3lan-se/Safec-Emergency-System",
    liveLabel: "GitHub Repo",
    architecture: "Edge sensor polling loop coupled with OpenCV frame classification and WebSockets telemetry broadcast.",
    highlights: [
      "Automated fall and fire detection using camera feed analysis.",
      "Emergency broadcast triggers dispatching coordinates to first responders.",
      "Fail-safe offline mode with local audio alarms."
    ]
  },
  {
    id: "space-shooter",
    title: "Space Shooter: Galactic Defender",
    category: "games",
    isFeatured: false,
    deployType: "github",
    deployLabel: "C++ / SFML",
    summary: "Fast-paced 2D arcade space shooter developed in C++ using SFML with custom wave progression algorithms, spatial audio, and particle physics.",
    techStack: ["C++", "SFML", "OOP", "Audio DSP", "Game Physics"],
    githubUrl: "https://github.com/ars3lan-se/Space-Shooter-SFML",
    liveUrl: "https://github.com/ars3lan-se/Space-Shooter-SFML",
    liveLabel: "GitHub Repo",
    architecture: "Entity-Component-System (ECS) inspired architecture in C++ with custom frame-rate independent physics step.",
    highlights: [
      "Custom procedural wave generation scaling with player performance.",
      "Quadtree spatial partitioning for high-count bullet collision detection.",
      "SFML audio channels and memory-optimized texture caching."
    ]
  },
  {
    id: "panic-pulse",
    title: "Panic Pulse — 3D Bomb Defusal",
    category: "games",
    isFeatured: false,
    deployType: "github",
    deployLabel: "Unity 3D / C#",
    summary: "Adrenaline-fueled 3D mobile bomb-defusal game developed in Unity (C#) featuring dynamic interactive puzzles, leaderboards, and custom shaders.",
    techStack: ["Unity 3D", "C#", "Mobile Shaders", "Physics Engine", "Animation"],
    githubUrl: "https://github.com/ars3lan-se/Panic-Pulse-Unity",
    liveUrl: "https://github.com/ars3lan-se/Panic-Pulse-Unity",
    liveLabel: "GitHub Repo",
    architecture: "State machine game manager in Unity C# with modular puzzle modules and serialized high-score leaderboards.",
    highlights: [
      "Haptic feedback and procedural sound tension scaling as timer elapses.",
      "Custom wire-cutting and keypad input mini-game logic.",
      "Mobile-optimized vertex shaders ensuring smooth 60 FPS performance."
    ]
  },
  {
    id: "golf-ball-trajectory",
    title: "Golf Ball Ballistics & Trajectory Calculator",
    category: "systems",
    isFeatured: false,
    deployType: "github",
    deployLabel: "Python / OpenCV",
    summary: "Networked ballistic physics simulator built with Python, PyQt5, OpenCV, and TCP sockets for Magnus effect aerodynamic simulation.",
    techStack: ["Python", "PyQt5", "OpenCV", "TCP Sockets", "NumPy", "Matplotlib"],
    githubUrl: "https://github.com/ars3lan-se/Golf-Ball-Trajectory-Calculator",
    liveUrl: "https://github.com/ars3lan-se/Golf-Ball-Trajectory-Calculator",
    liveLabel: "GitHub Repo",
    architecture: "Client-Server socket architecture broadcasting real-time aerodynamic calculations and trajectory visualization.",
    highlights: [
      "Runge-Kutta numerical integration for Magnus effect and atmospheric drag.",
      "OpenCV ball velocity and launch angle extraction from camera frames.",
      "Interactive PyQt5 control dashboard with live plotting canvas."
    ]
  }
];

function renderProjectsGrid(projects, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = "";

  if (projects.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted); font-family: var(--font-mono);">
        <p>No projects found matching the selected query.</p>
        <button class="btn btn-secondary btn-sm" style="margin-top: 12px;" onclick="resetProjectFilters()">Reset Filters</button>
      </div>
    `;
    return;
  }

  projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.setAttribute("data-id", project.id);
    card.setAttribute("data-category", project.category);

    const deployClass = `deploy-${project.deployType}`;

    card.innerHTML = `
      <div class="card-top-row">
        <span class="project-deploy-badge ${deployClass}">
          ${getDeployIcon(project.deployType)} ${project.deployLabel}
        </span>
        <button class="quick-cmd-btn" onclick="openProjectModal('${project.id}')" title="Inspect Architecture">
          <code>info.json</code>
        </button>
      </div>

      <h3 class="project-title">${project.title}</h3>
      <p class="project-desc">${project.summary}</p>

      <div class="project-tech-tags">
        ${project.techStack.map(t => `<span class="tech-tag">${t}</span>`).join("")}
      </div>

      <div class="project-links-row">
        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="link-btn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          GitHub
        </a>

        ${project.deployType === 'streamlit' ? `
          <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="link-btn primary-link">
            ⚡ Streamlit App
          </a>
        ` : (project.deployType === 'vercel' ? `
          <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="link-btn primary-link">
            ▲ Vercel Live
          </a>
        ` : `
          <button class="link-btn" onclick="openProjectModal('${project.id}')">
            Details →
          </button>
        `)}
      </div>
    `;

    container.appendChild(card);
  });
}

function getDeployIcon(type) {
  switch (type) {
    case 'streamlit': return '⚡';
    case 'vercel': return '▲';
    case 'fyp': return '🎓';
    default: return '📦';
  }
}

function openProjectModal(projectId) {
  const project = PROJECTS_DATA.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById("project-modal");
  const modalContent = document.getElementById("modal-project-details");
  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <div style="margin-bottom: 20px;">
      <span class="project-deploy-badge deploy-${project.deployType}" style="margin-bottom: 8px;">
        ${getDeployIcon(project.deployType)} ${project.deployLabel}
      </span>
      <h2 style="font-size: 1.5rem; color: #fff; margin-bottom: 8px;">${project.title}</h2>
      <p style="color: var(--text-muted); font-size: 0.95rem;">${project.summary}</p>
    </div>

    <div style="background: var(--bg-editor); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 16px; margin-bottom: 20px;">
      <div style="color: var(--accent-cyan); font-family: var(--font-mono); font-size: 0.8rem; margin-bottom: 8px; text-transform: uppercase;">
        // Architecture & Engineering Highlights
      </div>
      <p style="color: #cbd5e1; font-size: 0.9rem; margin-bottom: 12px;">${project.architecture}</p>
      
      <ul style="list-style: none; padding: 0;">
        ${project.highlights.map(h => `
          <li style="color: var(--text-muted); font-size: 0.88rem; margin-bottom: 6px; padding-left: 18px; position: relative;">
            <span style="position: absolute; left: 0; color: var(--accent-emerald);">▹</span> ${h}
          </li>
        `).join("")}
      </ul>
    </div>

    <div style="margin-bottom: 24px;">
      <div style="color: var(--text-muted); font-family: var(--font-mono); font-size: 0.78rem; margin-bottom: 8px;">
        STACK & DEPENDENCIES:
      </div>
      <div style="display: flex; flex-wrap: wrap; gap: 6px;">
        ${project.techStack.map(t => `<span class="tech-tag">${t}</span>`).join("")}
      </div>
    </div>

    <div style="display: flex; gap: 12px; flex-wrap: wrap;">
      <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
        View on GitHub
      </a>
      ${project.liveUrl ? `
        <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
          ${project.deployType === 'streamlit' ? 'Open in Streamlit' : (project.deployType === 'vercel' ? 'Visit Vercel App' : 'Launch Demo')} ↗
        </a>
      ` : ''}
    </div>
  `;

  modal.classList.add("active");
}

function closeProjectModal() {
  const modal = document.getElementById("project-modal");
  if (modal) modal.classList.remove("active");
}

// Attach filter events if on projects page
function initProjectsPage() {
  const container = document.getElementById("all-projects-grid");
  if (!container) return;

  renderProjectsGrid(PROJECTS_DATA, "all-projects-grid");

  const filterChips = document.querySelectorAll(".filter-chip");
  const searchInput = document.getElementById("project-search");

  // Check URL parameters for preset filter
  const urlParams = new URLSearchParams(window.location.search);
  const filterParam = urlParams.get("filter");
  let currentCategory = filterParam ? filterParam : "all";
  let searchQuery = "";

  if (filterParam) {
    filterChips.forEach(chip => {
      if (chip.getAttribute("data-filter") === filterParam) {
        chip.classList.add("active");
      } else {
        chip.classList.remove("active");
      }
    });
  }

  applyFilter();
    let filtered = PROJECTS_DATA;

    if (currentCategory !== "all") {
      filtered = filtered.filter(p => p.category === currentCategory);
    }

    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.techStack.some(t => t.toLowerCase().includes(q))
      );
    }

    renderProjectsGrid(filtered, "all-projects-grid");
  }

  filterChips.forEach(chip => {
    chip.addEventListener("click", () => {
      filterChips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      currentCategory = chip.getAttribute("data-filter");
      applyFilter();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      applyFilter();
    });
  }

  window.resetProjectFilters = function() {
    currentCategory = "all";
    searchQuery = "";
    if (searchInput) searchInput.value = "";
    filterChips.forEach(c => {
      if (c.getAttribute("data-filter") === "all") c.classList.add("active");
      else c.classList.remove("active");
    });
    applyFilter();
  };
}

document.addEventListener("DOMContentLoaded", () => {
  initProjectsPage();

  // Featured on index page
  const featuredContainer = document.getElementById("featured-projects-grid");
  if (featuredContainer) {
    const featured = PROJECTS_DATA.filter(p => p.isFeatured);
    renderProjectsGrid(featured, "featured-projects-grid");
  }

  // Close modal on outside click or ESC
  const modal = document.getElementById("project-modal");
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeProjectModal();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeProjectModal();
  });
});
