const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

/* Load saved tasks */
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

/* Render tasks */
function renderTasks(){
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerText = task.text;

        if(task.done){
            li.style.textDecoration = "line-through";
        }

        /* Toggle complete */
        li.addEventListener("click", () => {
            tasks[index].done = !tasks[index].done;
            saveTasks();
        });

        /* Delete button */
        const delBtn = document.createElement("button");
        delBtn.innerText = "❌";

        delBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            tasks.splice(index, 1);
            saveTasks();
        });

        li.appendChild(delBtn);
        taskList.appendChild(li);
    });
}

/* Save to localStorage */
function saveTasks(){
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
}

/* Add task */
function addTask(){
    const text = input.value.trim();

    if(text === ""){
        alert("Write something first 😏");
        return;
    }

    tasks.push({ text: text, done: false });
    input.value = "";
    saveTasks();
}

/* Events */
addBtn.addEventListener("click", addTask);

input.addEventListener("keypress", (e) => {
    if(e.key === "Enter"){
        addTask();
    }
});

/* Initial render */
renderTasks();