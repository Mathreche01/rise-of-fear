const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
]

const mensagens = {
    username: {
        valueMissing: "Nome de usuário inválido.",
        patternMismatch: "Nome de usuário inválido.",
        tooShort: "Nome de usuário inválido.",
    },
    email: {
        valueMissing: "Endereço de e-mail inválido.",
        patternMismatch: "Endereço de e-mail inválido.",
        tooShort: "Endereço de e-mail inválido.",
        customError: "Endereço de e-mail já cadastrado."
    },
    password: {
        valueMissing: "Senha inválida.",
        patternMismatch: "Senha inválida.",
        tooShort: "Senha inválida."
    },
    terms: {
        valueMissing: "Aceite os termos de uso.",
    },
    loginPassword: {
        valueMissing: "Senha inválida.",
        patternMismatch: "Senha inválida.",
        tooShort: "Senha inválida.",
        customError: "Dados incorretos."
    },
    recoverEmail: {
        valueMissing: "Endereço de e-mail inválido.",
        patternMismatch: "Endereço de e-mail inválido.",
        tooShort: "Endereço de e-mail inválido.",
        typeMismatch: "Endereço de e-mail inválido.",
        customError: "E-mail ainda não cadastrado."
    },
    loginEmail: {
        valueMissing: "Endereço de e-mail inválido.",
        patternMismatch: "Endereço de e-mail inválido.",
        tooShort: "Endereço de e-mail inválido.",
        customError: "Dados incorretos."
    },
    recoverPassword: {
        valueMissing: "Senha inválida.",
        patternMismatch: "Senha inválida.",
        tooShort: "Senha inválida.",
        customError: "Sessão inválida."
    },
    confirmPassword: {
        valueMissing: "Senha inválida.",
        patternMismatch: "Senha inválida.",
        tooShort: "Senha inválida.",
        customError: "As senhas inseridas não coincidem."
    }
}

export default function verificaCampo(campo){
    let mensagem = ""
    tiposDeErro.forEach( (erro) => {
        if(campo.validity[erro]) {
            mensagem = mensagens[campo.id][erro]
            return erro
        }
    })
    var mensagemErro;

    if(campo.id == "loginPassword" || campo.id == "loginEmail"){
        mensagemErro = document.querySelector('[data-erro-login]')
    } else if((campo.id == "recoverPassword" || campo.id == "confirmPassword") && campo.validity.customError === true){
        mensagemErro = document.querySelector('[data-erro-recover')
    } else if(campo.id != "terms"){
        mensagemErro = campo.parentNode.querySelector('.mensagem-erro')
    } else {
        mensagemErro = document.querySelector('[data-termos]')
    }

    const validadorDeInput = campo.checkValidity()

    if(!validadorDeInput){
        mensagemErro.textContent = mensagem
        campo.addEventListener('click', function(){
            mensagemErro.textContent = ""
        })
        return false
    } else {
        mensagemErro.textContent = ""
        return true
    }
}

const inputs = document.querySelectorAll('[required]')
inputs.forEach((input) => {
    input.addEventListener('blur', function(){
        const label = input.parentNode.querySelector('.input-box input~label')
        if (input.value !== "" && input.id !== "terms"){
            label.style.top="-1px"
        } else if(input.value === "" && input.id !== "terms"){
            label.style.top=""
        }
})})

