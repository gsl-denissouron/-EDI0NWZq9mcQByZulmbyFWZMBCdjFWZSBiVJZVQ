/// <reference types="vite/client" />
/// <reference types="vitest" />

interface ImportMetaEnv {
  readonly VITE_JOKES_BACKEND: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
