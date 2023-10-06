import { ComponentPropsWithoutRef } from "react";

export function UIBackdrop(props: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      {...props}
      css={{
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(51, 51, 51, 0.3)",
        backdropFilter: "blur(1px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    />
  );
}
