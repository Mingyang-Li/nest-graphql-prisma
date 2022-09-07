# 🌱 NestJS + GraphQL + Prisma + PostgreSQL Template

## Description
Resolvers support:
1. All CRUD purposes
2. Filtering by all column data types
3. Subscriptions of `Array<Payment>` on `update` and `create` by filter args - In progress
4. CRON job updating random DB row to keep `Supabase` free tier DB running (they turn off DBs that aren't active within 7 days)
5. Deployed to AWS Lambda via Serverless framework

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
