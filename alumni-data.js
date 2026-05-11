// ==================== ALUMNI PERSONAS ====================
const ALUMNI = {
    "Software Developer (SDE)": {
        name: "Rahul Mehta", emoji: "👨‍💻", role: "SDE-2 at a Product Company (4 YOE)",
        intro: "Hey! I'm Rahul — SDE-2 at a product-based company. I cracked my way in through off-campus, failed 12 interviews before landing my first offer. Happy to share what actually works."
    },
    "AI/ML Engineer": {
        name: "Priya Sharma", emoji: "🤖", role: "ML Engineer at an AI Startup (3 YOE)",
        intro: "Hi there! I'm Priya, ML Engineer at an AI startup. Did my B.Tech in CSE, self-taught ML during college, published a paper, and landed my role through a Kaggle project that went viral. Let me help you navigate this space."
    },
    "Data Science": {
        name: "Arjun Reddy", emoji: "📊", role: "Data Scientist at a Consulting Firm (3 YOE)",
        intro: "Hey, I'm Arjun — Data Scientist working in consulting. I transitioned from core engineering to data science in my 3rd year. It's very doable if you know what to focus on."
    },
    "Core Engineering": {
        name: "Sneha Iyer", emoji: "⚙️", role: "Design Engineer at an Automotive OEM (5 YOE)",
        intro: "Hi! I'm Sneha, working as a Design Engineer at an automotive OEM. Stuck with core during the IT rush and honestly, no regrets. Let me show you the real picture of core engineering careers."
    },
    "Startup / Entrepreneurship": {
        name: "Karan Verma", emoji: "🦄", role: "Co-founder of a SaaS Startup (Funded)",
        intro: "Yo! I'm Karan, co-founder of a funded SaaS startup. Dropped my placement offer to build this. Made every mistake in the book so you don't have to. Let's talk."
    },
    "Government / PSU": {
        name: "Ananya Das", emoji: "🏛️", role: "ONGC Officer via GATE (AIR 87)",
        intro: "Hello! I'm Ananya, working at ONGC — got in through GATE with AIR 87. Prepared alongside my final year. It's tough but very structured. I'll give you the real strategy."
    },
    "Product Management": {
        name: "Vikram Joshi", emoji: "📋", role: "APM at a Fintech Unicorn (2 YOE)",
        intro: "Hey! I'm Vikram, APM at a fintech unicorn. Transitioned from SDE to PM because I loved the 'why' more than the 'how'. Let me help you figure out this path."
    },
    "Cybersecurity": {
        name: "Rohit Saxena", emoji: "🔐", role: "Security Analyst at a Big 4 (3 YOE)",
        intro: "Hi, I'm Rohit — Security Analyst at a Big 4 firm. Started with CTFs in college, turned it into a career. Cybersecurity is booming but most people enter it wrong. Let me guide you."
    }
};

