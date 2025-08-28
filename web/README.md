# 🧪 Testes Automatizados - WebDojo (Cypress)

Este repositório contém a aplicação **WebDojo** e a suíte de testes automatizados desenvolvida em **Cypress**.  
O objetivo é garantir a qualidade da aplicação por meio de testes end-to-end (E2E), simulando cenários reais de uso.

---

## 🚀 Requisitos

Antes de rodar o projeto, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão LTS recomendada)  
- [npm](https://www.npmjs.com/) (vem junto com o Node.js)  
- [Cypress](https://www.cypress.io/) (já incluso nas dependências do projeto)  

---

## 📂 Estrutura do Projeto

A organização de pastas referente ao **Cypress** segue este padrão:

```
cypress
 ├── e2e/                 # Testes end-to-end
 │    └── login.cy.js      # Exemplo de teste de login
 │
 ├── fixtures/             # Arquivos estáticos usados nos testes
 │    ├── cep.json
 │    ├── consultancy.json
 │    └── document.pdf
 │
 └── support/              # Suporte e utilitários
      ├── actions/         # Funções auxiliares para ações de teste
      ├── commands.js      # Comandos customizados do Cypress
      ├── e2e.js           # Configurações globais dos testes
      └── utils.js         # Funções utilitárias
```

---

## 🖥️ Executando a Aplicação

A aplicação **WebDojo** está no mesmo repositório.  
Para rodá-la em modo de desenvolvimento, utilize o comando:

```bash
npm run dev
```

> Isso iniciará a aplicação no endereço [http://localhost:3000](http://localhost:3000).

---

## 🧪 Executando os Testes

Os testes Cypress podem ser executados com os seguintes scripts configurados no `package.json`:

- **Rodar todos os testes**:
  ```bash
  npm run test
  ```
  > Executa todos os testes Cypress no modo headless com viewport de **414x896** (mobile).

- **Rodar apenas os testes de login (mobile)**:
  ```bash
  npm run test:login:mobile
  ```
  > Executa somente o arquivo `cypress/e2e/login.cy.js` simulando um dispositivo móvel.

---

## 📖 Boas Práticas do Projeto

- **Fixtures**: Utilize arquivos JSON e PDFs na pasta `fixtures` para simular dados de entrada.  
- **Support**: Centralize funções e comandos customizados reutilizáveis.  
- **Actions**: Organize interações complexas da aplicação em funções reutilizáveis.  
- **Utils**: Armazene funções auxiliares para manipulação de dados e validações.  

---

## ✅ Conclusão

Este projeto garante a qualidade da aplicação **WebDojo** por meio de testes end-to-end com **Cypress**,  
simulando cenários reais como autenticação, preenchimento de formulários e consumo de dados.

---
