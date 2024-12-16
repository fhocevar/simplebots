const axios = require('axios');
const xlsx = require('xlsx');
const fs = require('fs');

// Dados da API
const token = '930mocdbts9zze0r';
const instanceId = 'instance101815';

// Função para ler contatos de uma planilha Excel (XLSX)
function lerContatosDeExcel(caminhoArquivo) {
    // Ler o arquivo Excel
    const planilha = xlsx.readFile(caminhoArquivo);
    const aba = planilha.Sheets[planilha.SheetNames[0]]; // Pegando a primeira aba
    const dados = xlsx.utils.sheet_to_json(aba); // Convertendo para JSON

    // Formatando os dados para corresponder ao formato que o código exige
    return dados.map(contato => ({
        nome: contato.nome,
        telefone: contato.telefone,
        mensagem: contato.mensagem
    }));
}

// Lista de contatos (carregar de planilha)
const contatos = lerContatosDeExcel('contatos.xlsx'); // Substitua pelo caminho do seu arquivo

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
