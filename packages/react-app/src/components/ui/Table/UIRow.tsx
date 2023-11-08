import { css } from "@emotion/react";
import { ComponentPropsWithoutRef } from "react";

interface UITableRowProps extends ComponentPropsWithoutRef<"tr"> {
  context?: "body" | "head" | "foot";
}

const headRowStyle = css({
  backgroundColor: "#009879",
  color: "#ffffff",
  textAlign: "left",
});

const bodyRowStyle = css({
  borderBottom: "1px solid #dddddd",
  ":nth-of-type": {
    backgroundColor: "#f3f3f3",
  },
  ":last-of-type": {
    borderBottom: "2px solid #009879",
  },
});

export function UITableRow({ context, ...others }: UITableRowProps) {
  return (
    <tr {...others} css={context === "head" ? headRowStyle : bodyRowStyle} />
  );
}
