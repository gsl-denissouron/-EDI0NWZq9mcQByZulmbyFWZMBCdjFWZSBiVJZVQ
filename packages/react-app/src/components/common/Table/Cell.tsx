import { ComponentPropsWithoutRef, ElementType, useContext } from "react";

import { RowContext } from "./RowContext";

interface TableCellProps extends ComponentPropsWithoutRef<"td"> {
  as?: ElementType;
}

export function TableCell({ as, children, ...others }: TableCellProps) {
  const rowContext = useContext(RowContext);
  const Component = as ?? (rowContext === "head" ? "th" : "td");

  return (
    <Component context={rowContext} {...others}>
      {children}
    </Component>
  );
}
