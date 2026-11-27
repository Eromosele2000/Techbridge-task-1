
const tasks = [
    {
        id: 1,
        title: "Task 1 — TechBridge Homepage",
        description: "Build the TechBridge homepage using HTML5 and CSS3.",
        status: "Completed"
    },
    {
        id: 2,
        title: "Task 2 — Programs Experience",
        description: "Create a programs page that presents the TechBridge learning programs.",
        status: "Completed"
    },
    {
        id: 3,
        title: "Task 3 — Dropped Task",
        description: "This task was dropped by TechBridge, so no submission was required.",
        status: "Completed"
    },
    {
        id: 4,
        title: "Task 4 — Internship Roadmap",
        description: "Build an interactive roadmap for the Web Development and Data Analytics tracks.",
        status: "Completed"
    },
    {
        id: 5,
        title: "Task 5 — Challenge Hub",
        description: "Build a Challenge Hub with filters and interactive challenge details.",
        status: "Completed"
    },
    {
        id: 6,
        title: "Task 6 — Intern Dashboard",
        description: "Build an interactive dashboard with task tracking and a technology explorer.",
        status: "In Progress"
    },
    {
        id: 7,
        title: "Task 7 — Upcoming Project",
        description: "This task will be updated when the official project brief is released.",
        status: "Not Started"
    },
    {
        id: 8,
        title: "Task 8 — Final Project",
        description: "This task will be updated when the official project brief is released.",
        status: "Not Started"
    }
];

// Restore saved task statuses
const savedTasks = JSON.parse(
    localStorage.getItem("techbridgeTasks") || "null"
);

if (savedTasks) {
    savedTasks.forEach(savedTask => {
        const task = tasks.find(item => item.id === savedTask.id);

        if (task) {
            task.status = savedTask.status;
        }
    });
}

// Ensure Task 6 remains in progress until you complete it
const taskSix = tasks.find(task => task.id === 6);

if (taskSix && taskSix.status !== "Completed") {
    taskSix.status = "In Progress";
}
// const savedTasks = JSON.parse(localStorage.getItem("techbridgeTasks"));

// if (savedTasks) {
//     savedTasks.forEach(savedTask => {
//         const task = tasks.find(item => item.id === savedTask.id);

//         if (task) {
//             task.status = savedTask.status;
//         }
//     });
// }

const taskContainer = document.getElementById("dashboard-task-container");
const taskCount = document.getElementById("dashboard-task-count");

function saveTasks() {
    localStorage.setItem("techbridgeTasks", JSON.stringify(tasks));
}

// Generate task cards
function displayTasks(filter = "All") {
    taskContainer.innerHTML = "";

    const filteredTasks = tasks.filter(task => {
        return filter === "All" || task.status === filter;
    });

    taskCount.textContent = `Showing ${filteredTasks.length} of ${tasks.length} tasks`;

    filteredTasks.forEach(task => {
        const card = document.createElement("div");
        card.className = "dashboard-task-card";

        card.innerHTML = `
            <h3>${task.title}</h3>
            <p>${task.description}</p>
            <span class="task-status">${task.status}</span>

            <div class="task-card-actions">
                <button class="view-task-btn" data-id="${task.id}">
                    View Task
                </button>

            ${
                task.status === "Completed"
                ? `<button class="unmark-task-btn" data-id="${task.id}">
                    Mark as In Progress
                </button>`
                : `<button class="complete-task-btn" data-id="${task.id}">
                    Mark as Completed
                </button>`
            }
            </div>
        `;

        taskContainer.appendChild(card);
    });

    updateProgress();
}

// Update progress information
function updateProgress() {
    const completed = tasks.filter(task => task.status === "Completed").length;
    const remaining = tasks.length - completed;
    const percentage = (completed / tasks.length) * 100;

    document.getElementById("completed-count").textContent = completed;
    document.getElementById("remaining-count").textContent = remaining;
    document.getElementById("progress-percentage").textContent =
        `${percentage.toFixed(1)}%`;

    document.getElementById("progress-bar").style.width =
        `${percentage}%`;

    document.getElementById("progress-text").textContent =
        `${completed} out of ${tasks.length} tasks completed`;
}

