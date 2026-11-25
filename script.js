// WEB DEVELOPMENT INTERNSHIP TASKS

const webDevelopmentTasks = [

    {
        number: 1,
        title: "Build the TechBridge Homepage",
        day: 1,
        description: "Create the first version of the TechBridge website using HTML and CSS.",
        difficulty: "Beginner"
    },

    {
        number: 2,
        title: "Build the TechBridge Programs Experience",
        day: 4,
        description: "Create a Programs experience presenting TechBridge's available learning programs.",
        difficulty: "Beginner"
    },

    {
        number: 3,
        title: "Build the Internship Tasks Experience",
        day: 8,
        description: "Create an interface that presents the TechBridge internship tasks and helps users understand the internship journey.",
        difficulty: "Beginner → Intermediate"
    },

    {
        number: 4,
        title: "Build an Interactive Internship Roadmap",
        day: 11,
        description: "Use JavaScript to allow visitors to switch between the Data Analytics and Web Development internship tracks.",
        difficulty: "Beginner → Intermediate"
    },

    {
        number: 5,
        title: "Build the Intern Registration Experience",
        day: 15,
        description: "Create a professional registration and onboarding interface for TechBridge interns.",
        difficulty: "Intermediate"
    },

    {
        number: 6,
        title: "Build the Task Submission System",
        day: 19,
        description: "Create an interface through which interns can prepare and submit their task work.",
        difficulty: "Intermediate"
    },

    {
        number: 7,
        title: "Build the Intern Dashboard",
        day: 22,
        description: "Create a dashboard where an intern can view their profile, progress, tasks and submissions.",
        difficulty: "Intermediate"
    },

    {
        number: 8,
        title: "Build the Complete TechBridge Internship Platform",
        day: 26,
        description: "Combine the different components created during the internship into a complete TechBridge platform.",
        difficulty: "Intermediate"
    }

];

// DATA ANALYTICS INTERNSHIP TASKS

const dataAnalyticsTasks = [

    {
        number: 1,
        title: "Data Cleaning Basics",
        day: 1,
        description: "Clean a messy dataset using Google Sheets or Excel. Identify and fix duplicate rows, blank cells, inconsistent formatting, and incorrect data types.",
        difficulty: "Beginner"
    },

    {
        number: 2,
        title: "Formulas & Pivot Tables",
        day: 4,
        description: "Use spreadsheet formulas and Pivot Tables to answer questions and extract useful insights from a dataset.",
        difficulty: "Beginner"
    },

    {
        number: 3,
        title: "Data Visualization",
        day: 8,
        description: "Create charts and a simple dashboard that communicate useful insights from a dataset.",
        difficulty: "Beginner → Intermediate"
    },

    {
        number: 4,
        title: "Introduction to SQL",
        day: 11,
        description: "Practice basic SQL queries and use them to answer real-world questions about data.",
        difficulty: "Beginner → Intermediate"
    },

    {
        number: 5,
        title: "SQL Joins & Aggregations",
        day: 15,
        description: "Use JOIN, GROUP BY and aggregate functions such as COUNT, SUM and AVG to analyze information across multiple tables.",
        difficulty: "Intermediate"
    },

    {
        number: 6,
        title: "Lookup Functions & Data Wrangling",
        day: 19,
        description: "Use VLOOKUP or XLOOKUP to combine related datasets and handle data mismatches.",
        difficulty: "Intermediate"
    },

    {
        number: 7,
        title: "Mini Analysis Project",
        day: 22,
        description: "Complete a small end-to-end analysis involving data cleaning, formulas, Pivot Tables, charts and recommendations.",
        difficulty: "Intermediate"
    },

    {
        number: 8,
        title: "Capstone Project",
        day: 26,
        description: "Complete a larger project combining spreadsheet analysis and SQL using at least two related tables.",
        difficulty: "Intermediate"
    }

];

// SELECT HTML ELEMENTS

let currentTrack = "web";

const taskContainer = document.getElementById("task-container");

const trackTitle = document.getElementById("track-title");

const trackButtons = document.querySelectorAll(".track-btn");

// DISPLAY INTERNSHIP TASKS

function displayTasks(track) {

    let selectedTasks;

    if (track === "web") {
        selectedTasks = webDevelopmentTasks;
        trackTitle.textContent = "Web Development";
    } else {
        selectedTasks = dataAnalyticsTasks;
        trackTitle.textContent = "Data Analytics";
    }

    taskContainer.innerHTML = "";

    selectedTasks.forEach(function(task) {

        taskContainer.innerHTML += `
            <div class="interactive-task-card">

                <div class="interactive-task-top">
                    <span class="interactive-task-number">
                        Task ${task.number}
                    </span>

                    <span class="interactive-task-day">
                        Day ${task.day}
                    </span>
                </div>

                <h3>${task.title}</h3>

                <p>${task.description}</p>

                <span class="interactive-task-level ${
                    task.difficulty === "Beginner"
                        ? "beginner"
                        : task.difficulty === "Intermediate"
                            ? "intermediate"
                            : "progressing"
                         }">
                    ${task.difficulty}
                </span>

            </div>
        `;

    });

}
// TRACK BUTTON EVENT LISTENERS

trackButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        currentTrack = button.dataset.track;

        displayTasks(currentTrack);

        trackButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

    });

});

displayTasks(currentTrack);