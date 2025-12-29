window.addEventListener("DOMContentLoaded", () => {
  // get all element to put logic on them or put action on them

  const taskInput = document.getElementById("new-task");
  const addTaskBtn = document.getElementById("add-task-btn");
  const taskList = document.getElementById("task-list");
  const taskCount = document.getElementById("task-count");
  const remainingTasks = document.getElementById("remaining-tasks");
  const clearCompletedBtn = document.getElementById("clear-completed");
  const exportTasksBtn = document.getElementById("export-tasks");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const sortSelect = document.getElementById("sort-tasks");
  const categorySelect = document.getElementById("task-category");
  const prioritySelect = document.getElementById("task-priority");

  // initailize data structure to store data
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  let currentFilter = "all";
  let currentSort = "newest";

  // bind all eventListner which are required
  addTaskBtn.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  });
  clearCompletedBtn.addEventListener("click", clearCompleted);
  exportTasksBtn.addEventListener("click", exportTask);
  sortSelect.addEventListener("change", function () {
    currentSort = this.value;
    renderTasks();
  });
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => {
        b.classList.remove("active", "bg-violet-100", "text-violet-700");
      });
      btn.classList.add("active", "bg-violet-100", "text-violet-700");

      currentFilter = btn.dataset.filter;
      renderTasks();
    });
  });

  renderTasks();
  updateStats();

  // make a required function

  function saveTask() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function addTask() {
    const text = taskInput.value.trim();
    if (text) {
      const newTask = {
        id: Date.now(),
        text: text,
        completed: false,
        createdAt: new Date(),
        category: categorySelect.value,
        priority: prioritySelect.value,
      };

      tasks.unshift(newTask);
      saveTask();
      renderTasks();
      updateStats();
      taskInput.value = "";
      taskInput.focus(); // i don't know what is this

      addTaskBtn.innerHTML = `
      <i class"fas fa-check"></i>;      
      `;
      addTaskBtn.classList.add("animate-bounce-once");
      setTimeout(() => {
        addTaskBtn.innerHTML = `
        <i class="fas fa-plus"></i>
        `;
        addTaskBtn.classList.remove("animate-bounce-once");
      }, 1000);
    }
  }

  function renderTasks() {
    const fragment = document.createDocumentFragment();
    let filteredTasks = filterAndSortTasks();

    if (filteredTasks.lenght === 0) {
      const emptyMessage = createEmptyStateElement(currentFilter);
      fragment.appendChild(emptyMessage);
    } else {
      filteredTasks.forEach((task) => {
        const taskElement = createTaskElement(task);
        fragment.appendChild(taskElement);
      });
    }
    taskList.innerHTML = "";
    taskList.appendChild(fragment);
  }

  function filterAndSortTasks() {
    if (tasks.length === 0) return [];

    let filtered = [...tasks];
    if (currentFilter === "active") {
      filtered = filtered.filter((task) => !task.completed);
    } else if (currentFilter === "completed") {
      filtered = filtered.filter((task) => task.completed);
    }

    return sortTasks(filtered);
  }

  function createEmptyStateElement(filter) {
    const li = document.createElement("li");
    li.className = "p-8 text-center text-gray-400";

    const message =
      filter === "active"
        ? "No active tasks"
        : filter === "completed"
        ? "No completed tasks"
        : "No task yet";

    li.innerHTML = `
    <i class="fas fa-tasks text-5xl mb-4 opacity-30"></i>
    <p class="text-lg">${message}</p>
    `;

    return li;
  }

  function createTaskElement(task) {
    const li = document.createElement("li");
    li.className = "task-item group p-6 hover:bg-gray-50 transition";
    li.dataset.id = task.id;

    li.innerHTML = `
    <div class="flex items-start">
    
    <label class="flex items-start cursor-pointer">
    <input
      type="checkbox"
      class="checkbox h-6 w-6 text-violet-600 rounded focus:ring-violet-500 mt-1 mr-2 accent-violet-500"
      ${task.completed ? "checked" : ""} 
    
    />
    <div class="ml-3">
    <span class="task-text block text-lg ${
      task.completed ? "line-through text-gray-400" : "text-gray-700"
    }">
  ${task.text}
    </span>
    <div class="flex flex-wrap gap-2 mt-2">
    <span class="inline-block px-2 ppy-1 rounded-full text-xs font-medium ${getCategoryClass(
      task.category
    )}">
    <i class="${getCategoryIcon(task.category)} mr-1"></i>
    ${task.category.chartAt(0).toUpperCase() + task.category.slice(1)}
    </span>

    <span class="inline-block px-2 py-1 rounded-full text-xs font-medium ${getPriorityClass(
      task.priority
    )}">
    <i class="${getPriorityIcon(task.priority)} mr-1"></i>

  ${task.priority.chartAt(0).toUpperCase() + task.priority.slice(1)}
    
    
    </span>


    </div>

    </div>
    
    </label>
     <div class="task-actions ml-auto flex space-x-3">
                <button class="edit-btn p-2 text-gray-400 hover:text-violet-600">
                    <i class="fas fa-pencil-alt"></i>
                </button>
                <button class="delete-btn p-2 text-gray-400 hover:text-red-600">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>    
    </div>
     
     ${
       task.completed
         ? `<div class="mt-3 text-sm text-gray-400 flex items-center">
                <i class="fas fa-check-circle mr-2"></i>
                Completed ${formatDate(task.completedAt || new Date())}
            </div>`
         : `<div class="mt-3 text-sm text-gray-400">
                <i class="fas fa-plus-circle mr-2"></i>
                Added ${formatDate(task.createdAt)}
            </div>`
     }    
    `;

    return li;
  }

  function sortTasks(tasksToSort) {
    switch (currentSort) {
      case "newest":
        return [...tasksToSort].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
      case "oldest":
        return [...tasksToSort].sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createAt)
        );
      case "priority":
        const priorityOrder = { high: 3, medium: 2, low: 1 };
        return [...tasksToSort].sort(
          (a, b) => priorityOrder[b.priority] - priorityOrder[a.priority]
        );

      case "category":
        return [...tasksToSort].sort((a, b) =>
          a.category.localeCompare(b.category)
        );
      default:
        return tasksToSort;
    }
  }
  function getCategoryClass(category) {
    const classes = {
      general: "bg-gray-100 text-gray-800",
      work: "bg-teal-100 text-teal-800",
      personal: "bg-sky-100 text-sky-800",
      shopping: "bg-green-100 text-green-800",
      health: "bg-rose-100 text-red-800",
    };
    return classes[category] || classes.general;
  }

  function getCategoryIcon(category) {
    const icons = {
      general: "fas fa-list",
      work: "fas fa-briefcase",
      personal: "fas fa-user",
      shopping: "fas fa-shopping-cart",
      health: "fas fa-heartbeat",
    };
    return icons[category] || icons.general;
  }

  function getPriorityClass(priority) {
    const classes = {
      low: "bg-gray-100 text-gray-800",
      medium: "bg-yellow-100 text-yellow-800",
      high: "bg-rose-100 text-red-800",
    };
    return classes[priority] || classes.medium;
  }

  function getPriorityIcon(priority) {
    const icons = {
      low: "fas fa-arrow-down",
      medium: "fas fa-equals",
      high: "fas fa-arrow-up",
    };
    return icons[priority] || icons.medium;
  }
});
