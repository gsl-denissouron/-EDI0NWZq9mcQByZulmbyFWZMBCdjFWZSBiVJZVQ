import { JokeRepository } from "@domain/repositories/JokeRepository";
import { getJokes } from "@domain/stubs/InMemoryJokes";

export const jokeRepositoryInMemory: JokeRepository = {
  getJokes,
};
