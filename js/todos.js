const toDoBtn = document.querySelector('#todo-form button')
const toDoInput = document.querySelector('#todo-form input')
const toDoList = document.getElementById('todo-list')

const TODOS_KEY = 'todos'

let toDos = []

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function deleteToDo(event) {
  const li = event.target.parentElement
  li.remove()
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id))
  saveToDos()
}

function paintToDo(newTodo) {
  const li = document.createElement('li')
  li.id = newTodo.id
  const span = document.createElement('span')
  span.innerText = newTodo.text
  const button = document.createElement('button')
  button.innerText = '❌'
  button.addEventListener('click', deleteToDo)
  li.appendChild(span)
  li.appendChild(button)
  toDoList.appendChild(li)
}

function handleToDoSubmit(event) {
  event.preventDefault()
  const isAllowed = true
  if (toDoInput.value === '') {
    return
  }
  const newTodo = toDoInput.value
  toDoInput.value = ''
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  }
  if (toDos.length > 9) {
    alert("can't store more todos")
    isAllowed = false
  }
  if (isAllowed) {
    toDos.push(newTodoObj)
    paintToDo(newTodoObj)
    saveToDos()
  }
}

toDoBtn.addEventListener('click', handleToDoSubmit)

const savedToDos = localStorage.getItem(TODOS_KEY)

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos)
  toDos = parsedToDos
  parsedToDos.forEach(paintToDo)
}
