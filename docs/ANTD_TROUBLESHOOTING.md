# Ant Design 故障排除指南

## 常见问题及解决方案

### 1. Node.js 版本问题

**错误信息**：
```
You are using Node.js 18.19.0. Vite requires Node.js version 20.19+ or 22.12+.
```

**解决方案**：
```bash
# 升级 Node.js 到 LTS 版本
nvm install --lts
nvm use --lts

# 或者降级 Vite 版本
npm install vite@^4.5.0 --save-dev
```

### 2. Ant Design 主题配置错误

**错误信息**：
```
Uncaught TypeError: derivative4 is not a function
```

**解决方案**：
确保正确导入主题算法：

```tsx
// 正确的方式
import { theme } from 'antd';

const darkTheme = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: '#1890ff',
  },
};
```

### 3. 图标导入错误

**错误信息**：
```
The requested module does not provide an export named 'BulbFilled'
```

**解决方案**：
确保图标已正确导入和导出：

```tsx
// 在 AntdComponents.tsx 中
import { BulbOutlined, BulbFilled } from '@ant-design/icons';

export {
  // ... 其他组件
  BulbOutlined,
  BulbFilled,
};
```

### 4. 组件未响应主题切换

**问题**：Ant Design 组件没有在暗黑模式下改变样式

**解决方案**：
1. 确保使用了 `AntdThemeProvider` 包装应用
2. 检查主题上下文是否正常工作
3. 验证 ConfigProvider 配置正确

```tsx
// App.tsx
import { AntdThemeProvider } from './components/AntdThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <AntdThemeProvider>  {/* 确保这个包装器存在 */}
        {/* 应用内容 */}
      </AntdThemeProvider>
    </ThemeProvider>
  );
}
```

### 5. 样式冲突

**问题**：Ant Design 组件样式与 Tailwind CSS 冲突

**解决方案**：
1. 确保 Tailwind CSS 配置正确
2. 使用 Ant Design 的 className 属性而不是内联样式
3. 避免直接覆盖 Ant Design 的 CSS 变量

### 6. 类型错误

**错误信息**：
```
Type 'X' is not assignable to type 'Y'
```

**解决方案**：
1. 确保正确导入了类型定义
2. 检查组件属性类型是否匹配
3. 使用正确的泛型参数

## 调试步骤

### 1. 检查依赖版本

```bash
npm list antd @ant-design/icons
```

确保版本兼容：
- antd: ^5.x.x
- @ant-design/icons: ^6.x.x

### 2. 检查导入路径

确保所有导入路径正确：

```tsx
// 正确的导入方式
import { Button, Card } from '../components/AntdComponents';
import { UserOutlined } from '../components/AntdComponents';
```

### 3. 验证主题配置

创建一个简单的测试组件：

```tsx
import React from 'react';
import { Button, Card } from '../components/AntdComponents';
import { useTheme } from '../contexts/ThemeContext';

const TestComponent = () => {
  const { isDark } = useTheme();
  
  return (
    <Card title={`当前主题: ${isDark ? '暗黑' : '亮色'}`}>
      <Button type="primary">测试按钮</Button>
    </Card>
  );
};
```

### 4. 检查控制台错误

打开浏览器开发者工具，查看：
- Console 标签页的错误信息
- Network 标签页的资源加载情况
- Elements 标签页的 DOM 结构

## 性能优化

### 1. 按需导入

确保只导入需要的组件：

```tsx
// 好的做法
import { Button, Card } from '../components/AntdComponents';

// 避免的做法
import * as Antd from 'antd';
```

### 2. 避免重复渲染

使用 React.memo 优化组件：

```tsx
const MyComponent = React.memo(() => {
  // 组件内容
});
```

### 3. 合理使用主题切换

避免频繁的主题切换，可以添加防抖：

```tsx
import { debounce } from 'lodash';

const debouncedToggleTheme = debounce(toggleTheme, 300);
```

## 最佳实践

### 1. 组件使用

```tsx
// 推荐：使用统一的导入文件
import { Button, Card, Input } from '../components/AntdComponents';

// 避免：直接从 antd 导入
import { Button } from 'antd';
```

### 2. 主题配置

```tsx
// 推荐：使用简化的主题配置
<ConfigProvider
  theme={{
    algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
    token: {
      colorPrimary: '#1890ff',
      borderRadius: 6,
    },
  }}
>
  {children}
</ConfigProvider>
```

### 3. 错误处理

```tsx
// 添加错误边界
import { ErrorBoundary } from 'react-error-boundary';

<ErrorBoundary fallback={<div>组件加载失败</div>}>
  <AntdComponent />
</ErrorBoundary>
```

## 测试页面

项目提供了多个测试页面来验证功能：

1. **简单测试**: `/antd-simple-test`
   - 基础组件测试
   - 主题切换验证

2. **完整演示**: `/antd-demo`
   - 所有组件展示
   - 功能演示

3. **暗黑模式**: `/antd-dark-mode`
   - 暗黑模式专门测试
   - 主题切换对比

## 获取帮助

如果问题仍然存在：

1. 检查 Ant Design 官方文档
2. 查看 GitHub Issues
3. 在社区论坛寻求帮助
4. 提供详细的错误信息和复现步骤
