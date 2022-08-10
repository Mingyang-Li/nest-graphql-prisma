# 🌱 NestJS + GraphQL + Prisma + PostgreSQL Template

## Description
Resolvers support:
1. All CRUD purposes
2. Filtering by all column data types
3. Subscriptions on `update` and `create`

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Database-related
```bash
# Create postgres database in local docker container
1. Download Docker
2. Open it
3. In project root folder run the following command
$ yarn docker:db

# Initialise the database - once it has been created in docker
$ yarn db:init

# seeding database
$ npx prisma seed
```
