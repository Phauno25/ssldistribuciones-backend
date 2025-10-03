module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "strapi-provider-email-brevo",
      providerOptions: {
        apiKey: env("SMTP_API_KEY"),
      },
      settings: {
        defaultSenderEmail: "pablohcoronel25@gmail.com",
        defaultSenderName: "Pablo Coronel",
        defaultReplyTo: "pablohcoronel25@gmail.com",
      },
    },
  },
});
