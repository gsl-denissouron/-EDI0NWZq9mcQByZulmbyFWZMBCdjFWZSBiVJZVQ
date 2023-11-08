import { useSearchParams } from "react-router-dom";

interface PaginationProps {
  pageSize: number;
}

export function usePagination({ pageSize }: PaginationProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  const pageIndex = parseInt(searchParams.get("page") ?? "1") - 1;
  const setPageIndex = (pageIndex: number) => {
    setSearchParams({ page: (pageIndex + 1).toString() });
  };

  const nextPage = () => {
    setPageIndex(pageIndex + 1);
  };
  const previousPage = () => {
    setPageIndex(pageIndex - 1);
  };

  return {
    pageIndex,
    setPageIndex,
    pageSize,
    nextPage,
    previousPage,
  };
}
