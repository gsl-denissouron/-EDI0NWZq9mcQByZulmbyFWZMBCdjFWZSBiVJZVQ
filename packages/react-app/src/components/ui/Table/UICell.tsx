import { css } from "@emotion/react";
import { ComponentPropsWithoutRef } from "react";

interface UITableCellProps extends ComponentPropsWithoutRef<"td"> {
  context: "body" | "head" | "foot";
}

export function UITableCell({ context, ...others }: UITableCellProps) {
  if (context === "head") {
    return (
      <th
        {...others}
        css={css`
          padding: 12px 15px;
          width: 25%;
        `}
      ></th>
    );
  }
  return (
    <td
      {...others}
      css={css`
        padding: 12px 15px;
        width: 25%;
      `}
    ></td>
  );
}
