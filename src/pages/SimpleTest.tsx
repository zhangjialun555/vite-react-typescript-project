import React from 'react'

const SimpleTest: React.FC = () => {
  return (
    <div className="p-8 bg-blue-500 text-white">
      <h1 className="text-3xl font-bold mb-4">Tailwind CSS 测试</h1>
      <p className="text-lg mb-4">如果您看到蓝色背景和白色文字，说明Tailwind CSS正在工作！</p>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        红色按钮
      </button>
    </div>
  )
}

export default SimpleTest
