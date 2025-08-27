import React, { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { routes } from '../router/routes'
import { useI18n } from '../contexts/I18nContext'
import { useLayout } from '../contexts/LayoutContext'
import ThemeToggle from './ThemeToggle'
import LanguageToggle from './LanguageToggle'
import LayoutToggle from './LayoutToggle'
import AppRoutes from '../router'

const Navigation: React.FC = () => {
  const location = useLocation()
  const { t } = useI18n()
  const { navbarPosition } = useLayout()
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(false)

  // 检查滚动状态
  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setShowLeftArrow(scrollLeft > 0)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1)
    }
  }

  // 滚动到指定方向
  const scrollTo = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200
      const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount)
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      })
    }
  }

  useEffect(() => {
    checkScroll()
    const handleResize = () => checkScroll()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // 顶部导航布局
  if (navbarPosition === 'top') {
    return (
      <>
        <nav className="navbar sticky">
          <div className="navbar-container">
            <div className="flex items-center justify-between h-14">
              {/* 左侧区域：Logo和导航链接 */}
              <div className="flex items-center space-x-6 flex-1 min-w-0">
                {/* React App标题 - 使用与导航链接相同的样式 */}
                <div className="flex-shrink-0">
                  <div className="nav-link text-xl font-bold text-gray-900 dark:text-white hover:text-gray-900 dark:hover:text-white">React App</div>
                </div>
                
                {/* 导航链接区域 */}
                <div className="flex-1 min-w-0 relative">
                  {/* 左滚动箭头 */}
                  {showLeftArrow && (
                    <button
                      onClick={() => scrollTo('left')}
                      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                    >
                      <svg className="w-4 h-4 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                  )}
                  
                  {/* 右滚动箭头 */}
                  {showRightArrow && (
                    <button
                      onClick={() => scrollTo('right')}
                      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                    >
                      <svg className="w-4 h-4 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  )}
                  
                  <div 
                    ref={scrollContainerRef}
                    className="overflow-x-auto scrollbar-hide px-2"
                    onScroll={checkScroll}
                  >
                    <ul className="flex space-x-6 m-0 p-0 list-none min-w-max">
                      {routes.map((route) => (
                        <li key={route.path} className="flex-shrink-0">
                          <Link 
                            to={route.path}
                            className={`nav-link whitespace-nowrap ${location.pathname === route.path ? 'nav-link-active' : ''}`}
                          >
                            {t(route.translationKey || route.name)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* 右侧区域：控制按钮 */}
              <div className="flex items-center space-x-3 flex-shrink-0 ml-4">
                <LayoutToggle />
                <ThemeToggle />
                <LanguageToggle />
                <button className="nav-button">{t('common.login')}</button>
              </div>
            </div>
          </div>
        </nav>
        <main className="min-h-screen">
          <AppRoutes />
        </main>
      </>
    )
  }

  // 左侧导航布局
  return (
    <div className="flex h-screen">
      <nav className="w-64 bg-white dark:bg-gray-800 shadow-lg border-r border-gray-200 dark:border-gray-700 flex flex-col flex-shrink-0">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-6">React App</h1>
          <div className="flex items-center space-x-2 mb-4">
            <LayoutToggle />
            <ThemeToggle />
            <LanguageToggle />
          </div>
        </div>
        
        <div className="flex-1 p-4 overflow-y-auto scrollbar-thin">
          <ul className="space-y-2">
            {routes.map((route) => (
              <li key={route.path}>
                <Link 
                  to={route.path}
                  className={`block px-4 py-3 rounded-lg transition-colors duration-200 ${
                    location.pathname === route.path 
                      ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' 
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {t(route.translationKey || route.name)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <button className="w-full nav-button">{t('common.login')}</button>
        </div>
      </nav>
      
      <main className="flex-1 overflow-auto scrollbar-thin">
        <div className="p-6">
          <AppRoutes />
        </div>
      </main>
    </div>
  )
}

export default Navigation
