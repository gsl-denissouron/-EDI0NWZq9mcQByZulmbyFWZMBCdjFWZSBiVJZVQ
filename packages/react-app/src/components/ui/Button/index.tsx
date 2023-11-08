import { SerializedStyles, css } from "@emotion/react";
import { ComponentPropsWithoutRef } from "react";

type Variant = "text" | "contained" | "outlined";

const variantStyles = {
  text: css({
    backgroundColor: "white",
    border: "none",
    color: "#009879",
  }),
  contained: css({
    backgroundColor: "#009879",
    border: "none",
    color: "white",
  }),
  outlined: css({
    backgroundColor: "white",
    border: "1px solid #009879",
    color: "#009879",
  }),
} satisfies Record<Variant, SerializedStyles>;

const commonStyle = css({
  padding: "8px 16px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "14px",
  margin: "4px",
  cursor: "pointer",
  ":disabled": {
    backgroundColor: "#dddddd",
  },
});

export function UIButton(
  props: ComponentPropsWithoutRef<"button"> & { variant?: Variant }
) {
  return (
    <button
      {...props}
      css={[commonStyle, variantStyles[props.variant ?? "contained"]]}
    />
  );
}
