// ==================== APP CONTROLLER ====================
(function () {
    "use strict";

    // ---- State ----
    const state = { currentStep: 1, education: null, goal: null, skill: null };
    let engine = null;

    // ---- DOM refs ----
    const $ = (sel) => document.querySelector(sel);
    const $$ = (sel) => document.querySelectorAll(sel);

    const onboardingScreen = $("#onboarding-screen");
    const chatScreen = $("#chat-screen");
    const btnNext = $("#btn-next");
    const btnBack = $("#btn-back");
    const messagesWrapper = $("#messages-wrapper");
    const messagesContainer = $("#messages-container");
    const messageInput = $("#message-input");
    const btnSend = $("#btn-send");
    const chipContainer = $("#suggestion-chips");
    const registrationScreen = $("#registration-screen");
    const btnShowRegistration = $("#btn-show-registration");
    const btnRegBack = $("#btn-reg-back");
    const registrationForm = $("#mentor-registration-form");

    // ==================== ONBOARDING ====================
    function initOnboarding() {
        $$(".option-btn").forEach((btn) => {
            btn.addEventListener("click", () => {
                const field = btn.dataset.field;
                const value = btn.dataset.value;
                // Deselect siblings
                btn.closest(".option-grid").querySelectorAll(".option-btn").forEach((b) => b.classList.remove("selected"));
                btn.classList.add("selected");
                state[field] = value;
                btnNext.disabled = false;
            });
        });

        btnNext.addEventListener("click", () => {
            if (state.currentStep < 3) {
                goToStep(state.currentStep + 1);
            } else {
                startChat();
            }
        });

        btnBack.addEventListener("click", () => {
            if (state.currentStep > 1) goToStep(state.currentStep - 1);
        });
    }

    function goToStep(step) {
        // Update step indicators
        $$(".step-dot").forEach((dot, i) => {
            dot.classList.remove("active", "done");
            if (i + 1 < step) dot.classList.add("done");
            else if (i + 1 === step) dot.classList.add("active");
        });
        $$(".step-line").forEach((line, i) => {
            line.classList.toggle("done", i + 1 < step);
        });

        // Show step
        $$(".onboarding-step").forEach((s) => s.classList.remove("active"));
        $(`#step-${step}`).classList.add("active");

        state.currentStep = step;
        btnBack.style.visibility = step > 1 ? "visible" : "hidden";
        btnNext.textContent = step === 3 ? "Start Chatting" : "Next";
        if (step === 3) {
            btnNext.innerHTML = 'Start Chatting <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';
        } else {
            btnNext.innerHTML = 'Next <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';
        }

        // Disable next if current step has no selection
        const fields = ["education", "goal", "skill"];
        btnNext.disabled = !state[fields[step - 1]];
    }

    // ==================== REGISTRATION ====================
    function initRegistration() {
        btnShowRegistration.addEventListener("click", () => {
            onboardingScreen.classList.remove("active");
            registrationScreen.classList.add("active");
        });

        btnRegBack.addEventListener("click", () => {
            registrationScreen.classList.remove("active");
            onboardingScreen.classList.add("active");
        });

        registrationForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: $("#reg-name").value,
                email: $("#reg-email").value,
                role: $("#reg-role").value,
                company: $("#reg-company").value,
                expertise: $("#reg-expertise").value,
                bio: $("#reg-bio").value,
                linkedin: $("#reg-linkedin").value,
                experience: $("#reg-exp").value
            };

            console.log("Mentor Registered:", formData);

            // Show success state
            const originalContent = registrationForm.innerHTML;
            registrationForm.innerHTML = `
                <div style="text-align: center; padding: 2rem;">
                    <div style="font-size: 4rem; margin-bottom: 1rem;">🎉</div>
                    <h2 style="margin-bottom: 1rem;">Registration Received!</h2>
                    <p style="color: var(--text-secondary); margin-bottom: 2rem;">
                        Thank you for joining AlumConnect, ${formData.name.split(' ')[0]}. 
                        Our team will review your profile and reach out via email shortly.
                    </p>
                    <button id="btn-reg-done" class="nav-btn primary" style="margin: 0 auto;">Back to Home</button>
                </div>
            `;

            $("#btn-reg-done").addEventListener("click", () => {
                registrationScreen.classList.remove("active");
                onboardingScreen.classList.add("active");
                // Reset form for next time (optional)
                setTimeout(() => {
                    registrationForm.innerHTML = originalContent;
                    initRegistration(); // Re-bind events since we replaced innerHTML
                }, 500);
            });
        });
    }

    // ==================== CHAT ====================
    function startChat() {
        engine = new ChatEngine({ education: state.education, goal: state.goal, skill: state.skill });
        const mentor = engine.getMentor();

        // Switch screens
        onboardingScreen.classList.remove("active");
        chatScreen.classList.add("active");

        // Populate sidebar
        $("#mentor-avatar").textContent = mentor.emoji;
        $("#mentor-name").textContent = mentor.name;
        $("#mentor-role").textContent = mentor.role;
        $("#chat-header-name").textContent = mentor.name;
        $("#profile-education").textContent = state.education;
        $("#profile-goal").textContent = state.goal;
        $("#profile-skill").textContent = state.skill;

        // Welcome message
        setTimeout(() => {
            addBotMessage(engine.getWelcomeMessage());
            showChips(engine.getInitialChips());
        }, 500);
    }

    function addBotMessage(html) {
        const mentor = engine.getMentor();
        const wrapper = document.createElement("div");
        wrapper.className = "message bot";
        wrapper.innerHTML = `
            <div class="msg-avatar">${mentor.emoji}</div>
            <div class="msg-content">${html}</div>`;
        messagesWrapper.appendChild(wrapper);
        scrollToBottom();
    }

    function addUserMessage(text) {
        const wrapper = document.createElement("div");
        wrapper.className = "message user";
        wrapper.innerHTML = `
            <div class="msg-avatar">🧑‍🎓</div>
            <div class="msg-content"><p>${escapeHtml(text)}</p></div>`;
        messagesWrapper.appendChild(wrapper);
        scrollToBottom();
    }

    function showTyping() {
        const el = document.createElement("div");
        el.className = "message bot";
        el.id = "typing-msg";
        el.innerHTML = `
            <div class="msg-avatar">${engine.getMentor().emoji}</div>
            <div class="msg-content">
                <div class="typing-indicator"><div class="dot"></div><div class="dot"></div><div class="dot"></div></div>
            </div>`;
        messagesWrapper.appendChild(el);
        scrollToBottom();
    }

    function removeTyping() {
        const el = $("#typing-msg");
        if (el) el.remove();
    }

    function showChips(chips) {
        chipContainer.innerHTML = "";
        chips.forEach((text) => {
            const btn = document.createElement("button");
            btn.className = "chip";
            btn.textContent = text;
            btn.addEventListener("click", () => sendMessage(text));
            chipContainer.appendChild(btn);
        });
    }

    function sendMessage(text) {
        if (!text.trim() || !engine) return;
        addUserMessage(text.trim());
        messageInput.value = "";
        messageInput.style.height = "auto";
        btnSend.disabled = true;
        chipContainer.innerHTML = "";

        showTyping();
        const delay = 800 + Math.random() * 1200;
        setTimeout(() => {
            removeTyping();
            const result = engine.processMessage(text.trim());
            addBotMessage(result.html);
            if (result.chips && result.chips.length) showChips(result.chips);
        }, delay);
    }

    function scrollToBottom() {
        requestAnimationFrame(() => {
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        });
    }

    function escapeHtml(str) {
        const div = document.createElement("div");
        div.textContent = str;
        return div.innerHTML;
    }

    // ==================== INPUT HANDLING ====================
    function initInput() {
        messageInput.addEventListener("input", () => {
            btnSend.disabled = !messageInput.value.trim();
            messageInput.style.height = "auto";
            messageInput.style.height = Math.min(messageInput.scrollHeight, 120) + "px";
        });

        messageInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                if (messageInput.value.trim()) sendMessage(messageInput.value);
            }
        });

        btnSend.addEventListener("click", () => {
            if (messageInput.value.trim()) sendMessage(messageInput.value);
        });
    }

    // ==================== SIDEBAR ====================
    function initSidebar() {
        const sidebar = $("#sidebar");
        // Overlay
        const overlay = document.createElement("div");
        overlay.className = "sidebar-overlay";
        overlay.id = "sidebar-overlay";
        document.body.appendChild(overlay);

        $("#sidebar-open").addEventListener("click", () => {
            sidebar.classList.add("open");
            overlay.classList.add("active");
        });
        const closeSidebar = () => {
            sidebar.classList.remove("open");
            overlay.classList.remove("active");
        };
        $("#sidebar-close").addEventListener("click", closeSidebar);
        overlay.addEventListener("click", closeSidebar);

        // Quick actions
        $$(".action-btn").forEach((btn) => {
            btn.addEventListener("click", () => {
                if (!engine) return;
                closeSidebar();
                const action = btn.dataset.action;
                showTyping();
                setTimeout(() => {
                    removeTyping();
                    const result = engine.handleAction(action);
                    addBotMessage(result.html);
                    if (result.chips && result.chips.length) showChips(result.chips);
                }, 600);
            });
        });

        // Reset
        $("#btn-reset").addEventListener("click", () => {
            closeSidebar();
            state.currentStep = 1;
            state.education = null;
            state.goal = null;
            state.skill = null;
            engine = null;
            messagesWrapper.innerHTML = "";
            chipContainer.innerHTML = "";
            $$(".option-btn").forEach((b) => b.classList.remove("selected"));
            chatScreen.classList.remove("active");
            onboardingScreen.classList.add("active");
            goToStep(1);
        });

        // New chat
        $("#btn-new-chat").addEventListener("click", () => {
            if (!engine) return;
            messagesWrapper.innerHTML = "";
            chipContainer.innerHTML = "";
            engine.history = [];
            engine.interviewMode = false;
            setTimeout(() => {
                addBotMessage(engine.getWelcomeMessage());
                showChips(engine.getInitialChips());
            }, 300);
        });
    }

    // ==================== INIT ====================
    function init() {
        initOnboarding();
        initRegistration();
        initInput();
        initSidebar();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
