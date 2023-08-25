import { useState } from "react";

import Paginator from "@infra/components/Table/Paginator";

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
  const [pageIndex, setPageIndex] = useState(pagination?.pageIndex ?? 0);
  const [sort, setSort] = useState<Sort<K>>("none");

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
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column} onClick={() => sortBy(column)}>
                {column.toLocaleUpperCase()}
                {sort !== "none" && sort.column === column && (
                  <span> - {sort.direction.toLocaleLowerCase()}</span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentRows.map((row) => (
            <tr key={row[rowId]}>
              {columns.map((column) => (
                <td key={column}>{row[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {pagination && (
        <Paginator
          pageIndex={pageIndex}
          pageSize={pagination.pageSize}
          totalElements={rows?.length}
          onNext={() => {
            setPageIndex(() => pageIndex + 1);
            if (pagination.onPageIndexChange) {
              pagination.onPageIndexChange(pageIndex + 1);
            }
          }}
          onPrevious={() => {
            setPageIndex(() => pageIndex - 1);
            if (pagination.onPageIndexChange) {
              pagination.onPageIndexChange(pageIndex - 1);
            }
          }}
        />
      )}
    </>
  );
}
