// Require the framework and instantiate it
const fastify = require("fastify")({ logger: false });

if (process.env.NODE_ENV !== "production")
  require("dotenv").config(require("./config/env").options.dotenv);

// Register core plugins
fastify.register(require("fastify-env"), {
  ...require("./config/env").options,
  dotenv: false,
});

fastify.register(require("fastify-postgres"), require("./config/postgres"));
fastify.register(require("fastify-static"), require("./config/static").public);
fastify.register(require("point-of-view"), require("./config/view"));
fastify.register(require("fastify-swagger"), require("./config/swagger"));

// Register custom routes (route included)
fastify.register(require("./routes/static"));
fastify.register(require("./routes/ssr"));
fastify.register(require("./routes/profile"), { prefix: "/api/profiles" });

// Run the server!
fastify.ready((err) => {
  if (err) throw err;
  fastify.swagger();
});

const start = async () => {
  try {
    await fastify.listen(process.env.PORT, "0.0.0.0");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
