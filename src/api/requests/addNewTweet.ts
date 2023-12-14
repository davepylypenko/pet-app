import { ITweet } from "../../types/ITweet";
import { api } from "../api";

type addNewTweetBody = {
  title: string;
  body: string;
  userId: number;
};

export const addNewTweet = (body: addNewTweetBody): Promise<ITweet> => {
  return api.POST('posts', body);
};
