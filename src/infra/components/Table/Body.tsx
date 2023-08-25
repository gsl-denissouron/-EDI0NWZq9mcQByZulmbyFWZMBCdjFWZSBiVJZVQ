import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { CellContext } from "./CellContext";

interface TableBodyProps extends ComponentPropsWithoutRef<"tbody"> {
  as?: ElementType;
  children: ReactNode;
  className?: string;
}

export default function TableBody({
  as,
  children,
  className,
  ...others
}: TableBodyProps) {
  const Component = as ?? "tbody";

  return (
    <Component className={className} {...others}>
      <CellContext.Provider value="body">{children}</CellContext.Provider>
    </Component>
  );
}
