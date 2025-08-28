# Ant Design 完整组件库使用指南

## 概述

本项目已配置了 Ant Design 的完整组件库，包含了所有常用的 Ant Design 组件，按需导入以减小打包体积。

## 已配置的组件

### 基础组件
- `Button` - 按钮组件
- `Divider` - 分割线组件
- `Space` - 间距组件
- `Typography` - 排版组件

### 布局组件
- `Row` - 行组件
- `Col` - 列组件
- `Grid` - 栅格组件
- `Layout` - 布局组件

### 导航组件
- `Affix` - 固钉组件
- `Anchor` - 锚点组件
- `Breadcrumb` - 面包屑组件
- `Dropdown` - 下拉菜单组件
- `Menu` - 导航菜单组件
- `Pagination` - 分页组件
- `Steps` - 步骤条组件

### 数据录入组件
- `AutoComplete` - 自动完成组件
- `Cascader` - 级联选择组件
- `Checkbox` - 多选框组件
- `DatePicker` - 日期选择器组件
- `Form` - 表单组件
- `Input` - 输入框组件
- `InputNumber` - 数字输入框组件
- `Mentions` - 提及组件
- `Radio` - 单选框组件
- `Rate` - 评分组件
- `Select` - 选择器组件
- `Slider` - 滑动输入条组件
- `Switch` - 开关组件
- `TimePicker` - 时间选择器组件
- `Transfer` - 穿梭框组件
- `TreeSelect` - 树选择组件
- `Upload` - 上传组件

### 数据展示组件
- `Avatar` - 头像组件
- `Badge` - 徽标组件
- `Calendar` - 日历组件
- `Card` - 卡片组件
- `Carousel` - 走马灯组件
- `Collapse` - 折叠面板组件
- `Descriptions` - 描述列表组件
- `Empty` - 空状态组件
- `Image` - 图片组件
- `List` - 列表组件
- `Popover` - 气泡卡片组件
- `Statistic` - 统计数值组件
- `Table` - 表格组件
- `Tabs` - 标签页组件
- `Tag` - 标签组件
- `Timeline` - 时间轴组件
- `Tooltip` - 文字提示组件
- `Tree` - 树形控件组件

### 反馈组件
- `Alert` - 警告提示组件
- `Drawer` - 抽屉组件
- `message` - 全局提示组件
- `Modal` - 对话框组件
- `notification` - 通知提醒组件
- `Popconfirm` - 气泡确认框组件
- `Progress` - 进度条组件
- `Result` - 结果组件
- `Skeleton` - 骨架屏组件
- `Spin` - 加载中组件

### 其他组件
- `BackTop` - 回到顶部组件
- `ConfigProvider` - 全局化配置组件
- `FloatButton` - 悬浮按钮组件
- `Watermark` - 水印组件

### 图标组件
- `AppstoreOutlined` - 应用商店图标
- `SettingOutlined` - 设置图标
- `UserOutlined` - 用户图标
- `HomeOutlined` - 首页图标
- `SearchOutlined` - 搜索图标
- `PlusOutlined` - 加号图标
- `EditOutlined` - 编辑图标
- `DeleteOutlined` - 删除图标
- `EyeOutlined` - 眼睛图标
- `DownloadOutlined` - 下载图标
- `UploadOutlined` - 上传图标
- `ReloadOutlined` - 重载图标
- `CloseOutlined` - 关闭图标
- `CheckOutlined` - 勾选图标
- `ExclamationCircleOutlined` - 感叹号图标
- `InfoCircleOutlined` - 信息图标
- `WarningOutlined` - 警告图标
- `QuestionCircleOutlined` - 问号图标

## 使用方法

### 1. 导入组件

```tsx
import { Button, Form, Table, Input, message, Card, Space } from '../components/AntdComponents';
```

### 2. 导入图标

```tsx
import { UserOutlined, PlusOutlined, EditOutlined } from '../components/AntdComponents';
```

### 3. 使用组件

```tsx
import React from 'react';
import { Button, Form, Input, message, Card, Space } from '../components/AntdComponents';
import { UserOutlined } from '../components/AntdComponents';

const MyComponent: React.FC = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    message.success('提交成功！');
  };

  return (
    <Card title="用户表单">
      <Form form={form} onFinish={handleSubmit}>
        <Form.Item name="name" rules={[{ required: true }]}>
          <Input placeholder="请输入姓名" prefix={<UserOutlined />} />
        </Form.Item>
        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
            <Button onClick={() => form.resetFields()}>
              重置
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Card>
  );
};
```

## 组件分类使用示例

### 基础组件

```tsx
import { Button, Space, Typography, Divider } from '../components/AntdComponents';

const { Title, Paragraph } = Typography;

<Title level={1}>标题</Title>
<Paragraph>段落文本</Paragraph>
<Divider />
<Space>
  <Button type="primary">主要按钮</Button>
  <Button>默认按钮</Button>
</Space>
```

### 布局组件

