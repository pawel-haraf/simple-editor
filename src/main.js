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

check.addEventListener('click', () => {
	const textLength = textarea.value.length
	textarea.classList.remove('text-black')
	if (textLength > 10) {
		textarea.classList.add('text-green-600')
		textarea.classList.remove('text-red-600')
	} else {
		textarea.classList.add('text-red-600')
		textarea.classList.remove('text-green-600')
	}
})
