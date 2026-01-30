# 🧪 Webdojo – Testes Automatizados E2E com Cypress

Este repositório contém a suíte de **testes automatizados End-to-End (E2E)** da aplicação **Webdojo**, desenvolvida com **Cypress**, com foco em **qualidade, confiabilidade e velocidade de execução**.

## 🎯 Objetivo do Projeto
- Garantir o correto funcionamento dos fluxos críticos da aplicação
- Reduzir regressões em novas entregas
- Servir como base de estudo e referência profissional em Automação de Testes

## 🛠️ Tecnologias
- Node.js
- Cypress
- JavaScript
- npm
- docker

## 📂 Estrutura
web/
cypress/
e2e/
fixtures/
support/
dist/
cypress.config.js
package.json

## ▶️ Executando a aplicação
npm install
npm run dev

## 🧪 Executando testes
npm run test
npm run test:ui
npm run test:login
npm run test:login:mobile

## 🔐 Estratégia de Login
Utiliza bypass de autenticação via LocalStorage e cookies para maior performance.

## 👤 Autor
Projeto de estudos em Automação de Testes com Cypress.