// Filter buttons
document.querySelectorAll(".task-filter").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".task-filter").forEach(item => {
            item.classList.remove("active");
        });

        button.classList.add("active");
        displayTasks(button.dataset.status);
    });
});

// Handle task buttons
taskContainer.addEventListener("click", event => {
    const taskId = Number(event.target.dataset.id);
    const selectedTask = tasks.find(task => task.id === taskId);

    if (!selectedTask) return;

    // Mark task as completed
    if (event.target.classList.contains("complete-task-btn")) {
        selectedTask.status = "Completed";

        saveTasks();

        const activeFilter = document.querySelector(
            ".task-filter.active"
        ).dataset.status;

        displayTasks(activeFilter);
    }

    // Mark completed task as in progress
    if (event.target.classList.contains("unmark-task-btn")) {
        selectedTask.status = "In Progress";

        saveTasks();

        const activeFilter = document.querySelector(
            ".task-filter.active"
        ).dataset.status;

        displayTasks(activeFilter);
    }

    // Open task details
    if (event.target.classList.contains("view-task-btn")) {
        document.getElementById("modal-task-title").textContent =
            selectedTask.title;

        document.getElementById("modal-task-description").textContent =
            selectedTask.description;

        document.getElementById("modal-task-status").textContent =
            `Status: ${selectedTask.status}`;

        document.getElementById("task-modal").classList.add("show");
    }
});

// Close modal
const taskModal = document.getElementById("task-modal");

document.getElementById("close-task-modal").addEventListener("click", () => {
    taskModal.classList.remove("show");
});

taskModal.addEventListener("click", event => {
    if (event.target === taskModal) {
        taskModal.classList.remove("show");
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        taskModal.classList.remove("show");
    }
});

// Display tasks when page loads
displayTasks();

// TECHNOLOGY EXPLORER

const technologies = {
    nextjs: {
        title: "Next.js",
        description: "Next.js is a React framework used to build fast, scalable and modern web applications.",
        uses: "Used for e-commerce websites, business platforms, blogs and full-stack applications.",
        features: "Server-side rendering, routing, API routes and image optimization."
    },

    vue: {
        title: "Vue.js",
        description: "Vue.js is a progressive JavaScript framework for building interactive user interfaces.",
        uses: "Used for dashboards, single-page applications and interactive websites.",
        features: "Reactive data binding, reusable components and a simple learning curve."
    },

    angular: {
        title: "Angular",
        description: "Angular is a TypeScript-based framework developed by Google for building web applications.",
        uses: "Used for large-scale business applications, enterprise platforms and complex dashboards.",
        features: "Components, dependency injection, routing and TypeScript support."
    },

    backend: {
        title: "Backend Development",
        description: "Backend development focuses on the server-side of applications, including databases, authentication and application logic.",
        uses: "Used to process requests, manage users, store information and connect applications to databases.",
       features: "Node.js — JavaScript runtime; Express.js — Node.js web framework; Django — Python web framework; Laravel — PHP framework."
    }
};

// Select technology buttons
const techButtons = document.querySelectorAll(".tech-btn");
const techContent = document.getElementById("technology-content");

// Display selected technology
techButtons.forEach(button => {
    button.addEventListener("click", () => {
        const selectedTech = button.dataset.tech;
        const tech = technologies[selectedTech];

        techContent.innerHTML = `
            <h3>${tech.title}</h3>
            <p>${tech.description}</p>
            <p><strong>Common Uses:</strong> ${tech.uses}</p>
            <p><strong>Key Features:</strong> ${tech.features}</p>
        `;

        techButtons.forEach(item => {
            item.classList.remove("active");
        });

        button.classList.add("active");
    });
});