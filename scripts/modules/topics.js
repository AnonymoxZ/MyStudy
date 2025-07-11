/* This module contains subjects list to  */

const essay = ['Texto dissertativo-argumentativo',
  'Como fazer uma introdução',
  'Como desenvolver sua redação',
  'Proposta de intervenção',
  'Como fazer uma boa conclusão',
  'Competências avaliadas na redação do Enem',
  'Coesão e coerência',
  'Citações nas redações do Enem'
];


const languages = [
  'Funções de linguagem',
  'Figuras de linguagem',
  'Cancioneiros e composições populares',
  'Variação linguística',
  'Tipos de textos e gêneros de texto',
  'Interpretação de textos',
  'Intertextualidade',
  'Linguagem não verbal',
  'Semântica',
  'Interpretação de textos jornalísticos e publicitários',
  'Espanhol para o Enem',
  'Inglês para o Enem'
];

const literatury = [
  'Literatura Medieval e Trovadorismo',
  'Renascentismo',
  'Barroco e Arcadismo',
  'Romantismo',
  'Pré-modernismo e Modernismo',
  'Modernismo em Portugal: 1ª fase e 2ª fase',
  'Poesia, poema e prosa'
];

const geograph = [
  'Cartografia e leitura de mapas',
  'Climas do Brasil e climas do mundo',
  'Acordo de Paris e Conferências ambientais',
  'Aquecimento global e efeito estufa',
  'Bacias hidrográficas e escassez',
  'Estruturas geológicas e tipos de relevo',
  'Biomas do Brasil e biomas do mundo',
  'Matriz de transporte',
  'Fontes de energia',
  'Geografia Urbana e migração',
  'Globalização',
  'Blocos econômicos e OMC',
  'Crescimento da China',
  'Setores da economia brasileira',
  'Questão agrária',
  'Neocolonialismo na África e a Conferência de Berlim'
];

const philosophy = [
  'Filosofia Clássica e Pré-socráticos',
  'Sócrates e seu legado',
  'Platão e Aristóteles',
  'Filósofos medievais',
  'Renascimento',
  'Descartes e Bacon',
  'Iluminismo'
];

const history = [
  'Civilização Romana',
  'Civilização Grega',
  'Feudalismo',
  'Absolutismo e Reforma Protestante',
  'Revolução Francesa',
  'Revolução Industrial e Origem do Capitalismo',
  '1ª Guerra Mundial',
  'Revolução Russa',
  'Comunismo',
  'Regimes totalitários',
  '2ª Guerra Mundial',
  'Guerra Fria',
  'Formação de Israel e a Questão Palestina',
  'Expansão Marítima',
  'Brasil Colônia e Escravidão',
  'Brasil Império',
  'Período Regencial e revoltas',
  'Brasil República e Revoltas na República Velha',
  'Independência do Brasil e da América Espanhola',
  'América Latina',
  'Era Vargas',
  'Ditadura Militar'
];

const sociology = [
  'Auguste Comte e o Positivismo',
  'Bauman',
  'Foucault',
  'Cultura material e imaterial',
  'Patrimônio histórico cultural',
  'Internet e redes sociais',
  'Movimentos sociais',
  'Sociologia do trabalho'
];

const biology = [
  'Biologia Celular: O que são células? Tipos de células',
  'Células procariontes e células eucariontes',
  'Fisiologia Humana (sistemas digestivo, respiratório, reprodutor, nervoso, circulatório etc)',
  'DNA e RNA',
  'Células-tronco e clonagem',
  '1ª Lei de Mendel e 2ª Lei de Mendel',
  'Grupos sanguíneos',
  'Imunologia',
  'Soro e vacinas',
  'Ciclos biogeoquímicos',
  'Evolução e seleção natural',
  'Poluição',
  'Ecologia e relações ecológicas',
  'Vertebrados',
  'Parasitoses humanas',
  'Vírus, bactérias e fungos'
];

const physical = [
  'O que é física',
  'Movimento uniforme e Movimento uniformemente variado',
  'Aceleração',
  'Cinemática',
  'Aceleração Escalar',
  'Aceleração da Gravidade',
  'Leis de Newton',
  'Energia e trabalho',
  'Calorimetria',
  'Termodinâmica',
  'Fenômenos Ondulatórios',
  'Acústica',
  'Eletroestática',
  'Circuitos elétricos',
  'Força magnética',
  'Refração e Lentes',
  'Hidrostática'
];

const chemistry = [
  'Ligações químicas',
  'Forças intermoleculares',
  'Química inorgânica',
  'Funções Orgânicas e Reações Orgânicas',
  'Estequiometria',
  'Soluções',
  'Cinética Química',
  'Equilíbrio Químico',
  'pH e pOH',
  'Termoquímica',
  'Oxirredução, Pilhas e Eletrólise',
  'Química ambiental',
  'Isomeria Plana',
  'Separação de misturas'
];

const math = [
  'Porcentagem',
  'Regra de Três',
  'Unidades de medida',
  'Leitura de gráficos',
  'Plano Cartesiano',
  'Funções e equações de 1º grau',
  'Funções e equações de 2º grau',
  'Equação exponencial e função exponencial',
  'Logaritmo',
  'MMC e MDC',
  'PA e PG',
  'Matrizes',
  'Probabilidade',
  'Análise combinatória',
  'Circunferências',
  'Funções trigonométricas',
  'Área de sólidos',
  'Volume de cone',
  'Estatística (moda, média e mediana)',
  'Geometria analítica',
  'Razões trigonométricas',
  'Inequações de 2º grau'
];


const topicStudies = new Map()
const studys = ['essay','languages','literatury','geograph',
'philosophy','history','sociology','biology','physical','chemistry','math'];
const arrSubjects = [essay, languages, literatury, geograph, philosophy, history, sociology, biology, physical, chemistry, math]

for(let i=0;i<=studys.length;i++){
  topicStudies[studys[i]] = arrSubjects[i];
}


export {studys, topicStudies};