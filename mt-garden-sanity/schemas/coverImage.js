export default {
  name: 'coverImage',
  type: 'document',
  title: 'Cover Image',
  fields: [
    {
      name: 'pageName',
      type: 'string',
      title: 'Page Name',
    },
    {
      type: 'image',
      name: 'backgroundImage',
    },
  ],
}
