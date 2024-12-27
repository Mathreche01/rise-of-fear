let arquetipoPersonagem = ""
let vantagensEscolhidas = []
let desvantagensEscolhidas = []
let atributosPersonagem = []
let vantagemErro = ""
let desvantagemErro = ""
let atributosErro = ""
let mensagemErro = ""
let segredosSombrios = []
let nomePersonagem;
let idadePersonagem;
let nacionalidadePersonagem;
let ocupacaoPersonagem;
let imagemPersonagem;
let historiaPersonagem;
let enviarPersonagem;
let constroiCardPersonagem;
let erroFormulario = ""
let verPersonagensCriados;
let mudaValorPersonagens;
let personagensCriados = 0;

function selecionaArquetipo(arquetipo, desvantagemObrigatoria){
    arquetipoPersonagem	= arquetipo;
    const etapaGrupo1 = document.getElementById('step-group-1')
    const etapaGrupo2 = document.getElementById('step-group-2')

    etapaGrupo1.style.display = "none"
    etapaGrupo2.style.display = "block"
    mostraVantagens(arquetipo)
    mostraDesvantagens(desvantagemObrigatoria)

    currentStep++;
    updateProgressBar(currentStep);
}

function selecionaAtributos(){
        const atributos = document.querySelectorAll('.atributos')
        atributosPersonagem = [];

        atributos.forEach((atributo) => {
            atributosPersonagem.push(atributo.value); 
        });

        if(atributosPersonagem.indexOf("") === -1){
            
        const valoresEsperadosGrupo1 = ["0", "1", "2"]; 
        const valoresEsperadosGrupo2 = ["3", "2", "1", "1", "0", "-1", "-2"]; 

        const grupo1 = atributosPersonagem.slice(0, 3).sort();
        if (JSON.stringify(grupo1) !== JSON.stringify(valoresEsperadosGrupo1)) {
            atributosErro.textContent = "Distribua corretamente os valores de atributo."
            return;
        }


        const grupo2 = atributosPersonagem.slice(3, 10).sort();
        if (JSON.stringify(grupo2) !== JSON.stringify(valoresEsperadosGrupo2.sort())) {
            atributosErro.textContent = "Distribua corretamente os valores de atributo."
            return;
        }

        const etapaGrupo2 = document.getElementById('step-group-2')
        const etapaGrupo3 = document.getElementById('step-group-3')

        etapaGrupo2.style.display = "none"
        etapaGrupo3.style.display = "block"

        currentStep++;
        updateProgressBar(currentStep);
    } else{
        atributosErro.textContent = "Preencha todos os campos."
    }
}

function buscaArquetipo(){
    const busca = document.querySelector('[data-busca]').value.toLowerCase()
    const lista = document.querySelectorAll('.accordion__title')
    lista.forEach(function(titulo){
        const texto = titulo.innerHTML.toLowerCase()
        const found = texto.indexOf(busca)
        if(busca == ""){
            titulo.parentElement.style.display = "block"
        } else if(found == -1){
            titulo.parentElement.style.display = "none"
        } else {
            titulo.parentElement.style.display = "block"      
        }
    })
}

function mostraVantagens(arquetipo){
    const listaVantagens = arquetipoVantagens[arquetipo]
    const lista = document.querySelector('.vantagem__container')
    lista.innerHTML = ""
    listaVantagens.forEach((vantagem) => {
    const vantagemCard = vantagens[vantagem]
    const elemento = document.createElement('div')
    elemento.className = "vantagem__card"
    elemento.innerHTML = `
    <input type="checkbox" class="seleciona-vantagem" id="${vantagemCard["nome"]}">
    <div class="vantagem__box">
        <div class="vantagem__conteudo">
        <div class="vantagem__icone"><label for="${vantagemCard["nome"]}"><i class="fa-solid ${vantagemCard["icon"]} icone-v" onclick="limpaTexto()"></i></label></div>
        <div class="vantagem__texto">
            <h3>${vantagemCard["nome"]}</h3>
            <span>${vantagemCard["atributo"]}</span>
            <p>${vantagemCard["descricao"]}</p>
        </div>
        </div>
    </div>
    `
    lista.appendChild(elemento)
    })
}

function mostraDesvantagens(desvantagemObrigatoria){
    const lista = document.querySelector('.swiper-wrapper')
    desvantagens.forEach((desvantagem) => {
        const elemento = document.createElement('div')
        elemento.className = "vantagem__card swiper-slide"
        elemento.innerHTML = `
        <input type="checkbox" class="seleciona-desvantagem" id="${desvantagem.nome}">
        <div class="vantagem__box">
            <div class="vantagem__conteudo">
            <div class="vantagem__icone"><label for="${desvantagem.nome}"><i class="fa-solid ${desvantagem.icon} icone-v" onclick="limpaTexto()"></i></label></div>
            <div class="vantagem__texto">
                <h3>${desvantagem.nome}</h3>
                <span>Desvantagem</span>
                <p>${desvantagem.descricao}</p>
            </div>
            </div>
        </div>
        `
        lista.appendChild(elemento)
        if(desvantagem.nome === desvantagemObrigatoria){
            const input = document.getElementById(desvantagemObrigatoria)
            input.checked = true;
            input.disabled = true;
        } else{
            const input = document.getElementById(desvantagem.nome)
            input.checked = false;
        }
    })
}

