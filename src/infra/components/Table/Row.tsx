import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

interface TableRowProps extends ComponentPropsWithoutRef<"tr"> {
  as?: ElementType;
  children: ReactNode;
  className?: string;
}

export default function TableRow({
  as,
  children,
  className,
  ...others
}: TableRowProps) {
  const Component = as ?? "tr";

  return (
    <Component className={className} {...others}>
      {children}
    </Component>
  );
}
