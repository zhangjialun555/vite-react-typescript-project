import React from 'react'
import { useAutoTranslation } from '../utils/autoI18n'
import AutoTranslatedText from '../components/AutoTranslatedText'

const Contact: React.FC = () => {
  const { translate } = useAutoTranslation();

  return (
    <div className="page-container">
      <div className="content-area">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          <AutoTranslatedText>联系我们</AutoTranslatedText>
        </h1>
        
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          {translate('如果您有任何问题，请通过以下方式联系我们：')}
        </p>
        
        <div className="grid-responsive">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">
                <AutoTranslatedText>邮箱</AutoTranslatedText>
              </h3>
            </div>
            <div className="card-body">
              <p className="text-gray-600 dark:text-gray-400">
                example@email.com
              </p>
            </div>
          </div>
          
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">
                <AutoTranslatedText>电话</AutoTranslatedText>
              </h3>
            </div>
            <div className="card-body">
              <p className="text-gray-600 dark:text-gray-400">
                123-456-7890
              </p>
            </div>
          </div>
          
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">
                <AutoTranslatedText>地址</AutoTranslatedText>
              </h3>
            </div>
            <div className="card-body">
              <p className="text-gray-600 dark:text-gray-400">
                {translate('某某市某某区')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
