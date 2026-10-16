(() => {
  'use strict';

  /* ---------- Projects Database for Details Modal ---------- */
  const PROJECTS_DB = {
    crisispulse: {
      title: "CrisisPulse AI",
      category: "AI / MULTI-AGENT",
      problem: "During emergency crises, raw news feeds and incident reports are noisy, unverified, and lack structured executive briefings for rapid response teams.",
      objective: "Build an end-to-end multi-agent crisis intelligence system coordinating Groq LLMs, Tavily web verification, and ReportLab PDF exports.",
      contribution: "Architected 5 specialist agents (Relevance, Fact Extraction, Live Verification, Severity Assessment, and Action Synthesis), built auto-recovery parsers for JSON validation failures, integrated Tavily web search, and deployed on Render with PostgreSQL persistence.",
      implementation: "Document / Text Report ➔ Relevance Agent ➔ Extraction Agent ➔ Tavily Search Verification ➔ Severity Engine ➔ Executive PDF Export",
      technologies: ["Python", "Groq LLM API", "Tavily Search API", "Gradio", "SQLAlchemy", "ReportLab", "PostgreSQL"],
      features: [
        "Relevance / Filtering Agent: Validates incoming emergency text against crisis thresholds",
        "Fact Extraction Agent: Extracts structured disaster types, locations, and casualty metrics",
        "Live Verification Agent: Performs real-time web search verification grounding claims",
        "Severity Engine: Evaluates incident impact scoring LOW to CRITICAL with rationale",
        "Action Synthesis Agent: Formulates immediate responder action checklists",
        "ReportLab Briefing Export: Generates downloadable executive crisis PDF reports",
        "Resilient Fallbacks: Auto-recovers from JSON validation errors and switches models dynamically"
      ],
      results: "Shipped a deployed multi-agent emergency briefing platform processing complex crisis inputs and generating verified PDF briefings in seconds.",
      github: "https://github.com/SHIVANGI-2006/CrisisPulse-AI"
    },
    smartbank: {
      title: "SmartBank REST API",
      category: "SOFTWARE / FINTECH",
      problem: "Standard web-based financial demos lack robust backend validations, transactions auditing, and interactive dashboard UI.",
      objective: "Build a complete Flask + SQLite digital banking simulator supporting account creation, transfers, and transactions history tracking.",
      contribution: "Designed SQLAlchemy database models, implemented API route security, co-designed a glassmorphic dashboard, and localized figures for Indian Rupees (₹) and India Standard Time.",
      implementation: "Python Flask ➔ SQLAlchemy ORM ➔ SQLite Database ➔ Glassmorphic SPA Frontend",
      technologies: ["Python", "Flask", "SQLite", "SQLAlchemy", "Vanilla JS", "CSS Glassmorphism"],
      features: [
        "Secure account ledger database creation",
        "API routes checking deposits, withdrawals, and balances transfers",
        "Interactive analytics dashboards monitoring monthly balances",
        "Localized transaction receipt formats (Rupee and IST)",
        "Postman collection documenting endpoints validation checks"
      ],
      results: "Shipped a functional digital banking API with clean transaction logging, verified manually via Postman and unit integration checks.",
      github: "https://github.com/SHIVANGI-2006/SmartBank-REST-API"
    },
    doorlock: {
      title: "Automatic Door Lock — RFID (IoT)",
      category: "IOT / HARDWARE & EMBEDDED",
      problem: "Constructing cheap, reliable physical access systems for small security installations is difficult with standard hardware.",
      objective: "Build a standalone microcontroller IoT lock reading RFID access credentials and triggering physical relays.",
      contribution: "Programmed card reader array matches, wired indicator LEDs and buzzer alarms, and implemented lock solenoid relay circuit triggers in Arduino C++.",
      implementation: "RFID Scanner Module ➔ Arduino Microcontroller ➔ Credential Lookup ➔ Solenoid Relay Handler",
      technologies: ["IoT Hardware", "Arduino C++", "RFID Modules", "Relay Circuitry", "Embedded Systems"],
      features: [
        "RFID authentication scanner integration with UID key-matching logic",
        "Card validation key-matching database checks",
        "Solenoid lock relay circuit trigger handlers with timed release",
        "Dynamic visual LED indicator feedback states and buzzer alarms"
      ],
      results: "Built and verified a physical entry control prototype successfully authorizing key cards and triggering lock solenoid actions.",
      github: "https://github.com/SHIVANGI-2006/rfid-door-lock"
    },
    wildlife: {
      title: "Wildlife Species Identification AI (PBL)",
      category: "PBL // AI & MACHINE LEARNING",
      problem: "Project-Based Learning (PBL) initiative: Manually categorizing wildlife photos from camera traps slows environmental prioritization efforts in conservation reserves.",
      objective: "Design a deep learning model pipeline classifying target species, predicting ecological roles, and prioritizing conservation status classifications.",
      contribution: "Configured target convolutional network layers in PyTorch, compiled preprocessing scaling bounds, and trained multi-task classification pipelines for species detection.",
      implementation: "Camera Trap Image Feed ➔ PyTorch Convolutional Pipeline ➔ Species Classifier ➔ Conservation Priority Flagging",
      technologies: ["Project-Based Learning (PBL)", "Computer Vision", "PyTorch", "Scikit-Learn", "Python", "Data Preprocessing"],
      features: [
        "Species classification from convolutional photo datasets",
        "Dynamic ecological role tagging and priority labeling",
        "Automatic conservation priority flagging based on category indexes",
        "Comprehensive model evaluations including F1-score matrices"
      ],
      results: "Delivered a high-accuracy pipeline classifying animal features and flagging threatened categories directly to help environmental researchers prioritize field checks as part of academic PBL coursework.",
      github: "https://github.com/SHIVANGI-2006/wildlife-monitoring"
    },
    lighting: {
      title: "Smart Lighting System (IoT + PBL)",
      category: "IOT + PBL // PATENTED",
      problem: "Project-Based Learning (PBL) & Patented Innovation: Standard illumination setups operate on fixed timers and ignore ambient conditions, leading to excessive energy waste.",
      objective: "Create an automated smart IoT lighting controller utilizing microcontroller sensors to dynamically optimize energy consumption based on real-time ambient lux levels.",
      contribution: "Configured hardware architecture interfaces, co-authored official utility patent (Patent No. 1040/MUM/2022), wired light-dependent sensors, and programmed microcontroller loop cycles in Arduino C++.",
      implementation: "Photodiode Lux Sensors ➔ Arduino Microcontroller Loop ➔ Patented Low-Power Setup",
      technologies: ["IoT", "Project-Based Learning (PBL)", "Arduino C++", "Photodiode Sensors", "Utility Patent 1040/MUM/2022"],
      features: [
        "Ambient lux reading sensor calibrations with real-time ADC conversion",
        "Dynamic intensity adjustments mapping hardware power output to environmental light",
        "Standby low-power cycle loops for microcontroller conservation",
        "Fully patented hardware configuration layout design (Govt. of India Patent 1040/MUM/2022)"
      ],
      results: "Filed and successfully granted an official Intellectual Property Utility Patent (1040/MUM/2022) for a working smart IoT lighting setup developed under Project-Based Learning.",
      github: "https://github.com/SHIVANGI-2006/smart-lighting"
    },
    finbot: {
      title: "FinBot AI — Industry Internship Project",
      category: "INTERNSHIP // AI & FINTECH",
      problem: "Developed during the software engineering internship at Planitt Solutions: Financial calculations and advisory were scattered across multiple disjointed tools, creating friction for users looking for quick guidance.",
      objective: "Build an integrated conversational assistant linking SIP, EMI, Lumpsum, and Brokerage calculators to an NLP-based chatbot with SQL storage.",
      contribution: "Designed and implemented during the Planitt Solutions industry internship: built Flask calculation routines, integrated NLTK tokenization pipelines, trained a scikit-learn Naive Bayes intent classifier, co-designed the responsive glassmorphic dashboard, and connected MySQL logs.",
      implementation: "Python Flask Server ➔ NLTK & Scikit-Learn NLP ➔ MySQL History Log ➔ Glassmorphic SPA Frontend",
      technologies: ["Industry Internship", "Python", "Flask", "NLTK", "Scikit-Learn", "MySQL", "JavaScript", "Chart.js"],
      features: [
        "SIP systematic returns projection engine",
        "Amortization loan breakdown EMI engine",
        "Lumpsum compound growth calculator",
        "Equity trade taxes and brokerage calculations",
        "Conversational NLTK chatbot with query intent classification (>90% accuracy)",
        "MySQL storage mapping persistent chat and calculation audit logs",
        "Dynamic financial projections visualization powered by Chart.js"
      ],
      results: "Successfully shipped a local Flask banking tool classifying user calculations with >90% intent mapping accuracy and storing all records in MySQL database schema logs, completed for Planitt Solutions internship.",
      github: "https://github.com/SHIVANGI-2006/FinBot-AI"
    }
  };

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Theme Toggle Setup ---------- */
  const initThemeToggle = () => {
    const toggle = document.getElementById('themeToggle');
    const mobileToggle = document.getElementById('mobileThemeToggle');

    const updateToggleText = (isDark) => {
      const text = isDark ? 'mode — kali (dark)' : 'mode — undercover (light)';
      if (toggle) toggle.textContent = text;
      if (mobileToggle) mobileToggle.textContent = isDark ? 'MODE — KALI (DARK)' : 'MODE — UNDERCOVER (LIGHT)';
    };

    const setTheme = (isDark) => {
      document.body.classList.toggle('dark', isDark);
      localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
      updateToggleText(isDark);
    };

    window.setPortfolioTheme = setTheme;

    if (toggle) {
      toggle.addEventListener('click', () => {
        const isDark = !document.body.classList.contains('dark');
        setTheme(isDark);
      });
    }
    if (mobileToggle) {
      mobileToggle.addEventListener('click', () => {
        const isDark = !document.body.classList.contains('dark');
        setTheme(isDark);
      });
    }

    const saved = localStorage.getItem('portfolio-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = saved === 'dark' || (!saved && prefersDark);
    setTheme(isDark);
  };

  /* ---------- Custom Cursor Setup ---------- */
  const initCustomCursor = () => {
    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('cursorFollower');
    if (!cursor || !follower) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let followerX = mouseX;
    let followerY = mouseY;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
    });

    const tick = () => {
      followerX += (mouseX - followerX) * 0.15;
      followerY += (mouseY - followerY) * 0.15;
      
      follower.style.left = `${followerX}px`;
      follower.style.top = `${followerY}px`;
      
      requestAnimationFrame(tick);
    };
    tick();

    const registerHoverables = () => {
      const hoverables = document.querySelectorAll('a, button, .filter-btn, .project-card, .btn-detail, .modal-github-btn, .role-stack-item');
      hoverables.forEach((el) => {
        el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
      });
    };
    registerHoverables();

    window.addEventListener('reRegisterHovers', registerHoverables);
  };

  /* ---------- View Pane Switcher Setup (Fade & Label Change) ---------- */
  const initViewSwitcher = () => {
    const navLinks = document.querySelectorAll('.nav-link-item');
    const mobileLinks = document.querySelectorAll('.mobile-menu-overlay__link, .mobile-header__logo');
    const mainContent = document.getElementById('mainContent');
    const desktopAboutLink = document.getElementById('desktopAboutLink');
    const mobileAboutLink = document.getElementById('mobileAboutLink');

    const switchView = (targetId) => {
      const targetView = document.getElementById(targetId);
      if (!targetView) return;

      // Handle the "about" to "shivangi" label change
      const isAboutActive = (targetId === 'about');
      if (desktopAboutLink) {
        desktopAboutLink.innerHTML = isAboutActive 
          ? `<span class="num">[03]</span> Identity-Profile (Shivangi)` 
          : `<span class="num">[03]</span> Identity-Profile (About)`;
      }
      if (mobileAboutLink) {
        mobileAboutLink.innerHTML = isAboutActive 
          ? `<span class="num">03.</span> Shivangi` 
          : `<span class="num">03.</span> About`;
      }

      // Sync active state across all navigation elements
      navLinks.forEach(link => {
        const matches = link.getAttribute('data-target') === targetId;
        link.classList.toggle('active', matches);
      });
      mobileLinks.forEach(link => {
        const matches = link.getAttribute('data-target') === targetId;
        link.classList.toggle('active', matches);
      });

      // Mobile Handling (Scroll to viewport section)
      if (window.innerWidth <= 991) {
        targetView.scrollIntoView({ behavior: 'smooth' });
        const mobileMenu = document.getElementById('mobileMenu');
        if (mobileMenu) mobileMenu.classList.remove('is-open');
        return;
      }

      const currentActive = document.querySelector('.view-pane.active');
      if (currentActive && currentActive.id !== targetId) {
        if (typeof gsap !== 'undefined') {
          gsap.to(currentActive, {
            opacity: 0,
            y: -10,
            duration: 0.2,
            ease: 'power2.in',
            onComplete: () => {
              currentActive.classList.remove('active');
              gsap.set(currentActive, { clearProps: 'all' });
              targetView.classList.add('active');
              
              if (mainContent) mainContent.scrollTop = 0;
              window.scrollTo(0, 0);

              gsap.fromTo(targetView, 
                { opacity: 0, y: 15 },
                { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out', clearProps: 'transform' }
              );
            }
          });
        } else {
          currentActive.classList.remove('active');
          targetView.classList.add('active');
          if (mainContent) mainContent.scrollTop = 0;
          window.scrollTo(0, 0);
        }
      } else if (!currentActive) {
        targetView.classList.add('active');
        if (typeof gsap !== 'undefined') {
          gsap.fromTo(targetView, 
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out', clearProps: 'transform' }
          );
        }
        if (mainContent) mainContent.scrollTop = 0;
        window.scrollTo(0, 0);
      } else if (currentActive && currentActive.id === targetId) {
        // If already active on desktop, ensure viewport resets to top
        if (mainContent) mainContent.scrollTo({ top: 0, behavior: 'smooth' });
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    // Expose globally for terminal & external callers
    window.switchPortfolioView = switchView;

    // Attach to all navigation and in-page view triggers using event delegation
    document.addEventListener('click', (e) => {
      const trigger = e.target.closest('[data-target]');
      if (!trigger) return;

      const target = trigger.getAttribute('data-target');
      if (target) {
        e.preventDefault();
        switchView(target);
        if (history.pushState) {
          history.pushState(null, null, '#' + target);
        } else {
          window.location.hash = target;
        }
      }
    });

    // Handle hashchange routing & initial hash loading
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.replace(/^#/, '');
      if (hash) switchView(hash);
    });

    if (window.location.hash) {
      const hash = window.location.hash.replace(/^#/, '');
      if (hash) {
        setTimeout(() => switchView(hash), 60);
      }
    }
  };

  /* ---------- Live Nagpur Time Clock ---------- */
  const initLiveTime = () => {
    const clockEl = document.getElementById('navLiveTime');
    if (!clockEl) return;

    const updateClock = () => {
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      const formatter = new Intl.DateTimeFormat('en-US', options);
      clockEl.textContent = formatter.format(new Date());
    };

    updateClock();
    setInterval(updateClock, 1000);
  };

  /* ---------- Hero Tagline Cycling Word ---------- */
  const initHeroCycling = () => {
    const wordEl = document.getElementById('cyclingWord');
    if (!wordEl) return;
    const words = ["intuitive", "honest", "natural", "delightful", "helpful", "purposeful"];
    let index = 0;
    
    setInterval(() => {
      gsap.to(wordEl, {
        opacity: 0,
        y: -10,
        duration: 0.25,
        ease: 'power2.in',
        onComplete: () => {
          index = (index + 1) % words.length;
          wordEl.textContent = words[index];
          gsap.fromTo(wordEl,
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
          );
        }
      });
    }, 3000);
  };

  /* ---------- Mobile Overlay Menu Toggler ---------- */
  const initMobileMenu = () => {
    const burger = document.getElementById('mobileBurger');
    const closeBtn = document.getElementById('mobileMenuClose');
    const menu = document.getElementById('mobileMenu');

    if (burger && closeBtn && menu) {
      burger.addEventListener('click', () => {
        menu.classList.add('is-open');
      });
      closeBtn.addEventListener('click', () => {
        menu.classList.remove('is-open');
      });
    }
  };

  /* ---------- Project Filtering ---------- */
  const initProjectFiltering = () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.work__grid .project-card');

    if (filterBtns.length && projectCards.length) {
      filterBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
          filterBtns.forEach((b) => b.classList.remove('is-active'));
          btn.classList.add('is-active');

          const filter = btn.getAttribute('data-filter');

          projectCards.forEach((card) => {
            const categories = card.getAttribute('data-project-categories') || '';
            const matches = filter === 'all' || categories.split(' ').includes(filter);

            if (matches) {
              card.style.display = '';
              setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'scale(1)';
              }, 30);
            } else {
              card.style.opacity = '0';
              card.style.transform = 'scale(0.96)';
              setTimeout(() => {
                card.style.display = 'none';
              }, 250);
            }
          });
        });
      });
    }
  };

  /* ---------- Expandable Grid Trigger (More Projects) ---------- */
  const initExpandableGrid = () => {
    const toggleBtn = document.getElementById('toggleMoreProjects');
    const moreGrid = document.getElementById('moreProjectsGrid');

    if (toggleBtn && moreGrid) {
      toggleBtn.addEventListener('click', () => {
        const isCollapsed = moreGrid.classList.toggle('is-collapsed');
        toggleBtn.textContent = isCollapsed ? 'View Side Quests ↓' : 'Show Less Projects ↑';
        
        window.dispatchEvent(new Event('reRegisterHovers'));
      });
    }
  };

  /* ---------- Project Details Modal Dialogue Handling ---------- */
  const initDetailsModal = () => {
    const projectModal = document.getElementById('projectModal');
    const modalCloseBtn = document.getElementById('modalCloseBtn');

    const modalTitle = document.getElementById('modalTitle');
    const modalCategory = document.getElementById('modalCategory');
    const modalProblem = document.getElementById('modalProblem');
    const modalObjective = document.getElementById('modalObjective');
    const modalContribution = document.getElementById('modalContribution');
    const modalImplementation = document.getElementById('modalImplementation');
    const modalFeatures = document.getElementById('modalFeatures');
    const modalResults = document.getElementById('modalResults');
    const modalTech = document.getElementById('modalTech');
    const modalGitHubLink = document.getElementById('modalGitHubLink');

    let activeTrigger = null;

    const openModal = (projectId, btn) => {
      const data = PROJECTS_DB[projectId];
      if (!data || !projectModal) return;

      activeTrigger = btn;

      modalTitle.textContent = data.title;
      modalCategory.textContent = data.category;
      modalProblem.textContent = data.problem;
      modalObjective.textContent = data.objective;
      modalContribution.textContent = data.contribution;
      modalImplementation.textContent = data.implementation || "System layout and software validation.";
      modalResults.textContent = data.results || "Functional verification completed.";

      modalFeatures.innerHTML = '';
      data.features.forEach((feat) => {
        const li = document.createElement('li');
        li.textContent = feat;
        modalFeatures.appendChild(li);
      });

      modalTech.innerHTML = '';
      data.technologies.forEach((tech) => {
        const span = document.createElement('span');
        span.className = 'tech-tag';
        span.textContent = tech;
        modalTech.appendChild(span);
      });

      if (modalGitHubLink) {
        modalGitHubLink.href = data.github;
      }

      projectModal.showModal();
      document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
      if (!projectModal) return;
      projectModal.close();
      document.body.style.overflow = '';

      if (activeTrigger) {
        activeTrigger.focus();
        activeTrigger = null;
      }
    };

    const detailBtns = document.querySelectorAll('[data-modal-trigger]');
    detailBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const projectId = btn.getAttribute('data-modal-trigger');
        openModal(projectId, btn);
      });
    });

    // Wire Certificate Modal Triggers
    const certBtns = document.querySelectorAll('.cert-modal-btn');
    certBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const card = btn.closest('.certificate-card');
        if (!card || !projectModal) return;

        const title = card.getAttribute('data-cert-title');
        const issuer = card.getAttribute('data-cert-issuer');
        const date = card.getAttribute('data-cert-date');
        const desc = card.getAttribute('data-cert-desc');

        activeTrigger = btn;

        modalTitle.textContent = title;
        modalCategory.textContent = `VERIFIED CERTIFICATE // ${issuer} (${date})`;
        modalProblem.textContent = `Credential Title: ${title}`;
        modalObjective.textContent = `Issuing Authority: ${issuer}`;
        modalContribution.textContent = `Verification Details: Official academic & professional credential issued in ${date}.`;
        modalImplementation.textContent = desc;
        modalResults.textContent = "Verified and authenticated record.";

        modalFeatures.innerHTML = '<li>Official Verified Certificate Document</li><li>Authenticated Credential Ledger</li>';
        modalTech.innerHTML = `<span class="tech-tag">${issuer}</span><span class="tech-tag">${date}</span>`;

        if (modalGitHubLink) {
          modalGitHubLink.href = "https://github.com/SHIVANGI-2006";
        }

        projectModal.showModal();
        document.body.style.overflow = 'hidden';
      });
    });

    // Wire Photo Gallery Lightbox Triggers
    const galleryCards = document.querySelectorAll('.gallery-card');
    galleryCards.forEach((card) => {
      card.addEventListener('click', () => {
        if (!projectModal) return;

        const title = card.getAttribute('data-gallery-title');
        const caption = card.getAttribute('data-gallery-caption');

        activeTrigger = card;

        modalTitle.textContent = title;
        modalCategory.textContent = "GALLERY ITEM // VISUAL ARTIFACT";
        modalProblem.textContent = `Visual Title: ${title}`;
        modalObjective.textContent = caption;
        modalContribution.textContent = "Academic & Professional Activity Documentation.";
        modalImplementation.textContent = "Photographic proof and project prototyping log.";
        modalResults.textContent = "Documented and verified event artifact.";

        modalFeatures.innerHTML = '<li>High-Resolution Visual Log</li><li>Event Artifact Documentation</li>';
        modalTech.innerHTML = '<span class="tech-tag">Activity Log</span><span class="tech-tag">Verified Photo</span>';

        if (modalGitHubLink) {
          modalGitHubLink.href = "https://github.com/SHIVANGI-2006";
        }

        projectModal.showModal();
        document.body.style.overflow = 'hidden';
      });
    });

    if (projectModal) {
      if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeModal);
      }
      
      projectModal.addEventListener('close', () => {
        document.body.style.overflow = '';
      });

      projectModal.addEventListener('click', (e) => {
        const inner = projectModal.querySelector('.modal-dialog__inner');
        if (!inner) return;
        const rect = inner.getBoundingClientRect();
        const clickedInside = (
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom
        );
        if (!clickedInside) closeModal();
      });
    }
  };

  /* ---------- Dynamic Project Window Headers ---------- */
  const initProjectCardDecorations = () => {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card) => {
      card.classList.add('window-container');
      const cardHeader = card.querySelector('.project-card__header');
      if (cardHeader && !cardHeader.querySelector('.window-header__controls')) {
        const num = cardHeader.querySelector('.project-card__num');
        const eyebrow = cardHeader.querySelector('.project-card__eyebrow');
        if (num && eyebrow && !cardHeader.querySelector('.project-card__header-meta')) {
          const meta = document.createElement('div');
          meta.className = 'project-card__header-meta';
          meta.appendChild(num);
          meta.appendChild(eyebrow);
          cardHeader.insertBefore(meta, cardHeader.firstChild);
        }

        const controls = document.createElement('div');
        controls.className = 'window-header__controls';
        controls.innerHTML = `
          <span class="window-control window-control--min"></span>
          <span class="window-control window-control--max"></span>
          <span class="window-control window-control--close"></span>
        `;
        cardHeader.appendChild(controls);
      }
    });
  };

  /* ---------- Kali XFCE Top Panel & Whisker Menu ---------- */
  const initKaliPanel = () => {
    const trigger = document.getElementById('whiskerMenuTrigger');
    const dropdown = document.getElementById('whiskerDropdown');
    
    if (trigger && dropdown) {
      trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        trigger.classList.toggle('active');
        dropdown.classList.toggle('show');
      });

      document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target) && e.target !== trigger) {
          trigger.classList.remove('active');
          dropdown.classList.remove('show');
        }
      });
      
      // Close whisker menu when links inside are clicked
      const links = dropdown.querySelectorAll('a');
      links.forEach(link => {
        link.addEventListener('click', () => {
          trigger.classList.remove('active');
          dropdown.classList.remove('show');
        });
      });
    }

    // App shortcuts interaction
    const termShortcut = document.getElementById('shortcutTerminal');
    const browserShortcut = document.getElementById('shortcutBrowser');
    const linkedinShortcut = document.getElementById('shortcutLinkedIn');
    
    if (termShortcut) {
      termShortcut.addEventListener('click', () => {
        const terminalEl = document.getElementById('terminalWindow');
        if (terminalEl) {
          terminalEl.scrollIntoView({ behavior: 'smooth' });
          const input = document.getElementById('terminalInput');
          if (input) input.focus();
        }
      });
    }
    
    if (browserShortcut) {
      browserShortcut.addEventListener('click', () => {
        window.open('https://github.com/SHIVANGI-2006', '_blank');
      });
    }

    if (linkedinShortcut) {
      linkedinShortcut.addEventListener('click', () => {
        window.open('https://linkedin.com/in/shivangi-kushwaha-89071032a', '_blank');
      });
    }

    // Dynamic mock CPU and Memory trackers
    const cpuBar = document.getElementById('cpuBar');
    const memBar = document.getElementById('memBar');
    
    setInterval(() => {
      if (cpuBar) {
        const cpuVal = Math.floor(Math.random() * 25) + 8; // 8% - 33%
        cpuBar.style.width = `${cpuVal}%`;
      }
      if (memBar) {
        const memVal = Math.floor(Math.random() * 8) + 44; // 44% - 52%
        memBar.style.width = `${memVal}%`;
      }
    }, 2500);
  };

  /* ---------- Interactive Terminal Simulator ---------- */
  const initInteractiveTerminal = () => {
    const termInput = document.getElementById('terminalInput');
    const termHistory = document.getElementById('terminalHistory');
    const termWindow = document.getElementById('terminalWindow');
    const quickLinks = document.querySelectorAll('.terminal-quick-link-btn');

    if (!termInput || !termHistory) return;

    // Focus input on click anywhere in terminal
    if (termWindow) {
      termWindow.addEventListener('click', (e) => {
        if (e.target !== termInput && !e.target.classList.contains('terminal-quick-link-btn')) {
          termInput.focus();
        }
      });
    }

    const commands = {
      help: () => {
        return `Available commands:
  help               - Show list of active commands
  neofetch           - Display system resources and dev summary
  cat about.txt      - Display programmer biography details
  cat education.txt  - Display academic record & CGPA honors
  cat skills.txt     - Display technical matrix & domain scores
  cat certificates.txt - List verified credentials & patent grant
  cat achievements.txt - Display patent grant & honors
  cat activities.txt - Display club leadership & community roles
  cat clubs.txt      - Show Cyber Guardian & Arts club tenure
  ls projects        - List all code production creations
  cd <module>        - Navigate to module (home, work, academics, credentials, activities, contact)
  cat contact.txt    - List active email and social tags
  kali-undercover    - Toggle theme (Kali Slate vs. Blueprint light canvas)
  clear              - Wipe the emulator screen`;
      },
      "cat education.txt": () => {
        return `ACADEMIC RECORD & MARKSHEETS:
  - Degree:      B.Tech in Computer Science & Engineering (2024 - 2028)
  - College:     Symbiosis Institute of Technology (SIT), Nagpur
  - School:      Bhavan's B.P. Vidya Mandir, Civil Lines, Nagpur (2008 - 2022)
  - Performance: 7.85 CGPA Cumulative (Sem 1: 7.08 | Sem 2: 7.78 | Sem 3: 8.29 | Sem 4: 8.23)
  - Marksheets:  Sem 1, Sem 2, Sem 3, Sem 4 (Verified Transcripts in /assets/certificates)
  - Mastery:     Neural Nets (A+), Algorithms (A+), PBL I-III (A+), Embedded (Lab O), ML (A)`;
      },
      "cat skills.txt": () => {
        return `TECHNICAL MATRIX & CAPABILITIES:
  - AI / ML:     PyTorch, Scikit-Learn, Groq LLMs, Tavily API, NLTK, Neural Networks, OpenCV
  - Backend:     Python, C, C++, Java, Flask, SQLite, MySQL, SQLAlchemy, REST APIs
  - Web UI:      HTML5, CSS3 Glassmorphism, Vanilla JS, GSAP, Responsive Systems
  - Hardware:    Arduino C++, 8051 Assembly, RFID Modules, Solenoid Relays, Ambient Lux Sensors
  - Languages:   English (Native/Bilingual), Hindi (Native/Bilingual), German (Elementary)`;
      },
      "cat certificates.txt": () => {
        return `VERIFIED CREDENTIALS & CERTS (/assets/certificates/):
  - Red Hat Certified Python Specialist   [Red Hat - Python.pdf]
  - Red Hat System Administration I       [Red Hat.pdf]
  - Hertie School Data Science Lab (DS3)  [DS3 School.jpeg]
  - Udemy Mastering Agentic AI (38 Hrs)   [Agentic AI Certificate.pdf]
  - Infosys Springboard DSA in Python     [Infosys DSA.pdf]
  - Planitt Solutions Internship Letter   [Planitt Solutions-COMPLETION-Letter.pdf]
  - IBM SkillsBuild Generative AI Ethics  [Completion Certificate _ SkillsBuild (4).pdf]
  - Smart Threats in Age of AI (SIT)      [Certificate for Appreciation.pdf]
  - Vasudhaiva Kutumbakam Program         [Certificate.pdf]
  - Utility Patent 1040/MUM/2022 Grant    [Patent Office, Govt. of India]`;
      },
      "cat achievements.txt": () => {
        return `HONORS & DISTINCTIONS:
  - Utility Patent 1040/MUM/2022 Grant (Govt. of India Patent Office)
  - Hertie School Data Science Summer School (DS3) 2025 Global Cohort Selection
  - Rasa Aalapam Performing Arts: 2nd Position in Group Dance (Kathak)
  - 10 Years Kathak Classical Arts Training & State Stage Recitals`;
      },
      "cat activities.txt": () => {
        return `COMMUNITY LEADERSHIP & ACTIVITIES:
  - Cyber Guardian Club:   Co-Coordinator (1 Jul 2026 - Present)
                           Symbiosis Institute of Technology (SIT), Nagpur
                           Leading cybersecurity workshops & AI threat defense sessions
  - Arts & Cultural Club:  Former Co-Coordinator (07/2025 - 1 Jul 2026)
                           Directed Kathak rhythmic cycles & cultural showcases
                           2nd Position in Group Dance at Rasa Aalapam Performing Arts
  - Open-Source:           Multi-Agent Tavily search workflows, AI PDF briefs
  - Global Cohort:         Hertie School Data Science Summer School (DS3) 2025`;
      },
      "cat clubs.txt": () => {
        return `COMMUNITY & CLUBS:
  - Cyber Guardian Club:   Co-Coordinator (1 Jul 2026 - Present)
  - Arts & Cultural Club:  Former Co-Coordinator (07/2025 - 1 Jul 2026)`;
      },
      neofetch: () => {
        return `         ,  ,        shivangi@kali
        / \\/ \\       -------------
       (/ //_ \\_     OS: Kali GNU/Linux rolling v2026.3
        \`-._\`-._\`._  Host: Computer Science Engineering Dev
           \`-.\`-._\`. Kernel: Agentic AI Orchestrator & ML Pipelines
              \`.-'   Uptime: 10 yrs Kathak training / 4 yrs coding
                     Shell: Web emulator CLI
                     CPU: Python, C++, Java, JS, Arduino
                     Memory: PyTorch, Scikit-Learn, Flask, MySQL
                     Patents: Smart Lighting adaptive control (1040/MUM/2022)
                     GitHub: github.com/SHIVANGI-2006`;
      },
      "cat about.txt": () => {
        return `Shivangi Kushwaha - Applied Machine Intelligence Developer
-----------------------------------------------------------
I bridge classical precision with technical engineering. Having 10 years of
rigorous training in Kathak classical dance, I apply the same rhythmic rules,
repetitive optimization, and structural alignment to compiling custom model
checklists, building agentic search states, and wiring microcontrollers.

Currently available for freelance assignments and automation integrations.`;
      },
      "ls projects": () => {
        return `Logged creations in shivangi@kali:~/projects:
  - CrisisPulse AI           (multi-agent emergency intelligence system)
  - SmartBank API            (secure banking simulator REST API)
  - RFID Door Lock           (IoT hardware access control relays)
  - FinBot AI                (industry internship conversational NLP bank tool)
  - Wildlife Monitoring      (PBL deep learning species identification)
  - Smart Lighting           (IoT + PBL patented adaptive ambient controller)
  
* Type 'cat project_name' for quick detail references inside the modal.`;
      },
      "cat contact.txt": () => {
        return `Contact & Integrations Gateway:
  - Email:    shivangi.kushwaha.2006@gmail.com
  - LinkedIn: linkedin.com/in/shivangi-kushwaha-89071032a
  - GitHub:   github.com/SHIVANGI-2006
  - Location: Nagpur, India (GMT +5:30)`;
      },
      "kali-undercover": () => {
        if (window.setPortfolioTheme) {
          const isDark = !document.body.classList.contains('dark');
          window.setPortfolioTheme(isDark);
          return isDark ? "System: Kali Dark Mode active." : "System: Undercover Light Mode active.";
        }
        return "Error: Theme toggler module offline.";
      },
      clear: () => {
        termHistory.innerHTML = '';
        return '';
      }
    };

    const processCommand = (cmdText) => {
      const cleanCmd = cmdText.trim().toLowerCase();
      
      // Print prompt echo
      const echoRow = document.createElement('div');
      echoRow.className = 'terminal-line';
      echoRow.innerHTML = `<span class="terminal-prompt-prefix">kali@kali</span><span class="terminal-prompt-symbol">:</span><span class="terminal-prompt-dir">~</span><span class="terminal-prompt-symbol">$</span> ${cmdText}`;
      termHistory.appendChild(echoRow);

      if (cleanCmd === '') {
        termWindow.scrollTop = termWindow.scrollHeight;
        return;
      }

      const responseLine = document.createElement('div');
      
      // Handle project specific cat instructions
      if (cleanCmd.startsWith('cat ')) {
        const targetFile = cleanCmd.substring(4).trim();
        const projectKeys = ['crisispulse', 'smartbank', 'doorlock', 'finbot', 'wildlife', 'lighting'];
        
        // Match project names
        let matchedProj = null;
        if (targetFile.includes('crisis') || targetFile.includes('crisispulse')) matchedProj = 'crisispulse';
        else if (targetFile.includes('smartbank') || targetFile.includes('bank')) matchedProj = 'smartbank';
        else if (targetFile.includes('door') || targetFile.includes('lock') || targetFile.includes('rfid')) matchedProj = 'doorlock';
        else if (targetFile.includes('finbot')) matchedProj = 'finbot';
        else if (targetFile.includes('wildlife')) matchedProj = 'wildlife';
        else if (targetFile.includes('lighting')) matchedProj = 'lighting';

        if (matchedProj) {
          responseLine.className = 'terminal-line success';
          responseLine.textContent = `Opening diagnostic metrics for project: ${matchedProj}...`;
          termHistory.appendChild(responseLine);
          
          // Trigger the standard details modal
          const modalTrigger = document.querySelector(`[data-modal-trigger="${matchedProj}"]`);
          if (modalTrigger) {
            setTimeout(() => modalTrigger.click(), 400);
          }
          termWindow.scrollTop = termWindow.scrollHeight;
          return;
        }
      }

      // Handle module navigation commands
      if (cleanCmd.startsWith('cd ') || cleanCmd.startsWith('goto ')) {
        const targetSection = cleanCmd.replace(/^(cd|goto)\s+/, '').trim();
        const validViews = {
          'home': 'home',
          'work': 'work',
          'projects': 'work',
          'about': 'about',
          'shivangi': 'about',
          'academics': 'academics',
          'education': 'academics',
          'skills': 'academics',
          'credentials': 'credentials',
          'certs': 'credentials',
          'achievements': 'credentials',
          'activities': 'activities',
          'photos': 'activities',
          'clubs': 'activities',
          'contact': 'contact',
          'connect': 'contact'
        };
        if (validViews[targetSection]) {
          const targetId = validViews[targetSection];
          responseLine.className = 'terminal-line success';
          responseLine.textContent = `Navigating to module [${targetId}]...`;
          termHistory.appendChild(responseLine);
          if (window.switchPortfolioView) {
            window.switchPortfolioView(targetId);
          } else {
            const navBtn = document.querySelector(`.nav-link-item[data-target="${targetId}"]`);
            if (navBtn) navBtn.click();
          }
          termWindow.scrollTop = termWindow.scrollHeight;
          return;
        }
      }

      if (commands[cleanCmd]) {
        const output = commands[cleanCmd]();
        if (cleanCmd !== 'clear') {
          responseLine.className = 'terminal-line output';
          if (cleanCmd === 'neofetch') responseLine.className = 'terminal-line success';
          if (cleanCmd === 'kali-undercover') responseLine.className = 'terminal-line system';
          responseLine.textContent = output;
          termHistory.appendChild(responseLine);
        }
      } else {
        responseLine.className = 'terminal-line error';
        responseLine.textContent = `bash: command not found: ${cleanCmd}. Type 'help' to review directory paths.`;
        termHistory.appendChild(responseLine);
      }

      termWindow.scrollTop = termWindow.scrollHeight;
    };

    termInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const val = termInput.value;
        processCommand(val);
        termInput.value = '';
      }
    });

    // Wire quick launch buttons click
    quickLinks.forEach(btn => {
      btn.addEventListener('click', () => {
        const cmd = btn.getAttribute('data-cmd');
        if (cmd) {
          processCommand(cmd);
        }
      });
    });
  };

  /* ---------- Run System Initializations ---------- */
  document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    initCustomCursor();
    initViewSwitcher();
    initLiveTime();
    initHeroCycling();
    initMobileMenu();
    initProjectFiltering();
    initExpandableGrid();
    initDetailsModal();
    initProjectCardDecorations();
    initKaliPanel();
    initInteractiveTerminal();
  });

})();
