import { TwitterApi } from 'twitter-api-v2'

export const client = new TwitterApi({
  apiKey: 'sHQoCs2x6pvGPhTuXNAQffp2t',
  apiSecret: '6VMKjSNldhgrbAby9MViIGesImwruYpjJNFhVJkSJBsJzKcw4M',
  accessToken: '1673639573056806919-dFCnzCafMCRWrk9fxeooMknGAkp2GB',
  accessTokenSecret: '6blBTPQvq7UELCXDjHepBPBtiAGl8ldtE0yTIbj1MokQV'
});

export async function anyFunc() {
  const response = await client.v2

  console.log(response)
}

export async function getTweet(tweetId) {
  try {
    const response = await client.v2.get(`tweets/${tweetId}`);
    const tweet = response.data;

    console.log(tweet);
  } catch (error) {
    console.error('Ошибка при получении твита:', error);
  }
}