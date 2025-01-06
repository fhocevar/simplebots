const axios = require('axios');

// Dados da API
const token = '930mocdbts9zze0r';
const instanceId = 'instance101815';

// Lista de prospectos
const prospectos = [    
    {
        "nome": "Armazém 29 Queijos e Doces Campinas | Manteigas | Biscoitos Caseiros",
        "telefone": "+5519987122241",
        "mensagem": "Olá Armazém 29 Queijos e Doces Campinas | Manteigas | Biscoitos Caseiros, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Cristal Sorvetes",
        "telefone": "+5519987219373",
        "mensagem": "Olá Cristal Sorvetes, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Cristal Box e Vidros",
        "telefone": "+5519987620379",
        "mensagem": "Olá Cristal Box e Vidros, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Empório Sevilha - Cambuí",
        "telefone": "+5519988278700",
        "mensagem": "Olá Empório Sevilha - Cambuí, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Cristal Tera",
        "telefone": "+5519988861382",
        "mensagem": "Olá Cristal Tera, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Bar Tree",
        "telefone": "+5519989249942",
        "mensagem": "Olá Bar Tree, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Empório Taquaral",
        "telefone": "+5519989422490",
        "mensagem": "Olá Empório Taquaral, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Armazém Campineiro Adega, Empório e Tabacaria",
        "telefone": "+5519989512800",
        "mensagem": "Olá Armazém Campineiro Adega, Empório e Tabacaria, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Lima Emporium",
        "telefone": "+5519989516497",
        "mensagem": "Olá Lima Emporium, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Acrílicos VIP",
        "telefone": "+5519989886262",
        "mensagem": "Olá Acrílicos VIP, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Empório do Parque - Temperos | Chás | Castanhas | Farinhas | Sementes | Grãos",
        "telefone": "+5519991021059",
        "mensagem": "Olá Empório do Parque - Temperos | Chás | Castanhas | Farinhas | Sementes | Grãos, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "CESTA DE CAFÉ DA MANHÃ | QUEIJO MINAS | Campinas- SP | Minas da Gente Empório",
        "telefone": "+5519991273519",
        "mensagem": "Olá CESTA DE CAFÉ DA MANHÃ | QUEIJO MINAS | Campinas- SP | Minas da Gente Empório, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Armazém Barão Hortifruti",
        "telefone": "+5519991454916",
        "mensagem": "Olá Armazém Barão Hortifruti, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Empório Aracaju",
        "telefone": "+5519991790215",
        "mensagem": "Olá Empório Aracaju, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Atauê & Livres - Quitanda sem veneno",
        "telefone": "+5519992389933",
        "mensagem": "Olá Atauê & Livres - Quitanda sem veneno, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "M CASTANHA PRECATÓRIOS",
        "telefone": "+5519992558921",
        "mensagem": "Olá M CASTANHA PRECATÓRIOS, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Caju Moda Feminina",
        "telefone": "+5519992672734",
        "mensagem": "Olá Caju Moda Feminina, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Doces Caseiros Sônia",
        "telefone": "+5519993070009",
        "mensagem": "Olá Doces Caseiros Sônia, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Corpo Cristal",
        "telefone": "+5519993077441",
        "mensagem": "Olá Corpo Cristal, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Caju Flor Ateliê",
        "telefone": "+5519993285095",
        "mensagem": "Olá Caju Flor Ateliê, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Casa das Castanhas",
        "telefone": "+5519994096556",
        "mensagem": "Olá Casa das Castanhas, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Açaí e Nuts",
        "telefone": "+5519994274420",
        "mensagem": "Olá Açaí e Nuts, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Central de Alimentos Orgânicos - Rede Livres",
        "telefone": "+5519995443766",
        "mensagem": "Olá Central de Alimentos Orgânicos - Rede Livres, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Cantinho Coisa Nossa",
        "telefone": "+5519995511414",
        "mensagem": "Olá Cantinho Coisa Nossa, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Giga Atacado - Campinas",
        "telefone": "+5519995598490",
        "mensagem": "Olá Giga Atacado - Campinas, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Empório D Primeira Espetinhos e Restaurante | Almoço | Janta | Espetos | Delivery de Marmita Campinas",
        "telefone": "+5519997133853",
        "mensagem": "Olá Empório D Primeira Espetinhos e Restaurante | Almoço | Janta | Espetos | Delivery de Marmita Campinas, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Mania de Castanha",
        "telefone": "+5519997198993",
        "mensagem": "Olá Mania de Castanha, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Agroessência Orgânicos",
        "telefone": "+5519997469236",
        "mensagem": "Olá Agroessência Orgânicos, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Encantado Doces",
        "telefone": "+5519997561648",
        "mensagem": "Olá Encantado Doces, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Calusne Farms",
        "telefone": "+5519997741128",
        "mensagem": "Olá Calusne Farms, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "ESPAÇO À GRANEL CENTRO",
        "telefone": "+5519997915957",
        "mensagem": "Olá ESPAÇO À GRANEL CENTRO, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Real Empório",
        "telefone": "+5519998007715",
        "mensagem": "Olá Real Empório, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Camarada Camarão Parque D Pedro: Camarões, Peixes, Happy Hour, Restaurante, Campinas SP",
        "telefone": "+5519999158187",
        "mensagem": "Olá Camarada Camarão Parque D Pedro: Camarões, Peixes, Happy Hour, Restaurante, Campinas SP, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Green Mercado Natural",
        "telefone": "+5519999249440",
        "mensagem": "Olá Green Mercado Natural, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Lualma Produtos Naturais",
        "telefone": "+5519999538345",
        "mensagem": "Olá Lualma Produtos Naturais, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Armazém Nativa",
        "telefone": "+5519999746403",
        "mensagem": "Olá Armazém Nativa, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "AFUÁ GRÃOS",
        "telefone": "+5519999758027",
        "mensagem": "Olá AFUÁ GRÃOS, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Empório Ciocci",
        "telefone": "+5519999811369",
        "mensagem": "Olá Empório Ciocci, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Didanda | Moda Feminina | Atacado e Varejo | Plus Size",
        "telefone": "+5521964691396",
        "mensagem": "Olá Didanda | Moda Feminina | Atacado e Varejo | Plus Size, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Distribuidora Campo Grande Atacadista",
        "telefone": "+5521970098551",
        "mensagem": "Olá Distribuidora Campo Grande Atacadista, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Polimento Cristalizado",
        "telefone": "+5521970321664",
        "mensagem": "Olá Polimento Cristalizado, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Banana Real",
        "telefone": "+5521970348740",
        "mensagem": "Olá Banana Real, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "MARA CASTANHA",
        "telefone": "+5521970409268",
        "mensagem": "Olá MARA CASTANHA, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Bana rio Minas 2007",
        "telefone": "+5521972585223",
        "mensagem": "Olá Bana rio Minas 2007, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Empório Vírgula",
        "telefone": "+5521972947173",
        "mensagem": "Olá Empório Vírgula, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Orgânicos da Fátima",
        "telefone": "+5521974647945",
        "mensagem": "Olá Orgânicos da Fátima, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "FRUTOS DO BRASIL",
        "telefone": "+5521977539426",
        "mensagem": "Olá FRUTOS DO BRASIL, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Caminho Bem Estar, Castanhas, Ervas, Chás, Temperos, Suplementos, Oleaginosos, Sementes e Grãos em Pedra de Guaratiba",
        "telefone": "+5521980397859",
        "mensagem": "Olá Caminho Bem Estar, Castanhas, Ervas, Chás, Temperos, Suplementos, Oleaginosos, Sementes e Grãos em Pedra de Guaratiba, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Orgânicos do Rio",
        "telefone": "+5521980868778",
        "mensagem": "Olá Orgânicos do Rio, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Empório Rio São Paulo",
        "telefone": "+5521980986667",
        "mensagem": "Olá Empório Rio São Paulo, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Camarão em Casa",
        "telefone": "+5521982706200",
        "mensagem": "Olá Camarão em Casa, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Banana Carioca",
        "telefone": "+5521983772936",
        "mensagem": "Olá Banana Carioca, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Any Atacado e Varejo",
        "telefone": "+5521983814348",
        "mensagem": "Olá Any Atacado e Varejo, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Caju Salgados",
        "telefone": "+5521984783324",
        "mensagem": "Olá Caju Salgados, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Armazém Nordestino - Castanhas de Caju e Produtos Nordestinos",
        "telefone": "+5521985350999",
        "mensagem": "Olá Armazém Nordestino - Castanhas de Caju e Produtos Nordestinos, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Cristal ME.",
        "telefone": "+5521987063653",
        "mensagem": "Olá Cristal ME., Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Sitio Santa Clara Orgânicos",
        "telefone": "+5521987670727",
        "mensagem": "Olá Sitio Santa Clara Orgânicos, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Restaurante Banana Beer",
        "telefone": "+5521991716175",
        "mensagem": "Olá Restaurante Banana Beer, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Mercado Freitas",
        "telefone": "+5519984507535",
        "mensagem": "Olá Mercado Freitas, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
        
];

// Função para enviar mensagens para todos os prospectos
prospectos.forEach((prospecto, index) => {
    // Gerar um atraso aleatório entre 5 e 20 segundos
    const delay = Math.floor(Math.random() * (30000 - 7000 + 1)) + 7000;

    // Definir o envio com atraso usando setTimeout
    setTimeout(() => {
        // Dados da mensagem
        const data = {
            to: prospecto.telefone,  // Número do destinatário
            body: prospecto.mensagem,  // Conteúdo da mensagem
        };

        // Enviar mensagem via UltraMsg API
        axios.post(`https://api.ultramsg.com/${instanceId}/messages/chat?token=${token}`, data)
            .then(response => {
                console.log(`Mensagem enviada com sucesso para ${prospecto.nome}:`, response.data);
            })
            .catch(error => {
                console.error(`Erro ao enviar mensagem para ${prospecto.nome}:`, error.response ? error.response.data : error.message);
            });
    }, delay * index);  // O tempo de atraso será escalado para cada prospecto (de 5 a 20 segundos)
});
