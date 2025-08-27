import React from 'react'

const Contact: React.FC = () => {
  return (
    <div className="page-container">
      <div className="content-area">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">联系我们</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">如果您有任何问题，请通过以下方式联系我们：</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg text-center border border-blue-200 dark:border-blue-700">
            <div className="text-3xl mb-3">📧</div>
            <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">邮箱</h3>
            <p className="text-blue-700 dark:text-blue-300">example@email.com</p>
          </div>
          
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg text-center border border-green-200 dark:border-green-700">
            <div className="text-3xl mb-3">📞</div>
            <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-2">电话</h3>
            <p className="text-green-700 dark:text-green-300">123-456-7890</p>
          </div>
          
          <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg text-center border border-purple-200 dark:border-purple-700">
            <div className="text-3xl mb-3">📍</div>
            <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-200 mb-2">地址</h3>
            <p className="text-purple-700 dark:text-purple-300">某某市某某区</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
