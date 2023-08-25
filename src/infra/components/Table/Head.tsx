import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { CellContext } from "./CellContext";

interface TableHeadProps extends ComponentPropsWithoutRef<"thead"> {
  as?: ElementType;
  children: ReactNode;
  className?: string;
}

export default function TableHead({
  as,
  children,
  className,
  ...others
}: TableHeadProps) {
  const Component = as ?? "thead";

  return (
    <Component className={className} {...others}>
      <CellContext.Provider value="head">{children}</CellContext.Provider>
    </Component>
  );
}
