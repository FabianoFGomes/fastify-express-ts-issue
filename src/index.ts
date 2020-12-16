import fastify, { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

(async () => {
  const server = fastify({ trustProxy: true, logger: true });

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  await server.register(require('middie'));

  // test endpoint
  server.get('/', async (_request: FastifyRequest, _reply: FastifyReply) => {
    return { hello: 'world' }
  });

  // server.use(require('cors')()); // <-- expected to work, but get: Property 'use' does not exist on type 'FastifyInstance<Server, IncomingMessage, ServerResponse, FastifyLoggerInstance> & PromiseLike
  (server as any).use(require('cors')());
  await server.listen(3000, '0.0.0.0');
})();
