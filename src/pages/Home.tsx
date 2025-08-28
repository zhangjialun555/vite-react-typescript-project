import React from 'react'
import { useAutoTranslation } from '../utils/autoI18n'
import AutoTranslatedText from '../components/AutoTranslatedText'
import AntdDarkModeTest from '../components/AntdDarkModeTest'

const Home: React.FC = () => {
  const { translate } = useAutoTranslation();

  return (
    <div className="page-container">
      <div className="content-area">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            <AutoTranslatedText>欢迎来到我们的项目</AutoTranslatedText>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            {translate('这是一个使用React、TypeScript、Tailwind CSS和Ant Design构建的现代化Web应用。')}
          </p>
          <div className="flex justify-center space-x-4">
            <button className="btn-primary">
              <AutoTranslatedText>开始探索</AutoTranslatedText>
            </button>
            <button className="btn-secondary">
              <AutoTranslatedText>了解更多</AutoTranslatedText>
            </button>
          </div>
        </div>

        {/* 功能特色 */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            <AutoTranslatedText>功能特色</AutoTranslatedText>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">🌙</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  <AutoTranslatedText>暗黑模式</AutoTranslatedText>
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {translate('支持亮色和暗色主题切换，提供更好的用户体验')}
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">🌍</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  <AutoTranslatedText>国际化</AutoTranslatedText>
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {translate('支持多语言切换，自动检测和翻译功能')}
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">📱</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  <AutoTranslatedText>响应式设计</AutoTranslatedText>
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {translate('完美适配各种设备尺寸，移动端友好')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 技术栈 */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            <AutoTranslatedText>技术栈</AutoTranslatedText>
          </h2>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="bg-blue-100 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200">
                    <AutoTranslatedText>React 19</AutoTranslatedText>
                  </h4>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-green-100 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 dark:text-green-200">
                    <AutoTranslatedText>TypeScript</AutoTranslatedText>
                  </h4>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-yellow-100 dark:bg-yellow-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 dark:text-yellow-200">
                    <AutoTranslatedText>Tailwind CSS</AutoTranslatedText>
                  </h4>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 dark:bg-purple-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 dark:text-purple-200">
                    <AutoTranslatedText>Ant Design</AutoTranslatedText>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ant Design 暗黑模式测试 */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            <AutoTranslatedText>Ant Design 暗黑模式测试</AutoTranslatedText>
          </h2>
          <AntdDarkModeTest />
        </section>

        {/* 快速链接 */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            <AutoTranslatedText>快速链接</AutoTranslatedText>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <a href="/about" className="block p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                <AutoTranslatedText>关于我们</AutoTranslatedText>
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {translate('了解我们的团队和使命')}
              </p>
            </a>
            <a href="/contact" className="block p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                <AutoTranslatedText>联系我们</AutoTranslatedText>
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {translate('获取联系方式和地址信息')}
              </p>
            </a>
            <a href="/styleguide" className="block p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                <AutoTranslatedText>样式指南</AutoTranslatedText>
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {translate('查看所有可用的样式组件')}
              </p>
            </a>
            <a href="/antd-demo" className="block p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                <AutoTranslatedText>Ant Design 演示</AutoTranslatedText>
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {translate('体验 Ant Design 组件库')}
              </p>
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
