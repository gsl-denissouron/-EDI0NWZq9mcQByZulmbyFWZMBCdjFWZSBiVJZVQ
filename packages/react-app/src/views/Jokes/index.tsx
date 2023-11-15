import { Spinner } from "@react-app/components/ui/Spinner";
import { useTranslate } from "@react-app/hooks/useTranslate";

import { useJokeTable } from "./hooks/useJokeTable";
import { JokeHeader } from "./JokeHeader";
import { JokeTable } from "./JokeTable";

export function Jokes() {
  const { t } = useTranslate();
  const {
    isLoading,
    error,
    jokes,
    pageIndex,
    pageSize,
    totalElements,
    nextPage,
    previousPage,
    getActiveSortFor,
    sortJokesBy,
    filterJokesBy,
  } = useJokeTable();

  if (error) {
    return <div>{t("views.jokes.errorMessage")}</div>;
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <JokeHeader
        {...{
          pageIndex,
          pageSize,
          totalElements,
          nextPage,
          previousPage,
          filterJokesBy,
        }}
      />
      <JokeTable
        {...{
          jokes,
          getActiveSortFor,
          sortJokesBy,
        }}
      />
    </>
  );
}
