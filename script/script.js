document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('todoForm');
            const input = document.getElementById('todoInput');
            const todoList = document.getElementById('todoList');

            form.addEventListener('submit', function(event) {
                event.preventDefault();
                const newTodo = input.value.trim();
                if (newTodo) {
                    const li = document.createElement('li');
                    li.textContent = newTodo;
                    li.addEventListener('click', function() {
                        li.style.textDecoration = li.style.textDecoration === 'line-through' ? '' : 'line-through';
                    });
                    todoList.appendChild(li);
                    input.value = '';
                }
            });
});

// This script adds a new todo item to the list when the form is submitted.
// It prevents the default form submission behavior, checks if the input is not empty,
// creates a new list item, and appends it to the todo list. Finally, it clears the input field.
// The script runs when the DOM content is fully loaded to ensure all elements are available.


// this one adds a click event that removes the todo item from the list when clicked.
// It toggles the text decoration between line-through and none to mark the item as completed or not.
document.addEventListener('DOMContentLoaded', function() {
            const todoList = document.getElementById('todoList');

            todoList.addEventListener('dblclick', function(event) {
                if (event.target.tagName === 'LI') {
                    event.target.remove();
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
