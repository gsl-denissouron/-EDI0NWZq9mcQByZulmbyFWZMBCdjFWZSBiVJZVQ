import { useForm } from "react-hook-form";

import { JOKE_TYPES, Joke } from "@domain/entities/Joke";

export function EditJoke({
  joke,
  onCancel,
  onEdit,
}: {
  joke: Joke;
  onCancel: () => void;
  onEdit: (joke: Joke) => void;
}) {
  const { register, handleSubmit } = useForm<Joke>();

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
        <form onSubmit={handleSubmit(onEdit)}>
          <div>
            <label>{"type :"}</label>
            <br />
            <select defaultValue={joke.type} {...register("type")}>
              {JOKE_TYPES.map((jokeType) => (
                <option key={jokeType} value={jokeType}>
                  {jokeType}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>{"setup :"}</label>
            <br />
            <input
              defaultValue={joke.setup}
              {...register("setup", { required: true })}
            />
          </div>
          <div>
            <label>{"punchline :"}</label>
            <br />
            <input
              defaultValue={joke.punchline}
              {...register("punchline", { required: true })}
            />
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
            <button type="submit">{"Edit a joke"}</button>
          </div>
        </form>
      </div>
    </>
  );
}
