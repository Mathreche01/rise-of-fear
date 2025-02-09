let registraRelacao;
let registraSegredo;
let registraItem;
let mudaGrau;
let registraHistoria;
let registraNotas;
let mudaEstabilidade;
let registraGancho;
let removerGancho;
let mudaEquipamento;
let registraFerimento;
let pegaEstabilidade;
let estabilidadeAtual;
let mudaStatusFerimento;
let registraDadoFicha;
let pegaMunicao;
let vantagensPersonagem;
let pegaVantagens;
let cadastraMunicao;
let indiceMunicao;
let registraInfos;
let registraExperiencia;
let registraVantagem;
let registraQualidade;
let registraLimitacao;
let registraDesvantagem;
let registraAtributos;
let registraPoderSuperior;
let registraProgressao;
let pegaProgressoes;
let removerRelacao;
let removerSegredo;
let removerFerimento;
let removerDadoFicha;
let removerEquipamento;
let removerPoderSuperior;
let progressoesMarcadas;
let pegaPoderSuperior;
let pegaDesvantagens;
let desvantagensPersonagem;
let vantagensAtivas = [];

let vantagemFracasso = false;

const arquetiposIluminados = ["O Mago da Morte", "A Revivida", "O Abominável", "A Discípula"]

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

const movimentos = {
    reflexos: "Evitar Dano",
    fortitude: "Suportar Lesão",
    vontade: "Manter o Controle",
    carisma: "Influenciar Alguém",
    razao: "Investigar",
    percepcao: "Observar uma Situação",
    violencia: "Engajar em Combate",
    firmeza: "Agir sob Pressão",
    intuicao: "Ler uma Pessoa",
    alma: "Ver Através da Ilusão",
    relacoes: "Movimentos de Relação",
}

