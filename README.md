# Minhas atividades da imersão alura BackEnd

## Aula 1 (feita dia 21/11/2024)
### Desvendando Apis e Servidores | Minhas notas

"O FrontEnd é tudo que interagimos no site, já o backEnd é onde a magia acontece, onde a logica do sistema com as funções e banco de dados."
-Gemini

Instalamos NodeJs Globalmente e iniciamos VScode e criamos uma pasta para o projeto.
No terminal escrevi `npm init es6 -y` para criar o arquivo package.json para o projeto logo apos instalei as dependencias com `npm install express` no terminal, criei um arquivo js (JavaScript) E importar o express, criei uma variavel usando const com o nome app para iniciar o express, coloco uma função ára 'escutar' o servidor.


## Aula 2 (feita dia 22/11/2024)
### Criando e estruturando sua primeira api com get e banco de dados | Minhas notas

Irei construir uma base de dados com estruturas em um array, pedir para o gemini criar um mock de dados para a lição tendo uma imagem e descrição (Até deu ideia de uma citação inspiradora.) para fatilitar criei uma funçãço que procuramos um dado especifico por id e criamos pagina dinamica para cada dado, logo criei uma conta no mongoDB para usar como um servidor na nuvem.

## Aula 3 (não completada dia 24/11/2024)
### Conectando sua API ao MongoDB: Estrutura, Conexão e refatoração

Nessa aula Eu conectei o meu codigo ao banco de dados MongoDB, Instalei o MongoDB no Node, depois eu crirei um banco de dados no MongoDB e 2 objetos/dados com a mesma estrutura do array no server.js, apos isso eu colocei a chave do banco de dados em um arquivo .env, rodei o script com a chave de ambiente `node -watch -env-file=.env server.js`, eu tive problemas constantes para conectar no banco de dados e depois de um dia tentando eu tive que desistir por um tempo (ate logo!)

