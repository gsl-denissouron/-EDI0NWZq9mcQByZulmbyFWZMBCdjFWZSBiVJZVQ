import { useQueryClient } from "@tanstack/react-query";

import { NewJoke } from "@domain/entities/Joke";

import { GET_JOKES_QUERY_KEY } from "./internal";

export function useCreateJoke() {
  const queryClient = useQueryClient();

  const createJoke = async (joke: NewJoke) => {
    console.log("send create query for joke : " + JSON.stringify(joke));

    // send query

    await queryClient.invalidateQueries({ queryKey: [GET_JOKES_QUERY_KEY] });
  };

  return {
    createJoke,
  };
}
