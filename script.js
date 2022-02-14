const btnMenu = document.querySelector('#btnMenu')
const nav = document.querySelector('.nav-ul')
const copyBtn = document.querySelector('.btn-copy')
const copyText = document.querySelector('#copyEmail')
btnMenu.addEventListener('click', () => {
    nav.classList.toggle('show')
})

copyBtn.addEventListener('click', () => {
    copyText.select();
    document.execCommand('copy')
    copyBtn.innerHTML = "<i class='bi bi-clipboard-check'></i>"
    copyBtn.className = 'coped'
})