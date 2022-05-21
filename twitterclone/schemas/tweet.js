export default {
  name: 'tweet',
  title: 'Tweet',
  type: 'document',
  fields: [
    {
      name: 'text',
      title: 'Text in Tweer',
      type: 'string',
    },
    {
      name: 'blockTweet',
      title: 'Block Tweet',
      type: 'Admin Controls: Toggle if Tweet is deemed inappropriate',
      type: 'boolean',
    },
    {
      name: 'username',
      title: 'Username',
      type: 'string',
    },
    {
      name: 'profileImg',
      title: 'Profile image',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Tweet image',
      type: 'string',
    },
  ],
}
