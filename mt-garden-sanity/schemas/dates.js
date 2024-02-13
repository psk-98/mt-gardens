export default {
  name: 'eventDate',
  type: 'document',
  title: 'Event Date',
  fields: [
    {
      name: 'name',
      type: 'reference',
      title: 'Name of event',
      to: [{type: 'events'}],
    },
    {
      name: 'dayOfEvent',
      title: 'Day of Event',
      type: 'date',
      options: {
        dateFormat: 'DD-MM-YYYY',
      },
    },
    {
      name: 'startTime',
      title: 'Start Time',
      type: 'string',
    },
  ],
}
