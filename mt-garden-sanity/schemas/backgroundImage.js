export default {
  name: 'backgroundImage',
  type: 'document',
  title: 'Page Background Image',
  fields: [
    {
      name: 'pageName',
      type: 'string',
      title: 'Page Name',
      options: {
        list: [
          {value: 'Home', title: 'Home Page'},
          {value: 'Services', title: 'Services Page'},
          {value: 'About', title: 'About Page'},
          {value: 'Contact', title: 'Contact Page'},
        ],
      },
      validation: (rule) => rule.required(),
      description:
        'This is the page the image will appear on as the background. The diiferent pages are on the list',
    },
    {
      type: 'image',
      name: 'backgroundImage',
      description: 'This is the image that will appear on the page you selected above.',
      validation: (rule) => rule.required(),
    },
  ],
}
