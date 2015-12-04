# Projeto angular para apresentação #

O projeto foi construído utilizando o *stack* de tecnologias do **MEAN.js** para fornecer um mínimo de estrutura por parte do backend.

## Instalação do mongoDB ##
Para a execução do projeto deve-se instalar o **mongoDB**. Vá ao site oficial do projeto, baixe a instalação e nas variáveis de ambiente do seu sistema inclua a pasta bin da instalação anterior à variável path.

## Criação do banco para a aplicação ##
Após finalizar a instalação do servidor de banco de dados, abra um terminal e execute o comando `mongod` para dar início a execução do servidor, abra outro terminal e nele utilize os próximos comandos.
 	`mongo` para logar no shell e `use contatos` para criar o banco de dados chamado contatos.

## Dependências ##
Para suprir as dependências tanto do **node.js** quanto do frontend deve utilizar na pasta do projeto o comando `npm install` assim o node irá instalar as dependências do backend, logo após o término utilize o comando `bower install` para instalar as dependências de frontend.

## Executando o projeto ##
Depois de suprir as dependências use o comando `npm start` para dar início ou servidor node. Logo após o projeto estará disponível na seguinte url: `http://localhost:3000`.