import { useQueryClient } from "@tanstack/react-query";

import { GET_JOKES_QUERY_KEY } from "./internal";

export function useDeleteJoke() {
  const queryClient = useQueryClient();

  const deleteJoke = async (jokeIndex: number) => {
    console.log("send delete query for joke : " + jokeIndex);

    // send query

    await queryClient.invalidateQueries({ queryKey: [GET_JOKES_QUERY_KEY] });
  };

  return {
    deleteJoke,
  };
}
