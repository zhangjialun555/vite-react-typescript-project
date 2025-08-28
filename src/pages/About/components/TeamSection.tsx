import React from 'react';
import { useAutoTranslation } from '../../../utils/autoI18n';
import AutoTranslatedText from '../../../components/AutoTranslatedText';

const TeamSection: React.FC = () => {
  const { translate } = useAutoTranslation();

  return (
    <section className="mb-8">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        <AutoTranslatedText>我们的团队</AutoTranslatedText>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="text-center">
            <div className="w-20 h-20 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
              <AutoTranslatedText>张</AutoTranslatedText>
            </div>
            <h3 className="text-xl font-semibold mb-2">
              <AutoTranslatedText>张三</AutoTranslatedText>
            </h3>
            <p className="text-blue-600 dark:text-blue-400 mb-3">
              <AutoTranslatedText>前端开发工程师</AutoTranslatedText>
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {translate('专注于React和TypeScript开发，热爱新技术和最佳实践。')}
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="text-center">
            <div className="w-20 h-20 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
              <AutoTranslatedText>李</AutoTranslatedText>
            </div>
            <h3 className="text-xl font-semibold mb-2">
              <AutoTranslatedText>李四</AutoTranslatedText>
            </h3>
            <p className="text-green-600 dark:text-green-400 mb-3">
              <AutoTranslatedText>UI/UX设计师</AutoTranslatedText>
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {translate('负责用户界面设计和用户体验优化，确保产品美观易用。')}
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="text-center">
            <div className="w-20 h-20 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
              <AutoTranslatedText>王</AutoTranslatedText>
            </div>
            <h3 className="text-xl font-semibold mb-2">
              <AutoTranslatedText>王五</AutoTranslatedText>
            </h3>
            <p className="text-purple-600 dark:text-purple-400 mb-3">
              <AutoTranslatedText>全栈开发工程师</AutoTranslatedText>
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {translate('具备前后端开发能力，负责系统架构和技术选型。')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
