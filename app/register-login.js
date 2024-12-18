const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelectorAll('.login-link');
const registerLink = document.querySelector('.register-link');
const botaoEntrar = document.querySelector('.botao__entrar');
const botaoRegistrar = document.querySelector('.botao__registrar');
const iconClose = document.querySelector('.icon-close');
const botaoBanner = document.querySelector('.banner__botao');
const mensagensDeErro = document.querySelectorAll('.mensagem-erro')
const inputs = document.querySelectorAll('[required]')
const labels = document.querySelectorAll('[data-label]')
const botaoRecuperar = document.getElementById('recoverPassword')

const menu = document.querySelector('.cabecalho__menu')
const btnContainer = document.querySelector('.cabecalho__container')

menu.addEventListener('click', () => {
    btnContainer.classList.toggle('active')
})

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
    limpaCampo()
})

loginLink.forEach(btn => btn.addEventListener('click', () => {
    wrapper.classList.remove('active');
    wrapper.classList.remove('recovery');
    limpaCampo()
}))

botaoEntrar.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
    wrapper.classList.remove('active');
    wrapper.classList.remove('recovery');
    limpaCampo()
    btnContainer.classList.remove('active')
})

botaoRecuperar.addEventListener('click', () => {
    wrapper.classList.add('recovery')
})

botaoRegistrar.addEventListener('click', () => {
    wrapper.classList.add('active');
    wrapper.classList.add('active-popup');
    wrapper.classList.remove('recovery');
    limpaCampo()
    btnContainer.classList.remove('active')
})

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
    limpaCampo()
})

botaoBanner.addEventListener('click', () => {
    wrapper.classList.add('active');
    wrapper.classList.add('active-popup');
    wrapper.classList.remove('recovery');
    limpaCampo()
    btnContainer.classList.remove('active')
})

function limpaCampo(){
    mensagensDeErro.forEach((mensagem) => {
        mensagem.innerHTML = ""
    })
    inputs.forEach((input) => {
        input.value = ""
        if(input.id === "terms"){
            input.checked = false
        }
    })
    labels.forEach((label) => {
        label.style.top = ""
    })
}

function redirecionar(){
    window.location.href="../index.html"
    console.log('oi')
}
