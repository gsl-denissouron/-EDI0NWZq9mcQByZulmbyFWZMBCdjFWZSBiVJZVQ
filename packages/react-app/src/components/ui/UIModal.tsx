import { ComponentPropsWithoutRef } from "react";

export function UIModal(props: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      {...props}
      css={{
        boxShadow: "rgba(100, 100, 111, 0.3) 0px 7px 29px 0px",
        backgroundColor: "white",
        border: "2px solid rgb(240, 240, 240)",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    />
  );
}
