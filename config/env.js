module.exports = {
  options: {
    confKey: "config", // optional, default: 'config'
    schema: {
      type: "object",
      required: ["PORT", "PGSTRING"],
      properties: {
        PORT: {
          type: "string",
        },
        PGSTRING: {
          type: "string",
        },
      },
    },
    dotenv: {
      path: `${__dirname}/../.env`,
      debug: true,
    },
  },
};
