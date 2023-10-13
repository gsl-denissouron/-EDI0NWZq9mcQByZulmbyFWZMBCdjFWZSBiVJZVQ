import { useQuery, useQueryClient } from "@tanstack/react-query";

import { NewJoke, Joke } from "@domain/entities/Joke";
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

  const createJoke = async (joke: NewJoke) => {
    console.log("send create query for joke : " + JSON.stringify(joke));

    // send query

    await queryClient.invalidateQueries({ queryKey: [GET_JOKES_QUERY_KEY] });
  };

  const editJoke = async (joke: Joke) => {
    console.log("send edit query for joke : " + joke.id);

    // send query

    await queryClient.invalidateQueries({ queryKey: [GET_JOKES_QUERY_KEY] });
  };

  const deleteJoke = async (jokeIndex: number) => {
    console.log("send delete query for joke : " + jokeIndex);

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
    createJoke,
    editJoke,
    deleteJoke,
  };
}