// ==================== RESPONSE KNOWLEDGE BASE ====================
const RESPONSES = {
    "career-roadmap": {
        "Software Developer (SDE)": {
            beginner: `<h4>🗺️ Your SDE Roadmap (Beginner → Job Ready)</h4>
<p class="mentor-intro">"Here's the exact path I wish someone gave me in 1st year." — Rahul</p>
<p><strong>Phase 1 (Month 1-2): Foundations</strong></p>
<ul>
<li>Pick ONE language — I recommend <code>C++</code> or <code>Python</code>. Don't switch.</li>
<li>Learn DSA basics: Arrays, Strings, Linked Lists, Stacks, Queues</li>
<li>Platform: Start with <strong>Striver's A2Z Sheet</strong> on takeuforward.org</li>
</ul>
<p><strong>Phase 2 (Month 3-4): Intermediate DSA + Projects</strong></p>
<ul>
<li>Trees, Graphs, DP, Backtracking — do 150+ problems</li>
<li>Build 1 full-stack project: Use <code>React + Node.js + MongoDB</code></li>
<li>Deploy it. A live project > 10 local ones.</li>
</ul>
<p><strong>Phase 3 (Month 5-6): System Design Basics + Apply</strong></p>
<ul>
<li>Learn basics: Load Balancing, Caching, DB Design</li>
<li>Start applying on LinkedIn, Unstop, AngelList</li>
<li>Target: 10 applications/day, track in a spreadsheet</li>
</ul>
<p><strong>Mistake to avoid:</strong> Don't spend 6 months "preparing" without applying. Apply from month 3.</p>`,
            intermediate: `<h4>🗺️ Your SDE Roadmap (Intermediate → Placement Ready)</h4>
<p class="mentor-intro">"You already have the basics. Here's how to stand out." — Rahul</p>
<p><strong>Immediate (Next 2 weeks):</strong></p>
<ul>
<li>Audit your DSA — can you solve Graphs and DP medium problems consistently? If no, that's priority #1.</li>
<li>Get on <strong>LeetCode</strong>. Do the Blind 75 list. Time yourself.</li>
</ul>
<p><strong>Month 1-2: Project + System Design</strong></p>
<ul>
<li>Build something with real users — a tool, a Chrome extension, anything</li>
<li>Learn system design from <strong>Gaurav Sen's YouTube</strong> and <code>system-design-primer</code> on GitHub</li>
<li>Contribute to 1-2 open source projects — even docs count</li>
</ul>
<p><strong>Month 3: Interview Sprint</strong></p>
<ul>
<li>Do mock interviews on <strong>Pramp</strong> (free) or <strong>Interviewing.io</strong></li>
<li>Apply aggressively. Off-campus is where 70% of hiring happens.</li>
</ul>
<p><strong>Real talk:</strong> Your resume needs exactly 2-3 projects, 3-4 skills, and 0 fluff. Recruiters spend 7 seconds on it.</p>`,
            advanced: `<h4>🗺️ Your SDE Roadmap (Advanced → Top Companies)</h4>
<p class="mentor-intro">"You're close. Let's optimize for the top tier." — Rahul</p>
<p><strong>Focus Areas:</strong></p>
<ul>
<li><strong>DSA:</strong> You should be solving LC Hard in 30-40 min. Focus on DP optimization, Segment Trees, and advanced graph algorithms.</li>
<li><strong>System Design:</strong> Study real architectures — how does Uber handle location updates? How does Netflix cache? Read engineering blogs from <strong>Uber, Stripe, Discord</strong>.</li>
<li><strong>Behavioral:</strong> Most people fail here. Use STAR method. Prepare 5 stories covering leadership, conflict, failure, and impact.</li>
</ul>
<p><strong>Target List:</strong> Google, Microsoft, Amazon, Atlassian, Uber, Razorpay, Flipkart</p>
<p><strong>Pro tip:</strong> Get referrals. Cold DM engineers on LinkedIn with a specific, non-generic message. Response rate: ~15% if done right.</p>`
        },
        "AI/ML Engineer": {
            beginner: `<h4>🗺️ Your AI/ML Roadmap (From Zero)</h4>
<p class="mentor-intro">"ML has a steep learning curve, but the right order makes it 10x easier." — Priya</p>
<p><strong>Phase 1 (Month 1-2): Math + Python</strong></p>
<ul>
<li>Linear Algebra, Probability, Calculus — use <strong>3Blue1Brown</strong> YouTube + Khan Academy</li>
<li>Python fluency: <code>NumPy</code>, <code>Pandas</code>, <code>Matplotlib</code></li>
<li>Do the <strong>Andrew Ng ML Specialization</strong> on Coursera</li>
</ul>
<p><strong>Phase 2 (Month 3-4): Core ML + First Projects</strong></p>
<ul>
<li>Implement algorithms from scratch: Linear Regression, KNN, Decision Trees</li>
<li>Learn <code>scikit-learn</code>, build 2-3 end-to-end ML projects</li>
<li>Start Kaggle — aim for a bronze medal in a competition</li>
</ul>
<p><strong>Phase 3 (Month 5-6): Deep Learning + Specialization</strong></p>
<ul>
<li>Learn <code>PyTorch</code> (preferred over TF in research/startups)</li>
<li>Pick a specialization: NLP, Computer Vision, or Generative AI</li>
<li>Build a capstone project and write about it on Medium/LinkedIn</li>
</ul>`,
            intermediate: `<h4>🗺️ Your AI/ML Roadmap (Intermediate → Industry Ready)</h4>
<p class="mentor-intro">"The gap between 'knows ML' and 'gets hired for ML' is deployment." — Priya</p>
<p><strong>Key Gaps to Fill:</strong></p>
<ul>
<li><strong>MLOps:</strong> Learn Docker, FastAPI, model serving. Deploy a model as an API.</li>
<li><strong>Production ML:</strong> Data pipelines, feature stores, model monitoring — these are what companies care about.</li>
<li><strong>Research Reading:</strong> Read 2 papers/week from <strong>Papers With Code</strong>. Reproduce 1/month.</li>
</ul>
<p><strong>Projects That Get Interviews:</strong></p>
<ul>
<li>Fine-tuned LLM for a specific use case with a demo</li>
<li>Real-time object detection system deployed on edge</li>
<li>RAG-based chatbot with custom knowledge base</li>
</ul>
<p><strong>Where to Apply:</strong> AI startups on YC's Work at a Startup, Google AI residency, Microsoft Research internship</p>`,
            advanced: `<h4>🗺️ Your AI/ML Roadmap (Advanced → Research/Lead Roles)</h4>
<p class="mentor-intro">"At this level, it's about depth and impact." — Priya</p>
<ul>
<li>Publish at top venues: NeurIPS, ICML, ACL, CVPR</li>
<li>Contribute to major open-source ML projects</li>
<li>Build and open-source a novel architecture or training technique</li>
<li>Network at conferences, engage on Twitter/X with researchers</li>
<li>Target: DeepMind, OpenAI, FAIR, Google Brain, or lead ML at a Series B+ startup</li>
</ul>`
        }
    },
    "project-ideas": {
        "Software Developer (SDE)": [
            { name: "Real-Time Collaborative Code Editor", stack: "React, Node.js, Socket.io, Monaco Editor, Redis", difficulty: "Hard", why: "Shows you understand WebSockets, CRDTs, and real-time systems — exactly what companies like Figma and Notion look for." },
            { name: "URL Shortener with Analytics Dashboard", stack: "Next.js, PostgreSQL, Redis, Chart.js", difficulty: "Medium", why: "Simple product, but the analytics + caching layer shows system design thinking. Great talking point in interviews." },
            { name: "Job Application Tracker CLI + Web", stack: "Python CLI + React Dashboard, SQLite", difficulty: "Medium", why: "Solves YOUR real problem. Interviewers love projects born from genuine need, not tutorials." }
        ],
        "AI/ML Engineer": [
            { name: "AI-Powered Resume Screener", stack: "Python, Hugging Face Transformers, FastAPI, Streamlit", difficulty: "Medium", why: "Combines NLP + real-world problem. Recruiters understand this project instantly. Deploy on HuggingFace Spaces." },
            { name: "Custom RAG Chatbot for College Docs", stack: "LangChain, ChromaDB, OpenAI API, Streamlit", difficulty: "Medium", why: "RAG is the hottest skill in 2024-25. This shows you can build production LLM apps, not just call APIs." },
            { name: "Deepfake Detection System", stack: "PyTorch, OpenCV, EfficientNet, Gradio", difficulty: "Hard", why: "High-impact, publishable, and shows deep CV knowledge. Great for research internships." }
        ],
        "Data Science": [
            { name: "Customer Churn Prediction Pipeline", stack: "Python, scikit-learn, Airflow, Streamlit", difficulty: "Medium", why: "Classic DS problem that every company has. Shows end-to-end pipeline thinking." },
            { name: "Social Media Sentiment Dashboard", stack: "Python, VADER/BERT, Plotly Dash, Twitter API", difficulty: "Medium", why: "Combines NLP + visualization + API integration. Very portfolio-friendly." }
        ],
        "Startup / Entrepreneurship": [
            { name: "MVP SaaS Landing Page Generator", stack: "Next.js, OpenAI API, Stripe, Vercel", difficulty: "Medium", why: "Meta-startup project: build a tool that helps others launch. Revenue potential from day 1." },
            { name: "Micro-SaaS: Email Warm-up Tool", stack: "Node.js, Gmail API, Redis, Bull Queue", difficulty: "Hard", why: "Solves a real pain point for sales teams. $10K MRR potential with the right execution." }
        ]
    },
    "mock-interview": {
        "Software Developer (SDE)": [
            { q: "Given an array of integers, find two numbers such that they add up to a specific target. Can you solve it in O(n)?", topic: "Arrays/HashMap", difficulty: "Easy" },
            { q: "Design a URL shortening service like bit.ly. Walk me through the high-level architecture.", topic: "System Design", difficulty: "Medium" },
            { q: "Tell me about a time when you had to debug a difficult production issue. What was your approach?", topic: "Behavioral", difficulty: "Medium" }
        ],
        "AI/ML Engineer": [
            { q: "Explain the difference between bagging and boosting. When would you use Random Forest vs XGBoost?", topic: "ML Fundamentals", difficulty: "Medium" },
            { q: "You're building a recommendation system for a food delivery app. What approach would you take and why?", topic: "Applied ML", difficulty: "Medium" },
            { q: "What is attention mechanism in transformers? Why is it better than RNN-based seq2seq?", topic: "Deep Learning", difficulty: "Hard" }
        ],
        "Data Science": [
            { q: "Walk me through how you'd approach a dataset with 30% missing values. What's your strategy?", topic: "Data Wrangling", difficulty: "Medium" },
            { q: "Explain p-value to a non-technical stakeholder. When would a low p-value be misleading?", topic: "Statistics", difficulty: "Medium" }
        ]
    },
    "industry-trends": {
        "Software Developer (SDE)": `<h4>📈 SDE Industry Trends (2025)</h4>
<p class="mentor-intro">"Here's what I'm seeing in the hiring market right now." — Rahul</p>
<ul>
<li><strong>AI-augmented development</strong> is the norm now. Companies expect you to use tools like GitHub Copilot, Cursor. Learn to prompt effectively.</li>
<li><strong>Full-stack is still king</strong> for early career. React/Next.js + Node.js is the safest bet. But Go and Rust are growing fast for backend roles.</li>
<li><strong>Hiring is recovering</strong> but bar is higher. Companies want fewer, better engineers. 2-3 solid projects beat 10 toy projects.</li>
<li><strong>Remote is normalized</strong> but hybrid is the default at big companies. Startups still offer full remote.</li>
<li><strong>What recruiters actually look for:</strong> Problem-solving ability > framework knowledge. Can you think through a problem? That's the bar.</li>
</ul>`,
        "AI/ML Engineer": `<h4>📈 AI/ML Industry Trends (2025)</h4>
<p class="mentor-intro">"The AI landscape changes monthly. Here's what matters right now." — Priya</p>
<ul>
<li><strong>LLM/GenAI skills are table stakes</strong> now. RAG, fine-tuning, prompt engineering — every ML role expects some familiarity.</li>
<li><strong>MLOps is the bottleneck</strong>. Companies have models but can't deploy/monitor them. MLOps engineers are in massive demand.</li>
<li><strong>Edge AI is exploding</strong>. On-device inference, model compression (quantization, pruning) — learn these for hardware companies.</li>
<li><strong>AI safety and evaluation</strong> is a growing field. If you're research-inclined, this is a blue ocean.</li>
<li><strong>Reality check:</strong> Most "AI/ML" jobs at non-tech companies are actually data analysis with some scikit-learn. Target AI-first companies for real ML work.</li>
</ul>`
    },
    "resume-review": `<h4>📄 Resume Tips That Actually Work</h4>
<p class="mentor-intro">"I've reviewed 200+ resumes for referrals. Here's what I look for in 7 seconds." — Rahul</p>
<p><strong>Format:</strong></p>
<ul>
<li>1 page. No exceptions for <5 YOE.</li>
<li>Use Jake's Resume template on Overleaf (LaTeX) — it's the gold standard.</li>
<li>No photos, no fancy colors, no skill bars. ATS will reject you.</li>
</ul>
<p><strong>Content Rules:</strong></p>
<ul>
<li>Every bullet should follow: <strong>Action Verb + What You Did + Impact/Numbers</strong></li>
<li>❌ "Worked on backend development"</li>
<li>✅ "Built REST API handling 10K req/min using Node.js, reducing response time by 40%"</li>
<li>Projects > Coursework. Always.</li>
<li>List 4-6 skills max. Only things you can be interviewed on.</li>
</ul>
<p><strong>Common Mistakes:</strong></p>
<ul>
<li>Listing every technology you've touched — recruiters see through this</li>
<li>Generic objective statements — remove them entirely</li>
<li>Not including links to GitHub/deployed projects</li>
</ul>`,
    "compare-paths": `<h4>⚖️ Honest Career Path Comparison</h4>
<p class="mentor-intro">"Every path has trade-offs. Here's the real picture."</p>
<p><strong>SDE vs AI/ML:</strong></p>
<ul>
<li>SDE: More openings, clearer growth path, interview prep is well-defined</li>
<li>AI/ML: Higher ceiling salary-wise, but fewer pure ML roles. Many "ML" roles are 80% data engineering.</li>
</ul>
<p><strong>Big Tech vs Startup:</strong></p>
<ul>
<li>Big Tech: Better pay, brand value, structured learning. But you'll own a tiny piece of a huge system.</li>
<li>Startup: 10x learning, ownership, equity upside. But chaos, lower base pay, risk of shutdown.</li>
</ul>
<p><strong>IT/Software vs Core Engineering:</strong></p>
<ul>
<li>Software: Higher pay, remote options, global opportunities</li>
<li>Core: More stable in certain sectors (auto, defense, energy), but lower starting pay and slower growth</li>
</ul>
<p><strong>Private vs Government:</strong></p>
<ul>
<li>Private: Meritocratic growth, higher pay, but stressful and less job security</li>
<li>Government/PSU: Job security, benefits, work-life balance. But slower growth and bureaucracy.</li>
</ul>
<p><strong>My advice:</strong> Don't choose based on what's "hot." Choose based on what you'd still enjoy doing on a bad day.</p>`
};

// ==================== CONVERSATIONAL RESPONSES ====================
const CONVERSATIONAL = {
    greetings: [
        "What's been on your mind career-wise?",
        "What's the biggest thing you're struggling with right now?",
        "Tell me — where are you in your journey and where do you want to be?"
    ],
    followups: [
        "What have you built so far? Any projects or internships?",
        "Are you targeting startups or big tech? That changes the strategy significantly.",
        "What's your timeline? Placements coming up or do you have time?",
        "Have you started applying anywhere yet?",
        "What does your current tech stack look like?"
    ],
    encouragement: [
        "Good — the fact that you're asking these questions already puts you ahead of 90% of students who just go with the flow.",
        "Solid start. Most people at your stage haven't even thought this far.",
        "You're on the right track. Let's just make sure you're not wasting time on the wrong things."
    ],
    fallback: `I want to make sure I give you the right advice. Could you be more specific? For example:
<ul>
<li>"Give me a 6-month career roadmap"</li>
<li>"Suggest unique project ideas for my resume"</li>
<li>"Start a mock interview"</li>
<li>"What are current industry trends?"</li>
<li>"Compare startup vs big tech career paths"</li>
</ul>
<p>Or just tell me what's confusing you right now, and I'll break it down.</p>`
};
