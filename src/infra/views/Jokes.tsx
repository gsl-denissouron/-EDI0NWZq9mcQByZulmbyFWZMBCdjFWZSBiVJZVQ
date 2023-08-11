import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { jokePortfolio } from "@domain/services/JokePortfolio";
import Table from "@infra/components/Table";
import { jokeRepository } from "@infra/repositories/JokeRepository";

export default function Jokes() {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const { isLoading, error, data } = useQuery({
    queryKey: ["getJokes"],
    queryFn: jokePortfolio(jokeRepository).getJokes,
  });
  const pageIndexFromQueryParam = searchParams.get("page");

  if (isLoading) {
    return <div className="spinner"></div>;
  }

  if (error) {
    return <div>{t("views.jokes.errorMessage")}</div>;
  }

  return (
    data && (
      <Table
        rows={data}
        columns={["id", "type", "setup", "punchline"]}
        rowId="id"
        pagination={{
          pageIndex: pageIndexFromQueryParam
            ? parseInt(pageIndexFromQueryParam) - 1
            : 0,
          pageSize: 5,
          onPageIndexChange: (newPageIndex) =>
            setSearchParams(() => ({ page: (newPageIndex + 1).toString() })),
        }}
      />
    )
  );
}
