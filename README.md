#  Graphql API

<br />

## Indíce

- [Sobre](#book-Sobre)
- [Funcionalidades](#hammer-Funcionalidades)
- [Tecnologias](#gear-Tecnologias)
- [Instalação do Frontend ](#computer-Frontend)
- [Screenshots](#camera-Screenshots)
- [Licença](#memo-Licença)

## :book: Sobre
  A aplicação foi desenvolvida em JavaScript utilizando o Apollo Server e GraphQl;


## :hammer: Funcionalidades

- CRUD de usuários
- CRUD de posts



## :gear: Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:


  | Tecnologia  |  Descrição  |
  | --- | --- |
  | [@babel/core](https://babeljs.io/docs/en/babel-core) | Babel compiler core. |
  | [@babel/cli](https://babeljs.io/docs/en/babel-cli) | Babel comes with a built-in CLI which can be used to compile files from the command line. |
  | [@babel/node](https://babeljs.io/docs/en/babel-node) | babel-node is a CLI that works exactly the same as the Node.js CLI, with the added benefit of compiling with Babel presets and plugins before running it. |
  | [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env) | @babel/preset-env is a smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s). This both makes your life easier and JavaScript bundles smaller! |
  | [nodemon](https://nodemon.io/) | nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected. |
  | [mongoose](https://mongoosejs.com/) | elegant mongodb object modeling for node.js |
  | [Apollo-Server](https://www.apollographql.com/docs/apollo-server/) | Apollo Server is an open-source, spec-compliant GraphQL server that's compatible with any GraphQL client, including Apollo Client. It's the best way to build a production-ready, self-documenting GraphQL API that can use data from any source. |
  | [GraphQl](https://graphql.org/)  | GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools. |
  | [dotenv](https://www.npmjs.com/package/dotenv) | Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. |




## :wrench: Instalação

Faça um clone desse repositório utilizando o comando `git clone` ou faça download.

```bash
  git clone https://github.com/sandro-dev/graphql-api.git
```

Entre na pasta raiz do projeto:

```bash
  cd graphql-api
```

Execute o comando yarn para instalar todas as dependências:

```bash
  yarn
```

Execute o seguinte comando para rodar a fake API com o JSON-Server:

```bash
  json-server --watch data.json --port 3333
```

Agora vamos executar o seguinte comando para executar a aplicação:
```bash
  yarn start
```

Aguarde o browser abrir com o url da aplicação:
`http://localhost:3000`

Pronto, agora é só explorar a aplicação


Para executarmos testes na aplicação, basta executar o seguinte comando:
```bash
  yarn test:coverage
```

## :camera: Screenshots

![List Hi Platform](https://raw.githubusercontent.com/sandro-dev/desafio-hiplatform/master/screenshots/screenshot.gif)

<img src="https://raw.githubusercontent.com/sandro-dev/desafio-hiplatform/master/screenshots/screenshot-01.PNG" />

<img src="https://raw.githubusercontent.com/sandro-dev/desafio-hiplatform/master/screenshots/screenshot-02.PNG" />

### Tests
<img src="https://raw.githubusercontent.com/sandro-dev/desafio-hiplatform/master/screenshots/screenshot-03.PNG" />

<img src="https://raw.githubusercontent.com/sandro-dev/desafio-hiplatform/master/screenshots/screenshot-04.PNG" />



## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Feito com dedicação por [Sandro Santos](https://github.com/sandro-dev) | [Me add no LinkedIn](https://www.linkedin.com/in/sandro-dev/)