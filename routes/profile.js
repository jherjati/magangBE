async function routes(fastify, options) {
  fastify.get("/", async (req, reply) => {
    const { rows: returnVal } = await fastify.pg.query(
      `SELECT * FROM profiles;`,
      []
    );
    return returnVal;
  });

  fastify.get(
    "/:id",
    {
      schema: {
        params: {
          type: "object",
          properties: {
            id: { type: "number" },
          },
        },
      },
    },
    async (req, reply) => {
      const {
        rows: returnVal,
      } = await fastify.pg.query(`SELECT * FROM profiles WHERE id=$1;`, [
        req.params.id,
      ]);
      return returnVal;
    }
  );
}

module.exports = routes;
