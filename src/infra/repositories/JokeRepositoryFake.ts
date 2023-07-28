import { JokeRepository } from '../../domain/repositories/JokeRepository';
import { getJokes } from '../../stubs/InMemoryJokes';

export const jokeRepositoryFake: JokeRepository = {
  getJokes,
};
