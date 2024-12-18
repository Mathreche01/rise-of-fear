import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getDatabase, set, get, ref, remove, update, onValue } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAmtAFbQc1sWpPkZlcePsXQ-ebwJBEAEYo",
  authDomain: "riseoffear-4c68a.firebaseapp.com",
  databaseURL: "https://riseoffear-4c68a-default-rtdb.firebaseio.com",
  projectId: "riseoffear-4c68a",
  storageBucket: "riseoffear-4c68a.appspot.com",
  messagingSenderId: "739058772381",
  appId: "1:739058772381:web:36a6536109d65a36846774"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();



const userId = sessionStorage.getItem('userId');
const nomePlace = document.querySelector('.cabecalho__dashboard')
onValue(ref(database, '/users/' + userId), (snapshot) => {
const username = (snapshot.val() && snapshot.val().username)
nomePlace.innerHTML = `<h3 class="title-dashboard">Olá, ${username}! Esse é o seu dashboard.</h3>`
})
const placePersonagens = document.querySelector('#dashboardPersonagensCriados')
onValue(ref(database, '/users/' + userId + '/dados/'), (snapshot) => {
    const personagens = (snapshot.val() && snapshot.val().personagensCriados)
    placePersonagens.innerHTML = personagens
})

const menu = document.querySelector('.cabecalho__menu')
const btnContainer = document.querySelector('.cabecalho__container')

menu.addEventListener('click', () => {
    btnContainer.classList.toggle('active')
})

const logOut = document.querySelector('.botao__sair')

logOut.addEventListener('click', (e) => {
    signOut(auth).then(() => {
        window.location.href="../index.html"
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
    })
})

const botaoDashboard = document.getElementById('dashboardButton')
botaoDashboard.addEventListener('click', () => {
    const nomePlace = document.querySelector('.cabecalho__dashboard')
    onValue(ref(database, '/users/' + userId), (snapshot) => {
    const username = (snapshot.val() && snapshot.val().username)
    nomePlace.innerHTML = `<h3 class="title-dashboard">Olá, ${username}! Esse é o seu dashboard.</h3>`
    }, {onlyOnce: true});
    const placePersonagens = document.querySelector('#dashboardPersonagensCriados')
    onValue(ref(database, '/users/' + userId + '/dados/'), (snapshot) => {
    const personagens = (snapshot.val() && snapshot.val().personagensCriados)
    placePersonagens.innerHTML = personagens
    })
})

enviarPersonagem = function criaDado(){
    set(ref(database, 'users/' + userId + '/personagens/' + (personagensCriados)),{
    nome: nomePersonagem,
    atributos: atributosPersonagem,
    idade: idadePersonagem,
    nacionalidade: nacionalidadePersonagem,
    imagem: imagemPersonagem,
    ocupacao: ocupacaoPersonagem,
    arquetipo: arquetipoPersonagem,
    vantagens: vantagensEscolhidas,
    desvantagens: desvantagensEscolhidas,
    segredos: segredosSombrios,
    historia: historiaPersonagem,
    estabilidade: 'Calmo',
    numero: personagensCriados,
    experiencia: 0,
})
    mudaPagina('./personagens.html', '200%')
}

