module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/strict-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:import/typescript",
  ],
  ignorePatterns: [".eslintrc.cjs"],
  plugins: ["import"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  rules: {
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
