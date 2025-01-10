let registraRelacao;
let registraSegredo;
let registraItem;
let mudaGrau;
let registraHistoria;
let registraNotas;
let mudaEstabilidade;
let registraGancho;
let removerGancho;
let registraFerimento;
let pegaEstabilidade;
let estabilidadeAtual;
let mudaStatusFerimento;
let registraDadoFicha;
let pegaMunicao;
let cadastraMunicao;
let indiceMunicao;
let registraInfos;
let registraExperiencia;
let registraVantagem;
let registraDesvantagem;
let registraAtributos;
let registraProgressao;
let pegaProgressoes;
let removerRelacao;
let removerSegredo;
let removerFerimento;
let removerDadoFicha;
let removerEquipamento;
let progressoesMarcadas;

function atualizaGanchos(event){
        if(event.target.tagName === "LI"){
            event.target.classList.toggle('checked')
        } else if(event.target.tagName === "SPAN"){
            event.target.parentElement.remove()
            removerGancho(event.target.parentElement.id)
        }
}

function mostraDetalhes(event){
    let clickedLi;
    if(event.target.classList.contains("vantagem__accordion")){
        clickedLi = event.target.parentElement;
    } else{
        clickedLi = event.target.parentElement.parentElement;
    }
    
    if(clickedLi.className !== "boxVantagens" && clickedLi.id !== "listaVantagensModal"){
        clickedLi.classList.toggle("showAnswer")
    }
}

function abreModal(modal, submodal){
    const container = document.querySelector('.modal__container')
    container.style.display = "flex"
    if(modal === "relacoes"){
        const modal = document.querySelector('#modalRelacoes')
        modal.style.display = "block"
        document.body.classList.add('modal-active')
    } else if(modal === "segredos"){
        const modal = document.querySelector('#modalSegredos')
        modal.style.display = "block"
        document.body.classList.add('modal-active')
    } else if(modal === "equipamento"){
        const modal = document.querySelector('#modalEquipamento')
        mostraInputs()
        modal.style.display = "block"
        document.body.classList.add('modal-active')
    }  else if(modal === "narrativa"){
        const modal = document.querySelector('#modalNarrativa')
        const narrativaInput = document.querySelector('#narrativaPersonagem')
        const narrativa = document.querySelector('#personagemHistoria').textContent
        narrativaInput.value = narrativa
        modal.style.display = "block"
        document.body.classList.add('modal-active')
    } else if(modal === "anotacoes"){
        const modal = document.querySelector('#modalAnotacoes')
        const anotacoesInput = document.querySelector('#anotacoesPersonagem')
        const notas = document.querySelector('#personagemNotas').textContent
        anotacoesInput.value = notas
        modal.style.display = "block"
        document.body.classList.add('modal-active')
    } else if(modal === "dados"){
        const modal = document.querySelector('#modalDados')
        modal.style.display = "block"
        document.body.classList.add('modal-active')
    } else if(modal === "ganchos"){
        const modal = document.querySelector('#modalGanchos')
        modal.style.display = "block"
        document.body.classList.add('modal-active')
    } else if(modal === "ferimentos"){
        const modal = document.querySelector('#modalFerimentos')
        modal.style.display = "block"
        document.body.classList.add('modal-active')
    } else if(modal === "info"){
        const modal = document.querySelector('#modalInfo')
        modal.style.display = "block"
        document.body.classList.add('modal-active')

        const arquetiposIluminados = document.querySelectorAll('.iluminado')
        pegaProgressoes()
        arquetiposIluminados.forEach((arquetipo) => {
            if(progressoesMarcadas.includes('progressao19')){
                arquetipo.style.display = "block"  
            } else{
                arquetipo.style.display = "none"
            }
        })


        const nomePersonagem = document.querySelector('#personagemNome')
        const arquetipoPersonagem = document.querySelector('#personagemArquetipo')
        const idadePersonagem = document.querySelector('#personagemIdade').textContent
        const imagemPersonagem = document.querySelector('#personagemImagem')
        const ocupacaoPersonagem = document.querySelector('#personagemOcupacao')
        const nacionalidadePersonagem = document.querySelector('#personagemNacionalidade')
        const urlImagem = imagemPersonagem.src
        const numeros = idadePersonagem.match(/\d+/g);
        const idade = numeros ? numeros.map(numero => parseInt(numero)) : []

        const inputNome = document.querySelector('#infoNome')
        const inputIdade = document.querySelector('#infoIdade')
        const inputImagem = document.querySelector('#infoImagem')
        const inputArquetipo = document.querySelector('#infoArquetipo')
        const inputOcupacao = document.querySelector('#infoOcupacao')
        const inputNacionalidade = document.querySelector('#infoNacionalidade')

        inputNome.value = nomePersonagem.textContent
        inputImagem.value = urlImagem
        inputIdade.value = idade[0]
        inputArquetipo.value = arquetipoPersonagem.textContent
        inputOcupacao.value = ocupacaoPersonagem.textContent
        inputNacionalidade.value = nacionalidadePersonagem.textContent
    } else if(modal === "vantagens"){
        const modal = document.querySelector('#modalVantagens')
        for(const vantagem in vantagensDetalhadas){
            const vantagemElemento = document.createElement('li')
            const listaVantagensFicha = document.querySelector('#listaVantagensModal')
            vantagemElemento.innerHTML = `
            <div class="vantagem__accordion">
            <span class="vantagem__titulo titulo-busca">${vantagem}</span>
            <i class="bx bxs-chevron-down arrow"></i>
            </div>
            <div class="vantagem__conteudo">${vantagensDetalhadas[vantagem]}</div>
            <span class="vantagem__linha"></span>
            `
            vantagemElemento.addEventListener('click', (e) => {
                mostraDetalhes(e)
                limpaErro()
            })
            listaVantagensFicha.appendChild(vantagemElemento)
        }
        modal.style.display = "block"
        document.body.classList.add('modal-active')
    } else if(modal === "desvantagens"){
        const modal = document.querySelector('#modalDesvantagens')
        for(const desvantagem in desvantagensDetalhadas){
            const desvantagemElemento = document.createElement('li')
            const listaDesvantagensFicha = document.querySelector('#listaDesvantagensModal')
            desvantagemElemento.innerHTML = `
            <div class="vantagem__accordion">
            <span class="vantagem__titulo titulo-busca">${desvantagem}</span>
            <i class="bx bxs-chevron-down arrow"></i>
            </div>
            <div class="vantagem__conteudo">${desvantagensDetalhadas[desvantagem]}</div>
            <span class="vantagem__linha"></span>
            `
            desvantagemElemento.addEventListener('click', (e) => {
                mostraDetalhes(e)
                limpaErro()
            })
            listaDesvantagensFicha.appendChild(desvantagemElemento)
        }
        modal.style.display = "block"
        document.body.classList.add('modal-active')
    } else if(modal === "progressao"){
        const modal = document.querySelector('#modalProgressao')
        modal.style.display = "block"
        document.body.classList.add('modal-active')

        const progressaoInicial = document.querySelector('.progressao__grupo.progressao__inicial')
        const progressaoIntermediaria = document.querySelector('.progressao__grupo.progressao__intermediaria')
        const progressaoAvancada = document.querySelector('.progressao__grupo.progressao__avancada')
        progressaoInicial.style.display = "block"
        progressaoIntermediaria.style.display = "none"
        progressaoAvancada.style.display = "none"

        const btnPrevious = document.getElementById('progressionPrevious')
        btnPrevious.style.display = "none"

        const btnNext = document.getElementById('progressionNext')
        btnNext.style.display = "block"

        pegaProgressoes()
        progressoesMarcadas.forEach((progressao) => {
            const input = document.getElementById(progressao)
            input.checked = true
            input.addEventListener('click', () => input.checked = true)
        })
        verificaGrupo()
        const inputs = modal.querySelectorAll('input')
        inputs.forEach((input) => {
            input.addEventListener('click', (e) => {
                marcaInputs(e)
                limpaErro()
            })
        })
    } else if(modal === "atributos"){
        const modal = document.querySelector('#modalAtributos')
        modal.style.display = "block"
        document.body.classList.add('modal-active')


        const modaisAtributos = document.querySelectorAll('.modal-atributo')
        modaisAtributos.forEach((atributo) => {
            if(atributo.getAttribute('data-atributo') === submodal){
                atributo.style.display = "flex"
            } else{
                atributo.style.display = "none"
            }
        })

        const atributoVontade = document.querySelector('#vontade')
        const atributoFortitude= document.querySelector('#fortitude')
        const atributoPercepcao = document.querySelector('#percepcao')
        const atributoAlma= document.querySelector('#alma')
        const atributoRazao = document.querySelector('#razao')
        const atributoViolencia = document.querySelector('#violencia')
        const atributoCarisma = document.querySelector('#carisma')
        const atributoIntuicao = document.querySelector('#intuicao')
        const atributoFirmeza = document.querySelector('#firmeza')
        const atributoReflexos = document.querySelector('#reflexos')
        
        const inputVontade = document.querySelector('#inputVontade')
        const inputFortitude= document.querySelector('#inputFortitude')
        const inputPercepcao = document.querySelector('#inputPercepcao')
        const inputAlma= document.querySelector('#inputAlma')
        const inputRazao = document.querySelector('#inputRazao')
        const inputViolencia = document.querySelector('#inputViolencia')
        const inputCarisma = document.querySelector('#inputCarisma')
        const inputIntuicao = document.querySelector('#inputIntuicao')
        const inputFirmeza = document.querySelector('#inputFirmeza')
        const inputReflexos = document.querySelector('#inputReflexos')

        inputVontade.value = parseInt(atributoVontade.textContent)
        inputAlma.value = parseInt(atributoAlma.textContent)
        inputViolencia.value = parseInt(atributoViolencia.textContent)
        inputRazao.value = parseInt(atributoRazao.textContent)
        inputPercepcao.value = parseInt(atributoPercepcao.textContent)
        inputFirmeza.value = parseInt(atributoFirmeza.textContent)
        inputCarisma.value = parseInt(atributoCarisma.textContent)
        inputReflexos.value = parseInt(atributoReflexos.textContent)
        inputIntuicao.value = parseInt(atributoIntuicao.textContent)
        inputFortitude.value = parseInt(atributoFortitude.textContent)
    }
}

