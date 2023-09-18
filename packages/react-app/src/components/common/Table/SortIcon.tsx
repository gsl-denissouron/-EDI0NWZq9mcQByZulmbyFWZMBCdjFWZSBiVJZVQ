import { ComponentPropsWithoutRef, ElementType } from "react";

import type { Direction } from "@domain/entities/Sort";

interface TableSortIconProps extends ComponentPropsWithoutRef<"span"> {
  as?: ElementType;
  direction: Direction;
}

export function TableSortIcon({
  as,
  direction,
  ...others
}: TableSortIconProps) {
  const Component = as ?? "span";

  return (
    <Component
      style={{
        transform: direction === "ASC" ? "rotate(180deg)" : "rotate(0deg)",
      }}
      {...others}
    />
  );
}
