import { Outlet } from "react-router-dom";

import { Header } from "@react-app/components/ui/Header";
import { useTranslate } from "@react-app/hooks/useTranslate";

export function Root() {
  const { t } = useTranslate();

  const links = [
    { to: "/", label: t("views.root.nav.home") },
    { to: "/jokes", label: t("views.root.nav.jokes") },
  ];

  return (
    <>
      <Header links={links} />
      <main
        css={{
          maxWidth: "72rem",
          margin: "auto",
        }}
      >
        <Outlet></Outlet>
      </main>
    </>
  );
}
