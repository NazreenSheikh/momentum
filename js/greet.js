const loginform = document.getElementById('form-input')
const input = loginform.querySelector('.user-input')
const greet = document.querySelector('.greet')

const HIDDEN_CLASS = 'hidden'
const USERNAME_KEY = 'username'

const savedUser = localStorage.getItem(USERNAME_KEY)
if (savedUser === null) {
  loginform.classList.remove(HIDDEN_CLASS)
  loginform.addEventListener('submit', subForm)
} else {
  Greetings(savedUser)
}

function subForm(e) {
  e.preventDefault()
  loginform.classList.add(HIDDEN_CLASS)
  const username = input.value
  localStorage.setItem(USERNAME_KEY, username)
  Greetings(username)
}

function Greetings(username) {
  greet.innerText = `hello ${username}`
  greet.classList.remove(HIDDEN_CLASS)
}