function fechaModal(modal){
    const container = document.querySelector('.modal__container')
    container.style.display = "none"
    if(modal === "segredos"){
        const modal = document.querySelector('#modalSegredos')
        modal.style.display = "none"
        document.body.classList.remove('modal-active')
    } else if(modal ==="relacoes"){
        const modal = document.querySelector('#modalRelacoes')
        modal.style.display = "none"
        document.body.classList.remove('modal-active')
    } else if(modal === "equipamento"){
        const modal = document.querySelector('#modalEquipamento')
        modal.style.display = "none"
        document.body.classList.remove('modal-active')
    } else if(modal === "narrativa"){
        const modal = document.querySelector('#modalNarrativa')
        modal.style.display = "none"
        document.body.classList.remove('modal-active')
    } else if(modal === "anotacoes"){
        const modal = document.querySelector('#modalAnotacoes')
        modal.style.display = "none"
        document.body.classList.remove('modal-active')
    } else if(modal === "dados"){
        const modal = document.querySelector('#modalDados')
        modal.style.display = "none"
        document.body.classList.remove('modal-active')
    } else if(modal === "ganchos"){
        const modal = document.querySelector('#modalGanchos')
        modal.style.display = "none"
        document.body.classList.remove('modal-active')
    } else if(modal === "ferimentos"){
        const modal = document.querySelector('#modalFerimentos')
        modal.style.display = "none"
        document.body.classList.remove('modal-active')
    } else if(modal === "info"){
        const modal = document.querySelector('#modalInfo')
        const modalMain = document.querySelector('.modalMain')
        const modalDetails = document.querySelector('.modalDetails')
        modal.style.display = "none"
        modalMain.classList.remove('active')
        modalDetails.classList.remove('active')
        document.body.classList.remove('modal-active')
    } else if(modal === "vantagens"){
        const modal = document.querySelector('#modalVantagens')
        modal.style.display = "none"
        document.body.classList.remove('modal-active')
        const listaVantagensFicha = document.querySelector('#listaVantagensModal')
        listaVantagensFicha.innerHTML = ""
    } else if(modal === "desvantagens"){
        const modal = document.querySelector('#modalDesvantagens')
        modal.style.display = "none"
        document.body.classList.remove('modal-active')
        const listaDesvantagensFicha = document.querySelector('#listaDesvantagensModal')
        listaDesvantagensFicha.innerHTML = ""
    } else if(modal === "progressao"){
        const modal = document.querySelector('#modalProgressao')
        modal.style.display = "none"
        limpaErro()
        document.body.classList.remove('modal-active')
    } else if(modal === "atributos"){
        const modal = document.querySelector('#modalAtributos')
        modal.style.display = "none"
        document.body.classList.remove('modal-active')
    }
}

