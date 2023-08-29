const textarea = document.querySelector('.textarea--js')
const save = document.querySelector('.button-save--js')
const load = document.querySelector('.button-load--js')
const check = document.querySelector('.check--js')

save.addEventListener('click', () => {
	localStorage.setItem('save', textarea.value)
})

const fromStorage = localStorage.getItem('save')
console.log(fromStorage)

load.addEventListener('click', () => {
	textarea.value = fromStorage
})

let color = 'green'

check.addEventListener('click', () => {
	const textLength = textarea.value.length
	textarea.classList.remove('text-gray-400')
	textarea.classList.remove(`text-${color}-500`)
	if (textLength <= 10) {
		color = 'red'
	} else if (textLength > 10 && textLength <= 20) {
		color = 'blue'
	} else {
		color = 'green'
	}
	textarea.classList.add(`text-${color}-500`)
})
