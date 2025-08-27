
import type { RouteConfig } from '../types/router'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Test from '../pages/Test'
import StyleGuide from '../pages/StyleGuide'
import DarkModeDemo from '../pages/DarkModeDemo'
import I18nDemo from '../pages/I18nDemo'
import AutoI18nDemo from '../pages/AutoI18nDemo'
import LayoutDemo from '../pages/LayoutDemo'
import TestLayout from '../pages/TestLayout'
import AlignmentTest from '../pages/AlignmentTest'

// 路由配置数组
export const routes: RouteConfig[] = [
  {
    path: '/',
    element: <Home />,
    name: '首页',
    translationKey: 'nav.home'
  },
  {
    path: '/about',
    element: <About />,
    name: '关于',
    translationKey: 'nav.about'
  },
  {
    path: '/contact',
    element: <Contact />,
    name: '联系我们',
    translationKey: 'nav.contact'
  },
  {
    path: '/test',
    element: <Test />,
    name: '测试',
    translationKey: 'nav.test'
  },
  {
    path: '/styleguide',
    element: <StyleGuide />,
    name: '样式指南',
    translationKey: 'nav.styleGuide'
  },
  {
    path: '/darkmode',
    element: <DarkModeDemo />,
    name: '暗黑模式',
    translationKey: 'nav.darkMode'
  },
  {
    path: '/i18n',
    element: <I18nDemo />,
    name: '国际化演示',
    translationKey: 'nav.i18nDemo'
  },
  {
    path: '/auto-i18n',
    element: <AutoI18nDemo />,
    name: '自动国际化演示',
    translationKey: 'nav.autoI18nDemo'
  },
  {
    path: '/layout-demo',
    element: <LayoutDemo />,
    name: '布局演示',
    translationKey: 'nav.layoutDemo'
  },
  {
    path: '/test-layout',
    element: <TestLayout />,
    name: '布局测试',
    translationKey: 'nav.testLayout'
  },
  {
    path: '/alignment-test',
    element: <AlignmentTest />,
    name: '对齐测试',
    translationKey: 'nav.alignmentTest'
  }
]