function criaRelacaoFicha(){
    const modal = document.querySelector('#modalRelacoes')
    const mensagemErro = document.querySelector('#mensagemErroRelacao')
    var grau = document.querySelector('#grauSelecionado').value.replace(/\s?\([^\)]*\)/, '')
    var personagem = document.querySelector('#relacaoPersonagem').value
    var id = generateUniqueId()
    if(personagem !== ""){
        constroiRelacao(personagem, grau, id)
        modal.style.display = "none"
        const container = document.querySelector('.modal__container')
        container.style.display = "none"
        document.body.classList.remove('modal-active')
        registraRelacao(personagem, grau, id)
    } else{
        mensagemErro.innerHTML = "Este campo não pode estar vazio."
    }
}

function criaDadoFicha(){
    const modal = document.querySelector('#modalDados')
    const mensagemErroRolagem = document.querySelector('#mensagemErroDadosRolagem')
    const mensagemErroNome = document.querySelector('#mensagemErroDadosNome')
    var rolagem = document.querySelector('#rolagemDado').value
    var nome = document.querySelector('#nomeDado').value
    var tipo = document.querySelector('#tipoDadoSelecionado').value
    var id = generateUniqueId()
    if(rolagem !== "" && nome !== ""){
        constroiDadoFicha(rolagem, nome, tipo, id)
        registraDadoFicha(rolagem, nome, tipo, id)
        modal.style.display = "none"
        const container = document.querySelector('.modal__container')
        container.style.display = "none"
        document.body.classList.remove('modal-active')
    } else if(rolagem !== ""){
        mensagemErroNome.innerHTML = "Este campo não pode estar vazio."
    } else if(nome !== ""){
        mensagemErroRolagem.innerHTML = "Este campo não pode estar vazio."
    } else{
        mensagemErroRolagem.innerHTML = "Este campo não pode estar vazio."
        mensagemErroNome.innerHTML = "Este campo não pode estar vazio."
    }
}

function constroiDadoFicha(rolagem, nome, tipo, id){
    const listaDados = document.querySelector('.ficha__dados')
    const itemDado = document.createElement('div')
    itemDado.className = "dado__item"
    let facesDado;

    const regex = /(\d+)(?=[+-])/;
    let numero = rolagem.match(regex)
    let lados = parseInt(numero[1])
    if(lados <= 4){
        facesDado = 'd4'
    } else if(lados <= 6){
        facesDado = 'd6'
    } else if(lados <= 8){
        facesDado = 'd8'
    } else if(lados <= 10){
        facesDado = 'd10'
    } else if(lados <= 12){
        facesDado = 'd12'
    } else if(lados > 12){
        facesDado = 'd20'
    }
    itemDado.innerHTML = `
    <div class="dado__box">
        <i onclick="rolaDadoFicha('${nome}', '${rolagem}', '${tipo}')" class="fi fi-ss-dice-${facesDado} custom-dices"></i>
        <h4>${nome}</h4>
        <span>${rolagem}</span>
    </div>
    <span onclick="removerDadoFicha('${id}', event)">Remover</span>
    `
    listaDados.appendChild(itemDado)
}

function criaEquipamentoFicha(){
    const modal = document.querySelector('#modalEquipamento')
    const mensagemErro = document.querySelector('#mensagemErroEquipamento')
    const categoria = document.querySelector('#categoriaEquipamento').value
    var tipoCorpo = document.querySelector('#tipoEquipamentoCorpo').value
    var tipoDistancia = document.querySelector('#tipoEquipamentoDistancia').value
    var tipoArmadura = document.querySelector('#tipoEquipamentoArmadura').value
    var tipoEspecial = document.querySelector('#tipoEquipamentoEspecial').value
    var nome = document.querySelector('#nomeEquipamento').value
    var id = generateUniqueId()
    if(categoria !== "Equipamento Especial"){
        if(nome !== ""){
            if(categoria === "Armas corpo-a-corpo"){
                constroiEquipamento(tipoCorpo, nome, categoria, -1, id)
                registraItem(tipoCorpo, nome, categoria, id)
            } else if(categoria === "Armas à distância"){
                constroiEquipamento(tipoDistancia, nome, categoria, -1, id)
                registraItem(tipoDistancia, nome, categoria, id)
            } else if(categoria === "Armaduras"){
                constroiEquipamento(tipoArmadura, nome, categoria, -1, id)
                registraItem(tipoArmadura, nome, categoria, id)
            }
            modal.style.display = "none"
            const container = document.querySelector('.modal__container')
            container.style.display = "none"
            document.body.classList.remove('modal-active')
        } else{
            mensagemErro.innerHTML = "Este campo não pode estar vazio."
        }
    } else{
        constroiEquipamento(tipoEspecial,"", categoria, -1, id)
        registraItem(tipoEspecial,"", categoria, id)
        modal.style.display = "none"
        const container = document.querySelector('.modal__container')
        container.style.display = "none"
        document.body.classList.remove('modal-active')
    }
}

function criaSegredoFicha(){
    const modal = document.querySelector('#modalSegredos')
    const mensagemErro = document.querySelector('#mensagemErroSegredos')
    const segredosExistentes = document.querySelectorAll('.segredo-item')
    const totalSegredos = segredosExistentes.length
    var segredo = document.querySelector('#segredoSelecionado').value
    var motivo = document.querySelector('#motivoSegredo').value
    if(motivo !== ""){
        const listaSegredos = document.querySelector('#listaSegredos')
        const novoSegredo = document.createElement('div')
        const segredoId = generateUniqueId()
        novoSegredo.className = 'segredo-item'
        novoSegredo.innerHTML = `
                    <b>${segredo}: <ion-icon name="trash-outline" onclick="removerSegredo('${segredoId}', event)"></ion-icon></b> 
                    <p>${motivo}</p>
        `
        listaSegredos.appendChild(novoSegredo)
        modal.style.display = "none"
        const container = document.querySelector('.modal__container')
        container.style.display = "none"
        document.body.classList.remove('modal-active')
        registraSegredo(segredo, motivo, segredoId)
    } else{
        mensagemErro.innerHTML = "Este campo não pode estar vazio."
    }
}

function criaNarrativaFicha(){
    const modal = document.querySelector('#modalNarrativa')
    const mensagemErro = document.querySelector('#mensagemErroNarrativa')
    var narrativa = document.querySelector('#narrativaPersonagem').value
    if(narrativa !== ""){
        const historia = document.querySelector('#personagemHistoria')
        historia.textContent = narrativa
        modal.style.display = "none"
        const container = document.querySelector('.modal__container')
        container.style.display = "none"
        document.body.classList.remove('modal-active')
        registraHistoria(narrativa)
    } else{
        mensagemErro.innerHTML = "Este campo não pode estar vazio."
    }
}

