const buttonMenu = document.querySelector('#botaoMenu')
const buttonMenuBack = document.querySelector('.c_menu i')
const sidebar = document.querySelector('.sidebar')
const cobreMenu = document.querySelector('.cobreMenu')

buttonMenu.addEventListener('click', () => { 
    sidebar.classList.add('open')
    cobreMenu.classList.add('open')
})
buttonMenuBack.addEventListener('click', () => { 
    sidebar.classList.remove('open')
    cobreMenu.classList.remove('open')
})