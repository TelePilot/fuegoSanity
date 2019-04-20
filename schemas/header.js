export default {
  title: "Header",
  name: "header",
  type: "document",
  fields: [
    {
      title: "Logo",
      name: "logo",
      type: "image",
    },
    {
      title: "Email",
      name: "email",
      type: "string",
    },
    {
      title: "Phone number",
      name: "phone",
      type: "string",
    },
    {
      title: "Menu",
      name: "menu",
      type: "array",
      of: [{type: 'menuItem'}]
    }
  ]
}