function criaAnotacoes(){
    const modal = document.querySelector('#modalAnotacoes')
    const mensagemErro = document.querySelector('#mensagemErroAnotacoes')
    var anotacoes = document.querySelector('#anotacoesPersonagem').value
    if(anotacoes !== ""){
        const notas = document.querySelector('#personagemNotas')
        notas.textContent= anotacoes
        modal.style.display = "none"
        const container = document.querySelector('.modal__container')
        container.style.display = "none"
        document.body.classList.remove('modal-active')
        registraNotas(anotacoes)
    } else{
        mensagemErro.innerHTML = "Este campo não pode estar vazio."
    }
}

function criaGancho() {
    const listaGanchos = document.querySelector('#lista-ganchos');
    const modal = document.querySelector('#modalGanchos');
    const mensagemErro = document.querySelector('#mensagemErroGanchos');
    const ganchoInput = document.querySelector('#ganchosPersonagem');
    const gancho = ganchoInput.value.trim();

    if (gancho !== "") {
        const ganchoId = generateUniqueId();
        constroiGancho(gancho, "Não", ganchoId);
        modal.style.display = "none";
        const container = document.querySelector('.modal__container')
        container.style.display = "none"
        document.body.classList.remove('modal-active');
        registraGancho(gancho, ganchoId, "Não");
    } else {
        mensagemErro.innerHTML = "Este campo não pode estar vazio.";
    }
}

function generateUniqueId() {
    return Date.now().toString();
}

function criaFerimento(){
    const modal = document.querySelector('#modalFerimentos')
    const mensagemErro = document.querySelector('#mensagemErroFerimentos')
    var tipo = document.querySelector('#ferimentoSelecionado').value
    var descricao = document.querySelector('#descricaoFerimento').value
    var id = generateUniqueId()
    if(descricao !== ""){
       constroiFerimento(tipo, descricao, 'Não', id)
       registraFerimento(tipo, descricao, id)
       modal.style.display = "none"
       const container = document.querySelector('.modal__container')
        container.style.display = "none"
       document.body.classList.remove('modal-active')
    } else{
        mensagemErro.innerHTML = "Este campo não pode estar vazio."
    }
}

function constroiFerimento(tipo, descricao, estabilizado, id){
    const ferimento = document.createElement('li')
    ferimento.className = "ferimento__item"
    ferimento.innerHTML = ` 
        <p>${descricao} <ion-icon name="close-circle-outline" onclick="removerFerimento('${id}', '${tipo}', event)"></ion-icon></p>
        <input onclick="atualizaFerimento('${id}')" type="checkbox" id="${id}">
    `   
   if(tipo === "Grave"){
        const lista = document.querySelector('.ferimentos__graves--lista')
        lista.appendChild(ferimento)
   } else{
        const lista = document.querySelector('.ferimentos__criticos--lista')
        lista.appendChild(ferimento)
   }
   const inputFerimento = document.getElementById(id)
   if(estabilizado === "Sim"){
        inputFerimento.checked = true
   } else{
        inputFerimento.checked = false
   }
}

function atualizaFerimento(id){
    const input = document.getElementById(id)
    if(input.checked === true){
        mudaStatusFerimento(id, 'Sim')
    } else{
        mudaStatusFerimento(id, 'Não')
    }
}

function constroiGancho(gancho, status, id){
    const listaGanchos = document.querySelector('#lista-ganchos')
    const ganchoItem = document.createElement('li')
    ganchoItem.className = "gancho__item"
    ganchoItem.innerHTML = `${gancho}<span><i class="fa-solid fa-xmark"></i></span>`
    ganchoItem.id = id
    if(status === "Sim"){
        ganchoItem.classList.toggle('checked')
    }
    ganchoItem.addEventListener('click', (e) => mudaExperiencia(e))
    listaGanchos.appendChild(ganchoItem)
}

function constroiRelacao(personagem, grau, id){
    const lista = document.querySelector('.ficha__relacoes--lista')
    const item = document.createElement('div')
    item.className = "relacao"
    item.innerHTML = `
    <b>${personagem}: <ion-icon name="trash-outline" onclick="removerRelacao('${id}', event)"></ion-icon></b> 
    <p>${grau}</p>
    <div class="relacao-rating">
        <input type="radio" name="${id}" onchange="mudaGrau('Vital', '${personagem}', event, ${id})">
        <input type="radio" name="${id}" onchange="mudaGrau('Significativa', '${personagem}', event, ${id})">
        <input type="radio" name="${id}" onchange="mudaGrau('Neutra', '${personagem}', event, ${id})">
    </div>
    `
    lista.appendChild(item)
    const inputs = document.querySelectorAll(`input[name="${id}"]`)
    if(grau === "Neutra"){
        inputs[2].checked = true
    } else if(grau === "Significativa"){
        inputs[1].checked = true
    } else if(grau === "Vital"){
        inputs[0].checked = true
    }
}

