import { useQuery } from "@tanstack/react-query";

import { Joke } from "@domain/entities/Joke";
import { sortFn } from "@domain/entities/Sort";
import { jokePortfolio } from "@domain/services/JokePortfolio";

import { jokeRepository } from "@react-app/repositories/JokeRepository";

import { usePagination } from "../usePagination";
import { useSort } from "../useSort";

import { GET_JOKES_QUERY_KEY } from "./internal";

export function useGetJokes() {
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
  };
}
