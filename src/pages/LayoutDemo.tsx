import React from 'react';
import { useLayout } from '../contexts/LayoutContext';
import { useI18n } from '../contexts/I18nContext';

const LayoutDemo: React.FC = () => {
  const { navbarPosition, toggleNavbarPosition } = useLayout();
  const { t } = useI18n();

  return (
    <div className="page-container">
      <div className="content-area">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          🎨 布局切换演示
        </h1>
        
        <div className="grid-responsive">
          {/* 布局信息 */}
          <div className="card card-hover">
            <div className="card-header">
              <h3 className="card-title">当前布局</h3>
            </div>
            <div className="card-body">
              <p className="mb-4">
                当前导航栏位置: <span className="font-bold text-blue-600 dark:text-blue-400">
                  {navbarPosition === 'top' ? '顶部导航' : '左侧边栏'}
                </span>
              </p>
              <button 
                onClick={toggleNavbarPosition}
                className="btn-primary"
              >
                切换到{navbarPosition === 'top' ? '侧边栏' : '顶部'}布局
              </button>
            </div>
          </div>

          {/* 布局特点 */}
          <div className="card card-hover">
            <div className="card-header">
              <h3 className="card-title">布局特点</h3>
            </div>
            <div className="card-body">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>顶部导航：吸顶效果，节省垂直空间</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>左侧边栏：更多导航空间，适合复杂应用</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span>支持暗黑模式切换</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  <span>支持中英文切换</span>
                </div>
              </div>
            </div>
          </div>

          {/* 使用说明 */}
          <div className="card card-hover">
            <div className="card-header">
              <h3 className="card-title">使用说明</h3>
            </div>
            <div className="card-body">
              <div className="space-y-2 text-sm">
                <p><strong>1.</strong> 点击导航栏中的布局切换按钮</p>
                <p><strong>2.</strong> 在顶部导航模式下，导航栏会吸顶显示</p>
                <p><strong>3.</strong> 在侧边栏模式下，导航栏固定在左侧</p>
                <p><strong>4.</strong> 布局切换按钮位于导航栏右侧</p>
              </div>
            </div>
          </div>
        </div>

        {/* 滚动测试区域 */}
        <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            滚动测试区域
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            在顶部导航模式下，向下滚动页面可以看到导航栏的吸顶效果。
          </p>
          <div className="space-y-4">
            {Array.from({ length: 10 }, (_, i) => (
              <div key={i} className="p-4 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                  测试区块 {i + 1}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  这是一个测试区块，用于演示滚动效果和吸顶导航栏的功能。
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 响应式说明 */}
        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
          <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">
            💡 提示
          </h3>
          <p className="text-blue-700 dark:text-blue-300">
            布局切换功能完全响应式，在不同屏幕尺寸下都能正常工作。
            在移动设备上，侧边栏布局会自动适配为更适合触摸操作的样式。
          </p>
        </div>
      </div>
    </div>
  );
};

export default LayoutDemo;

