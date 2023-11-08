import { ComponentPropsWithoutRef } from "react";

export function UITable({ ...others }: ComponentPropsWithoutRef<"table">) {
  return (
    <table
      {...others}
      css={{
        width: "100%",
        borderCollapse: "collapse",
        margin: "25px 0",
        fontSize: "0.9em",
        fontFamily: "sans-serif",
        minWidth: "400px",
        boxShadow: "0 0 20px rgba(0, 0, 0, 0.15)",
      }}
    />
  );
}
