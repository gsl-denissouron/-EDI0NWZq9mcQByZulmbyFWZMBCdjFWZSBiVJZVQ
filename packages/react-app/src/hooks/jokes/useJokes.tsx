import { Joke } from "@domain/entities/Joke";
import { sortFn } from "@domain/entities/Sort";

import { useFilterOnFields } from "../useFilterOnFields";
import { usePagination } from "../usePagination";
import { useSort } from "../useSort";

import { useGetJokes } from "./getJokes";

export function useJokes() {
  const { pageIndex, setPageIndex, pageSize, nextPage, previousPage } =
    usePagination({
      pageSize: 5,
    });
  const { sort, getActiveSortFor, sortByColumn: sortJokesBy } = useSort<Joke>();
  const { filterBy, filterFn } = useFilterOnFields<Joke>({
    fields: ["punchline", "setup", "type"],
  });
  const { isLoading, error, data } = useGetJokes();

  const filteredJokes = (data ?? []).filter(filterFn);
  if (filteredJokes.length < pageSize * pageIndex) {
    setPageIndex(0);
  }

  const jokes = sortFn(filteredJokes, sort).slice(
    pageSize * pageIndex,
    pageSize * (pageIndex + 1)
  );

  return {
    isLoading,
    error,
    jokes,
    pageIndex,
    pageSize,
    totalElements: filteredJokes.length,
    nextPage,
    previousPage,
    getActiveSortFor,
    sortJokesBy,
    filterJokesBy: filterBy,
  };
}
