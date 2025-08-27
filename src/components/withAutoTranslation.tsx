import React from 'react';
import { useI18n } from '../contexts/I18nContext';
import { autoTranslate, containsChinese } from '../utils/autoI18n';

/**
 * 高阶组件：自动翻译组件中的中文文本
 * @param Component 要包装的组件
 * @returns 包装后的组件
 */
export function withAutoTranslation<P extends object>(
  Component: React.ComponentType<P>
): React.ComponentType<P> {
  return (props: P) => {
    const { language } = useI18n();
    
    // 递归处理props中的字符串
    const processProps = (obj: any): any => {
      if (typeof obj === 'string' && containsChinese(obj)) {
        return autoTranslate(obj, language);
      }
      
      if (Array.isArray(obj)) {
        return obj.map(processProps);
      }
      
      if (obj && typeof obj === 'object') {
        const processed: any = {};
        for (const key in obj) {
          processed[key] = processProps(obj[key]);
        }
        return processed;
      }
      
      return obj;
    };
    
    const processedProps = processProps(props);
    
    return <Component {...processedProps} />;
  };
}

/**
 * 自动翻译文本的Hook
 */
export function useAutoTranslation() {
  const { language } = useI18n();
  
  const translate = React.useCallback((text: string): string => {
    if (containsChinese(text)) {
      return autoTranslate(text, language);
    }
    return text;
  }, [language]);
  
  return { translate, language };
}

