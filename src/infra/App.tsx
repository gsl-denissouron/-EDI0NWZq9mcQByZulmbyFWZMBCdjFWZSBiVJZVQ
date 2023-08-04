import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "@infra/i18n";
import "@infra/style.css";

import Jokes from "@infra/views/Jokes";

export default function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <Jokes />
    </QueryClientProvider>
  );
}
