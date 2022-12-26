![img](https://github.com/lujakob/nestjs-realworld-example-app/blob/master/project-logo.png)
# 🌱 NestJS + GraphQL + Prisma + PostgreSQL Template

## Description
GraphQL API template that supports:
1. All CRUD purposes with advanced filtering capabilities across all data types for all columns
2. Disallowing & prohibiting updates on system fields such as `createdAt` and `updatedAt`
3. Offset-based Pagination on `Payment` table
4. Subscription for the latest updated/created `Payment`

Other features:
- CRON job updating random DB row every 12 hours to keep `Supabase` free tier DB running (they turn off DBs that aren't active within 7 days)
- Deployed to Render.com @ https://nest-graphql-prisma-g5s7.onrender.com/graphql

## API in action
![image](https://user-images.githubusercontent.com/53138432/205417698-f5ce8d1c-3777-46ab-bb52-c6cdad79e991.png)

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# build
$ yarn run build

# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Database-related
### Hosted DB provider: Supabase
### Sadly Heroku will take down all free-tier services from Oct 2022, so I had to find alternative solutions to Heroku Postgres

```bash
# Create postgres database in local docker container
1. Download Docker
2. Open it
3. In project root folder run the following command
$ yarn docker:db

# Initialise the database (setting up schema & seeding) - once it has been created in docker
$ yarn db:init

# seeding database
$ npx prisma db seed
```
