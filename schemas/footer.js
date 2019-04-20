export default {
  title: "Footer",
  name: "footer",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
    },
    {
      title: "Social media",
      name: "socialMedia",
      type: "array",
      of: [{type: 'socialMedia'}],
    },
    {
      title: "Company info",
      name: "companyInfo",
      type: "string",
    }
  ]
}
