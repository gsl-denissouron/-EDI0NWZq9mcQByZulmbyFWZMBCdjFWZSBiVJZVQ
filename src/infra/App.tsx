import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./i18n";
import "./style.css";

import Table from "./views/Table";

export default function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <Table />
    </QueryClientProvider>
  );
}
