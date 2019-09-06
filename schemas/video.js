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
      title: 'Client Work?',
      name: 'clientWork',
      type: 'boolean'
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
      title: "Thumbnail",
      name: "thumbnail",
      type: "image",
    },
    {
      title: "BTS",
      name: "bts",
      type: "array",
      of: [
        {
          type: "image"
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
