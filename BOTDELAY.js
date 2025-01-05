const axios = require('axios');

// Dados da API
const token = '930mocdbts9zze0r';
const instanceId = 'instance101815';

// Lista de prospectos
const prospectos = [    
    {
        "nome": "ROSITA BOTICA",
        "telefone": "+5511962500603",
        "mensagem": "Olá ROSITA BOTICA, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Deposit Campo Grande Construction Materials",
        "telefone": "+5511973092104",
        "mensagem": "Olá Deposit Campo Grande Construction Materials, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Além dos Grãos",
        "telefone": "+5511974033856",
        "mensagem": "Olá Além dos Grãos, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Empório D' Fibra",
        "telefone": "+5511974288545",
        "mensagem": "Olá Empório D' Fibra, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Nanica Augusta",
        "telefone": "+5511974459812",
        "mensagem": "Olá Nanica Augusta, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "DS NUTRITION",
        "telefone": "+5511974590514",
        "mensagem": "Olá DS NUTRITION, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Emporio33 restaurante e lanchonete ltda",
        "telefone": "+5511975051875",
        "mensagem": "Olá Emporio33 restaurante e lanchonete ltda, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Sampa Atacado - Av do Estado",
        "telefone": "+5511975828745",
        "mensagem": "Olá Sampa Atacado - Av do Estado, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Empório Vila Grão",
        "telefone": "+5511976169334",
        "mensagem": "Olá Empório Vila Grão, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Brazilian Nuts - Açaí, sucos e castanhas - Vila Madalena, São Paulo",
        "telefone": "+5511976310528",
        "mensagem": "Olá Brazilian Nuts - Açaí, sucos e castanhas - Vila Madalena, São Paulo, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Cesta Orgânica",
        "telefone": "+5511976684267",
        "mensagem": "Olá Cesta Orgânica, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Empório Santa Castanha",
        "telefone": "+5511977014571",
        "mensagem": "Olá Empório Santa Castanha, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Land of Spices and Grains Ltda.",
        "telefone": "+5511977502903",
        "mensagem": "Olá Land of Spices and Grains Ltda., Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Empório Naturaleve",
        "telefone": "+5511977760836",
        "mensagem": "Olá Empório Naturaleve, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Empório Natural Brasil",
        "telefone": "+5511977996606",
        "mensagem": "Olá Empório Natural Brasil, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Bem Leve Naturais",
        "telefone": "+5511978362473",
        "mensagem": "Olá Bem Leve Naturais, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "MERCADO IMPERATRIZ",
        "telefone": "+5511978972397",
        "mensagem": "Olá MERCADO IMPERATRIZ, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Prime Atacado",
        "telefone": "+5511979572527",
        "mensagem": "Olá Prime Atacado, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Hortifruti",
        "telefone": "+5511979757301",
        "mensagem": "Olá Hortifruti, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Delícias Convê Confeitaria Artesanal",
        "telefone": "+5511979766919",
        "mensagem": "Olá Delícias Convê Confeitaria Artesanal, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Zion Art's Personalizados",
        "telefone": "+5511979942853",
        "mensagem": "Olá Zion Art's Personalizados, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Preciosa moda infantil",
        "telefone": "+5511980005895",
        "mensagem": "Olá Preciosa moda infantil, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Mercado salvador",
        "telefone": "+5511980451927",
        "mensagem": "Olá Mercado salvador, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "NIKATO ATACADISTA",
        "telefone": "+5511980908135",
        "mensagem": "Olá NIKATO ATACADISTA, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Empório Terrinha",
        "telefone": "+5511981107032",
        "mensagem": "Olá Empório Terrinha, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Oakberry - Parque Fracalanza",
        "telefone": "+5511981557395",
        "mensagem": "Olá Oakberry - Parque Fracalanza, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Emporium Paradise",
        "telefone": "+5511982632915",
        "mensagem": "Olá Emporium Paradise, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Chá | Casa do Norte | Produtos e Alimentos Naturais | Empório Cozinha Verde | Em Diadema",
        "telefone": "+5511982873218",
        "mensagem": "Olá Chá | Casa do Norte | Produtos e Alimentos Naturais | Empório Cozinha Verde | Em Diadema, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Veg Food Life",
        "telefone": "+5511982917708",
        "mensagem": "Olá Veg Food Life, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Orgânicos no Ponto",
        "telefone": "+5511983668690",
        "mensagem": "Olá Orgânicos no Ponto, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "ponto de coleta shoppe express mercadinho e padaria do Gonzaga",
        "telefone": "+5511983842360",
        "mensagem": "Olá ponto de coleta shoppe express mercadinho e padaria do Gonzaga, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Emporium do Portuga",
        "telefone": "+5511984325562",
        "mensagem": "Olá Emporium do Portuga, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "SG Confeitaria",
        "telefone": "+5511984426354",
        "mensagem": "Olá SG Confeitaria, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "NOZ MACADÂMIA",
        "telefone": "+5511984664266",
        "mensagem": "Olá NOZ MACADÂMIA, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Ideia Natural - Consciente por Natureza",
        "telefone": "+5511985204930",
        "mensagem": "Olá Ideia Natural - Consciente por Natureza, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Emporio Santa Filomena",
        "telefone": "+5511985414002",
        "mensagem": "Olá Emporio Santa Filomena, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Empório Magna Vita",
        "telefone": "+5511987212131",
        "mensagem": "Olá Empório Magna Vita, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "SG Bolos e Doces",
        "telefone": "+5511987624467",
        "mensagem": "Olá SG Bolos e Doces, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Semente & Raiz",
        "telefone": "+5511987879424",
        "mensagem": "Olá Semente & Raiz, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Cerealista da Vila",
        "telefone": "+5511988468000",
        "mensagem": "Olá Cerealista da Vila, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Atacado Barato Varejo",
        "telefone": "+5511988501743",
        "mensagem": "Olá Atacado Barato Varejo, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Nippon Center",
        "telefone": "+5511988622762",
        "mensagem": "Olá Nippon Center, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Pastelaria do Porto",
        "telefone": "+5511988654746",
        "mensagem": "Olá Pastelaria do Porto, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Della Terra Atacado e Varejo de Produtos Naturais",
        "telefone": "+5511989012018",
        "mensagem": "Olá Della Terra Atacado e Varejo de Produtos Naturais, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Vem da Horta - São Paulo | Orgânicos frescos direto da fonte",
        "telefone": "+5511989428080",
        "mensagem": "Olá Vem da Horta - São Paulo | Orgânicos frescos direto da fonte, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Mercado Vip Brasil",
        "telefone": "+5511989573862",
        "mensagem": "Olá Mercado Vip Brasil, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Bora lá imports",
        "telefone": "+5511989747552",
        "mensagem": "Olá Bora lá imports, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Imperatriz Store",
        "telefone": "+5511989967533",
        "mensagem": "Olá Imperatriz Store, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Rancho Nordestino - Baião de Dois & Cuscuz",
        "telefone": "+5511990204842",
        "mensagem": "Olá Rancho Nordestino - Baião de Dois & Cuscuz, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Empório São Pedro",
        "telefone": "+5511991907576",
        "mensagem": "Olá Empório São Pedro, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Coco Bambu Conceito São Bernardo do Campo",
        "telefone": "+5511993067272",
        "mensagem": "Olá Coco Bambu Conceito São Bernardo do Campo, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Empório MF",
        "telefone": "+5511993082699",
        "mensagem": "Olá Empório MF, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Mini mercado e padaria marques ltda",
        "telefone": "+5511993282765",
        "mensagem": "Olá Mini mercado e padaria marques ltda, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Empório Magna Vita - Loja de Produtos Naturais",
        "telefone": "+5511993373475",
        "mensagem": "Olá Empório Magna Vita - Loja de Produtos Naturais, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Mercado Pérola",
        "telefone": "+5511993906602",
        "mensagem": "Olá Mercado Pérola, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Atacadão do Natural",
        "telefone": "+5511994000575",
        "mensagem": "Olá Atacadão do Natural, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Atacadão do Natural Guarulhos I",
        "telefone": "+5511994000575",
        "mensagem": "Olá Atacadão do Natural Guarulhos I, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Açaí da Barra - Praça da Árvore",
        "telefone": "+5511994477462",
        "mensagem": "Olá Açaí da Barra - Praça da Árvore, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Spazio Mercado Saudável",
        "telefone": "+5511996010071",
        "mensagem": "Olá Spazio Mercado Saudável, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Noz do Brasil - Produtos Naturais - Vila Prudente SP",
        "telefone": "+5511996238523",
        "mensagem": "Olá Noz do Brasil - Produtos Naturais - Vila Prudente SP, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Empório Ponto do Grão de Produtos Naturais",
        "telefone": "+5511996364103",
        "mensagem": "Olá Empório Ponto do Grão de Produtos Naturais, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Fitó",
        "telefone": "+5511996742745",
        "mensagem": "Olá Fitó, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Sabor Saúde (Produtos Naturais)",
        "telefone": "+5511998227005",
        "mensagem": "Olá Sabor Saúde (Produtos Naturais), Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "RB Atacadista",
        "telefone": "+5511998229427",
        "mensagem": "Olá RB Atacadista, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Empório Rufino - Produtos Naturais",
        "telefone": "+5511999927419",
        "mensagem": "Olá Empório Rufino - Produtos Naturais, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Supermercado São Gonçalo",
        "telefone": "1231254400",
        "mensagem": "Olá Supermercado São Gonçalo, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Mercado do Gordão",
        "telefone": "+5512982028462",
        "mensagem": "Olá Mercado do Gordão, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Noz Colab",
        "telefone": "+5512983172624",
        "mensagem": "Olá Noz Colab, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "MINIMART",
        "telefone": "+5512991612714",
        "mensagem": "Olá MINIMART, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Supermercado Varandas • Campo Grande • Santos",
        "telefone": "1321025153",
        "mensagem": "Olá Supermercado Varandas • Campo Grande • Santos, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Empório Gouveia",
        "telefone": "1332255670",
        "mensagem": "Olá Empório Gouveia, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Empório Casa Porto",
        "telefone": "1333450662",
        "mensagem": "Olá Empório Casa Porto, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Espaço Nutricia produtos naturais",
        "telefone": "1335660705",
        "mensagem": "Olá Espaço Nutricia produtos naturais, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Pacocao Atacado e Comércio Varejista De",
        "telefone": "1335666067",
        "mensagem": "Olá Pacocao Atacado e Comércio Varejista De, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Rede Mini Preço Supermercados",
        "telefone": "1335769191",
        "mensagem": "Olá Rede Mini Preço Supermercados, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Rede Fácil",
        "telefone": "+5513974068105",
        "mensagem": "Olá Rede Fácil, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "ATACADO BRASIL",
        "telefone": "+5513974135952",
        "mensagem": "Olá ATACADO BRASIL, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Marmita fit congelada - marmikelly",
        "telefone": "+5513974263480",
        "mensagem": "Olá Marmita fit congelada - marmikelly, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Rei do Atacado",
        "telefone": "+5513991180918",
        "mensagem": "Olá Rei do Atacado, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Hortifruti da esquina",
        "telefone": "+5513991311887",
        "mensagem": "Olá Hortifruti da esquina, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Mini Mercado Bem Barato",
        "telefone": "+5513997047464",
        "mensagem": "Olá Mini Mercado Bem Barato, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Bananas Alves",
        "telefone": "+5513997459496",
        "mensagem": "Olá Bananas Alves, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Empório Rio Branco",
        "telefone": "+5513997500876",
        "mensagem": "Olá Empório Rio Branco, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Tuca - Açaí e Naturais",
        "telefone": "+5513997820123",
        "mensagem": "Olá Tuca - Açaí e Naturais, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Atacadão Eletrônicos",
        "telefone": "+5516982569392",
        "mensagem": "Olá Atacadão Eletrônicos, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Castanhas do Brasil",
        "telefone": "+5518981651963",
        "mensagem": "Olá Castanhas do Brasil, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Get And Go - Minimercados em Condomínios",
        "telefone": "+5519971216136",
        "mensagem": "Olá Get And Go - Minimercados em Condomínios, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Instituto Candombá",
        "telefone": "+5519971232593",
        "mensagem": "Olá Instituto Candombá, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "GIGI TEMPEROS E ERVAS",
        "telefone": "+5519971444551",
        "mensagem": "Olá GIGI TEMPEROS E ERVAS, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Flor de Caju",
        "telefone": "+5519971605183",
        "mensagem": "Olá Flor de Caju, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Pastel Campinas",
        "telefone": "+5519981069540",
        "mensagem": "Olá Pastel Campinas, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Sabor Brasileiro Drageados",
        "telefone": "+5519982044895",
        "mensagem": "Olá Sabor Brasileiro Drageados, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Quero Grão Produtos Naturais- Ervas -temperos -castanhas -sementes -grãos - Jardim Novo Campos Elisios",
        "telefone": "+5519982482724",
        "mensagem": "Olá Quero Grão Produtos Naturais- Ervas -temperos -castanhas -sementes -grãos - Jardim Novo Campos Elisios, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Cia da Castanha",
        "telefone": "+5519983121711",
        "mensagem": "Olá Cia da Castanha, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Sabor da Natureza Produtos Orgânicos",
        "telefone": "+5519983301717",
        "mensagem": "Olá Sabor da Natureza Produtos Orgânicos, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Empório Alme Campinas",
        "telefone": "+5519983603581",
        "mensagem": "Olá Empório Alme Campinas, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "ROBSON ATACADO",
        "telefone": "+5519984304881",
        "mensagem": "Olá ROBSON ATACADO, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Faz Granola",
        "telefone": "+5519984355095",
        "mensagem": "Olá Faz Granola, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Mercado Freitas",
        "telefone": "+5519984507535",
        "mensagem": "Olá Mercado Freitas, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Emporio Sabor Brasil",
        "telefone": "+5519984583701",
        "mensagem": "Olá Emporio Sabor Brasil, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
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
