<div align="center">

# 🎓 AlumConnect

### Your Personal Alumni Mentor Network

**Powered by experience, not textbooks.**

An AI-powered mentorship platform that connects students and early-career professionals with personalized alumni mentors — offering career roadmaps, project ideas, mock interviews, resume tips, and industry insights tailored to you.

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Try_Now-6C63FF?style=for-the-badge)](https://kschouhanpali-coder.github.io/Alumni-AI-Chatbot/)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

</div>

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Live Demo](#-live-demo)
- [Features](#-features)
- [Example Mentor Persona](#-example-mentor-persona)
- [Tech Stack](#️-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#️-getting-started)
- [Target Users](#-target-users)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [Support & Contact](#-support--contact)
- [License](#-license)
- [Acknowledgments](#-acknowledgments)

---

## 🎯 Overview

**AlumConnect** bridges the gap between students and the alumni who've already walked their path. Through a smart onboarding flow, users are matched with a virtual alumni mentor persona who delivers real, experience-backed guidance — not generic advice — tailored to their education level, career goal, and current skill level.

---

## 🌐 Live Demo

<div align="center">

### 👉 [**Try AlumConnect Now**](https://kschouhanpali-coder.github.io/Alumni-AI-Chatbot/)

*No installation needed — open in your browser and start exploring.*

</div>

---

## 🚀 Features

<table>
<tr>
<td valign="top" width="50%">

### 🧭 Smart Onboarding
A 3-step questionnaire matches users with the right mentor persona:
- **Education level** — B.Tech, M.Tech, Recent Graduate, Working Pro, and more
- **Career goal** — Software Dev, AI/ML, Data Science, Core Engg., Startup, Govt/PSU, Product Mgmt, Cybersecurity
- **Skill level** — Beginner / Intermediate / Advanced

### 💬 AI Mentor Chat
A personalized alumni mentor (e.g., *Priya Sharma, ML Engineer at an AI startup*) delivers real, experience-backed advice.

</td>
<td valign="top" width="50%">

### ⚡ Quick Actions Sidebar
- 📋 **Career Roadmap** — a step-by-step plan tailored to your level
- 💡 **Project Ideas** — high-impact projects that get interviews
- 🎤 **Mock Interview** — real questions with feedback
- 📄 **Resume Tips** — what recruiters look for in 7 seconds
- 📈 **Industry Trends** — what's actually happening in the market
- 🔀 **Compare Paths** — evaluate different career directions

### 👤 Profile & Mentorship
- **Profile Panel** — view your selected education, goal, and level; reset anytime
- **Mentor Registration** — alumni and professionals can join via *"Join as a Mentor"*

</td>
</tr>
</table>

---

## 🧠 Example Mentor Persona

**Priya Sharma** — *ML Engineer at an AI Startup*
- B.Tech in CSE, self-taught ML during college
- Published a research paper
- Landed her role through a viral Kaggle project

**Sample project suggestions from Priya:**

| Project | Stack | Difficulty |
|---|---|---|
| AI-Powered Resume Screener | Python, HuggingFace Transformers, FastAPI, Streamlit | 🟡 Medium |
| Custom RAG Chatbot for College Docs | LangChain, ChromaDB, OpenAI API, Streamlit | 🟡 Medium |
| Deepfake Detection System | PyTorch, OpenCV, EfficientNet, Gradio | 🔴 Hard |

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | HTML, CSS, JavaScript |
| **Dev Server** | Vite / Live Server |
| **AI / Chat** | LLM API (OpenAI / Gemini) |
| **Styling** | Custom dark theme UI |

---

## 📁 Project Structure

```
alumconnect/
├── index.html          # Entry point & onboarding flow
├── style.css           # Dark-themed global styles
├── app.js              # Core logic & mentor chat
├── mentors/             # Mentor persona definitions
└── assets/              # Icons and images
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js `v16+` (for `npx serve`) or any static file server
- An LLM API key (OpenAI / Gemini) if running the mentor chat locally

### 1. Clone the repository
```bash
git clone https://github.com/your-username/alumconnect.git
cd alumconnect
```

### 2. Serve the project locally
```bash
npx serve .
```

*Or open `index.html` directly with Live Server / any static server.*

---

## 🎯 Target Users

| Audience | Why AlumConnect Fits |
|---|---|
| 🎓 B.Tech / M.Tech Students | Get a roadmap before you even need one |
| 🧑‍🎓 Recent Graduates (0–1 yr exp) | Bridge the gap between degree and job-ready |
| 💻 Self-Taught Developers & Bootcamp Grads | Real feedback beyond tutorials |
| 🔄 Working Professionals Switching Careers | Learn from someone who's made the jump |

---

## 🧭 Roadmap

- [ ] Live 1:1 video mentorship sessions
- [ ] Community forum for peer-to-peer Q&A
- [ ] Expanded mentor persona library across more industries
- [ ] Progress tracking against your career roadmap
- [ ] Mobile app version

---

## 🤝 Contributing

Want to add a new mentor persona or career path? Feel free to open a PR or raise an issue!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/new-mentor`)
3. Commit your changes (`git commit -m 'Add new mentor persona'`)
4. Push to the branch (`git push origin feature/new-mentor`)
5. Open a pull request

---

## 💬 Support & Contact

Have a question, found a bug, or want to suggest a new mentor persona?

| Channel | Link |
|---|---|
| 🐛 Report a Bug | [Open an Issue](https://github.com/your-username/alumconnect/issues) |
| 💡 Request a Feature | [Start a Discussion](https://github.com/your-username/alumconnect/discussions) |
| 🧑‍🏫 Join as a Mentor | Available directly in the app |
| ⭐ Show Support | Star this repo if AlumConnect helped guide your path! |

---

## 📄 License

This project is licensed under the **MIT License** — free to use, modify, and distribute with attribution. See the `LICENSE` file for full terms.

---

## 🙌 Acknowledgments

| Contribution | Powered By |
|---|---|
| 🧑‍🏫 Mentor Persona Design | AI-assisted persona & dialogue writing |
| 💬 Conversational Guidance | LLM API (OpenAI / Gemini) |
| 🎨 UI & Styling | Custom dark theme, vanilla CSS |
| 🧩 Onboarding Logic | Vanilla JavaScript |

<div align="center">

<br>

<img src="https://img.shields.io/badge/Made_with-🎓_AlumConnect-0a0a12?style=for-the-badge&labelColor=1a1a1a&color=6C63FF" alt="Made with AlumConnect"/>

### *"Guidance from those who've already walked the path."*

<sub>⭐ If AlumConnect helped point you in the right direction, consider giving it a star. ⭐</sub>

</div>
