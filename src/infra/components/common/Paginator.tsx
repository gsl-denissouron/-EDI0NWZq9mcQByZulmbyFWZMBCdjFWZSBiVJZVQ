import { ComponentPropsWithoutRef, ReactNode } from "react";

import { useTranslate } from "@infra/hooks/useTranslate";

interface PaginatorProps extends ComponentPropsWithoutRef<"span"> {
  as?: ReactNode;
  pageIndex?: number;
  pageSize?: number;
  totalElements: number;
  onNext: () => void;
  onPrevious: () => void;
}

export function Paginator({
  as,
  pageIndex = 0,
  pageSize = 5,
  totalElements,
  onNext,
  onPrevious,
  ...others
}: PaginatorProps) {
  const Component = as ?? "span";
  const { t } = useTranslate();
  const isFirst = pageIndex === 0;
  const isLast = totalElements / pageSize <= pageIndex + 1;

  return (
    <Component {...others}>
      <span>
        {t("components.paginator.currentPage")} : {pageIndex + 1}
      </span>
      <button onClick={onPrevious} disabled={isFirst}>
        {t("components.paginator.previousPage")}
      </button>{" "}
      <button onClick={onNext} disabled={isLast}>
        {t("components.paginator.nextPage")}
      </button>
    </Component>
  );
}
