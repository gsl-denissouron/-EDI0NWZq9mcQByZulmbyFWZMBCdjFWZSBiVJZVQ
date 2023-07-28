import { useQuery } from "@tanstack/react-query";

import { jokeService } from "../../domain/services/JokeService";
import { jokeRepository } from "../repositories/JokeRepository";

export default function Table() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["getJokes"],
    queryFn: jokeService(jokeRepository).getJokes,
  });

  if (isLoading) {
    return <div className="spinner"></div>;
  }

  if (error) {
    return <div>Error while fetching jokes</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>TYPE</th>
          <th>SETUP</th>
          <th>PUNCHLINE</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((joke) => (
          <tr key={joke.id}>
            <td>{joke.id}</td>
            <td>{joke.type}</td>
            <td>{joke.setup}</td>
            <td>{joke.punchline}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
