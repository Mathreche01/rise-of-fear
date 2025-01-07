let personagemRemovido;
let numeroPersonagemSelecionado;
let pegaRelacoes;
let pegaEquipamento;
let pegaAnotacoes;
let pegaGanchos;
let relacoesPersonagem;
let equipamentoPersonagem;
let notasPersonagem;
let ferimentosPersonagem;
let pegaFerimentos;
let pegaDadosFicha;
let ganchosPersonagem;
let dadosPersonagem;
let pegaExperiencia;
let experienciaPersonagem;
let pegaHistoria;
let pegaNome;
let historiaPersonagemSelecionado;
let nomePersonagemSelecionado;

function criaCardPersonagem(imagem, nome, arquetipo, ocupacao, nacionalidade, numero, segredos, desvantagens, vantagens, atributos, idade, estabilidade){
    const lista = document.querySelector('.personagens__container')
    const novoPersonagem = document.createElement('div')
    novoPersonagem.className = "personagem__card"
    novoPersonagem.innerHTML = `
    <div class="lines"></div>
    <div class="imgBx">
        <img src="${imagem}">
    </div>
    <div class="personagem__card--conteudo">
        <div class="personagem__detalhes">
            <h2>${nome}<br><span>${arquetipo}</span></h2>
            <div class="personagem__dados">
                <h3>${ocupacao}<br><span>Ocupação</span></h3>
                <h3>${nacionalidade}<br><span>Nacionalidade</span></h3>
                <h3>${estabilidade}<br><span>Estabilidade</span></h3>
            </div>
            <div class="personagem__botoes">
                <button onclick='abreFicha("${vantagens}", "${atributos}", "${desvantagens}", "${arquetipo}", "${ocupacao}", "${nacionalidade}", "${idade}", "${imagem}", "${segredos}", "${numero}", "${estabilidade}")'>Ficha</button>
                <button onclick="removePersonagem('${numero}')">Remover</button>
            </div>
        </div>
    </div>
    `
    lista.appendChild(novoPersonagem)
    contaLista('./personagens.html')
}


function removePersonagem(personagem){
    personagemRemovido(personagem)
}

