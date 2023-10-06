import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ElementType, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./i18n";
import "./style.css";

import { ModalContextProvider } from "./contexts/Modal";
import { Home } from "./views/Home";
import { Jokes } from "./views/Jokes";
import { Root } from "./views/Root";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { path: "/", Component: Home },
      { path: "/jokes", Component: Jokes },
    ],
  },
]);

export default function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <ModalContextProvider>
        <RouterProvider router={router} />
      </ModalContextProvider>
    </QueryClientProvider>
  );
}
