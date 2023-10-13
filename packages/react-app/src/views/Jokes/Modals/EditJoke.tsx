import { Joke } from "@domain/entities/Joke";

export function EditJoke({
  joke,
  onCancel,
  onEdit,
}: {
  joke: Joke;
  onCancel: () => void;
  onEdit: (joke: Joke) => void;
}) {
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
        <p>{"Insert edit form here"}</p>
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
            onEdit(joke);
          }}
        >
          {"Edit a joke"}
        </button>
      </div>
    </>
  );
}
