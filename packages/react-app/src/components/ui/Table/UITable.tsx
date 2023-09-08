import { css } from "@emotion/react";
import { ComponentPropsWithoutRef } from "react";

export function UITable({ ...others }: ComponentPropsWithoutRef<"table">) {
  return (
    <table
      {...others}
      css={css`
        border-collapse: collapse;
        margin: 25px 0;
        font-size: 0.9em;
        font-family: sans-serif;
        min-width: 400px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
      `}
    ></table>
  );
}
