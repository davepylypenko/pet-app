const defaultUser = {
  id: 1,
  name: 'user name',
  // avatar: 'url',
}

const defaultComment = {
  creator: defaultUser,
  data: {
    text: 'any comment for tweet in twitter'
  }
};

const defaultTweet = {
  id: 9135090912834,
  creator: defaultUser,
  data: {
    text: 'any text for twitter',
    comments: [defaultComment],
    likes: [
      {
        user: defaultUser,
      }
    ]
  }
};

export const data = {
  tweets: [
    defaultTweet,
    defaultTweet,
    defaultTweet,
    defaultTweet,
    defaultTweet,
    defaultTweet,
    defaultTweet,
    defaultTweet,
    defaultTweet,
    defaultTweet,
    defaultTweet,
    defaultTweet,
  ],
};