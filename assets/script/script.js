var light = document.getElementById('light')
var dark = document.getElementById('dark')
var body = document.querySelector('body')

light.addEventListener('click', () => {
    dark.style.display = 'block'
    light.style.display = 'none'
    body.classList.add('dark')
})
dark.addEventListener('click', () => {
    dark.style.display = 'none'
    light.style.display = 'block'
    body.classList.remove('dark')
})