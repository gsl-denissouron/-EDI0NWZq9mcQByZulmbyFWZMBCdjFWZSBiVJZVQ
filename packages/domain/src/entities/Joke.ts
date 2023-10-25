export const JOKE_TYPES = [
  "general",
  "programming",
  "knock-knock",
  "dad",
] as const;

export type JokeType = (typeof JOKE_TYPES)[number];

export interface Joke {
  readonly type: JokeType;
  readonly setup: string;
  readonly punchline: string;
  readonly id: number;
}

export type NewJoke = Omit<Joke, "id">;
