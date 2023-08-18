import { useState } from "react";

import Paginator from "@infra/components/Table/Paginator";

interface TableProps<K, T> {
  rows: T[];
  rowId: K;
  columns: K[];
  pagination?: {
    pageIndex: number;
    pageSize: number;
    onPageIndexChange?: (newPageIndex: number) => void;
  };
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
