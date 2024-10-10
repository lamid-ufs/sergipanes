type Question = {
  word: string;
  answers: string[];
  correctAnswer: string;
};

const questionsData: Question[] = [
  {
    word: "ARCO DE BOI",
    answers: ["a) Arco-íris", "b) Corda de lançar boi", "c) Estilingue"],
    correctAnswer: "a) Arco-íris",
  },
  {
    word: "CAMBUEIRO",
    answers: ["a) Chuva fraca", "b) Vento forte", "c) Lamaçal"],
    correctAnswer: "a) Chuva fraca",
  },
  {
    word: "REBANCEIRA",
    answers: ["a) Margem de rio", "b) Pedra grande", "c) Montanha"],
    correctAnswer: "a) Margem de rio",
  },
  {
    word: "FLOR D'ÁGUA",
    answers: ["a) Nascente de água", "b) Flores molhadas", "c) Ondas do mar"],
    correctAnswer: "a) Nascente de água",
  },
  {
    word: "BANZEIRO",
    answers: ["a) Onda", "b) Barulho", "c) Cachoeira"],
    correctAnswer: "a) Onda",
  },
  {
    word: "MASSAPÊ",
    answers: ["a) Tipo de solo sergipano", "b) Tipo de fruta sergipana", "c) Tipo de flor sergipana"],
    correctAnswer: "a) Tipo de solo sergipano",
  },
  {
    word: "MANIVA",
    answers: ["a) Caule da mandioca", "b) Folha verde", "c) Flor da laranja"],
    correctAnswer: "a) Caule da mandioca",
  },
  {
    word: "BUZA",
    answers: ["a) Coração da bananeira", "b) Ninho de pássaro", "c) Pássaro da caatinga"],
    correctAnswer: "a) Coração da bananeira",
  },
  {
    word: "MANOCA",
    answers: ["a) Um pequeno feixe de fumo", "b) Cesta de frutas", "c) Caixa de papel"],
    correctAnswer: "a) Um pequeno feixe de fumo",
  },
  {
    word: "GAMELA",
    answers: ["a) Local para secar feijão", "b) Saco de arroz", "c) Bacia de plástico"],
    correctAnswer: "a) Local para secar feijão",
  },
  {
    word: "JERIMUM",
    answers: ["a) Tipo de abóbora", "b) Semente de girassol", "c) Fruta vermelha"],
    correctAnswer: "a) Tipo de abóbora",
  },
  {
    word: "ESCALDADO",
    answers: ["a) Pirão", "b) Bolo assado", "c) Sopa quente"],
    correctAnswer: "a) Pirão",
  },
  {
    word: "BORRALHO",
    answers: ["a) Cinza ainda quente", "b) Pedra pequena", "c) Folha seca"],
    correctAnswer: "a) Cinza ainda quente",
  },
  {
    word: "DENTIQUEIRO",
    answers: ["a) Dente do siso", "b) Dente de leite", "c) Dente quebrado"],
    correctAnswer: "a) Dente do siso",
  },
  {
    word: "MONDONGO",
    answers: ["a) Tornozelo", "b) Joelho", "c) Cotovelo"],
    correctAnswer: "a) Tornozelo",
  },
  {
    word: "CALIFOM",
    answers: ["a) Sutiã", "b) Cinto", "c) Saia"],
    correctAnswer: "a) Sutiã",
  },
  {
    word: "TRAMELA",
    answers: ["a) Tranca de madeira", "b) Bancada de madeira", "c) Tábua de passar"],
    correctAnswer: "a) Tranca de madeira",
  },
  {
    word: "ARGUEIRO",
    answers: ["a) Cisco", "b) Pedra", "c) Areia"],
    correctAnswer: "a) Cisco",
  },
  {
    word: "DORDOLHO",
    answers: ["a) Terçol", "b) Olheiro", "c) Óculos"],
    correctAnswer: "a) Terçol",
  },
  {
    word: "DAPIRANGA",
    answers: ["a) Doença nos olhos", "b) Doença de pele", "c) Dor de cabeça"],
    correctAnswer: "a) Doença nos olhos",
  },
  {
    word: "LAMBEDOR",
    answers: ["a) Xarope caseiro", "b) Biscoito doce", "c) Geleia de fruta"],
    correctAnswer: "a) Xarope caseiro",
  },
  {
    word: "SOVINA",
    answers: ["a) Pessoa avarenta", "b) Pessoa feliz", "c) Pessoa distraída"],
    correctAnswer: "a) Pessoa avarenta",
  },
  {
    word: "MALINA",
    answers: ["a) Criança traquina", "b) Cacto", "c) Semente de abóbora"],
    correctAnswer: "a) Criança traquina",
  },
  {
    word: "CANGLAPÉ",
    answers: ["a) Cambalhota", "b) Salto alto", "c) Pula corda"],
    correctAnswer: "a) Cambalhota",
  },
  {
    word: "GUINÉ",
    answers: ["a) Galinha d'angola", "b) Pato", "c) Ganso"],
    correctAnswer: "a) Galinha d'angola",
  },
  {
    word: "MUNDÉU",
    answers: ["a) Tipo de armadilha", "b) Rede de pescar", "c) Cesta de frutas"],
    correctAnswer: "a) Tipo de armadilha",
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


export default questionsData;
