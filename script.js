const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você começa sua carreira como caminhoneiro e recebe seu primeiro caminhão. Qual é a sua reação ao pegar a estrada pela primeira vez?",
        alternativas: [
            {
                texto: "Estou ansioso para começar e explorar novos lugares. Vamos lá!",
                afirmacao: "João está animado com sua nova profissão e vê as estradas como uma oportunidade de descobrir novos horizontes e aventuras."
            },
            {
                texto: "Estou um pouco nervoso com a responsabilidade e a carga de trabalho que vem com o caminhão.",
                afirmacao: "João sente uma mistura de nervosismo e entusiasmo, ciente dos desafios que virão, mas determinado a superar as dificuldades iniciais."
            }
        ]
    },
    {
        enunciado: "Durante uma viagem, você encontra um novo sistema de navegação que promete otimizar suas rotas e aumentar a segurança. O que você faz?",
        alternativas: [
            {
                texto: "Decido experimentar o novo sistema e ajustar minhas rotas de acordo com as recomendações.",
                afirmacao: "João adota o novo sistema de navegação, que o ajuda a otimizar suas rotas e a dirigir de forma mais segura e eficiente."
            },
            {
                texto: "Prefiro continuar utilizando o método tradicional de navegação com mapas e referências pessoais.",
                afirmacao: "João escolhe manter suas práticas de navegação tradicionais, confiando na experiência acumulada ao longo dos anos."
            }
        ]
    },
    {
        enunciado: "Durante uma parada em um posto, você conversa com outros caminhoneiros sobre os desafios e oportunidades no setor. Como você participa da conversa?",
        alternativas: [
            {
                texto: "Compartilho minhas experiências e discuto como novas tecnologias estão mudando o setor de transporte.",
                afirmacao: "João contribui para a conversa com suas próprias experiências e observa como as novas tecnologias estão transformando o setor."
            },
            {
                texto: "Ouço as histórias dos colegas e reflito sobre como enfrentar os desafios do dia a dia.",
                afirmacao: "João escuta atentamente as histórias de outros caminhoneiros, refletindo sobre como superar os desafios comuns no trabalho."
            }
        ]
    },
    {
        enunciado: "Você enfrenta um problema mecânico no meio de uma longa viagem e precisa decidir como proceder. O que você faz?",
        alternativas: [
            {
                texto: "Tento resolver o problema sozinho utilizando as ferramentas que tenho no caminhão.",
                afirmacao: "João usa suas habilidades e ferramentas para tentar consertar o problema mecânico, demonstrando sua capacidade de lidar com imprevistos."
            },
            {
                texto: "Ligo para um mecânico de confiança e sigo suas orientações para resolver o problema.",
                afirmacao: "João opta por buscar ajuda profissional, garantindo que o problema seja resolvido corretamente e minimizando o tempo de inatividade."
            }
        ]
    },
    {
        enunciado: "Ao final da sua carreira como caminhoneiro, como você gostaria de ser lembrado?",
        alternativas: [
            {
                texto: "Como um profissional dedicado que sempre entregou suas cargas no prazo e com segurança.",
                afirmacao: "João é lembrado por sua dedicação e responsabilidade, conhecido por sua pontualidade e atenção à segurança."
            },
            {
                texto: "Como alguém que ajudou a melhorar a vida de outros caminhoneiros e contribuiu para a evolução do setor.",
                afirmacao: "João é lembrado por seu impacto positivo no setor, ajudando a melhorar as condições de trabalho e a compartilhar conhecimento com outros profissionais."
            }
        ]
    }
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

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
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