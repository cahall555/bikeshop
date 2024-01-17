# Bikeshop app

To run locally use the following commands.

`docker compose up --build`
## Setup database
`docker exec -it bikeshop-db-1 psql -U admin`
Once in container: `CREATE DATABASE bikeshop_api;`
### Migrate database tables
`docker exec -it bikeshop-1 npx knex migrate:latest`
### Seed the database
`docker exec -it bikeshop-backend-1 npx seed:run`
