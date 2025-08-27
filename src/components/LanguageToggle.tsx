import React from 'react';
import { useI18n } from '../contexts/I18nContext';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage, t } = useI18n();

  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-3 py-1.5 rounded-md shadow-md transition-all duration-200 hover:scale-105 flex items-center space-x-1.5 text-sm font-medium"
      title={language === 'zh' ? 'Switch to English' : '切换到中文'}
    >
      <span className="text-sm">
        {language === 'zh' ? '🇺🇸' : '🇨🇳'}
      </span>
      <span className="font-medium">
        {language === 'zh' ? 'EN' : '中文'}
      </span>
    </button>
  );
};

export default LanguageToggle;
