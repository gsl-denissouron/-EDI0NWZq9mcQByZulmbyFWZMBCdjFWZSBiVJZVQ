import { createContext } from "react";

export const RowContext = createContext<"body" | "head" | "foot">("body");
