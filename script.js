const btnMenu = document.querySelector('#btnMenu')
const nav = document.querySelector('.nav-ul')
const copyBtn = document.querySelector('.btn-copy')
const copyText = document.querySelector('#copyEmail')

// Responsive Menu
btnMenu.addEventListener('click', () => {
    nav.classList.toggle('show')
})
// Copy Clipboard
copyBtn.addEventListener('click', () => {
    copyText.select();
    document.execCommand('copy')
    copyText.setSelectionRange(0, 99999)
    copyBtn.innerHTML = "<i class='bi bi-clipboard-check'></i>"
    copyBtn.className = 'coped'
})