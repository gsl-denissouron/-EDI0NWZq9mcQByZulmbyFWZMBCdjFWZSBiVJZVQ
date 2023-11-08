import { ComponentPropsWithoutRef, ElementType } from "react";

import { useTranslate } from "@react-app/hooks/useTranslate";

interface PaginatorProps extends ComponentPropsWithoutRef<"span"> {
  as?: ElementType;
  pageIndex?: number;
  pageSize?: number;
  totalElements: number;
  nextPageComponent?: ElementType;
  previousPageComponent?: ElementType;
  onNext: () => void;
  onPrevious: () => void;
}

export function Paginator({
  as,
  pageIndex = 0,
  pageSize = 5,
  totalElements,
  nextPageComponent,
  previousPageComponent,
  onNext,
  onPrevious,
  ...others
}: PaginatorProps) {
  const Component = as ?? "span";
  const NextPageComponent = nextPageComponent ?? "button";
  const PreviousPageComponent = previousPageComponent ?? "button";
  const { t } = useTranslate();
  const isFirst = pageIndex === 0;
  const isLast = totalElements / pageSize <= pageIndex + 1;

  return (
    <Component {...others}>
      <PreviousPageComponent onClick={onPrevious} disabled={isFirst}>
        {t("components.paginator.previousPage")}
      </PreviousPageComponent>
      <span>
        {t("components.paginator.currentPage")} : {pageIndex + 1}
      </span>
      <NextPageComponent onClick={onNext} disabled={isLast}>
        {t("components.paginator.nextPage")}
      </NextPageComponent>
    </Component>
  );
}
