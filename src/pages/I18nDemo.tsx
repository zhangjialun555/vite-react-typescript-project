import React from 'react';
import { useI18n } from '../contexts/I18nContext';
import { translateText, hasTranslation, getAllOriginalTexts } from '../utils/i18nHelper';

const I18nDemo: React.FC = () => {
  const { language, setLanguage, t, isZh, isEn } = useI18n();

  // 示例文本
  const sampleTexts = [
    '欢迎来到我们的React应用！',
    '关于我们',
    '联系我们',
    '这是一个使用React Router和Tailwind CSS的现代化应用。',
    '技术栈',
    'React Router',
    'Tailwind CSS',
    'TypeScript',
  ];

  return (
    <div className="page-container">
      <div className="content-area">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          🌍 国际化演示页面
        </h1>
        
        <div className="grid-responsive">
          {/* 语言切换演示 */}
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

          {/* 翻译功能演示 */}
          <div className="card card-hover">
            <div className="card-header">
              <h3 className="card-title">翻译功能</h3>
            </div>
            <div className="card-body">
              <p className="mb-4">使用 t() 函数进行翻译:</p>
              <div className="space-y-2 text-sm">
                <p><strong>中文:</strong> {t('home.welcome')}</p>
                <p><strong>English:</strong> {t('home.welcome')}</p>
              </div>
            </div>
          </div>

          {/* 自动文本替换演示 */}
          <div className="card card-hover">
            <div className="card-header">
              <h3 className="card-title">自动文本替换</h3>
            </div>
            <div className="card-body">
              <p className="mb-4">自动替换中文文本为英文:</p>
              <div className="space-y-2 text-sm">
                {sampleTexts.map((text, index) => (
                  <div key={index} className="p-2 bg-gray-50 dark:bg-gray-700 rounded">
                    <p><strong>原文:</strong> {text}</p>
                    <p><strong>翻译:</strong> {translateText(text, language)}</p>
                    <p><strong>有翻译:</strong> {hasTranslation(text) ? '✅' : '❌'}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 使用说明 */}
        <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500 dark:border-blue-400">
          <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-200 mb-3">
            📖 使用说明
          </h3>
          <div className="text-blue-700 dark:text-blue-300 space-y-2">
            <p><strong>1. 语言切换:</strong> 点击右上角的语言切换按钮或使用 setLanguage() 函数</p>
            <p><strong>2. 翻译文本:</strong> 使用 t('translation.key') 函数获取翻译</p>
            <p><strong>3. 自动替换:</strong> 使用 translateText() 函数自动替换中文文本</p>
            <p><strong>4. 添加翻译:</strong> 在 src/locales/translations.ts 中添加新的翻译键值对</p>
            <p><strong>5. 检查翻译:</strong> 使用 hasTranslation() 函数检查文本是否有翻译</p>
          </div>
        </div>

        {/* 翻译统计 */}
        <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
          <h3 className="text-lg font-semibold text-green-700 dark:text-green-200 mb-2">
            📊 翻译统计
          </h3>
          <p className="text-green-600 dark:text-green-300">
            当前共有 {getAllOriginalTexts().length} 个翻译条目
          </p>
        </div>
      </div>
    </div>
  );
};

export default I18nDemo;