async function abreFicha(vantagens, atributos, desvantagens, arquetipo, ocupacao, nacionalidade, idade, imagem, segredos, numero, estabilidade){
    await mudaPagina('./ficha.html', '200%')
    const nomeDoPersonagem = document.querySelector('#personagemNome')
    const arquetipoDoPersonagem = document.querySelector('#personagemArquetipo')
    const ocupacaoDoPersonagem = document.querySelector('#personagemOcupacao')
    const nacionalidadeDoPersonagem = document.querySelector('#personagemNacionalidade')
    const idadeDoPersonagem = document.querySelector('#personagemIdade')
    const imagemDoPersonagem = document.querySelector('#personagemImagem')
    const historiaDoPersonagem = document.querySelector('#personagemHistoria')

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
    const listaSegredos = document.querySelector('#listaSegredos')

    const arrayAtributos = atributos.split(',')
    const arrayVantagens = vantagens.split(',')
    const arrayDesvantagens = desvantagens.split(',')
    if(segredos !== ""){
        const stringSegredos = segredos.replace(/#/g, '"')
        const objetoSegredos = JSON.parse(stringSegredos)
        const arraySegredos = Object.entries(objetoSegredos).map(([chave, subobjeto]) => ({ chave, ...subobjeto }))
        arraySegredos.forEach((segredo) => {
            const novoSegredo = document.createElement('div')
            novoSegredo.className = 'segredo-item'
            novoSegredo.innerHTML = `
                        <b>${segredo.segredo}:  <ion-icon name="trash-outline" onclick="removerSegredo('${segredo.chave}', event)"></ion-icon></b> 
                        <p>${segredo.motivo}</p>
            `
            listaSegredos.appendChild(novoSegredo)
        })
    }
    arrayVantagens.forEach((vantagem) => {
        const vantagemElemento = document.createElement('li')
        const listaVantagensFicha = document.querySelector('#listaVantagens')

        vantagemElemento.innerHTML = `
        <div class="vantagem__accordion">
        <span class="vantagem__titulo">${vantagem}</span>
        <i class="bx bxs-chevron-down arrow"></i>
        </div>
        <div class="vantagem__conteudo">
            ${vantagensDetalhadas[vantagem]}
            ${vantagensLista[vantagem]["atributo"] === "-" ? "" : `
                <div class="vantagem__rolagem">
                    <button onclick="rolarDado(event, 'vantagem', '${vantagensLista[vantagem]["atributo"]}')">Rolar</button>
                </div>
            `}
        </div>
        <span class="vantagem__linha"></span>
        `
        vantagemElemento.addEventListener('click', (e) => mostraDetalhes(e))
        listaVantagensFicha.appendChild(vantagemElemento)
    })
    arrayDesvantagens.forEach((desvantagem) => {
        const desvantagemElemento = document.createElement('li')
        const listaDesvantagensFicha = document.querySelector('#listaDesvantagens')
        desvantagemElemento.innerHTML = `
        <div class="vantagem__accordion">
        <span class="vantagem__titulo">${desvantagem}</span>
        <i class="bx bxs-chevron-down arrow"></i>
        </div>
        <div class="vantagem__conteudo">
            ${desvantagensDetalhadas[desvantagem]}
            ${desvantagem === "Arruinado" || desvantagem === "Racionalista" || desvantagem === "Fobia" ? "" : `
                <div class="vantagem__rolagem">
                    <button onclick="rolarDado(event, 'desvantagem')">Rolar</button>
                </div>
            `}
        </div>
        <span class="vantagem__linha"></span>
        `
        desvantagemElemento.addEventListener('click', (e) => mostraDetalhes(e))
        listaDesvantagensFicha.appendChild(desvantagemElemento)
    })

    arquetipoDoPersonagem.textContent = arquetipo
    ocupacaoDoPersonagem.textContent = ocupacao
    nacionalidadeDoPersonagem.textContent = nacionalidade
    idadeDoPersonagem.textContent = `${idade} Anos`
    imagemDoPersonagem.src = imagem

    atributoAlma.textContent = formatarAtributo(arrayAtributos[6])
    atributoCarisma.textContent = formatarAtributo(arrayAtributos[5])
    atributoFirmeza.textContent = formatarAtributo(arrayAtributos[7])
    atributoRazao.textContent = formatarAtributo(arrayAtributos[8])
    atributoReflexos.textContent = formatarAtributo(arrayAtributos[2])
    atributoViolencia.textContent = formatarAtributo(arrayAtributos[4])
    atributoIntuicao.textContent = formatarAtributo(arrayAtributos[3])
    atributoPercepcao.textContent = formatarAtributo(arrayAtributos[9])
    atributoFortitude.textContent = formatarAtributo(arrayAtributos[0])
    atributoVontade.textContent = formatarAtributo(arrayAtributos[1])

    numeroPersonagemSelecionado = numero;

    pegaNome(numero)
    nomeDoPersonagem.textContent = nomePersonagemSelecionado

    pegaHistoria(numero)
    if(historiaPersonagemSelecionado !== null && historiaPersonagemSelecionado !== undefined){
        historiaDoPersonagem.textContent = historiaPersonagemSelecionado
    }

    pegaRelacoes(numero)
    if(relacoesPersonagem !== null && relacoesPersonagem !== undefined){
        relacoesPersonagem.forEach((relacao) => {
            constroiRelacao(relacao[1].personagem, relacao[1].grau, relacao[0])
        })
    }
    pegaEquipamento(numero)

    if(equipamentoPersonagem !== null && equipamentoPersonagem !== undefined){     
        equipamentoPersonagem.forEach((equipamento) => {
            const item = equipamento[1]
            pegaMunicao(equipamento[0])
            constroiEquipamento(item.tipo, item.nome, item.categoria, indiceMunicao, equipamento[0])
        })
    }
    pegaAnotacoes(numero)
    if(notasPersonagem !== null && notasPersonagem !== undefined){
        const anotacoes = document.querySelector('#personagemNotas')
        anotacoes.textContent = notasPersonagem
    }

    const estabilidadeAtiva = document.querySelector(`#estabilidade${estabilidade}`)
    estabilidadeAtiva.checked = true

    pegaGanchos(numero)
    if(ganchosPersonagem !== null && ganchosPersonagem !== undefined){
        ganchosPersonagem.forEach((gancho) => {
            constroiGancho(gancho[1].gancho, gancho[1].finalizado, gancho[0])
        })
    }
    pegaFerimentos(numero)
    if(ferimentosPersonagem !== null && ferimentosPersonagem !== undefined){
        ferimentosPersonagem.forEach((ferimento) => {
            const ferimentoItem = ferimento[1]
            constroiFerimento(ferimentoItem.tipo, ferimentoItem.descricao, ferimentoItem.estabilizado, ferimento[0])
        })
    }
    pegaDadosFicha(numero)
    if(dadosPersonagem !== null && dadosPersonagem !== undefined){
        dadosPersonagem.forEach((dado) => {
            const dadoItem = dado[1]
            constroiDadoFicha(dadoItem.rolagem, dadoItem.nome, dadoItem.tipo, dado[0])
        })
    }
    pegaExperiencia(numero)
    const xp = document.querySelector('#personagemXP')
    const progresso = document.querySelector('.progress')
    xp.textContent = experienciaPersonagem
    if(experienciaPersonagem < 50){
        progresso.classList.add('less')
        progresso.style = `--i: ${experienciaPersonagem}`
    } else{
        progresso.classList.remove('less') 
        progresso.style = `--i: ${experienciaPersonagem}`
    }

}

function formatarAtributo(valor){
    if (valor > 0) {
        return "+" + valor;
      } else {
        return valor.toString(); 
      }
}

