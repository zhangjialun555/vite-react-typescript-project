import React, { useState } from 'react';
import { 
  Button, 
  Form, 
  Table, 
  Input, 
  message, 
  Card, 
  Space, 
  Row, 
  Col, 
  Tabs, 
  Select, 
  DatePicker, 
  Switch, 
  Slider, 
  Rate, 
  Progress, 
  Tag, 
  Avatar, 
  Badge, 
  Alert, 
  Modal, 
  Drawer,
  List,
  Descriptions,
  Collapse,
  Carousel,
  Timeline,
  Statistic,
  Skeleton,
  Spin,
  Empty,
  Image,
  Upload,
  Tree,
  Cascader,
  Transfer,
  TreeSelect,
  AutoComplete,
  Mentions,
  InputNumber,
  Checkbox,
  Radio,
  TimePicker,
  Popconfirm,
  Tooltip,
  Popover,
  Dropdown,
  Menu,
  Pagination,
  Steps,
  Affix,
  Anchor,
  Breadcrumb,
  Typography,
  Divider,
  BackTop,
  FloatButton,
  notification,
  Result,
  Watermark,
  Calendar,
  Collapse as AntdCollapse,
} from '../components/AntdComponents';
import {
  UserOutlined,
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  SearchOutlined,
  DownloadOutlined,
  UploadOutlined,
  ReloadOutlined,
  SettingOutlined,
  HomeOutlined,
  AppstoreOutlined,
  CheckOutlined,
  CloseOutlined,
  ExclamationCircleOutlined,
  InfoCircleOutlined,
  WarningOutlined,
  QuestionCircleOutlined,
  BulbOutlined,
  BulbFilled,
} from '../components/AntdComponents';
import { useTheme } from '../contexts/ThemeContext';

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;
const { RangePicker } = DatePicker;
const { Panel } = AntdCollapse;
const { Option } = Select;
const { TreeNode } = Tree;
const { Step } = Steps;
const { Link } = Anchor;
const { Item } = Menu;

interface UserData {
  key: string;
  name: string;
  email: string;
  age: number;
  status: string;
}

