import React from 'react';

const AlignmentTest: React.FC = () => {
  return (
    <div className="page-container">
      <div className="content-area">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          📐 对齐测试页面
        </h1>
        
        <div className="grid-responsive">
          <div className="card card-hover">
            <div className="card-header">
              <h3 className="card-title">React App对齐测试</h3>
            </div>
            <div className="card-body">
              <p>这个页面用于测试React App标题与导航链接的对齐效果。</p>
              <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h4 className="font-semibold mb-2">当前修复方案：</h4>
                <ul className="space-y-1 text-sm">
                  <li>• 使用相同的nav-link样式类</li>
                  <li>• 统一的内边距和行高</li>
                  <li>• 相同的容器结构</li>
                  <li>• 固定高度容器</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="card card-hover">
            <div className="card-header">
              <h3 className="card-title">对齐效果</h3>
            </div>
            <div className="card-body">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>React App标题与导航链接基线对齐</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>使用相同的nav-link样式类</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span>统一的内边距和行高</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 模拟导航栏 */}
        <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            导航栏对齐模拟
          </h3>
          <div className="flex items-center space-x-6 p-4 bg-white dark:bg-gray-700 rounded-lg">
            <div className="flex-shrink-0">
              <div className="nav-link text-xl font-bold text-gray-900 dark:text-white hover:text-gray-900 dark:hover:text-white">React App</div>
            </div>
            <div className="flex space-x-6">
              <div className="nav-link">首页</div>
              <div className="nav-link">关于</div>
              <div className="nav-link">联系我们</div>
              <div className="nav-link">测试</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
            上面的模拟展示了React App标题与导航链接的对齐效果。
          </p>
        </div>
      </div>
    </div>
  );
};

export default AlignmentTest;

