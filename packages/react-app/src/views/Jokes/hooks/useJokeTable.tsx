import { Joke } from "@domain/entities/Joke";
import { sortFn } from "@domain/entities/Sort";

import { useGetJokes } from "@react-app/data/jokes/getJokes";
import { useFilterOnFields } from "@react-app/hooks/useFilterOnFields";
import { usePagination } from "@react-app/hooks/usePagination";
import { useSort } from "@react-app/hooks/useSort";

export function useJokeTable() {
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
