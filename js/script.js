const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
{
enunciado: "Assim que saiu da escola você se depara com uma nova
tecnologia, um chat que consegue responder todas as dúvidas que uma
pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o
primeiro pensamento?",
alternativas: [

{
texto: "Isso é assustador!",
afirmacao: ["No início ficou com medo do que essa

tecnologia pode fazer. ",

"Achou assustador pensar na velocidade na qual a

tecnologia está avançando."

]
},
{
texto: "Isso é maravilhoso!",
afirmacao: ["Quis saber como usar IA no seu dia a dia.",
"Foi atrás de vídeos, artigos e mais informaçõe sobre

como utilizar essa tecnologia."

]
}
]
},
{
enunciado: "Com a descoberta desta tecnologia, chamada
Inteligência Artificial, uma professora de tecnologia da escola decidiu
fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula
ela pede que você escreva um trabalho sobre o uso de IA em sala de aula.
Qual atitude você toma?",
alternativas: [
{
texto: "Utiliza uma ferramenta de busca na internet que
utiliza IA para que ela ajude a encontrar informações relevantes para o
trabalho e explique numa linguagem que facilite o entendimento.",
afirmacao: ["Conseguiu utilizar a IA para buscar

informações úteis.",

"Percebeu que a IA pode ajudar a encontrar
informações úteis na internet de forma mais rápida e direcionada.",
"Percebeu que a IA consegue explicar termos
complicados de forma simplificada e isso ajudou muito suas pesquisas
sobre assuntos complexos."

]
},
{
texto: "Escreve o trabalho com base nas conversas que
teve com colegas, algumas pesquisas na internet e conhecimentos próprios
sobre o tema.",
export const nomes = ["Camila", "Lucas", "Beatriz", "Gabriel", "Julia", "Matheus"];

export function nomeAleatorio() {
    const posicao = Math.floor(Math.random() * nomes.length);
    return nomes[posicao];
}

export const nome = nomeAleatorio();

export function aleatorio(lista) {
    const posicao = Math.floor(Math.random() * lista.length);
    return lista[posicao];
}

export const perguntas = [
  {
    enunciado: "Você aceita participar de uma missão secreta para explorar um planeta recém-descoberto na órbita de outra estrela. Ao entrar na nave, o computador de bordo pergunta qual protocolo de navegação inicial você deseja ativar. O que você faz?",
    alternativas: [
      {
        texto: "Ativar o piloto automático quântico para uma viagem mais rápida, confiando totalmente no sistema.",
        afirmacao: [
          "Confiou cegamente na tecnologia avançada da nave.",
          "Chegou ao destino em tempo recorde graças à computação quântica."
        ],
        proxima: 1,
      },
      {
        texto: "Prefere assumir o controle manual assistido por mapas estelares tradicionais.",
        afirmacao: [
          "Decidiu manter o controle humano direto sobre a nave.",
          "Teve mais trabalho durante o trajeto, mas aprendeu cada detalhe das rotas galácticas."
        ],
        proxima: 2,
      },
    ]
  },
  {
    enunciado: "Após uma viagem intensa, sua nave entra na atmosfera do planeta misterioso. Os sensores detectam ruídos estranhos vindos de uma estrutura subterrânea antiga. Qual é a sua atitude?",
    alternativas: [
      {
        texto: "Enviar um drone de reconhecimento equipado com inteligência artificial para mapear o local.",
        afirmacao: [
          "Utilizou drones autônomos para explorar o perigo com segurança.",
          "Descobriu que a IA consegue antecipar armadilhas e obstáculos subterrâneos com facilidade."
        ],
        proxima: 3,
      },
      {
        texto: "Descer pessoalmente com uma equipe de exploração física e ferramentas analógicas.",
        afirmacao: [
          "Preferiu a exploração 'na unha', valorizando a intuição humana.",
          "Sentiu na pele o desafio de desbravar um ambiente desconhecido sem depender de robôs."
        ],
        proxima: 4,
      },
    ]
  },
  {
    enunciado: "Mesmo pilotando de forma manual, os sistemas automáticos da nave enviaram dados vitais cruciais enquanto você se aproximava da atmosfera do planeta misterioso. Agora, os sensores detectam ruídos subterrâneos em uma estrutura antiga. O que você decide?",
    alternativas: [
      {
        texto: "Enviar um drone de reconhecimento equipado com inteligência artificial para mapear o local.",
        afirmacao: [
          "Utilizou drones autônomos para explorar o perigo com segurança.",
          "Descobriu que a IA consegue antecipar armadilhas e obstáculos subterrâneos com facilidade."
        ],
        proxima: 3,
      },
      {
        texto: "Descer pessoalmente com uma equipe de exploração física e ferramentas analógicas.",
        afirmacao: [
          "Preferiu a exploração 'na unha', valorizando a intuição humana.",
          "Sentiu na pele o desafio de desbravar um ambiente desconhecido sem depender de robôs."
        ],
        proxima: 4,
      },
    ]
  },
  {
    enunciado: "O drone com inteligência artificial mapeou a base e encontrou um cofre tecnológico com registros de uma civilização extinta. Você precisa decidir o que fazer com esse conhecimento acumulado.",
    alternativas: [
      {
        texto: "Fazer o upload instantâneo de todos os dados para a rede central da Terra para que toda a humanidade estude.",
        afirmacao: [
          "Compartilhou o conhecimento tecnológico instantaneamente com o mundo.",
          "Iniciou uma revolução científica global baseada nos arquivos alienígenas."
        ],
        proxima: 5,
      },
      {
        texto: "Analisar os arquivos manualmente aos poucos, garantindo que nenhuma informação perigosa seja vazada.",
        afirmacao: [
          "Adotou uma postura cautelosa e de proteção de dados sensíveis.",
          "Evitou riscos de contaminação tecnológica descontrolada na Terra."
        ],
        proxima: 6,
      },
    ]
  },
  {
    enunciado: "Explorando a base por conta própria, você encontra o cofre tecnológico com os registros da civilização extinta. Sem a ajuda de IAs, como você lida com a descoberta?",
    alternativas: [
      {
        texto: "Fazer o upload instantâneo de todos os dados para a rede central da Terra para que toda a humanidade estude.",
        afirmacao: [
          "Compartilhou o conhecimento tecnológico instantaneamente com o mundo.",
          "Iniciou uma revolução científica global baseada nos arquivos alienígenas."
        ],
        proxima: 5,
      },
      {
        texto: "Analisar os arquivos manualmente aos poucos, garantindo que nenhuma informação perigosa seja vazada.",
        afirmacao: [
          "Adotou uma postura cautelosa e de proteção de dados sensíveis.",
          "Evitou riscos de contaminação tecnológica descontrolada na Terra."
        ],
        proxima: 6,
      },
    ]
  },
  {
    enunciado: "Com os dados liberados para o mundo, um debate surge na Federação Galáctica sobre o futuro da exploração espacial automatizada. Qual é o seu posicionamento na assembleia?",
    alternativas: [
      {
        texto: "Defender que a automação total e as IAs devem liderar todas as missões futuras para evitar erros humanos.",
        afirmacao: [
          "Tornou-se um defensor ferrenho da expansão tecnológica autônoma.",
          "Incentivou a criação de naves totalmente pilotadas por inteligência artificial."
        ],
        proxima: 7,
      },
      {
        texto: "Defender que o controle humano e a intuição jamais devem ser substituídos pelas máquinas.",
        afirmacao: [
          "Lutou pela preservação do papel central do ser humano nas decisões espaciais.",
          "Criou diretrizes éticas para limitar o uso excessivo de robôs."
        ],
        proxima: 7,
      },
    ]
  },
  {
    enunciado: "Com os dados analisados com cautela, a comunidade científica debate os limites da exploração e o uso de tecnologias alienígenas. Qual o seu papel nessa discussão?",
    alternativas: [
      {
        texto: "Defender que a automação total e as IAs devem liderar todas as missões futuras para evitar erros humanos.",
        afirmacao: [
          "Tornou-se um defensor ferrenho da expansão tecnológica autônoma.",
          "Incentivou a criação de naves totalmente pilotadas por inteligência artificial."
        ],
        proxima: 7,
      },
      {
        texto: "Defender que o controle humano e a intuição jamais devem ser substituídos pelas máquinas.",
        afirmacao: [
          "Lutou pela preservação do papel central do ser humano nas decisões espaciais.",
          "Criou diretrizes éticas para limitar o uso excessivo de robôs."
        ],
        proxima: 7,
      },
    ]
  },
  {
    enunciado: "Para registrar sua jornada histórica no planeta, a federação pede que você produza um memorial visual da expedição. Como você decide criar essa obra?",
    alternativas: [
      {
        texto: "Utilizar um sintetizador holográfico avançado para projetar memórias em formato digital tridimensional.",
        afirmacao: [
          "Inovou ao utilizar projeções holográficas avançadas para eternizar a missão.",
          "Inspirou novas gerações a utilizarem tecnologias imersivas na arte."
        ],
      },
      {
        texto: "Desenhar mapas e paisagens estelares à mão em um diário físico de couro sintético.",
        afirmacao: [
          "Resgatou o valor do registro artístico manual em plena era espacial.",
          "Mostrou que a sensibilidade humana e o traço manual continuam insubstituíveis."
        ],
      },
    ]
  }
];
afirmacao: ["Sentiu mais facilidade em utilizar seus

próprios recursos para escrever seu trabalho.",

"Achou que era muito mais fácil procurar por
respostas utilizando alguns meios mais tradicionais mesmo que levasse
mais tempo.",

"Sentiu um pouco de medo de quais dados pessoais seus
a IA poderia utilizar e por isso prefere fazer suas coisas com pouca
intromissão da tecnologia."

]
}
]
},
{
enunciado: "Após a elaboração do trabalho escrito, a professora
realizou um debate entre a turma para entender como foi realizada a
pesquisa e escrita. Nessa conversa também foi levantado um ponto muito
importante: como a IA impacta o trabalho do futuro. Nesse debate, como
você se posiciona?",
alternativas: [
{
texto: "Defende a ideia de que a IA pode criar novas

oportunidades de emprego e melhorar habilidades humanas.",

afirmacao: ["Vem impulsionando a inovação na área de IA e

luta para abrir novos caminhos profissionais com IA.",

"Participa ativamente do desenvolvimento de soluções

criativas e na melhoria de processos em IA."

]
},
{
texto: "Me preocupo com as pessoas que perderão seus
empregos para máquinas e defendem a importância de proteger os
trabalhadores.",

afirmacao: ["Sua preocupação com as pessoas motivou a
criar um grupo de estudos entre trabalhadores para discutir meios de
utilização de IA de forma ética.",

"Criou grupos de ética voltado para IA e busca
ativamente reduzir as desigualdades geradas pela automação."

]
}
]
},
{
enunciado: "Ao final da discussão, você precisou criar uma imagem
no computador que representasse o que pensa sobre IA. E agora?",
alternativas: [
{
texto: "Criar uma imagem utilizando uma plataforma de

design como o Paint.",

afirmacao: ["Notou também que muitas pessoas não sabem
ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus
conhecimentos de design utilizando ferramentas de pintura digital para
iniciantes.",

"Ainda acha que os meios de desenho tradicionais são
mais eficazes para a criatividade, por isso vem estimulando pessoas em
suas redes sociais a fazer pintura em aquarela."

]
},

{
texto: "Criar uma imagem utilizando um gerador de imagem

de IA.",

afirmacao: ["Acelerou o processo de criação de trabalhos
utilizando geradores de imagem e agora consegue ensinar pessoas que
sentem dificuldades em desenhar manualmente como utilizar também!",
"Compartilhou artes em redes sociais como forma de

ensinar como se comunicar através da arte.",

"Percebeu que muitas pessoas têm dificuldade em
expressar suas ideias desenhando e acha que a IA é capaz de empoderar
essas pessoas a tirarem ideias do papel."

]
}
]
},
{
enunciado: "Você tem um trabalho em grupo de biologia para
entregar na semana seguinte, o andamento do trabalho está um pouco
atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O
problema é que o trabalho está totalmente igual ao do chat. O que você
faz? ",
alternativas: [
{
texto: "Escrever comandos para o chat é uma forma de
contribuir com o trabalho, por isso não é um problema utilizar o texto
inteiro.",

afirmacao: "Infelizmente passou a utilizar a IA para
fazer todas suas tarefas e agora se sente dependente da IA para tudo."

},
{
texto: "O chat pode ser uma tecnologia muito avançada,
mas é preciso manter a atenção pois toda máquina erra, por isso revisar o
trabalho e contribuir com as perspectivas pessoais é essencial.",
afirmacao: "Percebeu que toda IA reproduz orientações
baseadas na empresa que programou e muito do que o chat escrevia não
refletia o que pensava e por isso sabe que os textos gerados pela IA
devem servir como auxílio e não resultado final. "

}
]
},
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";
function mostraPergunta() {
if (atual >= perguntas.length) {
mostraResultado();

return;
}
perguntaAtual = perguntas[atual];
caixaPerguntas.textContent = perguntaAtual.enunciado;
caixaAlternativas.textContent = "";
mostraAlternativas();
}
function mostraAlternativas() {
for (const alternativa of perguntaAtual.alternativas) {
const botaoAlternativas = document.createElement("button");
botaoAlternativas.textContent = alternativa.texto;
botaoAlternativas.addEventListener("click", () =>
respostaSelecionada(alternativa));
caixaAlternativas.appendChild(botaoAlternativas);
}
}
function respostaSelecionada(opcaoSelecionada) {
const afirmacoes = opcaoSelecionada.afirmacao;
historiaFinal += afirmacoes + " ";
atual++;
mostraPergunta();
}
function mostraResultado() {
caixaPerguntas.textContent = "Em 2049...";
textoResultado.textContent = historiaFinal;
caixaAlternativas.textContent = "";
}
mostraPergunta();