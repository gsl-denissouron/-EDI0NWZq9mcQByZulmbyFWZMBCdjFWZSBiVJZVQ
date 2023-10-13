import { useForm } from "react-hook-form";

import { NewJoke } from "@domain/entities/Joke";

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
        <form
          css={{ display: "flex", flexDirection: "column" }}
          onSubmit={handleSubmit(onCreate)}
        >
          <label>{"type"}</label>
          <select defaultValue="general" {...register("type")}>
            <option value="general">general</option>
            <option value="programming">programming</option>
            <option value="knock-knock">knock-knock</option>
            <option value="dad">dad</option>
          </select>
          <label>{"setup"}</label>
          <input {...register("setup", { required: true })} />
          <label>{"punchline"}</label>
          <input {...register("punchline", { required: true })} />

          <input type="submit" />
        </form>
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
      </div>
    </>
  );
}
