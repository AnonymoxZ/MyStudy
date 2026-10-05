/* Topics grid ENEM -  Progressão Pedagógica */

const math = [
  'As quatro operações básicas e conjuntos numéricos',
  'MMC e MDC',
  'Potenciação e Radiciação',
  'Unidades de medida e conversões',
  'Razão, Proporção e Regra de Três',
  'Porcentagem e Matemática Financeira',
  'Leitura de gráficos e tabelas',
  'Plano Cartesiano',
  'Funções e equações de 1º grau',
  'Funções e equações de 2º grau',
  'Inequações de 1º e 2º grau',
  'Equação e função exponencial',
  'Logaritmos e função logarítmica',
  'Progressões: PA e PG',
  'Matrizes e Sistemas Lineares',
  'Análise combinatória',
  'Probabilidade',
  'Estatística (moda, média, mediana e desvio padrão)',
  'Geometria Plana: áreas, perímetros e razões trigonométricas',
  'Circunferências e Trigonometria (Funções trigonométricas)',
  'Geometria Espacial: áreas de sólidos e volumes (prismas, pirâmides, cilindros, cones e esferas)',
  'Geometria Analítica'
];

const essay = [
  'Competências avaliadas na redação do Enem',
  'Texto dissertativo-argumentativo: estrutura básica',
  'Como fazer uma introdução e tese',
  'Como desenvolver sua redação e repertório sociocultural',
  'Coesão e coerência (conectivos e encadeamento)',
  'Citações e estratégias argumentativas nas redações do Enem',
  'Como fazer uma boa conclusão',
  'Proposta de intervenção (os 5 elementos obrigatórios)'
];

const languages = [
  'Variação linguística',
  // (Morfologia)
  'Substantivos',
  'Artigos',
  'Adjetivos',
  'Numerais',
  'Pronomes',
  'Verbos',
  'Advérbios',
  'Preposições',
  'Conjunções',
  'Interjeições',
  // Tipologia Textual
  'Tipos de textos e gêneros textuais',
  'Linguagem não verbal e mista',
  'Interpretação de textos',
  'Interpretação de textos jornalísticos e publicitários',
  'Funções da linguagem',
  'Figuras de linguagem',
  'Semântica e ambiguidade',
  'Intertextualidade',
  'Cancioneiros e composições populares',
  'Inglês para o Enem',
  'Espanhol para o Enem'
];

const literatury = [
  'Conceito de Literatura: Poesia, poema, prosa e gêneros literários (Romance)',
  'Literatura Medieval e Trovadorismo',
  'Renascentismo e Humanismo',
  'Barroco e Arcadismo',
  'Romantismo (Poesia e Prosa)',
  'Realismo, Naturalismo e Parnasianismo',
  'Simbolismo e Pré-Modernismo',
  'Modernismo em Portugal: 1ª e 2ª fase',
  'Modernismo no Brasil: 1ª, 2ª e 3ª fases',
  'Literatura Contemporânea Brasileira'
];

const chemistry = [
  'Introdução à Química, Matéria e Separação de misturas',
  'Química Básica: Estrutura Atômica e Tabela Periódica',
  'Ligações químicas e Geometria Molecular',
  'Forças intermoleculares e Polaridade',
  'Química Inorgânica (Ácidos, Bases, Sais e Óxidos)',
  'Reações Químicas e Equacionamento',
  'Estequiometria',
  'Soluções (Concentração, Diluição e Misturas)',
  'Termoquímica',
  'Cinética Química',
  'Equilíbrio Químico (pH, pOH e Hydrolysis)',
  'Oxirredução, Pilhas e Eletrólise',
  'Introdução à Química Orgânica e Isomeria Plana',
  'Funções Orgânicas e Reações Orgânicas',
  'Química Ambiental e Sustentabilidade'
];

const physical = [
  'O que é Física: Grandezas e Unidades de Medida',
  'Cinemática: Movimento Uniforme (MU) e Movimento Uniformemente Variado (MUV)',
  'Aceleração Escalar e Vetorial',
  'Lançamentos e Aceleração da Gravidade',
  'Leis de Newton e Dinâmica de Forças',
  'Energia, Trabalho e Potência',
  'Hidrostática e Pressão',
  'Termologia, Calorimetria e Mudanças de Fase',
  'Termodinâmica e Leis dos Gases',
  'Fenômenos Ondulatórios e Acústica',
  'Óptica Geométrica: Refração e Lentes',
  'Eletrostática',
  'Eletrodinâmica e Circuitos elétricos',
  'Eletromagnetismo e Força magnética',
  'História da Física: Contribuições de Galileu Galilei e Isaac Newton'
];

