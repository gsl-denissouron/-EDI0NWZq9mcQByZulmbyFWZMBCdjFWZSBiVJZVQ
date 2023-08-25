import { ComponentPropsWithoutRef, ElementType, useContext } from "react";

import { CellContext } from "./CellContext";

interface TableCellProps extends ComponentPropsWithoutRef<"td"> {
  as?: ElementType;
}

export default function TableCell({ as, children, ...others }: TableCellProps) {
  const cellContext = useContext(CellContext);
  const Component = as ?? (cellContext === "head" ? "th" : "td");

  return (
    <Component context={cellContext} {...others}>
      {children}
    </Component>
  );
}
