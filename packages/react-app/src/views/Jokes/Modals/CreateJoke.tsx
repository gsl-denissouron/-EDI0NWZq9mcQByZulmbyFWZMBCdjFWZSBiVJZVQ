import { useForm } from "react-hook-form";

import { JOKE_TYPES, NewJoke } from "@domain/entities/Joke";

export function CreateJoke({
  onCancel,
  onCreate,
}: {
  onCancel: () => void;
  onCreate: (joke: NewJoke) => void;
}) {
  const { register, handleSubmit } = useForm<NewJoke>();

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
        <form onSubmit={handleSubmit(onCreate)}>
          <div>
            <label>{"type :"}</label>
            <br />
            <select defaultValue={JOKE_TYPES[0]} {...register("type")}>
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
            <input {...register("setup", { required: true })} />
          </div>
          <div>
            <label>{"punchline :"}</label>
            <br />
            <input {...register("punchline", { required: true })} />
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
            <button type="submit">{"Create a joke"}</button>
          </div>
        </form>
      </div>
    </>
  );
}
