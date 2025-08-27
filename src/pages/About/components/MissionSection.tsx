import React from 'react';
import { useAutoTranslation } from '../../../utils/autoI18n';
import AutoTranslatedText from '../../../components/AutoTranslatedText';

interface MissionSectionProps {
  className?: string;
}

const MissionSection: React.FC<MissionSectionProps> = ({ className = '' }) => {
  const { translate } = useAutoTranslation();

  return (
    <div className={`bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-l-4 border-green-500 dark:border-green-400 ${className}`}>
      <h3 className="text-xl font-semibold text-green-800 dark:text-green-200 mb-4">
        <AutoTranslatedText>我们的使命</AutoTranslatedText>
      </h3>
      <div className="space-y-4">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
            <AutoTranslatedText>使命</AutoTranslatedText>
          </h4>
          <p className="text-gray-600 dark:text-gray-300">
            {translate('通过创新的技术解决方案，为用户提供卓越的数字体验，推动行业数字化转型。')}
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
            <AutoTranslatedText>愿景</AutoTranslatedText>
          </h4>
          <p className="text-gray-600 dark:text-gray-300">
            {translate('成为行业领先的技术创新者，通过持续的技术突破和优质服务，创造更大的社会价值。')}
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
            <AutoTranslatedText>价值观</AutoTranslatedText>
          </h4>
          <ul className="text-gray-600 dark:text-gray-300 space-y-1">
            <li>• {translate('创新驱动：持续探索新技术和解决方案')}</li>
            <li>• {translate('用户至上：以用户需求为中心，提供优质体验')}</li>
            <li>• {translate('团队协作：重视团队合作，共同成长')}</li>
            <li>• {translate('质量第一：追求卓越品质，精益求精')}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MissionSection;
