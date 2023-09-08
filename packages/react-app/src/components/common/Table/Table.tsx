import { ComponentPropsWithoutRef, ElementType } from "react";

interface TableProps extends ComponentPropsWithoutRef<"table"> {
  as?: ElementType;
}

export function Table({ as, ...others }: TableProps) {
  const Component = as ?? "table";

  return <Component {...others} />;
}
