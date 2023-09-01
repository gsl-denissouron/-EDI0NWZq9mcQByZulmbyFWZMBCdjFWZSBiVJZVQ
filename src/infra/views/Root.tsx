import { Link, Outlet } from "react-router-dom";

import { useTranslate } from "@infra/hooks/useTranslate";

export function Root() {
  const { t } = useTranslate();
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
