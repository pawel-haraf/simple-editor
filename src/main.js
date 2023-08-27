const textarea = document.querySelector('.textarea--js')
const save = document.querySelector('.button-save--js')
const load = document.querySelector('.button-load--js')

console.log(textarea)

save.addEventListener('click', e => {
	e.preventDefault()
	localStorage.setItem('save', textarea.value)
})

const fromStorage = localStorage.getItem('save')
console.log(fromStorage)

load.addEventListener('click', e => {
	e.preventDefault()
	textarea.innerHTML = fromStorage
})
console.log(textarea)
