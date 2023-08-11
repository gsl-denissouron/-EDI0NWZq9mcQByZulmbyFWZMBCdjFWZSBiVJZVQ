import { Link, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Root() {
  const { t } = useTranslation();
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={`/`}>{t("views.root.nav.home")}</Link>
          </li>
          <li>
            <Link to={`/jokes`}>{t("views.root.nav.jokes")}</Link>
          </li>
        </ul>
      </nav>
      <Outlet></Outlet>
    </>
  );
}
