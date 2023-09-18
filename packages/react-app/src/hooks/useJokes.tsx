import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { Joke } from "@domain/entities/Joke";
import { ActiveSort, Sort, sortBy, sortFn } from "@domain/entities/Sort";
import { jokePortfolio } from "@domain/services/JokePortfolio";

import { jokeRepository } from "@react-app/repositories/JokeRepository";

export function useJokes({
  pageIndex,
  pageSize,
}: {
  pageIndex: number;
  pageSize: number;
}) {
  const { isLoading, error, data } = useQuery({
    queryKey: ["getJokes"],
    queryFn: jokePortfolio(jokeRepository).getJokes,
  });

  const [sort, setSort] = useState<Sort<Joke>>({
    column: undefined,
    direction: "ASC",
  });

  const jokes = data
    ? sortFn(data, sort).slice(pageSize * pageIndex, pageSize * (pageIndex + 1))
    : [];

  const getActiveSortFor = (column: keyof Joke): ActiveSort => ({
    active: sort.column === column,
    direction: sort.direction,
  });

  const sortJokesBy = (column: keyof Joke) => {
    setSort(sortBy(column));
  };

  return {
    isLoading,
    error,
    jokes,
    totalElements: data?.length ?? 0,
    getActiveSortFor,
    sortJokesBy,
    removeJoke: (jokeIndex: number) => {
      console.log("send query");
      // send query
    },
  };
}
