import { createContext } from "react";

export const CellContext = createContext<"body" | "head" | "foot">("body");
