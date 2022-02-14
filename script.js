const btnMenu = document.querySelector('#btnMenu')
const nav = document.querySelector('.nav-ul')

btnMenu.addEventListener('click', () => {
    nav.classList.toggle('show')
})
