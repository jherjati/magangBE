// Require the framework and instantiate it
const fastify = require("fastify")({ logger: true });

// Register core plugins
fastify.register(require("fastify-static"), require("./config/static").public);
fastify.register(
  require("fastify-static"),
  require("./config/static").publicAssets
);
fastify.register(
  require("fastify-static"),
  require("./config/static").publicForms
);

// Register custom routes (route included)
fastify.register(require("./routes/static"));

// Run the server!
const start = async () => {
  try {
    await fastify.listen(process.env.PORT || 5000, "0.0.0.0");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
