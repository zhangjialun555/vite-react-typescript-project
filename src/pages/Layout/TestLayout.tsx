import React from 'react'
import { useAutoTranslation } from '../../utils/autoI18n'
import AutoTranslatedText from '../../components/AutoTranslatedText'

const TestLayout: React.FC = () => {
  const { translate } = useAutoTranslation();

  return (
    <div className="page-container">
      <div className="content-area">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          <AutoTranslatedText>布局测试</AutoTranslatedText>
        </h1>
        
        <div className="space-y-8">
          {/* 布局说明 */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              <AutoTranslatedText>布局说明</AutoTranslatedText>
            </h2>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-700">
              <p className="text-blue-800 dark:text-blue-200">
                {translate('这个页面用于测试不同的布局效果和响应式设计')}
              </p>
            </div>
          </section>

          {/* 网格布局测试 */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              <AutoTranslatedText>网格布局测试</AutoTranslatedText>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">
                  <AutoTranslatedText>卡片 1</AutoTranslatedText>
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {translate('这是一个测试卡片，用于验证网格布局的效果')}
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">
                  <AutoTranslatedText>卡片 2</AutoTranslatedText>
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {translate('响应式网格会根据屏幕尺寸自动调整列数')}
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">
                  <AutoTranslatedText>卡片 3</AutoTranslatedText>
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {translate('在移动设备上显示为单列，桌面设备显示为多列')}
                </p>
              </div>
            </div>
          </section>

          {/* Flexbox 测试 */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              <AutoTranslatedText>Flexbox 测试</AutoTranslatedText>
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center bg-gray-100 dark:bg-gray-700 p-4 rounded">
                <span className="text-gray-700 dark:text-gray-300">
                  <AutoTranslatedText>左侧元素</AutoTranslatedText>
                </span>
                <span className="text-gray-700 dark:text-gray-300">
                  <AutoTranslatedText>右侧元素</AutoTranslatedText>
                </span>
              </div>
              <div className="flex justify-center items-center bg-gray-100 dark:bg-gray-700 p-4 rounded">
                <span className="text-gray-700 dark:text-gray-300">
                  <AutoTranslatedText>居中对齐的元素</AutoTranslatedText>
                </span>
              </div>
              <div className="flex justify-around items-center bg-gray-100 dark:bg-gray-700 p-4 rounded">
                <span className="text-gray-700 dark:text-gray-300">
                  <AutoTranslatedText>项目 A</AutoTranslatedText>
                </span>
                <span className="text-gray-700 dark:text-gray-300">
                  <AutoTranslatedText>项目 B</AutoTranslatedText>
                </span>
                <span className="text-gray-700 dark:text-gray-300">
                  <AutoTranslatedText>项目 C</AutoTranslatedText>
                </span>
              </div>
            </div>
          </section>

          {/* 响应式测试 */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              <AutoTranslatedText>响应式测试</AutoTranslatedText>
            </h2>
            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">
                <AutoTranslatedText>屏幕尺寸检测</AutoTranslatedText>
              </h3>
              <div className="space-y-2 text-sm">
                <p className="block sm:hidden text-green-700 dark:text-green-300">
                  <AutoTranslatedText>小屏幕设备</AutoTranslatedText>
                </p>
                <p className="hidden sm:block md:hidden text-green-700 dark:text-green-300">
                  <AutoTranslatedText>中等屏幕设备</AutoTranslatedText>
                </p>
                <p className="hidden md:block lg:hidden text-green-700 dark:text-green-300">
                  <AutoTranslatedText>大屏幕设备</AutoTranslatedText>
                </p>
                <p className="hidden lg:block text-green-700 dark:text-green-300">
                  <AutoTranslatedText>超大屏幕设备</AutoTranslatedText>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default TestLayout

