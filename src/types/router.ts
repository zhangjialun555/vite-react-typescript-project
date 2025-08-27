import type { ReactElement } from 'react'

export interface RouteConfig {
  path: string
  element: ReactElement
  name: string
  translationKey?: string
  children?: RouteConfig[]
}
