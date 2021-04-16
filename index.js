// Require the framework and instantiate it
const fastify = require("fastify")({ logger: true });

// Register plugins
fastify.register(require("fastify-static"), require("./config/static").public);
fastify.register(
  require("fastify-static"),
  require("./config/static").publicAssets
);
fastify.register(
  require("fastify-static"),
  require("./config/static").publicForms
);

// Declare routes
fastify.get("/", async (request, reply) => {
  reply.sendFile("index.html");
});

fastify.get("/apaya", async (request, reply) => {
  return { hello: "apaya" };
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen(process.env.PORT, "0.0.0.0");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
