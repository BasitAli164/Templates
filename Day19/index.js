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
  sortSelect.addEventListener("change", function() {
    currentSort = this.value;
    renderTasks();
  });
  filterButtons.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        filterButtons.forEach((b)=>{
            b.classList.remove("active","bg-violet-100","text-violet-700")
        });
        btn.classList.add("active", "bg-violet-100", "text-violet-700")

        currentFilter=btn.dataset.filter;
        renderTasks();
    })
  })

  renderTasks();
});
