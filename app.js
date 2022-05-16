const todoInput = document.querySelector(".todo-input")
const inputButton = document.querySelector(".submit-button")
const todoList = document.querySelector(".todo-list")
const filterOption = document.querySelector("#filter")

// by default, submit button is disabled
document.querySelector('.submit-button').disabled = true
document.querySelector('.todo-input').onkeyup = () => {
    if (document.querySelector('.todo-input').value.length > 0) {
        document.querySelector('.submit-button').disabled = false
    } else {
        document.querySelector('.submit-button').disabled = true
    }
}

// event listener
inputButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck)
filterOption.addEventListener('change', filterTask)

// functions
function addTodo(event) {

    // prevent form from submitting automatically
    event.preventDefault()

    // todo div
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')

        // create li
        const newTodo = document.createElement('li')
        newTodo.innerText = todoInput.value
        newTodo.classList.add('todo-item')
        todoDiv.appendChild(newTodo)

        // done button
        const doneButton = document.createElement('button')
        doneButton.innerHTML = '<i class="bi bi-check-lg"></i>'
        doneButton.classList.add('done-button')
        todoDiv.appendChild(doneButton)
        
        // delete button
        const deleteButton = document.createElement('button')
        deleteButton.innerHTML = '<i class="bi bi-trash"></i>'
        deleteButton.classList.add('delete-button')
        todoDiv.appendChild(deleteButton)

    // append to ul
    todoList.appendChild(todoDiv)

    // clear input value after entering
    todoInput.value = ''

    // disable submit again so it wont submit empty input on click/enter
    document.querySelector('.submit-button').disabled = true
}

function deleteCheck(e) {
    const item = e.target

    // delete task
    if (item.classList.contains('delete-button')) {
        const task = item.parentElement

        // animation
        task.classList.add('fall')
        task.addEventListener('transitionend', () => {
            task.remove()
        })
    }
    // toggle check mark
    if (item.classList.contains('done-button')) {
        const task = item.parentElement
        task.classList.toggle('done')
    }
}

function filterTask(e) {
    const todos = todoList.childNodes
    todos.forEach(function(kerja) {
        switch (e.target.value) {
            case "all":
                kerja.style.display = "flex"
                break
            case "completed":
                if (kerja.classList.contains("done")) {
                    kerja.style.display = "flex"
                } else {
                    kerja.style.display = "none"
                }
                break
            case "pending":
                if (!kerja.classList.contains("done")) {
                    kerja.style.display = "flex"
                } else {
                    kerja.style.display = "none"
                }
                break
        }
    })
}

