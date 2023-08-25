import { ComponentPropsWithoutRef, ElementType } from "react";

import { CellContext } from "./CellContext";

interface TableHeadProps extends ComponentPropsWithoutRef<"thead"> {
  as?: ElementType;
}

export default function TableHead({ as, children, ...others }: TableHeadProps) {
  const Component = as ?? "thead";

  return (
    <Component {...others}>
      <CellContext.Provider value="head">{children}</CellContext.Provider>
    </Component>
  );
}
