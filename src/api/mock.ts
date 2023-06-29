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

export const defaultTweet = {
  id: 1,
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

export const newTweet = {
  id: 2,
  creator: defaultUser,
  data: {
    text: 'create new tweet',
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
  ],
};