import { ITweet } from "../../types/ITweet";
import { api } from "../api";

export const getPosts = async (): Promise<ITweet[]> => {
  return api.GET('posts');
};
