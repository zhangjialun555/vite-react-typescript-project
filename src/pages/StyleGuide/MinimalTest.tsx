import React from 'react'
import { useAutoTranslation } from '../../utils/autoI18n'
import AutoTranslatedText from '../../components/AutoTranslatedText'

const SimpleTest: React.FC = () => {
  const { translate } = useAutoTranslation();

  return (
    <div className="page-container">
      <div className="content-area">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          <AutoTranslatedText>简单测试</AutoTranslatedText>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          {translate('这是一个简单的测试页面')}
        </p>
      </div>
    </div>
  )
}

export default SimpleTest
