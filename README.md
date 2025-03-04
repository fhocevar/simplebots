# Envio de Mensagens para Prospectos via UltraMsg API

Este projeto permite o envio de mensagens automatizadas para prospectos utilizando a API **UltraMsg**. O código envia uma mensagem para cada prospecto com um atraso aleatório entre 7 e 30 segundos, o que ajuda a simular o envio de mensagens de maneira mais natural.

## Descrição

O script utiliza o **Axios** para fazer requisições HTTP e envia mensagens para uma lista de prospectos via a API UltraMsg. A cada envio, um atraso aleatório é gerado para que as mensagens não sejam enviadas de forma instantânea, o que pode parecer artificial.

### Requisitos

- **Node.js** (você pode verificar se já tem o Node.js instalado executando `node -v` no terminal).
- **Axios** para fazer as requisições HTTP (instalado automaticamente ao seguir as instruções de instalação).

### Funcionalidade

1. **Lista de Prospectos**: O código possui uma lista de prospectos, onde cada prospecto tem os campos `nome`, `telefone` e `mensagem` para personalizar a mensagem enviada.
2. **Envio de Mensagens**: A função de envio é realizada através da API UltraMsg, que utiliza o número de telefone e a mensagem do prospecto.
3. **Atraso Aleatório**: A cada envio, o código gera um atraso aleatório entre 7 e 30 segundos, fazendo com que as mensagens sejam enviadas de forma escalonada.

## Instalação

### 1. Clonar o Repositório

Se você ainda não possui o repositório, clone-o usando:

```bash
git clone <URL_DO_REPOSITORIO>
cd <DIRETORIO_DO_REPOSITORIO>
```

### 2. Instalar Dependências

Este projeto depende da biblioteca **Axios**. Instale as dependências do projeto com o seguinte comando:

```bash
npm install axios
```

### 3. Configuração

Antes de rodar o código, é necessário configurar alguns parâmetros:

- **Token**: Substitua `930mocdbts9zze0r` pelo seu token da **UltraMsg API**.
- **InstanceId**: Substitua `instance101815` pelo **instanceId** de sua instância da UltraMsg.
- **Lista de Prospectos**: Preencha a lista de prospectos com os dados reais. Cada prospecto deve ter ao menos os campos `nome`, `telefone` e `mensagem` para personalizar o envio.

Exemplo de preenchimento da lista de prospectos:

```javascript
const prospectos = [ 
    { 
        nome: 'João', 
        telefone: '5511998765432', 
        mensagem: 'Olá, João! Temos uma novidade para você!' 
    },
    { 
        nome: 'Maria', 
        telefone: '5511987654321', 
        mensagem: 'Oi, Maria! Gostaria de saber mais sobre nossos serviços?' 
    }
];
```

## Uso

### Executar o Script

Após configurar o arquivo, basta executar o script utilizando o Node.js:

```bash
node <NOME_DO_ARQUIVO>.js
```

Isso fará com que as mensagens sejam enviadas para os prospectos na lista com um atraso aleatório entre 7 e 30 segundos.

## Como Funciona

1. **Atraso Aleatório**: Para cada prospecto, o script gera um atraso aleatório entre 7 e 30 segundos. O atraso é calculado em milissegundos e multiplicado pelo índice do prospecto para garantir que os envios sejam escalonados.
2. **Envio de Mensagem**: O script utiliza a API UltraMsg para enviar a mensagem para o número de telefone especificado. A resposta da API é logada no console, assim como qualquer erro que ocorra durante o envio.
3. **Escalonamento de Envio**: A cada envio, um atraso é configurado para garantir que as mensagens sejam enviadas com um intervalo.

### Exemplo de Saída no Console

```text
Mensagem enviada com sucesso para João: { ...resposta da API UltraMsg... }
Mensagem enviada com sucesso para Maria: { ...resposta da API UltraMsg... }
```

Ou, em caso de erro:

```text
Erro ao enviar mensagem para João: Erro de conexão com a API
Erro ao enviar mensagem para Maria: { "erro": "dados inválidos" }
```

## Contribuindo

Se você quiser contribuir para este projeto, siga estas etapas:

1. Faça o **fork** do repositório.
2. Crie uma **branch** para a sua modificação.
3. Faça as modificações necessárias e **commit** suas alterações.
4. Envie um **pull request** para revisar suas alterações.

## Licença

Este projeto está licenciado sob a **MIT License**. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Este README fornece uma visão geral básica de como usar o script para enviar mensagens para prospectos via UltraMsg, e pode ser expandido conforme as necessidades do seu projeto.
