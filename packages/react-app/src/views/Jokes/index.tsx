import { Spinner } from "@react-app/components/ui";
import { useJokes } from "@react-app/hooks/useJokes";
import { useTranslate } from "@react-app/hooks/useTranslate";

import { Header } from "./Header";
import { JokeTable } from "./JokeTable";

export function Jokes() {
  const { t } = useTranslate();
  const { isLoading, error } = useJokes();

  if (error) {
    return <div>{t("views.jokes.errorMessage")}</div>;
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Header />
      <JokeTable />
    </>
  );
}
