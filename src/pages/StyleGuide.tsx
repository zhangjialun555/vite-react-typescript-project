import React from 'react'

const StyleGuide: React.FC = () => {
  return (
    <div className="page-container">
      <div className="content-area">
        <h1>样式指南 - Style Guide</h1>
        <p>这个页面展示了所有可用的预制样式组件。</p>

        {/* 按钮样式展示 */}
        <section className="mb-8">
          <h2>按钮样式</h2>
          <div className="grid-responsive">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">基础按钮</h3>
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

            <div className="card">
              <div className="card-header">
                <h3 className="card-title">按钮状态</h3>
              </div>
              <div className="card-body space-y-2">
                <button className="btn-primary">正常按钮</button>
                <button className="btn-disabled">禁用按钮</button>
              </div>
            </div>
          </div>
        </section>

        {/* 表单样式展示 */}
        <section className="mb-8">
          <h2>表单样式</h2>
          <div className="form-container">
            <div className="form-group">
              <label className="form-label">用户名</label>
              <input type="text" className="form-input" placeholder="请输入用户名" />
              <p className="form-help">用户名长度在3-20个字符之间</p>
            </div>

            <div className="form-group">
              <label className="form-label">邮箱</label>
              <input type="email" className="form-input form-input-success" placeholder="请输入邮箱" />
              <p className="form-help">请输入有效的邮箱地址</p>
            </div>

            <div className="form-group">
              <label className="form-label">密码</label>
              <input type="password" className="form-input form-input-error" placeholder="请输入密码" />
              <p className="form-error">密码长度至少8位</p>
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

            <div className="form-group">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox mr-2" />
                <span className="form-label mb-0">同意用户协议</span>
              </label>
            </div>

            <div className="form-group">
              <label className="flex items-center">
                <input type="radio" name="gender" className="form-radio mr-2" />
                <span className="form-label mb-0">男</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="gender" className="form-radio mr-2" />
                <span className="form-label mb-0">女</span>
              </label>
            </div>

            <div className="flex space-x-4">
              <button className="btn-primary">提交</button>
              <button className="btn-secondary">取消</button>
            </div>
          </div>
        </section>

        {/* 卡片样式展示 */}
        <section className="mb-8">
          <h2>卡片样式</h2>
          <div className="grid-responsive">
            <div className="card card-hover">
              <div className="card-header">
                <h3 className="card-title">基础卡片</h3>
              </div>
              <div className="card-body">
                <p>这是一个基础卡片，包含头部、内容和底部。</p>
              </div>
              <div className="card-footer">
                <button className="btn-primary btn-sm">操作</button>
              </div>
            </div>

            <div className="card-primary">
              <div className="card-body">
                <h3 className="card-title">主要卡片</h3>
                <p>带有蓝色主题的卡片。</p>
              </div>
            </div>

            <div className="card-success">
              <div className="card-body">
                <h3 className="card-title">成功卡片</h3>
                <p>带有绿色主题的卡片。</p>
              </div>
            </div>

            <div className="card-warning">
              <div className="card-body">
                <h3 className="card-title">警告卡片</h3>
                <p>带有黄色主题的卡片。</p>
              </div>
            </div>

            <div className="card-danger">
              <div className="card-body">
                <h3 className="card-title">危险卡片</h3>
                <p>带有红色主题的卡片。</p>
              </div>
            </div>
          </div>
        </section>

        {/* 状态样式展示 */}
        <section className="mb-8">
          <h2>状态样式</h2>
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

        {/* 布局样式展示 */}
        <section className="mb-8">
          <h2>布局样式</h2>
          <div className="grid-responsive">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">网格布局</h3>
                <p>使用 grid-responsive 类创建响应式网格布局。</p>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h3 className="card-title">弹性布局</h3>
                <div className="flex-center">
                  <span>居中对齐</span>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h3 className="card-title">两端对齐</h3>
                <div className="flex-between">
                  <span>左侧</span>
                  <span>右侧</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 动画样式展示 */}
        <section className="mb-8">
          <h2>动画样式</h2>
          <div className="grid-responsive">
            <div className="card animate-slide-up">
              <div className="card-body">
                <h3 className="card-title">滑入动画</h3>
                <p>使用 animate-slide-up 类。</p>
              </div>
            </div>

            <div className="card animate-bounce-in">
              <div className="card-body">
                <h3 className="card-title">弹跳动画</h3>
                <p>使用 animate-bounce-in 类。</p>
              </div>
            </div>

            <div className="card animate-fade-in">
              <div className="card-body">
                <h3 className="card-title">淡入动画</h3>
                <p>使用 animate-fade-in 类。</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default StyleGuide
