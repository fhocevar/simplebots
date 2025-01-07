const axios = require('axios');

// Dados da API
const token = '930mocdbts9zze0r';
const instanceId = 'instance101815';

// Lista de prospectos
const prospectos = [     
   
    {
        "nome": "Rapa do Tacho doces artesanais",
        "telefone": "+5531972398296",
        "mensagem": "Olá Rapa do Tacho doces artesanais, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },         
    {
        "nome": "Café com Letras",
        "telefone": "+5531984244285",
        "mensagem": "Olá Café com Letras, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },           
    {
        "nome": "Empório Du Carmo Cidade Jardim (Presentes e cestas)",
        "telefone": "+5531988070696",
        "mensagem": "Olá Empório Du Carmo Cidade Jardim (Presentes e cestas), Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Açaí CS - Califórnia",
        "telefone": "+5531989081997",
        "mensagem": "Olá Açaí CS - Califórnia, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Narjes Sabores - Comida Árabe",
        "telefone": "+5531989573014",
        "mensagem": "Olá Narjes Sabores - Comida Árabe, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Bh Camarões",
        "telefone": "+5531989729945",
        "mensagem": "Olá Bh Camarões, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Castanharia Central",
        "telefone": "+5531990633216",
        "mensagem": "Olá Castanharia Central, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Oakberry Barreiro - Açaí Delivery - ifood",
        "telefone": "+5531991126027",
        "mensagem": "Olá Oakberry Barreiro - Açaí Delivery - ifood, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Orgânico do Chico",
        "telefone": "+5531991257744",
        "mensagem": "Olá Orgânico do Chico, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Emporium - Seu a granel preferido",
        "telefone": "+5531992333743",
        "mensagem": "Olá Emporium - Seu a granel preferido, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Amontada Castanhas BH",
        "telefone": "+5531992424167",
        "mensagem": "Olá Amontada Castanhas BH, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Caju Brasil",
        "telefone": "+5531992760393",
        "mensagem": "Olá Caju Brasil, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Doces Palhas",
        "telefone": "+5531992869201",
        "mensagem": "Olá Doces Palhas, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Fradhe Orgânicos",
        "telefone": "+5531993450257",
        "mensagem": "Olá Fradhe Orgânicos, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Doce Experiência",
        "telefone": "+5531993487689",
        "mensagem": "Olá Doce Experiência, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Space Organic BH",
        "telefone": "+5531993969000",
        "mensagem": "Olá Space Organic BH, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Banana Chips - Moda Feminina Infanto Juvenil",
        "telefone": "+5531994041736",
        "mensagem": "Olá Banana Chips - Moda Feminina Infanto Juvenil, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "EMPORIO VON RONDON",
        "telefone": "+5531994489797",
        "mensagem": "Olá EMPORIO VON RONDON, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Típico Ceará",
        "telefone": "+5531994672882",
        "mensagem": "Olá Típico Ceará, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "De Cristal - Sapatos femininos anti idade",
        "telefone": "+5531994994789",
        "mensagem": "Olá De Cristal - Sapatos femininos anti idade, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "SAMMA - LANCHES SEM GLÚTEN, LEITE E SOJA- BH",
        "telefone": "+5531995922659",
        "mensagem": "Olá SAMMA - LANCHES SEM GLÚTEN, LEITE E SOJA- BH, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Vovó Eva Orgânicos",
        "telefone": "+5531996436337",
        "mensagem": "Olá Vovó Eva Orgânicos, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Amêndoa Saúde a Granel",
        "telefone": "+5531996911736",
        "mensagem": "Olá Amêndoa Saúde a Granel, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Empório Paraíso do Granel | Produtos Naturais | Castanhas",
        "telefone": "+5531997266402",
        "mensagem": "Olá Empório Paraíso do Granel | Produtos Naturais | Castanhas, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Quebra Nozes Atelier de Doces",
        "telefone": "+5531997420387",
        "mensagem": "Olá Quebra Nozes Atelier de Doces, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Conceito Natural",
        "telefone": "+5531997948335",
        "mensagem": "Olá Conceito Natural, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Multiverso Atacado",
        "telefone": "+5531997950165",
        "mensagem": "Olá Multiverso Atacado, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Sr Caju",
        "telefone": "+5531998003201",
        "mensagem": "Olá Sr Caju, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Cia shrimp",
        "telefone": "+5531998440771",
        "mensagem": "Olá Cia shrimp, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Royal Empório",
        "telefone": "+5531998520415",
        "mensagem": "Olá Royal Empório, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "ROTA DO SABOR EMPORIO",
        "telefone": "+5531998926506",
        "mensagem": "Olá ROTA DO SABOR EMPORIO, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Macadâmia Moda Feminina",
        "telefone": "+5531998990098",
        "mensagem": "Olá Macadâmia Moda Feminina, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Cristal Led BH",
        "telefone": "+5531999234284",
        "mensagem": "Olá Cristal Led BH, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Relicarium Cristal (Loja Colaborativa Amor de Mãe)",
        "telefone": "+5531999350549",
        "mensagem": "Olá Relicarium Cristal (Loja Colaborativa Amor de Mãe), Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Relicarium Cristal Showroom Anjo e Cia",
        "telefone": "+5531999350549",
        "mensagem": "Olá Relicarium Cristal Showroom Anjo e Cia, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Arreda pra Cá Empório!",
        "telefone": "+5531999558044",
        "mensagem": "Olá Arreda pra Cá Empório!, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Macadame - Roupa feminina",
        "telefone": "+5531999597522",
        "mensagem": "Olá Macadame - Roupa feminina, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Castanha du Baru",
        "telefone": "+5531999836261",
        "mensagem": "Olá Castanha du Baru, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Vibração Vegetal flores secas e produtos naturais",
        "telefone": "+5534933009870",
        "mensagem": "Olá Vibração Vegetal flores secas e produtos naturais, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Nutrição Inteligente, Castanha, Temperos, Suplementos, fitoterápicos, Sementes e Grãos em Uberlândia em Karaiba",
        "telefone": "+5534984097947",
        "mensagem": "Olá Nutrição Inteligente, Castanha, Temperos, Suplementos, fitoterápicos, Sementes e Grãos em Uberlândia em Karaiba, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Hortaliças Gerais",
        "telefone": "+5534984100416",
        "mensagem": "Olá Hortaliças Gerais, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Malu Gourmet",
        "telefone": "+5534984260564",
        "mensagem": "Olá Malu Gourmet, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Nação Verde Uberlandia",
        "telefone": "+5534984457952",
        "mensagem": "Olá Nação Verde Uberlandia, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Beleza e Bem-estar produtos Doterra",
        "telefone": "+5534987197323",
        "mensagem": "Olá Beleza e Bem-estar produtos Doterra, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Funilaria Autos Car Polimento Cristalizado",
        "telefone": "+5534988161543",
        "mensagem": "Olá Funilaria Autos Car Polimento Cristalizado, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "ZD Mix Distribuidora de Utilidades Domesticas-Uberaba",
        "telefone": "+5534988350418",
        "mensagem": "Olá ZD Mix Distribuidora de Utilidades Domesticas-Uberaba, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Cosméticos e perfumaria Daniela Alves Consultora.",
        "telefone": "+5534988429912",
        "mensagem": "Olá Cosméticos e perfumaria Daniela Alves Consultora., Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Belíssima Frios/TÁBUAS DE FRIOS",
        "telefone": "+5534988534684",
        "mensagem": "Olá Belíssima Frios/TÁBUAS DE FRIOS, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Empório do Queijo",
        "telefone": "+5534988980486",
        "mensagem": "Olá Empório do Queijo, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Bio Orgânicos",
        "telefone": "+5534991104392",
        "mensagem": "Olá Bio Orgânicos, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "EMPÓRIO FORMAGGIO ROMMA MALL",
        "telefone": "+5534991305069",
        "mensagem": "Olá EMPÓRIO FORMAGGIO ROMMA MALL, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Empório Santa Marta",
        "telefone": "+5534991410236",
        "mensagem": "Olá Empório Santa Marta, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "EMPORIO QUATRO CASTANHAS",
        "telefone": "+5534991434948",
        "mensagem": "Olá EMPORIO QUATRO CASTANHAS, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Grãos do Praia | Produtos Naturais & Suplementos Alimentares.",
        "telefone": "+5534991647333",
        "mensagem": "Olá Grãos do Praia | Produtos Naturais & Suplementos Alimentares., Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Dona Alface - Alimentação Saudável",
        "telefone": "+5534991718917",
        "mensagem": "Olá Dona Alface - Alimentação Saudável, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Empório das Castanhas - Mercado de Aperitivos",
        "telefone": "+5534991740089",
        "mensagem": "Olá Empório das Castanhas - Mercado de Aperitivos, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Casa do Norte - Coisas Típicas do Nordeste",
        "telefone": "+5534991966352",
        "mensagem": "Olá Casa do Norte - Coisas Típicas do Nordeste, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Empório Araújo",
        "telefone": "+5534992096481",
        "mensagem": "Olá Empório Araújo, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Junior Distribuidora",
        "telefone": "+5534992100094",
        "mensagem": "Olá Junior Distribuidora, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Empório alto brasil",
        "telefone": "+5534992110212",
        "mensagem": "Olá Empório alto brasil, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Pirulitos de cristal",
        "telefone": "+5534992131236",
        "mensagem": "Olá Pirulitos de cristal, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Empório Comalta",
        "telefone": "+5534992160135",
        "mensagem": "Olá Empório Comalta, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "O Atacadão Dos Salgados Loja 1",
        "telefone": "+5534992166079",
        "mensagem": "Olá O Atacadão Dos Salgados Loja 1, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Castanhas Dona Maria",
        "telefone": "+5534992701479",
        "mensagem": "Olá Castanhas Dona Maria, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Atacadão das Castanhas - Unidade Carrefour",
        "telefone": "+5534992811986",
        "mensagem": "Olá Atacadão das Castanhas - Unidade Carrefour, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Atacadão das Castanhas",
        "telefone": "+5534992954771",
        "mensagem": "Olá Atacadão das Castanhas, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Frutos do Cerrado - Luizote",
        "telefone": "+5534992969855",
        "mensagem": "Olá Frutos do Cerrado - Luizote, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "UaiLoha Poke",
        "telefone": "+5534993058466",
        "mensagem": "Olá UaiLoha Poke, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Empório da Cerveja",
        "telefone": "+5534996310523",
        "mensagem": "Olá Empório da Cerveja, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Crystal Polimentos",
        "telefone": "+5534996327140",
        "mensagem": "Olá Crystal Polimentos, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Vale das Ervas - Produtos Naturais",
        "telefone": "+5534996333903",
        "mensagem": "Olá Vale das Ervas - Produtos Naturais, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Helena Quitandas E Lanches",
        "telefone": "+5534996428439",
        "mensagem": "Olá Helena Quitandas E Lanches, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Udi Flora - Natural Products",
        "telefone": "+5534996509998",
        "mensagem": "Olá Udi Flora - Natural Products, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Frutage",
        "telefone": "+5534996537910",
        "mensagem": "Olá Frutage, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "EMPÓRIO SANTA EFIGÊNIA",
        "telefone": "+5534996583411",
        "mensagem": "Olá EMPÓRIO SANTA EFIGÊNIA, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Sacolão Dia a Dia",
        "telefone": "+5534996622916",
        "mensagem": "Olá Sacolão Dia a Dia, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Empório Mineiro",
        "telefone": "+5534996682863",
        "mensagem": "Olá Empório Mineiro, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "CESTA DE CHOCOLATE",
        "telefone": "+5534996770868",
        "mensagem": "Olá CESTA DE CHOCOLATE, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Rei das Castanhas - Und. Uberlândia Shopping",
        "telefone": "+5534996780100",
        "mensagem": "Olá Rei das Castanhas - Und. Uberlândia Shopping, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Aloe Vera Forever Company Uberaba",
        "telefone": "+5534996792116",
        "mensagem": "Olá Aloe Vera Forever Company Uberaba, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Açai + Uberaba",
        "telefone": "+5534996800446",
        "mensagem": "Olá Açai + Uberaba, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Grãos do Praia - Unidade Copacabana | Produtos Naturais & Suplementos Alimentares.",
        "telefone": "+5534996970040",
        "mensagem": "Olá Grãos do Praia - Unidade Copacabana | Produtos Naturais & Suplementos Alimentares., Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Lojas G Uberaba",
        "telefone": "+5534997235276",
        "mensagem": "Olá Lojas G Uberaba, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Chácara Portal da Cristal",
        "telefone": "+5534997682568",
        "mensagem": "Olá Chácara Portal da Cristal, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Cristal Cereais",
        "telefone": "+5534997949265",
        "mensagem": "Olá Cristal Cereais, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Kold snow açaí",
        "telefone": "+5534997996155",
        "mensagem": "Olá Kold snow açaí, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Cristal Garden",
        "telefone": "+5534998018025",
        "mensagem": "Olá Cristal Garden, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "La Figueira",
        "telefone": "+5534998380809",
        "mensagem": "Olá La Figueira, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Empório Choperia e Petiscaria",
        "telefone": "+5534998593020",
        "mensagem": "Olá Empório Choperia e Petiscaria, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Orgânicos Pachamama",
        "telefone": "+5534998615151",
        "mensagem": "Olá Orgânicos Pachamama, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Atacadão da Luva",
        "telefone": "+5534998621200",
        "mensagem": "Olá Atacadão da Luva, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Pro Bono Produtos Naturais",
        "telefone": "+5534998621516",
        "mensagem": "Olá Pro Bono Produtos Naturais, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Botelho Rotisseria",
        "telefone": "+5534998641100",
        "mensagem": "Olá Botelho Rotisseria, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Sabor da Polpa | Varejo e Atacado",
        "telefone": "+5534998662042",
        "mensagem": "Olá Sabor da Polpa | Varejo e Atacado, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Natugrãosudi Produtos Naturais",
        "telefone": "+5534998668483",
        "mensagem": "Olá Natugrãosudi Produtos Naturais, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "D'hama Armazém",
        "telefone": "+5534998785330",
        "mensagem": "Olá D'hama Armazém, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Sabor da Fruta",
        "telefone": "+5534998869118",
        "mensagem": "Olá Sabor da Fruta, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "ABC Atacado e Varejo - Av. Vasconcelos",
        "telefone": "+5534999133165",
        "mensagem": "Olá ABC Atacado e Varejo - Av. Vasconcelos, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "CASA EUMÊNIDES",
        "telefone": "+5534999222010",
        "mensagem": "Olá CASA EUMÊNIDES, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Castanha Rural",
        "telefone": "+5534999252536",
        "mensagem": "Olá Castanha Rural, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Saborata - Paes Artesanais, Bolos e Antepastos",
        "telefone": "+5534999292625",
        "mensagem": "Olá Saborata - Paes Artesanais, Bolos e Antepastos, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "CAMALEOA BOULANGERIE",
        "telefone": "+5534999381215",
        "mensagem": "Olá CAMALEOA BOULANGERIE, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Empório Carirí",
        "telefone": "+5534999387460",
        "mensagem": "Olá Empório Carirí, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
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
