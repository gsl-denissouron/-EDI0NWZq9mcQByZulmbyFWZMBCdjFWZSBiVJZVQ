import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      components: {
        paginator: {
          currentPage: "Current Page",
          previousPage: "Previous Page",
          nextPage: "Next Page",
        },
      },
      views: {
        root: {
          nav: {
            home: "Home",
            jokes: "Jokes",
          },
        },
        home: {
          title: "Hello World !",
        },
        jokes: {
          errorMessage: "Error while fetching jokes",
        },
      },
    },
  },
  fr: {
    translation: {
      welcome: "Bonjour le monde !",
    },
  },
} as const;

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

declare module "i18next" {
  interface CustomTypeOptions {
    resources: (typeof resources)["en"];
  }
}

export default i18n;