const AntdDarkModeDemo: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState<UserData[]>([
    {
      key: '1',
      name: '张三',
      email: 'zhangsan@example.com',
      age: 25,
      status: '活跃',
    },
    {
      key: '2',
      name: '李四',
      email: 'lisi@example.com',
      age: 30,
      status: '离线',
    },
  ]);

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Tag color={status === '活跃' ? 'green' : 'red'}>
          {status}
        </Tag>
      ),
    },
    {
      title: '操作',
      key: 'action',
      render: (_: any, record: UserData) => (
        <Space>
          <Button type="link" icon={<EditOutlined />} onClick={() => handleEdit(record)}>
            编辑
          </Button>
          <Popconfirm
            title="确定删除这个用户吗？"
            onConfirm={() => handleDelete(record.key)}
            okText="确定"
            cancelText="取消"
          >
            <Button type="link" danger icon={<DeleteOutlined />}>
              删除
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const handleSubmit = (values: any) => {
    const newUser: UserData = {
      key: Date.now().toString(),
      name: values.name,
      email: values.email,
      age: values.age,
      status: '活跃',
    };
    setDataSource([...dataSource, newUser]);
    form.resetFields();
    message.success('用户添加成功！');
  };

  const handleDelete = (key: string) => {
    setDataSource(dataSource.filter(item => item.key !== key));
    message.success('用户删除成功！');
  };

  const handleEdit = (record: UserData) => {
    message.info(`编辑用户: ${record.name}`);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const showDrawer = () => {
    setIsDrawerVisible(true);
  };

  const showNotification = () => {
    notification.success({
      message: '成功',
      description: '这是一个成功通知！',
    });
  };

  const handleLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      message.success('操作完成！');
    }, 2000);
  };

  const items = [
    {
      key: '1',
      label: '基础组件',
      children: (
        <div className="space-y-6">
          {/* 主题切换 */}
          <Card title="主题切换" className="mb-6">
            <Space align="center">
              <span>当前主题: {isDark ? '暗黑模式' : '亮色模式'}</span>
              <Button 
                type="primary" 
                icon={isDark ? <BulbOutlined /> : <BulbFilled />}
                onClick={toggleTheme}
              >
                切换主题
              </Button>
            </Space>
          </Card>

          {/* 按钮演示 */}
          <Card title="Button 按钮" className="mb-6">
            <Space wrap>
              <Button type="primary">主要按钮</Button>
              <Button>默认按钮</Button>
              <Button type="dashed">虚线按钮</Button>
              <Button type="text">文本按钮</Button>
              <Button type="link">链接按钮</Button>
              <Button danger>危险按钮</Button>
              <Button type="primary" icon={<PlusOutlined />}>
                添加
              </Button>
              <Button icon={<SearchOutlined />}>搜索</Button>
            </Space>
          </Card>

          {/* 输入框演示 */}
          <Card title="Input 输入框" className="mb-6">
            <Space direction="vertical" style={{ width: '100%' }}>
              <Input placeholder="基础输入框" />
              <Input.Password placeholder="密码输入框" />
              <TextArea rows={4} placeholder="多行文本输入框" />
              <InputNumber placeholder="数字输入框" />
              <Select placeholder="选择器" style={{ width: 200 }}>
                <Option value="option1">选项1</Option>
                <Option value="option2">选项2</Option>
                <Option value="option3">选项3</Option>
              </Select>
            </Space>
          </Card>

          {/* 开关和滑块 */}
          <Card title="Switch & Slider" className="mb-6">
            <Space direction="vertical" style={{ width: '100%' }}>
              <div>
                <Switch defaultChecked /> 开关
              </div>
              <div>
                评分: <Rate defaultValue={3} />
              </div>
              <div>
                滑块: <Slider defaultValue={30} />
              </div>
            </Space>
          </Card>
        </div>
      ),
    },
    {
      key: '2',
      label: '表单组件',
      children: (
        <Card title="Form 表单">
          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
            style={{ maxWidth: 400 }}
          >
            <Form.Item
              label="姓名"
              name="name"
              rules={[{ required: true, message: '请输入姓名！' }]}
            >
              <Input placeholder="请输入姓名" />
            </Form.Item>
            
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
            
            <Form.Item
              label="年龄"
              name="age"
              rules={[{ required: true, message: '请输入年龄！' }]}
            >
              <InputNumber placeholder="请输入年龄" style={{ width: '100%' }} />
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
                <Checkbox value="music">音乐</Checkbox>
              </Checkbox.Group>
            </Form.Item>
            
            <Form.Item>
              <Button type="primary" htmlType="submit">
                添加用户
              </Button>
            </Form.Item>
          </Form>
        </Card>
      ),
    },
    {
      key: '3',
      label: '数据展示',
      children: (
        <div className="space-y-6">
          {/* 表格演示 */}
          <Card title="Table 表格">
            <Table 
              columns={columns} 
              dataSource={dataSource}
              pagination={false}
            />
          </Card>

          {/* 卡片和列表 */}
          <Row gutter={16}>
            <Col span={12}>
              <Card title="Card 卡片" extra={<Button type="link">更多</Button>}>
                <p>这是一个卡片内容</p>
                <p>可以包含各种内容</p>
              </Card>
            </Col>
            <Col span={12}>
              <Card title="List 列表">
                <List
                  size="small"
                  dataSource={['列表项 1', '列表项 2', '列表项 3']}
                  renderItem={(item: string) => <List.Item>{item}</List.Item>}
                />
              </Card>
            </Col>
          </Row>

          {/* 统计和进度 */}
          <Row gutter={16}>
            <Col span={8}>
              <Statistic title="用户总数" value={112893} />
            </Col>
            <Col span={8}>
              <Statistic title="活跃用户" value={8846} />
            </Col>
            <Col span={8}>
              <Progress type="circle" percent={75} />
            </Col>
          </Row>

          {/* 标签和头像 */}
          <Card title="Tag & Avatar">
            <Space wrap>
              <Tag color="blue">蓝色标签</Tag>
              <Tag color="green">绿色标签</Tag>
              <Tag color="red">红色标签</Tag>
              <Tag color="orange">橙色标签</Tag>
              <Badge count={5}>
                <Avatar icon={<UserOutlined />} />
              </Badge>
              <Avatar src="https://joeschmoe.io/api/v1/random" />
            </Space>
          </Card>
        </div>
      ),
    },
    {
      key: '4',
      label: '反馈组件',
      children: (
        <div className="space-y-6">
          {/* 警告和消息 */}
          <Alert
            message="成功提示"
            description="这是一个成功提示的详细描述。"
            type="success"
            showIcon
            closable
          />

          <Alert
            message="警告提示"
            description="这是一个警告提示的详细描述。"
            type="warning"
            showIcon
          />

          <Alert
            message="错误提示"
            description="这是一个错误提示的详细描述。"
            type="error"
            showIcon
          />

          <Alert
            message="信息提示"
            description="这是一个信息提示的详细描述。"
            type="info"
            showIcon
          />

          {/* 按钮组 */}
          <Space>
            <Button onClick={() => message.success('成功消息！')}>
              显示成功消息
            </Button>
            <Button onClick={() => message.error('错误消息！')}>
              显示错误消息
            </Button>
            <Button onClick={() => message.warning('警告消息！')}>
              显示警告消息
            </Button>
            <Button onClick={() => message.info('信息消息！')}>
              显示信息消息
            </Button>
            <Button onClick={showNotification}>
              显示通知
            </Button>
            <Button onClick={showModal}>
              打开模态框
            </Button>
            <Button onClick={showDrawer}>
              打开抽屉
            </Button>
            <Button onClick={handleLoading} loading={loading}>
              加载操作
            </Button>
          </Space>

          {/* 模态框 */}
          <Modal
            title="模态框标题"
            open={isModalVisible}
            onOk={() => setIsModalVisible(false)}
            onCancel={() => setIsModalVisible(false)}
          >
            <p>这是模态框的内容</p>
            <p>可以包含各种组件</p>
          </Modal>

          {/* 抽屉 */}
          <Drawer
            title="抽屉标题"
            placement="right"
            onClose={() => setIsDrawerVisible(false)}
            open={isDrawerVisible}
          >
            <p>这是抽屉的内容</p>
            <p>可以包含各种组件</p>
          </Drawer>
        </div>
      ),
    },
    {
      key: '5',
      label: '导航组件',
      children: (
        <div className="space-y-6">
          {/* 面包屑 */}
          <Breadcrumb>
            <Breadcrumb.Item>首页</Breadcrumb.Item>
            <Breadcrumb.Item>应用</Breadcrumb.Item>
            <Breadcrumb.Item>列表</Breadcrumb.Item>
          </Breadcrumb>

          {/* 步骤条 */}
          <Steps current={1}>
            <Step title="已完成" description="这是描述信息" />
            <Step title="进行中" description="这是描述信息" />
            <Step title="待进行" description="这是描述信息" />
          </Steps>

          {/* 分页 */}
          <Pagination defaultCurrent={1} total={50} />

          {/* 时间线 */}
          <Timeline>
            <Timeline.Item>创建项目 2023-01-01</Timeline.Item>
            <Timeline.Item>系统设计 2023-01-02</Timeline.Item>
            <Timeline.Item>技术评审 2023-01-03</Timeline.Item>
            <Timeline.Item>设计评审 2023-01-04</Timeline.Item>
          </Timeline>
        </div>
      ),
    },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <Title level={1} className="text-center mb-8">
        Ant Design 暗黑模式演示
      </Title>
      
      <Alert
        message="暗黑模式说明"
        description="这个页面展示了 Ant Design 组件在暗黑模式下的表现。点击主题切换按钮可以在亮色和暗色模式之间切换。"
        type="info"
        showIcon
        className="mb-6"
      />
      
      <Tabs defaultActiveKey="1" items={items} size="large" />
      
      <BackTop />
      <FloatButton.BackTop />
    </div>
  );
};

export default AntdDarkModeDemo;
