import { useTranslate } from "@infra/hooks/useTranslate";

export default function Home() {
  const { t } = useTranslate();
  return (
    <div>
      <h1 data-testid="main-title">{t("views.home.title")}</h1>
    </div>
  );
}
