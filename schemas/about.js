export default {
  title: "About",
  name: "about",
  type: "document",
  fields: [
    {
      title: "Image",
      name: "image",
      type: "image",
    },
    {
      title: "Header",
      name: "header",
      type: "string",
    },
    {
      title: "Desc",
      name: "desc",
      type: "string",
    },
    {
      title: "Team members",
      name: "teamMembers",
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'teamMember'}
          ]
        }
      ]
    }
  ]
}
