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
          action: {
            addItem: "Add item",
            editItem: "Edit item",
            removeItem: "Remove item",
            filter: "Filter",
          },
          form: {
            type: "type",
            setup: "setup",
            punchline: "punchline",
          },
          modals: {
            cancel: "Cancel",
            create: "Create",
            delete: "Delete",
            deleteWarning: "Are you sure you want to delete this joke ?",
            edit: "Edit",
          },
        },
      },
    },
  },
  fr: {
    translation: {
      components: {
        paginator: {
          currentPage: "Page Actuelle",
          previousPage: "Page Précédente",
          nextPage: "Page Suivante",
        },
      },
      views: {
        root: {
          nav: {
            home: "Accueil",
            jokes: "Blagues",
          },
        },
        home: {
          title: "Hello World !",
        },
        jokes: {
          errorMessage: "Erreur lors de la récupération des blagues",
          action: {
            addItem: "Ajouter",
            editItem: "Editer",
            removeItem: "Supprimer",
            filter: "Filtre",
          },
          form: {
            type: "type",
            setup: "setup",
            punchline: "punchline",
          },
          modals: {
            cancel: "Annuler",
            create: "Créer",
            delete: "Supprimer",
            deleteWarning: "Êtes-vous sûr de vouloir supprimer cette blague ?",
            edit: "Editer",
          },
        },
      },
    },
  },
} as const;

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })
  .catch((err) => {
    console.log("Error during i18n init", err);
  });

declare module "i18next" {
  interface CustomTypeOptions {
    resources: (typeof resources)["en"];
  }
}

export default i18n;
