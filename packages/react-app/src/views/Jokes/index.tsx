import { Spinner } from "@react-app/components/ui";
import { useGetJokes } from "@react-app/hooks/useJokes/getJokes";
import { useTranslate } from "@react-app/hooks/useTranslate";

import { JokeHeader } from "./JokeHeader";
import { JokeTable } from "./JokeTable";

export function Jokes() {
  const { t } = useTranslate();
  const { isLoading, error } = useGetJokes();

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
