const desvantagensDetalhadas = {
    "Acossado": `
    <p>Você é caçado por um inimigo sem rosto. Qualquer um que você conhece pode ser um dos seus lacaios — ou até mesmo o próprio perseguidor. Não se pode confiar em ninguém. Você deve 
    mudar constantemente de endereço e ficar atento o tempo todo para evitar deixar rastros que ele possa seguir. Na primeira sessão 
    de jogo e sempre que você expor sua localização atual, <strong>role +0</strong>:</p>
    <div class="vantagem__resultados">
    <p><b>15 + ∘ </b>Você está seguro no momento.</p>
    <p><b>10 - 14 ∘ </b>Seus inimigos estão perto você. A MJ recebe 1 Reserva.</p>
    <p><b>- 9 ∘ </b>Seus inimigos alcançaram você. A MJ recebe 3 Reservas.</p>
    </div>
    <p>A MJ pode gastar Reserva para fazer um Movimento pelos seus perseguidores. Por exemplo, um conhecido de confiança foi 
    comprado por eles, uma das pessoas que você ama ou de seus aliados desaparecem, algo que você está tentando fazer é prejudicado por seus inimigos, ou eles tentam claramente ferir você.</p>
    `,
    "Arruinado": `
    <p>Alguma experiência em seu passado arruinou tanto sua psique que você não consegue se recuperar disso. Como resultado, sua <strong>Estabilidade</strong> nunca pode aumentar além de Angustiado (6).</p>
    `,
    "Assediado": `
    <p>Por alguma razão, pessoal ou não, as pessoas tendem a assediá-lo; especificamente as autoridades. Na primeira sessão do jogo e 
    sempre que chamar atenção para si mesmo, <strong>role +0</strong> para ver se você será assediado:</p>
    <div class="vantagem__resultados">
    <p><b>15 + ∘ </b>Você consegue escapar de assédios.</p>
    <p><b>10 - 14 ∘ </b>A MJ recebe 1 Reserva.</p>
    <p><b>- 9 ∘ </b>A MJ recebe 3 Reservas.</p>
    </div>
    <p>A MJ pode gastar Reservas para fazer Movimentos pelos assediadores. Por exemplo, alguém destrói suas propriedades ou pertences, você é intimidado e atacado por pessoas com preconceito 
    contra você, as autoridades tiram algo a força de você (direitos, propriedade, bens), alguém que você gosta é prejudicado por se associar a você, ou você tem seus direitos básicos negados por ser quem você é.</p>
    `,
    "Assombrado": `
    <p>Você é assombrado por forças sobrenaturais. Com a ajuda da MJ, determine a natureza do que você acredita estar assombrando 
    você. Na primeira sessão e sempre que estiver distraído ou enfraquecido, <strong>role +0</strong> para ver se a entidade tem poder sobre você:</p>
    <div class="vantagem__resultados">
    <p><b>15 + ∘ </b>A entidade te deixa em paz.</p>
    <p><b>10 - 14 ∘ </b>A MJ recebe 1 Reserva.</p>
    <p><b>- 9 ∘ </b>A MJ recebe 3 Reservas.</p>
    </div>
    <p>A MJ pode gastar Reservas para fazer um Movimento para a entidade. Por exemplo, ela exige um serviço de você e ameaçar retaliação se você se recusar, a entidade possui seu corpo durante 
    a noite, ou a entidade revela uma pista do que ela é e o que ela quer de você.</p>
    `,
    "Compulsão Mental": `
    <p>Você está fixado em uma ideia ou ação específica, ao ponto de isto impactar bastante a sua vida. Escolha uma compulsão quando 
    você pegar esta Desvantagem. Em situações em que sua compulsão poderia distrair você, <strong>role +0</strong>:</p>
    <div class="vantagem__resultados">
    <p><b>15 + ∘ </b>Você controla sua compulsão e consegue concentrar em outras coisas.</p>
    <p><b>10 - 14 ∘ </b>Você se distrai e recebe -1 constante em todas as rolagens até você se afastar da situação ou sucumbir à sua compulsão, fazendo quaisquer ações que ele exija de você.</p>
    <p><b>- 9 ∘ </b>Você fica completamente obcecado por sua compulsão. Se você se concentrar em qualquer outra coisa, reduza <strong>-2 de Estabilidade</strong>.</p>
    </div>
    <span class="titulo__opcoes">Lista de possíveis compulsões:</span>
    <div class="vantagem__opcoes">
    <p>◇ Limpeza.</p>
    <p>◇ Contagens.</p>
    <p>◇ Checar três vezes.</p>
    <p>◇ Tomar banho.</p>
    <p>◇ Memorização.</p>
    <p>◇ Piromania.</p>
    <p>◇ Cleptomania.</p>
    <p>◇ Xingar.</p>
    <p>◇ Confessar seus pecados.</p>
    <p>◇ Comer.</p>
    <p>◇ Hipocondria.</p>
    </div>
    `,
    "Concorrente": `
    <p>Você tem um concorrente no submundo do crime, cujo nicho de negócios é semelhante ao seu. Sempre for negligente em proteger seus interesses ou se distrair em outro lugar, <strong>role +0</strong>
        para ver se o seu concorrente conseguiu prejudicar seus negócios:</p>
    <div class="vantagem__resultados">
    <p><b>15 + ∘ </b>Você está seguro do seu concorrente, por enquanto.</p>
    <p><b>10 - 14 ∘ </b>Você foi descuidado. Seu concorrente pode tentar dar um golpe em você. A MJ recebe 1 Reserva.</p>
    <p><b>- 9 ∘ </b>Você dá uma oportunidade de ouro ao seu concorrente para agir contra os seus interesses. A MJ recebe 3 Reservas.</p>
    </div>
    <p>A MJ pode gastar Reserva para fazer Movimentos pelo seu concorrente. Por exemplo, seu concorrente pode assumir o controle de 
    algumas das suas negociatas, descobrir um dos seus segredos, sabotar um de seus recursos, ou machucar ou subornar alguém de quem você gosta e confia.</p>
    `,
    "Condenado": `
    <div class="vantagem__inputs">
        <span>Tempo:<span>
        <div class="vantagem__inputs--lista">
        <input type="checkbox" name="tempo">
        <input type="checkbox" name="tempo">
        <input type="checkbox" name="tempo">
        <input type="checkbox" name="tempo">
        <input type="checkbox" name="tempo">
        <input type="checkbox" name="tempo">
        <input type="checkbox" name="tempo">
        <input type="checkbox" name="tempo">
        </div>
    </div>
    <p>Seu destino foi selado. Talvez você esteja morrendo de uma doença, foi prometido como sacrifício a um deus esquecido, ou vendeu 
    sua alma para alguma entidade, que aguarda para arrastar você para o inferno quando seu tempo acabar. No início de cada jogo 
    sessão, <strong>role +0</strong>:</p>
    <div class="vantagem__resultados">
    <p><b>15 + ∘ </b>Você ainda tem algum tempo sobrando.</p>
    <p><b>10 - 14 ∘ </b>Seus inimigos estão perto você. A MJ recebe 1 Reserva.</p>
    <div class="vantagem__resultados">
    <p>◇ O jogador marca 1 de Tempo.</p>
    <p>◇ Você é torturado por sonhos ou visões do seu destino. Reduza <strong>-2 de Estabilidade</strong>.</p>
    <p>◇ Você é assombrado pela entidade ou evento que selou seu destino.</p>
    <p>◇ Alguém ao seu redor é afetado negativamente pelo seu destino.</p>
    <p>◇ Algo lhe dá falsas esperanças de escapar do seu destino.</p>
    </div>
    <p><b>- 9 ∘ </b>Seu fim se aproxima. A MJ usa duas opções da lista acima oumarca 2 de Tempo.</p>
    </div>
    <p>Quando você finalmente acabar seu Tempo, você encontra seu destino final.</p>
    `,
    "Culpa": `
    <p>Você carrega um grande fardo devido aos seus pecados passados, tendo ferido uma ou várias pessoas através das suas ações ou falta 
    delas. Na primeira sessão de jogo e sempre que tudo parecer estar bem, <strong>role +0:</strong></p>
    <div class="vantagem__resultados">
    <p><b>15 + ∘ </b>Sua culpa não está em sua mente no momento.</p>
    <p><b>10 - 14 ∘ </b>Você é lembrado da sua culpa. A MJ recebe 1 Reserva.</p>
    <p><b>- 9 ∘ </b>Sua culpa te pega. A MJ recebe 3 Reservas.</p>
    </div>
    <p>A MJ pode gastar Reserva para fazer Movimentos pela sua culpa. Por exemplo, parentes das pessoas que você machucou te procuram, demônios e outras criaturas são atraídos pela sua culpa, os 
    mortos te assombram com pesadelos ou visões, ou você se torna vítima de ansiedade e insegurança.</p>
    `,
    "Depressão": `
    <p>Você está constantemente lutando com a depressão, que só se 
    agrava devido a tristeza e o desencorajamento. Sempre que enfrentar contratempos pessoais, <strong>role +0:</strong></p>
    <div class="vantagem__resultados">
    <p><b>15 + ∘ </b>Você mantém o controle.</p>
    <p><b>10 - 14 ∘ </b>Você sofre ansiedade temporária, diminuição da autoconfiança, ou falta de vontade. Você recebe -1 em sua próxima rolagem.</p>
    <p><b>- 9 ∘ </b>Você sucumbe à sensação de desesperança ou culpa e pune a si mesmo; reduza <strong>-2 de Estabilidade</strong>. 
    Sua letargia e impulsos autodestrutivos não vão embora até você entorpecer sua depressão com remédios, drogas ou álcool.</p>
    </div>
    `,
    "Desejado": `
    <p>Há algo especial em você. Você inflama profundamente desejos doentios nos outros, que eles são incapazes de controlar. Na primeira 
    sessão do jogo e sempre que você encontrar uma ou mais pessoas novas, <strong>role +0:</strong></p>
    <div class="vantagem__resultados">
    <p><b>15 + ∘ </b>O desejo não foi despertado neste momento.</p>
    <p><b>10 - 14 ∘ </b>Alguém fica desejando você. A MJ recebe 1 Reserva.</p>
    <p><b>- 9 ∘ </b>Um forte desejo é despertado em uma ou várias pessoas. A MJ recebe 3 Reservas.</p>
    </div>
    <p>A MJ pode gastar Reservas para inflamar os desejos de uma pessoa, influenciando seu comportamento. Por exemplo, alguém pode ser afligido com 
    uma paixão incontrolável por você, tentar se forçar para cima de você, fazer fortes proposições, manifestar ciúmes intenso por você, ou ferir a si mesmo 
    ou outro por causa de seu desejo por você.</p>
    `,
    "Devotado": `
    <p>Você é um adepto fervoroso de uma ideologia. Você interpreta o mundo inteiro de acordo com a sua ideologia, que não pode ser questionada. Sempre 
    que alguém questionar sua ideologia, <strong>role +0:</strong></p>
    <div class="vantagem__resultados">
    <p><b>15 + ∘ </b>Você consegue manter o controle das suas emoções.</p>
    <p><b>10 - 14 ∘ </b>Você fica com raiva, confuso ou frustrado. Você recebe -1 em sua próxima rolagem.</p>
    <p><b>- 9 ∘ </b>Você é forçado a escolher entre tentar mudar a pessoa ou situação para se adequar à sua ideologia, ou reduzir <strong>-2 de Estabilidade</strong>.</p>
    </div>
    `,
    "Enfermo": `
    <p>Você sofre de uma doença ou condição física perigosa, como doença cardíaca, hipertensão, obesidade mórbida ou úlcera gástrica grave. Sempre que estiver 
    sujeito a um grande estresse físico ou psicológico, <strong>role +0:</strong></p>
    <div class="vantagem__resultados">
    <p><b>15 + ∘ </b>Sua condição está sobre controle.</p>
    <p><b>10 - 14 ∘ </b>Sua condição reage, causando dor e confusão (-1 em todas as rolagem até a cena terminar).</p>
    <p><b>- 9 ∘ </b>Sua condição é agravada de forma a arriscar sua vida (<strong>Suportar Lesão</strong> com <strong>2 de Dano</strong>).</p>
    </div>
    `,
    "Esquizofrenia": `
    <p>Você sofre com episódios psicóticos recorrentes e alucinações aterrorizante. Na 
    primeira sessão do jogo e sempre você passar por experiências difíceis, <strong>role +0:</strong></p>
    <div class="vantagem__resultados">
    <p><b>15 + ∘ </b>Você mantém o controle da sua insanidade.</p>
    <p><b>10 - 14 ∘ </b>A MJ recebe 1 Reserva.</p>
    <p><b>- 9 ∘ </b>A esquizofrenia assume o controle de você. A MJ recebe 3 Reservas.</p>
    </div>
    <p>A MJ pode gastar Reserva para fazer um Movimento pela sua esquizofrenia. Por exemplo, uma de suas alucinações assume forma física, você vê seu ambiente atual 
    como sendo hostil a você, você é afligido por alucinações aterrorizantes, você fica sujeito a visões sombrias (verdadeiras ou falsas) ou alguém ao seu redor não é real.</p>
    `,
    "Experimento Falho": `
    <p>Você realizou um experimento científico, que deu horrivelmente errado. O experimento deu origem a algo não natural, 
    que escapou e desapareceu sem deixar rastros. Recentemente, os “resultados” da sua experiência encontraram você, reaparecendo em sua vida e forçando você a fugir ou confrontá-lo. Na primeira sessão e sempre que as coisas parecerem estar 
    no controle, <strong>role +0:</strong></p>
    <div class="vantagem__resultados">
    <p><b>15 + ∘ </b>O experimento te deixa em paz.</p>
    <p><b>10 - 14 ∘ </b>Seu experimento está chegando até você. A MJ recebe 1 Reserva.</p>
    <p><b>- 9 ∘ </b>Seu experimento está próximo e age contra você. A MJ recebe 3 Reservas.</p>
    </div>
    <p>A MJ pode gastar Reserva para fazer Movimentos para o experimento. Por exemplo, o experimento te dá uma pista 
    sobre a Verdade, sabota ou atrapalha sua pesquisa, exige algo de você sob a ameaça de retaliação ou sequestra 
    alguém que você gosta — possivelmente devolvendo-o morto ou transformado.</p>
    `,
    "Fobia": `
    <p>Você abriga um medo avassalador de alguma coisa. Escolha o estímulo que te amedronta. Sempre que você 
    for confrontado pelo objeto da sua fobia, você deve <strong>Manter o Controle</strong>.</p>
    `,
    "Ganancioso": `
    <p>Você é conduzido por um desejo insaciável de dinheiro e riqueza, e está preparado para sacrificar 
    sua saúde, família e amigos para preencher seu vazio interior. Quando surge uma oportunidade de aumentar 
    sua riqueza, <strong>role +0</strong> para ver se você constrola o seu desejo:</p>
    <div class="vantagem__resultados">
    <p><b>15 + ∘ </b>Você consegue manter o controle da sua ganância.</p>
    <p><b>10 - 14 ∘ </b>O vazio sombrio dentro de você grita por mais. Enquanto houver a oportunidade e você 
    não aproveitá-la, você sofre -1 constante em quaisquer rolagens que fizer.</p>
    <p><b>- 9 ∘ </b>Você deve aproveitar todas as oportunidades para aumentar sua riqueza, ou reduzir <strong>Estabilidade (-2)</strong>.</p>
    </div>
    `,
    "Identidade Perdida": `
    <p>Sua verdadeira identidade foi perdida em um programa militar ou privado de agentes secretos. Você não lembra nada da sua vida pré-emprego. 
    Recentemente, memórias de sua verdadeira identidade começaram a voltar para você. Na primeira sessão do jogo e sempre que você encontrar algo do 
    seu passado reprimido, <strong>role +0:</strong></p>
    <div class="vantagem__resultados">
    <p><b>15 + ∘ </b>Você reprime sua verdadeira identidade, permanecendo no presente.</p>
    <p><b>10 - 14 ∘ </b>Sua verdadeira identidade está chegando até você. A MJ recebe 1 Reserva.</p>
    <p><b>- 9 ∘ </b>Sua verdadeira identidade ressurge. A MJ recebe 3 Reservas.</p>
    </div>
    <p>A MJ pode gastar Reservas para fazer Movimentos para a sua verdadeira identidade. Por exemplo, você reconhece pessoas ou lugares 
    desconhecidos, organizações ou indivíduos de sua vida passada entram em contato com você, sua antiga identidade influencia seus padrões de 
    raciocínio ou de ações, ou você sofre flashbacks traumáticos.</p>
    `,
    "Invejoso": `
    <p>Há alguém que tem a vida que você queria ter, e você faria qualquer coisa para tê-la. Sempre que você encontrar o alvo da sua inveja ou coisas da vida dele (posses, 
    família, amigos, etc), <strong>role +0</strong> para ver se você pode manter a calma:</p>
    <div class="vantagem__resultados">
    <p><b>15 + ∘ </b>Você mantém controle da sua inveja.</p>
    <p><b>10 - 14 ∘ </b>Você é afligido pela inveja e receba -1 constante enquanto você permanecer próximo do alvo e você não suprimir seus desejos invejosos.</p>
    <p><b>- 9 ∘ </b>Sua inveja toma conta de você. Você deve <strong>Manter o Controle</strong> para se segurar e não prejudicar, destruir ou roubar o alvo da sua inveja.</p>
    </div>
    `,
    "Juramento da Vingança": `
    <p>Você jurou vingar uma injustiça imperdoável. Decida quem é o alvo da sua vingança e o que fizeram com você. Pode ser um único indivíduo, pessoas que compartilham uma 
    determinado característica ou membros de uma organização. Sempre que o alvo da vingança (ou alguém/alguma coisa associada a ele) aparecer, <strong>role +0:</strong></p>
        <div class="vantagem__resultados">
        <p><b>15 + ∘ </b>Você permanece no controle de sua natureza vingativa e pode agir racionalmente.</p>
        <p><b>10 - 14 ∘ </b>Você não consegue se concentrar em nada além do alvo de sua vingança. Sofra -1 constante até o envolvimento do alvo na cena termine.</p>
        <p><b>- 9 ∘ </b>) Você fica obcecado e só consegue agir para promover sua vingança. Fazer qualquer outra coisa exige rolar para 
        <strong>Manter o Controle</strong>. Sua obsessão não pode ser aliviada enquanto o alvo permanecer na mesma cena com você.</p>
        </div>
    `,
    "Má Reputação": `
    <p>Por algum motivo, você atraiu a reprovação do público — talvez até antipatia. Talvez você tenha sido notícia nos tabloides como 
    um pedófilo ou assassino, falsamente ou não. Na primeira sessão de jogo e sempre que atrair a atenção do público, <strong>role +0:</strong></p>
    <div class="vantagem__resultados">
    <p><b>15 + ∘ </b>Você se mistura. Ninguém tentando te pegar.</p>
    <p><b>10 - 14 ∘ </b>Você foi reconhecido. A MJ recebe 1 Reserva.</p>
    <p><b>- 9 ∘ </b>Várias pessoas te reconheceram. A raiva e o medo controlam as ações delas. A MJ recebe 3 Reservas.</p>
    </div>
    <p>A MJ pode gastar Reserva para fazer um Movimento representando como a sua má reputação se agarra a você. Por exemplo, as pessoas podem reagir com medo e desconfiança em relação a você, 
    linchadores podem querer fazer justiça com você, sua propriedade ser vandalizada, seus aliados se voltarem contra você, e você pode perder seu emprego, acordos e relacionamentos.</p>
    `,
    "Maldição": `
    <p>Você é amaldiçoado. Na primeira sessão e sempre que for confrontado pelo sobrenatural, <strong>role +0</strong> para ver quão fortemente a maldição influencia você:</p>
    <div class="vantagem__resultados">
    <p><b>15 + ∘ </b>Você temporariamente evita os efeitos da maldição.</p>
    <p><b>10 - 14 ∘ </b>A MJ recebe 1 Reserva.</p>
    <p><b>- 9 ∘ </b>A MJ recebe 3 Reservas.</p>
    </div>
    <p>A MJ pode gastar Reserva para fazer um Movimento pela maldição. Por exemplo, você ou alguém de que você gosta sofre um acidente, alguma coisa sua é tirado de você, você experimenta visões aterrorizantes, ou você é forçado a fazer certas ações com risco de terríveis 
    consequências se você se recusar.</p>
    `,
    "Marcado": `
    <p>Você está marcado pela escuridão. A marca pode ter a forma de uma tatuagem de corpo inteiro, uma parte de corpo demoníaca 
    como um braço vestigial, um olho ou boca extra, peças de máquina integradas à sua carne ou manifestações similares. Sempre que você conscientemente causar Dano em alguém, <strong>role +0:</strong></p>
    <div class="vantagem__resultados">
    <p><b>15 + ∘ </b>Você ainda está no controle.</p>
    <p><b>10 - 14 ∘ </b>Você alimentou a escuridão. A MJ recebe 1 Reserva.</p>
    <p><b>- 9 ∘ </b>A escuridão te controla. A MJ recebe 3 Reservas.</p>
    </div>
    <p>A MJ pode gastar Reservas para fazer Movimentos para a escuridão que vive dentro de você. Por exemplo, a escuridão se alimenta de 
    sua energia vital para se sustentar, te obriga a matar para reabastecer a energia vital dela, possui seu corpo e te deixa apenas com 
    fragmentos de memórias do que ocorreu, força você a machucar alguém ao seu redor, ou temporariamente transforma seu corpo 
    em algo desumano. Você pode precisar <strong>Manter o Controle</strong> para resistir à influência da escuridão.</p>
    `,
    "Médium Involuntário": `
    <p>Você é um receptáculo aberto a qualquer espírito ou entidade demoníaca que desejar um meio para falar ou precisar de um 
    corpo físico para os seus propósitos. Sempre que encontrar entidades espirituais ou lugares assombrados, <strong>role +0:</strong></p>
    <div class="vantagem__resultados">
    <p><b>15 + ∘ </b>Você resiste a possessão.</p>
    <p><b>10 - 14 ∘ </b>A entidade te influencia. A MJ recebe 1 Reserva.</p>
    <p><b>- 9 ∘ </b>A entidade te controla. A MJ recebe 3 Reservas.</p>
    </div>
    <p>A MJ pode gastar Reservas para fazer Movimentos para o ser que possuir você. Por exemplo, a entidade pode te dar uma visão, usar 
    do seu corpo, comunicar-se com ou através de você, tentar prejudicar outra pessoa através de você, te seguir sem ser visto, exigir 
    algo de você, ou te arrastar para outra dimensão.</p>
    `,
    "Memórias Reprimidas": `
    <p>Você reprimiu um evento particularmente desagradável do seu passado, mas a lembrança disso às vezes volta à superfície. Isto 
    pode ser um crime ou alguma coisa horrível que você tenha feito, sido submetido ou testemunhado. A MJ decide a natureza da seu memória reprimida, geralmente baseada nos seus Segredos Sombrios. 
    Em situações associadas às suas memórias reprimidas, <strong>role +0</strong> para determinar se as memórias ressurgem:</p>
    <div class="vantagem__resultados">
    <p><b>15 + ∘ </b>Você continua a suprimir as memórias.</p>
    <p><b>10 - 14 ∘ </b>As memórias ressurgem parcialmente, na forma de flashbacks e/ou alucinações. Você deve Manter o Controle.</p>
    <p><b>- 9 ∘ </b>) Você fica sobrepujado por suas memórias reprimidas, se perdendo completamente nelas. A MJ faz um Movimento severo e 
    você reduz <strong>-2 de Estabilidade</strong>.</p>
    </div>
    `,
    "Mentiroso": `
    <p>Você é um mentiroso compulsivo, que inventa estórias em todas as oportunidades, especialmente quando for benéfico para você. 
    No início de cada sessão, <strong>role +0</strong> para ver em que problemas suas mentiras te colocaram desta vez:</p>
    <div class="vantagem__resultados">
    <p><b>15 + ∘ </b>Você manteve suas mentiras coordenadas.</p>
    <p><b>10 - 14 ∘ </b>Você contou mentiras demais. A MJ recebe 1 Reserva.</p>
    <p><b>- 9 ∘ </b>Sua teia de mentiras foi completamente desvendada. A MJ recebe 3 Reservas.</p>
    </div>
    <p>A MJ pode gastar Reservas sempre que o PJ encontrar alguém que ele conhece e perguntar: “Sobre o que você mentiu para 
    essa pessoa?”, ou para inventar uma mentira problemática que o PJ contou no passado.</p>
    `,
    "Nêmesis": `
    <p>Através de algum ato terrível você fez um inimigo, que faz tudo ao seu alcance para se vingar. Decida quem é seu nêmesis e o 
    que você fez para ele querer vingança. Na primeira sessão de jogo e sempre que você baixar a guarda, <strong>role +0</strong> para ver se o 
    seu nêmesis age contra você:</p>
    <div class="vantagem__resultados">
    <p><b>15 + ∘ </b>Você está seguro do seu nêmesis por enquanto.</p>
    <p><b>10 - 14 ∘ </b>Você foi descuidado e seu inimigo vai age contra você. A MJ recebe 1 Reserva.</p>
    <p><b>- 9 ∘ </b>Você comprometeu sua posição e seu nêmesis te ataca com força total. A MJ recebe 3 Reservas.</p>
    </div>
    <p>A MJ pode gastar Reserva para fazer Movimentos pelo seu nêmesis. Por exemplo, seu nêmesis pode atacar quando 
    você estiver sozinho, usar segredos que ele descobriu para extorquir você, te intimidar, contratar capangas para 
    te capturar, ou atacar alguém ou alguma coisa que você preza.</p>
    `,
    "Neurose Sexual": `
    <p>Sua sexualidade é uma força controladora e destrutiva em sua vida. Você procura compulsivamente encontros 
    sexuais superficiais e está dispostos a realizar atos degradantes — ou até mesmo cometer crimes — para satisfazer suas fantasias. Sempre que você tiver a oportunidade fazer sexo 
    consensual ou tomar vantagem de alguém vulnerável aos seus avanços, <strong>role +0:</strong></p>
    <div class="vantagem__resultados">
    <p><b>15 + ∘ </b>Você consegue controlar seus desejos.</p>
    <p><b>10 - 14 ∘ </b>Escolha entre fazer sexo com a pessoa ou reduzir <strong>-1 de Estabilidade</strong>.</p>
    <p><b>- 9 ∘ </b>Você não pode resistir a fazer sexo com a pessoa e a MJ escolhe uma opção:</p>
    <div class="vantagem__resultados">
        <p>◇ Você fere ou é ferido pelo seu parceiro sexual (fisicamente ou psicologicamente).</p>
        <p>◇ Os limites entre dimensões são enfraquecidos; uma entidade do além sente o seu cheiro ou do seu amante.</p>
        <p>◇ Seu parceiro sexual fica obcecado por você e começa a te perseguir.</p>
    </div>
    </div>
    `,
    "Obsessão": `
    <p>Você descobriu uma conspiração ou fenômeno sobrenatural, e você não pode parar até chegar ao fundo dela. Na primeira sessão de jogo e sempre que você encontrar algo associado com 
    sua obsessão, <strong>role +0:</strong></p>
    <div class="vantagem__resultados">
    <p><b>15 + ∘ </b>Você supera sua obsessão por um tempo.</p>
    <p><b>10 - 14 ∘ </b>Sua obsessão influencia seu comportamento. A MJ recebe 1 Reserva.</p>
    <p><b>- 9 ∘ </b>Sua obsessão toma o controle total de você. A MJ recebe 3 Reservas.</p>
    </div>
    <p>A MJ pode gastar Reserva para deixar sua obsessão entrar sua vida diária. Você pode ser forçado a escolher entre se envolver com sua obsessão ou perder <strong>Estabilidade</strong>. Você pode esquecer 
    ocupações importantes e tarefas, faltar reuniões, ou negligenciar suas relações interpessoais para se concentrar exclusivamente em sua obsessão. Sua obsessão pode até influenciar 
    seus sonhos, te dando visões e revelações. Por sua vez, o objeto de sua obsessão também pode perceber você e tente parar suas investigações.</p>
    `,
    "Pertencido": `
    <p>Você costumava ser propriedade pessoal de alguém perigoso, voluntariamente ou não. Desde sua fuga, seu antigo dono tem procurado por você. Decida quem é seu antigo dono. Na primeira 
    sessão do jogo e sempre que você chamar atenção para si mesmo em público, <strong>role +0:</strong></p>
    <div class="vantagem__resultados">
    <p><b>15 + ∘ </b>Por enquanto você está seguro.</p>
    <p><b>10 - 14 ∘ </b>Seu antigo dono encontra seu rastro. A MJ recebe 1 Reserva.</p>
    <p><b>- 9 ∘ </b>Seu dono te encontra. A MJ recebe 3 Reservas.</p>
    </div>
    <p>A MJ pode gastar Reserva para fazer Movimentos pelo seu antigo proprietário. Por exemplo, ele aparece inesperadamente para te 
    convencer a voltar, manda capangas atrás de você, sequestra ou prejudica alguém que você gosta, te ameaça diretamente, destrói 
    algo importante seu, tenta te mutilar para que nenhuma outra pessoa queira você, ou te matar imediatamente para ninguém 
    mais possa ter você.</p>
    `,
    "Pesadelos": `
    <p>Você sofre de pesadelos recorrentes, provavelmente conectados aos seus Segredos Sombrios. Durante qualquer cena quando estiver dormindo, <strong>role +0:</strong></p>
    <div class="vantagem__resultados">
    <p><b>15 + ∘ </b>Você dorme em paz.</p>
    <p><b>10 - 14 ∘ </b> Os pesadelos te atormentam. A MJ pode fazer um Movimento pelos seus pesadelos. Por exemplo, você não consegue dormir nada durante a noite 
    (-1 constante até que você durma), algo te segue de volta à realidade, os pesadelos te dão revelações sobre a Verdade, ou você é forçado a processar 
    algum trauma (<strong>Manter o Controle</strong>) quando você acordar.</p>
    <p><b>- 9 ∘ </b>Os pesadelos te dominam completamente. Você está preso no sonho até você encontrar uma maneira de acordar, e tudo o que acontece lá também afeta diretamente o seu corpo adormecido.</p>
    </div>
    `,
    "Procurado": `
    <p>Você é procurado pelas autoridades — locais, estaduais ou federais — por crimes que você cometeu. Sempre que 
    você atrair atenção para si mesmo ou esquecer de manter a cabeça baixa, <strong>role +0</strong> para ver se você foi descoberto:</p>
    <div class="vantagem__resultados">
    <p><b>15 + ∘ </b>Você está seguro, por hora.</p>
    <p><b>10 - 14 ∘ </b>Você cometeu um erro. A MJ recebe 1 Reserva.</p>
    <p><b>- 9 ∘ </b>Todos estão te procurando. A MJ recebe 3 Reservas.</p>
    </div>
    <p>A MJ pode gastar Reserva para fazer um Movimento pelas autoridades. Para exemplo, o seu retrato aparece no noticiário da TV e nos jornais, oficiais da lei tentam te apanhar e te 
    prender, ou as autoridades prendem e interrogam alguém importante para você, confiscam seus bens ou deixam seus amigos/familiares contra você.</p>
    `,
    "Racionalista": `
    <p>Você se recusa a acreditar em qualquer coisa não confirmada como fato pela ciência moderna, mesmo estando bem na sua 
    frente. Além dos efeitos normais, sempre que você <strong>Ver Através da Ilusão</strong> e sempre que a Ilusão se romper, a MJ pode escolha uma opção:</p>
    <div class="vantagem__resultados">
    <p>◇ Sua presença alimenta a Ilusão, deixando-a mais poderosa e impenetrável.</p>
    <p>◇ Sua psique desorientada começa a criar imagens espelhadas de lugares e pessoas familiares dentro da Ilusão.</p>
    <p>◇ Você atrai entidades extradimensionais.</p>
    <p>◇ Você conscientemente nega o que vê, mesmo que isso te prejudique.</p>
    </div>
    `,
    "Rival": `
    <p>Você tem um rival ambicioso, que fará tudo que puder para ficar no seu lugar. Escolha quem é o rival. Na primeira sessão de jogo e sempre que você 
    cometer um erro ou baixar a guarda, <strong>role +0:</strong></p>
    <div class="vantagem__resultados">
    <p><b>15 + ∘ </b>Tudo tranquilo; seu rival não faz nenhum movimento contra você.</p>
    <p><b>10 - 14 ∘ </b>Você deixa uma brecha para seu rival. A MJ recebe 1 Reserva.</p>
    <p><b>- 9 ∘ </b>Você entregou ao seu rival o que ele precisava para tentar te destruir. A MJ recebe 3 Reservas.</p>
    </div>
    <p>A MJ pode gastar Reserva para fazer um movimento pelo seu rival. Por exemplo, o rival pode conseguir uma pessoa importante para o lado 
    dele, sabotar um dos seus projetos, te extorquir com evidências que danifiquem sua reputação, ou tomar medidas desesperadas para se livrar 
    permanentemente de você.</p>
    `,
    "Vício em Drogas": `
    <p>Você é viciado em drogas pesadas; cite pelo menos uma. Na primeira sessão do jogo e sempre que estiver usado, ou tiver a oportunidade de usar, <strong>role +0:</strong></p>
    <div class="vantagem__resultados">
    <p><b>15 + ∘ </b>Você controla a vontade, por enquanto.</p>
    <p><b>10 - 14 ∘ </b>A MJ recebe 1 Reserva.</p>
    <p><b>- 9 ∘ </b>A MJ recebe 3 Reservas.</p>
    </div>
    <p>A MJ pode gastar Reserva para fazer um Movimento para o seu vício. Por exemplo, você não consegue evitar usar a droga, suas 
    drogas acabam, endivida-se com uma pessoa perigosa, coloca-se em perigo sob a influência das drogas, ou arruina alguma coisa 
    importante para você — como um relacionamento — enquanto está sob a influência.</p>
    `,
    "Vítima da Paixão": `
    <p>Você tem uma paixão avassaladora por alguém ou alguma coisa, buscando possuí-la a qualquer custo. Na primeira sessão do jogo e 
    sempre que você encontrar o alvo de suas paixões (ou qualquer coisa parecida com isso), <strong>role +0:</strong></p>
    <div class="vantagem__resultados">
    <p><b>15 + ∘ </b>Você mantém sua paixão sob controle.</p>
    <p><b>10 - 14 ∘ </b>A paixão desperta dentro de você. A MJ recebe 1 Reserva.</p>
    <p><b>- 9 ∘ </b>Você está completamente nas garras da paixão. A MJ recebe 3 Reservas.</p>
    </div>
    <p>A MJ pode gastar Reserva para deixar sua paixão direcionar suas ações. Por exemplo, você anseia incontrolavelmente pelo 
    alvo da sua paixão — você deve encontrá-lo ou reduzir <strong>-2 de Estabilidade</strong>, o seu desejo arrasta o alvo da sua paixão até 
    os seus sonhos (talvez aprisionando-o lá), sua paixão fica marcada por ciúmes e raiva — fazendo você querer controlá-
    -la e feri-la (deve <strong>Manter o Controle</strong> para resistir), o seu desejo te deixa confuso frente ao objeto dessa paixão (-1 em todas 
    as rolagens enquanto estão na mesma cena), ou sua paixão pode atrair criaturas da luxúria que querem se alimentar delaou fazer pactos com você. </p>
    `
}