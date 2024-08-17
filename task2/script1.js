// script.js

document.getElementById('addTaskBtn').addEventListener('click', function() {
    addTask();
});

document.getElementById('taskInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', function() {
            const newTaskText = prompt('Edit your task:', li.firstChild.textContent);
            if (newTaskText !== null && newTaskText.trim() !== '') {
                li.firstChild.textContent = newTaskText.trim();
            }
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', function() {
            li.remove();
        });

        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        document.getElementById('taskList').appendChild(li);

        taskInput.value = '';
    }
}
