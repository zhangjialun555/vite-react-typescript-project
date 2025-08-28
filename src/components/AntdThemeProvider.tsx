import React from 'react';
import { ConfigProvider } from '../components/AntdComponents';
import { theme } from 'antd';
import { useTheme } from '../contexts/ThemeContext';

interface AntdThemeProviderProps {
  children: React.ReactNode;
}

export const AntdThemeProvider: React.FC<AntdThemeProviderProps> = ({ children }) => {
  const { isDark } = useTheme();

  return (
    <ConfigProvider
      theme={{
        algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          colorPrimary: '#1890ff',
          borderRadius: 6,
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};
