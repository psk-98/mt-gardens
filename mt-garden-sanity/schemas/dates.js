export default {
  name: 'eventDate',
  type: 'document',
  title: 'Event Date',
  fields: [
    {
      name: 'event',
      type: 'reference',
      title: 'Name of event',
      to: [{type: 'events'}],
      description: 'This is the name of the event you will entering the date and time for',
    },
    {
      name: 'dayOfEvent',
      title: 'Day of Event',
      type: 'date',
      options: {
        dateFormat: 'DD-MM-YYYY',
      },
      description: 'The day of the event',
    },
    {
      name: 'startTime',
      title: 'Start Time',
      type: 'string',
      description: 'The time the event will start',
    },
  ],
  preview: {
    select: {
      name: 'event.name',
      dayOfEvent: 'dayOfEvent',
      startTime: 'startTime',
      media: 'event.coverImage',
    },
    prepare({name, dayOfEvent, startTime, media}) {
      return {title: name, media, subtitle: `on ${dayOfEvent} starts at ${startTime}`}
    },
  },
}
