const { request } = require("undici");
const { BasicMessage } = require("../schema");

async function routes(fastify, options) {
  fastify.post(
    "/",
    {
      schema: {
        tags: ["Mailer"],
        body: {
          type: "object",
          properties: {
            name: { type: "object" },
            email: { type: "object" },
            subject: { type: "object" },
            message: { type: "object" },
          },
        },
        response: {
          "5xx": { ...BasicMessage, description: "Failed response" },
        },
      },
    },
    async (req, reply) => {
      try {
        const { name, email, subject, message } = req.body;

        // TODO : nodemailer

        reply.status(200).send({
          name: name.value,
          email: email.value,
          subject: subject.value,
          message: message.value,
        });
      } catch (err) {
        console.log(err);
        return err;
      }
    }
  );
}

module.exports = routes;
