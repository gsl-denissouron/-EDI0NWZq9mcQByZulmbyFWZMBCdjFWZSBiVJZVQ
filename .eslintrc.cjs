module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:i18next/recommended",
    "plugin:import/typescript",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "i18next", "import"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "import/order": [
      "warn",
      {
        "newlines-between": "always",
        pathGroups: [
          {
            pattern: "@domain/**",
            group: "external",
            position: "after",
          },
          {
            pattern: "@infra/**",
            group: "parent",
            position: "before",
          },
        ],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        pathGroupsExcludedImportTypes: ["builtin"],
      },
    ],
  },
};
