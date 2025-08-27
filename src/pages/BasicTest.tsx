import React from 'react'

const BasicTest: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Tailwind CSS 测试页面</h1>
      <div className="bg-red-500 text-white p-4 m-4 rounded">
        这个div应该有红色背景和白色文字
      </div>
      <div className="bg-blue-500 text-white p-4 m-4 rounded">
        这个div应该有蓝色背景和白色文字
      </div>
      <button className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded transition-colors">
        绿色按钮
      </button>
    </div>
  )
}

export default BasicTest
