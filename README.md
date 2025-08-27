# React + TypeScript + Vite 项目

一个现代化的React项目，集成了TypeScript、Tailwind CSS、React Router等功能。

## ✨ 功能特性

- 🚀 **Vite** - 快速的构建工具
- ⚛️ **React 19** - 现代化的UI库
- 🔷 **TypeScript** - 类型安全的JavaScript
- 🎨 **Tailwind CSS** - 实用优先的CSS框架
- 🌐 **React Router** - 客户端路由
- 🌙 **暗黑模式** - 支持主题切换
- 🌍 **国际化** - 中英文切换支持
- 📱 **响应式设计** - 适配各种设备
- 🧩 **组件化** - 模块化组件结构

## 🛠️ 技术栈

- **前端框架**: React 19
- **开发语言**: TypeScript
- **构建工具**: Vite
- **样式框架**: Tailwind CSS
- **路由管理**: React Router
- **状态管理**: React Context API
- **包管理器**: npm

## 📦 安装和运行

### 安装依赖
```bash
npm install
```

### 开发模式
```bash
npm run dev
```

### 构建生产版本
```bash
npm run build
```

### 预览构建结果
```bash
npm run preview
```

## 📁 项目结构

```
src/
├── components/          # 通用组件
├── contexts/           # React Context
├── pages/              # 页面组件
│   ├── About/          # About页面模块
│   │   ├── components/ # About页面子组件
│   │   └── index.tsx   # About页面主文件
│   └── ...             # 其他页面
├── router/             # 路由配置
├── types/              # TypeScript类型定义
├── utils/              # 工具函数
├── locales/            # 国际化文件
└── index.css           # 全局样式
```

## 🌟 主要功能

### 1. 页面导航
- 首页 (Home)
- 关于我们 (About)
- 联系我们 (Contact)
- 测试页面 (Test)

### 2. 主题切换
- 支持明暗主题切换
- 主题状态持久化

### 3. 国际化
- 支持中英文切换
- 自动检测中文文本
- 一键翻译功能

### 4. 布局切换
- 顶部导航栏
- 左侧边栏
- 响应式设计

## 🎨 组件示例

### About页面模块化结构
```tsx
import { AboutHeader, TechStack, TeamSection, MissionSection } from './About/components';

const About: React.FC = () => {
  return (
    <div className="page-container">
      <div className="content-area">
        <AboutHeader />
        <div className="space-y-8">
          <TechStack />
          <TeamSection />
          <MissionSection />
        </div>
      </div>
    </div>
  );
};
```

## 🔧 开发指南

### 添加新页面
1. 在 `src/pages/` 创建新页面组件
2. 在 `src/router/routes.tsx` 添加路由配置
3. 在 `src/locales/translations.ts` 添加翻译

### 添加新组件
1. 在 `src/components/` 创建组件
2. 使用TypeScript定义Props接口
3. 支持暗黑模式和国际化

### 样式开发
- 使用Tailwind CSS类名
- 支持响应式设计
- 遵循暗黑模式规范

## 📝 脚本命令

```json
{
  "dev": "启动开发服务器",
  "build": "构建生产版本",
  "preview": "预览构建结果",
  "lint": "代码检查",
  "type-check": "类型检查"
}
```

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 👨‍💻 作者

**zhangjialun555**

- GitHub: [@zhangjialun555](https://github.com/zhangjialun555)

## 🙏 致谢

感谢所有为这个项目做出贡献的开发者！
