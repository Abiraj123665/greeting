import React from 'react';
import { useTranslation } from 'react-i18next';

const App = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
        <h1 style={{ color: 'red', padding: '50px' }}>Greeting App</h1>
      <h1 style={{ marginLeft: '100px' , marginRight: "100px"}}>{t('greeting')}</h1>

      <div style={{ marginTop: '20px' }}>
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('hi')} style={{ marginLeft: '20px' }}>
          हिन्दी
        </button>
      </div>

      <p style={{ marginTop: '20px' }}>{t('changeLanguage')}</p>
    </div>
  );
};

export default App;
