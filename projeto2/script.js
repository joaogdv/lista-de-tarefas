document.addEventListener('DOMContentLoaded', function () {
    const taskList = document.getElementById('task-list');
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');

    addTaskBtn.addEventListener('click', function () {
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            createTask(taskText);
            taskInput.value = '';
        }
    });

    taskInput.addEventListener('keyup', function (e) {
        if (e.key === 'Enter') {
            const taskText = taskInput.value.trim();

            if (taskText !== '') {
                createTask(taskText);
                taskInput.value = '';
            }
        }
    });

    taskList.addEventListener('click', function (e) {
        if (e.target.classList.contains('delete-btn')) {
            e.target.parentElement.remove();
        }
    });

    function createTask(text) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${text}</span>
            <button class="delete-btn">Excluir</button>
        `;
        taskList.appendChild(li);
    }
});