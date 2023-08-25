import {
  ComponentPropsWithoutRef,
  ElementType,
  ReactNode,
  useContext,
} from "react";
import { CellContext } from "./CellContext";

interface TableCellProps extends ComponentPropsWithoutRef<"td"> {
  as?: ElementType;
  children: ReactNode;
  className?: string;
}

export default function TableCell({
  as,
  children,
  className,
  ...others
}: TableCellProps) {
  const cellContext = useContext(CellContext);
  const Component = as ?? (cellContext === "head" ? "th" : "td");

  return (
    <Component context={cellContext} className={className} {...others}>
      {children}
    </Component>
  );
}
