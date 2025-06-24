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
                    todoList.appendChild(li);
                    input.value = ''; // Clear the input field
//Add a clear button to each todo item
                    const clear = document.createElement('button');
                    clear.classList.add('liButton')
                    clear.textContent = 'Clear';
                    li.appendChild(clear);
                    clear.addEventListener('click', function() {
                        if (confirm('Are you sure you want to delete this task?')) {
                            li.remove();
                        }
                    });
//Add a Edit button to each todo item
                    const edit = document.createElement('button');
                    edit.classList.add('liButton')
                    edit.textContent = 'Edit';
                    li.appendChild(edit);
                    edit.addEventListener('click', function() {
                        const newText = prompt('Edit your todo item:', li.firstChild.textContent);
                        if (newText !== null && newText.trim() !== '') {
                            li.firstChild.textContent = newText.trim();
                        }
                    });
//Add a Done button to each todo item making it green when clicked
                    const done = document.createElement('button');
                    done.classList.add('liButton')
                    done.textContent = 'Done';
                    li.appendChild(done);
                    done.addEventListener('click', function() {
                        li.style.textDecoration = 'line-through';
                        li.style.background = 'green';
                    });
                }
            });
});
// Clear all tasks button functionality
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
