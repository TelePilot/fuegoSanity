export default {
  title: "Video",
  name: "video",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Description",
      name: "description",
      type: "text",
    },
    {
      title: "Date",
      name: "date",
      type: "date",
    },
    {
      title: "Client",
      name: "client",
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'client'}
          ]
        }
      ]
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
    },
    {
      title: "Vimeo Link",
      name: "vimeoLink",
      type: "url",
    }
  ]
}
