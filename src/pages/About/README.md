# About页面子组件结构

## 📁 文件夹结构

```
src/pages/About/
├── components/
│   ├── AboutHeader.tsx      # 页面头部组件
│   ├── TechStack.tsx        # 技术栈组件
│   ├── TeamSection.tsx      # 团队介绍组件
│   ├── MissionSection.tsx   # 使命愿景组件
│   └── index.ts            # 组件导出文件
├── index.tsx               # 主页面组件
└── README.md              # 说明文档
```

## 🧩 组件说明

### index.tsx (主页面)
- **功能**: About页面的主入口文件
- **特性**: 组合所有子组件，提供页面整体布局

### AboutHeader.tsx
- **功能**: 显示页面标题和描述信息
- **Props**: `className` - 自定义样式类
- **特性**: 支持国际化，使用自动翻译功能

### TechStack.tsx
- **功能**: 展示技术栈信息
- **Props**: `className` - 自定义样式类
- **特性**: 
  - 支持国际化
  - 响应式设计
  - 暗黑模式支持

### TeamSection.tsx
- **功能**: 展示团队成员信息
- **Props**: `className` - 自定义样式类
- **特性**:
  - 团队成员卡片布局
  - 头像占位符
  - 响应式网格布局

### MissionSection.tsx
- **功能**: 展示公司使命、愿景和价值观
- **Props**: `className` - 自定义样式类
- **特性**:
  - 卡片式布局
  - 支持国际化
  - 暗黑模式适配

## 🎨 样式特点

- **统一设计**: 所有组件使用一致的卡片样式
- **颜色主题**: 每个组件使用不同的主题色
  - TechStack: 黄色主题
  - TeamSection: 蓝色主题
  - MissionSection: 绿色主题
- **响应式**: 支持移动端和桌面端
- **暗黑模式**: 完全支持暗黑模式切换

## 🌐 国际化支持

所有组件都支持中英文切换：
- 使用 `useAutoTranslation` Hook
- 使用 `AutoTranslatedText` 组件
- 翻译键统一管理在 `src/locales/translations.ts`

## 📝 使用方法

```tsx
// 在其他地方引入About页面
import About from './pages/About';

// 或者直接引入子组件
import { AboutHeader, TechStack, TeamSection, MissionSection } from './pages/About/components';
```

## 🔧 扩展指南

### 添加新组件
1. 在 `components/` 文件夹中创建新组件
2. 在 `components/index.ts` 中导出新组件
3. 在 `index.tsx` 中引入并使用

### 修改样式
- 每个组件都支持 `className` 属性
- 可以传入自定义样式类进行样式覆盖
- 组件内部使用 Tailwind CSS 类名

### 添加翻译
1. 在 `src/locales/translations.ts` 中添加翻译键值对
2. 在 `src/utils/autoI18n.ts` 中添加文本映射
3. 在组件中使用 `translate()` 函数或 `AutoTranslatedText` 组件

## 📦 导入方式

```tsx
// 导入整个About页面
import About from './pages/About';

// 导入特定子组件
import { AboutHeader } from './pages/About/components';
import { TechStack } from './pages/About/components';
import { TeamSection } from './pages/About/components';
import { MissionSection } from './pages/About/components';
```
