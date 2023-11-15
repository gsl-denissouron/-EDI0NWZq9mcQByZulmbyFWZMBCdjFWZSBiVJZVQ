import { useCreateJoke } from "./createJoke";
import { useDeleteJoke } from "./deleteJoke";
import { useEditJoke } from "./editJoke";
import { useGetJokes } from "./getJokes";
import { useJokes } from "./useJokes";

export const jokeHooks = {
  useCreateJoke,
  useEditJoke,
  useDeleteJoke,
  useGetJokes,
  useJokes,
};
