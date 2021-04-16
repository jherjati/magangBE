const path = require("path");

module.exports = {
  public: {
    root: path.join(__dirname, "../public"),
    prefix: "/",
  },
  publicAssets: {
    root: path.join(__dirname, "../public/assets"),
    prefix: "/assets",
    decorateReply: false,
  },
  publicForms: {
    root: path.join(__dirname, "../public/forms"),
    prefix: "/forms",
    decorateReply: false,
  },
};
