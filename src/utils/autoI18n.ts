import React, { useCallback } from 'react';
import { translations } from '../locales/translations';
import { useI18n } from '../contexts/I18nContext';

// 中文字符检测正则表达式
const chineseRegex = /[\u4e00-\u9fff\u3400-\u4dbf\u20000-\u2a6df\u2a700-\u2b73f\u2b740-\u2b81f\u2b820-\u2ceaf\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f]/;

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
  
  // 团队相关
  '我们的团队': 'about.team.title',
  '张三': 'about.team.member1.name',
  '前端开发工程师': 'about.team.member1.role',
  '专注于React和TypeScript开发，热爱新技术和最佳实践。': 'about.team.member1.description',
  '李四': 'about.team.member2.name',
  'UI/UX设计师': 'about.team.member2.role',
  '负责用户界面设计和用户体验优化，确保产品美观易用。': 'about.team.member2.description',
  '王五': 'about.team.member3.name',
  '全栈开发工程师': 'about.team.member3.role',
  '具备前后端开发能力，负责系统架构和技术选型。': 'about.team.member3.description',
  
  // 使命愿景
  '我们的使命': 'about.mission.title',
  '使命': 'about.mission.mission',
  '通过创新的技术解决方案，为用户提供卓越的数字体验，推动行业数字化转型。': 'about.mission.missionText',
  '愿景': 'about.mission.vision',
  '成为行业领先的技术创新者，通过持续的技术突破和优质服务，创造更大的社会价值。': 'about.mission.visionText',
  '价值观': 'about.mission.values',
  '创新驱动：持续探索新技术和解决方案': 'about.mission.value1',
  '用户至上：以用户需求为中心，提供优质体验': 'about.mission.value2',
  '团队协作：重视团队合作，共同成长': 'about.mission.value3',
  '质量第一：追求卓越品质，精益求精': 'about.mission.value4',

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
  '国际化演示': 'nav.i18nDemo',
  '自动国际化演示': 'nav.autoI18nDemo',
  '布局演示': 'nav.layoutDemo',
  '布局测试': 'nav.testLayout',
  '对齐测试': 'nav.alignmentTest',

  // 通用文本映射
  '登录': 'common.login',
  '加载中...': 'common.loading',
  '错误': 'common.error',
  '成功': 'common.success',
  '取消': 'common.cancel',
  '确认': 'common.confirm',
  '保存': 'common.save',
  '编辑': 'common.edit',
  '删除': 'common.delete',
  '返回': 'common.back',
  '下一步': 'common.next',
  '上一步': 'common.previous',
};

/**
 * 检测文本是否包含中文字符
 * @param text 要检测的文本
 * @returns 是否包含中文
 */
export const containsChinese = (text: string): boolean => {
  return chineseRegex.test(text);
};

/**
 * 自动翻译文本（保持原有中文，根据语言返回对应翻译）
 * @param text 原始文本
 * @param language 目标语言
 * @returns 翻译后的文本
 */
export const autoTranslate = (text: string, language: 'zh' | 'en'): string => {
  // 如果目标语言是中文，直接返回原文本
  if (language === 'zh') {
    return text;
  }
  
  // 查找翻译键
  const translationKey = textMapping[text];
  if (!translationKey) {
    return text; // 如果没有找到映射，返回原文本
  }
  
  // 获取翻译
  const translation = translations[language]?.[translationKey];
  return translation || text;
};

/**
 * 自动替换React组件中的中文文本
 * @param children React子元素
 * @param language 目标语言
 * @returns 替换后的React元素
 */
export const autoReplaceReactText = (children: React.ReactNode, language: 'zh' | 'en'): React.ReactNode => {
  if (typeof children === 'string') {
    return autoTranslate(children, language);
  }
  
  if (Array.isArray(children)) {
    return children.map((child, index) => 
      autoReplaceReactText(child, language)
    );
  }
  
  if (React.isValidElement(children)) {
    const newChildren = autoReplaceReactText(children.props.children, language);
    return React.cloneElement(children, children.props, newChildren);
  }
  
  return children;
};

/**
 * 自动翻译Hook
 * @returns 自动翻译函数
 */
export const useAutoTranslation = () => {
  const { language } = useI18n();
  
  const translate = useCallback((text: string): string => {
    return autoTranslate(text, language);
  }, [language]);
  
  return { translate, language };
};

/**
 * 检测组件中所有需要翻译的中文文本
 * @param componentText 组件文本内容
 * @returns 检测到的中文文本数组
 */
export const detectChineseTexts = (componentText: string): string[] => {
  const chineseTexts: string[] = [];
  
  // 简单的文本分割和检测
  const lines = componentText.split('\n');
  lines.forEach(line => {
    const trimmedLine = line.trim();
    if (trimmedLine && containsChinese(trimmedLine)) {
      chineseTexts.push(trimmedLine);
    }
  });
  
  return [...new Set(chineseTexts)]; // 去重
};

/**
 * 生成翻译键建议
 * @param text 中文文本
 * @returns 建议的翻译键
 */
export const generateTranslationKey = (text: string): string => {
  // 简单的翻译键生成逻辑
  const key = text
    .replace(/[^\u4e00-\u9fff\w\s]/g, '') // 移除特殊字符
    .replace(/\s+/g, '.') // 空格替换为点
    .toLowerCase()
    .substring(0, 50); // 限制长度
  
  return key || 'custom.text';
};
