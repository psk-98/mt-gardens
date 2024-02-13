export default {
  name: 'events',
  type: 'document',
  title: 'Events',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'description',
      title: 'Event description',
      type: 'text',
    },
    {
      name: 'price',
      title: 'Price per person',
      type: 'number',
    },
    {
      name: 'coverImage',
      type: 'image',
    },
  ],
}
