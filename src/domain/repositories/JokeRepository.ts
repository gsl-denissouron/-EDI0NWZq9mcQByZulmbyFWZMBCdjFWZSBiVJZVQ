import { Joke } from "@domain/entities/Joke";

export interface JokeRepository {
  getJokes: () => Promise<Joke[]>;
}
