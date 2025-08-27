import React from 'react'
import { useAutoTranslation } from '../utils/autoI18n'
import AutoTranslatedText from '../components/AutoTranslatedText'

const Home: React.FC = () => {
  const { translate } = useAutoTranslation();

  return (
    <div className="page-container">
      <div className="content-area">
        {/* 方法1: 使用 AutoTranslatedText 组件 */}
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          <AutoTranslatedText>欢迎来到我们的React应用！</AutoTranslatedText>
        </h1>
        
        {/* 方法2: 使用 translate 函数 */}
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          {translate('这是一个使用React Router和Tailwind CSS的现代化应用。')}
        </p>
        
        <div className="grid-responsive">
          <div className="card card-hover">
            <div className="card-header">
              <h3 className="card-title">
                <AutoTranslatedText>React Router</AutoTranslatedText>
              </h3>
            </div>
            <div className="card-body">
              <p>{translate('现代化的路由管理，支持单页应用导航。')}</p>
            </div>
            <div className="card-footer">
              <button className="btn-primary btn-sm">
                <AutoTranslatedText>了解更多</AutoTranslatedText>
              </button>
            </div>
          </div>
          
          <div className="card card-hover">
            <div className="card-header">
              <h3 className="card-title">
                <AutoTranslatedText>Tailwind CSS</AutoTranslatedText>
              </h3>
            </div>
            <div className="card-body">
              <p>{translate('实用优先的CSS框架，快速构建美观界面。')}</p>
            </div>
            <div className="card-footer">
              <button className="btn-secondary btn-sm">
                <AutoTranslatedText>查看样式</AutoTranslatedText>
              </button>
            </div>
          </div>
          
          <div className="card card-hover">
            <div className="card-header">
              <h3 className="card-title">
                <AutoTranslatedText>TypeScript</AutoTranslatedText>
              </h3>
            </div>
            <div className="card-body">
              <p>{translate('类型安全的JavaScript，提供更好的开发体验。')}</p>
            </div>
            <div className="card-footer">
              <button className="btn-success btn-sm">
                <AutoTranslatedText>开始使用</AutoTranslatedText>
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500 dark:border-blue-400">
          <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-200 mb-3">
            <AutoTranslatedText>快速开始</AutoTranslatedText>
          </h3>
          <p className="text-blue-700 dark:text-blue-300 mb-4">
            {translate('查看我们的样式指南，了解所有可用的预制组件。')}
          </p>
          <div className="flex space-x-4">
            <button className="btn-primary">
              <AutoTranslatedText>查看样式指南</AutoTranslatedText>
            </button>
            <button className="btn-outline">
              <AutoTranslatedText>浏览组件</AutoTranslatedText>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
