module.exports = ({ env }) => [
  "strapi::errors",
  "strapi::security",
  {
    name: "strapi::cors",
    config: {
      origin: env.array("CORS_ORIGIN"),
    },
  },
];
