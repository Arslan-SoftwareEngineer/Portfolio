/* ==========================================================================
   MUHAMMAD ARSLAN JAFFER — GLOBAL IDE CONTROLLER
   Theme, Active Tabs, Live Time, Clipboard & Toast
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Highlight Active Tab based on current page
  highlightActiveTab();

  // 2. Live Status Bar Clock (PKT / Islamabad UTC+5)
  startLiveClock();

  // 3. Theme Toggle Support
  initThemeToggle();

  // 4. Setup Copy-to-Clipboard buttons
  setupCopyButtons();
});

function highlightActiveTab() {
  const path = window.location.pathname;
  const page = path.split("/").pop() || "index.html";

  const tabs = document.querySelectorAll(".ide-tab");
  tabs.forEach(tab => {
    const href = tab.getAttribute("href");
    if (href === page || (page === "" && href === "index.html") || (page === "/" && href === "index.html")) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });

  // Update Breadcrumb active file
  const activeFileEl = document.getElementById("active-file-breadcrumb");
  if (activeFileEl) {
    const fileMap = {
      "index.html": "home.py",
      "about.html": "about.md",
      "projects.html": "projects.json",
      "experience.html": "experience.ts",
      "skills.html": "skills.yml",
      "contact.html": "contact.sh"
    };
    activeFileEl.textContent = fileMap[page] || "home.py";
  }
}

function startLiveClock() {
  const clockEl = document.getElementById("statusbar-clock");
  if (!clockEl) return;

  function update() {
    const now = new Date();
    // Format to Pakistan Standard Time (UTC+5)
    const options = {
      timeZone: "Asia/Karachi",
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    };
    const timeStr = now.toLocaleTimeString("en-GB", options);
    clockEl.textContent = `${timeStr} PKT`;
  }

  update();
  setInterval(update, 1000);
}

function initThemeToggle() {
  const toggleBtn = document.getElementById("theme-toggle-btn");
  if (!toggleBtn) return;

  const savedTheme = localStorage.getItem("arslan-portfolio-theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeButton(toggleBtn, savedTheme);

  toggleBtn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("arslan-portfolio-theme", next);
    updateThemeButton(toggleBtn, next);
    showToast(`Theme switched to ${next.toUpperCase()} mode`);
  });
}

function updateThemeButton(btn, theme) {
  if (theme === "light") {
    btn.innerHTML = `<span>☀️ LIGHT</span>`;
  } else {
    btn.innerHTML = `<span>🌙 DARK</span>`;
  }
}

function setupCopyButtons() {
  const copyButtons = document.querySelectorAll("[data-copy]");
  copyButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const textToCopy = btn.getAttribute("data-copy");
      const label = btn.getAttribute("data-copy-label") || "Copied to clipboard!";

      if (navigator.clipboard) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(label);
        }).catch(() => {
          fallbackCopy(textToCopy, label);
        });
      } else {
        fallbackCopy(textToCopy, label);
      }
    });
  });
}

function fallbackCopy(text, label) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  showToast(label);
}

function showToast(message) {
  let toast = document.getElementById("global-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "global-toast";
    toast.className = "toast-notice";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<span>✓</span> <span>${message}</span>`;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2800);
}

// Global BibTeX Citation for IBCAST 2026 Paper
window.copyBibTeX = function() {
  const bibtex = `@inproceedings{batool2026comparative,
  title={A Comparative Evaluation of Large Language Models for Accessibility Barrier Detection in Video Game Reviews},
  author={Batool, K. and Gillani, F. and Jaffer, M. A.},
  booktitle={Proceedings of the International Bhurban Conference on Applied Sciences and Technologies (IBCAST)},
  year={2026},
  organization={IEEE/IBCAST}
}`;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(bibtex).then(() => {
      showToast("BibTeX citation copied to clipboard!");
    });
  } else {
    fallbackCopy(bibtex, "BibTeX citation copied to clipboard!");
  }
};
