import type { RouteConfig } from '../types/router'

// 根据路径查找路由配置
export const findRouteByPath = (path: string, routes: RouteConfig[]): RouteConfig | undefined => {
  return routes.find(route => route.path === path)
}

// 获取所有路由路径
export const getAllPaths = (routes: RouteConfig[]): string[] => {
  return routes.map(route => route.path)
}

// 检查路径是否存在
export const isPathValid = (path: string, routes: RouteConfig[]): boolean => {
  return routes.some(route => route.path === path)
}
