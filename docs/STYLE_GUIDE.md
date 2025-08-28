# 样式指南 - Style Guide

这个文档详细说明了项目中所有可用的预制样式组件。

## 🎨 按钮样式

### 基础按钮
```tsx
<button className="btn-primary">主要按钮</button>
<button className="btn-secondary">次要按钮</button>
<button className="btn-success">成功按钮</button>
<button className="btn-danger">危险按钮</button>
<button className="btn-warning">警告按钮</button>
<button className="btn-outline">轮廓按钮</button>
```

### 按钮尺寸
```tsx
<button className="btn-primary btn-sm">小按钮</button>
<button className="btn-primary">标准按钮</button>
<button className="btn-primary btn-lg">大按钮</button>
```

### 按钮状态
```tsx
<button className="btn-primary">正常按钮</button>
<button className="btn-disabled">禁用按钮</button>
```

## 📝 表单样式

### 表单容器
```tsx
<div className="form-container">
  {/* 表单内容 */}
</div>
```

### 表单元素
```tsx
<div className="form-group">
  <label className="form-label">用户名</label>
  <input type="text" className="form-input" placeholder="请输入用户名" />
  <p className="form-help">帮助文本</p>
</div>

<div className="form-group">
  <label className="form-label">描述</label>
  <textarea className="form-textarea" rows={3}></textarea>
</div>

<div className="form-group">
  <label className="form-label">选择城市</label>
  <select className="form-select">
    <option>请选择</option>
  </select>
</div>

<div className="form-group">
  <label className="flex items-center">
    <input type="checkbox" className="form-checkbox mr-2" />
    <span>同意协议</span>
  </label>
</div>
```

### 表单状态
```tsx
<input className="form-input form-input-success" /> {/* 成功状态 */}
<input className="form-input form-input-error" /> {/* 错误状态 */}
<p className="form-error">错误消息</p>
<p className="form-help">帮助文本</p>
```

## 🃏 卡片样式

### 基础卡片
```tsx
<div className="card">
  <div className="card-header">
    <h3 className="card-title">卡片标题</h3>
  </div>
  <div className="card-body">
    <p>卡片内容</p>
  </div>
  <div className="card-footer">
    <button className="btn-primary btn-sm">操作</button>
  </div>
</div>
```

### 彩色卡片
```tsx
<div className="card-primary">主要卡片</div>
<div className="card-success">成功卡片</div>
<div className="card-warning">警告卡片</div>
<div className="card-danger">危险卡片</div>
```

### 特殊卡片样式
```tsx
<div className="card card-elevated">高架卡片（更强阴影）</div>
<div className="card card-glass">玻璃卡片（毛玻璃效果）</div>
<div className="card card-gradient">渐变卡片（渐变背景）</div>
```

### 悬停效果
```tsx
<div className="card card-hover">
  {/* 卡片内容 - 悬停时有缩放和阴影效果 */}
</div>
```

## 🧭 导航样式

### 导航栏
```tsx
<nav className="navbar">
  <div className="navbar-container">
    <div className="flex-between">
      <div className="flex items-center space-x-8">
        <h1>应用名称</h1>
        <ul className="flex space-x-6">
          <li><Link className="nav-link" to="/">首页</Link></li>
        </ul>
      </div>
      <button className="nav-button">登录</button>
    </div>
  </div>
</nav>
```

### 导航链接状态
```tsx
<Link className="nav-link" to="/">普通链接</Link>
<Link className="nav-link nav-link-active" to="/">激活链接</Link>
```

## 📐 布局样式

### 页面容器
```tsx
<div className="page-container">
  <div className="content-area">
    {/* 页面内容 */}
  </div>
</div>
```

### 网格布局
```tsx
<div className="grid-responsive">
  {/* 响应式网格布局 */}
</div>
```

### 弹性布局
```tsx
<div className="flex-center">
  {/* 居中对齐 */}
</div>

<div className="flex-between">
  {/* 两端对齐 */}
</div>
```

## 📊 状态样式

```tsx
<div className="status-success">成功状态</div>
<div className="status-error">错误状态</div>
<div className="status-warning">警告状态</div>
<div className="status-info">信息状态</div>
```

## 🎭 动画样式

```tsx
<div className="animate-slide-up">滑入动画</div>
<div className="animate-bounce-in">弹跳动画</div>
<div className="animate-fade-in">淡入动画</div>
```

## 🎯 使用建议

### 1. 组合使用
```tsx
// 好的做法
<div className="page-container">
  <div className="content-area">
    <div className="grid-responsive">
      <div className="card card-hover">
        <div className="card-body">
          <h3 className="card-title">标题</h3>
          <p>内容</p>
          <button className="btn-primary">操作</button>
        </div>
      </div>
    </div>
  </div>
</div>
```

### 2. 响应式设计
- 使用 `grid-responsive` 创建响应式网格
- 使用 `page-container` 确保内容居中
- 使用 `content-area` 提供内容区域样式

### 3. 状态管理
- 使用 `form-input-success` 和 `form-input-error` 显示表单状态
- 使用 `status-*` 类显示操作结果
- 使用 `btn-disabled` 禁用按钮

### 4. 交互反馈
- 使用 `card-hover` 添加悬停效果
- 使用 `nav-link-active` 显示当前页面
- 使用动画类增强用户体验

## 🔧 自定义样式

如果需要自定义样式，可以在 `src/index.css` 中添加：

```css
@layer components {
  .custom-button {
    @apply bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg;
  }
}
```

## 📱 响应式断点

- `sm`: 640px 及以上
- `md`: 768px 及以上
- `lg`: 1024px 及以上
- `xl`: 1280px 及以上
- `2xl`: 1536px 及以上

## 🎨 颜色系统

### 主要颜色
- 蓝色: `blue-*` (主要操作)
- 绿色: `green-*` (成功状态)
- 红色: `red-*` (错误/危险)
- 黄色: `yellow-*` (警告)
- 灰色: `gray-*` (中性)

### 使用示例
```tsx
<div className="bg-blue-500 text-white">蓝色背景</div>
<div className="text-green-600">绿色文字</div>
<div className="border-red-500">红色边框</div>
```
