const menu = document.querySelector('.menu')
const closeMenu = document.querySelector('.close-menu')

function abrirMenu() {
    menu.classList.add('open')
}

function fecharMenu() {
    menu.classList.remove('open')
}