import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
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
  const {
    isLoading,
    error,
    data: jokes,
  } = useQuery({
    queryKey: ["getJokes"],
    queryFn: jokePortfolio(jokeRepository).getJokes,
  });

  const [sortConfig, setSortConfig] = useState(new SortConfig<Joke>());

  const pageIndex = parseInt(searchParams.get("page") ?? "1") - 1;
  const pageSize = 5;

  const rows = sortFn(jokes ?? [], sortConfig.sort).slice(
    pageSize * pageIndex,
    pageSize * (pageIndex + 1)
  );
  const columns = ["id", "type", "setup", "punchline"] as const;

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div>{t("views.jokes.errorMessage")}</div>;
  }

  return (
    jokes && (
      <>
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
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
      </>
    )
  );
}