constroiCardPersonagem = function constroiCard(){
    onValue(ref(database, '/users/' + userId), (snapshot) => {
        const personagens = (snapshot.val() && snapshot.val().personagens)
            const listaPersonagens = Object.entries(personagens)
            listaPersonagens.forEach((personagem) => {
                const caracteristicas = personagem[1]
                var stringFiltrada;
                if(caracteristicas.segredos !== null && caracteristicas.segredos !== undefined){
                    const segredosString = JSON.stringify(caracteristicas.segredos)
                    stringFiltrada = segredosString.replace(/"/g, "#")
                } else {
                    stringFiltrada = ""
                }
                criaCardPersonagem(caracteristicas.imagem, caracteristicas.nome, caracteristicas.arquetipo, caracteristicas.ocupacao, caracteristicas.nacionalidade, caracteristicas.numero, stringFiltrada, caracteristicas.desvantagens, caracteristicas.vantagens, caracteristicas.atributos, caracteristicas.idade, caracteristicas.estabilidade)
            })
    })
}

personagemRemovido = function removerPersonagemDatabase(personagem){
    remove(ref(database, '/users/' + userId + '/personagens/' + personagem)).then(() => {
        mudaPagina('./personagens.html', '200%')
    })
}

verPersonagensCriados = function verPersonagem(){
    (onValue(ref(database, '/users/' + userId + '/dados'), (snapshot) => {
        const valor = (snapshot.val() && snapshot.val().personagensCriados) 
        personagensCriados = valor
    }))
}


mudaValorPersonagens = function mudaValor(){
    set(ref(database, '/users/' + userId + '/dados'), {
        personagensCriados: personagensCriados + 1
    })
}

registraRelacao = function relacaoDatabase(nome, grau, id){
    set(ref(database, '/users/' + userId + '/personagens/' + numeroPersonagemSelecionado + "/relacoes/" + id), {
        personagem: nome,
        grau: grau,
    })
}

registraAtributos = function atributosDatabase(atributos){
    set(ref(database, '/users/' + userId + '/personagens/' + numeroPersonagemSelecionado + "/atributos/"), atributos)
}

registraSegredo = function segredoDatabase(segredo, motivo, numero){
    set(ref(database, '/users/' + userId + '/personagens/' + numeroPersonagemSelecionado + "/segredos/" + numero), {
        segredo: segredo,
        motivo: motivo,
    })
}

registraGancho = function ganchoDatabase(gancho, numero, status){
    set(ref(database, '/users/' + userId + '/personagens/' + numeroPersonagemSelecionado + "/ganchos/" + numero), {
        gancho: gancho,
        finalizado: status,
    })
}

registraHistoria = function historiaDatabase(narrativa){
    set(ref(database, '/users/' + userId + '/personagens/' + numeroPersonagemSelecionado + "/historia"), narrativa)
}

registraExperiencia = function experienciaDatabase(xp){
    set(ref(database, '/users/' + userId + '/personagens/' + numeroPersonagemSelecionado + "/experiencia"), xp)
}

registraItem = function equipamentoDatabase(tipo, nome, categoria, id){
    if(categoria === "Equipamento Especial"){
        set(ref(database, '/users/' + userId + '/personagens/' + numeroPersonagemSelecionado + "/equipamento/" + id), {
            tipo: tipo,
            categoria: categoria,
        })
    } else if(categoria === "Armas à distância"){
        set(ref(database, '/users/' + userId + '/personagens/' + numeroPersonagemSelecionado + "/equipamento/" + id), {
            nome: nome,
            tipo: tipo,
            categoria: categoria,
            municao: -1,
        })
    }else{
        set(ref(database, '/users/' + userId + '/personagens/' + numeroPersonagemSelecionado + "/equipamento/" + id), {
            nome: nome,
            tipo: tipo,
            categoria: categoria,
        })
    }
}

registraNotas = function anotacoesDatabase(notas){
    set(ref(database, '/users/' + userId + '/personagens/' + numeroPersonagemSelecionado + "/anotacoes"), notas)
}

registraFerimento = function ferimentosDatabase(tipo, descricao, id){
    set(ref(database, '/users/' + userId + '/personagens/' + numeroPersonagemSelecionado + "/ferimentos/" + id), {
        tipo: tipo,
        descricao: descricao,
        estabilizado: 'Não',
    })
}

registraInfos = function infosDatabase(nome, idade, imagem, arquetipo, ocupacao, nacionalidade){
    set(ref(database, '/users/' + userId + '/personagens/' + numeroPersonagemSelecionado + "/nome"), nome)
    set(ref(database, '/users/' + userId + '/personagens/' + numeroPersonagemSelecionado + "/idade"), idade)
    set(ref(database, '/users/' + userId + '/personagens/' + numeroPersonagemSelecionado + "/imagem"), imagem)
    set(ref(database, '/users/' + userId + '/personagens/' + numeroPersonagemSelecionado + "/arquetipo"), arquetipo)
    set(ref(database, '/users/' + userId + '/personagens/' + numeroPersonagemSelecionado + "/ocupacao"), ocupacao)
    set(ref(database, '/users/' + userId + '/personagens/' + numeroPersonagemSelecionado + "/nacionalidade"), nacionalidade)
}

registraVantagem = function vantagensDatabase(nome, numero){
    set(ref(database, '/users/' + userId + '/personagens/' + numeroPersonagemSelecionado + "/vantagens/" + numero), nome)
}

registraDesvantagem = function desvantagensDatabase(nome, numero){
    set(ref(database, '/users/' + userId + '/personagens/' + numeroPersonagemSelecionado + "/desvantagens/" + numero), nome)
}

registraDadoFicha = function dadosDatabase(rolagem, nome, tipo, id){
    set(ref(database, '/users/' + userId + '/personagens/' + numeroPersonagemSelecionado + "/dados/" + id), {
        rolagem: rolagem,
        nome: nome,
        tipo: tipo,
    })
}

registraProgressao = function progressaoDatabase(progressoes){
    set(ref(database, '/users/' + userId + '/personagens/' + numeroPersonagemSelecionado + "/progressoes/"), progressoes) 
}

cadastraMunicao = function municaoDatabase(id, indice){
    set(ref(database, '/users/' + userId + '/personagens/' + numeroPersonagemSelecionado + "/equipamento/" + id + "/municao/"), indice)
}

pegaRelacoes = function acessaRelacoes(numero){
    (onValue(ref(database, '/users/' + userId + '/personagens/' + numero), (snapshot) => {
        const relacoes = (snapshot.val() && snapshot.val().relacoes)
        if(relacoes !== null && relacoes !== undefined){
            const listaRelacoes = Object.entries(relacoes)
            relacoesPersonagem = listaRelacoes
        } else{
            relacoesPersonagem = null
        }
    }))
}

pegaMunicao = function acessaMunicao(nome){
    (onValue(ref(database, '/users/' + userId + '/personagens/' + numeroPersonagemSelecionado + "/equipamento/" + nome), (snapshot) => {
        const municao = (snapshot.val() && snapshot.val().municao)
        indiceMunicao = municao
    }))
}

pegaExperiencia = function acessaExperiencia(numero){
    (onValue(ref(database, '/users/' + userId + '/personagens/' + numero), (snapshot) => {
        const xp = (snapshot.val() && snapshot.val().experiencia)
        experienciaPersonagem = xp
    }))
}

pegaEquipamento = function acessaEquipamento(numero){
    (onValue(ref(database, '/users/' + userId + '/personagens/' + numero), (snapshot) => {
        const equipamento = (snapshot.val() && snapshot.val().equipamento)
        if(equipamento !== null && equipamento !== undefined){
            const listaEquipamento = Object.entries(equipamento)
            equipamentoPersonagem = listaEquipamento
        } else{
            equipamentoPersonagem = null
        }
    }))
}

pegaGanchos = function acessaGanchos(numero){
    (onValue(ref(database, '/users/' + userId + '/personagens/' + numero), (snapshot) => {
        const ganchos = (snapshot.val() && snapshot.val().ganchos)
        if(ganchos !== null && ganchos !== undefined){
            const listaGanchos = Object.entries(ganchos)
            ganchosPersonagem = listaGanchos
        } else{
            ganchosPersonagem = null
        }
    }))
}

pegaAnotacoes = function acessaNotas(numero){
    (onValue(ref(database, '/users/' + userId + '/personagens/' + numero), (snapshot) => {
        notasPersonagem = (snapshot.val() && snapshot.val().anotacoes)
    }))
}

pegaHistoria = function acessaHistoria(numero){
    (onValue(ref(database, '/users/' + userId + '/personagens/' + numero), (snapshot) => {
        historiaPersonagemSelecionado = (snapshot.val() && snapshot.val().historia)
    }))
}

pegaNome = function acessaNome(numero){
    (onValue(ref(database, '/users/' + userId + '/personagens/' + numero), (snapshot) => {
        nomePersonagemSelecionado = (snapshot.val() && snapshot.val().nome)
    }))
}

pegaFerimentos = function acessaFerimentos(numero){
    (onValue(ref(database, '/users/' + userId + '/personagens/' + numero), (snapshot) => {
        const ferimentos = (snapshot.val() && snapshot.val().ferimentos)
        if(ferimentos !== null && ferimentos !== undefined){
            const listaFerimentos = Object.entries(ferimentos)
            ferimentosPersonagem = listaFerimentos
        } else{
            ferimentosPersonagem = null
        }
    }))
}

pegaDadosFicha = function acessaDados(numero){
    (onValue(ref(database, '/users/' + userId + '/personagens/' + numero), (snapshot) => {
        const dados = (snapshot.val() && snapshot.val().dados)
        if(dados !== null && dados !== undefined){
            const listaDados = Object.entries(dados)
            dadosPersonagem = listaDados
        } else{
            dadosPersonagem = null
        }
    }))
}


mudaGrau = function mudarGrauRelacao(grau, personagem, e){
    const alvo = e.target.parentElement.parentElement
    const textoGrau = alvo.querySelector('p')
    textoGrau.innerHTML = grau
    set(ref(database, '/users/' + userId + '/personagens/' + numeroPersonagemSelecionado + '/relacoes/' + personagem), {
        personagem: personagem,
        grau: grau,
    })
}

mudaEstabilidade = function mudarEstabilidadeFicha(estabilidade){
    set(ref(database, '/users/' + userId + '/personagens/' + numeroPersonagemSelecionado + '/estabilidade'), estabilidade)
}

removerGancho = function deletaGancho(numero){
    remove(ref(database, '/users/' + userId + '/personagens/' + numeroPersonagemSelecionado + '/ganchos/' + numero)).then(() => {
        return
    })
}

removerRelacao = function deletaRelacao(id, event){
    const listaRelacoes = document.querySelector('.ficha__relacoes--lista')
    const relacao = event.target.parentElement.parentElement
    listaRelacoes.removeChild(relacao)
    remove(ref(database, '/users/' + userId + '/personagens/' + numeroPersonagemSelecionado + '/relacoes/' + id)).then(() => {
        return
    })
}

removerEquipamento = function deletaEquipamento(id, event){
    const equipamento = document.getElementById(id)
    equipamento.remove()
    remove(ref(database, '/users/' + userId + '/personagens/' + numeroPersonagemSelecionado + '/equipamento/' + id)).then(() => {
        return
    })
}

removerSegredo = function deletaSegredo(id, event){
    const listaSegredos = document.querySelector('#listaSegredos')
    const segredo = event.target.parentElement.parentElement
    listaSegredos.removeChild(segredo)
    remove(ref(database, '/users/' + userId + '/personagens/' + numeroPersonagemSelecionado + '/segredos/' + id)).then(() => {
        return
    })
}

removerFerimento = function deletaFerimento(id, tipo, event){
    let listaFerimentos;
    if(tipo === "Grave"){
        listaFerimentos = document.querySelector('.ferimentos__graves--lista')
    } else{
        listaFerimentos = document.querySelector('.ferimentos__criticos--lista')
    }
    const ferimento = event.target.parentElement.parentElement
    listaFerimentos.removeChild(ferimento)
    remove(ref(database, '/users/' + userId + '/personagens/' + numeroPersonagemSelecionado + '/ferimentos/' + id)).then(() => {
        return
    })
}

removerDadoFicha = function deletaDadoFicha(id, event){
    const listaDados = document.querySelector('.ficha__dados')
    const dado = event.target.parentElement
    listaDados.removeChild(dado)
    remove(ref(database, '/users/' + userId + '/personagens/' + numeroPersonagemSelecionado + '/dados/' + id)).then(() => {
        return
    })
}


mudaStatusFerimento = function selecionaFerimento(id, status){
    set(ref(database, '/users/' + userId + '/personagens/' + numeroPersonagemSelecionado + '/ferimentos/' + id + '/estabilizado/'), status)
}

pegaProgressoes = function acessaProgressoes(){
    (onValue(ref(database, '/users/' + userId + '/personagens/' + numeroPersonagemSelecionado), (snapshot) => {
        progressoesMarcadas = (snapshot.val() && snapshot.val().progressoes)
        if(progressoesMarcadas === undefined || progressoesMarcadas === null){
            progressoesMarcadas = []
        }
    }))
}