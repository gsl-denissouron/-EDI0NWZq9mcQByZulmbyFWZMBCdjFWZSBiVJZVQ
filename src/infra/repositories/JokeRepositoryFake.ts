import { getJokes } from "@stubs/InMemoryJokes";

import { JokeRepository } from "@domain/repositories/JokeRepository";

export const jokeRepositoryFake: JokeRepository = {
  getJokes,
};
