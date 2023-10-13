import { Joke } from "@domain/entities/Joke";

export function CreateJoke({
  onCancel,
  onCreate,
}: {
  onCancel: () => void;
  onCreate: (joke: Omit<Joke, "id">) => void;
}) {
  // FIXME : create real joke here
  const joke: Joke = undefined as unknown as Joke;

  return (
    <>
      <div css={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          css={{
            backgroundColor: "white",
            color: "#009879",
            border: "1px solid #009879",
          }}
          onClick={() => {
            onCancel();
          }}
        >
          {"X"}
        </button>
      </div>
      <div>
        <p>{"Insert create form here"}</p>
      </div>
      <div css={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          css={{
            backgroundColor: "white",
            color: "#009879",
            border: "1px solid #009879",
          }}
          onClick={() => {
            onCancel();
          }}
        >
          {"Cancel"}
        </button>
        <button
          onClick={() => {
            onCreate(joke);
          }}
        >
          {"Create a joke"}
        </button>
      </div>
    </>
  );
}
