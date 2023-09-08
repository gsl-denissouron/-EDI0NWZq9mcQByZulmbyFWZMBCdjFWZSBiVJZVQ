import { ComponentPropsWithoutRef, ElementType } from "react";

import { RowContext } from "./RowContext";

interface TableBodyProps extends ComponentPropsWithoutRef<"tbody"> {
  as?: ElementType;
}

export function TableBody({ as, children, ...others }: TableBodyProps) {
  const Component = as ?? "tbody";

  return (
    <Component {...others}>
      <RowContext.Provider value="body">{children}</RowContext.Provider>
    </Component>
  );
}
