import { JokeRepository } from "@domain/repositories/JokeRepository";

const JOKE_BACKEND = "https://official-joke-api.appspot.com/";
const NUMBER_OF_JOKES = 50;

export const jokeRepository: JokeRepository = {
  getJokes: () =>
    Promise.all(
      [...Array(NUMBER_OF_JOKES).keys()]
        .map((index) => `${JOKE_BACKEND}jokes/${index + 1}`)
        .map((url) => fetch(url).then((response) => response.json()))
    ),
};
