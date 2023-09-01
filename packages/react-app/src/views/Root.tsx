import { css } from "@emotion/react";
import { Link, Outlet } from "react-router-dom";

import { useTranslate } from "../hooks/useTranslate";
export function Root() {
  const { t } = useTranslate();

  const links = [
    { to: "/", label: t("views.root.nav.home") },
    { to: "/jokes", label: t("views.root.nav.jokes") },
  ];

  return (
    <>
      <header
        css={css`
          box-shadow:
            0 0 2px 0 rgba(0, 0, 0, 0.08),
            0 1px 2px 0 rgba(0, 0, 0, 0.12);
        `}
      >
        <nav
          css={css`
            display: flex;
            align-items: center;
            height: 5rem;
            max-width: 72rem;
            margin: auto;
          `}
        >
          <ul
            css={css`
              display: flex;
              list-style: none;
              margin: 0;
              padding: 0;
            `}
          >
            {links.map((link) => (
              <li>
                <Link
                  to={link.to}
                  css={css`
                    display: flex;
                    align-items: center;
                    line-height: 24px;
                    padding: 0.5rem 1.25rem;
                    font-weight: 600;
                    color: inherit;
                    text-decoration: inherit;
                    &:hover {
                      color: rgb(29, 29, 32);
                    }
                  `}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main
        css={css`
          max-width: 72rem;
          margin: auto;
        `}
      >
        <Outlet></Outlet>
      </main>
    </>
  );
}
