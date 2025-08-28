# 部署指南

## GitHub Pages 部署

本项目已配置为自动部署到 GitHub Pages。

### 自动部署（推荐）

1. **推送代码到 main 分支**
   ```bash
   git add .
   git commit -m "feat: 准备部署"
   git push origin main
   ```

2. **GitHub Actions 自动构建**
   - 每次推送到 main 分支时，GitHub Actions 会自动运行
   - 构建过程包括：安装依赖、构建项目、部署到 GitHub Pages

3. **访问网站**
   - 部署完成后，网站将在以下地址可用：
   - `https://zhangjialun555.github.io/vite-react-typescript-project/`

### 手动部署

如果需要手动部署，可以按以下步骤操作：

1. **构建项目**
   ```bash
   npm run build
   ```

2. **启用 GitHub Pages**
   - 进入 GitHub 仓库设置
   - 找到 "Pages" 选项
   - 选择 "Deploy from a branch"
   - 选择 "gh-pages" 分支
   - 保存设置

### 本地测试

在部署前，可以在本地测试构建结果：

```bash
# 构建项目
npm run build

# 预览构建结果
npm run preview
```

### 注意事项

1. **路由配置**
   - 项目已配置为支持 GitHub Pages 的路径前缀
   - 所有路由都会自动添加 `/vite-react-typescript-project/` 前缀

2. **404 处理**
   - 已添加 404.html 文件处理 SPA 路由
   - 确保直接访问子路由时能正常工作

3. **环境变量**
   - 生产环境会自动使用正确的 base 路径
   - 本地开发环境使用根路径

### 故障排除

1. **构建失败**
   - 检查 GitHub Actions 日志
   - 确保所有依赖都已正确安装
   - 验证 TypeScript 类型检查

2. **页面无法访问**
   - 确认 GitHub Pages 已启用
   - 检查仓库设置中的 Pages 配置
   - 等待几分钟让部署生效

3. **路由问题**
   - 确保 404.html 文件存在
   - 检查 index.html 中的路由处理脚本
   - 验证 vite.config.ts 中的 base 配置

### 更新部署

每次推送到 main 分支时，都会自动触发新的部署。无需手动操作。
