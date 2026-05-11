// ==================== CHAT ENGINE ====================
class ChatEngine {
    constructor(userProfile) {
        this.profile = userProfile;
        this.mentor = ALUMNI[userProfile.goal] || ALUMNI["Software Developer (SDE)"];
        this.history = [];
        this.interviewMode = false;
        this.interviewQueue = [];
        this.interviewIndex = 0;
    }

    getMentor() { return this.mentor; }

    getWelcomeMessage() {
        const p = this.profile;
        return `<p class="mentor-intro">${this.mentor.intro}</p>
<p>So you're a <strong>${p.education}</strong> student targeting <strong>${p.goal}</strong>, currently at a <strong>${p.skill}</strong> level. Got it.</p>
<p>${CONVERSATIONAL.encouragement[Math.floor(Math.random() * CONVERSATIONAL.encouragement.length)]}</p>
<p>Here's what I can help you with right now:</p>
<ul>
<li>🗺️ <strong>Career Roadmap</strong> — step-by-step plan tailored to your level</li>
<li>💡 <strong>Project Ideas</strong> — high-impact projects that get interviews</li>
<li>🎤 <strong>Mock Interview</strong> — real questions with feedback</li>
<li>📈 <strong>Industry Trends</strong> — what's actually happening in the market</li>
<li>📄 <strong>Resume Tips</strong> — what recruiters look for in 7 seconds</li>
</ul>
<p>What would you like to start with? Or just tell me what's on your mind.</p>`;
    }

    getInitialChips() {
        return [
            "Give me a career roadmap",
            "Suggest project ideas",
            "Start a mock interview",
            "What are industry trends?",
            "Review my resume approach"
        ];
    }

    processMessage(msg) {
        this.history.push({ role: "user", content: msg });
        const lower = msg.toLowerCase();

        if (this.interviewMode) return this._handleInterview(lower, msg);

        let response = "";
        let chips = [];

        if (this._matches(lower, ["roadmap", "career path", "career roadmap", "plan", "how to start", "what should i learn", "guide me", "where to start"])) {
            response = this._getRoadmap();
            chips = ["What projects should I build?", "How do I apply for internships?", "Start a mock interview"];
        } else if (this._matches(lower, ["project", "build", "portfolio", "what to make", "project idea"])) {
            response = this._getProjects();
            chips = ["Tell me more about the first one", "Give me a career roadmap", "Start a mock interview"];
        } else if (this._matches(lower, ["mock interview", "interview prep", "interview question", "practice interview", "ask me question"])) {
            response = this._startInterview();
            chips = [];
        } else if (this._matches(lower, ["trend", "industry", "market", "hiring", "what's hot", "demand"])) {
            response = this._getTrends();
            chips = ["Give me a career roadmap", "Suggest project ideas"];
        } else if (this._matches(lower, ["resume", "cv", "how to write"])) {
            response = RESPONSES["resume-review"];
            chips = ["Suggest project ideas", "Start a mock interview"];
        } else if (this._matches(lower, ["compare", "vs", "versus", "difference between", "which is better", "startup or"])) {
            response = RESPONSES["compare-paths"];
            chips = ["Give me a career roadmap", "What are industry trends?"];
        } else if (this._matches(lower, ["hello", "hi", "hey", "sup", "what's up", "good morning", "good evening"])) {
            const followup = CONVERSATIONAL.followups[Math.floor(Math.random() * CONVERSATIONAL.followups.length)];
            response = `<p>Hey! Good to have you here. 👋</p><p>${followup}</p>`;
            chips = this.getInitialChips();
        } else if (this._matches(lower, ["thank", "thanks", "helpful", "great", "awesome"])) {
            response = `<p>Glad that helped! Seriously, the fact that you're proactively seeking guidance puts you ahead.</p>
<p>What else can I help with? We can dive deeper into any topic, or I can quiz you with mock interview questions.</p>`;
            chips = ["Give me a career roadmap", "Start a mock interview", "Suggest project ideas"];
        } else if (this._matches(lower, ["intern", "internship", "how to get intern"])) {
            response = this._getInternshipAdvice();
            chips = ["Suggest project ideas", "Review my resume approach", "Start a mock interview"];
        } else if (this._matches(lower, ["dsa", "data structure", "algorithm", "leetcode", "coding practice"])) {
            response = this._getDSAAdvice();
            chips = ["Give me a career roadmap", "Start a mock interview"];
        } else if (this._matches(lower, ["skill", "learn", "technology", "what language", "framework"])) {
            response = this._getSkillAdvice();
            chips = ["Suggest project ideas", "What are industry trends?"];
        } else {
            response = this._getContextualFallback(msg);
            chips = this.getInitialChips();
        }

        this.history.push({ role: "bot", content: response });
        return { html: response, chips };
    }

