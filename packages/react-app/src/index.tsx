import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

// "root" is defined, trust me
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