const biology = [
  'Bioquímica Celular (Água, Sais, Glicídios, Lipídios, Proteínas)',
  'Biologia Celular: Células procariontes e eucariontes (Organelas)',
  'DNA e RNA: Síntese Proteica e Divisão Celular',
  'Vírus, Bactérias e Fungos (Microbiologia)',
  'Parasitoses humanas (Doenças bacterianas, virais e protozooses)',
  'Fisiologia Humana: Sistema Digestório',
  'Fisiologia Humana: Sistema Respiratório',
  'Fisiologia Humana: Sistema Circulatório e Imunologia (Soro e Vacinas)',
  'Fisiologia Humana: Sistema Nervoso',
  'Fisiologia Humana: Sistema Esquelético e Muscular',
  'Fisiologia Humana: Sistema Reprodutor Masculino e Feminino',
  'Biotecnologia: Células-tronco e Clonagem',
  'Genética: 1ª e 2ª Lei de Mendel',
  'Grupos sanguíneos (Sistema ABO e Rh)',
  'Zoologia: Invertebrados e Vertebrados',
  'Botânica Básica',
  'Evolução, Seleção Natural e Especiação',
  'Ecologia: Relações ecológicas e Cadeias Alimentares',
  'Ciclos biogeoquímicos',
  'Poluição e Impactos Ambientais'
];

const history = [
  'Civilização Grega',
  'Civilização Romana',
  'Feudalismo e Idade Média',
  'Expansão Marítima e Mercantilismo',
  'Absolutismo e Reforma Protestante',
  'Brasil Colônia, Indígenas e Escravidão',
  'Iluminismo e Revolução Francesa',
  'Revolução Industrial e Origem do Capitalismo',
  'Brasil Império, Período Regencial e Revoltas',
  'Independência do Brasil e da América Espanhola',
  'Neocolonialismo, Imperialismo e a Conferência de Berlim',
  '1ª Guerra Mundial e Revolução Russa',
  'Brasil República: Revoltas na República Velha',
  'Era Vargas',
  'Comunismo e Regimes Totalitários (Fascismo e Nazismo)',
  '2ª Guerra Mundial',
  'Guerra Fria e América Latina',
  'Ditadura Militar no Brasil',
  'Formação do Estado de Israel e a Questão Palestina',
  'Redemocratização e Brasil Contemporâneo'
];

const geograph = [
  'Cartografia e leitura de mapas',
  'Estruturas geológicas, Geomorfologia e tipos de relevo',
  'Climas do Brasil e climas do mundo',
  'Biomas do Brasil e biomas do mundo',
  'Bacias hidrográficas e escassez hídrica',
  'Fontes de energia e Matriz Energética',
  'Questão agrária e Uso da Terra',
  'Geografia Urbana e migrações',
  'Setores da economia brasileira e Matriz de transporte',
  'Globalização',
  'Blocos econômicos, OMC e Comércio Internacional',
  'Geopolítica Contemporânea (Crescimento da China, potências e conflitos atuais)',
  'Aquecimento global e efeito estufa',
  'Acordo de Paris e Conferências ambientais'
];

const philosophy = [
  'O que é Conhecimento e Filosofia?',
  'Filosofia Clássica e Pré-socráticos',
  'Sócrates e seu legado',
  'Platão e Aristóteles',
  'Filosofia Helenística: Estoicismo, Epicurismo e Ceticismo',
  'Filósofos Medievais (Patrística e Escolástica)',
  'Renascimento e Filosofia Política Moderna',
  'Racionalismo e Empirismo: Descartes e Bacon',
  'Iluminismo e Contratualismo',
  'Nihilismo e Friedrich Nietzsche',
  'Filosofia Contemporânea (Escola de Frankfurt e Existencialismo)'
];

const sociology = [
  'Surgimento da Sociologia e Auguste Comte (Positivismo)',
  'Os Clássicos da Sociologia: Marx, Durkheim e Weber',
  'Sociologia do Trabalho e Transformações Produtivas',
  'Cultura Material e Imaterial',
  'Patrimônio Histórico e Cultural',
  'Movimentos Sociais e Direitos Humanos',
  'Foucault: Poder e Sociedade',
  'Bauman: Modernidade Líquida',
  'Internet, Redes Sociais e Sociedade da Informação'
];

const studys = [
  'math',
  'essay',
  'languages',
  'literatury',
  'chemistry',
  'physical',
  'biology',
  'history',
  'geograph',
  'philosophy',
  'sociology'
];

const arrSubjects = [
  math,
  essay,
  languages,
  literatury,
  chemistry,
  physical,
  biology,
  history,
  geograph,
  philosophy,
  sociology
];

const topicStudies = {};

studys.forEach((subject, index) => {
  topicStudies[subject] = arrSubjects[index];
});

export { studys, topicStudies };