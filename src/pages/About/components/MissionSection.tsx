import React from 'react';
import { useAutoTranslation } from '../../../utils/autoI18n';
import AutoTranslatedText from '../../../components/AutoTranslatedText';

const MissionSection: React.FC = () => {
  const { translate } = useAutoTranslation();

  return (
    <section className="mb-8">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        <AutoTranslatedText>我们的使命</AutoTranslatedText>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-700">
          <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-200 mb-4">
            <AutoTranslatedText>愿景</AutoTranslatedText>
          </h3>
          <p className="text-blue-700 dark:text-blue-300 mb-4">
            {translate('成为行业领先的技术团队，通过创新和卓越的技术能力，为用户提供最优质的产品和服务。')}
          </p>
          <ul className="text-blue-700 dark:text-blue-300 space-y-2">
            <li>• {translate('推动技术创新')}</li>
            <li>• {translate('提升用户体验')}</li>
            <li>• {translate('创造社会价值')}</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg border border-green-200 dark:border-green-700">
          <h3 className="text-xl font-semibold text-green-800 dark:text-green-200 mb-4">
            <AutoTranslatedText>价值观</AutoTranslatedText>
          </h3>
          <p className="text-green-700 dark:text-green-300 mb-4">
            {translate('我们秉持开放、协作、创新的价值观，致力于构建一个积极向上的团队文化。')}
          </p>
          <ul className="text-green-700 dark:text-green-300 space-y-2">
            <li>• {translate('开放透明')}</li>
            <li>• {translate('团队协作')}</li>
            <li>• {translate('持续学习')}</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
          <AutoTranslatedText>我们的承诺</AutoTranslatedText>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-500 rounded-full mx-auto mb-3 flex items-center justify-center">
              <span className="text-white font-bold">✓</span>
            </div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
              <AutoTranslatedText>质量保证</AutoTranslatedText>
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {translate('确保每个产品都达到最高质量标准')}
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-green-500 rounded-full mx-auto mb-3 flex items-center justify-center">
              <span className="text-white font-bold">⚡</span>
            </div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
              <AutoTranslatedText>高效交付</AutoTranslatedText>
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {translate('快速响应需求，及时交付成果')}
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-500 rounded-full mx-auto mb-3 flex items-center justify-center">
              <span className="text-white font-bold">💡</span>
            </div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
              <AutoTranslatedText>创新思维</AutoTranslatedText>
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {translate('持续探索新技术，推动行业进步')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
