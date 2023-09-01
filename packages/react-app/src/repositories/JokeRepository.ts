import { JokeRepository } from "@domain/repositories/JokeRepository";

const JOKES_BACKEND = import.meta.env.VITE_JOKES_BACKEND;
const NUMBER_OF_JOKES = 50;

export const jokeRepository: JokeRepository = {
  getJokes: () =>
    Promise.all(
      [...Array(NUMBER_OF_JOKES).keys()]
        .map((index) => `${JOKES_BACKEND}jokes/${index + 1}`)
        .map((url) => fetch(url).then((response) => response.json()))
    ),
};
