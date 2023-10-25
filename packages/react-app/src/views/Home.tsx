import { useTranslate } from "@react-app/hooks/useTranslate";

export function Home() {
  const { t } = useTranslate();
  return (
    <div>
      <h1 data-testid="main-title">{t("views.home.title")}</h1>
    </div>
  );
}
