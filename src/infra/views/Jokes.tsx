import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import { Joke } from "@domain/entities/Joke";
import { Sort, SortConfig } from "@domain/entities/Sort";
import { jokePortfolio } from "@domain/services/JokePortfolio";

import Paginator from "@infra/components/common/Paginator";
import TableBody from "@infra/components/common/Table/Body";
import TableCell from "@infra/components/common/Table/Cell";
import TableHead from "@infra/components/common/Table/Head";
import TableRow from "@infra/components/common/Table/Row";
import TableSortCell from "@infra/components/common/Table/SortCell";
import Table from "@infra/components/common/Table/Table";
import ArrowDown from "@infra/components/ui/ArrowDown";
import { useTranslate } from "@infra/hooks/useTranslate";
import { jokeRepository } from "@infra/repositories/JokeRepositoryLocal";

function compareFn<T extends string | number>(a: T, b: T) {
  return typeof a === "string" && typeof b === "string"
    ? a.localeCompare(b)
    : (a as number) - (b as number);
}

function sortFn<T extends Record<K, number | string>, K extends string>(
  rows: T[],
  sort: Sort<K>
): T[] {
  if (sort === "none") {
    return rows;
  }

  return [...rows].sort((a, b) =>
    sort.direction === "ASC"
      ? compareFn(a[sort.column], b[sort.column])
      : compareFn(b[sort.column], a[sort.column])
  );
}

export default function Jokes() {
  const { t } = useTranslate();
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    isLoading,
    error,
    data: jokes,
  } = useQuery({
    queryKey: ["getJokes"],
    queryFn: jokePortfolio(jokeRepository).getJokes,
  });

  const [sortConfig, setSortConfig] = useState(new SortConfig<keyof Joke>());

  const pageIndex = parseInt(searchParams.get("page") ?? "1") - 1;
  const pageSize = 5;

  const rows = sortFn(jokes ?? [], sortConfig.sort).slice(
    pageSize * pageIndex,
    pageSize * (pageIndex + 1)
  );
  const columns = ["id", "type", "setup", "punchline"] as const;

  if (isLoading) {
    return <div className="spinner"></div>;
  }

  if (error) {
    return <div>{t("views.jokes.errorMessage")}</div>;
  }

  return (
    jokes && (
      <>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column}>
                  <TableSortCell
                    sort={sortConfig.getFor(column)}
                    iconComponent={ArrowDown}
                    onClick={() => setSortConfig(sortConfig.sortBy(column))}
                  >
                    {column.toLocaleUpperCase()}
                  </TableSortCell>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row["id"]}>
                {columns.map((column) => (
                  <TableCell key={column}>{row[column]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Paginator
          pageIndex={pageIndex}
          pageSize={pageSize}
          totalElements={jokes.length}
          onNext={() => setSearchParams({ page: (pageIndex + 2).toString() })}
          onPrevious={() => setSearchParams({ page: pageIndex.toString() })}
        />
      </>
    )
  );
}
