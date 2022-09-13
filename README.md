# nlw-esports
# BACKEND

## Configuração inicial para transformar para Typescript
## instalando a devDependencies typescript
### npm i typescript -D

## instalando o tsconfig.json
### npx tsc --init

## instalando o types module do Express para que o TS carregue seus modulos.
### npm i @types/express

### configurando o arquivos tsconfig.json
## em "module": "CommomJS" codificação padrão JS   
## em "rootDir": "./src" pasta padrão onde estara nosso projeto em TS
## em "outDir": "./build" pasta padrão onde estara nosso Build do projeto todo em JS
## em "moduleResolution": "node" configuração que permite que o node carregue corretamente as dependencias em Typescript

### configurando o package.json para que as nossas modificações se atualizaem automaticamente sem parar o servidor
## npm i ts-node-dev -D
## scripts: { "dev": "tsnd src/server.ts" }


# FRONTEND