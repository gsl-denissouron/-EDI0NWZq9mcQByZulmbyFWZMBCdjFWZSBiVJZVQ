import { useQueryClient } from "@tanstack/react-query";

import { Joke } from "@domain/entities/Joke";

import { GET_JOKES_QUERY_KEY } from "./internal";

export function useEditJoke() {
  const queryClient = useQueryClient();

  const editJoke = async (joke: Joke) => {
    console.log("send edit query for joke : " + joke.id);

    // send query

    await queryClient.invalidateQueries({ queryKey: [GET_JOKES_QUERY_KEY] });
  };

  return {
    editJoke,
  };
}
