interface PaginatorProps {
  pageIndex: number;
  pageSize: number;
  totalElements: number;
  onNext: () => void;
  onPrevious: () => void;
}

export default function Paginator({
  pageIndex,
  pageSize,
  totalElements,
  onNext,
  onPrevious,
}: PaginatorProps) {
  const isFirst = pageIndex === 0;
  const isLast = totalElements / pageSize <= pageIndex + 1;

  return (
    <>
      <span>Current Page: {pageIndex + 1}</span>
      <button onClick={onPrevious} disabled={isFirst}>
        Previous Page
      </button>{" "}
      <button onClick={onNext} disabled={isLast}>
        Next Page
      </button>
    </>
  );
}
