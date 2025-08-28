import React from 'react';
import { useAutoTranslation } from '../../../utils/autoI18n';
import AutoTranslatedText from '../../../components/AutoTranslatedText';

const AboutHeader: React.FC = () => {
  const { translate } = useAutoTranslation();

  return (
    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        <AutoTranslatedText>关于我们</AutoTranslatedText>
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
        {translate('这是一个学习React Router和Tailwind CSS的示例项目。')}
      </p>
      <p className="text-lg text-gray-500 dark:text-gray-400">
        {translate('我们正在学习如何使用现代前端技术栈构建应用。')}
      </p>
    </div>
  );
};

export default AboutHeader;
