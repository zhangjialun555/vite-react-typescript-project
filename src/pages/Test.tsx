import React from 'react'

const Test: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl dark:shadow-gray-900/40 p-8 border border-gray-200 dark:border-gray-700">
          <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-8">
            Tailwind CSS 测试页面
          </h1>
          
          {/* 颜色测试 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-red-500 dark:bg-red-600 h-20 rounded-lg flex items-center justify-center text-white font-bold">
              Red
            </div>
            <div className="bg-green-500 dark:bg-green-600 h-20 rounded-lg flex items-center justify-center text-white font-bold">
              Green
            </div>
            <div className="bg-blue-500 dark:bg-blue-600 h-20 rounded-lg flex items-center justify-center text-white font-bold">
              Blue
            </div>
            <div className="bg-yellow-500 dark:bg-yellow-600 h-20 rounded-lg flex items-center justify-center text-white font-bold">
              Yellow
            </div>
          </div>
          
          {/* 间距和布局测试 */}
          <div className="space-y-4 mb-8">
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">间距测试</h3>
              <p className="text-gray-600 dark:text-gray-300">这个div使用了 p-4 内边距和 rounded-lg 圆角</p>
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500 dark:border-blue-400">
              <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-200 mb-2">边框测试</h3>
              <p className="text-blue-600 dark:text-blue-300">这个div使用了左边框和蓝色主题</p>
            </div>
          </div>
          
          {/* 按钮测试 */}
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="btn-primary">
              主要按钮
            </button>
            <button className="btn-secondary">
              次要按钮
            </button>
            <button className="bg-purple-500 hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-800 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
              紫色按钮
            </button>
          </div>
          
          {/* 响应式测试 */}
          <div className="mt-8 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
            <h3 className="text-lg font-semibold text-green-700 dark:text-green-200 mb-2">响应式测试</h3>
            <p className="text-green-600 dark:text-green-300">
              在移动设备上，这个文本较小；在桌面设备上，文本会变大。
            </p>
            <div className="mt-4 text-sm text-green-500 dark:text-green-400">
              <p className="block md:hidden">这是移动设备视图</p>
              <p className="hidden md:block">这是桌面设备视图</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Test
