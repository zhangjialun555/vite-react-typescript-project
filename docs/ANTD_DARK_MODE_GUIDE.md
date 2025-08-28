# Ant Design 暗黑模式使用指南

## 概述

本项目已配置了 Ant Design 组件的暗黑模式支持，可以自动响应主题切换，提供一致的用户体验。

## 配置说明

### 1. 主题配置

在 `src/components/AntdComponents.tsx` 中定义了亮色和暗色主题：

```tsx
// 暗黑模式主题配置
export const darkTheme = {
  token: {
    colorPrimary: '#1890ff',
    colorSuccess: '#52c41a',
    colorWarning: '#faad14',
    colorError: '#ff4d4f',
    colorInfo: '#1890ff',
    borderRadius: 6,
    wireframe: false,
  },
  algorithm: 'darkAlgorithm',
};

export const lightTheme = {
  token: {
    colorPrimary: '#1890ff',
    colorSuccess: '#52c41a',
    colorWarning: '#faad14',
    colorError: '#ff4d4f',
    colorInfo: '#1890ff',
    borderRadius: 6,
    wireframe: false,
  },
  algorithm: 'defaultAlgorithm',
};
```

### 2. 全局主题提供者

使用 `AntdThemeProvider` 包装整个应用：

```tsx
// src/App.tsx
import { AntdThemeProvider } from './components/AntdThemeProvider'

function App() {
  return (
    <I18nProvider>
      <ThemeProvider>
        <AntdThemeProvider>  {/* 自动响应主题切换 */}
          <LayoutProvider>
            <Router>
              <div className="App">
                <Navigation />
              </div>
            </Router>
          </LayoutProvider>
        </AntdThemeProvider>
      </ThemeProvider>
    </I18nProvider>
  )
}
```

### 3. 主题提供者实现

```tsx
// src/components/AntdThemeProvider.tsx
import React from 'react';
import { ConfigProvider } from '../components/AntdComponents';
import { darkTheme, lightTheme } from '../components/AntdComponents';
import { useTheme } from '../contexts/ThemeContext';

export const AntdThemeProvider: React.FC<AntdThemeProviderProps> = ({ children }) => {
  const { isDark } = useTheme();

  return (
    <ConfigProvider theme={isDark ? darkTheme : lightTheme}>
      {children}
    </ConfigProvider>
  );
};
```

## 使用方法

### 1. 基本使用

所有 Ant Design 组件都会自动响应主题切换，无需额外配置：

```tsx
import { Button, Card, Input } from '../components/AntdComponents';

const MyComponent = () => {
  return (
    <Card title="我的卡片">
      <Input placeholder="输入内容" />
      <Button type="primary">提交</Button>
    </Card>
  );
};
```

### 2. 主题切换

使用现有的主题切换功能：

```tsx
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();
  
  return (
    <Button onClick={toggleTheme}>
      {isDark ? '切换到亮色模式' : '切换到暗色模式'}
    </Button>
  );
};
```

### 3. 自定义主题

如果需要自定义主题颜色，可以修改 `darkTheme` 和 `lightTheme` 配置：

```tsx
export const darkTheme = {
  token: {
    colorPrimary: '#722ed1', // 自定义主色调
    colorSuccess: '#52c41a',
    colorWarning: '#faad14',
    colorError: '#ff4d4f',
    borderRadius: 8, // 自定义圆角
  },
  algorithm: 'darkAlgorithm',
};
```

## 组件暗黑模式表现

### 基础组件

- **Button**: 自动调整背景色、边框色、文字色
- **Input**: 自动调整背景色、边框色、文字色、占位符色
- **Card**: 自动调整背景色、边框色、阴影效果
- **Typography**: 自动调整文字颜色

### 数据展示组件

- **Table**: 自动调整表头、行背景、边框、文字颜色
- **List**: 自动调整列表项背景、边框、文字颜色
- **Tag**: 保持语义色彩，自动调整对比度
- **Avatar**: 自动调整背景色

### 反馈组件

- **Alert**: 保持语义色彩，自动调整背景和边框
- **Modal**: 自动调整遮罩、内容区域背景
- **Drawer**: 自动调整背景色、边框色
- **Message**: 自动调整背景色、文字色

### 导航组件

- **Menu**: 自动调整背景色、文字色、悬停效果
- **Breadcrumb**: 自动调整文字色、分隔符色
- **Pagination**: 自动调整按钮背景、文字色
- **Steps**: 自动调整步骤条颜色

## 最佳实践

### 1. 避免硬编码颜色

❌ 错误做法：
```tsx
<div style={{ backgroundColor: '#ffffff' }}>
  内容
</div>
```

✅ 正确做法：
```tsx
<div className="bg-white dark:bg-gray-800">
  内容
</div>
```

### 2. 使用语义化颜色

```tsx
// 使用 Ant Design 的语义化颜色
<Tag color="success">成功</Tag>
<Tag color="error">错误</Tag>
<Tag color="warning">警告</Tag>
<Tag color="processing">处理中</Tag>
```

### 3. 测试暗黑模式

确保在暗黑模式下：
- 文字有足够的对比度
- 交互元素清晰可见
- 颜色符合语义
- 没有硬编码的亮色背景

## 演示页面

访问以下页面查看暗黑模式效果：

1. **Ant Design 演示**: `/antd-demo`
   - 展示所有组件在亮色模式下的表现

2. **Ant Design 暗黑模式**: `/antd-dark-mode`
   - 专门展示暗黑模式效果
   - 包含主题切换功能
   - 实时对比亮色和暗色模式

## 主题变量说明

### 主要颜色变量

- `colorPrimary`: 主色调，用于主要按钮、链接等
- `colorSuccess`: 成功色，用于成功状态、确认操作
- `colorWarning`: 警告色，用于警告状态、提醒操作
- `colorError`: 错误色，用于错误状态、危险操作
- `colorInfo`: 信息色，用于信息提示

### 其他变量

- `borderRadius`: 圆角大小
- `wireframe`: 是否使用线框模式（用于调试）

## 注意事项

1. **自动响应**: 所有 Ant Design 组件都会自动响应主题切换
2. **性能优化**: 主题切换是即时的，不会影响性能
3. **一致性**: 确保自定义样式与 Ant Design 主题保持一致
4. **可访问性**: 暗黑模式下的颜色对比度符合可访问性标准
5. **测试**: 在不同设备和浏览器上测试暗黑模式效果

## 故障排除

### 组件没有响应主题切换

1. 确保使用了 `AntdThemeProvider` 包装应用
2. 检查组件是否正确导入
3. 确认主题上下文正常工作

### 颜色不协调

1. 检查是否有硬编码的颜色值
2. 使用 Tailwind CSS 的暗黑模式类
3. 确保自定义样式与主题变量一致

### 性能问题

1. 避免在主题切换时进行大量 DOM 操作
2. 使用 CSS 变量而不是 JavaScript 动态设置样式
3. 合理使用 React 的 memo 优化组件重渲染

现在您的应用已经完全支持 Ant Design 的暗黑模式了！
