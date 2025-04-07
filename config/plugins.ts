module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: "pablohcoronel25@gmail.com",
        defaultReplyTo: "pablohcoronel25@gmail.com",
      },
    },
  },
});
