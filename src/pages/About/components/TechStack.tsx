import React from 'react';
import { useAutoTranslation } from '../../../utils/autoI18n';
import AutoTranslatedText from '../../../components/AutoTranslatedText';

const TechStack: React.FC = () => {
  const { translate } = useAutoTranslation();

  return (
    <section className="mb-8">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        <AutoTranslatedText>技术栈</AutoTranslatedText>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-700">
          <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-200 mb-2">
            <AutoTranslatedText>React 19</AutoTranslatedText>
          </h3>
          <p className="text-blue-700 dark:text-blue-300">
            {translate('现代化的UI库')}
          </p>
        </div>
        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-700">
          <h3 className="text-xl font-semibold text-green-800 dark:text-green-200 mb-2">
            <AutoTranslatedText>TypeScript</AutoTranslatedText>
          </h3>
          <p className="text-green-700 dark:text-green-300">
            {translate('类型安全的JavaScript')}
          </p>
        </div>
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-700">
          <h3 className="text-xl font-semibold text-purple-800 dark:text-purple-200 mb-2">
            <AutoTranslatedText>React Router</AutoTranslatedText>
          </h3>
          <p className="text-purple-700 dark:text-purple-300">
            {translate('客户端路由')}
          </p>
        </div>
        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border border-yellow-200 dark:border-yellow-700">
          <h3 className="text-xl font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
            <AutoTranslatedText>Tailwind CSS</AutoTranslatedText>
          </h3>
          <p className="text-yellow-700 dark:text-yellow-300">
            {translate('实用优先的CSS框架')}
          </p>
        </div>
        <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-700">
          <h3 className="text-xl font-semibold text-red-800 dark:text-red-200 mb-2">
            <AutoTranslatedText>Vite</AutoTranslatedText>
          </h3>
          <p className="text-red-700 dark:text-red-300">
            {translate('快速的构建工具')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
