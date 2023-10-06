import { useSearchParams } from "react-router-dom";

interface PaginationProps {
  pageSize: number;
}

export function usePagination({ pageSize }: PaginationProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  const pageIndex = parseInt(searchParams.get("page") ?? "1") - 1;

  const nextPage = () => {
    setSearchParams({ page: (pageIndex + 2).toString() });
  };
  const previousPage = () => {
    setSearchParams({ page: pageIndex.toString() });
  };

  return {
    pageIndex,
    pageSize,
    nextPage,
    previousPage,
  };
}
