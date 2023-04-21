import { Button, Form, Input } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { LoginContainer } from './style'
import CanvasBg from '@/components/canvas'

function Login() {
  const [form] = Form.useForm()
  const handleFinish = () => {
  }
  return (
    <LoginContainer>
      <div className="form">
        <div className="title">登录</div>
        <Form
          form={form}
          name="login"
          size="large"
          labelCol={{ span: 5 }}
          onFinish={handleFinish}
          autoComplete="false"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: '请输入用户名' }]}
          >
            <Input placeholder="请输入用户名" prefix={<UserOutlined />} />
          </Form.Item>
          <Form.Item name='password' rules={[{ required: true, message: '请输入用户密码' }]}>
            <Input.Password placeholder="请输入用户密码" prefix={<LockOutlined />} />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" type='primary' block>登录</Button>
          </Form.Item>
        </Form>
      </div>
      <CanvasBg/>
    </LoginContainer>
  )
}

export default Login
