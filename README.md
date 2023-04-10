This is a [Docker]ized(https://www.docker.com/) [Next.js](https://nextjs.org/) expense tracker demo project.

## Getting Started

First, clone the repository

```bash
git clone .....
```

Second, run the Docker daemon on your PC and run this command;

```bash
docker-compose up --build --force-recreate
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Even in Docker you can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
