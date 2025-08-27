import React from 'react';
import { useLayout } from '../contexts/LayoutContext';

const LayoutToggle: React.FC = () => {
  const { navbarPosition, toggleNavbarPosition } = useLayout();

  return (
    <button
      onClick={toggleNavbarPosition}
      className="relative inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      title={navbarPosition === 'top' ? '切换到侧边栏布局' : '切换到顶部导航布局'}
    >
      {/* 顶部导航图标 */}
      <svg
        className={`w-5 h-5 text-gray-600 dark:text-gray-300 transition-all duration-200 ${
          navbarPosition === 'top' ? 'opacity-100' : 'opacity-50'
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
      </svg>

      {/* 侧边栏图标 */}
      <svg
        className={`w-5 h-5 text-gray-600 dark:text-gray-300 absolute transition-all duration-200 ${
          navbarPosition === 'left' ? 'opacity-100' : 'opacity-50'
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2zM3 16a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z" />
      </svg>
    </button>
  );
};

export default LayoutToggle;