    handleAction(action) {
        const map = {
            "career-roadmap": () => ({ html: this._getRoadmap(), chips: ["Suggest project ideas", "Start a mock interview"] }),
            "project-ideas": () => ({ html: this._getProjects(), chips: ["Tell me more about the first one", "Give me a career roadmap"] }),
            "mock-interview": () => ({ html: this._startInterview(), chips: [] }),
            "resume-review": () => ({ html: RESPONSES["resume-review"], chips: ["Suggest project ideas", "Start a mock interview"] }),
            "industry-trends": () => ({ html: this._getTrends(), chips: ["Give me a career roadmap", "Compare career paths"] }),
            "compare-paths": () => ({ html: RESPONSES["compare-paths"], chips: ["Give me a career roadmap", "What are industry trends?"] })
        };
        const handler = map[action];
        if (handler) {
            const result = handler();
            this.history.push({ role: "bot", content: result.html });
            return result;
        }
        return { html: CONVERSATIONAL.fallback, chips: this.getInitialChips() };
    }

    // ---- Private methods ----
    _matches(text, keywords) {
        return keywords.some(k => text.includes(k));
    }

    _getRoadmap() {
        const goal = this.profile.goal;
        const skill = this.profile.skill.toLowerCase();
        const data = RESPONSES["career-roadmap"];
        if (data[goal] && data[goal][skill]) return data[goal][skill];
        if (data[goal]) return data[goal]["beginner"] || Object.values(data[goal])[0];
        return data["Software Developer (SDE)"]["beginner"];
    }

    _getProjects() {
        const goal = this.profile.goal;
        const projects = RESPONSES["project-ideas"][goal] || RESPONSES["project-ideas"]["Software Developer (SDE)"];
        let html = `<h4>💡 High-Impact Project Ideas for ${goal}</h4>
<p class="mentor-intro">"These aren't tutorial projects. These are the ones that actually get interview calls." — ${this.mentor.name}</p>`;
        projects.forEach((p, i) => {
            html += `<p><strong>${i + 1}. ${p.name}</strong></p>
<ul>
<li><strong>Stack:</strong> <code>${p.stack}</code></li>
<li><strong>Difficulty:</strong> ${p.difficulty}</li>
<li><strong>Why it works:</strong> ${p.why}</li>
</ul>`;
        });
        html += `<p>Want me to deep-dive into any of these? I can break down the architecture and what to build first.</p>`;
        return html;
    }

    _startInterview() {
        const goal = this.profile.goal;
        const questions = RESPONSES["mock-interview"][goal] || RESPONSES["mock-interview"]["Software Developer (SDE)"];
        this.interviewMode = true;
        this.interviewQueue = [...questions];
        this.interviewIndex = 0;
        const q = this.interviewQueue[0];
        return `<h4>🎤 Mock Interview Mode — ON</h4>
<p class="mentor-intro">"I'll ask you real interview questions. Answer as if I'm the interviewer. I'll give you honest feedback." — ${this.mentor.name}</p>
<p><strong>Topic:</strong> ${q.topic} · <strong>Difficulty:</strong> ${q.difficulty}</p>
<p><strong>Question:</strong> ${q.q}</p>
<p><em>Type your answer below. Don't worry about being perfect — I'll guide you.</em></p>`;
    }

