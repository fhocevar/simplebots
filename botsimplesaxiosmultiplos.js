const axios = require('axios');

// Dados da API
const token = '930mocdbts9zze0r';
const instanceId = 'instance101815';

// Lista de prospectos
const prospectos = [
    { nome: "Jorge", telefone: "+5511999158039", mensagem: "Olá Jorge, Somos da frutas exoticas brasileiras e somos PRODUTORES! Trabalhamos com frutas secas como nozes pecan e macadamia, castanhas de caju e pará, banana passa etc. Caso seja do seu interesse por favor responda essa mensagem e em breve lhe retornaremos" },
    { nome: "Marlene", telefone: "+5511996040756", mensagem: "Olá Marlene, Somos da frutas exoticas brasileiras e somos PRODUTORES! Trabalhamos com frutas secas como nozes pecan e macadamia, castanhas de caju e pará, banana passa etc. Caso seja do seu interesse por favor responda essa mensagem e em breve lhe retornaremos" },
    { nome: "Fernando", telefone: "+5511976010211", mensagem: "Olá Fernando, Somos da frutas exoticas brasileiras e somos PRODUTORES! Trabalhamos com frutas secas como nozes pecan e macadamia, castanhas de caju e pará, banana passa etc. Caso seja do seu interesse por favor responda essa mensagem e em breve lhe retornaremos" },
    { nome: "Michele", telefone: "+5511993584989", mensagem: "Olá Michele, Somos da frutas exoticas brasileiras e somos PRODUTORES! Trabalhamos com frutas secas como nozes pecan e macadamia, castanhas de caju e pará, banana passa etc. Caso seja do seu interesse por favor responda essa mensagem e em breve lhe retornaremos" },
    { nome: "Manuelly", telefone: "+5511994824086", mensagem: "Olá Manuelly, Somos da frutas exoticas brasileiras e somos PRODUTORES! Trabalhamos com frutas secas como nozes pecan e macadamia, castanhas de caju e pará, banana passa etc. Caso seja do seu interesse por favor responda essa mensagem e em breve lhe retornaremos" },
    { nome: "Marcos", telefone: "+555199990181", mensagem: "Olá Marcos, Somos da frutas exoticas brasileiras e somos PRODUTORES! Trabalhamos com frutas secas como nozes pecan e macadamia, castanhas de caju e pará, banana passa etc. Caso seja do seu interesse por favor responda essa mensagem e em breve lhe retornaremos" },
    { nome: "Carlos", telefone: "+555199637540", mensagem: "Olá Carlos, Somos da frutas exoticas brasileiras e somos PRODUTORES! Trabalhamos com frutas secas como nozes pecan e macadamia, castanhas de caju e pará, banana passa etc. Caso seja do seu interesse por favor responda essa mensagem e em breve lhe retornaremos" },
];

// Função para enviar mensagens para todos os prospectos
prospectos.forEach(prospecto => {
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
});
