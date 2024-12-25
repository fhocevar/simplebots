const axios = require('axios');

// Dados da API
const token = '930mocdbts9zze0r';
const instanceId = 'instance101815';

// Lista de contatos (simulação de 10.000 contatos)
const contatos = [   ];

// Função para formatar números de telefone (remover parênteses, espaços e traços)
function formatarTelefone(telefone) {
    return telefone.replace(/\D/g, ''); // Remove tudo que não for número
}

// Função para enviar a mensagem
async function enviarMensagem(contato) {
    try {
        const data = {
            to: formatarTelefone(contato.telefone), // Formatar o telefone
            body: contato.mensagem, // Mensagem
        };

        // Enviar mensagem
        const response = await axios.post(`https://api.ultramsg.com/${instanceId}/messages/chat?token=${token}`, data);

        if (response.data.error) {
            console.log(`Erro ao enviar para ${contato.nome}: ${JSON.stringify(response.data)}`);
        } else {
            console.log(`Mensagem enviada para ${contato.nome}: ${JSON.stringify(response.data)}`);
        }
    } catch (error) {
        console.error(`Erro ao enviar mensagem para ${contato.nome}:`, error.message);
    }
}

// Função para dividir os contatos em lotes pequenos
function dividirEmLotes(lista, tamanhoLote) {
    const lotes = [];
    for (let i = 0; i < lista.length; i += tamanhoLote) {
        lotes.push(lista.slice(i, i + tamanhoLote));
    }
    return lotes;
}

// Função para processar os lotes
async function enviarLotes() {
    const lotes = dividirEmLotes(contatos, 5); // Dividindo em lotes de 5 contatos para diminuir risco de bloqueio

    console.log(`Enviando mensagens em ${lotes.length} lotes...`);

    for (let i = 0; i < lotes.length; i++) {
        console.log(`Processando lote ${i + 1} de ${lotes.length}...`);

        // Enviar as mensagens de cada lote
        for (let contato of lotes[i]) {
            await enviarMensagem(contato);
            await new Promise(resolve => setTimeout(resolve, 10000)); // Atraso de 10 segundos entre cada envio
        }

        console.log(`Lote ${i + 1} enviado com sucesso.`);

        // Atraso entre os lotes (opcional, para dar tempo para a conta descansar)
        if (i < lotes.length - 1) {
            console.log('Aguardando 10 segundos antes de enviar o próximo lote...');
            await new Promise(resolve => setTimeout(resolve, 10000)); // Atraso de 10 segundos entre os lotes
        }
    }

    console.log('Todos os lotes foram enviados!');
}

// Iniciar o envio
enviarLotes();
