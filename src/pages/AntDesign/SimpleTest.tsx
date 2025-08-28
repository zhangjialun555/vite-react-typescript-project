import React from 'react';
import { Button, Card, Input, Space, Typography } from '../../components/AntdComponents';
import { useTheme } from '../../contexts/ThemeContext';
import { useAutoTranslation } from '../../utils/autoI18n';
import AutoTranslatedText from '../../components/AutoTranslatedText';

const { Title } = Typography;

const AntdSimpleTest: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const { translate } = useAutoTranslation();

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Title level={1} className="text-center mb-8">
        <AutoTranslatedText>Ant Design 简单测试</AutoTranslatedText>
      </Title>
      
      <Card title={translate('基础组件测试')}>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <div>
            <Title level={4}>
              {translate(`当前主题: ${isDark ? '暗黑模式' : '亮色模式'}`)}
            </Title>
            <Button type="primary" onClick={toggleTheme}>
              <AutoTranslatedText>切换主题</AutoTranslatedText>
            </Button>
          </div>
          
          <div>
            <Title level={5}>
              <AutoTranslatedText>输入框</AutoTranslatedText>
            </Title>
            <Input placeholder={translate('请输入内容')} />
          </div>
          
          <div>
            <Title level={5}>
              <AutoTranslatedText>按钮</AutoTranslatedText>
            </Title>
            <Space>
              <Button type="primary">
                <AutoTranslatedText>主要按钮</AutoTranslatedText>
              </Button>
              <Button>
                <AutoTranslatedText>默认按钮</AutoTranslatedText>
              </Button>
              <Button type="dashed">
                <AutoTranslatedText>虚线按钮</AutoTranslatedText>
              </Button>
              <Button danger>
                <AutoTranslatedText>危险按钮</AutoTranslatedText>
              </Button>
            </Space>
          </div>
        </Space>
      </Card>
    </div>
  );
};

export default AntdSimpleTest;
