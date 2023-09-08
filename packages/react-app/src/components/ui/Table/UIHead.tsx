import { ComponentPropsWithoutRef } from "react";

export function UITableHead(props: ComponentPropsWithoutRef<"thead">) {
  return <thead {...props}></thead>;
}
