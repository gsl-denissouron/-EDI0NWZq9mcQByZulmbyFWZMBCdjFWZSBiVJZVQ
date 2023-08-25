import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

import { jokePortfolio } from "@domain/services/JokePortfolio";
import Paginator from "@infra/components/Paginator";
import Table from "@infra/components/Table/Table";
import { useTranslate } from "@infra/hooks/useTranslate";
import { jokeRepository } from "@infra/repositories/JokeRepositoryLocal";

export default function Jokes() {
  const { t } = useTranslate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { isLoading, error, data } = useQuery({
    queryKey: ["getJokes"],
    queryFn: jokePortfolio(jokeRepository).getJokes,
  });

  const pageIndexFromQueryParam = searchParams.get("page");
  const pageIndex = pageIndexFromQueryParam
    ? parseInt(pageIndexFromQueryParam) - 1
    : 0;

  if (isLoading) {
    return <div className="spinner"></div>;
  }

  if (error) {
    return <div>{t("views.jokes.errorMessage")}</div>;
  }

  return (
    data && (
      <>
        <Table
          rows={data}
          columns={["id", "type", "setup", "punchline"]}
          rowId="id"
          pagination={{
            pageIndex,
            pageSize: 5,
          }}
        />
        <Paginator
          pageIndex={pageIndex}
          pageSize={5}
          totalElements={data?.length}
          onNext={() =>
            setSearchParams(() => ({ page: (pageIndex + 2).toString() }))
          }
          onPrevious={() =>
            setSearchParams(() => ({ page: pageIndex.toString() }))
          }
        />
      </>
    )
  );
}
