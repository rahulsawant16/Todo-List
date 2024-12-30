let input = document.querySelector(".task-input");

let addBtn = document.querySelector(".add-btn");

let deleteBtn = document.querySelector(".delete-btn");

let taskContainer = document.querySelector(".task-container");

let todoList = [];

printTask();

addBtn.addEventListener("click", ()=>{
    let todo = input.value;
    if (todo == "") {
        alert("Enter todo first.");
        return
    }
    todoList.push(todo);
    input.value = "";

    printTask();
});

function printTask() {
    if (todoList.length == 0) {
        taskContainer.innerHTML = "";
        return;    
    }

    taskContainer.innerHTML = "";

    for (const i in todoList) {
        taskContainer.innerHTML += `<div class="task-box">
            <p class="task">${todoList[i]}</p>
            <button class="btn delete-btn" onclick="deleteTask(${i})">Delete</button>
          </div>`;
    }

    
}

function deleteTask(i) {
    todoList.splice(i, 1);
    printTask();
}