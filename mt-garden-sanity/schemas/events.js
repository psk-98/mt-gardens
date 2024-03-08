export default {
  name: 'events',
  type: 'document',
  title: 'Events',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      description: 'The name of the event',
    },
    {
      name: 'description',
      title: 'Event description',
      type: 'text',
      description: 'How would you describe the event?',
    },
    {
      name: 'price',
      title: 'Price per person',
      type: 'number',
      description: 'The price of the event per person',
    },
    {
      name: 'coverImage',
      type: 'image',
      description:
        'This is the image people will see when viewing the event, the same image will appear for the event when viewing events on separate dates.',
    },
  ],
}