```tsx
import { Row, Col, Layout } from '../components/AntdComponents';

const { Header, Content, Footer } = Layout;

<Layout>
  <Header>头部</Header>
  <Content>
    <Row gutter={16}>
      <Col span={12}>左侧内容</Col>
      <Col span={12}>右侧内容</Col>
    </Row>
  </Content>
  <Footer>底部</Footer>
</Layout>
```

### 表单组件

```tsx
import { Form, Input, Select, DatePicker, Checkbox, Radio } from '../components/AntdComponents';

const { Option } = Select;

<Form layout="vertical">
  <Form.Item label="姓名" name="name">
    <Input placeholder="请输入姓名" />
  </Form.Item>
  <Form.Item label="性别" name="gender">
    <Radio.Group>
      <Radio value="male">男</Radio>
      <Radio value="female">女</Radio>
    </Radio.Group>
  </Form.Item>
  <Form.Item label="爱好" name="hobbies">
    <Checkbox.Group>
      <Checkbox value="reading">阅读</Checkbox>
      <Checkbox value="sports">运动</Checkbox>
    </Checkbox.Group>
  </Form.Item>
</Form>
```

### 数据展示组件

```tsx
import { Table, Card, List, Tag, Avatar, Badge } from '../components/AntdComponents';

// 表格
<Table columns={columns} dataSource={dataSource} />

// 卡片
<Card title="卡片标题" extra={<Button>更多</Button>}>
  卡片内容
</Card>

// 列表
<List
  dataSource={['项目1', '项目2', '项目3']}
  renderItem={(item) => <List.Item>{item}</List.Item>}
/>

// 标签和头像
<Space>
  <Tag color="blue">标签</Tag>
  <Badge count={5}>
    <Avatar icon={<UserOutlined />} />
  </Badge>
</Space>
```

### 反馈组件

```tsx
import { message, notification, Modal, Alert } from '../components/AntdComponents';

// 消息提示
message.success('操作成功！');

// 通知
notification.info({
  message: '通知标题',
  description: '通知内容',
});

// 模态框
Modal.confirm({
  title: '确认删除？',
  content: '删除后无法恢复',
  onOk: () => console.log('确认'),
});

// 警告
<Alert message="警告信息" type="warning" showIcon />
```

### 导航组件

```tsx
import { Menu, Breadcrumb, Steps, Pagination } from '../components/AntdComponents';

// 菜单
<Menu mode="horizontal">
  <Menu.Item key="home">首页</Menu.Item>
  <Menu.Item key="about">关于</Menu.Item>
</Menu>

// 面包屑
<Breadcrumb>
  <Breadcrumb.Item>首页</Breadcrumb.Item>
  <Breadcrumb.Item>应用</Breadcrumb.Item>
</Breadcrumb>

// 步骤条
<Steps current={1}>
  <Steps.Step title="第一步" />
  <Steps.Step title="第二步" />
  <Steps.Step title="第三步" />
</Steps>

// 分页
<Pagination total={100} />
```

## 主题配置

项目已配置了 Ant Design 的主题变量，可以在 `vite.config.ts` 中修改：

```ts
css: {
  preprocessorOptions: {
    less: {
      javascriptEnabled: true,
      modifyVars: {
        'primary-color': '#1890ff', // 主色调
        'border-radius-base': '6px', // 圆角
        'font-size-base': '14px', // 字体大小
      },
    },
  },
},
```

## 演示页面

访问 `/antd-demo` 路由可以查看所有组件的使用示例，包括：

1. **基础组件** - Button、Input、Switch、Slider、Rate
2. **表单组件** - Form、各种输入控件
3. **数据展示** - Table、Card、List、Statistic、Tag、Avatar
4. **反馈组件** - Alert、Modal、Drawer、message、notification
5. **导航组件** - Breadcrumb、Steps、Pagination、Timeline

## 注意事项

1. **按需引入**：所有组件都通过统一文件导入，便于管理
2. **类型安全**：所有组件都包含 TypeScript 类型定义
3. **主题定制**：可以通过修改 `vite.config.ts` 中的变量来自定义主题
4. **性能优化**：组件按需加载，提高应用性能
5. **图标使用**：图标组件从 `@ant-design/icons` 导入，使用方便

## 常用组合

### 表格操作

```tsx
const columns = [
  { title: '姓名', dataIndex: 'name' },
  { title: '操作', key: 'action', render: (_, record) => (
    <Space>
      <Button type="link" icon={<EditOutlined />}>编辑</Button>
      <Popconfirm title="确定删除？" onConfirm={() => handleDelete(record.id)}>
        <Button type="link" danger icon={<DeleteOutlined />}>删除</Button>
      </Popconfirm>
    </Space>
  )}
];
```

### 表单验证

```tsx
<Form.Item
  label="邮箱"
  name="email"
  rules={[
    { required: true, message: '请输入邮箱！' },
    { type: 'email', message: '请输入有效的邮箱地址！' }
  ]}
>
  <Input placeholder="请输入邮箱" />
</Form.Item>
```

### 加载状态

```tsx
<Button loading={loading} onClick={handleSubmit}>
  {loading ? '提交中...' : '提交'}
</Button>
```

现在您可以在项目中自由使用所有 Ant Design 组件了！
