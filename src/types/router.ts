import type { ReactElement } from 'react'

export interface RouteConfig {
  path: string;
  element: React.ReactNode;
  name: string;
  translationKey: string;
  children?: RouteConfig[];
}
