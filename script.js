const btnMenu = document.querySelector('#btnMenu')
const nav = document.querySelector('.nav-ul')
const copyBtn = document.querySelector('.btn-copy')
const copyText = document.querySelector('#copyEmail')
// Responsive Menu
btnMenu.addEventListener('click', () => {
    nav.classList.toggle('show')
})
//Alert
let alertInfo = document.createElement('div')
let closeBtn = document.createElement('button')

closeBtn.classList.add('closeBtn')
closeBtn.innerHTML = '<i class="bi bi-x-circle"></i>'

alertInfo.classList.add('alertInfo')
alertInfo.innerText = "Jeżeli widzisz błędy na stronie poinformuj mnie!"

const body = document.querySelector('body');
body.prepend(alertInfo)

const x = document.querySelector('.alertInfo')
x.appendChild(closeBtn)

closeBtn.addEventListener('click', () => {
    document.body.removeChild(x)
})

function show() {
    const di = document.querySelector('.alertInfo')
    di.classList.add('show');
}

setTimeout(show, 5000);
// Copy clipboard
copyBtn.addEventListener('click', () => {
    copyText.select();
    document.execCommand('copy')
    copyText.setSelectionRange(0, 99999)
    copyBtn.innerHTML = "<i class='bi bi-clipboard-check'></i>"
    copyBtn.className = 'coped'
})