export interface Joke {
  readonly type: "general" | "programming" | "knock-knock" | "dad";
  readonly setup: string;
  readonly punchline: string;
  readonly id: number;
}

export type NewJoke = Omit<Joke, "id">;
