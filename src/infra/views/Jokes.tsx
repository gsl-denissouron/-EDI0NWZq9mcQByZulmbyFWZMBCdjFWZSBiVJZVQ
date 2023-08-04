import { useQuery } from "@tanstack/react-query";

import { jokePortfolio } from "@domain/services/JokePortfolio";
import Table from "@infra/components/Table";
import { jokeRepository } from "@infra/repositories/JokeRepository";

export default function Jokes() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["getJokes"],
    queryFn: jokePortfolio(jokeRepository).getJokes,
  });

  if (isLoading) {
    return <div className="spinner"></div>;
  }

  if (error) {
    return <div>Error while fetching jokes</div>;
  }

  return (
    data && (
      <Table
        rows={data}
        columns={["id", "type", "setup", "punchline"]}
        rowId="id"
        pagination={{ pageIndex: 0, pageSize: 5 }}
      />
    )
  );
}
