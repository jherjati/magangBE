module.exports = {
  options: {
    confKey: "config", // optional, default: 'config'
    schema: {
      type: "object",
      required: ["PORT", "DATABASE_URL", "JWT_SECRET", "ADMIN_EMAIL"],
      properties: {
        PORT: {
          type: "string",
        },
        DATABASE_URL: {
          type: "string",
        },
        JWT_SECRET: {
          type: "string",
        },
        ADMIN_EMAIL: {
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
