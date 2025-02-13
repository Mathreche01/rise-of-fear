const armasCorpo = {
    "Desarmado": `◇ Soco, chute, e escoriação [1<span class="bonus-damage"></span>]<br/> 
    ◇ Chave [0<span class="bonus-damage"></span>] [você fica no controle do alvo até que ele se solte]<br/> 
    ◇ Deslocamento [0<span class="bonus-damage"></span>] [você cria distância entre você e o alvo através de um arremesso, encontrão ou empurrão]<br/>
    ◇ Desarme [0<span class="bonus-damage"></span>] [você remove um objeto da mão de seu oponente]<br/>
    ◇ Força excessiva [2<span class="bonus-damage"></span>] [focar totalmente em matar seu alvo, ignorando sua própria segurança]`,
    "Armas Afiadas": `◇ Corte, talho, estocada [2<span class="bonus-damage"></span>]<br/>
    ◇ Lâmina na garganta [0<span class="bonus-damage"></span>] [você domina o alvo até que ele se solte]`,
    "Armas Contundentes": `◇ Pancada, marretada, esmagamento [2<span class="bonus-damage"></span>]<br/>
    ◇ Derrubada [1<span class="bonus-damage"></span>] [o alvo cai no cão]<br/>
    ◇ Nocaute [1<span class="bonus-damage"></span>] [o alvo fica nocauteado; PJ deve ter sucesso em Suportar Lesão não ser nocauteado]`,
    "Armas Cortantes": `◇ Laceração, evisceração e decepamento [2<span class="bonus-damage"></span>]<br/>
    ◇ Impulsão [1<span class="bonus-damage"></span>] [pode atingir um alvo adicional]`
}

const armasDistancia = {
    "Pistolas": {
        distancia: "Braço/Sala",
        ataques: `◇ Disparo em combate [2<span class="bonus-damage"></span>] [-1 Munição]<br/>
        ◇ Extermínio [3<span class="bonus-damage"></span>] [-2 Munição]<br/>
        ◇ Múltiplos alvos [2<span class="bonus-damage"></span>] [acerte até um alvo adicional] [-3 Munição]
            `,
        municao: `
            <input type="checkbox" onchange="mudaMunicao(event)">
            <input type="checkbox" onchange="mudaMunicao(event)">
            <input type="checkbox" onchange="mudaMunicao(event)">
            <input type="checkbox" onchange="mudaMunicao(event)">
        `
    },
    "Pistolas Pesadas": {
        distancia: 'Braço/Sala',
        ataques: `◇ Disparo em combate [3<span class="bonus-damage"></span>] [-1 Munição]<br/>
        ◇ Extermínio [4<span class="bonus-damage"></span>] [-3 Munição]
        `,
        municao: `
        <input type="checkbox" onchange="mudaMunicao(event)">
        <input type="checkbox" onchange="mudaMunicao(event)">
        <input type="checkbox" onchange="mudaMunicao(event)">
    `
    },
    "Submetralhadoras": {
        distancia: 'Sala',
        ataques: `◇ Rajada curta [2<span class="bonus-damage"></span>] [-1 Munição]<br/>
        ◇ Rajada automática concentrada [3<span class="bonus-damage"></span>] [-2 Munição]<br/>
        ◇ Varredura de tiros [2<span class="bonus-damage"></span>] [acerte até dois alvos adicionais] [-3 Munição]
        `,
        municao: `
        <input type="checkbox" onchange="mudaMunicao(event)">
        <input type="checkbox" onchange="mudaMunicao(event)">
        <input type="checkbox" onchange="mudaMunicao(event)">`
    },
    "Fuzis de Assalto": {
        distancia: 'Sala/Campo',
        ataques: `◇ Tiro controlado [3<span class="bonus-damage"></span>] [-1 Munição]<br/>
        ◇ Massacre [4<span class="bonus-damage"></span>] [-2 Munição]<br/>
        ◇ Pente completo [3<span class="bonus-damage"></span>] [acerte até dois alvos adicionais] [-4 Munição]
        `,
        municao: `
        <input type="checkbox" onchange="mudaMunicao(event)">
        <input type="checkbox" onchange="mudaMunicao(event)">
        <input type="checkbox" onchange="mudaMunicao(event)">
        <input type="checkbox" onchange="mudaMunicao(event)">
        `
    },
    "Metralhadoras": {
        distancia: 'Sala/Campo',
        ataques: `◇ Rajada [3<span class="bonus-damage"></span>] [-1 Munição]<br/>
        ◇ Disparos contínuos [3<span class="bonus-damage"></span>] [acerte até três alvos adicionais] [-3 Munição] 
        `,
        municao: `
        <input type="checkbox" onchange="mudaMunicao(event)">
        <input type="checkbox" onchange="mudaMunicao(event)">
        <input type="checkbox" onchange="mudaMunicao(event)">
        <input type="checkbox" onchange="mudaMunicao(event)">
        <input type="checkbox" onchange="mudaMunicao(event)">
        <input type="checkbox" onchange="mudaMunicao(event)">
        `
    },
    "Rifles": {
        distancia: 'Sala/Campo/Horizonte',
        ataques: `◇ Pontaria & fogo [3<span class="bonus-damage"></span>] [-1 Munição]`,
        municao: `
        <input type="checkbox" onchange="mudaMunicao(event)">
        <input type="checkbox" onchange="mudaMunicao(event)">
        <input type="checkbox" onchange="mudaMunicao(event)">
        `
    },
    "Espingardas Táticas": {
        distancia: 'Sala/Campo',
        ataques: `◇ Tiro rápido [3/1<span class="bonus-damage"></span>]* [-1 Munição]</br>
        ◇ Chuva de chumbo [3/1<span class="bonus-damage"></span>]* [todos juntos num pequeno grupo são atingidos de uma vez] [-2 Munição]
        * O Dano básico é 3 contra alvos em distância de sala e 1 se mais distante.
        `,
        municao: `
        <input type="checkbox" onchange="mudaMunicao(event)">
        <input type="checkbox" onchange="mudaMunicao(event)">
        <input type="checkbox" onchange="mudaMunicao(event)">
        `
    },
    "Explosivos": {
        distancia: 'Sala/Campo',
        ataques: `◇ Detonação [4<span class="bonus-damage"></span>] [acerta vários alvos] [-1 Munição]`,
        municao: `
        <input type="checkbox" onchange="mudaMunicao(event)">
        `
    }
}

