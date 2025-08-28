import React from 'react'
import { useAutoTranslation } from '../../utils/autoI18n'
import AutoTranslatedText from '../../components/AutoTranslatedText'

const AlignmentTest: React.FC = () => {
  const { translate } = useAutoTranslation();

  return (
    <div className="page-container">
      <div className="content-area">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          <AutoTranslatedText>对齐测试</AutoTranslatedText>
        </h1>
        
        <div className="space-y-8">
          {/* 文本对齐测试 */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              <AutoTranslatedText>文本对齐测试</AutoTranslatedText>
            </h2>
            <div className="space-y-4">
              <p className="text-left bg-gray-100 dark:bg-gray-800 p-4 rounded">
                <AutoTranslatedText>左对齐文本</AutoTranslatedText>
              </p>
              <p className="text-center bg-gray-100 dark:bg-gray-800 p-4 rounded">
                <AutoTranslatedText>居中对齐文本</AutoTranslatedText>
              </p>
              <p className="text-right bg-gray-100 dark:bg-gray-800 p-4 rounded">
                <AutoTranslatedText>右对齐文本</AutoTranslatedText>
              </p>
            </div>
          </section>

          {/* Flexbox 对齐测试 */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              <AutoTranslatedText>Flexbox 对齐测试</AutoTranslatedText>
            </h2>
            <div className="space-y-4">
              <div className="flex justify-start bg-blue-100 dark:bg-blue-900/20 p-4 rounded">
                <div className="bg-blue-500 text-white px-4 py-2 rounded">
                  <AutoTranslatedText>左对齐</AutoTranslatedText>
                </div>
              </div>
              <div className="flex justify-center bg-green-100 dark:bg-green-900/20 p-4 rounded">
                <div className="bg-green-500 text-white px-4 py-2 rounded">
                  <AutoTranslatedText>居中对齐</AutoTranslatedText>
                </div>
              </div>
              <div className="flex justify-end bg-red-100 dark:bg-red-900/20 p-4 rounded">
                <div className="bg-red-500 text-white px-4 py-2 rounded">
                  <AutoTranslatedText>右对齐</AutoTranslatedText>
                </div>
              </div>
            </div>
          </section>

          {/* 垂直对齐测试 */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              <AutoTranslatedText>垂直对齐测试</AutoTranslatedText>
            </h2>
            <div className="space-y-4">
              <div className="flex items-start bg-purple-100 dark:bg-purple-900/20 p-4 rounded h-20">
                <div className="bg-purple-500 text-white px-4 py-2 rounded">
                  <AutoTranslatedText>顶部对齐</AutoTranslatedText>
                </div>
              </div>
              <div className="flex items-center bg-yellow-100 dark:bg-yellow-900/20 p-4 rounded h-20">
                <div className="bg-yellow-500 text-black px-4 py-2 rounded">
                  <AutoTranslatedText>垂直居中</AutoTranslatedText>
                </div>
              </div>
              <div className="flex items-end bg-indigo-100 dark:bg-indigo-900/20 p-4 rounded h-20">
                <div className="bg-indigo-500 text-white px-4 py-2 rounded">
                  <AutoTranslatedText>底部对齐</AutoTranslatedText>
                </div>
              </div>
            </div>
          </section>

          {/* 网格对齐测试 */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              <AutoTranslatedText>网格对齐测试</AutoTranslatedText>
            </h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded text-center">
                <AutoTranslatedText>网格项 1</AutoTranslatedText>
              </div>
              <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded text-center">
                <AutoTranslatedText>网格项 2</AutoTranslatedText>
              </div>
              <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded text-center">
                <AutoTranslatedText>网格项 3</AutoTranslatedText>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default AlignmentTest

