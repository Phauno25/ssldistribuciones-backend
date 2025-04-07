import { renderTemplate } from "../../../../utils/utils";

export default {
  async afterCreate(event) {
    const { result } = event;

    if (result.publishedAt === null) {
      return;
    }

    try {
      const formConfig = await strapi
        .documents("api::forms-config.forms-config")
        .findFirst({ filters: { name: { $eq: "form-contactos" } } });

      if (formConfig) {
        const replacedTemplate = renderTemplate(
          formConfig.mail_bodyText,
          result
        );
        const mailToAddresses = formConfig.mail_to
          .split(",")
          .map((email) => email.trim());

        try {
          await strapi.plugins["email"].services.email.send({
            to: mailToAddresses,
            from: formConfig.mail_from,
            subject: formConfig.mail_subject,
            text: replacedTemplate,
          });
        } catch (err) {
          console.log(err);
        }
      }
    } catch (error) {
      strapi.log.error("Error sending email:", error);
    }
  },
};
