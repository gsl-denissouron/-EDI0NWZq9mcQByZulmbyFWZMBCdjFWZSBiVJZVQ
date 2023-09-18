import { css } from "@emotion/react";
import { useSearchParams } from "react-router-dom";

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
import { useJokes } from "@react-app/hooks/useJokes";
import { useTranslate } from "@react-app/hooks/useTranslate";

export function Jokes() {
  const { t } = useTranslate();
  const [searchParams, setSearchParams] = useSearchParams();
  const pageIndex = parseInt(searchParams.get("page") ?? "1") - 1;
  const pageSize = 5;
  const {
    isLoading,
    error,
    jokes: rows,
    totalElements,
    removeJoke,
    getActiveSortFor,
    sortJokesBy,
  } = useJokes({
    pageIndex,
    pageSize,
  });

  if (error) {
    return <div>{t("views.jokes.errorMessage")}</div>;
  }

  if (isLoading) {
    return <Spinner />;
  }
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
          totalElements={totalElements}
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
              <TableCell
                key={column}
                as={UITableCell}
                onClick={() => {
                  sortJokesBy(column);
                }}
              >
                <TableSortCell
                  sort={getActiveSortFor(column)}
                  iconComponent={ArrowDown}
                >
                  {column.toLocaleUpperCase()}
                </TableSortCell>
              </TableCell>
            ))}
            <TableCell>{"ACTIONS"}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody as={TableBody}>
          {rows.map((row, index) => (
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
                    removeJoke(index);
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
