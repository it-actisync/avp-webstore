

<h1 align="center">
  Atelier Valentino Parisi
</h1>

<p align="center">


## Preconfigured 3rd party integrations

- MinIO file storage: Replaces local file storage with MinIO cloud storage, automatically creating a 'medusa-media' bucket for your media files. [README](backend/src/modules/minio-file/README.md)
- Resend email integration 
- Stripe payment service
- Meilisearch integration

# /backend

### local setup
- `cd /backend`
- `pnpm install` or `npm i`
- Rename `.env.template` ->  `.env`
- To connect to your online database from your local machine, copy the `DATABASE_URL` value auto-generated on Railway and add it to your `.env` file.
  - If connecting to a new database, for example a local one, run `pnpm ib` or `npm run ib` to seed the database.
- `pnpm dev` or `npm run dev`

### requirements
- **postgres database** (Automatic setup when using the Railway template)
- **redis** (Automatic setup when using the Railway template) - fallback to simulated redis.
- **MinIO storage** (Automatic setup when using the Railway template) - fallback to local storage.
- **Meilisearch** (Automatic setup when using the Railway template)

### commands

`cd backend/`
`npm run ib` or `pnpm ib` will initialize the backend by running migrations and seed the database with required system data.
`npm run dev` or `pnpm dev` will start the backend (and admin dashboard frontend on `localhost:9000/app`) in development mode.
`pnpm build && pnpm start` will compile the project and run from compiled source. This can be useful for reproducing issues on your cloud instance.

# /storefront

### local setup
Install dependencies `npm i` of `pnpm i`
Rename `.env.local.template` ->  `.env.local`

### requirements
- A running backend on port 9000 is required to fetch product data and other information needed to build Next.js pages.

### commands
`cd storefront/`
`npm run dev` or `pnpm dev` will run the storefront on uncompiled code, with hot-reloading as files are saved with changes.


