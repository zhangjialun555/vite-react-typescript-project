import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { routes } from './routes'
import type { RouteConfig } from '../types/router'

// 递归渲染路由组件
const renderRoutes = (routes: RouteConfig[]) => {
  return routes.map((route) => (
    <Route
      key={route.path}
      path={route.path}
      element={route.element}
    >
      {route.children && renderRoutes(route.children)}
    </Route>
  ))
}

// 路由组件
const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {renderRoutes(routes)}
    </Routes>
  )
}

export default AppRoutes
