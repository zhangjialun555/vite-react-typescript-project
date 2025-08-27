import { translations } from '../locales/translations';

// 自动文本替换映射表
const textMapping: Record<string, string> = {
  // 首页文本映射
  '欢迎来到我们的React应用！': 'home.welcome',
  '这是一个使用React Router和Tailwind CSS的现代化应用。': 'home.description',
  'React Router': 'home.reactRouter.title',
  '现代化的路由管理，支持单页应用导航。': 'home.reactRouter.description',
  '了解更多': 'home.reactRouter.button',
  'Tailwind CSS': 'home.tailwind.title',
  '实用优先的CSS框架，快速构建美观界面。': 'home.tailwind.description',
  '查看样式': 'home.tailwind.button',
  'TypeScript': 'home.typescript.title',
  '类型安全的JavaScript，提供更好的开发体验。': 'home.typescript.description',
  '开始使用': 'home.typescript.button',
  '快速开始': 'home.quickStart.title',
  '查看我们的样式指南，了解所有可用的预制组件。': 'home.quickStart.description',
  '查看样式指南': 'home.quickStart.styleGuide',
  '浏览组件': 'home.quickStart.browse',

  // 关于页面文本映射
  '关于我们': 'about.title',
  '这是一个学习React Router和Tailwind CSS的示例项目。': 'about.description1',
  '我们正在学习如何使用现代前端技术栈构建应用。': 'about.description2',
  '技术栈': 'about.techStack.title',
  'React 19 - 现代化的UI库': 'about.techStack.react',
  'TypeScript - 类型安全的JavaScript': 'about.techStack.typescript',
  'React Router - 客户端路由': 'about.techStack.router',
  'Tailwind CSS - 实用优先的CSS框架': 'about.techStack.tailwind',
  'Vite - 快速的构建工具': 'about.techStack.vite',

  // 联系页面文本映射
  '联系我们': 'contact.title',
  '如果您有任何问题，请通过以下方式联系我们：': 'contact.description',
  '邮箱': 'contact.email.title',
  'example@email.com': 'contact.email.value',
  '电话': 'contact.phone.title',
  '123-456-7890': 'contact.phone.value',
  '地址': 'contact.address.title',
  '某某市某某区': 'contact.address.value',

  // 测试页面文本映射
  'Tailwind CSS 测试页面': 'test.title',
  '间距测试': 'test.spacing.title',
  '这个div使用了 p-4 内边距和 rounded-lg 圆角': 'test.spacing.description',
  '边框测试': 'test.border.title',
  '这个div使用了左边框和蓝色主题': 'test.border.description',
  '主要按钮': 'test.buttons.primary',
  '次要按钮': 'test.buttons.secondary',
  '紫色按钮': 'test.buttons.purple',
  '响应式测试': 'test.responsive.title',
  '在移动设备上，这个文本较小；在桌面设备上，文本会变大。': 'test.responsive.description',
  '这是移动设备视图': 'test.responsive.mobile',
  '这是桌面设备视图': 'test.responsive.desktop',

  // 导航文本映射
  '首页': 'nav.home',
  '关于': 'nav.about',
  '联系我们': 'nav.contact',
  '测试': 'nav.test',
  '样式指南': 'nav.styleGuide',
  '暗黑模式': 'nav.darkMode',
  '简单测试': 'nav.simpleTest',
  '基础测试': 'nav.basicTest',
};

/**
 * 获取文本的翻译键
 * @param text 原始文本
 * @returns 翻译键或原始文本
 */
export const getTranslationKey = (text: string): string => {
  return textMapping[text] || text;
};

/**
 * 翻译文本
 * @param text 原始文本
 * @param language 目标语言
 * @returns 翻译后的文本
 */
export const translateText = (text: string, language: 'zh' | 'en'): string => {
  const key = getTranslationKey(text);
  if (key === text) {
    return text; // 如果没有找到映射，返回原文本
  }
  return translations[language]?.[key] || text;
};

/**
 * 自动替换组件中的文本
 * @param componentText 组件中的文本
 * @param language 目标语言
 * @returns 替换后的文本
 */
export const autoReplaceText = (componentText: string, language: 'zh' | 'en'): string => {
  let result = componentText;
  
  // 遍历所有映射，替换文本
  Object.entries(textMapping).forEach(([originalText, translationKey]) => {
    const translatedText = translations[language]?.[translationKey] || originalText;
    result = result.replace(new RegExp(originalText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), translatedText);
  });
  
  return result;
};

/**
 * 检查是否有未翻译的文本
 * @param text 要检查的文本
 * @returns 是否有对应的翻译
 */
export const hasTranslation = (text: string): boolean => {
  return textMapping.hasOwnProperty(text);
};

/**
 * 获取所有翻译键
 * @returns 所有翻译键的数组
 */
export const getAllTranslationKeys = (): string[] => {
  return Object.values(textMapping);
};

/**
 * 获取所有原始文本
 * @returns 所有原始文本的数组
 */
export const getAllOriginalTexts = (): string[] => {
  return Object.keys(textMapping);
};

