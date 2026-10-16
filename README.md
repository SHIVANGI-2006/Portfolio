# 🐉 Shivangi Kushwaha — Kali Linux OS & Cyber-Architect Portfolio

<div align="center">

![Kali Linux Themed Portfolio](https://img.shields.io/badge/Theme-Kali%20Linux%20Rolling-blue?style=for-the-badge&logo=kalilinux&logoColor=white)
![Vanilla ES6+](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3 Glassmorphism](https://img.shields.io/badge/CSS3-Glassmorphism-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![GSAP Transitions](https://img.shields.io/badge/GSAP-Animations-88CE02?style=for-the-badge&logo=greensock&logoColor=white)
![Status](https://img.shields.io/badge/Status-Production%20Ready-00ff66?style=for-the-badge)

<p align="center">
  <strong>A high-performance, single-page cyber-architect developer portfolio engineered with authentic Kali Linux OS aesthetics, interactive Whisker Application Menu, fully functional bash-style CLI terminal emulator, live telemetry, and glassmorphic modal blueprints.</strong>
</p>

[Explore Views](#-navigation--module-architecture) • [Terminal CLI Features](#-interactive-kali-cli-reference) • [Project Showcase](#-production-history--projects) • [Credentials](#-verified-credentials--academics) • [Deployment](#-deployment)

</div>

---

## 🌟 Key Highlights & Design Innovations

- **Authentic Kali Linux Desktop Panel (Taskbar)**: 
  - Dynamic **Whisker Application Dropdown Menu** mimicking XFCE / Kali Linux desktop navigation.
  - Live **Nagpur, India clock (GMT +5:30)** and dynamic CPU / RAM resource telemetry monitors.
  - Quick launch panel shortcuts for Terminal emulator, GitHub, and LinkedIn.
- **Interactive Bash-Style CLI Terminal Emulator**:
  - Full simulated command line (`help`, `neofetch`, `cd <module>`, `ls projects`, `cat <file>`, `kali-undercover`, `clear`).
  - Terminal-to-DOM integration: commands like `cat crisispulse` or `cd academics` seamlessly trigger modal blueprints and smooth view navigation.
- **Kali Undercover Dual Theme Engine**:
  - Toggle smoothly between **Kali Dark Mode** (slate black `#07090e`, neon blue borders, terminal greens) and **Undercover Mode** (blueprint drafting light canvas `#fafafa`, terracotta accents).
- **Smooth GSAP Motion & Custom Micro-Animations**:
  - Smooth page-fade transitions powered by GSAP.
  - Interactive custom cursor follower with contextual hover enlargement across cards, links, and buttons.
- **Zero Framework Dependency**:
  - 100% pure Vanilla HTML5, CSS3 Variables & Glassmorphism, and Vanilla JavaScript ES6+. Zero heavy framework overhead, blazing fast load times, and instantaneous responsiveness.

---

## 📂 Repository Architecture

```bash
portfolio/
├── index.html                   # Core DOM structure, 7 modular view panes, blueprint modals
├── css/
│   └── styles.css               # Complete Kali OS design system, tokens, glassmorphism, responsive queries
├── js/
│   └── script.js                # GSAP view switcher, project DB, interactive terminal CLI, event handlers
├── assets/                      # Media assets & static documents
│   ├── kalilinux.svg            # Kali Linux vector emblem
│   ├── portrait.jpeg            # Professional developer portrait
│   ├── starmap.png              # High-resolution architectural constellation asset
│   ├── Shivangi_Kushwaha_Resume.pdf  # Downloadable professional curriculum vitae
│   └── certificates/            # Verified semester marksheets and credential documents
│       ├── 1st Sem Marksheet.pdf
│       ├── 2nd Sem Marksheet.jpeg
│       ├── 3rd Sem Marksheet.pdf
│       ├── 4th Sem Marksheet.pdf
│       ├── Agentic AI Certificate.pdf
│       ├── Certificate for Appreciation.pdf
│       ├── Certificate.pdf
│       ├── Completion Certificate _ SkillsBuild (4).pdf
│       ├── DS3 School.jpeg
│       ├── IBM SkillsBuild.jpeg
│       ├── Infosys DSA.pdf
│       ├── Planitt Solutions-COMPLETION-Letter.pdf
│       ├── Red Hat - Python.pdf
│       └── Red Hat.pdf
└── README.md                    # Project documentation & deployment guidelines
```

---

## 🧭 Navigation & Module Architecture

Content is structured into 7 dedicated view panes accessible via both the **Kali Applications Menu (Whisker dropdown)**, the **Mobile Hamburger drawer**, and the **CLI terminal emulator**:

| Module ID | View Name | Kali Whisker Label | Core Focus |
|---|---|---|---|
| `#home` | **Home** | `[01] Information-Gathering` | Hero showcase, interactive Kali CLI terminal, core engineering philosophy, featured project cards |
| `#work` | **Work** | `[02] Vulnerability-Analysis` | 6 production projects with category filtering (`All`, `AI/ML`, `Software`, `IoT`, `PBL`, `FinTech`, `Internship`) |
| `#about` | **Shivangi / About** | `[03] Identity-Profile` | Identity profile, "Kathak meets Machine Learning" discipline philosophy, multi-role stack, personal drivers |
| `#academics` | **Education & Skills** | `[04] System-Architecture` | B.Tech CSE coursework, CGPA honors, downloadable semester marksheets, domain skill bars, internship spotlight |
| `#credentials` | **Achievements & Certs** | `[05] Privilege-Escalation` | Utility Patent 1040/MUM/2022, Hertie School Data Science Lab, verified Red Hat, Infosys, IBM credentials |
| `#activities` | **Contributions & Photos**| `[06] Forensics-Gallery` | Cyber Guardian Club Co-Coordinator, Former Arts & Cultural Club Co-Coordinator, open-source AI tooling, visual artifacts |
| `#contact` | **Connect / Gate** | `[07] Reporting-Gate` | Project collaboration criteria, direct email gateway (`let's chat!`), verified LinkedIn and GitHub profiles |

---

## 💻 Interactive Kali CLI Reference

The homepage terminal emulator provides an authentic command line interface. Try running any of these commands directly:

```bash
# General Information & System Specs
help               # Displays all available commands and utility syntax
neofetch           # Outputs Kali Linux ASCII art, system host info, tech stack, and developer telemetry
clear              # Wipes the emulator buffer

# Theme & Undercover Mode
kali-undercover    # Toggles between Kali Dark Slate mode and Undercover Light mode

# Modular Navigation (Terminal to GUI)
cd home            # Navigates to [01] Information-Gathering
cd work            # Navigates to [02] Vulnerability-Analysis (Works)
cd about           # Navigates to [03] Identity-Profile
cd academics       # Navigates to [04] Education & Skills Matrix
cd credentials     # Navigates to [05] Achievements & Certifications
cd activities      # Navigates to [06] Forensics & Visual Artifacts
cd contact         # Navigates to [07] Reporting Gate

# File Inspection & Briefings
cat about.txt      # Outputs personal bio and developer philosophy
cat education.txt  # Prints academic degree, institution, and verified transcript index
cat skills.txt     # Displays technical competency matrix across AI/ML, Backend, Web, and IoT
cat certificates.txt # Prints catalogue of verified credential documents
cat achievements.txt # Lists granted utility patents and honors
cat clubs.txt      # Shows active & former club leadership tenures
cat activities.txt # Displays community contributions, workshops, and cohort details
cat contact.txt    # Outputs verified social channels, email, and timezone

# Project Inspection & Direct Modal Launch
ls projects        # Lists all 6 production projects in ~/projects
cat crisispulse    # Launches the CrisisPulse AI blueprint modal dialog
cat smartbank      # Launches the SmartBank REST API blueprint modal dialog
cat doorlock       # Launches the RFID Door Lock IoT blueprint modal dialog
cat finbot         # Launches the FinBot AI Conversational Suite blueprint modal dialog
cat wildlife       # Launches the Wildlife Monitoring PBL blueprint modal dialog
cat lighting       # Launches the Smart Lighting Patented IoT blueprint modal dialog
```

---

## 🚀 Production History & Projects

| Project | Domain | Key Stack | Description |
|---|---|---|---|
| **CrisisPulse AI** | AI / Multi-Agent | Python, Groq LLMs, Tavily API, Gradio, SQLAlchemy, ReportLab | 5-agent crisis intelligence pipeline performing relevance filtering, real-time web verification, and executive PDF briefing generation. |
| **SmartBank REST API** | Software / FinTech | Python, Flask, SQLite, SQLAlchemy, Glassmorphic UI | Complete digital banking ledger supporting authenticated transfers, localized INR figures, and audit trails. |
| **RFID Door Lock** | IoT / Embedded | Arduino C++, RFID MFRC522, Solenoid Relays | Standalone hardware access control verifying card UID credentials and actuating electronic lock relays. |
| **Wildlife Monitoring** | PBL // AI & ML | PyTorch, Scikit-Learn, Computer Vision | Deep learning convolutional pipeline classifying wildlife camera trap images to accelerate conservation priority sorting. |
| **Smart Lighting System** | IoT + PBL // Patented | Arduino C++, Photodiode Sensors, Low-Power Cycles | Patented smart ambient lighting controller (**Patent No. 1040/MUM/2022**) dynamically optimizing microchip energy consumption. |
| **FinBot AI** | Industry Internship | Python, Flask, NLTK, Scikit-Learn, MySQL, Chart.js | Industry internship conversational suite at Planitt Solutions linking NLP chat classification (>90% accuracy) with financial amortization math. |

---

## 📜 Verified Credentials & Academics

- **Utility Patent Granted**: Intellectual Property Utility Patent No. **1040/MUM/2022** — Controller for Ambient-Adaptive Lighting.
- **Industry Internship**: Software Engineering Intern at **Planitt Solutions Pvt. Ltd.** (FinBot AI Conversational Suite).
- **Academic Marksheets**:
  - `1st Sem Marksheet.pdf`
  - `2nd Sem Marksheet.jpeg`
  - `3rd Sem Marksheet.pdf`
  - `4th Sem Marksheet.pdf`
- **Professional Certifications**:
  - Red Hat Certified Python Specialist (`Red Hat - Python.pdf`)
  - Agentic AI Engineering Certification (`Agentic AI Certificate.pdf`)
  - Infosys Springboard Data Structures & Algorithms (`Infosys DSA.pdf`)
  - IBM SkillsBuild Cloud & AI Fundamentals (`IBM SkillsBuild.jpeg`)
  - Certificate of Technical Appreciation (`Certificate for Appreciation.pdf`)
  - Red Hat Systems Certification (`Red Hat.pdf`)
- **Arts Distinctions**: 10 Years Certified Senior Kathak Classical Dance Training & State Stage Recitals.
- **Community & Club Leadership**:
  - **Cyber Guardian Club — Co-Coordinator** (`1 Jul 2026 – Present`): Symbiosis Institute of Technology. Leading technical cybersecurity workshops, AI threat defense masterclasses, and student security initiatives.
  - **Arts & Cultural Club — Former Co-Coordinator** (`07/2025 – 1 Jul 2026`): Symbiosis Institute of Technology. Directed classical Kathak rhythmic routines and campus showcases, winning 2nd Position in Group Dance at Rasa Aalapam Performing Arts festival.
  - **Hertie School Data Science Lab (DS3) Cohort**: Selected participant in Data Science Summer School 2025 (Berlin / Virtual).

---

## 🛠️ Local Development & Setup

This portfolio is built with pure web standards — **no build steps, bundlers, or node_modules required**.

```bash
# 1. Clone the repository
git clone https://github.com/SHIVANGI-2006/portfolio.git

# 2. Navigate to the project directory
cd portfolio

# 3. Serve locally using Python or any lightweight static server
# Using Python 3:
python -m http.server 8000

# Or using Node npx:
npx serve .
```

Then open `http://localhost:8000` in your web browser.

---

## 🌐 Deployment

Ready for instantaneous zero-config continuous deployment:
- **Live portfolio**: [shivangikushwaha-portfolio.vercel.app](https://shivangikushwaha-portfolio.vercel.app/)
- **GitHub Pages**: Go to `Settings > Pages > Branch: main / root > Save`.
- **Vercel**: Import repository and hit `Deploy`.
- **Netlify**: Drag-and-drop the directory or connect Git repository.

---

## 📬 Contact & Connect

- **Developer**: Shivangi Kushwaha
- **Email**: [shivangi.kushwaha.2006@gmail.com](mailto:shivangi.kushwaha.2006@gmail.com)
- **LinkedIn**: [linkedin.com/in/shivangi-kushwaha-89071032a](https://linkedin.com/in/shivangi-kushwaha-89071032a)
- **GitHub**: [github.com/SHIVANGI-2006](https://github.com/SHIVANGI-2006)
- **Location**: Nagpur, Maharashtra, India (GMT +5:30)

---

<div align="center">
  <sub>Designed &amp; Engineered with precision. © 2026 Shivangi Kushwaha. All rights reserved.</sub>
</div>
