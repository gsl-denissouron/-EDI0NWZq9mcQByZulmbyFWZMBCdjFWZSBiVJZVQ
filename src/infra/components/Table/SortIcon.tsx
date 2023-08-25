import { ComponentPropsWithoutRef, ElementType } from "react";
import { Direction } from "./Sort";

interface TableSortIconProps extends ComponentPropsWithoutRef<"span"> {
  as?: ElementType;
  className?: string;
  direction: Direction;
}

export default function TableSortIcon({
  as,
  className,
  direction,
  ...others
}: TableSortIconProps) {
  const Component = as ?? "span";

  return (
    <Component
      className={className}
      style={{
        transform: direction === "ASC" ? "rotate(180deg)" : "rotate(0deg)",
      }}
      {...others}
    />
  );
}
