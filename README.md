<h3 align="center">
  Node.js + Sequelize + Docker
</h3>

## Pré-requisitos

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/pt-BR/docs/install)
- [Docker](https://docs.docker.com/get-docker/)

## Instalação e execução
1. Clone o repositório;
2. Entre no diretório `cd crud-node-sequelize`;
3. Execute `yarn install` para instalar as dependências do projeto;
4. Execute `docker-compose up -d` para preparar e subir o container com os services de node e o postgreSQL;
5. Execute `docker ps` para listar os containers sendo executados;
6. Execute `docker exec -it crud-node-sequelize-api-1 bash` para abrir um terminal bash no container;
7. Execute `yarn sequelize db:create` para criar a base de dados na instância do postgreSQL;
8. Execute `yarn sequelize db:migrate` para rodar as migrations e criar as tabelas na base de dados;
9. Import o aruivo `Crud-node.postman_collection.json` para o postman e utilize a collection de requests;
10. Acesse a api em: http://localhost:3000/


## Observação
Caso não deseje executar a base de dados no docker, altere as credenciais em `/src/config/database.js`;

