# 🎲 Locadora de Jogos de Tabuleiro - API

## 📌 Descrição
Esta API permite gerenciar uma locadora de jogos de tabuleiro, proporcionando funcionalidades para cadastrar e listar jogos, clientes e aluguéis.
O projeto utiliza **Node.js** com **Express** e um banco de dados **PostgreSQL**.

## 🛠️ Tecnologias Utilizadas
- Node.js
- Express
- PostgreSQL
- dotenv
- pg (biblioteca para interagir com o PostgreSQL)

## 🚀 Como rodar o projeto
### 1️⃣ Clone o repositório
```sh
git clone https://github.com/mariajardim01/game-rent.git
cd game-rent
```

### 2️⃣ Instale as dependências
```sh
npm install
```

### 3️⃣ Configure as variáveis de ambiente
Crie um arquivo `.env` na raiz do projeto e adicione as seguintes configurações:
```env
DATABASE_URL=postgres://usuario:senha@localhost:5432/nome_do_banco
PORT=5000
```

### 4️⃣ Rode o script de criação do banco
Execute o script SQL para criar as tabelas necessárias no banco de dados.
```sh
psql -U <usuario> -d <nome_do_banco> -f ./database/schema.sql
```
📦 Script de Criação do Banco de Dados
```sh
CREATE TABLE games (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  image TEXT NOT NULL,
  "stockTotal" INTEGER NOT NULL,
  "pricePerDay" INTEGER NOT NULL
);

CREATE TABLE customers (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  cpf VARCHAR(11) NOT NULL
);

CREATE TABLE rentals (
  id SERIAL PRIMARY KEY,
  "customerId" INTEGER NOT NULL,
  "gameId" INTEGER NOT NULL,
  "rentDate" DATE NOT NULL,
  "daysRented" INTEGER NOT NULL,
  "returnDate" DATE,
  "originalPrice" INTEGER NOT NULL,
  "delayFee" INTEGER
);
```

### 5️⃣ Inicie o servidor
```sh
npm start
```
O servidor iniciará na porta `5000`.

## 📌 Estrutura do Projeto
```
├── src/
│   ├── controllers/
│   ├── middlewares/
│   ├── repositories/
│   ├── routers/
│   ├── schemas/
│   ├── services/
│   ├── app.js
├── database/
│   ├── schema.sql
├── .env
├── package.json
├── package-lock.json
└── README.md
```

## ✅ Funcionalidades da API
### 🎮 Jogos
- **GET /games** → Lista todos os jogos
- **POST /games** → Insere um novo jogo

### 👤 Clientes
- **GET /customers** → Lista todos os clientes
- **GET /customers/:id** → Busca um cliente por ID
- **POST /customers** → Insere um novo cliente

### 📦 Aluguéis
- **GET /rentals** → Lista todos os aluguéis
- **POST /rentals** → Cria um novo aluguel
- **POST /rentals/:id/return** → Finaliza um aluguel
- **DELETE /rentals/:id** → Exclui um aluguel

## 🎯 Tratamento de Erros
Os erros são tratados através de um middleware centralizado para garantir respostas padronizadas.

## 🛠️ Melhorias Futuras
- Implementação de autenticação JWT
- Paginação nas listagens
- Validação de dados mais robusta com Joi

---

Feito com ❤️ por Maria

