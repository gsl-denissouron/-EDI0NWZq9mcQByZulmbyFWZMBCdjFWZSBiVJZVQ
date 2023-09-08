import { css } from "@emotion/react";
import { ComponentPropsWithoutRef } from "react";

interface UITableRowProps extends ComponentPropsWithoutRef<"tr"> {
  context: "body" | "head" | "foot";
}

export function UITableRow({ context, ...others }: UITableRowProps) {
  return (
    <tr
      {...others}
      css={css`
        ${context === "head" &&
        `
          background-color: #009879;
          color: #ffffff;
          text-align: left;
        `}
        ${context === "body" &&
        `
          border-bottom: 1px solid #dddddd;

          &:nth-of-type(even) {
            background-color: #f3f3f3;
          }

          &:last-of-type {
            border-bottom: 2px solid #009879;
          }
        `}
      `}
    />
  );
}
