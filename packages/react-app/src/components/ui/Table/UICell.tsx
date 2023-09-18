import { ComponentPropsWithoutRef } from "react";

interface UITableCellProps extends ComponentPropsWithoutRef<"td"> {
  context?: "body" | "head" | "foot";
}

export function UITableCell({ context, ...others }: UITableCellProps) {
  if (context === "head") {
    return (
      <th
        {...others}
        css={{
          padding: "12px 15px",
          width: "20%",
        }}
      />
    );
  }
  return (
    <td
      {...others}
      css={{
        padding: "12px 15px",
        width: "20%",
      }}
    />
  );
}
