import { ComponentPropsWithoutRef, ElementType } from "react";

interface TableRowProps extends ComponentPropsWithoutRef<"tr"> {
  as?: ElementType;
}

export default function TableRow({ as, children, ...others }: TableRowProps) {
  const Component = as ?? "tr";

  return <Component {...others}>{children}</Component>;
}
