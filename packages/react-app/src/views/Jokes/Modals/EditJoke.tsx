import { useForm } from "react-hook-form";

import { JOKE_TYPES, Joke } from "@domain/entities/Joke";

import { UIButton } from "@react-app/components/ui/Button";
import { useTranslate } from "@react-app/hooks/useTranslate";

export function EditJoke({
  joke,
  onCancel,
  onEdit,
}: {
  joke: Joke;
  onCancel: () => void;
  onEdit: (joke: Joke) => void;
}) {
  const { t } = useTranslate();
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
            <label>{t("views.jokes.form.type") + " :"}</label>
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
            <label>{t("views.jokes.form.setup") + " :"}</label>
            <br />
            <input
              defaultValue={joke.setup}
              {...register("setup", { required: true })}
            />
          </div>
          <div>
            <label>{t("views.jokes.form.punchline") + " :"}</label>
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
              {t("views.jokes.modals.cancel")}
            </UIButton>
            <UIButton type="submit">{t("views.jokes.modals.edit")}</UIButton>
          </div>
        </form>
      </div>
    </>
  );
}