    _handleInterview(lower, original) {
        if (lower === "stop" || lower === "exit" || lower === "quit") {
            this.interviewMode = false;
            return {
                html: `<p>Mock interview ended. You attempted ${this.interviewIndex + 1} question(s). Keep practicing — consistency beats intensity.</p>
<p>Want to do anything else?</p>`,
                chips: this.getInitialChips()
            };
        }
        const currentQ = this.interviewQueue[this.interviewIndex];
        let feedback = `<h4>📝 Feedback</h4>
<p><strong>Your answer:</strong> "${original.substring(0, 150)}${original.length > 150 ? '...' : ''}"</p>`;

        if (original.length < 30) {
            feedback += `<p>That's quite short. In a real interview, you'd want to elaborate more. Try using the <strong>STAR method</strong> for behavioral questions or walk through your thought process for technical ones.</p>
<p><strong>Key things to cover for this question:</strong></p>
<ul><li>Start with your approach/intuition</li><li>Discuss time & space complexity</li><li>Mention edge cases</li></ul>`;
        } else {
            feedback += `<p>Good attempt! Here's how to strengthen it:</p>
<ul>
<li><strong>Structure:</strong> Always start with clarifying questions, then brute force, then optimize</li>
<li><strong>Complexity:</strong> Always state time and space complexity explicitly</li>
<li><strong>Communication:</strong> Think out loud — interviewers care about your process, not just the answer</li>
</ul>
<p>In a real interview, I'd follow up with: "Can you optimize this further?" or "What are the edge cases?"</p>`;
        }

        this.interviewIndex++;
        if (this.interviewIndex < this.interviewQueue.length) {
            const nextQ = this.interviewQueue[this.interviewIndex];
            feedback += `<hr style="border-color:var(--border);margin:1rem 0">
<p><strong>Next Question:</strong></p>
<p><strong>Topic:</strong> ${nextQ.topic} · <strong>Difficulty:</strong> ${nextQ.difficulty}</p>
<p><strong>Question:</strong> ${nextQ.q}</p>
<p><em>Type your answer, or type "stop" to end the mock interview.</em></p>`;
            return { html: feedback, chips: ["stop"] };
        } else {
            this.interviewMode = false;
            feedback += `<p>That's all the questions I have for now! Great practice session. 💪</p>
<p>Key takeaway: Practice explaining your thought process out loud. Most people know the answer but fail to communicate it well.</p>`;
            return { html: feedback, chips: this.getInitialChips() };
        }
    }

    _getTrends() {
        const goal = this.profile.goal;
        return RESPONSES["industry-trends"][goal] || RESPONSES["industry-trends"]["Software Developer (SDE)"];
    }

    _getInternshipAdvice() {
        return `<h4>🎯 How to Actually Get Internships</h4>
<p class="mentor-intro">"Forget the 'apply and pray' strategy. Here's what works." — ${this.mentor.name}</p>
<p><strong>The 3-channel approach:</strong></p>
<ol>
<li><strong>Cold Applications (30% of effort):</strong> Apply on LinkedIn, Internshala, AngelList, Unstop. But customize each application. Mass-applying the same resume is a waste.</li>
<li><strong>Direct Outreach (50% of effort):</strong> Find startups and small companies. Email the founder directly. Subject line: "I built [X] and want to help you with [Y]". Attach your project link.</li>
<li><strong>Referrals (20% of effort):</strong> DM engineers on LinkedIn. Not "please refer me" — instead: "I'm working on [specific thing related to their company]. Would love your perspective." Build a relationship first.</li>
</ol>
<p><strong>Timeline for ${this.profile.education}:</strong></p>
<ul>
<li>Start applying 3-4 months before your target start date</li>
<li>Aim for 5-10 quality applications per day (not 50 spam ones)</li>
<li>Track everything in a spreadsheet: Company, Role, Date, Status, Follow-up date</li>
</ul>
<p><strong>What actually gets you selected:</strong> A deployed project > GitHub full of forked repos > a certificate from an online course.</p>`;
    }

