const menu = document.querySelector('.menu')
const overlay = document.querySelector('.overlay')
const closeMenu = document.querySelector('.close-menu')

function abrirMenu() {
    menu.classList.add('open')
    overlay.classList.add('open')
}

function fecharMenu() {
    menu.classList.remove('open')
    overlay.classList.remove('open')
}