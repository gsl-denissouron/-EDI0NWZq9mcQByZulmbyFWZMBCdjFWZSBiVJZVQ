import { useQuery, useQueryClient } from "@tanstack/react-query";

import { Joke } from "@domain/entities/Joke";
import { sortFn } from "@domain/entities/Sort";
import { jokePortfolio } from "@domain/services/JokePortfolio";

import { jokeRepository } from "@react-app/repositories/JokeRepository";

import { usePagination } from "./usePagination";
import { useSort } from "./useSort";

const GET_JOKES_QUERY_KEY = "getJokes";

export function useJokes() {
  const queryClient = useQueryClient();
  const { pageIndex, pageSize, nextPage, previousPage } = usePagination({
    pageSize: 5,
  });
  const { sort, getActiveSortFor, sortByColumn: sortJokesBy } = useSort<Joke>();
  const { isLoading, error, data } = useQuery({
    queryKey: [GET_JOKES_QUERY_KEY],
    queryFn: jokePortfolio(jokeRepository).getJokes,
  });

  const jokes = data
    ? sortFn(data, sort).slice(pageSize * pageIndex, pageSize * (pageIndex + 1))
    : [];

  const deleteJoke = async (jokeIndex: number) => {
    console.log("send query for : " + jokeIndex);

    // send query

    await queryClient.invalidateQueries({ queryKey: [GET_JOKES_QUERY_KEY] });
  };

  return {
    isLoading,
    error,
    jokes,
    pageIndex,
    pageSize,
    totalElements: data?.length ?? 0,
    nextPage,
    previousPage,
    getActiveSortFor,
    sortJokesBy,
    deleteJoke,
  };
}
