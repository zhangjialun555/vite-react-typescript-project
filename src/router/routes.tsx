
import type { RouteConfig } from '../types/router'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import DarkModeDemo from '../pages/DarkModeDemo'

// 样式指南相关页面
import StyleGuide from '../pages/StyleGuide'
import BasicComponents from '../pages/StyleGuide/BasicComponents'
import SimpleTest from '../pages/StyleGuide/SimpleTest'
import MinimalTest from '../pages/StyleGuide/MinimalTest'

// 布局相关页面
import LayoutDemo from '../pages/Layout/index'
import TestLayout from '../pages/Layout/TestLayout'
import AlignmentTest from '../pages/Layout/AlignmentTest'

// Ant Design相关页面
import AntdDemo from '../pages/AntDesign/index'
import AntdDarkModeDemo from '../pages/AntDesign/DarkModeDemo'
import AntdSimpleTest from '../pages/AntDesign/SimpleTest'

// 国际化相关页面
import I18nDemo from '../pages/Internationalization/index'
import AutoI18nDemo from '../pages/Internationalization/AutoI18nDemo'

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
    path: '/darkmode',
    element: <DarkModeDemo />,
    name: '暗黑模式',
    translationKey: 'nav.darkMode'
  },
  // 样式指南分类
  {
    path: '/styleguide',
    element: <StyleGuide />,
    name: '样式指南',
    translationKey: 'nav.styleGuide',
    children: [
      {
        path: '/styleguide',
        element: <BasicComponents />,
        name: '基础组件',
        translationKey: 'nav.styleGuide.basicComponents'
      },
      {
        path: '/styleguide/basic-components',
        element: <BasicComponents />,
        name: '基础组件',
        translationKey: 'nav.styleGuide.basicComponents'
      },
      {
        path: '/styleguide/simple-test',
        element: <SimpleTest />,
        name: '简单测试',
        translationKey: 'nav.styleGuide.simpleTest'
      },
      {
        path: '/styleguide/minimal-test',
        element: <MinimalTest />,
        name: '最小测试',
        translationKey: 'nav.styleGuide.minimalTest'
      }
    ]
  },
  // 布局分类
  {
    path: '/layout',
    element: <LayoutDemo />,
    name: '布局演示',
    translationKey: 'nav.layout',
    children: [
      {
        path: '/layout',
        element: <TestLayout />,
        name: '布局测试',
        translationKey: 'nav.layout.testLayout'
      },
      {
        path: '/layout/test-layout',
        element: <TestLayout />,
        name: '布局测试',
        translationKey: 'nav.layout.testLayout'
      },
      {
        path: '/layout/alignment-test',
        element: <AlignmentTest />,
        name: '对齐测试',
        translationKey: 'nav.layout.alignmentTest'
      }
    ]
  },
  // Ant Design分类
  {
    path: '/antd',
    element: <AntdDemo />,
    name: 'Ant Design',
    translationKey: 'nav.antd',
    children: [
      {
        path: '/antd',
        element: <AntdDarkModeDemo />,
        name: '暗黑模式',
        translationKey: 'nav.antd.darkMode'
      },
      {
        path: '/antd/dark-mode',
        element: <AntdDarkModeDemo />,
        name: '暗黑模式',
        translationKey: 'nav.antd.darkMode'
      },
      {
        path: '/antd/simple-test',
        element: <AntdSimpleTest />,
        name: '简单测试',
        translationKey: 'nav.antd.simpleTest'
      }
    ]
  },
  // 国际化分类
  {
    path: '/i18n',
    element: <I18nDemo />,
    name: '国际化',
    translationKey: 'nav.i18n',
    children: [
      {
        path: '/i18n',
        element: <AutoI18nDemo />,
        name: '自动国际化',
        translationKey: 'nav.i18n.autoI18n'
      },
      {
        path: '/i18n/auto-i18n',
        element: <AutoI18nDemo />,
        name: '自动国际化',
        translationKey: 'nav.i18n.autoI18n'
      }
    ]
  }
]
