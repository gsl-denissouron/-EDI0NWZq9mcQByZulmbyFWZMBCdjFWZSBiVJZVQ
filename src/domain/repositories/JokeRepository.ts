import { Joke } from '../entities/Joke';

export interface JokeRepository {
  getJokes: () => Promise<Joke[]>;
}
