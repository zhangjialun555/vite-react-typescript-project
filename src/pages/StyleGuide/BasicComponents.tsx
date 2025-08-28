import React from 'react'
import { useAutoTranslation } from '../../utils/autoI18n'
import AutoTranslatedText from '../../components/AutoTranslatedText'

const Test: React.FC = () => {
  const { translate } = useAutoTranslation();

  return (
    <div className="page-container">
      <div className="content-area">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          <AutoTranslatedText>Tailwind CSS 测试页面</AutoTranslatedText>
        </h1>
        
        <div className="space-y-8">
          {/* 颜色测试 */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              <AutoTranslatedText>颜色测试</AutoTranslatedText>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-red-500 text-white rounded text-center">
                <AutoTranslatedText>Red</AutoTranslatedText>
              </div>
              <div className="p-4 bg-green-500 text-white rounded text-center">
                <AutoTranslatedText>Green</AutoTranslatedText>
              </div>
              <div className="p-4 bg-blue-500 text-white rounded text-center">
                <AutoTranslatedText>Blue</AutoTranslatedText>
              </div>
              <div className="p-4 bg-yellow-500 text-black rounded text-center">
                <AutoTranslatedText>Yellow</AutoTranslatedText>
              </div>
            </div>
          </section>

          {/* 间距测试 */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              <AutoTranslatedText>间距测试</AutoTranslatedText>
            </h2>
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-600">
              <p className="text-gray-700 dark:text-gray-300">
                {translate('这个div使用了 p-4 内边距和 rounded-lg 圆角')}
              </p>
            </div>
          </section>

          {/* 边框测试 */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              <AutoTranslatedText>边框测试</AutoTranslatedText>
            </h2>
            <div className="border-l-4 border-blue-500 pl-4 bg-blue-50 dark:bg-blue-900/20">
              <p className="text-gray-700 dark:text-gray-300">
                {translate('这个div使用了左边框和蓝色主题')}
              </p>
            </div>
          </section>

          {/* 按钮测试 */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              <AutoTranslatedText>按钮测试</AutoTranslatedText>
            </h2>
            <div className="space-x-4">
              <button className="btn-primary">
                <AutoTranslatedText>主要按钮</AutoTranslatedText>
              </button>
              <button className="btn-secondary">
                <AutoTranslatedText>次要按钮</AutoTranslatedText>
              </button>
              <button className="btn-purple">
                <AutoTranslatedText>紫色按钮</AutoTranslatedText>
              </button>
            </div>
          </section>

          {/* 响应式测试 */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              <AutoTranslatedText>响应式测试</AutoTranslatedText>
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300">
              {translate('在移动设备上，这个文本较小；在桌面设备上，文本会变大。')}
            </p>
            <div className="mt-4">
              <p className="text-sm md:hidden text-blue-600 dark:text-blue-400">
                <AutoTranslatedText>这是移动设备视图</AutoTranslatedText>
              </p>
              <p className="hidden md:block text-green-600 dark:text-green-400">
                <AutoTranslatedText>这是桌面设备视图</AutoTranslatedText>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Test
