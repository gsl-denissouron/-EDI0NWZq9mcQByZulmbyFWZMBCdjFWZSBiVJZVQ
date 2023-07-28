import { useTranslation } from 'react-i18next';

import './i18n';
import './style.css';

import Table from './views/Table';

export default function App() {
  const { t } = useTranslation();
  return (
    <div>
      <h1 data-testid="main-title">{t('welcome')}</h1>
      <Table />
    </div>
  );
}
