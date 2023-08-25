import { useState } from "react";

import TableBody from "./Body";
import TableCell from "./Cell";
import TableHead from "./Head";
import TableRow from "./Row";
import TableSort from "./Sort";
import ArrowDown from "../ui/ArrowDown";

type Sort<K> = "none" | { column: K; direction: "ASC" | "DESC" };

interface Pagination {
  pageIndex: number;
  pageSize: number;
  onPageIndexChange?: (newPageIndex: number) => void;
}

interface TableProps<K, T> {
  rows: T[];
  rowId: K;
  columns: K[];
  pagination?: Pagination;
}

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

function paginate<T>(
  rows: T[],
  pageIndex: number,
  pagination?: Pagination
): T[] {
  return pagination
    ? rows.slice(
        pagination.pageSize * pageIndex,
        pagination.pageSize * (pageIndex + 1)
      )
    : rows;
}

export default function Table<
  K extends string,
  T extends Record<K, number | string>,
>({ rows, rowId, columns, pagination }: TableProps<K, T>) {
  const [sort, setSort] = useState<Sort<K>>("none");
  const pageIndex = pagination?.pageIndex ?? 0;

  const sortBy = (column: K) => {
    if (sort === "none") {
      return setSort({ column, direction: "ASC" });
    }

    if (sort.column === column) {
      if (sort.direction === "ASC") {
        return setSort({ column, direction: "DESC" });
      }

      if (sort.direction === "DESC") {
        return setSort("none");
      }
    }

    return setSort({ column, direction: "ASC" });
  };

  const currentRows = paginate(sortFn(rows, sort), pageIndex, pagination);

  return (
    <>
      <table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column}>
                <TableSort
                  sort={
                    sort !== "none" && sort.column === column
                      ? {
                          active: true,
                          direction: sort.direction,
                        }
                      : { active: false }
                  }
                  iconComponent={ArrowDown}
                  onClick={() => sortBy(column)}
                >
                  {column.toLocaleUpperCase()}
                </TableSort>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {currentRows.map((row) => (
            <TableRow key={row[rowId]}>
              {columns.map((column) => (
                <TableCell key={column}>{row[column]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </table>
    </>
  );
}
