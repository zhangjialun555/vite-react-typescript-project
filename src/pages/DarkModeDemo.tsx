import React from 'react'
import { useTheme } from '../contexts/ThemeContext'
import { useAutoTranslation } from '../utils/autoI18n'
import AutoTranslatedText from '../components/AutoTranslatedText'

const DarkModeDemo: React.FC = () => {
  const { isDark, toggleTheme } = useTheme()
  const { translate } = useAutoTranslation();

  return (
    <div className="page-container">
      <div className="content-area">
        <div className="flex-between mb-6">
          <h1>
            <AutoTranslatedText>暗色模式演示</AutoTranslatedText>
          </h1>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {translate(`当前模式: ${isDark ? '暗色' : '亮色'}`)}
            </span>
            <button
              onClick={toggleTheme}
              className="btn-primary"
            >
              <AutoTranslatedText>切换主题</AutoTranslatedText>
            </button>
          </div>
        </div>

        <p>
          <AutoTranslatedText>这个页面展示了暗色模式下的各种组件样式。</AutoTranslatedText>
        </p>

        {/* 卡片展示 */}
        <section className="mb-8">
          <h2>
            <AutoTranslatedText>卡片组件</AutoTranslatedText>
          </h2>
          <div className="grid-responsive">
            <div className="card card-hover">
              <div className="card-header">
                <h3 className="card-title">
                  <AutoTranslatedText>基础卡片</AutoTranslatedText>
                </h3>
              </div>
              <div className="card-body">
                <p>
                  <AutoTranslatedText>这个卡片在暗色模式下会自动调整颜色，带有悬停效果。</AutoTranslatedText>
                </p>
              </div>
              <div className="card-footer">
                <button className="btn-primary btn-sm">
                  <AutoTranslatedText>操作</AutoTranslatedText>
                </button>
              </div>
            </div>

            <div className="card-primary">
              <div className="card-body">
                <h3 className="card-title">
                  <AutoTranslatedText>主要卡片</AutoTranslatedText>
                </h3>
                <p>
                  <AutoTranslatedText>带有蓝色主题的卡片，暗色模式下更加和谐。</AutoTranslatedText>
                </p>
              </div>
            </div>

            <div className="card-success">
              <div className="card-body">
                <h3 className="card-title">
                  <AutoTranslatedText>成功卡片</AutoTranslatedText>
                </h3>
                <p>
                  <AutoTranslatedText>带有绿色主题的卡片，暗色模式下更加和谐。</AutoTranslatedText>
                </p>
              </div>
            </div>

            <div className="card card-elevated">
              <div className="card-header">
                <h3 className="card-title">
                  <AutoTranslatedText>高架卡片</AutoTranslatedText>
                </h3>
              </div>
              <div className="card-body">
                <p>
                  <AutoTranslatedText>带有更强阴影效果的卡片。</AutoTranslatedText>
                </p>
              </div>
            </div>

            <div className="card card-glass">
              <div className="card-header">
                <h3 className="card-title">
                  <AutoTranslatedText>玻璃卡片</AutoTranslatedText>
                </h3>
              </div>
              <div className="card-body">
                <p>
                  <AutoTranslatedText>带有毛玻璃效果的卡片。</AutoTranslatedText>
                </p>
              </div>
            </div>

            <div className="card card-gradient">
              <div className="card-header">
                <h3 className="card-title">
                  <AutoTranslatedText>渐变卡片</AutoTranslatedText>
                </h3>
              </div>
              <div className="card-body">
                <p>
                  <AutoTranslatedText>带有渐变背景的卡片。</AutoTranslatedText>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 表单展示 */}
        <section className="mb-8">
          <h2>
            <AutoTranslatedText>表单组件</AutoTranslatedText>
          </h2>
          <div className="form-container">
            <div className="form-group">
              <label className="form-label">
                <AutoTranslatedText>用户名</AutoTranslatedText>
              </label>
              <input type="text" className="form-input" placeholder={translate('请输入用户名')} />
              <p className="form-help">
                <AutoTranslatedText>用户名长度在3-20个字符之间</AutoTranslatedText>
              </p>
            </div>

            <div className="form-group">
              <label className="form-label">
                <AutoTranslatedText>邮箱</AutoTranslatedText>
              </label>
              <input type="email" className="form-input" placeholder={translate('请输入邮箱')} />
              <p className="form-help">
                <AutoTranslatedText>请输入有效的邮箱地址</AutoTranslatedText>
              </p>
            </div>

            <div className="form-group">
              <label className="form-label">
                <AutoTranslatedText>描述</AutoTranslatedText>
              </label>
              <textarea className="form-textarea" rows={3} placeholder={translate('请输入描述')}></textarea>
            </div>

            <div className="form-group">
              <label className="form-label">
                <AutoTranslatedText>选择城市</AutoTranslatedText>
              </label>
              <select className="form-select">
                <option value="">
                  {translate('请选择城市')}
                </option>
                <option value="beijing">
                  {translate('北京')}
                </option>
                <option value="shanghai">
                  {translate('上海')}
                </option>
                <option value="guangzhou">
                  {translate('广州')}
                </option>
                <option value="shenzhen">
                  {translate('深圳')}
                </option>
              </select>
            </div>

            <div className="flex space-x-4">
              <button className="btn-primary">
                <AutoTranslatedText>提交</AutoTranslatedText>
              </button>
              <button className="btn-secondary">
                <AutoTranslatedText>取消</AutoTranslatedText>
              </button>
            </div>
          </div>
        </section>

        {/* 按钮展示 */}
        <section className="mb-8">
          <h2>
            <AutoTranslatedText>按钮组件</AutoTranslatedText>
          </h2>
          <div className="grid-responsive">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">
                  <AutoTranslatedText>按钮样式</AutoTranslatedText>
                </h3>
              </div>
              <div className="card-body space-y-2">
                <button className="btn-primary">
                  <AutoTranslatedText>主要按钮</AutoTranslatedText>
                </button>
                <button className="btn-secondary">
                  <AutoTranslatedText>次要按钮</AutoTranslatedText>
                </button>
                <button className="btn-success">
                  <AutoTranslatedText>成功按钮</AutoTranslatedText>
                </button>
                <button className="btn-danger">
                  <AutoTranslatedText>危险按钮</AutoTranslatedText>
                </button>
                <button className="btn-warning">
                  <AutoTranslatedText>警告按钮</AutoTranslatedText>
                </button>
                <button className="btn-outline">
                  <AutoTranslatedText>轮廓按钮</AutoTranslatedText>
                </button>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <h3 className="card-title">
                  <AutoTranslatedText>按钮尺寸</AutoTranslatedText>
                </h3>
              </div>
              <div className="card-body space-y-2">
                <button className="btn-primary btn-sm">
                  <AutoTranslatedText>小按钮</AutoTranslatedText>
                </button>
                <button className="btn-primary">
                  <AutoTranslatedText>标准按钮</AutoTranslatedText>
                </button>
                <button className="btn-primary btn-lg">
                  <AutoTranslatedText>大按钮</AutoTranslatedText>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 状态展示 */}
        <section className="mb-8">
          <h2>
            <AutoTranslatedText>状态组件</AutoTranslatedText>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            <AutoTranslatedText>状态组件在暗色模式下颜色更加柔和，不会过于刺眼。</AutoTranslatedText>
          </p>
          <div className="grid-responsive">
            <div className="status-success">
              <strong>
                <AutoTranslatedText>成功：</AutoTranslatedText>
              </strong>
              <AutoTranslatedText>操作已完成</AutoTranslatedText>
            </div>
            <div className="status-error">
              <strong>
                <AutoTranslatedText>错误：</AutoTranslatedText>
              </strong>
              <AutoTranslatedText>操作失败</AutoTranslatedText>
            </div>
            <div className="status-warning">
              <strong>
                <AutoTranslatedText>警告：</AutoTranslatedText>
              </strong>
              <AutoTranslatedText>请注意</AutoTranslatedText>
            </div>
            <div className="status-info">
              <strong>
                <AutoTranslatedText>信息：</AutoTranslatedText>
              </strong>
              <AutoTranslatedText>提示信息</AutoTranslatedText>
            </div>
          </div>
        </section>

        {/* 颜色对比 */}
        <section className="mb-8">
          <h2>
            <AutoTranslatedText>颜色对比</AutoTranslatedText>
          </h2>
          <div className="grid-responsive">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold mb-2">
                <AutoTranslatedText>背景色对比</AutoTranslatedText>
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <AutoTranslatedText>这个区域展示了亮色和暗色模式下的背景色差异。</AutoTranslatedText>
              </p>
            </div>

            <div className="p-6 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">
                <AutoTranslatedText>次要背景</AutoTranslatedText>
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <AutoTranslatedText>次要背景色在暗色模式下会自动调整。</AutoTranslatedText>
              </p>
            </div>

            <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-lg font-semibold mb-2 text-blue-800 dark:text-blue-200">
                <AutoTranslatedText>主题色</AutoTranslatedText>
              </h3>
              <p className="text-blue-700 dark:text-blue-300">
                <AutoTranslatedText>主题色在暗色模式下会保持一致性。</AutoTranslatedText>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default DarkModeDemo