function selecionaVantagens(){
    vantagensEscolhidas = []
    const vantagens = document.querySelectorAll('.seleciona-vantagem')
    vantagens.forEach((vantagem) => {
        if(vantagem.checked === true){
            vantagensEscolhidas.push(vantagem.id)
        }
    })
    if(vantagensEscolhidas.length !== 3){
        vantagemErro.textContent = "A lista deve conter três vantagens selecionadas."
    } else {
        const etapaGrupo3 = document.getElementById('step-group-3')
        const etapaGrupo4 = document.getElementById('step-group-4')
    
        etapaGrupo3.style.display = "none"
        etapaGrupo4.style.display = "block"

        currentStep++;
        updateProgressBar(currentStep);
    }
}

function selecionaDesvantagens(){
    desvantagensEscolhidas = []
    const desvantagens = document.querySelectorAll('.seleciona-desvantagem')
    desvantagens.forEach((desvantagem) => {
        if(desvantagem.checked === true){
            desvantagensEscolhidas.push(desvantagem.id)
        }
    })
    if(desvantagensEscolhidas.length !== 2){
        desvantagemErro.textContent = "A lista deve conter duas desvantagens selecionadas."
    } else {
        const etapaGrupo4 = document.getElementById('step-group-4')
        const etapaGrupo5 = document.getElementById('step-group-5')
       
        etapaGrupo4.style.display = "none"
        etapaGrupo5.style.display = "block"

        currentStep++;
        updateProgressBar(currentStep);
    }
}

function abrirSegredo(){
    var segredo = document.querySelector('.select-box')
    var motivo = document.querySelector('#motivoSegredo')
    motivo.value = ""
    segredo.value = "Conhecimento Proibido"
    const modal = document.querySelector('.modal')
    modal.showModal()
    document.body.classList.add('modal-active')
}

function fechaSegredo(){
    const modal = document.querySelector('.modal')
    modal.close()
    document.body.classList.remove('modal-active')
}

function limpaTexto(){
   if(vantagemErro){
        vantagemErro.textContent = ""
   }
   if(desvantagemErro){
        desvantagemErro.textContent = ""
   }
   if(mensagemErro){
        mensagemErro.innerHTML = ""
   }
   if(erroFormulario){
        erroFormulario.innerHTML = ""
   }
   if(atributosErro){
        atributosErro.innerHTML = ""
   }
}

function criaSegredo(){
    const modal = document.querySelector('.modal')
    var segredo = document.querySelector('.select-box').value
    var motivo = document.querySelector('#motivoSegredo').value
    var id = generateUniqueId()
    if(motivo !== ""){
        const lista = document.querySelector('.tabela__corpo')
        const item = document.createElement('tr')
        item.className = "segredoItem"
        item.innerHTML = `
        <td>${segredo}</td>
        <td>${motivo}</td>
        `
        lista.appendChild(item)
        modal.close()
        document.body.classList.remove('modal-active')
        const segredoSombrio = {
                    segredo: segredo,
                    motivo: motivo,
        }
            
        segredosSombrios.push(segredoSombrio)
    } else{
        mensagemErro.innerHTML = "Este campo não pode estar vazio."
    }
}

async function criaFicha(){
    const inputs = document.querySelectorAll('[required]')
    const listaSegredos = document.querySelectorAll('.segredoItem')
    
    const validacao = []
    inputs.forEach((input) => {
        const inputStatus = input.value
        validacao.push(inputStatus !== "")
    })
    if((validacao.indexOf(false) !== -1) || listaSegredos.length === 0){
        erroFormulario.innerHTML = "Todos os campos devem ser preenchidos."
    } else {
        nomePersonagem = document.querySelector("#pg-nome").value
        ocupacaoPersonagem =  document.querySelector("#pg-ocupacao").value
        idadePersonagem =  document.querySelector("#pg-idade").value
        nacionalidadePersonagem = document.querySelector("#pg-nacionalidade").value
        imagemPersonagem = document.querySelector("#pg-imagem").value
        historiaPersonagem = document.querySelector("#pg-historia").value
        verPersonagensCriados()
        mudaValorPersonagens()
        enviarPersonagem()
    }
}

function defineImagem(){
    const imagem = document.querySelector('#pg-imagem')
    let input = document.querySelector('#input-file')
    let reader = new FileReader()
    reader.readAsDataURL(input.files[0])
    reader.addEventListener('load', () => {
        imagem.value = reader.result
    })
}

function show(event){
    const container = event.target.parentElement.parentElement
    const input = container.querySelector('input')
    input.value = event.target.textContent
}

function formataInput(event){
    let value = event.target.value;

    if (!/^(-?[0-9]?)$/.test(value)) {
      value = value.slice(0, -1); 
    }

    event.target.value = value;

    event.target.addEventListener('blur', () => {
        if (event.target.value === '-') {
            event.target.value = '';
        }
    })
}