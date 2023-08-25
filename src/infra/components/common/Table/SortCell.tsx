import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import type { ActiveSort } from "@domain/entities/Sort";

import TableSortIcon from "./SortIcon";

interface TableSortCellProps extends ComponentPropsWithoutRef<"span"> {
  as?: ElementType;
  children: ReactNode;
  iconComponent?: ElementType;
  sort: ActiveSort;
}

export default function TableSortCell({
  as,
  children,
  iconComponent,
  sort,
  ...others
}: TableSortCellProps) {
  const Component = as ?? "span";

  return (
    <Component {...others}>
      {children}
      {sort.active && (
        <TableSortIcon as={iconComponent} direction={sort.direction} />
      )}
    </Component>
  );
}
