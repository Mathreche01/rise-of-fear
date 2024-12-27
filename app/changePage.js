const conteudoPagina = document.querySelector('#conteudo')
const dashboard = conteudoPagina.innerHTML
const slider = document.querySelector('.et-hero-tab-slider');
let currentStep;

async function mudaPagina(url, position){
    if(url !== "./dashboard.html"){
    await fetch(url).then((res) => res.text()).then(res => conteudoPagina.innerHTML = res)
    if(url === "./personagens.html"){
        await constroiCardPersonagem()
    } 
    contaLista(url)
        if(url === "./ficha.html"){
            conteudoPagina.style.margin = "0"
        }
    } else {
        conteudoPagina.innerHTML = dashboard
    }
    slider.style.transform = `translateX(${position})`;
}

function contaLista(url){
    if(url === "./personagens.html"){
        const slotsUsados = document.querySelectorAll('.personagem__card')
        const slotsTexto = document.querySelector('#slots-usados')
        slotsTexto.innerHTML = slotsUsados.length
    } else if (url === "./campanhas.html"){
        const slotsUsados = document.querySelectorAll('.campanha__card')
        const slotsTexto = document.querySelector('#slots-usados')
        slotsTexto.innerHTML = slotsUsados.length
    } else if(url === "./create-character.html"){
        vantagemErro = document.querySelector('.vantagem--erro')
        mensagemErro = document.querySelector('.erro--segredo')
        desvantagemErro = document.querySelector('.desvantagem--erro')
        erroFormulario = document.querySelector('.form--error')

        currentStep = 1;
        updateProgressBar(currentStep)

        const stepSelect = document.querySelectorAll('.progress-bar li');
        const stepArray = Array.from(stepSelect); 
        const steps = document.querySelectorAll('.step-group')
        stepSelect.forEach((btn) =>
            btn.addEventListener('click', () => {
                let index = stepArray.indexOf(btn); 
                if(index < currentStep){
                    steps.forEach(step => step.style.display = "none")
                    steps[index].style.display = "block"
                    currentStep = index + 1
                    updateProgressBar(currentStep)
                } else{
                    return
                }
            })
        );

        const selectbox = document.querySelector('.dropdown')
        selectbox.addEventListener('click', () => {
            selectbox.classList.toggle('active')
        })

        var swiper = new Swiper(".desvantagem__container", {
            slidesPerView: 1,
            cssMode: true,
            grid: {
              rows: 3,
            },
            spaceBetween: 10,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            breakpoints: {
                900: {
                    slidesPerView: 2,
                },
                1300: {
                    slidesPerView: 3,
                },
            },
            mousewheel: true,
            grabCursor: true,
            keyboard: true,
            simulateTouch: true,
            touchRatio: 1, 
            touchAngle: 45, 
            resistance: true, 
            resistanceRatio: 0.85,
          });
    }
}

function updateProgressBar(step) {
    const steps = document.querySelectorAll('.progress-bar li');
    const larguraTela = window.innerWidth;

    steps.forEach((item, index) => {
        item.classList.remove('active');
        item.style.display = "none"
        
        if(index < step){
            item.classList.add('active');
        }
    });

    if(larguraTela <= 880 && larguraTela >= 560){
        if(step === 1){
            steps[step - 1].style.display = "block"
            steps[step].style.display = "block"
            steps[step + 1].style.display = "block"
        } else if (step === 5){
            steps[step - 3].style.display = "block"
            steps[step - 2].style.display = "block"
            steps[step - 1].style.display = "block"
        } else{
            steps[step - 2].style.display = "block"
            steps[step - 1].style.display = "block"
            steps[step].style.display = "block"
        }
    } else if(larguraTela < 560){
        steps[step - 1].style.display = "block"
    } else{
        steps.forEach(step => step.style.display = "block")
    }
}
