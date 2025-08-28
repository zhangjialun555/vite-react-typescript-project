import React from 'react';
import { Button, Card, Input, Space, Typography } from '../components/AntdComponents';
import { BulbOutlined, BulbFilled } from '../components/AntdComponents';
import { useTheme } from '../contexts/ThemeContext';

const { Title } = Typography;

const AntdDarkModeTest: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="p-4">
      <Card title="Ant Design 暗黑模式测试">
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <div>
            <Title level={4}>当前主题: {isDark ? '暗黑模式' : '亮色模式'}</Title>
            <Button 
              type="primary" 
              icon={isDark ? <BulbOutlined /> : <BulbFilled />}
              onClick={toggleTheme}
            >
              切换主题
            </Button>
          </div>
          
          <div>
            <Title level={5}>输入框测试</Title>
            <Input placeholder="请输入内容" />
          </div>
          
          <div>
            <Title level={5}>按钮测试</Title>
            <Space>
              <Button type="primary">主要按钮</Button>
              <Button>默认按钮</Button>
              <Button type="dashed">虚线按钮</Button>
              <Button danger>危险按钮</Button>
            </Space>
          </div>
        </Space>
      </Card>
    </div>
  );
};

export default AntdDarkModeTest;
