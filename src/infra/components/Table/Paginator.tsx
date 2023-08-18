import { useTranslate } from "@infra/hooks/useTranslate";

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
  const { t } = useTranslate();
  const isFirst = pageIndex === 0;
  const isLast = totalElements / pageSize <= pageIndex + 1;

  return (
    <>
      <span>
        {t("components.paginator.currentPage")} : {pageIndex + 1}
      </span>
      <button onClick={onPrevious} disabled={isFirst}>
        {t("components.paginator.previousPage")}
      </button>{" "}
      <button onClick={onNext} disabled={isLast}>
        {t("components.paginator.nextPage")}
      </button>
    </>
  );
}
