import { ComponentPropsWithoutRef } from "react";

export default function ArrowDown({
  style,
  ...others
}: ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      style={Object.assign(
        {
          width: "1em",
          height: "1em",
          display: "inline-block",
          fill: "currentcolor",
        },
        style
      )}
      {...others}
    >
      <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
    </svg>
  );
}
