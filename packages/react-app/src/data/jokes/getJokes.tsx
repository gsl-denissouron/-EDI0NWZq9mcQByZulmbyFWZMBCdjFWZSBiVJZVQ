import { useQuery } from "@tanstack/react-query";

import { jokePortfolio } from "@domain/services/JokePortfolio";

import { jokeRepository } from "@react-app/repositories/JokeRepository";

import { GET_JOKES_QUERY_KEY } from "./internal";

export function useGetJokes() {
  const { isLoading, error, data } = useQuery({
    queryKey: [GET_JOKES_QUERY_KEY],
    queryFn: jokePortfolio(jokeRepository).getJokes,
  });

  return {
    isLoading,
    error,
    data,
  };
}
