const axios = require('axios');

// Dados da API
const token = '930mocdbts9zze0r';
const instanceId = 'instance101815';

// Mensagem
const data = {
    to: "5511976010211",  // Número do destinatário
    body: "Olá Fernando, Somos da frutas exoticas brasileiras e somos PRODUTORES! Trabalhamos com frutas secas como nozes pecan e macadamia, castanhas de caju e pará, banana passa etc. Caso seja do seu interesse por favor responda essa mensagem e em breve lhe retornaremos",  // Conteúdo da mensagem
};

// Alteração na URL para passar o token como parâmetro GET
axios.post(`https://api.ultramsg.com/${instanceId}/messages/chat?token=${token}`, data)
    .then(response => {
        console.log("Mensagem enviada com sucesso:", response.data);
    })
    .catch(error => {
        console.error("Erro ao enviar mensagem:", error.response ? error.response.data : error.message);
    });