function abreModal(modal, submodal){
    const container = document.querySelector('.modal__container')
    container.style.display = "flex"
    if(modal === "relacoes"){
        const modal = document.querySelector('#modalRelacoes')

        const relacaoNome = document.getElementById('relacaoPersonagem')
        relacaoNome.value = ""

        const grau = document.getElementById('grauSelecionado')
        grau.value = "Neutra (0)"

        modal.style.display = "block"
        document.body.classList.add('modal-active')
    } else if(modal === "segredos"){
        const modal = document.querySelector('#modalSegredos')
        modal.style.display = "block"

        const segredoTipo = document.getElementById('segredoSelecionado')
        segredoTipo.value = "Conhecimento Proibido"

        const motivacao = document.getElementById('motivoSegredo')
        motivacao.value = ""

        document.body.classList.add('modal-active')
    } else if(modal === "equipamento"){
        const modal = document.querySelector('#modalEquipamento')

        const categoria = document.getElementById('categoriaEquipamento')
        categoria.value = "Armas corpo-a-corpo"

        const tipoCorpo = document.getElementById('tipoEquipamentoCorpo')
        tipoCorpo.value = "Desarmado"

        const tipoDistancia = document.getElementById('tipoEquipamentoDistancia')
        tipoDistancia.value = "Pistolas"

        const tipoArmadura = document.getElementById('tipoEquipamentoArmadura')
        tipoArmadura.value = "Leve"

        const tipoEspecial = document.getElementById('tipoEquipamentoEspecial')
        tipoEspecial.value = "Cão"

        const nome = document.getElementById('nomeEquipamento')
        nome.value = ""

        mostraInputs('equipamento')

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

        const rolagem = document.getElementById('rolagemDado')
        rolagem.value = "1d20+0"

        const nome = document.getElementById('nomeDado')
        nome.value = ""

        const tipo = document.getElementById('tipoDadoSelecionado')
        tipo.value = "Vantagem"

        modal.style.display = "block"
        document.body.classList.add('modal-active')
    } else if(modal === "ganchos"){
        const modal = document.querySelector('#modalGanchos')

        const ganchos = document.getElementById('ganchosPersonagem')
        ganchos.value = ""

        modal.style.display = "block"
        document.body.classList.add('modal-active')
    } else if(modal === "ferimentos"){
        const modal = document.querySelector('#modalFerimentos')

        const descricao = document.getElementById('descricaoFerimento') 
        descricao.value = ""

        const tipo = document.getElementById('ferimentoSelecionado')
        tipo.value = "Grave"
        
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
        const conteudoModal = modal.querySelector('.modal-content')
        conteudoModal.classList.remove('iluminado')

        const pesquisa = conteudoModal.querySelector('.search-box input')
        pesquisa.value = ""

        const tituloModal = modal.querySelector('h2')
        tituloModal.textContent = "Editar Vantagens"

        const listaVantagens = document.getElementById('listaVantagens')
        const listaQualidades = document.getElementById('listaQualidades')
        const vantagensAdquiridas = listaVantagens.querySelectorAll('.vantagem__titulo')
        const qualidadesAdquiridas = listaQualidades.querySelectorAll('.vantagem__titulo')

        const btnIluminado = modal.querySelector('.btnDetails.btnIluminado')
        const btnConsciente = modal.querySelector('.btnDetails.btnConsciente')
        const arquetipo = document.getElementById('personagemArquetipo').textContent

        if(arquetiposIluminados.includes(arquetipo)){
            btnIluminado.style.display = "block"
        } else{
            btnIluminado.style.display = "none"
        }

        btnConsciente.style.display = "none"

        let vantagens = [];
        vantagensAdquiridas.forEach((vantagem) => vantagens.push(vantagem.textContent))

        const listaVantagensFicha = document.querySelector('#listaVantagensModal')
        listaVantagensFicha.innerHTML = ""

        let qualidades = [];
        if(qualidadesAdquiridas.length > 0){
            qualidadesAdquiridas.forEach((qualidade) => qualidades.push(qualidade.textContent))
        }

        const listaQualidadesFicha = document.querySelector('#listaQualidadesModal')
        listaQualidadesFicha.innerHTML = ""

        for(const vantagem in vantagensDetalhadas){
            const vantagemElemento = document.createElement('li')
            vantagemElemento.className = vantagens.includes(vantagem) ? "showAnswer" : ""

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

        for(const qualidade in qualidadesDetalhadas){
            const qualidadeElemento = document.createElement('li')
            qualidadeElemento.className = qualidades.includes(qualidade) ? "showAnswer" : ""

            qualidadeElemento.innerHTML = `
            <div class="vantagem__accordion">
            <span class="vantagem__titulo titulo-busca">${qualidade}</span>
            <i class="bx bxs-chevron-down arrow"></i>
            </div>
            <div class="vantagem__conteudo">${qualidadesDetalhadas[qualidade]}</div>
            <span class="vantagem__linha"></span>
            `

            listaQualidadesFicha.appendChild(qualidadeElemento)
            if(arquetipo === "O Mago da Morte" && qualidade === "Iniciado em Magia"){
                continue
            } else{
                qualidadeElemento.addEventListener('click', (e) => {
                    mostraDetalhes(e)
                    limpaErro()
                })
            }
        }

        modal.style.display = "block"
        document.body.classList.add('modal-active')
    } else if(modal === "desvantagens"){
        const modal = document.querySelector('#modalDesvantagens')
        const conteudoModal = modal.querySelector('.modal-content')
        conteudoModal.classList.remove('iluminado')

        const pesquisa = conteudoModal.querySelector('.search-box input')
        pesquisa.value = ""

        const tituloModal = modal.querySelector('h2')
        tituloModal.textContent = "Editar Desvantagens"
        
        const listaDesvantagens = document.getElementById('listaDesvantagens')
        const desvantagensAdquiridas = listaDesvantagens.querySelectorAll('.vantagem__titulo')
        const listaLimitacoes = document.getElementById('listaLimitacoes')
        const limitacoesAdquiridas = listaLimitacoes.querySelectorAll('.vantagem__titulo')

        const btnIluminado = modal.querySelector('.btnDetails.btnIluminado')
        const btnConsciente = modal.querySelector('.btnDetails.btnConsciente')
        const arquetipo = document.getElementById('personagemArquetipo').textContent

        if(arquetiposIluminados.includes(arquetipo)){
            btnIluminado.style.display = "block"
        } else{
            btnIluminado.style.display = "none"
        }

        btnConsciente.style.display = "none"

        let desvantagens = [];
        desvantagensAdquiridas.forEach((desvantagem) => desvantagens.push(desvantagem.textContent))

        const listaDesvantagensFicha = document.querySelector('#listaDesvantagensModal')
        listaDesvantagensFicha.innerHTML = ""

        let limitacoes = [];
        if(limitacoesAdquiridas.length > 0){
            limitacoesAdquiridas.forEach((limitacao) => limitacoes.push(limitacao.textContent))
        }

        const listaLimitacoesFicha = document.querySelector('#listaLimitacoesModal')
        listaLimitacoesFicha.innerHTML = ""

        const arquetipoPersonagem = document.querySelector('#personagemArquetipo').textContent
        for(const desvantagem in desvantagensDetalhadas){
            const desvantagemElemento = document.createElement('li')
            desvantagemElemento.className = desvantagens.includes(desvantagem) ? "showAnswer" : ""

            desvantagemElemento.innerHTML = `
            <div class="vantagem__accordion">
            <span class="vantagem__titulo titulo-busca">${desvantagem}</span>
            <i class="bx bxs-chevron-down arrow"></i>
            </div>
            <div class="vantagem__conteudo">${desvantagensDetalhadas[desvantagem]}</div>
            <span class="vantagem__linha"></span>
            `
            
            if(desvantagem !== desvantagensObrigatorias[arquetipoPersonagem]){
                desvantagemElemento.addEventListener('click', (e) => {
                    mostraDetalhes(e)
                    limpaErro()
                })
            }

            if((desvantagem === "Perseguidores" && arquetipoPersonagem !== "A Revivida") || (desvantagem === "Maculado" && arquetipoPersonagem !== "O Mago da Morte") || 
            (desvantagem === "Pupilo" && arquetipoPersonagem !== "A Discípula") || (desvantagem === "Criador" && arquetipoPersonagem !== "O Abominável")){
                continue
            }

            listaDesvantagensFicha.appendChild(desvantagemElemento)
        }

        for(const limitacao in limitacoesDetalhadas){
            const limitacaoElemento = document.createElement('li')
            limitacaoElemento.className = limitacoes.includes(limitacao) ? "showAnswer" : ""

            limitacaoElemento.innerHTML = `
            <div class="vantagem__accordion">
            <span class="vantagem__titulo titulo-busca">${limitacao}</span>
            <i class="bx bxs-chevron-down arrow"></i>
            </div>
            <div class="vantagem__conteudo">${limitacoesDetalhadas[limitacao]}</div>
            <span class="vantagem__linha"></span>
            `

            if(limitacao !== limitacoesObrigatorias[arquetipoPersonagem]){
                limitacaoElemento.addEventListener('click', (e) => {
                    mostraDetalhes(e)
                    limpaErro()
                })
            }

            listaLimitacoesFicha.appendChild(limitacaoElemento)
        }

        pegaPoderSuperior(numeroPersonagemSelecionado)
        const dropdown = listaLimitacoesFicha.querySelector('.vantagem__dropdown')
        dropdown.addEventListener('click', () => {
            dropdown.classList.toggle('active')
        })

        if(poderSuperior !== null && poderSuperior !== undefined){
            const selectbox = dropdown.querySelector('.vantagem__selectbox')
            selectbox.value = poderSuperior
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

        const progressoesConsciente = document.querySelectorAll(".progressao__lista.consciente")
        const progressoesIluminado = document.querySelectorAll(".progressao__lista.iluminado")
        const arquetipo = document.getElementById('personagemArquetipo').textContent
        const tipoProgressao = document.getElementById('progressaoTipo')

        if(arquetiposIluminados.includes(arquetipo)){
            progressoesIluminado.forEach((progressao) => progressao.style.display = "block")
            progressoesConsciente.forEach((progressao) => progressao.style.display = "none")
            tipoProgressao.textContent = "Iluminado"
        } else{
            progressoesConsciente.forEach((progressao) => progressao.style.display = "block")
            progressoesIluminado.forEach((progressao) => progressao.style.display = "none")
            tipoProgressao.textContent = "Consciente"
        }

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
    } else if(modal === "popup"){
        const modal = document.querySelector('#modalPopup')
        modal.style.display = "block"
        document.body.classList.add('modal-active')
        
        const acao = document.getElementById("acaoSelecionada")
        acao.value = "Influenciar Alguém"
        const atributo = document.getElementById("atributoSelecionado").value

        mostraInputs('popup')
    } else if(modal === "tips"){
        const modal = document.querySelector('#modalTips')
        modal.style.display = "block"
        document.body.classList.add('modal-active')

        const titulo = modal.querySelector('h2')
        titulo.textContent = movimentos[submodal]

        if(submodal === "alma" || submodal === "reflexos" || submodal === "firmeza"){
            modal.style.maxWidth = "440px"
        } else{
            modal.style.maxWidth = "560px"
        }

        const agirDeAcordoBtn = modal.querySelector('.inputSegredos button')
        if(submodal === "percepcao"){
            agirDeAcordoBtn.style.display = "block"
        } else{
            agirDeAcordoBtn.style.display = "none"
        }

        const buttons = modal.querySelectorAll('.modal-tip-btns button')
        const sections = modal.querySelectorAll('.modal-tip-section')
        buttons.forEach((btn) => btn.addEventListener("click", () => {
            buttons.forEach((btn) => btn.classList.remove("active"))
            btn.classList.add("active")

            sections.forEach(section => {
                const tipo = section.getAttribute('data-section')
                if(tipo === btn.textContent){
                    section.style.display = "flex"
                } else{
                    section.style.display = "none"
                }
            })
        }))

        buttons[0].click()

        const submodais = modal.querySelectorAll('.modal-tip')
        submodais.forEach(sub => {
            const tipo = sub.getAttribute('data-atributo')
            if(tipo === submodal){
                sub.style.display = "flex"
            } else{
                sub.style.display = "none"
            }
        })
    }
}

let modificadorManipulador = false;

function ativarRolagem(e){
    const modal = document.querySelector('#modalPopup')
    modal.style.display = "none"
    document.body.classList.remove('modal-active')
    const container = document.querySelector('.modal__container')
    container.style.display = "none"

    const acao = document.getElementById("acaoSelecionada")
    const atributo = document.getElementById("atributoSelecionado").value

    modificadorManipulador = true;

    if(acao.value === "Influenciar Alguém"){
        const carisma = document.getElementById('carisma')
        carisma.click()
    } else{
        rolarDado(e, 'atrapalhar', atributo)
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
    } else if(modal === "popup"){
        const modal = document.querySelector('#modalPopup')
        modal.style.display = "none"
        document.body.classList.remove('modal-active')
    } else if(modal === "tips"){
        const modal = document.querySelector('#modalTips')
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
    const regex = /^(\d+)d(\d+)([+-]\d+)$/;
    console.log(regex.test(rolagem))
    var id = generateUniqueId()
    if(rolagem !== "" && nome !== "" && regex.test(rolagem)){
        constroiDadoFicha(rolagem, nome, tipo, id)
        registraDadoFicha(rolagem, nome, tipo, id)
        modal.style.display = "none"
        const container = document.querySelector('.modal__container')
        container.style.display = "none"
        document.body.classList.remove('modal-active')
    } else if(!regex.test(rolagem) && rolagem !== "" && nome !== ""){
        mensagemErroRolagem.innerHTML = "Valor incompatível ao modelo fornecido."
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
                constroiEquipamento(tipoArmadura, nome, categoria, -1, id, false)
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

function mudaModal(event){
    const conteudoModal = event.target.parentElement.parentElement
    conteudoModal.classList.toggle('iluminado')

    const modal = conteudoModal.parentElement
    const modalTitulo = modal.querySelector('h2')

    const btnIluminado = conteudoModal.querySelector('.btnDetails.btnIluminado')
    const btnConsciente = conteudoModal.querySelector('.btnDetails.btnConsciente')

    if(conteudoModal.classList.contains('iluminado')){
        btnIluminado.style.display = "none"
        btnConsciente.style.display = "block"
        
        if(modal.id === "modalVantagens"){
            modalTitulo.textContent = "Editar Qualidades"
        } else{
            modalTitulo.textContent = "Editar Limitações"
        }
    } else{
        btnIluminado.style.display = "block"
        btnConsciente.style.display = "none"

        if(modal.id === "modalVantagens"){
            modalTitulo.textContent = "Editar Vantagens"
        } else{
            modalTitulo.textContent = "Editar Desvantagens"
        }
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

function mostraInputs(tipo){
    if(tipo === "equipamento"){
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
    } else if(tipo === "popup"){
        const acao = document.getElementById('acaoSelecionada').value
        const atributo = document.getElementById('divAtributoSelecionado')
        const atributoSelecionado = document.getElementById('atributoSelecionado')
        const icon = atributo.querySelector('ion-icon')

        if(acao === "Atrapalhar"){
            atributo.classList.remove('locked')
            atributoSelecionado.value = "Alma"
            icon.name = "chevron-down-outline"
        } else{
            atributo.classList.add('locked')
            atributoSelecionado.value = "Carisma"
            icon.name = "lock-closed-outline"
        }
    }
}

function constroiEquipamento(tipo, nome, categoria, indice, id, equipado){
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
        <td>
            <div class="equip-armor">
                <input type="checkbox" class="toggle" ${equipado === true ? "checked" : ""} id="input${id}" onchange="equiparArmadura('${id}')">
                <label for="input${id}">
            </div>
        </td>
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

function equiparArmadura(id){
    const tabela = document.querySelector('#listaArmadura')
    const switches = tabela.querySelectorAll('.equip-armor input')

    switches.forEach((input) => {
        if(input.id !== ('input' + id)){
            input.checked = false
            const inputId = input.parentElement.parentElement.parentElement.id
            mudaEquipamento(inputId, false)
        } else{
            mudaEquipamento(id, true)
        }
    })
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

    let resultados = []; 

    for (let i = 0; i < quantidadeDeDados; i++) {
        const rolagem = Math.floor(Math.random() * tipoDeDados + 1);
        resultados.push(rolagem);
    }

    let resultadoFinal = 0; 

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

let agirDeAcordo = false;

function rolarDado(event, tipo, atributo) {
    pegaEstabilidade();

    const primeiraRolagem = Math.floor(Math.random() * 10 + 1);
    const segundaRolagem = Math.floor(Math.random() * 10 + 1);
    const rolagemResultado = document.querySelector('#rolagemResultado');
    let resultado;
    let ajuste = '';
    let titulo = '';
    let modificadorAbsoluto;

    const ferimentosGraves = document.querySelectorAll('.ferimentos__graves--lista .ferimento__item')
    const ferimentosCriticos = document.querySelectorAll('.ferimentos__criticos--lista .ferimento__item')

    let ferimentos = '';
    let modificadorFerimento = 0;

    if(ferimentosGraves.length > 0 && ferimentosCriticos.length > 0){
        ferimentos = '- 2'
        modificadorFerimento = -2
    } else if((ferimentosGraves.length > 0 && ferimentosCriticos.length === 0) || (ferimentosGraves.length === 0 && ferimentosCriticos.length > 0)){
        ferimentos = '- 1'
        modificadorFerimento = -2
    }

    let percepcao = '';
    let modificadorPercepcao = 0;

    pegaVantagens(numeroPersonagemSelecionado)
    if(vantagensPersonagem.includes("Indomável")){
        ferimentos = '';
        modificadorFerimento = 0;
    }

    if(agirDeAcordo === true){
        modificadorPercepcao = vantagensPersonagem.includes("Instinto") ? 2 : 1
        percepcao = `+ ${modificadorPercepcao}`
    }

    let vantagem = ''
    let modificadorVantagem = 0;
    let bonus = ""

    if(vantagensAtivas.includes('Desesperado')){
        modificadorVantagem += 1
        vantagem = `+ ${modificadorVantagem}`
    }
    if(vantagensAtivas.includes('Olho por Olho')){
        modificadorVantagem += 2
        vantagem = `+ ${modificadorVantagem}`
    }
    if(vantagensAtivas.includes('Rancor')){
        modificadorVantagem += 1
        vantagem = `+ ${modificadorVantagem}`
    }
    if(vantagensAtivas.includes('Instinto')){
        modificadorVantagem += 2
        vantagem = `+ ${modificadorVantagem}`
    }
    if(vantagensAtivas.includes('Ambicioso')){
        modificadorVantagem += 2
        vantagem = `+ ${modificadorVantagem}`
        verificaEstabilidade(-2)
    }

    let fracasso = ''
    let modificadorFracasso = 0;

    if(vantagemFracasso === true){
        fracasso = '- 1'
        modificadorFracasso = -1
    }

    if(tipo === "atributo"){
        const elementoPai = event.target.parentElement;
        titulo = elementoPai.querySelector('label').textContent;
        
        const modificador = parseInt(event.target.textContent);
        
        modificadorAbsoluto = Math.abs(modificador);
        
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

        if(titulo === "Fortitude" && vantagensPersonagem.includes("Durão")){
            resultado += 1;
            ajuste = '+ 1'
        }

        if(titulo === "Fortitude" && vantagensAtivas.includes("Guerreiro Divino")){
            resultado += 1;
            bonus = '+ 1'
        }

        let armadura = "";
        const listaArmadura = document.getElementById('listaArmadura')
        const armaduraEquipada = listaArmadura.querySelector(".equip-armor input[type='checkbox']:checked")
        if(titulo === "Fortitude" && armaduraEquipada){
            const tipo = armaduraEquipada.parentElement.parentElement.parentElement.querySelector('td:nth-child(2)').textContent
            if(tipo === "Pesada"){
                armadura = "+ 2"
                resultado += 2
            }else{
                armadura = "+ 1"
                resultado += 1
            }
        }

        resultado = resultado + modificadorFerimento + modificadorVantagem + modificadorPercepcao + modificadorFracasso + (modificadorManipulador === true ? 2 : 0)

        const modificadorTexto = modificadorAbsoluto === 0 ? '' : `${modificador < 0 ? '-' : '+'} ${modificadorAbsoluto}`;

        rolagemResultado.innerHTML = `
        <p><b>Resultado: </b>${primeiraRolagem} + ${segundaRolagem} ${modificadorTexto} ${armadura} ${ajuste} ${ferimentos} ${vantagem} ${bonus} ${fracasso} ${percepcao} ${modificadorManipulador === true ? "+ 2" : ""} = ${resultado}</p>
        <p>D10: ${primeiraRolagem}, ${segundaRolagem}</p>
        `;
    } else if(tipo === "desvantagem"){
        const itemLista = event.target.parentElement.parentElement.parentElement;
        titulo = itemLista.querySelector('.vantagem__titulo').textContent;
        resultado = primeiraRolagem + segundaRolagem;

        if(estabilidadeAtual === "Apreensivo" || estabilidadeAtual === "Disperso"){
            resultado -= 1;
            ajuste = '- 1';
        } else if(estabilidadeAtual === "Abalado" || estabilidadeAtual === "Angustiado" || estabilidadeAtual === "Neurótico"){
            resultado -= 2;
            ajuste = '- 2';
        } else if(estabilidadeAtual === "Agoniado" || estabilidadeAtual === "Irracional" || estabilidadeAtual === "Transtornado" || estabilidadeAtual === "Arruinado"){
            resultado -= 3;
            ajuste = '- 3';
        }

        resultado = resultado + modificadorFerimento + modificadorVantagem + modificadorFracasso + modificadorPercepcao

        rolagemResultado.innerHTML = `
        <p><b>Resultado: </b>${primeiraRolagem} + ${segundaRolagem} ${ajuste} ${ferimentos} ${vantagem} ${fracasso} ${percepcao} = ${resultado}</p>
        <p>D10: ${primeiraRolagem}, ${segundaRolagem}</p>
        `;
    } else if(tipo === "vantagem"){
        const itemLista = event.target.parentElement.parentElement.parentElement;
        titulo = itemLista.querySelector('.vantagem__titulo').textContent;
        let modificador;

        const atributos = document.querySelectorAll('.ficha__atributos label');
        atributos.forEach((label) => {
            if(label.textContent === atributo){
                modificador = parseInt(label.parentElement.querySelector('.atributo').textContent);
            }
        });

        modificadorAbsoluto = Math.abs(modificador);
        
        const modificadorTexto = modificadorAbsoluto === 0 ? '' : `${modificador < 0 ? '-' : '+'} ${modificadorAbsoluto}`;

        resultado = primeiraRolagem + segundaRolagem + parseInt(modificador) + modificadorFerimento + modificadorVantagem + modificadorFracasso + modificadorPercepcao;

        rolagemResultado.innerHTML = `
        <p><b>Resultado: </b>${primeiraRolagem} + ${segundaRolagem} ${modificadorTexto} ${ferimentos} ${vantagem} ${fracasso} ${percepcao} = ${resultado}</p>
        <p>D10: ${primeiraRolagem}, ${segundaRolagem}</p>
        `;
    } else if(tipo === "ajudar" || tipo === "atrapalhar"){
        titulo = tipo === "ajudar" ? "Ajudar" : "Atrapalhar"

        let modificador;
        const atributos = document.querySelectorAll('.ficha__atributos label');
        atributos.forEach((label) => {
            if(label.textContent === atributo){
                modificador = parseInt(label.parentElement.querySelector('.atributo').textContent);
            }
        });


        modificadorAbsoluto = Math.abs(modificador);
        
        const modificadorTexto = modificadorAbsoluto === 0 ? '' : `${modificador < 0 ? '-' : '+'} ${modificadorAbsoluto}`;

        resultado = primeiraRolagem + segundaRolagem + parseInt(modificador) + modificadorFerimento + modificadorVantagem + modificadorFracasso + modificadorPercepcao + (modificadorManipulador === true ? 2 : 0);

        rolagemResultado.innerHTML = `
        <p><b>Resultado: </b>${primeiraRolagem} + ${segundaRolagem} ${modificadorTexto} ${ferimentos} ${vantagem} ${fracasso} ${percepcao} ${modificadorManipulador === true ? "+ 2" : ""} = ${resultado}</p>
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

    modificadorManipulador = false;
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
        idadePersonagem.textContent = inputIdade + ' Anos'
        imagemPersonagem.src = inputImagem
        ocupacaoPersonagem.textContent = inputOcupacao
        nacionalidadePersonagem.textContent = inputNacionalidade

        pegaDesvantagens(numeroPersonagemSelecionado)
        if(desvantagensObrigatorias[inputArquetipo] !== undefined && !desvantagensPersonagem.includes(desvantagensObrigatorias[inputArquetipo])){
            desvantagensPersonagem.push(desvantagensObrigatorias[inputArquetipo])  
            registraDesvantagem(desvantagensPersonagem)
            
            const listaDesvantagensFicha = document.querySelector('#listaDesvantagens')
            const desvantagemObrigatoria = document.createElement('li')
            desvantagemObrigatoria.innerHTML = `
            <div class="vantagem__accordion">
            <span class="vantagem__titulo">${desvantagensObrigatorias[inputArquetipo]}</span>
            <i class="bx bxs-chevron-down arrow"></i>
            </div>
            <div class="vantagem__conteudo">
                ${desvantagensDetalhadas[desvantagensObrigatorias[inputArquetipo]]}
                ${desvantagensObrigatorias[inputArquetipo] === "Arruinado" || desvantagensObrigatorias[inputArquetipo] === "Racionalista" || desvantagensObrigatorias[inputArquetipo] === "Fobia" ? "" : `
                    <div class="vantagem__rolagem">
                        <button onclick="rolarDado(event, 'desvantagem')">Rolar</button>
                    </div>
                `}
            </div>
            <span class="vantagem__linha"></span>
            `
            desvantagemObrigatoria.addEventListener('click', (e) => mostraDetalhes(e))
            listaDesvantagensFicha.appendChild(desvantagemObrigatoria)

            const estabilidadeCalmo = document.getElementById('estabilidadeCalmo')
            const estabilidadeApreensivo = document.getElementById('estabilidadeApreensivo')
            const estabilidadeDisperso = document.getElementById('estabilidadeDisperso')
            const estabilidadeAbalado = document.getElementById('estabilidadeAbalado')
            const estabilidadeAngustiado = document.getElementById('estabilidadeAngustiado')

            const inputs = [estabilidadeCalmo, estabilidadeApreensivo, estabilidadeDisperso, estabilidadeAbalado]
            inputs.forEach((input) => {
                if(desvantagensObrigatorias[inputArquetipo] === "Arruinado"){
                    input.disabled = true
                    input.parentElement.classList.add('disabled')

                    pegaEstabilidade()
                    if(estabilidadeAtual === "Calmo" || estabilidadeAtual === "Apreensivo" || estabilidadeAtual === "Disperso" || estabilidadeAtual === "Abalado"){
                        estabilidadeAngustiado.checked = true
                        mudaEstabilidade('Angustiado')
                    }
                } else{
                    input.disabled = false
                    input.parentElement.classList.remove('disabled')
                }
            })
        }

        pegaQualidades(numeroPersonagemSelecionado)
        if(qualidadesPersonagem === null){
            qualidadesPersonagem = []
        }

        if(inputArquetipo === "O Mago da Morte" && !qualidadesPersonagem.includes("Iniciado em Magia")){
            qualidadesPersonagem.push("Iniciado em Magia")
            registraQualidade(qualidadesPersonagem)

            const qualidadeElemento = document.createElement('li')
            const listaQualidadesFicha = document.querySelector('#listaQualidades')
    
            qualidadeElemento.innerHTML = `
            <div class="vantagem__accordion">
            <span class="vantagem__titulo">Iniciado em Magia</span>
            <i class="bx bxs-chevron-down arrow"></i>
            </div>
            <div class="vantagem__conteudo">
                ${qualidadesDetalhadas["Iniciado em Magia"]}
            </div>
            <span class="vantagem__linha"></span>
            `
            qualidadeElemento.addEventListener('click', (e) => mostraDetalhes(e))
            listaQualidadesFicha.appendChild(qualidadeElemento)
        }

        pegaLimitacoes(numeroPersonagemSelecionado)
        if(limitacoesPersonagem === null){
            limitacoesPersonagem = []
        }

        if(limitacoesObrigatorias[inputArquetipo] !== undefined && !limitacoesPersonagem.includes(limitacoesObrigatorias[inputArquetipo])){
            limitacoesPersonagem.push(limitacoesObrigatorias[inputArquetipo])
            registraLimitacao(limitacoesPersonagem)

            const limitacaoElemento = document.createElement('li')
            const listaLimitacoesFicha = document.querySelector('#listaLimitacoes')
    
            limitacaoElemento.innerHTML = `
            <div class="vantagem__accordion">
            <span class="vantagem__titulo">${limitacoesObrigatorias[inputArquetipo]}</span>
            <i class="bx bxs-chevron-down arrow"></i>
            </div>
            <div class="vantagem__conteudo">
                ${limitacoesDetalhadas[limitacoesObrigatorias[inputArquetipo]]}
                ${limitacoesLista[limitacoesObrigatorias[inputArquetipo]]["tipo"] === "-" ? "" : `
                    <div class="vantagem__rolagem">
                        <button onclick="rolarDado(event, '${limitacoesLista[limitacoesObrigatorias[inputArquetipo]]["tipo"]}', '${limitacoesLista[limitacoesObrigatorias[inputArquetipo]]["atributo"]}')">Rolar</button>
                    </div>
                `}
            </div>
            <span class="vantagem__linha"></span>
            `

            if(limitacoesObrigatorias[inputArquetipo] === "Vinculado a um Poder Superior"){
                const dropdown = limitacaoElemento.querySelector(".vantagem__dropdown")
                dropdown.remove()
            }


            limitacaoElemento.addEventListener('click', (e) => mostraDetalhes(e))
            listaLimitacoesFicha.appendChild(limitacaoElemento)
        }

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
    
    const listaVantagensModal = document.getElementById('listaVantagensModal')
    const lista = listaVantagensModal.querySelectorAll('.titulo-busca')
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

    const listaQualidadesModal = document.getElementById('listaQualidadesModal')
    const listaQualidades = listaQualidadesModal.querySelectorAll('.titulo-busca')
    listaQualidades.forEach(function (titulo){
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
    
    const listaDesvantagensModal = document.getElementById('listaDesvantagensModal')
    const lista = listaDesvantagensModal.querySelectorAll('.titulo-busca')
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

    const listaLimitacoesModal = document.getElementById('listaLimitacoesModal')
    const listaLimitacoes = listaLimitacoesModal.querySelectorAll('.titulo-busca')
    listaLimitacoes.forEach(function(titulo){
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

function adicionaVantagens() {
    const modal = document.querySelector('#modalVantagens');
    const mensagemErro = document.querySelector('#mensagemErroVantagens');

    const modalVantagens = document.getElementById('listaVantagensModal');
    const modalQualidades = document.getElementById('listaQualidadesModal');
    const vantagensSelecionadas = modalVantagens.querySelectorAll('li.showAnswer');
    const qualidadesSelecionadas = modalQualidades.querySelectorAll('li.showAnswer');

    const listaDesvantagens = document.getElementById('listaDesvantagens')
    const desvantagensAdquiridas = listaDesvantagens.querySelectorAll('.vantagem__titulo')

    let desvantagens = [];

    desvantagensAdquiridas.forEach((desvantagem) => {
        desvantagens.push(desvantagem.textContent)
    })

    let qualidades = [];
    let vantagens = [];

    qualidadesSelecionadas.forEach((qualidade) => {
        const nome = qualidade.querySelector('.titulo-busca');
        qualidades.push(nome.textContent);
    });

    vantagensSelecionadas.forEach((vantagem) => {
        const nome = vantagem.querySelector('.titulo-busca');
        vantagens.push(nome.textContent);
    });

    if (
        (qualidades.includes("Adepto em Magia") && !qualidades.includes("Praticante em Magia")) ||
        (qualidades.includes("Praticante em Magia") && !qualidades.includes("Iniciado em Magia")) ||
        (qualidades.includes("Mestre em Magia") && !qualidades.includes("Adepto em Magia")) ||
        ((vantagens.includes("Sacrifício Pessoal") || vantagens.includes("Destino Selado")) && !desvantagens.includes("Condenado"))
    ) {
        mensagemErro.innerHTML = "Seleção não atende aos requisitos.";
        return;
    }

    const lista = document.querySelector('#listaVantagens');
    lista.innerHTML = "";

    const listaQualidades = document.querySelector('#listaQualidades');
    listaQualidades.innerHTML = "";

    vantagensSelecionadas.forEach((vantagem) => {
        const nome = vantagem.querySelector('.titulo-busca');
        const vantagemElemento = document.createElement('li');

        vantagemElemento.innerHTML = `
            <div class="vantagem__accordion">
            <span class="vantagem__titulo">${nome.textContent}</span>
            <i class="bx bxs-chevron-down arrow"></i>
            </div>
            <div class="vantagem__conteudo">
                ${vantagensDetalhadas[nome.textContent]}
                ${vantagensLista[nome.textContent]["atributo"] === "-" ? "" : (vantagensNaoRolaveis.includes(nome.textContent) ? "" : `
                    <div class="vantagem__rolagem">
                        <button onclick="rolarDado(event, 'vantagem', '${vantagensLista[nome.textContent]["atributo"]}')">Rolar</button>
                    </div>
                `)}
                ${vantagensAtivaveis.includes(nome.textContent) ? `
                    <div class="vantagem__rolagem">
                        <button onclick="ativarVantagem(event)">Ativar</button>
                        ${nome.textContent === "Guerreiro Divino" ? `
                        <button class="failure" onclick="ativarFracasso(event)">Fracasso</button>
                        ` : ""}
                    </div>
                ` : ""
                }
                ${vantagensUsaveis.includes(nome.textContent) ? `
                    <div class="vantagem__rolagem">
                        <button onclick="usarVantagem(event)">Usar</button>
                    </div>
                ` : ""
                }
            </div>
            <span class="vantagem__linha"></span>
        `;
        vantagemElemento.addEventListener('click', (e) => mostraDetalhes(e));
        lista.appendChild(vantagemElemento);
    });

    qualidadesSelecionadas.forEach((qualidade) => {
        const nome = qualidade.querySelector('.titulo-busca');
        const qualidadeElemento = document.createElement('li');

        qualidadeElemento.innerHTML = `
            <div class="vantagem__accordion">
            <span class="vantagem__titulo">${nome.textContent}</span>
            <i class="bx bxs-chevron-down arrow"></i>
            </div>
            <div class="vantagem__conteudo">
                ${qualidadesDetalhadas[nome.textContent]}
                ${qualidadesLista[nome.textContent]["atributo"] === "-" ? "" : `
                    <div class="vantagem__rolagem">
                        <button onclick="rolarDado(event, 'vantagem', '${qualidadesLista[nome.textContent]["atributo"]}')">Rolar</button>
                    </div>
                `}
            </div>
            <span class="vantagem__linha"></span>
        `;
        qualidadeElemento.addEventListener('click', (e) => mostraDetalhes(e));
        listaQualidades.appendChild(qualidadeElemento);
    });

    const requisitos = document.querySelectorAll('.vantagem__requisito')
    requisitos.forEach((requisito) => requisito.remove())

    registraVantagem(vantagens);
    registraQualidade(qualidades);

    vantagensAtivas = [];
    vantagemFracasso = false;

    modal.style.display = "none";
    const container = document.querySelector('.modal__container');
    container.style.display = "none";
    document.body.classList.remove('modal-active');
}

function adicionaDesvantagens(){
    const modal = document.querySelector('#modalDesvantagens')
    const mensagemErro = document.querySelector('#mensagemErroDesvantagens')

    const modalDesvantagens = document.getElementById('listaDesvantagensModal')
    const modalLimitacoes = document.getElementById('listaLimitacoesModal')

    const desvantagensSelecionadas = modalDesvantagens.querySelectorAll('li.showAnswer')
    const limitacoesSelecionadas = modalLimitacoes.querySelectorAll('li.showAnswer')

    if(desvantagensSelecionadas.length !== 0){
        const lista = document.querySelector('#listaDesvantagens')
        lista.innerHTML = ""

        const listaLimitacoes = document.querySelector('#listaLimitacoes')
        listaLimitacoes.innerHTML = ""
        
        let desvantagens = []
        let limitacoes = []

        desvantagensSelecionadas.forEach((desvantagem) => {
            const nome = desvantagem.querySelector('.titulo-busca')
            desvantagens.push(nome.textContent)
            const desvantagemElemento = document.createElement('li')
            desvantagemElemento.innerHTML = `
                <div class="vantagem__accordion">
                <span class="vantagem__titulo">${nome.textContent}</span>
                <i class="bx bxs-chevron-down arrow"></i>
                </div>
                <div class="vantagem__conteudo">
                    ${desvantagensDetalhadas[nome.textContent]}
                    ${nome.textContent === "Arruinado" || nome.textContent === "Racionalista" || nome.textContent === "Fobia" ? "" : `
                        <div class="vantagem__rolagem">
                            <button onclick="rolarDado(event, 'desvantagem')">Rolar</button>
                        </div>
                    `}
                </div>
                <span class="vantagem__linha"></span>
            `

            desvantagemElemento.addEventListener('click', (e) => mostraDetalhes(e))
            lista.appendChild(desvantagemElemento)
        })

        const dropdown = modalLimitacoes.querySelector('.vantagem__selectbox')

        limitacoesSelecionadas.forEach((limitacao) => {
            const nome = limitacao.querySelector('.titulo-busca')
            limitacoes.push(nome.textContent)
            const limitacaoElemento = document.createElement('li')
    
            limitacaoElemento.innerHTML = `
            <div class="vantagem__accordion">
            <span class="vantagem__titulo">${nome.textContent}</span>
            <i class="bx bxs-chevron-down arrow"></i>
            </div>
            <div class="vantagem__conteudo">
                ${limitacoesDetalhadas[nome.textContent]}
                ${nome.textContent === "Vinculado a um Poder Superior" ? listaPoderSuperior[dropdown.value] : ""}
                ${limitacoesLista[nome.textContent]["tipo"] === "-" ? "" : `
                    <div class="vantagem__rolagem">
                        <button onclick="rolarDado(event, '${limitacoesLista[nome.textContent]["tipo"]}', '${limitacoesLista[nome.textContent]["atributo"]}')">Rolar</button>
                    </div>
                `}
            </div>
            <span class="vantagem__linha"></span>
            `

            if(nome.textContent === "Vinculado a um Poder Superior"){
                const dropdown = limitacaoElemento.querySelector(".vantagem__dropdown")
                dropdown.remove()
            }

            limitacaoElemento.addEventListener('click', (e) => mostraDetalhes(e))
            listaLimitacoes.appendChild(limitacaoElemento)
        })

        const estabilidadeCalmo = document.getElementById('estabilidadeCalmo')
        const estabilidadeApreensivo = document.getElementById('estabilidadeApreensivo')
        const estabilidadeDisperso = document.getElementById('estabilidadeDisperso')
        const estabilidadeAbalado = document.getElementById('estabilidadeAbalado')
        const estabilidadeAngustiado = document.getElementById('estabilidadeAngustiado')

        const inputs = [estabilidadeCalmo, estabilidadeApreensivo, estabilidadeDisperso, estabilidadeAbalado]
        inputs.forEach((input) => {
            if(desvantagens.includes('Arruinado')){
                input.disabled = true
                input.parentElement.classList.add('disabled')

                pegaEstabilidade()
                if(estabilidadeAtual === "Calmo" || estabilidadeAtual === "Apreensivo" || estabilidadeAtual === "Disperso" || estabilidadeAtual === "Abalado"){
                    estabilidadeAngustiado.checked = true
                    mudaEstabilidade('Angustiado')
                }
            } else{
                input.disabled = false
                input.parentElement.classList.remove('disabled')
            }
        })

        if(limitacoes.includes('Vinculado a um Poder Superior')){
            registraPoderSuperior(dropdown.value)
        } else{
            removerPoderSuperior()   
        }

        registraDesvantagem(desvantagens)
        registraLimitacao(limitacoes)
        modal.style.display = "none"
        const container = document.querySelector('.modal__container')
        container.style.display = "none"
        document.body.classList.remove('modal-active')
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

        if (numero >= 31 && numero < 38) {
          let contadorEntre20e30 = 0;
          for (let j = 0; j < inputsChecados.length; j++) {
            let numeroMenor = parseInt(inputsChecados[j].replace('progressao', ''));
            if (numeroMenor >= 20 && numeroMenor <= 30) {
              contadorEntre20e30++;
            }
          }
          if (contadorEntre20e30 < 5) {
            mensagemErro.innerHTML = "Obtenha cinco progressões anteriores."
            return;
          }
        } 
        else if (numero === 38) {
            let contadorEntre20e37 = 0;
            for (let j = 0; j < inputsChecados.length; j++) {
                let numeroMenor = parseInt(inputsChecados[j].replace('progressao', ''));
                if (numeroMenor >= 20 && numeroMenor <= 37) {
                    contadorEntre20e37++;
                }
            }
            if (contadorEntre20e37 < 10) {
                mensagemErro.innerHTML = "Obtenha dez progressões anteriores."
                return;
            }
        } 
        else if (numero >= 13 && numero < 19) {
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
        } 
        else if(numero == 19){
            let contadorEntre1e18 = 0;
            for (let j = 0; j < inputsChecados.length; j++) {
                let numeroMenor = parseInt(inputsChecados[j].replace('progressao', ''));
                if (numeroMenor >= 1 && numeroMenor <= 18) {
                    contadorEntre1e18++;
                }
            }
            if (contadorEntre1e18 < 10) {
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

function ativarVantagem(event){
    const botao = event.target
    botao.classList.toggle('active')

    if(botao.classList.contains('active')){
        botao.textContent = "Desativar"
 
        const vantagem = botao.parentElement.parentElement.parentElement
        const vantagemNome = vantagem.querySelector('.vantagem__titulo').textContent
        if(vantagemNome === "Guerreiro Divino"){
            const failureBtn = vantagem.querySelector(".vantagem__rolagem .failure")
            failureBtn.classList.remove('active')
            vantagemFracasso = false
        }
    } else{
        botao.textContent = "Ativar"
    }

    vantagensAtivas = []
    const listaVantagens = document.getElementById('listaVantagens')
    const vantagensAtivasBtns = listaVantagens.querySelectorAll('.vantagem__rolagem button.active')
    vantagensAtivasBtns.forEach((btn) => {
        const nome = btn.parentElement.parentElement.parentElement.querySelector('.vantagem__titulo').textContent
        vantagensAtivas.push(nome)
    })
}

function ativarFracasso(event){
    const botao = event.target
    botao.classList.toggle('active')

    if(botao.classList.contains('active')){
        vantagemFracasso = true

        const btn = botao.parentElement.parentElement.querySelector('button')
        btn.classList.remove('active')
        btn.textContent = "Ativar"

        let index = vantagensAtivas.indexOf("Guerreiro Divino")
        if(index !== -1){
            vantagensAtivas.splice(index, 1)
        }
    } else{
        vantagemFracasso = false
    }
}

function usarVantagem(event){
    const nome = event.target.parentElement.parentElement.parentElement.querySelector('.vantagem__titulo').textContent
    if(nome === "Bom Samaritano" || nome === "Oportunista" || nome === "Sede de Conhecimento" || nome === "Workaholic" || nome === "Código de Honra"){
        verificaEstabilidade(1)
    } else if(nome === "Manipulador"){
        abreModal("popup")
    }
}

function verificaEstabilidade(modificador){
    pegaEstabilidade()

    if(vantagensPersonagem.includes('Inabalável') && modificador < 0){
        modificador++
    }
    
    const estabilidades = ["Calmo", "Apreensivo", "Disperso", "Abalado", "Angustiado", "Neurótico", "Agoniado", "Irracional", "Transtornado", "Arruinado"]

    const index = estabilidades.indexOf(estabilidadeAtual)
    if((modificador < 0 && index < estabilidades.length) || (modificador > 0 && index > 0)){
        const estabilidadeAlterada = estabilidades[index - modificador]
        mudaEstabilidade(estabilidadeAlterada)
        const estabilidadeInput = document.getElementById(`estabilidade${estabilidadeAlterada}`)
        estabilidadeInput.click()
    }
}