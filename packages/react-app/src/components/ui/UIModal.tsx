import { ComponentPropsWithoutRef } from "react";

export function UIModal(props: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      {...props}
      css={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        boxShadow: "rgba(100, 100, 111, 0.3) 0px 7px 29px 0px",
        backgroundColor: "white",
        border: "2px solid rgb(240, 240, 240)",
        position: "absolute",
        width: "250px",
        height: "100px",
        top: "calc(50% - 50px)",
        left: "calc(50% - 125px)",
      }}
    />
  );
}
