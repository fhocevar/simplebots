const axios = require('axios');

// Dados da API
const token = '930mocdbts9zze0r';
const instanceId = 'instance101815';

// Lista de contatos (simulação de 10.000 contatos)
const contatos = [
    { nome: "Jorge", telefone: "+5511999158039", mensagem: "Olá Jorge, Somos da frutas exoticas brasileiras e somos PRODUTORES! Trabalhamos com frutas secas como nozes pecan e macadamia, castanhas de caju e pará, banana passa etc. Caso seja do seu interesse por favor responda essa mensagem e em breve lhe retornaremos." },
    { nome: "Marlene", telefone: "+5511996040756", mensagem: "Olá Marlene, Somos da frutas exoticas brasileiras e somos PRODUTORES! Trabalhamos com frutas secas como nozes pecan e macadamia, castanhas de caju e pará, banana passa etc. Caso seja do seu interesse por favor responda essa mensagem e em breve lhe retornaremos." },
    { nome: "Fernando", telefone: "+5511976010211", mensagem: "Olá Fernando, Somos da frutas exoticas brasileiras e somos PRODUTORES! Trabalhamos com frutas secas como nozes pecan e macadamia, castanhas de caju e pará, banana passa etc. Caso seja do seu interesse por favor responda essa mensagem e em breve lhe retornaremos" },
    { nome: "Michele", telefone: "+5511993584989", mensagem: "Olá Michele, Somos da frutas exoticas brasileiras e somos PRODUTORES! Trabalhamos com frutas secas como nozes pecan e macadamia, castanhas de caju e pará, banana passa etc. Caso seja do seu interesse por favor responda essa mensagem e em breve lhe retornaremos" },
    { nome: "Manuelly", telefone: "+5511994824086", mensagem: "Olá Manuelly, Somos da frutas exoticas brasileiras e somos PRODUTORES! Trabalhamos com frutas secas como nozes pecan e macadamia, castanhas de caju e pará, banana passa etc. Caso seja do seu interesse por favor responda essa mensagem e em breve lhe retornaremos" },
    { nome: "Marcos", telefone: "+555199990181", mensagem: "Olá Marcos, Somos da frutas exoticas brasileiras e somos PRODUTORES! Trabalhamos com frutas secas como nozes pecan e macadamia, castanhas de caju e pará, banana passa etc. Caso seja do seu interesse por favor responda essa mensagem e em breve lhe retornaremos" },
    { nome: "Carlos", telefone: "+555199637540", mensagem: "Olá Carlos, Somos da frutas exoticas brasileiras e somos PRODUTORES! Trabalhamos com frutas secas como nozes pecan e macadamia, castanhas de caju e pará, banana passa etc. Caso seja do seu interesse por favor responda essa mensagem e em breve lhe retornaremos" },
    // Adicione aqui os outros contatos, totalizando 10.000
];

// Função para enviar a mensagem
async function enviarMensagem(contato) {
    try {
        const data = {
            phone: contato.telefone,
            message: contato.mensagem,
        };

        // Enviar mensagem
        const response = await axios.post(`https://api.ultramsg.com/${instanceId}/messages/chat?token=${token}`, data);
        console.log(`Mensagem enviada para ${contato.nome}: ${response.data}`);
    } catch (error) {
        console.error(`Erro ao enviar mensagem para ${contato.nome}:`, error.message);
    }
}

// Função para dividir os contatos em lotes
function dividirEmLotes(lista, tamanhoLote) {
    const lotes = [];
    for (let i = 0; i < lista.length; i += tamanhoLote) {
        lotes.push(lista.slice(i, i + tamanhoLote));
    }
    return lotes;
}

// Função para processar os lotes
async function enviarLotes() {
    const lotes = dividirEmLotes(contatos, 100); // Dividindo em lotes de 100 contatos

    console.log(`Enviando mensagens em ${lotes.length} lotes...`);

    for (let i = 0; i < lotes.length; i++) {
        console.log(`Processando lote ${i + 1} de ${lotes.length}...`);

        // Enviar as mensagens de cada lote
        await Promise.all(lotes[i].map(contato => enviarMensagem(contato)));

        console.log(`Lote ${i + 1} enviado com sucesso.`);

        // Atraso entre os lotes (opcional)
        if (i < lotes.length - 1) {
            console.log('Aguardando 10 segundos antes de enviar o próximo lote...');
            await new Promise(resolve => setTimeout(resolve, 10000)); // Atraso de 10 segundos
        }
    }

    console.log('Todos os lotes foram enviados!');
}

// Iniciar o envio
enviarLotes();
