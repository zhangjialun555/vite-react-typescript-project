import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { createPortal } from 'react-dom';
import { useI18n } from '../contexts/I18nContext';
import { useTheme } from '../contexts/ThemeContext';
import { useLayout } from '../contexts/LayoutContext';
import { routes } from '../router/routes';
import { useAutoTranslation } from '../utils/autoI18n';
import AutoTranslatedText from './AutoTranslatedText';
import {
  HomeOutlined,
  InfoCircleOutlined,
  ContactsOutlined,
  BulbOutlined,
  BulbFilled,
  AppstoreOutlined,
  LayoutOutlined,
  AntDesignOutlined,
  GlobalOutlined,
  MenuOutlined,
  HomeFilled,
  DownOutlined,
  UpOutlined,
  SettingOutlined,
  TranslationOutlined,
  LeftOutlined,
  RightOutlined as RightArrowOutlined
} from '@ant-design/icons';
import { Dropdown, Menu } from 'antd';
import type { MenuProps } from 'antd';

// 路由图标映射
const routeIcons: Record<string, React.ReactNode> = {
  '/': <HomeOutlined />,
  '/about': <InfoCircleOutlined />,
  '/contact': <ContactsOutlined />,
  '/darkmode': <BulbOutlined />,
  '/styleguide': <AppstoreOutlined />,
  '/layout': <LayoutOutlined />,
  '/antd': <AntDesignOutlined />,
  '/i18n': <GlobalOutlined />,
};

const Navigation: React.FC = () => {
  const { language, setLanguage, t } = useI18n();
  const { isDark, toggleTheme } = useTheme();
  const { navbarPosition, toggleNavbarPosition } = useLayout();
  const location = useLocation();
  const navigate = useNavigate();
  const { translate } = useAutoTranslation();
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };



  // 检查滚动状态
  const checkScrollStatus = () => {
    if (menuRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = menuRef.current;
      const canScrollLeft = scrollLeft > 0;
      const canScrollRight = scrollLeft < scrollWidth - clientWidth - 1;
      
      setCanScrollLeft(canScrollLeft);
      setCanScrollRight(canScrollRight);
    }
  };

  // 滚动菜单
  const scrollMenu = (direction: 'left' | 'right') => {
    if (menuRef.current) {
      const scrollAmount = 200;
      const newScrollLeft = direction === 'left' 
        ? menuRef.current.scrollLeft - scrollAmount
        : menuRef.current.scrollLeft + scrollAmount;
      
      menuRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  // 监听滚动事件
  useEffect(() => {
    const menuElement = menuRef.current;
    if (menuElement) {
      menuElement.addEventListener('scroll', checkScrollStatus);
      window.addEventListener('resize', checkScrollStatus);
      
      // 延迟检查，确保DOM完全渲染
      setTimeout(checkScrollStatus, 100);
      
      return () => {
        menuElement.removeEventListener('scroll', checkScrollStatus);
        window.removeEventListener('resize', checkScrollStatus);
      };
    }
  }, []);



  // 构建 Ant Design Menu 的 items
  const buildMenuItems = (routes: any[]): MenuProps['items'] => {
    return routes.map(route => {
      const hasChildren = route.children && route.children.length > 0;
      const icon = routeIcons[route.path] || <AppstoreOutlined />;
      
      if (hasChildren) {
        return {
          key: route.path,
          icon,
          label: <AutoTranslatedText>{route.name}</AutoTranslatedText>,
          children: buildMenuItems(route.children)
        };
      } else {
        return {
          key: route.path,
          icon,
          label: <AutoTranslatedText>{route.name}</AutoTranslatedText>,
          onClick: () => navigate(route.path)
        };
      }
    });
  };

  const menuItems = buildMenuItems(routes);

  return (
    <>

      <nav className={`navbar ${navbarPosition === 'top' ? 'navbar-top' : 'navbar-side'}`}>
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-logo">
            <HomeFilled className="logo-icon" />
            <span className="logo-text">
              <AutoTranslatedText>React App</AutoTranslatedText>
            </span>
          </Link>
        </div>

        {navbarPosition === 'top' && (
          <>
            {/* 左侧滚动按钮 */}
            <button
              onClick={() => scrollMenu('left')}
              className={`scroll-button scroll-left ${canScrollLeft ? 'visible' : ''}`}
              title={translate('向左滚动')}
            >
              <LeftOutlined />
            </button>

            {/* 菜单容器 */}
            <div className="navbar-menu-container">
              <div 
                ref={menuRef}
                className="navbar-menu"
                onScroll={checkScrollStatus}
              >
                <Menu
                  mode="horizontal"
                  selectedKeys={[location.pathname]}
                  items={menuItems}
                  className="ant-menu-horizontal"
                />
              </div>
            </div>

            {/* 右侧滚动按钮 */}
            <button
              onClick={() => scrollMenu('right')}
              className={`scroll-button scroll-right ${canScrollRight ? 'visible' : ''}`}
              title={translate('向右滚动')}
            >
              <RightArrowOutlined />
            </button>
          </>
        )}

        {navbarPosition === 'left' && (
          <div className="navbar-menu">
            <Menu
              mode="inline"
              selectedKeys={[location.pathname]}
              items={menuItems}
              className="ant-menu-inline"
            />
          </div>
        )}

        <div className="navbar-controls">
          {/* 设置按钮 */}
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item
                  key="language"
                  icon={<TranslationOutlined />}
                  onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
                >
                  {translate('切换语言')}
                </Menu.Item>
                <Menu.Item
                  key="theme"
                  icon={isDark ? <BulbFilled /> : <BulbOutlined />}
                  onClick={toggleTheme}
                >
                  {translate('切换主题')}
                </Menu.Item>
                <Menu.Item
                  key="layout"
                  icon={navbarPosition === 'top' ? <MenuOutlined /> : <HomeFilled />}
                  onClick={toggleNavbarPosition}
                >
                  {translate('切换布局')}
                </Menu.Item>
              </Menu>
            }
            trigger={['hover']}
            placement={navbarPosition === 'top' ? 'bottomRight' : 'bottomLeft'}
          >
            <button
              className="control-button settings-toggle"
              title={translate('设置')}
            >
              <SettingOutlined />
            </button>
          </Dropdown>
        </div>
              </div>
      </nav>
    </>
  );
};

export default Navigation;
