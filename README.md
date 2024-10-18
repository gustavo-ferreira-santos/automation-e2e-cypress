# AUTOMATION-E2E-CYPRESS

Projeto para automação de testes e2e utilizando o framework Cypress

## Sumário

- [Pré-requisitos](#pré-requisitos)
- [Instalação das dependencias](#instalação-das-dependencias)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Executando os Testes](#executando-os-testes)
- [Gerando Relatórios](#gerando-relatórios)

## Pré-requisitos

Para executar o projeto é necessário:

- git;
- Node.js;
- NPM.

## Instalação das dependencias

Como todas as dependências já estão listadas no arquivo `package.json`, simplesmente execute o comando `npm install` na raiz do projeto.

## Estrutura do Projeto

A estrutura do projeto é a seguinte:

```plaintext
automacao-e2e-cypress/
├── cypress/
│   ├── e2e/          # Testes E2E
│   ├── fixtures/     # Massa de dados estáticos a serem utilizados nos testes
│   ├── pages/        # Page objects
│   ├── reports/      # Relatórios gerados pelos testes
│   └── support/      # Comandos de suporte e configurações globais
├── cypress.config.js # Configurações do Cypress
├── package.json      # Dependências e scripts do projeto
└── README.md         # Documentação do projeto

## Executando os Testes

Para executar os testes com o cypress no modo interativo utilize o comando:

- npx cypress open

Para executar os testes em modo headless (sem interface gráfica), use:

- npx cypress run

## Gerando Relatórios

Os relatórios dos testes são gerados usando o mochawesome, após a execução do teste eles serão salvos em cypress/reports/mocha.
