import i18n from 'i18next';
import { initReactI18next, } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: 'Hello World !',
    },
  },
  fr: {
    translation: {
      welcome: 'Bonjour le monde !',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
