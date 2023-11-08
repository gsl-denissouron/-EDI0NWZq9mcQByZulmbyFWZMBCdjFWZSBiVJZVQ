import { useForm } from "react-hook-form";

import { JOKE_TYPES, Joke } from "@domain/entities/Joke";

import { UIButton } from "@react-app/components/ui/Button";

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
        <UIButton
          variant="text"
          onClick={() => {
            onCancel();
          }}
        >
          {"X"}
        </UIButton>
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
            <UIButton
              variant="outlined"
              onClick={() => {
                onCancel();
              }}
            >
              {"Cancel"}
            </UIButton>
            <UIButton type="submit">{"Edit a joke"}</UIButton>
          </div>
        </form>
      </div>
    </>
  );
}
