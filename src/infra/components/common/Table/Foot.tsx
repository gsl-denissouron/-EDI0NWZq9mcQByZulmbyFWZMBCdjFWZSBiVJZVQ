import { ComponentPropsWithoutRef, ElementType } from "react";

import { CellContext } from "./CellContext";

interface TableFootProps extends ComponentPropsWithoutRef<"tfoot"> {
  as?: ElementType;
}

export function TableFoot({ as, children, ...others }: TableFootProps) {
  const Component = as ?? "tfoot";

  return (
    <Component {...others}>
      <CellContext.Provider value="foot">{children}</CellContext.Provider>
    </Component>
  );
}
