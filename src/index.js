const input = () => document.getElementById('new-task-description')
const form = () => document.getElementById('create-task-form')
const list = () => document.getElementById('list')
const tasks = () => document.getElementById('tasks')
document.addEventListener("DOMContentLoaded", () => {
  form().addEventListener('submit', handleSubmit)
});

const handleSubmit = (event) => {
  event.preventDefault()
  let task = input().value
  let p = document.createElement('p')
  let button = document.createElement('button')
  button.addEventListener('click', handleClick)
  button.innerText = 'Delete'
  button.style.fontSize = '16px'
  p.id = 'p'
  p.innerText = task
  tasks().appendChild(p)
  tasks().appendChild(button)
  input().value = ''
}

const handleClick = (event) => {
  document.getElementById('p').remove()
  event.target.remove()
}
