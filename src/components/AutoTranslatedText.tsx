import React from 'react';
import { useI18n } from '../contexts/I18nContext';
import { autoTranslate, containsChinese } from '../utils/autoI18n';

interface AutoTranslatedTextProps {
  children: string;
  className?: string;
  fallback?: string;
}

const AutoTranslatedText: React.FC<AutoTranslatedTextProps> = ({ 
  children, 
  className = '',
  fallback 
}) => {
  const { language } = useI18n();
  
  // 如果文本包含中文，进行自动翻译
  const translatedText = containsChinese(children) 
    ? autoTranslate(children, language)
    : children;
  
  // 如果翻译失败且提供了fallback，使用fallback
  const displayText = (translatedText === children && fallback) ? fallback : translatedText;
  
  return (
    <span className={className}>
      {displayText}
    </span>
  );
};

export default AutoTranslatedText;

