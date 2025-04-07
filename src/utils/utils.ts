export function renderTemplate(template, data) {
  return template.replace(/{{\s*([\w.]+)\s*}}/g, (_, key) => {
    const keys = key.split(".");
    let value = data;

    for (let k of keys) {
      if (value && value.hasOwnProperty(k)) {
        value = value[k];
      } else {
        return "";
      }
    }

    return value != null ? value : "";
  });
}