function limpaErro(){
    const erroRelacao = document.querySelector('#mensagemErroRelacao')
    const erroSegredo = document.querySelector('#mensagemErroSegredos')
    const erroEquipamento = document.querySelector('#mensagemErroEquipamento')
    const erroNarrativa = document.querySelector('#mensagemErroNarrativa')
    const erroAnotacoes = document.querySelector('#mensagemErroAnotacoes')
    const erroGanchos = document.querySelector('#mensagemErroGanchos')
    const erroFerimentos = document.querySelector('#mensagemErroFerimentos')
    const erroDadoRolagem = document.querySelector('#mensagemErroDadosRolagem')
    const erroDadoNome = document.querySelector('#mensagemErroDadosNome')
    const erroNome = document.querySelector('#mensagemErroInfoNome')
    const erroIdade = document.querySelector('#mensagemErroInfoIdade')
    const erroImagem = document.querySelector('#mensagemErroInfoImagem')
    const erroOcupacao = document.querySelector('#mensagemErroInfoOcupacao')
    const erroVantagens = document.querySelector('#mensagemErroVantagens')
    const erroDesvantagens = document.querySelector('#mensagemErroDesvantagens')
    const erroNacionalidade = document.querySelector('#mensagemErroInfoNacionalidade')
    const erroAtributos = document.querySelector('#mensagemErroAtributos')
    const erroProgressao = document.querySelector('#mensagemErroProgressao')
    if(erroRelacao.innerHTML !== ""){
        erroRelacao.innerHTML = ""
    }
    if(erroSegredo.innerHTML !== ""){
        erroSegredo.innerHTML = ""
    }
    if(erroEquipamento.innerHTML !== ""){
        erroEquipamento.innerHTML = ""
    }
    if(erroNarrativa.innerHTML !== ""){
        erroNarrativa.innerHTML = ""
    }
    if(erroAnotacoes.innerHTML !== ""){
        erroAnotacoes.innerHTML = ""
    }
    if(erroGanchos.innerHTML !== ""){
        erroGanchos.innerHTML = ""
    }
    if(erroFerimentos.innerHTML !== ""){
        erroFerimentos.innerHTML = ""
    }
    if(erroDadoRolagem.innerHTML !== ""){
        erroDadoRolagem.innerHTML = ""
    }
    if(erroDadoNome.innerHTML !== ""){
        erroDadoNome.innerHTML = ""
    }
    if(erroNome.innerHTML !== ""){
        erroNome.innerHTML = ""
    }
    if(erroIdade.innerHTML !== ""){
        erroIdade.innerHTML = ""
    }
    if(erroNacionalidade.innerHTML !== ""){
        erroNacionalidade.innerHTML = ""
    }
    if(erroOcupacao.innerHTML !== ""){
        erroOcupacao.innerHTML = ""
    }
    if(erroImagem.innerHTML !== ""){
        erroImagem.innerHTML = ""
    }
    if(erroVantagens.innerHTML !== ""){
        erroVantagens.innerHTML = ""
    }
    if(erroDesvantagens.innerHTML !== ""){
        erroDesvantagens.innerHTML = ""
    }
    if(erroAtributos.innerHTML !== ""){
        erroAtributos.innerHTML = ""
    }
    if(erroProgressao.innerHTML !== ""){
        erroProgressao.innerHTML = ""
    }
}

function mostraInputs(){
    const categoria = document.querySelector('#categoriaEquipamento').value
    const tipoCorpo = document.querySelector('#divEquipamentoCorpo')
    const tipoDistancia = document.querySelector('#divEquipamentoDistancia')
    const tipoArmadura = document.querySelector('#divEquipamentoArmadura')
    const tipoEspecial = document.querySelector('#divEquipamentoEspecial')
    const nomeEquipamento = document.querySelector('#divNomeEquipamento')
    if(categoria === "Armas corpo-a-corpo"){
        nomeEquipamento.style.display = "block"
        tipoCorpo.style.display = "block"
        tipoDistancia.style.display = "none"
        tipoArmadura.style.display = "none"
        tipoEspecial.style.display = "none"
    }else if(categoria === "Armas à distância"){
        nomeEquipamento.style.display = "block"
        tipoDistancia.style.display = "block"
        tipoCorpo.style.display = "none"
        tipoArmadura.style.display = "none"
        tipoEspecial.style.display = "none"
    } else if(categoria === "Armaduras"){
        nomeEquipamento.style.display = "block"
        tipoDistancia.style.display = "none"
        tipoCorpo.style.display = "none"
        tipoArmadura.style.display = "block"
        tipoEspecial.style.display = "none"
    } else{
        nomeEquipamento.style.display = "none"
        tipoDistancia.style.display = "none"
        tipoCorpo.style.display = "none"
        tipoArmadura.style.display = "none"
        tipoEspecial.style.display = "block"
    }
}

function constroiEquipamento(tipo, nome, categoria, indice, id){
    const item = document.createElement('tr')
    item.id = id
    if(categoria === "Armas corpo-a-corpo"){
        const lista = document.querySelector('#listaEquipamentoCorpo')
        item.innerHTML = `
        <td>${nome}</td>
        <td>${tipo}</td>
        <td>Braço</td>
        <td>${armasCorpo[tipo]}</td>
        <td><ion-icon name="trash-outline" onclick="removerEquipamento('${id}', event)"></ion-icon></td>
        `
        lista.appendChild(item)

    } else if(categoria === "Armas à distância"){
        const lista = document.querySelector('#listaEquipamentoDistancia')
        item.innerHTML = `
        <td>${nome}</td>
        <td>${tipo}</td>
        <td>${armasDistancia[tipo]["distancia"]}</td>
        <td>${armasDistancia[tipo]["ataques"]}</td>
        <td class="itens-municao">
            ${armasDistancia[tipo]["municao"]}
        </td>
        <td><ion-icon name="trash-outline" onclick="removerEquipamento('${id}', event)"></ion-icon></td>
        `
        const inputs = item.querySelectorAll('input')
        if(indice !== -1 && indice !== null && indice !== undefined){
            inputs[indice].checked = true
        }
        lista.appendChild(item)
    } else if(categoria === "Armaduras"){
        const lista = document.querySelector('#listaArmadura')
        item.innerHTML = `
        <td>${nome}</td>
        <td>${tipo}</td>
        <td>${armaduras[tipo]}</td>
        <td><ion-icon name="trash-outline" onclick="removerEquipamento('${id}', event)"></ion-icon></td>
        `
        lista.appendChild(item)
    } else{
        const lista = document.querySelector('#listaEquipamentoEspecial')
        item.innerHTML = `
        <td>${tipo}</td>
        <td>${equipamentoEspecial[tipo]}</td>
        <td><ion-icon name="trash-outline" onclick="removerEquipamento('${id}', event)"></ion-icon></td>
        `
        lista.append(item)
    }

}

function rolaDadoFicha(nome, lancamento, tipo) {
    const tituloRolagem = document.querySelector('#tituloRolagem');
    tituloRolagem.textContent = nome;

    const regex = /^(\d+)d(\d+)([+-]\d+)?$/;
    const match = lancamento.match(regex);
    if (!match) {
        return 0;
    }

    const quantidadeDeDados = parseInt(match[1]);
    const tipoDeDados = parseInt(match[2]);
    const modificador = match[3] ? parseInt(match[3]) : 0;

    let resultados = []; // Armazena os resultados de cada rolagem

    for (let i = 0; i < quantidadeDeDados; i++) {
        const rolagem = Math.floor(Math.random() * tipoDeDados + 1);
        resultados.push(rolagem); // Armazena o resultado desta rolagem
    }

    let resultadoFinal = 0; // Resultado a ser exibido

    if (tipo === "Vantagem") {
        resultadoFinal = Math.max(...resultados) 
    } else if (tipo === "Desvantagem") {
        resultadoFinal = Math.min(...resultados) 
    } else if (tipo === "Dano") {
        resultadoFinal = resultados.reduce((acc, val) => acc + val, 0) 
    }

    const rolagemResultado = document.querySelector('#rolagemResultado');

    rolagemResultado.innerHTML = `
        <p><b>Resultado: </b>${resultadoFinal} ${modificador < 0 ? '-' : '+'} ${Math.abs(modificador)} = ${resultadoFinal + modificador}</p>
        <p>D${tipoDeDados}: ${resultados.join(', ')}</p>
    `;

    const popup = document.querySelector(".popup");
    popup.classList.toggle("show");

    const close = popup.querySelector(".close");
    close.onclick = () => {
        popup.classList.toggle("show");
    };
}

