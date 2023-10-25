import { Spinner } from "@react-app/components/ui";
import { jokeHooks } from "@react-app/hooks/jokes";
import { useTranslate } from "@react-app/hooks/useTranslate";

import { JokeHeader } from "./JokeHeader";
import { JokeTable } from "./JokeTable";

export function Jokes() {
  const { t } = useTranslate();
  const { isLoading, error } = jokeHooks.useGetJokes();

  if (error) {
    return <div>{t("views.jokes.errorMessage")}</div>;
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <JokeHeader />
      <JokeTable />
    </>
  );
}
