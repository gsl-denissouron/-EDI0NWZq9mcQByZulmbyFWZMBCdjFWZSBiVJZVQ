import { JokeRepository } from "@domain/repositories/JokeRepository";

export const jokeRepository: JokeRepository = {
  getJokes: () =>
    fetch("https://official-joke-api.appspot.com/jokes/ten").then((response) =>
      response.json()
    ),
};
