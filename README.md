# Few Words

> Few Words é uma API para trocas de pequenas messagens entre usuários. Foi feita em NodeJs, MySQL com TypeORM, autenticação com JWT, e claro, com Typescript :)

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:
* Você possui o `Node Js` instalado em sua máquina?
* Você possui o `MySQL` instalado em seu computador?

## 🚀 Instalando Few Words

Para instalar, siga estas etapas:
* Crie um schema no MySQL
* Configure seu banco de dados no arquivo ormconfig.json
* Crie uma secret key para o JWT, crie um .env e coloque ela lá em uma variável SECRET_KEY
* No terminal, na pasta principal do projeto, rode:
```
npm install
```
* Rode as Migrations com npm run typeorm migration:run

## ☕ Usando Few Words

Para usar, siga estas etapas:

Na raiz do projeto, execute no terminal:
```
npm run dev
```
Fique à vontade para contribuir!
