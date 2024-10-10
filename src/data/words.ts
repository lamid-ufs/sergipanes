type Question = {
  word: string;
  answers: string[];
  correctAnswer: string;
};

const questions: Question[] = [
  {
    word: "ARCO DE BOI",
    answers: ["Arco-íris", "Corda de lançar boi", "Estilingue"],
    correctAnswer: "Arco-íris",
  },
  {
    word: "CAMBUEIRO",
    answers: ["Chuva fraca", "Vento forte", "Lamaçal"],
    correctAnswer: "Chuva fraca",
  },
  {
    word: "REBANCEIRA",
    answers: ["Margem de rio", "Pedra grande", "Montanha"],
    correctAnswer: "Margem de rio",
  },
  {
    word: "FLOR D'ÁGUA",
    answers: ["Nascente de água", "Flores molhadas", "Ondas do mar"],
    correctAnswer: "Nascente de água",
  },
  {
    word: "BANZEIRO",
    answers: ["Onda", "Barulho", "Cachoeira"],
    correctAnswer: "Onda",
  },
  {
    word: "MASSAPÊ",
    answers: ["Tipo de solo sergipano", "Tipo de fruta sergipana", "Tipo de flor sergipana"],
    correctAnswer: "Tipo de solo sergipano",
  },
  {
    word: "MANIVA",
    answers: ["Caule da mandioca", "Folha verde", "Flor da laranja"],
    correctAnswer: "Caule da mandioca",
  },
  {
    word: "BUZA",
    answers: ["Coração da bananeira", "Ninho de pássaro", "Pássaro da caatinga"],
    correctAnswer: "Coração da bananeira",
  },
  {
    word: "MANOCA",
    answers: ["Um pequeno feixe de fumo", "Cesta de frutas", "Caixa de papel"],
    correctAnswer: "Um pequeno feixe de fumo",
  },
  {
    word: "GAMELA",
    answers: ["Local para secar feijão", "Saco de arroz", "Bacia de plástico"],
    correctAnswer: "Local para secar feijão",
  },
  {
    word: "JERIMUM",
    answers: ["Tipo de abóbora", "Semente de girassol", "Fruta vermelha"],
    correctAnswer: "Tipo de abóbora",
  },
  {
    word: "ESCALDADO",
    answers: ["Pirão", "Bolo assado", "Sopa quente"],
    correctAnswer: "Pirão",
  },
  {
    word: "BORRALHO",
    answers: ["Cinza ainda quente", "Pedra pequena", "Folha seca"],
    correctAnswer: "Cinza ainda quente",
  },
  {
    word: "DENTIQUEIRO",
    answers: ["Dente do siso", "Dente de leite", "Dente quebrado"],
    correctAnswer: "Dente do siso",
  },
  {
    word: "MONDONGO",
    answers: ["Tornozelo", "Joelho", "Cotovelo"],
    correctAnswer: "Tornozelo",
  },
  {
    word: "CALIFOM",
    answers: ["Sutiã", "Cinto", "Saia"],
    correctAnswer: "Sutiã",
  },
  {
    word: "TRAMELA",
    answers: ["Tranca de madeira", "Bancada de madeira", "Tábua de passar"],
    correctAnswer: "Tranca de madeira",
  },
  {
    word: "ARGUEIRO",
    answers: ["Cisco", "Pedra", "Areia"],
    correctAnswer: "Cisco",
  },
  {
    word: "DORDOLHO",
    answers: ["Terçol", "Olheiro", "Óculos"],
    correctAnswer: "Terçol",
  },
  {
    word: "DAPIRANGA",
    answers: ["Doença nos olhos", "Doença de pele", "Dor de cabeça"],
    correctAnswer: "Doença nos olhos",
  },
  {
    word: "LAMBEDOR",
    answers: ["Xarope caseiro", "Biscoito doce", "Geleia de fruta"],
    correctAnswer: "Xarope caseiro",
  },
  {
    word: "SOVINA",
    answers: ["Pessoa avarenta", "Pessoa feliz", "Pessoa distraída"],
    correctAnswer: "Pessoa avarenta",
  },
  {
    word: "MALINA",
    answers: ["Criança traquina", "Cacto", "Semente de abóbora"],
    correctAnswer: "Criança traquina",
  },
  {
    word: "CANGLAPÉ",
    answers: ["Cambalhota", "Salto alto", "Pula corda"],
    correctAnswer: "Cambalhota",
  },
  {
    word: "GUINÉ",
    answers: ["Galinha d'angola", "Pato", "Ganso"],
    correctAnswer: "Galinha d'angola",
  },
  {
    word: "MUNDÉU",
    answers: ["Tipo de armadilha", "Rede de pescar", "Cesta de frutas"],
    correctAnswer: "Tipo de armadilha",
  },
  {
    word: "GRAVIANA",
    answers: ["a) Saída de praia", "b) Pessoa séria", "c) Frio forte"],
    correctAnswer: "c) Frio forte",
  },
  {
    word: "CALIFON",
    answers: ["a) Pessoa cafona", "b) Sutiã", "c) Óculos"],
    correctAnswer: "b) Sutiã",
  },
  {
    word: "CAMBOEIRO",
    answers: ["a) Chuva fraca", "b) Fruta do sertão", "c) Poço artesiano"],
    correctAnswer: "a) Chuva fraca",
  },
  {
    word: "VEIA D'ÁGUA",
    answers: ["a) Queda d'água natural", "b) Forte correnteza", "c) Lenda Urbana"],
    correctAnswer: "b) Forte correnteza",
  },
  {
    word: "GINGE",
    answers: ["a) Gastura", "b) Gengibre", "c) Animal roedor"],
    correctAnswer: "a) Gastura",
  },
  {
    word: "MUSSUCA",
    answers: ["a) Inseto", "b) Monte de terra para plantação", "c) Dança de festa junina"],
    correctAnswer: "b) Monte de terra para plantação",
  },
  {
    word: "CAPUCO",
    answers: ["a) Sabugo de milho", "b) Tipo de xingamento", "c) Comida típica do interior"],
    correctAnswer: "a) Sabugo de milho",
  },
  {
    word: "MANAÍBA",
    answers: ["a) Tribo indígena", "b) Comida à base de mandioca", "c) Muda de mandioca"],
    correctAnswer: "c) Muda de mandioca",
  },
  {
    word: "AGUADOR",
    answers: ["a) Aguardente de cana, cachaça", "b) Regador de plantas", "c) Chuveiro"],
    correctAnswer: "b) Regador de plantas",
  },
  {
    word: "PAISANO",
    answers: ["a) Cigarro feito à mão", "b) Vigilante", "c) Roupa de frio"],
    correctAnswer: "a) Cigarro feito à mão",
  },
  {
    word: "CABELOURO",
    answers: ["a) Esponja", "b) Nuca", "c) Papagaio"],
    correctAnswer: "b) Nuca",
  },
  {
    word: "QUISSUNGO",
    answers: ["a) Mochila", "b) Lesma", "c) Axila"],
    correctAnswer: "c) Axila",
  },
  {
    word: "MONDONGO",
    answers: ["a) Rato", "b) Tornozelo", "c) Útero"],
    correctAnswer: "b) Tornozelo",
  },
  {
    word: "BISNOQUE",
    answers: ["a) Arranjo de flores", "b) Motocicleta", "c) Óculos"],
    correctAnswer: "c) Óculos",
  },
  {
    word: "CONTA",
    answers: ["a) Calculadora", "b) Pérola", "c) Caderno"],
    correctAnswer: "b) Pérola",
  },
  {
    word: "TAIM",
    answers: ["a) Calcinha", "b) Cicatriz", "c) Peixe"],
    correctAnswer: "b) Cicatriz",
  },
  {
    word: "OPILADO",
    answers: ["a) Pessoa anêmica", "b) Pessoa que não enxerga", "c) Pessoa feia"],
    correctAnswer: "a) Pessoa anêmica",
  },
  {
    word: "SAMBOQUEIRO",
    answers: ["a) Dança folclórica", "b) Pessoa desajeitada", "c) Pequena plantação"],
    correctAnswer: "b) Pessoa desajeitada",
  },
  {
    word: "SARARÁ",
    answers: ["a) Mestiço de pele branca", "b) Cabelo crespo", "c) Tipo de pássaro"],
    correctAnswer: "a) Mestiço de pele branca",
  },
  {
    word: "PAQUETE",
    answers: ["a) Brinquedo infantil", "b) Tipo de pão", "c) Menstruação"],
    correctAnswer: "c) Menstruação",
  },
  {
    word: "DORDÓI",
    answers: ["a) Dor de barriga", "b) Remédio caseiro", "c) Conjutivite"],
    correctAnswer: "c) Conjutivite",
  },
  {
    word: "CALOMBREZEIRO",
    answers: ["a) Pessoa que faz feitiço", "b) Pessoa muito calorenta", "c) Pessoa velhaca"],
    correctAnswer: "a) Pessoa que faz feitiço",
  },
  {
    word: "MANGUÁ",
    answers: ["a) Fruta típica do sertão", "b) Açoite para animais", "c) Tecido para vestido"],
    correctAnswer: "b) Açoite para animais",
  },
  {
    word: "BAÉ",
    answers: ["a) Peixe de água salgada", "b) Tipo de porco", "c) Prato típico do interior"],
    correctAnswer: "b) Tipo de porco",
  },
  {
    word: "MUNDÉ",
    answers: ["a) Roupa para banho", "b) Armadilha para caça", "c) Fogão à lenha"],
    correctAnswer: "b) Armadilha para caça",
  },
  {
    word: "CANGAMBÁ",
    answers: ["a) Gambá", "b) Rede de descanso", "c) Cesto de cipó"],
    correctAnswer: "a) Gambá",
  },
  {
    word: "PUCUMÃ",
    answers: ["a) Aranha", "b) Fuligem", "c) Fruta adocicada"],
    correctAnswer: "b) Fuligem",
  },
  {
    word: "CATENGUE",
    answers: ["a) Criança desnutrida", "b) Lagartixa", "c) Ave silvestre"],
    correctAnswer: "b) Lagartixa",
  },
  {
    word: "ESCRAMUÇADA",
    answers: ["a) Comida sem gosto", "b) Onda forte", "c) Rede de dormir"],
    correctAnswer: "a) Comida sem gosto",
  },
  {
    word: "ARAPUÁ",
    answers: ["a) Armadilha para caça", "b) Planta medicinal", "c) Tipo de abelha"],
    correctAnswer: "c) Tipo de abelha",
  },
  {
    word: "MARISCOMBONA",
    answers: ["a) Cambalhota", "b) Mariposa", "c) Colmeia"],
    correctAnswer: "a) Cambalhota",
  },
  {
    word: "CASQUINHA",
    answers: ["a) Pessoa avarenta", "b) Casa de jogos", "c) Máquina de costura"],
    correctAnswer: "a) Pessoa avarenta",
  },
  {
    word: "CUTÃO",
    answers: ["a) Pessoa que deve dinheiro", "b) Tipo de passarinho", "c) Roupa muito velha"],
    correctAnswer: "c) Roupa muito velha",
  },
  {
    word: "TITELA",
    answers: ["a) Estômago", "b) Perna", "c) Máquina de costura"],
    correctAnswer: "a) Estômago",
  },
];


export default questions;
