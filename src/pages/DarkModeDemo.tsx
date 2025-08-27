import React from 'react'
import { useTheme } from '../contexts/ThemeContext'

const DarkModeDemo: React.FC = () => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <div className="page-container">
      <div className="content-area">
        <div className="flex-between mb-6">
          <h1>暗色模式演示</h1>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              当前模式: {isDark ? '暗色' : '亮色'}
            </span>
            <button
              onClick={toggleTheme}
              className="btn-primary"
            >
              切换主题
            </button>
          </div>
        </div>

        <p>这个页面展示了暗色模式下的各种组件样式。</p>

        {/* 卡片展示 */}
        <section className="mb-8">
          <h2>卡片组件</h2>
          <div className="grid-responsive">
            <div className="card card-hover">
              <div className="card-header">
                <h3 className="card-title">基础卡片</h3>
              </div>
              <div className="card-body">
                <p>这个卡片在暗色模式下会自动调整颜色，带有悬停效果。</p>
              </div>
              <div className="card-footer">
                <button className="btn-primary btn-sm">操作</button>
              </div>
            </div>

            <div className="card-primary">
              <div className="card-body">
                <h3 className="card-title">主要卡片</h3>
                <p>带有蓝色主题的卡片，暗色模式下更加和谐。</p>
              </div>
            </div>

            <div className="card-success">
              <div className="card-body">
                <h3 className="card-title">成功卡片</h3>
                <p>带有绿色主题的卡片，暗色模式下更加和谐。</p>
              </div>
            </div>

            <div className="card card-elevated">
              <div className="card-header">
                <h3 className="card-title">高架卡片</h3>
              </div>
              <div className="card-body">
                <p>带有更强阴影效果的卡片。</p>
              </div>
            </div>

            <div className="card card-glass">
              <div className="card-header">
                <h3 className="card-title">玻璃卡片</h3>
              </div>
              <div className="card-body">
                <p>带有毛玻璃效果的卡片。</p>
              </div>
            </div>

            <div className="card card-gradient">
              <div className="card-header">
                <h3 className="card-title">渐变卡片</h3>
              </div>
              <div className="card-body">
                <p>带有渐变背景的卡片。</p>
              </div>
            </div>
          </div>
        </section>

        {/* 表单展示 */}
        <section className="mb-8">
          <h2>表单组件</h2>
          <div className="form-container">
            <div className="form-group">
              <label className="form-label">用户名</label>
              <input type="text" className="form-input" placeholder="请输入用户名" />
              <p className="form-help">用户名长度在3-20个字符之间</p>
            </div>

            <div className="form-group">
              <label className="form-label">邮箱</label>
              <input type="email" className="form-input" placeholder="请输入邮箱" />
              <p className="form-help">请输入有效的邮箱地址</p>
            </div>

            <div className="form-group">
              <label className="form-label">描述</label>
              <textarea className="form-textarea" rows={3} placeholder="请输入描述"></textarea>
            </div>

            <div className="form-group">
              <label className="form-label">选择城市</label>
              <select className="form-select">
                <option>请选择城市</option>
                <option>北京</option>
                <option>上海</option>
                <option>广州</option>
                <option>深圳</option>
              </select>
            </div>

            <div className="flex space-x-4">
              <button className="btn-primary">提交</button>
              <button className="btn-secondary">取消</button>
            </div>
          </div>
        </section>

        {/* 按钮展示 */}
        <section className="mb-8">
          <h2>按钮组件</h2>
          <div className="grid-responsive">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">按钮样式</h3>
              </div>
              <div className="card-body space-y-2">
                <button className="btn-primary">主要按钮</button>
                <button className="btn-secondary">次要按钮</button>
                <button className="btn-success">成功按钮</button>
                <button className="btn-danger">危险按钮</button>
                <button className="btn-warning">警告按钮</button>
                <button className="btn-outline">轮廓按钮</button>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <h3 className="card-title">按钮尺寸</h3>
              </div>
              <div className="card-body space-y-2">
                <button className="btn-primary btn-sm">小按钮</button>
                <button className="btn-primary">标准按钮</button>
                <button className="btn-primary btn-lg">大按钮</button>
              </div>
            </div>
          </div>
        </section>

        {/* 状态展示 */}
        <section className="mb-8">
          <h2>状态组件</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">状态组件在暗色模式下颜色更加柔和，不会过于刺眼。</p>
          <div className="grid-responsive">
            <div className="status-success">
              <strong>成功：</strong>操作已完成
            </div>
            <div className="status-error">
              <strong>错误：</strong>操作失败
            </div>
            <div className="status-warning">
              <strong>警告：</strong>请注意
            </div>
            <div className="status-info">
              <strong>信息：</strong>提示信息
            </div>
          </div>
        </section>

        {/* 颜色对比 */}
        <section className="mb-8">
          <h2>颜色对比</h2>
          <div className="grid-responsive">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold mb-2">背景色对比</h3>
              <p className="text-gray-700 dark:text-gray-300">
                这个区域展示了亮色和暗色模式下的背景色差异。
              </p>
            </div>

            <div className="p-6 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">次要背景</h3>
              <p className="text-gray-700 dark:text-gray-300">
                次要背景色在暗色模式下会自动调整。
              </p>
            </div>

            <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-lg font-semibold mb-2 text-blue-800 dark:text-blue-200">主题色</h3>
              <p className="text-blue-700 dark:text-blue-300">
                主题色在暗色模式下会保持一致性。
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default DarkModeDemo
