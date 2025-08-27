import React from 'react';
import { useAutoTranslation } from '../../../utils/autoI18n';
import AutoTranslatedText from '../../../components/AutoTranslatedText';

interface TechStackProps {
  className?: string;
}

const TechStack: React.FC<TechStackProps> = ({ className = '' }) => {
  const { translate } = useAutoTranslation();

  const techItems = [
    'React 19 - 现代化的UI库',
    'TypeScript - 类型安全的JavaScript',
    'React Router - 客户端路由',
    'Tailwind CSS - 实用优先的CSS框架',
    'Vite - 快速的构建工具'
  ];

  return (
    <div className={`bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border-l-4 border-yellow-500 dark:border-yellow-400 ${className}`}>
      <h3 className="text-xl font-semibold text-yellow-800 dark:text-yellow-200 mb-3">
        <AutoTranslatedText>技术栈</AutoTranslatedText>
      </h3>
      <ul className="text-yellow-700 dark:text-yellow-300 space-y-2">
        {techItems.map((item, index) => (
          <li key={index}>• {translate(item)}</li>
        ))}
      </ul>
    </div>
  );
};

export default TechStack;
