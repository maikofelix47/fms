# FMS

## The project consists of the following

- NextJs v14+
- Prisma ORM v5+
- Shadcn/ui
- Tailwind css v3+
- PostgreSQL v15
- NextAuth v4
- Node v20+
- Typescript v5+

### Set Up

Run the following command:

1. Fork the project and clone it.
2. Navigate into the project and run

```sh
npm install
```

3. Run prisma migrations

```sh
npx prisma migrate dev
```

4. Start the development server

```sh
npm run dev
```

5. Navigate to `http://localhost:3000/auth/login`

### Build

To build the project run the following

```sh
npm run build
```

### Linting

Project uses Prettier for linting

```sh
npm run lint
```
