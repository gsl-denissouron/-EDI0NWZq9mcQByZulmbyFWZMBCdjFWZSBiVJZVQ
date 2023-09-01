import { Joke } from "@domain/entities/Joke";
import { JokeRepository } from "@domain/repositories/JokeRepository";

export interface JokePortfolio {
  getJokes: () => Promise<Joke[]>;
}

export const jokePortfolio = (repository: JokeRepository): JokePortfolio => ({
  getJokes: () => repository.getJokes(),
});
