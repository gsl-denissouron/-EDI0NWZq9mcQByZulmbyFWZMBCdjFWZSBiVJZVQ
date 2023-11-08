import { Link } from "react-router-dom";

interface Link {
  to: string;
  label: string;
}

interface HeaderProps {
  links: Link[];
}

export function Header({ links }: HeaderProps) {
  return (
    <header
      css={{
        boxShadow: [
          "0 0 2px 0 rgba(0, 0, 0, 0.08)",
          "0 1px 2px 0 rgba(0, 0, 0, 0.12)",
        ],
      }}
    >
      <nav
        css={{
          display: "flex",
          alignItems: "center",
          height: "5rem",
          maxWidth: "72rem",
          margin: "auto",
        }}
      >
        <ul
          css={{
            display: "flex",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                css={{
                  display: "flex",
                  alignItems: "center",
                  lineHeight: "24px",
                  padding: "0.5rem 1.25rem",
                  fontWeight: "600",
                  color: "inherit",
                  textDecoration: "inherit",
                  ":hover": {
                    color: "rgb(29, 29, 32)",
                  },
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