function rolarDado(event, tipo, atributo) {
    pegaEstabilidade();

    const primeiraRolagem = Math.floor(Math.random() * 10 + 1);
    const segundaRolagem = Math.floor(Math.random() * 10 + 1);
    const rolagemResultado = document.querySelector('#rolagemResultado');
    let resultado;
    let ajuste = '';
    let titulo = '';

    if(tipo === "atributo"){
        const elementoPai = event.target.parentElement;
        titulo = elementoPai.querySelector('label').textContent;
        
        const modificador = parseInt(event.target.textContent);
        
        const modificadorAbsoluto = Math.abs(modificador);
        
        resultado = (modificador < 0) ? primeiraRolagem + segundaRolagem - modificadorAbsoluto : primeiraRolagem + segundaRolagem + modificadorAbsoluto;   
        
        if (estabilidadeAtual === "Abalado" || estabilidadeAtual === "Angustiado" || estabilidadeAtual === "Neurótico") {
            if (titulo === "Vontade") {
                resultado -= 1; 
                ajuste = '- 1';
            }
        } else if (estabilidadeAtual === "Agoniado" || estabilidadeAtual === "Irracional" || estabilidadeAtual === "Transtornado" || estabilidadeAtual === "Arruinado") {
            if (titulo === "Vontade") {
                resultado -= 2; 
                ajuste = '- 2';
            }
            if (titulo === "Alma") {
                resultado += 1; 
                ajuste = '+ 1';
            }
        }

        rolagemResultado.innerHTML = `
        <p><b>Resultado: </b>${primeiraRolagem} + ${segundaRolagem} ${modificador < 0 ? '-' : '+'} ${modificadorAbsoluto} ${ajuste} = ${resultado}</p>
        <p>D10: ${primeiraRolagem}, ${segundaRolagem}</p>
        `;
    } else if(tipo === "desvantagem"){
        const itemLista = event.target.parentElement.parentElement.parentElement
        titulo = itemLista.querySelector('.vantagem__titulo').textContent
        resultado = primeiraRolagem + segundaRolagem

        if(estabilidadeAtual === "Apreensivo" || estabilidadeAtual === "Disperso"){
            resultado -= 1
            ajuste = '- 1'
        } else if(estabilidadeAtual === "Abalado" || estabilidadeAtual === "Angustiado" || estabilidadeAtual === "Neurótico"){
            resultado -= 2
            ajuste = '- 2'
        } else if(estabilidadeAtual === "Agoniado" || estabilidadeAtual === "Irracional" || estabilidadeAtual === "Transtornado" || estabilidadeAtual === "Arruinado"){
            resultado -= 3
            ajuste = '- 3'
        }

        rolagemResultado.innerHTML = `
        <p><b>Resultado: </b>${primeiraRolagem} + ${segundaRolagem} ${ajuste} = ${resultado}</p>
        <p>D10: ${primeiraRolagem}, ${segundaRolagem}</p>
        `;
    } else if(tipo === "vantagem"){
        const itemLista = event.target.parentElement.parentElement.parentElement
        titulo = itemLista.querySelector('.vantagem__titulo').textContent
        let modificador;

        const atributos = document.querySelectorAll('.ficha__atributos label')
        atributos.forEach((label) => {
            if(label.textContent === atributo){
                modificador = parseInt(label.parentElement.querySelector('.atributo').textContent)
            }
        })

        const modificadorAbsoluto = Math.abs(modificador);
        
        resultado = (modificador < 0) ? primeiraRolagem + segundaRolagem - modificadorAbsoluto : primeiraRolagem + segundaRolagem + modificadorAbsoluto;   

        resultado = primeiraRolagem + segundaRolagem + parseInt(modificador)
        rolagemResultado.innerHTML = `
        <p><b>Resultado: </b>${primeiraRolagem} + ${segundaRolagem} ${modificador < 0 ? '-' : '+'} ${modificadorAbsoluto} = ${resultado}</p>
        <p>D10: ${primeiraRolagem}, ${segundaRolagem}</p>
        `;
    }

    const tituloRolagem = document.querySelector('#tituloRolagem');
    tituloRolagem.textContent = titulo;
    
    const popup = document.querySelector(".popup");
    popup.classList.toggle("show");
    
    const close = popup.querySelector(".close");
    close.onclick = () => {
        popup.classList.toggle("show");
    };
}


function mudaMunicao(event){
    event.preventDefault();
    const elementoPai = event.target.parentElement;
    const inputs = elementoPai.querySelectorAll('input');
    let menorIndice = Infinity;

    inputs.forEach((input, indice) => {
        if (input.checked && indice < menorIndice) {
            menorIndice = indice;
        }
    });

    if(menorIndice === Infinity){
        menorIndice = -1
    }
    const elementoItem = elementoPai.parentElement
    cadastraMunicao(elementoItem.id, menorIndice)
}

