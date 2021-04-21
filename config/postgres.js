module.exports = {
  connectionString: process.env.PGSTRING,
  ssl: { rejectUnauthorized: false },
};
