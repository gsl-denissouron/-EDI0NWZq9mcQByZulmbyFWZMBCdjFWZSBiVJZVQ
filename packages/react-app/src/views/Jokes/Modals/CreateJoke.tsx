import { useForm } from "react-hook-form";

import { JOKE_TYPES, NewJoke } from "@domain/entities/Joke";

import { UIButton } from "@react-app/components/ui/Button";
import { useTranslate } from "@react-app/hooks/useTranslate";

export function CreateJoke({
  onCancel,
  onCreate,
}: {
  onCancel: () => void;
  onCreate: (joke: NewJoke) => void;
}) {
  const { t } = useTranslate();
  const { register, handleSubmit } = useForm<NewJoke>();

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
        <form onSubmit={handleSubmit(onCreate)}>
          <div>
            <label>{t("views.jokes.form.type") + " :"}</label>
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
            <label>{t("views.jokes.form.setup") + " :"}</label>
            <br />
            <input {...register("setup", { required: true })} />
          </div>
          <div>
            <label>{t("views.jokes.form.punchline") + " :"}</label>
            <br />
            <input {...register("punchline", { required: true })} />
          </div>

          <div css={{ display: "flex", justifyContent: "flex-end" }}>
            <UIButton
              variant="outlined"
              onClick={() => {
                onCancel();
              }}
            >
              {t("views.jokes.modals.cancel")}
            </UIButton>
            <UIButton type="submit">{t("views.jokes.modals.create")}</UIButton>
          </div>
        </form>
      </div>
    </>
  );
}
