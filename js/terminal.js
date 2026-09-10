/* ==========================================================================
   MUHAMMAD ARSLAN JAFFER — DEVELOPER TERMINAL EMULATOR
   Interactive bash/zsh shell for programmers
   ========================================================================== */

(function initTerminal() {
  const input = document.getElementById("terminal-input");
  const history = document.getElementById("terminal-history");
  if (!input || !history) return;

  const COMMANDS = {
    help: `Available commands:
  • whoami          - Display developer persona & current role
  • skills          - Inspect tech stack, frameworks & tools
  • projects        - List deployed projects (GitHub, Streamlit, Vercel)
  • fyp             - Details on Final Year Project: AutiCom (Aasaan)
  • publication     - View IBCAST 2026 conference research paper
  • experience      - Print career timeline & internships
  • contact         - Show email, phone & social profiles
  • clear           - Clear terminal buffer`,

    whoami: `Muhammad Arslan Jaffer
Software Engineering Student & AI/Software Developer
Air University, Islamabad (BSSE, 2023 - Present)
Location: Rawalpindi / Islamabad, Pakistan
Focus: Deep Learning, NLP, RAG Systems, Agentic AI, Computer Vision, Full-Stack`,

    skills: `[LANGUAGES]:      Python, C++, C#, Flutter/Dart, SQL, JavaScript
[AI / ML]:        PyTorch, TensorFlow, scikit-learn, XGBoost, Pinecone, Groq API, Whisper, Edge-TTS, OpenCV
[AUTOMATION]:     n8n Agentic Workflows, LangChain
[WEB & DB]:       React, Next.js, Node.js, Express.js, Flask, Streamlit, MongoDB, MySQL, Oracle
[TOOLS]:          Linux (Ubuntu/Fedora), Docker, Git/GitHub, Unity, VS Code, Postman`,

    projects: `Deployed & Featured Projects:
  1. AutiCom (Aasaan)           - Assistive AI for Autism (Speech & Habit modules)
  2. Buddie AI Voice Assistant  - Voice LLM with Groq API & Whisper (Vercel)
  3. Ezitech RAG & Churn Hub    - Pinecone Vector RAG & XGBoost (Streamlit Cloud)
  4. Giggle Learn               - Voice-driven EdTech for Visually Impaired
  5. Agentic AI Workflow        - Flutter + Python Agents + n8n DAG
  6. Full-Stack Health Portal   - MERN Role-Based Healthcare System
  7. Safec Emergency Guidance   - Real-time IoT & CV Responder System
  8. Space Shooter              - C++ SFML 2D Arcade Engine
  9. Panic Pulse                - Unity C# 3D Mobile Bomb Defusal
  10. Golf Ball Trajectory      - Networked Ballistics (Python/OpenCV/Sockets)`,

    fyp: `AutiCom (Aasaan) — Final Year Project
Assistive AI educational platform engineered for autistic children, parents, and therapists.
Features personalized speech exercises, behavioral progress tracking, and emotion-aware habit modules.
Tech: Python, PyTorch, Whisper STT, Edge-TTS, Flutter, FastAPI.`,

    publication: `Research Publication:
"A Comparative Evaluation of Large Language Models for Accessibility Barrier Detection in Video Game Reviews"
Authors: K. Batool, F. Gillani, and M. A. Jaffer
Conference: Proc. International Bhurban Conference on Applied Sciences and Technologies (IBCAST), 2026.
Status: Published / ORCID Indexed`,

    experience: `Career Experience:
  • Deep Learning Intern @ Ezitech Institute (Aug 2025 - Sep 2025)
    - Pinecone RAG pipelines, XGBoost churn models, Streamlit web apps.
  • Technical Intern @ Acro Weaving and Spinning Mills (Dec 2024 - Jan 2025)
    - Corporate database systems & IT record management.
  • Machine Learning Intern @ Certura
    - Dataset preprocessing, supervised/unsupervised model benchmarking.
  • Leadership:
    - Graphics Team Lead @ Google Developer Groups (GDG) on Campus
    - General Secretary @ Air University Animal Welfare Society (AUAWS)`,

    contact: `Connect with Muhammad Arslan Jaffer:
  • Email:    ars3lan.se@gmail.com
  • Phone:    +92-306-6330002
  • LinkedIn: linkedin.com/in/arslanjaffer
  • GitHub:   github.com/ars3lan-se
  • Status:   Open to AI & Software Engineering Opportunities!`
  };

  function executeCommand(cmdText) {
    const trimmed = cmdText.trim();
    if (!trimmed) return;

    const entry = document.createElement("div");
    entry.className = "terminal-entry";

    const prompt = document.createElement("div");
    prompt.className = "terminal-prompt-line";
    prompt.innerHTML = `<span class="terminal-prompt-label">arslan@developer<span class="symbol">:~$</span></span> <span style="color:#fff;">${escapeHtml(trimmed)}</span>`;
    entry.appendChild(prompt);

    const lowerCmd = trimmed.toLowerCase();

    if (lowerCmd === "clear") {
      history.innerHTML = "";
      input.value = "";
      return;
    }

    const output = document.createElement("div");
    output.className = "terminal-output";

    if (COMMANDS[lowerCmd]) {
      output.innerText = COMMANDS[lowerCmd];
    } else {
      output.className = "terminal-output warn";
      output.innerText = `bash: command not found: ${trimmed}. Type 'help' for available commands.`;
    }

    entry.appendChild(output);
    history.appendChild(entry);

    input.value = "";
    const body = document.querySelector(".terminal-body");
    if (body) body.scrollTop = body.scrollHeight;
  }

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      executeCommand(input.value);
    }
  });

  // Handle quick command buttons
  window.runTerminalCmd = function(cmd) {
    if (input) {
      input.value = cmd;
      executeCommand(cmd);
      input.focus();
    }
  };

  function escapeHtml(text) {
    const div = document.createElement("div");
    div.innerText = text;
    return div.innerHTML;
  }
})();
