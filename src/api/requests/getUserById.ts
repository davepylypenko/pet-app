import { IUser } from "../../types/IUser";
import { api } from "../api";

export const getUserById = async (id): Promise<IUser> => {
  return api.GET(`users/${id}`);
};