function editaInfo(){
    const modal = document.querySelector('#modalInfo')
    const inputNome = document.querySelector('#infoNome').value
    const inputIdade = document.querySelector('#infoIdade').value
    const inputImagem = document.querySelector('#infoImagem').value
    const inputArquetipo = document.querySelector('#infoArquetipo').value
    const inputOcupacao = document.querySelector('#infoOcupacao').value
    const inputNacionalidade = document.querySelector('#infoNacionalidade').value
    const mensagemErroNome = document.querySelector('#mensagemErroInfoNome')
    const mensagemErroIdade = document.querySelector('#mensagemErroInfoIdade')
    const mensagemErroImagem = document.querySelector('#mensagemErroInfoImagem')
    const mensagemErroOcupacao = document.querySelector('#mensagemErroInfoOcupacao')
    const mensagemErroNacionalidade = document.querySelector('#mensagemErroInfoNacionalidade')
 
    if(inputNome !== "" && inputIdade !== "" && inputImagem !== "" && inputNacionalidade !== "" && inputOcupacao !== ""){
        registraInfos(inputNome, inputIdade, inputImagem, inputArquetipo, inputOcupacao, inputNacionalidade)

        const nomePersonagem = document.querySelector('#personagemNome')
        const arquetipoPersonagem = document.querySelector('#personagemArquetipo')
        const idadePersonagem = document.querySelector('#personagemIdade').textContent
        const imagemPersonagem = document.querySelector('#personagemImagem')
        const ocupacaoPersonagem = document.querySelector('#personagemOcupacao')
        const nacionalidadePersonagem = document.querySelector('#personagemNacionalidade')

        nomePersonagem.textContent = inputNome
        arquetipoPersonagem.textContent = inputArquetipo
        idadePersonagem.textContent = inputIdade + ' anos'
        imagemPersonagem.src = inputImagem
        ocupacaoPersonagem.textContent = inputOcupacao
        nacionalidadePersonagem.textContent = inputNacionalidade
        modal.style.display = "none"
        const container = document.querySelector('.modal__container')
        container.style.display = "none"
        document.body.classList.remove('modal-active')
    } else{
        if(inputNome === ""){
            mensagemErroNome.innerHTML = "Este campo não pode estar vazio."
        }
        if(inputIdade === ""){
        mensagemErroIdade.innerHTML = "Este campo não pode estar vazio."
        }
        if(inputImagem === ""){
        mensagemErroImagem.innerHTML = "Este campo não pode estar vazio."
        }
        if(inputOcupacao === ""){
        mensagemErroOcupacao.innerHTML = "Este campo não pode estar vazio."
        }
        if(inputNacionalidade === ""){
        mensagemErroNacionalidade.innerHTML = "Este campo não pode estar vazio."
        }
    }
}

function mudaImagem() {
    const imagem = document.querySelector('#infoImagem');
    let input = document.querySelector('#input-file-ficha');
    
    if (input.files && input.files[0]) {
        let file = input.files[0];
        
        if (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg') {
            let reader = new FileReader();
            reader.onload = function(event) {
                imagem.value = event.target.result;
            };
            reader.readAsDataURL(file);
        } else {
            const erroImagem = document.querySelector('#mensagemErroInfoImagem')
            erroImagem.innerHTML = "Formato de arquivo inválido."
        }
    }
}

function mudaExperiencia(e){
    const xp = document.querySelector('#personagemXP')
    const progresso = document.querySelector('.progress')
    if(e.target.tagName !== 'SPAN'){
        if(e.target.classList.contains('checked') === false){
            xp.textContent = parseInt(xp.textContent) + 1
            const porcentagem = ((parseInt(xp.textContent) / 95) * 100).toFixed(2)
            registraExperiencia(xp.textContent)
            registraGancho(e.target.textContent, e.target.id, "Sim")
            if(porcentagem < 50){
                progresso.classList.add('less')
                progresso.style = `--i: ${porcentagem}`
            } else{
                progresso.classList.remove('less') 
                progresso.style = `--i: ${porcentagem}`
            }
        } else{
            xp.textContent = parseInt(xp.textContent) - 1
            const porcentagem = ((parseInt(xp.textContent) / 95) * 100).toFixed(2)
            registraExperiencia(xp.textContent)
            registraGancho(e.target.textContent, e.target.id, "Não")
            if(porcentagem < 50){
                progresso.classList.add('less')
                progresso.style = `--i: ${porcentagem}`
            } else{
                progresso.classList.remove('less') 
                progresso.style = `--i: ${porcentagem}`
            }
        }
    }
}

function buscaVantagem(){
    const busca = document.querySelector('[data-busca-vantagem]').value.toLowerCase()
    const lista = document.querySelectorAll('.titulo-busca')
    lista.forEach(function(titulo){
        const texto = titulo.innerHTML.toLowerCase()
        const found = texto.indexOf(busca)
        if(busca == ""){
            titulo.parentElement.parentElement.style.display = "block"
        } else if(found == -1){
            titulo.parentElement.parentElement.style.display = "none"
        } else {
            titulo.parentElement.parentElement.style.display = "block"      
        }
    })
}

function buscaDesvantagem(){
    const busca = document.querySelector('[data-busca-desvantagem]').value.toLowerCase()
    const lista = document.querySelectorAll('.titulo-busca')
    lista.forEach(function(titulo){
        const texto = titulo.innerHTML.toLowerCase()
        const found = texto.indexOf(busca)
        if(busca == ""){
            titulo.parentElement.parentElement.style.display = "block"
        } else if(found == -1){
            titulo.parentElement.parentElement.style.display = "none"
        } else {
            titulo.parentElement.parentElement.style.display = "block"      
        }
    })
}

function adicionaVantagens(){
    const modal = document.querySelector('#modalVantagens')
    const mensagemErro = document.querySelector('#mensagemErroVantagens')
    const vantagensSelecionadas = modal.querySelectorAll('.showAnswer')
    if(vantagensSelecionadas.length !== 0){
        const lista = document.querySelector('#listaVantagens')
        vantagensSelecionadas.forEach((vantagem) => {
            const numero = lista.querySelectorAll('li')
            const nome = vantagem.querySelector('.titulo-busca')
            registraVantagem(nome.innerHTML, numero.length)
            lista.appendChild(vantagem)
        })
        modal.style.display = "none"
        const container = document.querySelector('.modal__container')
        container.style.display = "none"
        document.body.classList.remove('modal-active')
        const listaVantagensFicha = document.querySelector('#listaVantagensModal')
        listaVantagensFicha.innerHTML = ""
    } else{
        mensagemErro.innerHTML = "Nenhum item selecionado."
    }
}

function adicionaDesvantagens(){
    const modal = document.querySelector('#modalDesvantagens')
    const mensagemErro = document.querySelector('#mensagemErroDesvantagens')
    const desvantagensSelecionadas = modal.querySelectorAll('.showAnswer')
    if(desvantagensSelecionadas.length !== 0){
        const lista = document.querySelector('#listaDesvantagens')
        desvantagensSelecionadas.forEach((desvantagem) => {
            const numero = lista.querySelectorAll('li')
            const nome = desvantagem.querySelector('.titulo-busca')
            registraDesvantagem(nome.innerHTML, numero.length)
            lista.appendChild(desvantagem)
        })
        modal.style.display = "none"
        const container = document.querySelector('.modal__container')
        container.style.display = "none"
        document.body.classList.remove('modal-active')
        const listaVantagensFicha = document.querySelector('#listaDesvantagensModal')
        listaVantagensFicha.innerHTML = ""
    } else{
        mensagemErro.innerHTML = "Nenhum item selecionado."
    }
}

