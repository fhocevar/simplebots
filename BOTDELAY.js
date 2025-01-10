const axios = require('axios');

// Dados da API
const token = '930mocdbts9zze0r';
const instanceId = 'instance101815';

// Lista de prospectos
const prospectos = [ 
    {
        "nome": "Precito Atacado e Varejo de Bebidas",
        "telefone": "+5548988283309",
        "mensagem": "Olá Precito Atacado e Varejo de Bebidas, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Empório Codeguim - Queijaria e Massas Artesanais Florianópolis",
        "telefone": "+5548988331522",
        "mensagem": "Olá Empório Codeguim - Queijaria e Massas Artesanais Florianópolis, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Terra Astral Produtos Naturais",
        "telefone": "+5548988354454",
        "mensagem": "Olá Terra Astral Produtos Naturais, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Cristal Café",
        "telefone": "+5548988381891",
        "mensagem": "Olá Cristal Café, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Nut Store",
        "telefone": "+5548988406059",
        "mensagem": "Olá Nut Store, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Paradiso Mercato e Caffe",
        "telefone": "+5548988468302",
        "mensagem": "Olá Paradiso Mercato e Caffe, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Empório Santa Mônica",
        "telefone": "+5548988472425",
        "mensagem": "Olá Empório Santa Mônica, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Só açai - Morro das Pedras",
        "telefone": "+5548988713581",
        "mensagem": "Olá Só açai - Morro das Pedras, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Mais Natural",
        "telefone": "+5548991051528",
        "mensagem": "Olá Mais Natural, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Emporio Du vin",
        "telefone": "+5548991088817",
        "mensagem": "Olá Emporio Du vin, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Olho de Tigre Cristais",
        "telefone": "+5548991200004",
        "mensagem": "Olá Olho de Tigre Cristais, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Grãos da Ilha - Centro",
        "telefone": "+5548991211921",
        "mensagem": "Olá Grãos da Ilha - Centro, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Dolce Chiara Licocci",
        "telefone": "+5548991237883",
        "mensagem": "Olá Dolce Chiara Licocci, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Valvas Cozinha Intuitiva",
        "telefone": "+5548991308502",
        "mensagem": "Olá Valvas Cozinha Intuitiva, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Fluffy Kids & Teens Floripa",
        "telefone": "+5548991346464",
        "mensagem": "Olá Fluffy Kids & Teens Floripa, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Lux Produtos Orgânicos",
        "telefone": "+5548991414511",
        "mensagem": "Olá Lux Produtos Orgânicos, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Loja de Produtos Naturais IMBUR | Casa de Produtos Naturais Florianópolis, Suplementos & Castanhas",
        "telefone": "+5548991446378",
        "mensagem": "Olá Loja de Produtos Naturais IMBUR | Casa de Produtos Naturais Florianópolis, Suplementos & Castanhas, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Sintonia da Saúde Produtos Naturais",
        "telefone": "+5548991481881",
        "mensagem": "Olá Sintonia da Saúde Produtos Naturais, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Vivenda dos Grãos",
        "telefone": "+5548991518146",
        "mensagem": "Olá Vivenda dos Grãos, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Bruna Doces",
        "telefone": "+5548991611420",
        "mensagem": "Olá Bruna Doces, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Doces de Pelotas @dpelotasfloripa",
        "telefone": "+5548991625525",
        "mensagem": "Olá Doces de Pelotas @dpelotasfloripa, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Oakberry Multi Open Shopping",
        "telefone": "+5548991702539",
        "mensagem": "Olá Oakberry Multi Open Shopping, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "nosso orgânico",
        "telefone": "+5548991790033",
        "mensagem": "Olá nosso orgânico, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "🖼️Cristal Molduraria | Molduras para Decoração | Molduras para Quadros | Design em Molduras",
        "telefone": "+5548991804251",
        "mensagem": "Olá 🖼️Cristal Molduraria | Molduras para Decoração | Molduras para Quadros | Design em Molduras, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Quebra-Nozes Moda Infantil e Ballet",
        "telefone": "+5548991935135",
        "mensagem": "Olá Quebra-Nozes Moda Infantil e Ballet, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Muvuca Agroflorestal",
        "telefone": "+5548992032664",
        "mensagem": "Olá Muvuca Agroflorestal, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Cristal Store",
        "telefone": "+5548992050024",
        "mensagem": "Olá Cristal Store, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Estação Das Frutas",
        "telefone": "+5548992192226",
        "mensagem": "Olá Estação Das Frutas, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Flor do Grão",
        "telefone": "+5548992223328",
        "mensagem": "Olá Flor do Grão, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Com Caju",
        "telefone": "+5548996114859",
        "mensagem": "Olá Com Caju, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Cristal Locações",
        "telefone": "+5548996137625",
        "mensagem": "Olá Cristal Locações, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Empório dos Uniformes",
        "telefone": "+5548996153418",
        "mensagem": "Olá Empório dos Uniformes, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Cia das Fibras - Produtos Saudáveis",
        "telefone": "+5548996164079",
        "mensagem": "Olá Cia das Fibras - Produtos Saudáveis, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Vega Açaí",
        "telefone": "+5548996187570",
        "mensagem": "Olá Vega Açaí, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Vendo Verde Orgânicos",
        "telefone": "+5548996368899",
        "mensagem": "Olá Vendo Verde Orgânicos, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Nd.Basic Atacado",
        "telefone": "+5548996817769",
        "mensagem": "Olá Nd.Basic Atacado, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Feira de Orgânicos Santa Bárbara",
        "telefone": "+5548996883255",
        "mensagem": "Olá Feira de Orgânicos Santa Bárbara, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Armazém Grão Mestre - Naturais e Orgânicos",
        "telefone": "+5548996991586",
        "mensagem": "Olá Armazém Grão Mestre - Naturais e Orgânicos, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Kebab Faruk - Comida Árabe",
        "telefone": "+5548996994233",
        "mensagem": "Olá Kebab Faruk - Comida Árabe, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Jerivá Orgânicos",
        "telefone": "+5548998022051",
        "mensagem": "Olá Jerivá Orgânicos, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Floripa Emporio Gourmet",
        "telefone": "+5548998200080",
        "mensagem": "Olá Floripa Emporio Gourmet, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Naturais & Orgânicos",
        "telefone": "+5548998203936",
        "mensagem": "Olá Naturais & Orgânicos, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Natural Trindade - Produtos Naturais (antigo Empório Döll)",
        "telefone": "+5548998240504",
        "mensagem": "Olá Natural Trindade - Produtos Naturais (antigo Empório Döll), Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Instalação de Ar Condicionado em Florianópolis | Climatização Cristal - Manutenção- Higienização - Serviços de Rapel",
        "telefone": "+5548998289287",
        "mensagem": "Olá Instalação de Ar Condicionado em Florianópolis | Climatização Cristal - Manutenção- Higienização - Serviços de Rapel, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Cristal System Bio Desinsetização Florianópolis",
        "telefone": "+5548998509386",
        "mensagem": "Olá Cristal System Bio Desinsetização Florianópolis, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "YIHAO ATACADO",
        "telefone": "+5548998511262",
        "mensagem": "Olá YIHAO ATACADO, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Maxi Acessórios - Florianópolis - Atacado de Semi Joias",
        "telefone": "+5548998536136",
        "mensagem": "Olá Maxi Acessórios - Florianópolis - Atacado de Semi Joias, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Maria Nuts To Go - Ultracongelados saudaveis",
        "telefone": "+5548998681055",
        "mensagem": "Olá Maria Nuts To Go - Ultracongelados saudaveis, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "O BRANCO E SC ALIMENTOS E SUPLEMENTOS ALIMENTARES LTDA",
        "telefone": "+5548999168220",
        "mensagem": "Olá O BRANCO E SC ALIMENTOS E SUPLEMENTOS ALIMENTARES LTDA, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "CÍLIOS CAJU | LAGOA DA CONCEIÇÃO, FLORIANÓPOLIS",
        "telefone": "+5548999248960",
        "mensagem": "Olá CÍLIOS CAJU | LAGOA DA CONCEIÇÃO, FLORIANÓPOLIS, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "A Tenda Orgânicos e Agroecológicos",
        "telefone": "+5548999287056",
        "mensagem": "Olá A Tenda Orgânicos e Agroecológicos, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Folha",
        "telefone": "+5548999350401",
        "mensagem": "Olá Folha, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Flor de Maria Açaiteria",
        "telefone": "+5548999585951",
        "mensagem": "Olá Flor de Maria Açaiteria, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Seed Station",
        "telefone": "+5548999629631",
        "mensagem": "Olá Seed Station, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Feito da Fruta",
        "telefone": "+5548999655696",
        "mensagem": "Olá Feito da Fruta, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Maria Nuts Produtos Naturais e Alimentação Saudável",
        "telefone": "+5548999710658",
        "mensagem": "Olá Maria Nuts Produtos Naturais e Alimentação Saudável, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Grão & Pronto Healthy food",
        "telefone": "+5548999880169",
        "mensagem": "Olá Grão & Pronto Healthy food, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Longen e De Lorenzi Produtos Orgânicos",
        "telefone": "+5548999923640",
        "mensagem": "Olá Longen e De Lorenzi Produtos Orgânicos, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Empório Belém",
        "telefone": "+5551980340207",
        "mensagem": "Olá Empório Belém, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Banana Verde - Consumo Consciente",
        "telefone": "+5551980368181",
        "mensagem": "Olá Banana Verde - Consumo Consciente, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Empório Três Figueiras",
        "telefone": "+5551980525534",
        "mensagem": "Olá Empório Três Figueiras, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Sitio Semeando",
        "telefone": "+5551981101073",
        "mensagem": "Olá Sitio Semeando, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Empório Cé",
        "telefone": "+5551981126945",
        "mensagem": "Olá Empório Cé, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "GERAÇÃO SAÚDE",
        "telefone": "+5551981441481",
        "mensagem": "Olá GERAÇÃO SAÚDE, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Grãos Brazil",
        "telefone": "+5551981508805",
        "mensagem": "Olá Grãos Brazil, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Atacado J.D.L",
        "telefone": "+5551981752176",
        "mensagem": "Olá Atacado J.D.L, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Banca 12",
        "telefone": "+5551981822199",
        "mensagem": "Olá Banca 12, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Banca 12",
        "telefone": "+5551981827499",
        "mensagem": "Olá Banca 12, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Cristal System Bio Desinsetização Porto Alegre",
        "telefone": "+5551981904715",
        "mensagem": "Olá Cristal System Bio Desinsetização Porto Alegre, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "bananamachinada",
        "telefone": "+5551984136324",
        "mensagem": "Olá bananamachinada, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "OTICA CRISTAL",
        "telefone": "+5551984168529",
        "mensagem": "Olá OTICA CRISTAL, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Nozes Pecan D'Avila",
        "telefone": "+5551984558897",
        "mensagem": "Olá Nozes Pecan D'Avila, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Supermini Mercado",
        "telefone": "+5551985066030",
        "mensagem": "Olá Supermini Mercado, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Castanhas Produtos Naturais",
        "telefone": "+5551985906429",
        "mensagem": "Olá Castanhas Produtos Naturais, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Cristal Cell Poa",
        "telefone": "+5551989847483",
        "mensagem": "Olá Cristal Cell Poa, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Pescari Empório de Alimentos LTDA",
        "telefone": "+5551990099338",
        "mensagem": "Olá Pescari Empório de Alimentos LTDA, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Mercado Armazém Cristal (Bebidas. Salgados, Conveniência e tabacaria)",
        "telefone": "+5551991075754",
        "mensagem": "Olá Mercado Armazém Cristal (Bebidas. Salgados, Conveniência e tabacaria), Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Banana Sushi Delivery",
        "telefone": "+5551991323232",
        "mensagem": "Olá Banana Sushi Delivery, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "ZMS Produtos Naturais",
        "telefone": "+5551991477454",
        "mensagem": "Olá ZMS Produtos Naturais, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "La Tasse Empório",
        "telefone": "+5551991542622",
        "mensagem": "Olá La Tasse Empório, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Favo da Terra",
        "telefone": "+5551991771823",
        "mensagem": "Olá Favo da Terra, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Cristal Super Castanhas",
        "telefone": "+5551991797803",
        "mensagem": "Olá Cristal Super Castanhas, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Cristal telas mosquiteiras",
        "telefone": "+5551991883137",
        "mensagem": "Olá Cristal telas mosquiteiras, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Instituto Social do Cristal",
        "telefone": "+5551992261216",
        "mensagem": "Olá Instituto Social do Cristal, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Conqualitá Baskets and Gifts",
        "telefone": "+5551992405242",
        "mensagem": "Olá Conqualitá Baskets and Gifts, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Eduana Mercado da Confeitaria",
        "telefone": "+5551992533108",
        "mensagem": "Olá Eduana Mercado da Confeitaria, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Grãos de Energia",
        "telefone": "+5551992682443",
        "mensagem": "Olá Grãos de Energia, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Bananas Borges",
        "telefone": "+5551992764382",
        "mensagem": "Olá Bananas Borges, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Ana Banana Café e Bistrô",
        "telefone": "+5551992856996",
        "mensagem": "Olá Ana Banana Café e Bistrô, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Atacado Rica",
        "telefone": "+5551992887042",
        "mensagem": "Olá Atacado Rica, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Viverdi Loja Natural",
        "telefone": "+5551993582555",
        "mensagem": "Olá Viverdi Loja Natural, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Organic Way",
        "telefone": "+5551993587073",
        "mensagem": "Olá Organic Way, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "O Engenho - grãos e cereais",
        "telefone": "+5551994230736",
        "mensagem": "Olá O Engenho - grãos e cereais, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Empório Vila Santoni",
        "telefone": "+5551994269366",
        "mensagem": "Olá Empório Vila Santoni, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Pontal Shopping",
        "telefone": "+5551994429989",
        "mensagem": "Olá Pontal Shopping, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "2Marias Porto Alegre",
        "telefone": "+5551994552421",
        "mensagem": "Olá 2Marias Porto Alegre, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Labório Coffee Couture",
        "telefone": "+5551994617747",
        "mensagem": "Olá Labório Coffee Couture, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Banca 43 - Mercado Público",
        "telefone": "+5551994646662",
        "mensagem": "Olá Banca 43 - Mercado Público, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Natural Products Emporium",
        "telefone": "+5547999822040",
        "mensagem": "Olá Natural Products Emporium, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Nação Verde - Florianopolis 2 - Trindade",
        "telefone": "+5547999971937",
        "mensagem": "Olá Nação Verde - Florianopolis 2 - Trindade, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
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
