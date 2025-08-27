import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { routes } from './routes'

// 路由组件
const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={route.element}
        />
      ))}
    </Routes>
  )
}

export default AppRoutes
