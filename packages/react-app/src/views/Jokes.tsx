import { css } from "@emotion/react";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { Joke } from "@domain/entities/Joke";
import { Sort, SortConfig } from "@domain/entities/Sort";
import { jokePortfolio } from "@domain/services/JokePortfolio";

import { Paginator } from "@react-app/components/common/Paginator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortCell,
} from "@react-app/components/common/Table";
import { ArrowDown, Spinner } from "@react-app/components/ui";
import { UITableCell } from "@react-app/components/ui/Table/UICell";
import { UITableHead } from "@react-app/components/ui/Table/UIHead";
import { UITableRow } from "@react-app/components/ui/Table/UIRow";
import { UITable } from "@react-app/components/ui/Table/UITable";
import { useTranslate } from "@react-app/hooks/useTranslate";
import { jokeRepository } from "@react-app/repositories/JokeRepository";

function compareFn<T extends string | number>(a: T, b: T) {
  return typeof a === "string" && typeof b === "string"
    ? a.localeCompare(b)
    : (a as number) - (b as number);
}

function sortFn<T extends Record<keyof T, number | string>>(
  rows: T[],
  sort: Sort<T>
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

export function Jokes() {
  const { t } = useTranslate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { isLoading, error, data } = useQuery({
    queryKey: ["getJokes"],
    queryFn: jokePortfolio(jokeRepository).getJokes,
  });
  const [jokes, setJokes] = useState<Joke[] | undefined>(undefined);

  useEffect(() => {
    if (data) {
      setJokes(data);
    }
  }, [data]);

  const [sortConfig, setSortConfig] = useState(new SortConfig<Joke>());

  if (error) {
    return <div>{t("views.jokes.errorMessage")}</div>;
  }

  if (isLoading || jokes === undefined) {
    return <Spinner />;
  }

  const pageIndex = parseInt(searchParams.get("page") ?? "1") - 1;
  const pageSize = 5;

  const rows = sortFn(jokes, sortConfig.sort).slice(
    pageSize * pageIndex,
    pageSize * (pageIndex + 1)
  );
  const columns = ["id", "type", "setup", "punchline"] as const;

  return (
    <>
      <div
        css={css`
          margin: 25px 0;
          display: flex;
          justify-content: space-between;
        `}
      >
        <Paginator
          pageIndex={pageIndex}
          pageSize={pageSize}
          totalElements={jokes.length}
          onNext={() => {
            setSearchParams({ page: (pageIndex + 2).toString() });
          }}
          onPrevious={() => {
            setSearchParams({ page: pageIndex.toString() });
          }}
        />
        <div>
          <button
            onClick={() => {
              console.log("Open modal to create a joke");
            }}
          >
            {"add item"}
          </button>
        </div>
      </div>
      <Table as={UITable}>
        <TableHead as={UITableHead}>
          <TableRow as={UITableRow}>
            {columns.map((column) => (
              <TableCell key={column} as={UITableCell}>
                <TableSortCell
                  sort={sortConfig.getFor(column)}
                  iconComponent={ArrowDown}
                  onClick={() => {
                    setSortConfig(sortConfig.sortBy(column));
                  }}
                >
                  {column.toLocaleUpperCase()}
                </TableSortCell>
              </TableCell>
            ))}
            <TableCell>{"ACTIONS"}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody as={TableBody}>
          {rows.map((row) => (
            <TableRow key={row.id} as={UITableRow}>
              {columns.map((column) => (
                <TableCell key={column} as={UITableCell}>
                  {row[column]}
                </TableCell>
              ))}
              <TableCell key={"actions"} as={UITableCell}>
                <button
                  onClick={() => {
                    console.log("Open modal to edit a joke");
                  }}
                >
                  {"edit item"}
                </button>
                <button
                  onClick={() => {
                    setJokes(() => jokes.filter((joke) => joke.id !== row.id));
                  }}
                >
                  {"remove item"}
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
