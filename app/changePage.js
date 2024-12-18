const conteudoPagina = document.querySelector('#conteudo')
const dashboard = conteudoPagina.innerHTML
const slider = document.querySelector('.et-hero-tab-slider');

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

        var swiper = new Swiper(".desvantagem__container", {
            slidesPerView: 3,
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
            },
            mousewheel: true,
            keyboard: true,
          });
    }
}