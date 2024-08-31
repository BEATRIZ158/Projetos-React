** Primeiro Projeto de React

Olá! Sejam-bem vindos ao repositório de Projetos React.
Aqui estão todos os projetos e estudos desenvolvidos com a biblioteca.

Esse é o primeiro projeto que desenvolvo com React, ele está sendo desenvolvido juntamente com o professor Matheus Battisti - Hora de Codar, toda a ideia e planejamento pertencem a ele, apenas estou estudando e reproduzindo.

Vamos começar explicando qual é a função ou importância de cada pasta ou arquivo que foi criado na extrutura do projeto.

1. node_modules

Contém todas as dependências (bibliotecas e pacotes) que o projeto precisa para funcionar. Não precisa alterar nada manualmente!

2. public

Contém arquivos que são entregues diretamente ao navegador do usuário pelo setvidor web sem passar por nenhum processo de transformação ou processamento adicional pelo React.

Geralmente usada para armazenar recursos estáticos que não mudam, como imagens, o arquivo 'manifest.json' e 'robots.txt'.

- index.html: É o arquivo HTML principal. O React injeta a aplicação aqui. O elemento '<div id="root"></div>' é onde o React renderiza toda a sua aplicação.

- manifest.json: É usado principal para PWA. Ele descreve como o aplicativo deve ser instalado na tela inicial do dispositivo e o comportamento de inicialização.

- robots.txt: Este arquivo informa aos motores de busca quais páginas eles devem ou não rastrear.

3. src

Contem o código-fonte da aplicação React.

- App.css: Contém estilos específicos para o componente 'App'. é possível definir estilso CSS para a aplicação aqui.

- App.js: Este é o componente principal da aplicação. É um componente funcional por padrão, onde é possível começar a adicionar componentes React e Lógica de interface de usuário.

- App.test.js: É usado para testes unitários. Por padrão, o create-react-app inclui um teste simples para verificar se o componente App renderiza sem erros.

- index.css: Contém estilos globais para o seu aplicativo. Estes estilos são aplicados a todos os componentes.

- index.js: Este é o ponto de entrada para a aplicação. Ele renderiza o componente App dentro do elemento <div id="root"></div> do index.html. É aqui que a árvore de componentes do React começa.

- reportWebVitals.js: Este arquivo é usado para medir e relatar métricas de desempenho do aplicativo (como tempos de carregamento). É opcional.

- setupTests.js: Configurações para o ambiente de testes. É configurado por padrão para usar a biblioteca Jest para testes.

4. .gitignore

Este arquivo especifica quais arquivos e pastas devem ser ignorados pelo Git, ou seja, arquivos que não devem ser enviados para o repositório de controle de versão (como node_modules, arquivos de configuração locais, etc.).
 
5. package.json

Este é o arquivo de configuração principal para o projeto. Ele inclui metadados sobre o projeto, como o nome, versão, scripts disponíveis (como start, build, test), e uma lista de dependências e devDependencies (bibliotecas necessárias para desenvolvimento).

6. package-lock.json

Ele descreve a árvore de dependências exata que foi gerada para garantir que instalações futuras sejam idênticas.

Fluxo de Inicialização da Aplicação React

1. index.html (pasta public):

 Ele é o contêiner onde toda a sua aplicação React será renderizada.

 2. index.js (pasta src):

Ele importa o React, o ReactDOM (para manipulação do DOM), e o componente principal da aplicação (normalmente App).

O código típico neste arquivo usa o método ReactDOM.render() para renderizar o componente App dentro do elemento <div id="root"></div> que mencionamos no index.html

3. App.js (pasta 'src'):

O App.js é o componente principal da aplicação React. Ele é o ponto inicial da árvore de componentes da sua aplicação.

No App.js, você pode definir a estrutura e a lógica de sua aplicação, incluindo a renderização de outros componentes. Por exemplo, o App.js pode renderizar um cabeçalho, um menu de navegação, e o conteúdo principal.

4. Outros componentes (arquivos .js adicionais na pasta src):

A partir do App.js, você pode importar e renderizar outros componentes que compõem a aplicação. Por exemplo, Header.js, Footer.js, MainContent.js, etc.
Esses componentes são chamados de forma hierárquica. O App.js pode renderizar Header.js, que pode renderizar Logo.js, e assim por diante.

Resumo do Fluxo:
1. index.html: Contém o contêiner <div id="root"></div> onde a aplicação será montada.
2. index.js: Ponto de entrada JavaScript; importa o App e usa ReactDOM.render() para inserir o componente App no contêiner root do index.html.
3. App.js: Componente principal que define a estrutura básica da aplicação React. Ele pode importar e renderizar outros componentes.
4. Outros componentes: Arquivos adicionais que são importados e renderizados no App.js ou em outros componentes, criando a árvore de componentes que forma a interface completa da aplicação.
