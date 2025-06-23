document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('todoForm');
            const input = document.getElementById('todoInput');
            const todoList = document.getElementById('todoList');
            const iconClear = document.getElementById('iconClear');

            form.addEventListener('submit', function(event) {
                event.preventDefault();
                const newTodo = input.value.trim();
                if (newTodo) {
                    const li = document.createElement('li');
                    li.textContent = newTodo;
                    // Adding a click event to change the background color
                    li.addEventListener('click', function() {
                        li.style.background = li.style.background === 'green' ? '' : 'green';
                    });
                    // Adding a double-click event to remake the todo item
                    li.addEventListener('auxclick', function() {
                        const remakeInput = prompt('Edit your todo item:', li.textContent);
                        if (remakeInput !== null) {
                            li.textContent = remakeInput;
                            li.style.textDecoration = '';
                            li.style.background = '';
                        }
                    });
                    todoList.appendChild(li);
                    input.value = '';
                }
            });
});
//This ask to the user which item to remove when hold the click, it removes it from the list
document.addEventListener('DOMContentLoaded', function() {
            const todoList = document.getElementById('todoList');

            todoList.addEventListener('dblclick', function(event) {
                if (event.target.tagName === 'LI') {
                    const itemToRemove = event.target;
                    if (confirm(`Are you sure you want to remove "${itemToRemove.textContent}"?`)) {
                        todoList.removeChild(itemToRemove);
                    }
                }
            });
});
// This script adds a double-click event listener to the todo list.
// When an item is double-clicked, it removes that item from the list.

document.addEventListener('DOMContentLoaded', function () {
            const clearTasksButton = document.getElementById('clearTasksButton');
            const todoList = document.getElementById('todoList');

            clearTasksButton.addEventListener('click', function (event) {
            event.preventDefault();
            if (confirm('Are you sure you want to clear all tasks?')) {
            todoList.innerHTML = '';
            }
            });
});
