# 🐶 Dogs — Rede Social para Cachorros

Aplicação web responsiva de uma rede social para cachorros, desenvolvida com **React e Vite**, com autenticação de usuários, compartilhamento de fotos, comentários, perfis públicos e estatísticas.

O frontend foi desenvolvido com base no curso de React da Origamid e posteriormente integrado a uma **API REST própria**, construída com Node.js, Express e MongoDB.

### 🌐 Projeto Online

- **Aplicação:** [Dogs Social](https://app-dogs-social.vercel.app/)
- **Repositório da API:** [Dogs API](https://github.com/giosantos99/dogs-api)
- **Backend publicado:** [Dogs API — Render](https://dogs-api-bn0r.onrender.com/)

![Prévia da aplicação Dogs](preview/dogs.png)

---

## 🚀 Sobre o Projeto

O Dogs é uma aplicação web que simula uma rede social voltada para o compartilhamento de fotos de cachorros.

O frontend foi desenvolvido durante o curso de React da **Origamid**, explorando componentes reutilizáveis, gerenciamento de estado, navegação, formulários e integração com APIs.

Para aprofundar meus conhecimentos em desenvolvimento full stack, desenvolvi uma API REST independente para substituir a API disponibilizada originalmente pelo curso.

A aplicação utiliza autenticação JWT, armazenamento de imagens na nuvem e um banco de dados MongoDB, permitindo gerenciar usuários, publicações e interações.

O frontend está hospedado na **Vercel**, enquanto o backend está publicado na **Render**.

## 🛠️ Tecnologias Utilizadas

### Frontend

- React
- JavaScript
- React Router DOM
- CSS Modules
- Context API
- Hooks personalizados
- Fetch API
- Victory — gráficos
- Vite

### Backend e integrações

- Node.js e Express.js — API REST própria
- MongoDB Atlas — persistência de dados
- JWT — autenticação
- Cloudinary — armazenamento de imagens
- Resend — recuperação de senha por e-mail

### Hospedagem

- Vercel — frontend
- Render — backend

## ✨ Funcionalidades

### Usuários e autenticação

- Cadastro de usuários
- Login e logout
- Autenticação com JWT
- Persistência da sessão
- Proteção de páginas autenticadas
- Validação de formulários
- Recuperação de senha por e-mail
- Redefinição de senha

### Publicações

- Publicação de fotos de cachorros
- Upload de imagens para o Cloudinary
- Exclusão de publicações próprias
- Feed com paginação e carregamento infinito
- Visualização individual das publicações
- Contagem de acessos
- Perfis públicos de usuários

### Interações e estatísticas

- Comentários em publicações
- Visualização de comentários
- Estatísticas de publicações
- Gráficos de visualizações utilizando Victory

### Interface

- Layout responsivo
- Navegação com React Router
- Componentes reutilizáveis
- Estilização com CSS Modules
- Indicadores de carregamento
- Tratamento de erros nas requisições

## 📸 Demonstração

**Aplicação online:** [https://app-dogs-social.vercel.app/](https://app-dogs-social.vercel.app/)

**API utilizada:** [https://dogs-api-bn0r.onrender.com/](https://dogs-api-bn0r.onrender.com/)

**Repositório do backend:** [Dogs API — GitHub](https://github.com/giosantos99/dogs-api)

A aplicação permite criar uma conta, publicar fotos, comentar, visualizar perfis e acompanhar estatísticas.

**Observação:** o backend utiliza o plano gratuito da Render. Após um período de inatividade, a primeira requisição pode demorar um pouco mais para responder.

## 📂 Estrutura do Projeto

O frontend está organizado em componentes React, páginas, hooks personalizados, contextos e arquivos de estilos.

Entre os principais recursos utilizados estão:

- **Componentes React:** organização e reutilização da interface.
- **Context API:** gerenciamento do estado de autenticação.
- **React Router:** navegação entre páginas públicas e privadas.
- **Hooks personalizados:** reutilização de lógica e validação de formulários.
- **CSS Modules:** isolamento e organização dos estilos.
- **Fetch API:** comunicação com a Dogs API.
- **Victory:** visualização de estatísticas em gráficos.

## ⚙️ Como Executar o Projeto

### Pré-requisitos

- Node.js
- npm
- Dogs API em execução localmente ou disponível online

### Instalação

Clone o repositório:

```bash
git clone https://github.com/giosantos99/dogs.git
```

Acesse a pasta:

```bash
cd dogs
```

Instale as dependências:

```bash
npm install
```

### Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto, utilizando `.env.example` como referência.

Para utilizar a API local:

```dotenv
VITE_API_URL=http://localhost:3000
```

Para utilizar a API publicada na Render:

```dotenv
VITE_API_URL=https://dogs-api-bn0r.onrender.com
```

O arquivo `src/api.js` utiliza essa variável para definir o endereço da API:

```javascript
export const API_URL = import.meta.env.VITE_API_URL;
```

**Importante:** o prefixo `VITE_` disponibiliza a variável no código do navegador. Portanto, não armazene senhas, tokens secretos ou outras credenciais privadas em variáveis com esse prefixo.

### Executar em desenvolvimento

```bash
npm run dev
```

Acesse o endereço informado pelo Vite no terminal, normalmente:

```text
http://localhost:5173
```

### Gerar a versão de produção

```bash
npm run build
```

Os arquivos gerados serão armazenados no diretório `dist/`.

## 🔗 Integração com a API

O frontend consome uma API REST própria desenvolvida com Node.js, Express e MongoDB.

A comunicação é realizada utilizando a Fetch API e inclui:

- Cadastro e autenticação de usuários
- Validação de JWT
- Recuperação e redefinição de senha
- Upload e exclusão de fotos
- Listagem de publicações
- Comentários
- Estatísticas de visualizações

As rotas protegidas utilizam o token JWT fornecido pelo backend.

### Arquitetura da aplicação

| Serviço | Responsabilidade |
|---|---|
| React + Vite | Interface e interação com o usuário |
| Vercel | Hospedagem do frontend |
| Node.js + Express | API REST |
| Render | Hospedagem do backend |
| MongoDB Atlas | Armazenamento dos dados |
| Cloudinary | Armazenamento das imagens |
| Resend | Envio de e-mails |

**Repositório do backend:** [Dogs API](https://github.com/giosantos99/dogs-api)

## ☁️ Deploy

O frontend está publicado na **Vercel**, com deploy integrado ao repositório do GitHub.

### Configuração de produção

**Framework Preset:** Vite

**Build Command:**

```bash
npm run build
```

**Output Directory:**

```text
dist
```

**Variável de ambiente na Vercel:**

```dotenv
VITE_API_URL=https://dogs-api-bn0r.onrender.com
```

### Configuração do React Router

Para permitir o acesso direto às rotas da aplicação, o projeto utiliza o arquivo `vercel.json`
```bash
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}

Essa configuração permite que a navegação pelo React Router funcione mesmo após atualizar a página ou acessar uma rota diretamente.

**URL de produção:** [Dogs Social](https://app-dogs-social.vercel.app/)

## 📚 Créditos

O frontend foi desenvolvido com base no curso de React da [Origamid](https://www.origamid.com/).

Como extensão do projeto de estudo, desenvolvi uma API REST própria utilizando Node.js, Express e MongoDB, substituindo a API original do curso.

A integração também inclui serviços de armazenamento de imagens, envio de e-mails e hospedagem em nuvem.

## 👩‍💻 Autoria

Desenvolvido por Giovanna Santos de Souza.

Projeto para fins de estudo e portfólio.