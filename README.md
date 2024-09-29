![img](https://github.com/lujakob/nestjs-realworld-example-app/blob/master/project-logo.png)

# 🌱 NestJS + GraphQL + Prisma + PostgreSQL Template

## Description

GraphQL API template that supports:

1. TBD
2. TBD

The API is deployed to **\_\_**, it is publically available on https://\***\*\_\_\*\***/graphql

## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# build
$ pnpm run build

# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Database-related

```bash
# Create postgres database in local docker container
1. Download Docker
2. Open it
3. In project root folder run the following command
$ pnpm docker:db:create

# Initialise the database (setting up schema & seeding) - once it has been created in docker
$ pnpm db:init

# seeding database
$ npx prisma db seed
```
