import { ComponentPropsWithoutRef, ElementType } from "react";

import { RowContext } from "./RowContext";

interface TableFootProps extends ComponentPropsWithoutRef<"tfoot"> {
  as?: ElementType;
}

export function TableFoot({ as, children, ...others }: TableFootProps) {
  const Component = as ?? "tfoot";

  return (
    <Component {...others}>
      <RowContext.Provider value="foot">{children}</RowContext.Provider>
    </Component>
  );
}
