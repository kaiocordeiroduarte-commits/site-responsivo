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
        texto: "Defender que o controle humano e a intuição jamis devem ser substituídos pelas máquinas.",
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
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, transform 0.2s;
}

button:hover {
  background-color: var(--cor-destaque);
  color: var(--cor-principal);
  transform: scale(1.02);
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