const armaduras = {
    "Leve": "+1",
    "Pesada": "+2",
}

const equipamentoEspecial = {
    "Cão": `Um cão pode sofrer de 1-3 Ferimentos (dependendo do
        tamanho do cachorro). Um cão atacando pode fazer:<br/>
        ◇ Derrubada [1<span class="bonus-damage"></span>] [Distância: braço, apenas cães grandes]<br>
        ◇ Mordida [1-2<span class="bonus-damage"></span>] [Distância: braço, o cão pode travar a
        mandíbula e não soltar]`,
    "Spray de Pimenta": `Spray [0<span class="bonus-damage"></span>] [Distância: braço, alvo PNJ é neutralizado,
        alvo PJ deve Suportar Lesão e é nocauteado com (-9)]`,
    "Gazuas": `O PJ pode abrir uma porta trancada. Dependendo das
    circunstâncias, o PJ deve Agir sob Pressão.`,
    "Pé de Cabra": `O PJ pode abrir uma porta trancada, mas fará bastante
    barulho no processo. Dependendo das circunstâncias,
    o PJ deve Agir sob Pressão. Um pé de cabra pode ser
    usado como uma arma contundente de corpo a corpo.`,
    "Kit de Primeiros Socorros": `O PJ pode estabilizar Ferimentos. Se o Ferimento for
    Crítico (ou se as circunstâncias indicarem), o PJ rola
    Agir sob Pressão.`,
    "Arma de Choque (taser)": `Armas de choque do tipo de autodefesa podem exigir
    que o atacante toque fisicamente sua vítima, enquanto que as utilizadas 
    por agentes da lei podem lançar eletrodos até alguns metros de distância. Este último tipo
    precisa de recarga antes de um novo uso.<br/>
    ◇ Choque [1<span class="bonus-damage"></span>] [Distância: braço/sala, alvo PNJ é neutralizado, alvo PJ deve Suportar Lesão e é nocauteado
    com (-9)]`,
    "Silenciador": `Um silenciador é um acessório para armas, que abafa o
    barulho do disparo da arma. O barulho não desaparece
    totalmente e o efeito depende muito do tipo e do calibre da arma. Como regra geral, o ruído só é perceptível
    nos arredores próximos (sala).`,
    "Granada de Atordoamento": `Uma granada de atordoamento é um explosivo usado
    para atordoar as pessoas nas proximidades emitindo
    um brilho ofuscante de luz acompanhado de um estrondo alto. Não causa nenhum dano físico.<br/>
    ◇ Detonação [-] [Distância: sala/campo, acerta múltiplos alvos, PNJs são neutralizados momentaneamente, PJs devem Evitar Dano e são neutralizados
    momentaneamente com (-9)]
    `,
    "Gases/Drogas Nocauteantes": `Gases ou drogas nocauteantes podem ser usados para
    deixar personagens inconscientes, ao fazê-los respirar os gases ou ingerir a droga. Um PJ pode, por exemplo,
    encher o inalador do alvo com o gás, ou embeber um pano e cobrir a boca e o nariz do alvo com isso.<br/>
    ◇ Nocaute [-] [Distância: braço/sala, alvo PNJ é neutralizado, alvo PJ deve Suportar Lesão e é nocauteado
    com (-9)]`,
    "Tocha": `Além de iluminar os arredores, uma tocha pode ser usada como arma:<br/>
    ◇ Fogo [2<span class="bonus-damage"></span>] [Distância: braço]`
}