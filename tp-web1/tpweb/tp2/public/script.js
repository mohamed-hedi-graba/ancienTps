document.addEventListener('DOMContentLoaded', () => {
    const contentInput = document.getElementById("content");
    const nameInput = document.getElementById("name");
    const submit = document.getElementById("submit");
    const todoList = document.getElementById("todo-list");

    submit.onclick = function () {
        const name = nameInput.value.trim();
        const content = contentInput.value.trim();
        addTodo(name, content, todoList, nameInput, contentInput);
    };
});

const colors = ["#0000FF", "#1E90FF", "#87CEEB", "#4682B4", "#5F9EA0","#007bff","#00CED1"];

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function addTodo(name, content, todoList, nameInput, contentInput) {
    if (!name || !content) {
        window.alert("Invalid input!");
        return;
    }

    const newTodo = document.createElement('li');
    newTodo.className = 'todo-item';
    newTodo.innerHTML = `
        ${name} : ${content}
        <span class="delete">&#128465;</span>
    `;
    newTodo.style.backgroundColor = getRandomColor();
    todoList.appendChild(newTodo);

    nameInput.value = '';
    contentInput.value = '';
    newTodo.addEventListener('click', () =>{
        newTodo.style.backgroundColor = getRandomColor();
    })
    const deleteButton = newTodo.querySelector('.delete');
    deleteButton.addEventListener('click', () => {
        todoList.removeChild(newTodo);
    });
    
}
