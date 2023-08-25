import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { CellContext } from "./CellContext";

interface TableFootProps extends ComponentPropsWithoutRef<"tfoot"> {
  as?: ElementType;
  children: ReactNode;
  className?: string;
}

export default function TableFoot({
  as,
  children,
  className,
  ...others
}: TableFootProps) {
  const Component = as ?? "tfoot";

  return (
    <Component className={className} {...others}>
      <CellContext.Provider value="foot">{children}</CellContext.Provider>
    </Component>
  );
}
