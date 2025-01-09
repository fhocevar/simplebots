const axios = require('axios');

// Dados da API
const token = '930mocdbts9zze0r';
const instanceId = 'instance101815';

// Lista de prospectos
const prospectos = [ 
    {
        "nome": "Cristal Blond",
        "telefone": "+5544998879337",
        "mensagem": "Olá Cristal Blond, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "palmeriano brasil",
        "telefone": "+5544999221333",
        "mensagem": "Olá palmeriano brasil, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Armazém dos Alimentos Orgânicos & Agroecológicos - Naturinga",
        "telefone": "+5544999443183",
        "mensagem": "Olá Armazém dos Alimentos Orgânicos & Agroecológicos - Naturinga, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Temperos & Saúde Produtos Naturais",
        "telefone": "+5544999500357",
        "mensagem": "Olá Temperos & Saúde Produtos Naturais, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Empório Sorrechi",
        "telefone": "+5544999509182",
        "mensagem": "Olá Empório Sorrechi, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Maringá Cristais e Óleos Essenciais ​ ​ Místicos , Esotéricos e Religiosos",
        "telefone": "+5544999583102",
        "mensagem": "Olá Maringá Cristais e Óleos Essenciais ​ ​ Místicos , Esotéricos e Religiosos, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Caju - Vestuário Feminino",
        "telefone": "+5544999627345",
        "mensagem": "Olá Caju - Vestuário Feminino, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Armazém Da Nutri",
        "telefone": "+5544999631757",
        "mensagem": "Olá Armazém Da Nutri, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Tangerina hortifruti",
        "telefone": "+5544999685050",
        "mensagem": "Olá Tangerina hortifruti, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Simple Fit - Produtos Naturais - Maringá",
        "telefone": "+5544999894377",
        "mensagem": "Olá Simple Fit - Produtos Naturais - Maringá, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Moinho Maringá Produtos Naturais",
        "telefone": "+5544999976083",
        "mensagem": "Olá Moinho Maringá Produtos Naturais, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Lista Presente",
        "telefone": "+5544999987782",
        "mensagem": "Olá Lista Presente, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Mercado Falls Mix",
        "telefone": "+5545984164009",
        "mensagem": "Olá Mercado Falls Mix, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Margherita Temperos",
        "telefone": "+5545988053220",
        "mensagem": "Olá Margherita Temperos, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Mônaco Atacado",
        "telefone": "+5545988270423",
        "mensagem": "Olá Mônaco Atacado, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Divina Terra Foz do Iguaçu",
        "telefone": "+5545991074718",
        "mensagem": "Olá Divina Terra Foz do Iguaçu, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Traz Barato Foz do Iguacu",
        "telefone": "+5545991122919",
        "mensagem": "Olá Traz Barato Foz do Iguacu, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Superdia Atacado - Foz do Iguaçu",
        "telefone": "+5545991126122",
        "mensagem": "Olá Superdia Atacado - Foz do Iguaçu, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Mercado Vanguarda",
        "telefone": "+5545991147428",
        "mensagem": "Olá Mercado Vanguarda, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Lingerie em Foz do Iguaçu - Atacado Lingerie Vila A",
        "telefone": "+5545991190526",
        "mensagem": "Olá Lingerie em Foz do Iguaçu - Atacado Lingerie Vila A, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Chácara das Palmeiras",
        "telefone": "+5545991261947",
        "mensagem": "Olá Chácara das Palmeiras, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Empório da Casa",
        "telefone": "+5545991278292",
        "mensagem": "Olá Empório da Casa, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Produtos Naturais Foz do Iguaçu l Loja de Produtos Naturais l Fitoterápicos l Vivaz Produtos Naturais",
        "telefone": "+5545991310101",
        "mensagem": "Olá Produtos Naturais Foz do Iguaçu l Loja de Produtos Naturais l Fitoterápicos l Vivaz Produtos Naturais, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Palácio dos Temperos e Produtos Naturais",
        "telefone": "+5545991446060",
        "mensagem": "Olá Palácio dos Temperos e Produtos Naturais, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Lr produtos naturais",
        "telefone": "+5545991454341",
        "mensagem": "Olá Lr produtos naturais, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Natu vida Foz do Iguaçu",
        "telefone": "+5545991541061",
        "mensagem": "Olá Natu vida Foz do Iguaçu, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Casa de la vida sana - Produtos Naturais - em Foz do Iguaçu",
        "telefone": "+5545998013716",
        "mensagem": "Olá Casa de la vida sana - Produtos Naturais - em Foz do Iguaçu, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Empório Mió Di Bão",
        "telefone": "+5545998078812",
        "mensagem": "Olá Empório Mió Di Bão, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "VegAgni Alimentaçao Saudavel",
        "telefone": "+5545998089332",
        "mensagem": "Olá VegAgni Alimentaçao Saudavel, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Caju torteria - Tortas Salgadas",
        "telefone": "+5545998230655",
        "mensagem": "Olá Caju torteria - Tortas Salgadas, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Jeová Jireh Delícias",
        "telefone": "+5545998347472",
        "mensagem": "Olá Jeová Jireh Delícias, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Mercado Popular",
        "telefone": "+5545998358592",
        "mensagem": "Olá Mercado Popular, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Maravilhas da Terra Foz do Iguaçu",
        "telefone": "+5545998481250",
        "mensagem": "Olá Maravilhas da Terra Foz do Iguaçu, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Empório Iguassu",
        "telefone": "+5545999038148",
        "mensagem": "Olá Empório Iguassu, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Mercado Delgado",
        "telefone": "+5545999263323",
        "mensagem": "Olá Mercado Delgado, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Portí Atacadista Foz",
        "telefone": "+5545999439229",
        "mensagem": "Olá Portí Atacadista Foz, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "La Frutas Premium",
        "telefone": "+5545999443745",
        "mensagem": "Olá La Frutas Premium, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Verdurão Hortifruti",
        "telefone": "+5545999448465",
        "mensagem": "Olá Verdurão Hortifruti, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Emporium da Massa",
        "telefone": "+5545999519998",
        "mensagem": "Olá Emporium da Massa, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Orgânicos Turetta",
        "telefone": "+5545999676781",
        "mensagem": "Olá Orgânicos Turetta, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Empório Erva Doce - Vila A",
        "telefone": "+5545999918855",
        "mensagem": "Olá Empório Erva Doce - Vila A, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Pratik Saúde - Produtos Naturais e Marmitaria Saudável",
        "telefone": "+5545999963156",
        "mensagem": "Olá Pratik Saúde - Produtos Naturais e Marmitaria Saudável, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Tangerina Produtos Naturais e Suplementos",
        "telefone": "+5545999967401",
        "mensagem": "Olá Tangerina Produtos Naturais e Suplementos, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Empório JK",
        "telefone": "+5545999995993",
        "mensagem": "Olá Empório JK, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Fazendinha Salu.d Orgânicos e Naturais",
        "telefone": "+5547984186657",
        "mensagem": "Olá Fazendinha Salu.d Orgânicos e Naturais, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Teciart - Aplicação de Tecido e Papel de Parede",
        "telefone": "+5547984335620",
        "mensagem": "Olá Teciart - Aplicação de Tecido e Papel de Parede, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Nutraville produtos naturais e suplementos",
        "telefone": "+5547984342690",
        "mensagem": "Olá Nutraville produtos naturais e suplementos, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Cia da Saúde Produtos Naturais • Condor America",
        "telefone": "+5547984460123",
        "mensagem": "Olá Cia da Saúde Produtos Naturais • Condor America, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Emporio das Especiarias",
        "telefone": "+5547984722019",
        "mensagem": "Olá Emporio das Especiarias, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Só ferros",
        "telefone": "+5547984922320",
        "mensagem": "Olá Só ferros, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Chocopp",
        "telefone": "+5547988020300",
        "mensagem": "Olá Chocopp, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Atacado Hipermais Profipo",
        "telefone": "+5547988445141",
        "mensagem": "Olá Atacado Hipermais Profipo, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Supermercado Hipermais",
        "telefone": "+5547988553390",
        "mensagem": "Olá Supermercado Hipermais, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Secretto Café",
        "telefone": "+5547988694666",
        "mensagem": "Olá Secretto Café, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Divina Terra Joinville",
        "telefone": "+5547989021027",
        "mensagem": "Olá Divina Terra Joinville, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Atacado e Varejo Hipermais João Costa",
        "telefone": "+5547991230326",
        "mensagem": "Olá Atacado e Varejo Hipermais João Costa, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Mercearia Sofia",
        "telefone": "+5547991341211",
        "mensagem": "Olá Mercearia Sofia, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Atacado Hipermais Vila Nova",
        "telefone": "+5547991390921",
        "mensagem": "Olá Atacado Hipermais Vila Nova, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Celeiro do Sabor Joinville",
        "telefone": "+5547991723891",
        "mensagem": "Olá Celeiro do Sabor Joinville, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Banana Passa Gold",
        "telefone": "+5547991746564",
        "mensagem": "Olá Banana Passa Gold, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Expresso Rural Alimentos do Campo",
        "telefone": "+5547991900065",
        "mensagem": "Olá Expresso Rural Alimentos do Campo, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Komprão Koch Atacadista - Boa Vista",
        "telefone": "+5547991914927",
        "mensagem": "Olá Komprão Koch Atacadista - Boa Vista, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Empório Flores e Frutos",
        "telefone": "+5547992053787",
        "mensagem": "Olá Empório Flores e Frutos, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Doces D'Minas, Sô!!!",
        "telefone": "+5547992502641",
        "mensagem": "Olá Doces D'Minas, Sô!!!, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "LEAF MAIS QUE ALIMENTOS E DOCES LTDA",
        "telefone": "+5547992648920",
        "mensagem": "Olá LEAF MAIS QUE ALIMENTOS E DOCES LTDA, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Vidraçaria Cristal Vidros.",
        "telefone": "+5547992755873",
        "mensagem": "Olá Vidraçaria Cristal Vidros., Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Casa Colina - Café Bistro & Empório",
        "telefone": "+5547992821554",
        "mensagem": "Olá Casa Colina - Café Bistro & Empório, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "EMPÓRIO BOM RETIRO",
        "telefone": "+5547992890056",
        "mensagem": "Olá EMPÓRIO BOM RETIRO, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Nutty Bavarian",
        "telefone": "+5547996310258",
        "mensagem": "Olá Nutty Bavarian, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Castanha Locações de Brinquedos",
        "telefone": "+5547996418836",
        "mensagem": "Olá Castanha Locações de Brinquedos, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Grãoville Produtos Naturais",
        "telefone": "+5547996425769",
        "mensagem": "Olá Grãoville Produtos Naturais, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "O Cerealista Mercado Natural Joinville",
        "telefone": "+5547996586448",
        "mensagem": "Olá O Cerealista Mercado Natural Joinville, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Couve com Banana",
        "telefone": "+5547996602944",
        "mensagem": "Olá Couve com Banana, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Empório Viva Natural",
        "telefone": "+5547996830931",
        "mensagem": "Olá Empório Viva Natural, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Mercado Dona Bia",
        "telefone": "+5547996888302",
        "mensagem": "Olá Mercado Dona Bia, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Banho e tosa da Cristal",
        "telefone": "+5547996929533",
        "mensagem": "Olá Banho e tosa da Cristal, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Empório Vida & Saúde Produtos Naturais",
        "telefone": "+5547997214966",
        "mensagem": "Olá Empório Vida & Saúde Produtos Naturais, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Empório do parque",
        "telefone": "+5547997325171",
        "mensagem": "Olá Empório do parque, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Mumepo Agroecologia",
        "telefone": "+5547997537494",
        "mensagem": "Olá Mumepo Agroecologia, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Verde Capim - Orgânicos, veganos e cruelty free",
        "telefone": "+5547997608437",
        "mensagem": "Olá Verde Capim - Orgânicos, veganos e cruelty free, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Alimentos Orgânicos Mattiola",
        "telefone": "+5547999342868",
        "mensagem": "Olá Alimentos Orgânicos Mattiola, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Empório da Lê - Fátima",
        "telefone": "+5547999417645",
        "mensagem": "Olá Empório da Lê - Fátima, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Orgânicos Joinville - Só delivery",
        "telefone": "+5547999454854",
        "mensagem": "Olá Orgânicos Joinville - Só delivery, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Mercado Promocional",
        "telefone": "+5547999461283",
        "mensagem": "Olá Mercado Promocional, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Restaurante Pará na Cuia",
        "telefone": "+5547999524379",
        "mensagem": "Olá Restaurante Pará na Cuia, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Empório Lut Vitta",
        "telefone": "+5547999590162",
        "mensagem": "Olá Empório Lut Vitta, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Casa Norte e Nordeste Santo Expedito",
        "telefone": "+5547999606050",
        "mensagem": "Olá Casa Norte e Nordeste Santo Expedito, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
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
    {
        "nome": "Alecrim Produtos Naturais e Orgânicos",
        "telefone": "+5548920007097",
        "mensagem": "Olá Alecrim Produtos Naturais e Orgânicos, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Empório Augusta",
        "telefone": "+5548984053334",
        "mensagem": "Olá Empório Augusta, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Besen - Organicos / Direto do Campo",
        "telefone": "+5548984099293",
        "mensagem": "Olá Besen - Organicos / Direto do Campo, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Ayam Cristal",
        "telefone": "+5548984121333",
        "mensagem": "Olá Ayam Cristal, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Orgânicos Besen",
        "telefone": "+5548984165724",
        "mensagem": "Olá Orgânicos Besen, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Besen Orgânicos",
        "telefone": "+5548984463554",
        "mensagem": "Olá Besen Orgânicos, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Yamuna Artesanal | Fábrica e loja virtual de Produtos Naturais (ghee)",
        "telefone": "+5548984591522",
        "mensagem": "Olá Yamuna Artesanal | Fábrica e loja virtual de Produtos Naturais (ghee), Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Diego Produtos Naturais",
        "telefone": "+5548984625524",
        "mensagem": "Olá Diego Produtos Naturais, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Albanos Naturais, Granel e Suplementos",
        "telefone": "+5548984840386",
        "mensagem": "Olá Albanos Naturais, Granel e Suplementos, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Mini Mercado Cristal",
        "telefone": "+5548984960266",
        "mensagem": "Olá Mini Mercado Cristal, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Empório Mania da Ilha",
        "telefone": "+5548988111811",
        "mensagem": "Olá Empório Mania da Ilha, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "Amazon Fruit Bowls",
        "telefone": "+5548988117095",
        "mensagem": "Olá Amazon Fruit Bowls, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
    },
    {
        "nome": "DNA Empório Shopping Villa Romana",
        "telefone": "+5548988224135",
        "mensagem": "Olá DNA Empório Shopping Villa Romana, Somos de Frutas Exóticas Brasileiras e somos produtores.....Trabalhamos com frutas secas como nozes ,pecâ e macadâmia,castanha de caju orgânica e convencional ,castanha do Pará e baru ,banana passa,suco de uva natural e cajuína etc.....Caso seja do seu interesse ,por favor,responda essa mensagem  e em breve retornaremos .... whatsapp: 11-999158039 Jorge."
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
