import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  return (
    <div>
      <h1 data-testid="main-title">{t("views.home.title")}</h1>
    </div>
  );
}