function modificaAtributos(){
    const modal = document.querySelector('#modalAtributos')
    const mensagemErro = document.querySelector('#mensagemErroAtributos')
    const atributosInputs = document.querySelectorAll('.atributos')
    const atributos = []
    atributosInputs.forEach((atributo) => atributos.push(atributo.value))

    if(atributos.indexOf('') === -1){
    const atributoVontade = document.querySelector('#vontade')
    const atributoFortitude= document.querySelector('#fortitude')
    const atributoPercepcao = document.querySelector('#percepcao')
    const atributoAlma= document.querySelector('#alma')
    const atributoRazao = document.querySelector('#razao')
    const atributoViolencia = document.querySelector('#violencia')
    const atributoCarisma = document.querySelector('#carisma')
    const atributoIntuicao = document.querySelector('#intuicao')
    const atributoFirmeza = document.querySelector('#firmeza')
    const atributoReflexos = document.querySelector('#reflexos')

    atributoAlma.textContent = formatarAtributo(atributos[9])
    atributoCarisma.textContent = formatarAtributo(atributos[8])
    atributoFirmeza.textContent = formatarAtributo(atributos[6])
    atributoRazao.textContent = formatarAtributo(atributos[3])
    atributoReflexos.textContent = formatarAtributo(atributos[2])
    atributoViolencia.textContent = formatarAtributo(atributos[7])
    atributoIntuicao.textContent = formatarAtributo(atributos[4])
    atributoPercepcao.textContent = formatarAtributo(atributos[5])
    atributoFortitude.textContent = formatarAtributo(atributos[1])
    atributoVontade.textContent = formatarAtributo(atributos[0])

    registraAtributos(atributos)

    modal.style.display = "none"
    const container = document.querySelector('.modal__container')
    container.style.display = "none"
    document.body.classList.remove('modal-active')
    } else {
        mensagemErro.innerHTML = "Preencha o campo de atributo."
    }
}

function selecionaProgressao(){
    const progresso = document.querySelector('.progress')
    const modal = document.querySelector('#modalProgressao')
    const mensagemErro = document.querySelector('#mensagemErroProgressao')
    const xp = parseInt(document.querySelector('#personagemXP').innerHTML)
    const progressao = document.querySelector('.progressao__conteudo')
    const inputs = progressao.querySelectorAll('input')
    let inputsChecados = []
    inputs.forEach((input) =>  {
        if(input.checked){
            inputsChecados.push(input.id)
        }
    })

    let contador = 0;

    for (let i = 0; i < inputsChecados.length; i++) {
        let numero = parseInt(inputsChecados[i].replace('progressao', ''));
        
        if (numero >= 13 && numero < 19) {
          for (let j = 0; j < inputsChecados.length; j++) {
            let numeroMenor = parseInt(inputsChecados[j].replace('progressao', ''));
            if (numeroMenor < 13) {
              contador++;
            }
          }
          
          if (contador < 5) {
            mensagemErro.innerHTML = "Obtenha cinco progressões anteriores."
            return;
          }
        } else if(numero == 19){
            for (let j = 0; j < inputsChecados.length; j++) {
                let numeroMenor = parseInt(inputsChecados[j].replace('progressao', ''));
                if (numeroMenor < 19) {
                  contador++;
                }
              }
              
            if (contador < 5) {
                mensagemErro.innerHTML = "Obtenha dez progressões anteriores."
                return;
            }
        }
    }    

    if(xp < (inputsChecados.length - progressoesMarcadas.length) * 5){
        mensagemErro.innerHTML = "Não há experiência suficiente."
    } else{
        const valorXP = xp - ((inputsChecados.length - progressoesMarcadas.length) * 5)
        const novoXP = document.querySelector('#personagemXP')
        novoXP.innerHTML = valorXP
        if((valorXP) < 50){
            progresso.classList.add('less')
            progresso.style = `--i: ${(((valorXP) / 95) * 100).toFixed(2)}`
        } else{
            progresso.classList.remove('less') 
            progresso.style = `--i: ${(((valorXP) / 95) * 100).toFixed(2)}`
        }
        registraExperiencia(valorXP)
        registraProgressao(inputsChecados)
        limpaErro()
        document.body.classList.remove('modal-active')
        modal.style.display = "none"
        const container = document.querySelector('.modal__container')
        container.style.display = "none"
    }
}

function changeModal(){
    const mainModal = document.querySelector('.modalMain')
    const detailsModal = document.querySelector('.modalDetails')
    mainModal.classList.toggle('active')
    detailsModal.classList.toggle('active')
}

function changeProgression(type){
        const mensagemErro = document.querySelector('#mensagemErroProgressao')
        mensagemErro.innerHTML = ""

        const progressaoInicial = document.querySelector('.progressao__grupo.progressao__inicial')
        const progressaoIntermediaria = document.querySelector('.progressao__grupo.progressao__intermediaria')
        const progressaoAvancada = document.querySelector('.progressao__grupo.progressao__avancada')

        const btnPrevious = document.getElementById('progressionPrevious')
        const btnNext = document.getElementById('progressionNext')

        btnPrevious.style.display = "block"
        btnNext.style.display = "block"

            if(progressaoInicial.style.display === "block"){
                progressaoInicial.style.display = "none"
                progressaoIntermediaria.style.display = "block"
            } else if(progressaoIntermediaria.style.display === "block" && type === "next"){
                progressaoIntermediaria.style.display = "none"
                progressaoAvancada.style.display = "block"

                btnNext.style.display = "none"
            } else if(progressaoIntermediaria.style.display === "block" && type === "previous"){
                progressaoIntermediaria.style.display = "none"
                progressaoInicial.style.display = "block"

                btnPrevious.style.display = "none"
            } else if(progressaoAvancada.style.display === "block" && type === "previous"){
                progressaoAvancada.style.display = "none"
                progressaoIntermediaria.style.display = "block"
            }
}

function verificaGrupo(){
    const grupos = document.querySelectorAll('.progressao__item')
    grupos.forEach((grupo) => {
        const checkboxes = grupo.querySelectorAll('input')
        const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);
        if(allChecked === true){
            grupo.classList.add('completeGroup')
        } else{
            grupo.classList.remove('completeGroup')
        }
    })
}

function marcaInputs(e){
    const grupo = e.target.parentElement
    var checkboxes = grupo.querySelectorAll('input[type="checkbox"]');
    var isChecked = document.getElementById(e.target.id).checked;
    var found = false;

    for (var i = 0; i < checkboxes.length; i++) {
        if (found) {
                checkboxes[i].checked = isChecked;
            }
        if (checkboxes[i].id === e.target.id) {
            found = true;
        }
    }
}

