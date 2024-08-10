# BarberHub

BarberHub é uma aplicação web inovadora que permite aos usuários descobrir serviços de barbearia, agendar compromissos e experimentar um ambiente de cuidados de primeira classe. Desenvolvida com React e Firestore, a BarberHub oferece uma interface moderna e intuitiva para facilitar a experiência do usuário.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para criar interfaces de usuário.
- **Material-UI (MUI)**: Biblioteca de componentes React para design consistente e moderno.
- **Firestore**: Banco de dados NoSQL escalável para armazenar e sincronizar dados em tempo real.
- **React Router**: Gerenciamento de rotas no React para navegação dinâmica.

## Dependências

O projeto utiliza as seguintes dependências:

- **@mui/material**: Componentes de UI para React.
- **@emotion/react** e **@emotion/styled**: Ferramentas de estilização para MUI.
- **react-router-dom**: Roteamento dinâmico para aplicações React.
- **firebase**: SDK para integração com serviços do Firebase.

### Instalação das Dependências

Para instalar todas as dependências necessárias, execute o seguinte comando:

```bash
npm install @mui/material @emotion/react @emotion/styled react-router-dom firebase
```

## Funcionalidades

- **Visualizar Serviços**: Explore a variedade de serviços de corte e cuidados disponíveis.
- **Agendamento Online**: Reserve compromissos de maneira fácil e rápida com confirmação instantânea.
- **Experiência do Usuário**: Interface amigável com animações suaves e design responsivo.

## Requisitos

- **Node.js**: Certifique-se de ter o Node.js instalado na sua máquina. [Download Node.js](https://nodejs.org/)
- **npm**: O npm é necessário para gerenciar pacotes e dependências do projeto. O npm é instalado automaticamente com o Node.js.

## Configuração do Firebase

Para configurar o Firebase no projeto, siga estas etapas:

1. Crie um projeto no [Firebase Console](https://console.firebase.google.com/).
2. Na seção **Configurações do Projeto**, copie as credenciais de configuração do Firebase.
3. Crie um arquivo `firebaseConfig.js` na pasta `src` do seu projeto.
4. Cole o seguinte código no arquivo `firebaseConfig.js`, substituindo as configurações pelo seu próprio projeto:

```javascript
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_AUTH_DOMAIN",
  projectId: "SEU_PROJECT_ID",
  storageBucket: "SEU_STORAGE_BUCKET",
  messagingSenderId: "SEU_MESSAGING_SENDER_ID",
  appId: "SEU_APP_ID",
  measurementId: "SEU_MEASUREMENT_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { auth, db, analytics };
export default app;
```

## Instalação

Para executar este projeto localmente, siga estas etapas:

1. Clone este repositório:

   ```bash
   git clone https://github.com/seu-usuario/barberhub.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd barberhub
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm start
   ```

5. Abra seu navegador e acesse `http://localhost:3000`.

## Contribuição

Contribuições são bem-vindas! Siga estas etapas para contribuir com o projeto:

1. Faça um fork do repositório.
2. Crie um novo branch para suas alterações: `git checkout -b minha-nova-funcionalidade`
3. Faça commit das suas alterações: `git commit -m 'Adiciona nova funcionalidade'`
4. Envie para o branch remoto: `git push origin minha-nova-funcionalidade`
5. Abra um pull request para revisão.

```