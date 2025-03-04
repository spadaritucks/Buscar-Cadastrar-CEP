# Cadastro e Consulta de CEP e Endereços

## Descrição

Repositório do sistema de cadastro e consulta de cep e endereços feito em React + Typesciprt

## Rodar a aplicação

** Requisitos: **

- React
- Typescript
- Vite


Execute os comandos para subir a aplicação:

```
npm install
npm install react-router-dom
npm install tailwindcss @tailwindcss/vite
npm run dev
```

## Configuração do Tailwind CSS v.4.0
- Insira a configuração abaixo no vite.config.ts
```js
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```

- Insira essa importação no arquivo de estilização global index.css
@import "tailwindcss";


## Paginas

 ### main.tsx
 - Arquivo raiz do projeto, onde se encontra as rotas feitas com react-router-dom

 ### App.tsx
 - Pagina Principal do sistema, onde contem as ancoras para cadastro e listagem de endereços

 ### pages/cadastro.tsx
 - Pagina de cadastro de cep e endereço e sua logica de manipulação de campos de formulario
 - A busca pelo CEP com o ViaCep é feito junto com a importação da função cepService no qual sua logica pode vista em src/services/cep.service.ts
 - Metodo de armazenamento de dados : LocalStorage - logica dentro da função HandleSubmit

  ### pages/listagem.tsx
  - Pagina onde é exibido a lista de endereços cadastrados no localStorage
  - Resgate de dados é feita junto com a interface Locais no qual pode ser vista em src/interfaces/local.ts

## Interfaces
- **src/interfaces/Local.ts**: Interface que define a estrutura de dados para o LocalStorage

## Services
- **src/services/cep.service.ts** : Função que busca o CEP pelo ViaCep e retorna o resultado em formato de objeto

## Hooks
  - **src/hooks/inputNumeric.tsx** : Função que verifica se o valor digitado é um número e impede o digito de letras 
