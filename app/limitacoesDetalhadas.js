const limitacoesDetalhadas = {
    "Aparência Inumana": `
    <p>Você parece totalmente inumano e deve usar um disfarce para poder coexistir com os outros. Por exemplo, sua pele pode estar apodrecendo
    e descamando, suas partes do corpo são deformadas, seus membros são distorcidos, objetos mecânicos foram integrados sob sua pele, ou você tem características
    de insetos ou aracnídeos. Quando humanos percebem sua verdadeira aparência, eles são dominados pelo nojo, medo e pânico.</p>
    `,
    "Campo de Conhecimento": `
    <p><strong>Campo de Conhecimento</strong> denota quais aspectos de magia da Morte o mago tem compreensão. Quando o Mago da Morte <strong>Realizar um Ritual</strong> de um campo que ele não conhece, ele não pode escolher 
    a opção "O ritual não se torna instável".</p>
    <div class="vantagem__resultados">
    <p>Na criação do personagem, escolha 1 <strong>Campo de Conhecimento</strong> para o seu Mago da Morte:</p>
    </div>
    <div class="vantagem__opcoes">
    <p>◇ Comunicar-se com os mortos.</p>
    <p>◇ Abrir portais para o Inferno.</p>
    <p>◇ Invocação.</p>
    <p>◇ Afetar os vivos.</p>
    <p>◇ Vincular e exorcizar.</p>
    </div>
    `,
    "Canibalismo": `
    <p>Você precisa consumir carne humana para sobreviver. Se você não comer o equivalente a um adulto ou três crianças em duas semanas, você sofre
    um <strong>Ferimento Crítico</strong> por decomposição, que só pode ser curado comendo a carne que você precisa - ou até mais. Se você passar mais uma semana sem sustento,
    você entra em coma. Na semana seguinte, você morre, a não ser que alguém te alimente com carne humana.</p>
    `,
    "Controlado por Força Externa": `
    <p>Você fez um pacto com um demônio ou Poder Superior. Pode ser um nefarite, um anjo, um deus esquecido, ou até mesmo um Arconte ou um Anjo da Morte. Se o pacto for quebrado de
    qualquer forma, você pode perder seus poderes, tornar-se humano de novo, ou ser destruído.</p>
    `,
    "Instinto Caçador": `
    <p>Você é impulsionado pelo instinto de caçar e matar um tipo específico de presa. Decida qual presa você procura; exemplos incluem crianças de 5 anos de idade, assassinos, policiais,
    cantores, etc. Quando sua presa estiver ao alcance, você a sente instintivamente e então <strong>role +Vontade:</strong></p>
    <div class="vantagem__resultados">
    <p><b>15 + ∘ </b>Você mantém seu <strong>Instinto Caçador</strong> sob controle.</p>
    <p><b>10 - 14 ∘ </b>Se você optar por resistir em caçar sua presa, isso vai esgotá-lo mentalmente. <strong>-1 de Estabilidade.</strong></p>
    <p><b>- 9 ∘ </b>Você precisa ter sua presa agora. Se você não puder, começa a se sentir péssimo. <strong>-4 de Estabilidade.</strong></p>
    </div>
    `,
    "Ligação com Símbolo": `
    <p>Você está ligado a um símbolo. Pode ser qualquer coisa, desde uma joia até um prédio ou uma tatuagem no corpo de outra pessoa. Sempre que o símbolo for danificado, você sofre lesões equivalentes.
    Se o símbolo for destruído, você também será obliterado. Enquanto o símbolo permanecer intacto, você não pode morrer de verdade; ressuscitando do túmulo, se morrer. No entanto, se alguém descobrir o símbolo,
    ele poderá ter controle sobre você - até mesmo te convocando para cumprir suas ordens. Além disso, enquanto ele possuir o símbolo, você não pode machucá-lo.</p>
    `,
    "Metamorfose Incontrolável": `
    <p>Quando suas emoções são elevadas, você se transforma em uma fera animalesca. Trabalhe junto com a MJ para descrever os detalhes desta forma monstruosa em que você
    se transforma. Escolha a emoção que desencadeia isso em você (luxúria, raiva, tristeza, ciúme, medo, etc.). Quando você sentir essa emoção ou vivenciar eventos traumáticos,
    <strong>role +Vontade:</strong></p>
       <div class="vantagem__resultados">
    <p><b>15 + ∘ </b>Você mantém sua forma humana.</p>
    <p><b>10 - 14 ∘ </b>Você ganha algumas características inumanas.</p>
    <p><b>- 9 ∘ </b>Você se transforma em algo totalmente desumano. A MJ assume o controle de seu personagem até que isso passe, no máximo uma cena completa após a sua transformação.</p>
    </div>
    `,
    "Sede da Alma": `
    <p>Você deve se alimentar da força vital de pessoas para sobreviver. A drenagem da alma de uma pessoa geralmente ocorre durante o sexo, ou beijando/tocando uma pessoa dormindo ou inconsciente. Para sobreviver, você deve
    devorar o equivalente a uma alma humana por semana (<strong>10 pontos de Estabilidade</strong>). Isso pode consistir em uma vítima que você devora inteiramente - deixando para trás uma casca letárgica - ou várias vítimas, que
    todas têm um pouco da sua força vital drenada. Qualquer pessoa submetida à <strong>Sede da Alma</strong> sem ser devorada perde gradualmente sua força vital, tornando-se pálida e deprimida (<strong>-1 a -9 de Estabilidade</strong>).
    Quando a vítima atinge <strong>Estabilidade 0</strong> (Arruinado), você devora os últimos resquícios da sua alma. Se você não conseguir devorar o equivalente a uma alma humana por semana, você perderá uma quantidade de <strong>Estabilidade</strong>
    igual a aquela que te faltava (ou seja, se estiver faltando <strong>3 pontos de Estabilidade</strong> de "alimentação" no final da semana, você perderá <strong>-3 de Estabilidade</strong>). Se a sua <strong>Estabilidade</strong> chegar a <strong>0</strong>
    por causa disso, você se tornará um fantasma etéreo até que tenha novamente a chance de devorar almas humanas.</p>
    `,
    "Sede de Sangue": `
    <p>Você deve beber sangue humano para sobreviver. Se você não beber o equivalente a quantidade de sangue de um adulto ou de três crianças em duas semanas, você sofre um <strong>Ferimento Crítico</strong> por definhamento, que só pode ser curado bebendo
    o sangue que você precisa - ou até mais. Se você passar mais uma semana sem sustento, você entra em coma. Na semana seguinte, você morre, a não ser que alguém te dê sangue humano. Para beber sangue sem causar <strong>2 de Dano</strong> é preciso <strong>Agir Sob Pressão</strong>.</p>
    `,
    "Sensibilidade": `
    <p>Você é particularmente sensível a alguma coisa. Você não gosta de estar perto do elemento, e se você receber <strong>Dano</strong> envolvendo sua sensibilidade, receberá <strong>+2 de Dano</strong> adicional. Escolha 1 opção:</p>
    <div class="vantagem__opcoes">
    <p>◇ Fogo.</p>
    <p>◇ Eletricidade.</p>
    <p>◇ Ferro (e não aço).</p>
    <p>◇ Prata.</p>
    <p>◇ Luz de sol (receba <strong>2 de Dano</strong> quando tiver a pele desprotegida exposta à luz solar direta).</p>
    <p>◇ Água (receba <strong>2 de Dano</strong> quando tiver a pele desprotegida exposta à água).</p>
    <p>◇ Madeira.</p>
    </div>
    `,
    "Vinculado a um Poder Superior": `
    <p>Como Discípula, você está ligada a um Arconte ou Anjo da Morte e deve obedecer e propagar o Princípio do Poder Superior. Quando você violar o Princípio do seu Poder Superior, você provoca sua ira e arrisca sofrer retribuição - <strong>role +0:</strong></p>
    <div class="vantagem__resultados">
    <p><b>15 + ∘ </b>Você recebe uma visão do seu Poder Superior te repreendendo, mas ele deixa isso passar apenas com uma advertência.</p>
    <p><b>10 - 14 ∘ </b>Você tem uma visão do seu Poder Superior exigindo penitência pelos seus pecados. Se você recusar esta penitência, o Poder Superior te pune como se você tivesse rolado um <strong>(-9)</strong>. Opções de penitência incluem (escolha da MJ):</p>
    </div>
    <div class="vantagem__opcoes">
    <p>◇ Você precisa escolher e oferecer um sacrifício vivo ao seu Poder Superior. O sacrifício deve ser um dos inimigos do Poder Superior, um de seus seguidores ou alguém importante para você. A vítima é forçada a servir ao Poder Superior por toda a vida, ou ter sua vida acabada.</p>
    <p>◇ Você precisa realizar algo que fortaleça o Princípio do Poder Superior, a MJ escolhe o quê.</p>
    <p>◇ Você precisa ser testado para provar sua devoção ao Poder Superior. A MJ escolhe como, mas deve ser algo perigoso.</p>
    </div>
    <div class="vantagem__resultados">
    <p><b>- 9 ∘ </b>Seu Poder Superior pune você. A MJ escolhe 1 opção:</p>
    </div>
    <div class="vantagem__opcoes">
    <p>◇ O Poder Superior exige um sacrifício de sangue escolhido por ele.</p>
    <p>◇ O Poder Superior marca você, para que todos possam testemunhar seus pecados (ex.: estigmas, partes do corpo deformadas, carne apodrecendo, um símbolo marcado em seu rosto, olhos não naturais, ou falta de pelos).</p>
    <p>◇ O Poder Superior te dá uma missão e retira as Qualidades que ele concedeu a você até que você a complete.
    </div>
    <div class="vantagem__resultados">
    <p>O Poder Superior determina qual princípio você deve seguir e o que é considerado uma violação.</p>
    </div>
    <div class="vantagem__dropdown">
        <input type="text" class="vantagem__selectbox" value="Kether" id="infoArquetipo" readonly>
        <div class="vantagem__options">
                        <div onclick="show(event)">Kether</div>
                        <div onclick="show(event)">Chokmah</div>
                        <div onclick="show(event)">Binah</div>
                        <div onclick="show(event)">Chesed</div>
                        <div onclick="show(event)">Geburah</div>
                        <div onclick="show(event)">Tiphareth</div>
                        <div onclick="show(event)">Netzach</div>
                        <div onclick="show(event)">Hod</div>
                        <div onclick="show(event)">Yesod</div>
                        <div onclick="show(event)">Malkuth</div>
                        <div onclick="show(event)">Thaumiel</div>
                        <div onclick="show(event)">Chagidiel</div>
                        <div onclick="show(event)">Sathariel</div>
                        <div onclick="show(event)">Gamichicoth</div>
                        <div onclick="show(event)">Golab</div>
                        <div onclick="show(event)">Togarini</div>
                        <div onclick="show(event)">Hareb-Serap</div>
                        <div onclick="show(event)">Samael</div>
                        <div onclick="show(event)">Gamaliel</div>
                        <div onclick="show(event)">Nahemoth</div>
        </div>
        <div class="caret"></div>
    </div>
    `,
}