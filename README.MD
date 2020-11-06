<h1 align="center">
    CourierApp

    Node.js | ReactJS
</h1>


<p align="center">
  <a href="#bookmark-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#boom-como-executar">Como Executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>


## :bookmark: Sobre

O **CourierApp** e uma aplicacao para ajudar na entrega de encomendas

## :rocket: Tecnologias

-  [Typescript](https://www.typescriptlang.org/)
-  [Node.js](https://nodejs.org/en/)
-  [Express](https://expressjs.com/)
-  [axios](https://github.com/axios/axios)

## :boom: Como Executar

- ### **Pré-requisitos**

  - É **necessário** possuir o **[Node.js](https://nodejs.org/en/)** instalado no computador
  - É **necessário** possuir o **[Git](https://git-scm.com/)** instalado e configurado no computador
  - É **necessário** possuir o **[docker](https://www.docker.com/)** instalado e configurado no computador
  - Também, é **preciso** ter um gerenciador de pacotes seja o **[NPM](https://www.npmjs.com/)** ou **[Yarn](https://yarnpkg.com/)**.

1. Faça um clone do repositório:

```sh
  $ git clone https://github.com/LdFerreira/CourierApp-backend

2. Executando a Aplicação:


  # Instalando as dependências do projeto.
  $ yarn # ou npm install
  # Configurando o banco de dados
  $ docker run --name gostack_postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
  #Criando as tabelas.
  $ yarn migration:run
  # Inicie a API
  $ yarn start # ou npm start

```
3. Desafio

3.1 Desenvolver uma aplicação que seja web e mobile, responsável por gerenciar um serviço de delivery.

Back-end
- [x] Incluir, excluir, atualizar e visualizar encomendas.
- [x] Incluir e visualizar as encomendas cadastrados.
- [x] Atribuir a um usuário a realização da entrega da encomenda.
- [x] Visualizar encomendas pendentes de serem entregues, Definir se uma encomenda foi entregue.

- [ ] Login e autentificação de usuario
- [ ] Niveis de acesso para diferentes usuarios



---
