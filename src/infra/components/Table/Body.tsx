import { ComponentPropsWithoutRef, ElementType } from "react";

import { CellContext } from "./CellContext";

interface TableBodyProps extends ComponentPropsWithoutRef<"tbody"> {
  as?: ElementType;
}

export default function TableBody({ as, children, ...others }: TableBodyProps) {
  const Component = as ?? "tbody";

  return (
    <Component {...others}>
      <CellContext.Provider value="body">{children}</CellContext.Provider>
    </Component>
  );
}
