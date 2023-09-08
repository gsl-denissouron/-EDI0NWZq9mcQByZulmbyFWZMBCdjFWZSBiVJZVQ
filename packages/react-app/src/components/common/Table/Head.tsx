import { ComponentPropsWithoutRef, ElementType } from "react";

import { RowContext } from "./RowContext";

interface TableHeadProps extends ComponentPropsWithoutRef<"thead"> {
  as?: ElementType;
}

export function TableHead({ as, children, ...others }: TableHeadProps) {
  const Component = as ?? "thead";

  return (
    <Component {...others}>
      <RowContext.Provider value="head">{children}</RowContext.Provider>
    </Component>
  );
}
