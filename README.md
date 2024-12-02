# NodeJS Asana Backend Assignment

Take home backend engineering assessment test

## Pre-requisites
1. Node >= v22.11.0
2. Express v4.21.1
3. Postgres >= v12.22

## Installation
1. `npm install`

## Running on Local Development
1. `npm run dev`

## Server
1. REST API Server `http://127.0.0.1:3000`


## Run Test
1. `npm run test`

## Database Setup
1. Login to Postgres based on setup `psql -d postgres -U postgres`
2. Once it has login start creating the database using this command `CREATE DATABASE asana`
3. Then you can run the command migration file and seeder file locally


## Migration
1. Generating the migration file `npx sequelize-cli migration:generate --name=<migration>`
2. Running the migration file `npm run migrate`
3. Undo all the migration file `npm run migrate:undo`

## Seeders
1. Seeders contain insert manual query so you can run the query directly on the postgres

## Lint
1. Running the linter command `npm run lint`

2. As This project is developed on Windows OS some weird behavior of linting appear in my VSCode <br />
   For Linux/UNIX users can change the configuration on `.eslintrc` files and setup the linebreak <br />
   Changing on this command steps `line-break: ['error', 'unix']` <br />