    _getDSAAdvice() {
        return `<h4>🧮 DSA Strategy That Actually Works</h4>
<p class="mentor-intro">"I wasted 3 months doing random LeetCode problems. Don't repeat that." — ${this.mentor.name}</p>
<p><strong>The right approach:</strong></p>
<ol>
<li><strong>Learn the pattern, not the problem.</strong> There are ~15 core patterns (Sliding Window, Two Pointers, BFS/DFS, DP patterns, etc.). Master the pattern, and you can solve any variation.</li>
<li><strong>Use structured sheets:</strong> Striver's A2Z Sheet or NeetCode 150. Do them in order.</li>
<li><strong>Daily target:</strong> 3-4 problems/day. 2 new + 1 revision. Quality over quantity.</li>
<li><strong>Time yourself:</strong> Easy = 15 min, Medium = 25 min, Hard = 40 min. If stuck, read the editorial. No shame in that.</li>
</ol>
<p><strong>Platform recommendation:</strong></p>
<ul>
<li><strong>Learning:</strong> takeuforward.org (Striver)</li>
<li><strong>Practice:</strong> LeetCode (sort by company tags for targeted prep)</li>
<li><strong>Contests:</strong> Codeforces or LeetCode weekly — do at least 1/week</li>
</ul>
<p><strong>Common trap:</strong> Doing 500 Easy problems but avoiding Hard ones. Interviews ask Medium-Hard. Push yourself into discomfort early.</p>`;
    }

    _getSkillAdvice() {
        const goal = this.profile.goal;
        const skillMap = {
            "Software Developer (SDE)": `<p><strong>Must-have:</strong> One language deeply (C++/Java/Python), DSA, Git, SQL, REST APIs</p>
<p><strong>High-value:</strong> React or Next.js, Node.js, Docker, AWS basics, system design fundamentals</p>
<p><strong>Skip for now:</strong> Kubernetes, microservices, GraphQL — these come with experience.</p>`,
            "AI/ML Engineer": `<p><strong>Must-have:</strong> Python, NumPy, Pandas, scikit-learn, PyTorch, Linear Algebra, Probability</p>
<p><strong>High-value:</strong> Hugging Face, LangChain, Docker, FastAPI, MLflow, experiment tracking</p>
<p><strong>Skip for now:</strong> Building from scratch architectures, distributed training — unless targeting research.</p>`,
            "Data Science": `<p><strong>Must-have:</strong> Python, SQL, Pandas, Matplotlib/Seaborn, scikit-learn, Statistics</p>
<p><strong>High-value:</strong> Tableau/Power BI, A/B testing, feature engineering, storytelling with data</p>`
        };
        return `<h4>🛠️ Skills That Actually Matter for ${goal}</h4>
<p class="mentor-intro">"Don't learn everything. Learn the right things in the right order." — ${this.mentor.name}</p>
${skillMap[goal] || skillMap["Software Developer (SDE)"]}
<p><strong>Pro tip:</strong> Depth beats breadth. Being really good at 3-4 things beats being mediocre at 10. Interviewers can tell the difference in 2 minutes.</p>`;
    }

    _getContextualFallback(msg) {
        return `<p>I hear you. Let me make sure I give you the most relevant advice.</p>
<p>${CONVERSATIONAL.fallback}</p>
<p>${CONVERSATIONAL.followups[Math.floor(Math.random() * CONVERSATIONAL.followups.length)]}</p>`;
    }
}
