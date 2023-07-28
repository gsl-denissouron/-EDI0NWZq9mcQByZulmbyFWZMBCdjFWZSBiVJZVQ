import { useState, useEffect } from 'react';

import { Joke } from '../../domain/entities/Joke';
import { jokeService } from '../../domain/services/JokeService';
import { jokeRepository } from '../repositories/JokeRepository';

export default function Table() {
  const [jokes, setJokes] = useState<Joke[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  async function getJokes() {
    setIsLoading(true);
    await jokeService(jokeRepository)
      .getJokes()
      .then((responseJokes) => setJokes(responseJokes))
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    getJokes();
  }, []);

  if (isLoading) {
    return <div className="spinner"></div>;
  }

  if (isError) {
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
        {jokes.map((joke) => (
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
