import { useState } from "react";

import Paginator from "@infra/components/Paginator";

interface TableProps<K extends string, T extends Record<K, number | string>> {
  rows: T[];
  rowId: K;
  columns: K[];
  pagination?: { pageIndex: number; pageSize: number };
}

export default function Table<
  K extends string,
  T extends Record<K, number | string>,
>({ rows, rowId, columns, pagination }: TableProps<K, T>) {
  const [pageIndex, setPageIndex] = useState(pagination?.pageIndex ?? 0);

  const currentRows = pagination
    ? rows.slice(
        pagination.pageSize * pageIndex,
        pagination.pageSize * (pageIndex + 1)
      )
    : rows;

  return (
    <>
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column}>{column.toUpperCase()}</th>
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
          onNext={() => setPageIndex((oldIndex) => oldIndex + 1)}
          onPrevious={() => setPageIndex((oldIndex) => oldIndex - 1)}
        />
      )}
    </>
  );
}
