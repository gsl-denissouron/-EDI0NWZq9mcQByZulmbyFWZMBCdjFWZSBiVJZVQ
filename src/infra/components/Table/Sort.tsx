import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import TableSortIcon from "./SortIcon";

export type Direction = "ASC" | "DESC";
type Sort = { active: false } | { active: true; direction: Direction };

interface TableSortProps extends ComponentPropsWithoutRef<"span"> {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  iconComponent?: ElementType;
  sort: Sort;
}

export default function TableSort({
  as,
  children,
  className,
  iconComponent,
  sort,
  ...others
}: TableSortProps) {
  const Component = as ?? "span";

  return (
    <Component className={className} {...others}>
      {children}
      {sort.active && (
        <TableSortIcon as={iconComponent} direction={sort.direction} />
      )}
    </Component>
  );
}
