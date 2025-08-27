import React from 'react';
import { useI18n } from '../contexts/I18nContext';
import { useAutoTranslation } from '../utils/autoI18n';
import AutoTranslatedText from '../components/AutoTranslatedText';
import { containsChinese, detectChineseTexts } from '../utils/autoI18n';

const AutoI18nDemo: React.FC = () => {
  const { language, setLanguage, isZh, isEn } = useI18n();
  const { translate } = useAutoTranslation();

  // 示例中文文本（保持原有格式）
  const sampleTexts = [
    '欢迎来到我们的React应用！',
    '这是一个使用React Router和Tailwind CSS的现代化应用。',
    '关于我们',
    '联系我们',
    '技术栈',
    'React Router - 现代化的路由管理',
    'Tailwind CSS - 实用优先的CSS框架',
    'TypeScript - 类型安全的JavaScript',
  ];

  return (
    <div className="page-container">
      <div className="content-area">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          🤖 自动中文检测与翻译演示
        </h1>
        
        <div className="grid-responsive">
          {/* 语言切换 */}
          <div className="card card-hover">
            <div className="card-header">
              <h3 className="card-title">语言切换</h3>
            </div>
            <div className="card-body">
              <p className="mb-4">当前语言: <span className="font-bold">{isZh ? '中文' : 'English'}</span></p>
              <div className="flex space-x-2">
                <button 
                  onClick={() => setLanguage('zh')}
                  className={`px-4 py-2 rounded ${isZh ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'}`}
                >
                  中文
                </button>
                <button 
                  onClick={() => setLanguage('en')}
                  className={`px-4 py-2 rounded ${isEn ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'}`}
                >
                  English
                </button>
              </div>
            </div>
          </div>

          {/* 自动翻译组件演示 */}
          <div className="card card-hover">
            <div className="card-header">
              <h3 className="card-title">AutoTranslatedText 组件</h3>
            </div>
            <div className="card-body">
              <p className="mb-4">使用 AutoTranslatedText 组件自动翻译:</p>
              <div className="space-y-2 text-sm">
                <p><strong>原文:</strong> <AutoTranslatedText>欢迎来到我们的React应用！</AutoTranslatedText></p>
                <p><strong>原文:</strong> <AutoTranslatedText>关于我们</AutoTranslatedText></p>
                <p><strong>原文:</strong> <AutoTranslatedText>技术栈</AutoTranslatedText></p>
              </div>
            </div>
          </div>

          {/* useAutoTranslation Hook 演示 */}
          <div className="card card-hover">
            <div className="card-header">
              <h3 className="card-title">useAutoTranslation Hook</h3>
            </div>
            <div className="card-body">
              <p className="mb-4">使用 useAutoTranslation Hook:</p>
              <div className="space-y-2 text-sm">
                <p><strong>原文:</strong> {translate('联系我们')}</p>
                <p><strong>原文:</strong> {translate('这是一个学习React Router和Tailwind CSS的示例项目。')}</p>
                <p><strong>原文:</strong> {translate('React Router - 现代化的路由管理')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* 中文检测演示 */}
        <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border-l-4 border-yellow-500 dark:border-yellow-400">
          <h3 className="text-xl font-semibold text-yellow-800 dark:text-yellow-200 mb-3">
            🔍 中文检测演示
          </h3>
          <div className="text-yellow-700 dark:text-yellow-300 space-y-2">
            {sampleTexts.map((text, index) => (
              <div key={index} className="p-2 bg-white dark:bg-gray-800 rounded">
                <p><strong>文本:</strong> {text}</p>
                <p><strong>包含中文:</strong> {containsChinese(text) ? '✅ 是' : '❌ 否'}</p>
                <p><strong>翻译结果:</strong> {translate(text)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 使用说明 */}
        <div className="mt-6 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500 dark:border-blue-400">
          <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-200 mb-3">
            📖 使用说明
          </h3>
          <div className="text-blue-700 dark:text-blue-300 space-y-2">
            <p><strong>1. AutoTranslatedText 组件:</strong> 直接包装中文文本，自动检测和翻译</p>
            <p><strong>2. useAutoTranslation Hook:</strong> 在组件中使用 translate() 函数</p>
            <p><strong>3. 保持原有中文:</strong> 不需要修改原有的中文文本</p>
            <p><strong>4. 自动检测:</strong> 使用 containsChinese() 函数检测中文</p>
            <p><strong>5. 批量检测:</strong> 使用 detectChineseTexts() 函数批量检测</p>
          </div>
        </div>

        {/* 代码示例 */}
        <div className="mt-6 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
            💻 代码示例
          </h3>
          <div className="text-sm text-gray-600 dark:text-gray-300 space-y-4">
            <div>
              <p className="font-semibold">方法1: 使用 AutoTranslatedText 组件</p>
              <pre className="bg-gray-100 dark:bg-gray-900 p-2 rounded mt-1">
{`<AutoTranslatedText>欢迎来到我们的React应用！</AutoTranslatedText>`}
              </pre>
            </div>
            <div>
              <p className="font-semibold">方法2: 使用 useAutoTranslation Hook</p>
              <pre className="bg-gray-100 dark:bg-gray-900 p-2 rounded mt-1">
{`const { translate } = useAutoTranslation();
<p>{translate('欢迎来到我们的React应用！')}</p>`}
              </pre>
            </div>
            <div>
              <p className="font-semibold">方法3: 检测中文</p>
              <pre className="bg-gray-100 dark:bg-gray-900 p-2 rounded mt-1">
{`const hasChinese = containsChinese('欢迎来到我们的React应用！');
console.log(hasChinese); // true`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoI18nDemo;
