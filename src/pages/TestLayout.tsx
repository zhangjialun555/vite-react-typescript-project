import React from 'react';

const TestLayout: React.FC = () => {
  return (
    <div className="page-container">
      <div className="content-area">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          🧪 布局测试页面
        </h1>
        
        <div className="grid-responsive">
          <div className="card card-hover">
            <div className="card-header">
              <h3 className="card-title">导航布局测试</h3>
            </div>
            <div className="card-body">
              <p>这个页面用于测试导航栏的布局和滚动功能。</p>
              <ul className="mt-4 space-y-2">
                <li>✅ 顶部导航：水平滚动 + 箭头提示</li>
                <li>✅ 左侧边栏：垂直滚动</li>
                <li>✅ 布局切换：顶部 ↔ 左侧</li>
                <li>✅ 响应式设计：适配不同屏幕</li>
              </ul>
            </div>
          </div>
          
          <div className="card card-hover">
            <div className="card-header">
              <h3 className="card-title">功能说明</h3>
            </div>
            <div className="card-body">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>点击左右箭头可以滚动导航</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>React App 标题与导航链接对齐</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span>控制按钮有足够间距</span>
                </div>
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
            {Array.from({ length: 5 }, (_, i) => (
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
      </div>
    </div>
  );
};

export default TestLayout;

