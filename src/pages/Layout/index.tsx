import React from 'react'
import { Outlet } from 'react-router-dom'
import { useAutoTranslation } from '../../utils/autoI18n'
import AutoTranslatedText from '../../components/AutoTranslatedText'

const LayoutDemo: React.FC = () => {
  const { translate } = useAutoTranslation();

  return (
    <div className="page-container">
      <div className="content-area">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          <AutoTranslatedText>布局演示</AutoTranslatedText>
        </h1>
        
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          {translate('这个页面展示了不同的布局效果和响应式设计。')}
        </p>

        {/* 渲染子路由 */}
        <Outlet />
      </div>
    </div>
  )
}

export default LayoutDemo

