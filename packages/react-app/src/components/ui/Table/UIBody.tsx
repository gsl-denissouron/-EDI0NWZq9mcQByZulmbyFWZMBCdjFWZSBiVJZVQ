import { ComponentPropsWithoutRef } from "react";

export function UITableBody(props: ComponentPropsWithoutRef<"tbody">) {
  return <tbody {...props} />;
}
