import { Joke } from '../entities/Joke';
import { JokeRepository } from '../repositories/JokeRepository';

export interface JokeService {
  getJokes: () => Promise<Joke[]>;
}

export const jokeService = (repository: JokeRepository): JokeService => ({
  getJokes: () => repository.getJokes(),
});
