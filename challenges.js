
// ==========================================
// 1. CHALLENGE DATA
// ==========================================

const challenges = [
    {
        id: 1,
        name: "Personal Expense Tracker",
        track: "Data Analytics",
        difficulty: "Beginner",
        description: "Analyse personal spending habits using a sample financial dataset.",
        outcome: "A spending analysis report.",
        objective: "Identify spending patterns and calculate monthly expenses.",
        skills: "Data cleaning, calculations, data analysis",
        tools: "Microsoft Excel",
        output: "An expense analysis dashboard",
        time: "3–4 hours",
        expected: "A clear breakdown of spending categories and trends."
    },
    {
        id: 2,
        name: "Sales Performance Analysis",
        track: "Data Analytics",
        difficulty: "Intermediate",
        description: "Explore sales data to identify trends and business opportunities.",
        outcome: "A sales performance report.",
        objective: "Evaluate revenue, sales trends and product performance.",
        skills: "Data analysis, visualisation, reporting",
        tools: "Excel or Power BI",
        output: "A sales dashboard",
        time: "4–5 hours",
        expected: "Insights that support better business decisions."
    },
    {
        id: 3,
        name: "Customer Feedback Analysis",
        track: "Data Analytics",
        difficulty: "Advanced",
        description: "Analyse customer feedback and discover patterns in satisfaction.",
        outcome: "A customer insights report.",
        objective: "Identify common customer concerns and satisfaction trends.",
        skills: "Data cleaning, analysis, visualisation",
        tools: "Excel or Python",
        output: "A customer feedback report",
        time: "5–6 hours",
        expected: "Actionable recommendations for improving customer experience."
    },
    {
        id: 4,
        name: "Personal Portfolio Website",
        track: "Web Development",
        difficulty: "Beginner",
        description: "Build a responsive portfolio website to showcase your skills.",
        outcome: "A published personal portfolio.",
        objective: "Create a simple website with an introduction and project section.",
        skills: "HTML, CSS, responsive design",
        tools: "VS Code, Web Browser",
        output: "A live portfolio website",
        time: "3–4 hours",
        expected: "A responsive portfolio that displays correctly on different devices."
    },
    {
        id: 5,
        name: "Interactive To-Do App",
        track: "Web Development",
        difficulty: "Intermediate",
        description: "Create an application that allows users to manage daily tasks.",
        outcome: "A working task management app.",
        objective: "Allow users to add, complete and delete tasks.",
        skills: "JavaScript, DOM manipulation, events",
        tools: "HTML, CSS, JavaScript",
        output: "An interactive to-do application",
        time: "4–5 hours",
        expected: "A functional application that updates without refreshing."
    },
    {
        id: 6,
        name: "Weather Dashboard",
        track: "Web Development",
        difficulty: "Advanced",
        description: "Build a weather dashboard that displays weather information.",
        outcome: "An interactive weather dashboard.",
        objective: "Retrieve and display weather information using an API.",
        skills: "JavaScript, APIs, asynchronous programming",
        tools: "HTML, CSS, JavaScript, Weather API",
        output: "A working weather dashboard",
        time: "5–6 hours",
        expected: "Users can search for a location and view its weather information."
    }
];


// ==========================================
// 2. SELECT HTML ELEMENTS
// ==========================================

const challengeContainer = document.getElementById("challenge-container");
const challengeCount = document.getElementById("challenge-count");

const trackButtons = document.querySelectorAll("[data-track]");
const difficultyButtons = document.querySelectorAll("[data-difficulty]");


// ==========================================
// 3. FILTER VARIABLES
// ==========================================

let selectedTrack = "All";
let selectedDifficulty = "All";


// ==========================================
// 4. DISPLAY AND FILTER CHALLENGES
// ==========================================

function displayChallenges() {

    const filteredChallenges = challenges.filter(challenge => {

        const trackMatch =
            selectedTrack === "All" || challenge.track === selectedTrack;

        const difficultyMatch =
            selectedDifficulty === "All" ||
            challenge.difficulty === selectedDifficulty;

        return trackMatch && difficultyMatch;

    });

    challengeContainer.innerHTML = "";

    challengeCount.textContent =
        `${filteredChallenges.length} challenge(s) found`;

    if (filteredChallenges.length === 0) {

        challengeContainer.innerHTML =
            "<p>No challenges found. Try another filter.</p>";

        return;
    }

    filteredChallenges.forEach(challenge => {

        challengeContainer.innerHTML += `
            <div class="challenge-card">

                <span class="challenge-track">
                    ${challenge.track}
                </span>

                <h3>${challenge.name}</h3>

                <span class="difficulty">
                    ${challenge.difficulty}
                </span>

                <p>${challenge.description}</p>

                <h4>Expected Outcome</h4>

                <p>${challenge.outcome}</p>

                <button onclick="viewChallenge(${challenge.id})">
                    View Challenge
                </button>

            </div>
        `;

    });
}

// 5. TRACK FILTER EVENT LISTENERS

trackButtons.forEach(button => {

    button.addEventListener("click", () => {

        selectedTrack = button.dataset.track;

        trackButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        displayChallenges();

    });

});


// ==========================================
// 6. DIFFICULTY FILTER EVENT LISTENERS
// ==========================================

difficultyButtons.forEach(button => {

    button.addEventListener("click", () => {

        selectedDifficulty = button.dataset.difficulty;

        difficultyButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        displayChallenges();

    });

});

// 7. VIEW CHALLENGE DETAILS

function viewChallenge(id) {

    const challenge = challenges.find(item => item.id === id);

    if (!challenge) return;

    const modal = document.getElementById("challenge-modal");
    const modalDetails = document.getElementById("modal-details");

    modalDetails.innerHTML = `
        <h2>${challenge.name}</h2>

        <p><strong>Track:</strong> ${challenge.track}</p>

        <p><strong>Difficulty:</strong> ${challenge.difficulty}</p>

        <p><strong>Objective:</strong> ${challenge.objective}</p>

        <p><strong>Skills:</strong> ${challenge.skills}</p>

        <p><strong>Tools:</strong> ${challenge.tools}</p>

        <p><strong>Expected Output:</strong> ${challenge.output}</p>

        <p><strong>Estimated Time:</strong> ${challenge.time}</p>

        <p><strong>Expected Result:</strong> ${challenge.expected}</p>
    `;

    modal.classList.add("active");
}


// CLOSE MODAL

const modal = document.getElementById("challenge-modal");
const closeModal = document.getElementById("modal-close");

closeModal.addEventListener("click", () => {
    modal.classList.remove("active");
});

modal.addEventListener("click", event => {
    if (event.target === modal) {
        modal.classList.remove("active");
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        modal.classList.remove("active");
    }
});

// 8. INITIALIZE CHALLENGE HUB

displayChallenges();
