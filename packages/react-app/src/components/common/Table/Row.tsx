import { ComponentPropsWithoutRef, ElementType, useContext } from "react";

import { RowContext } from "./RowContext";

interface TableRowProps extends ComponentPropsWithoutRef<"tr"> {
  as?: ElementType;
}

export function TableRow({ as, children, ...others }: TableRowProps) {
  const rowContext = useContext(RowContext);
  const Component = as ?? "tr";

  return (
    <Component context={rowContext} {...others}>
      {children}
    </Component>
  );
}
