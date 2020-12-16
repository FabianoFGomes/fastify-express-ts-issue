# Fastify repro repo for .use typescript definition issue

```sh
npm install
npm run start
```

fastify.use() Gives TypeScript error: Property 'use' does not exist on type 'FastifyInstance<Server, IncomingMessage, ServerResponse, FastifyLoggerInstance> & PromiseLike.
This worked in previous 3.6.x versions of fastify.
